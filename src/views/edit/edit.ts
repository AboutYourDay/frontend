// file created at 2019. 11. 12.
// Auto-generated files edit.ts

import { Vue, Component, Watch } from 'vue-property-decorator';
import _ from 'lodash';
import AWS from 'aws-sdk';
import uuid from 'uuid/v4';
import { DiaryApi, UserApi } from '@/lib/api';

@Component({})
export default class Edit extends Vue {

  public $refs!: {
    editArea: HTMLElement,
    colorInput: HTMLInputElement,
    fileUpload: HTMLInputElement
  };

  private awsData: {
    albumBucketName: string,
    bucketRegion: string,
    identityPoolId: string,
  } = {
    albumBucketName: 'photo-about-your-day',
    bucketRegion: 'ap-northeast-2',
    identityPoolId: 'ap-northeast-2:f4375cb9-6325-43ab-8596-9a05aab09045',
  };
  private file: File | null = null;

  private ui: {
    backgroundURL: string,
    fontSize: number,
    fontWeight: number,
    italic: boolean,
    underline: boolean,
    color: string,
    emotion: string,
  } = {
    backgroundURL: '',
    fontSize: 32,
    fontWeight: 400,
    italic: false,
    underline: false,
    color: '#777777',
    emotion: 'none'
  };

  private image: HTMLImageElement | null = null;
  private uploadedImageUrls: string[] = [];
  private emotions =
    [{icon: 'smile', value: 'happy', click: false}, {icon: 'meh', value: 'normal', click: false}, {icon: 'frown', value: 'sad', click: false}];
  get emotionIcon() {
    const data = _.filter(this.emotions, emo => emo.value === this.ui.emotion);
    if (data.length === 0) {
      return 'none';
    }
    console.log('edit', data);
    return data[0].icon;
    return _.filter(this.emotions, emo => emo.value === this.ui.emotion)[0].icon;
  }

  get filteredImages() {
    return _(this.uploadedImageUrls).filter(i => i !== '').union().value();
  }


  private initAWS() {
    AWS.config.update({
      region: this.awsData.bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: this.awsData.identityPoolId
      })
    });
    // const s3 = new AWS.S3({
    //   apiVersion: '2006-03-01',
    //   params: { Bucket: this.albumBucketName }
    // });
  }
  private setKeyEvent() {
    this.$refs.editArea.addEventListener('keydown', (evt) => {
      if (evt.which === 13) {
        evt.preventDefault();
        this.$refs.editArea.innerText += '\n';
        this.$refs.editArea.innerText += '\n';
        const range = document.createRange();
        const sel = window.getSelection();
        if (_.isNil(sel)) {
          return;
        }
        range.setStart(this.$refs.editArea.childNodes[this.$refs.editArea.childNodes.length - 1], 0);
        range.collapse(true);
        // @ts-ignore
        sel.removeAllRanges();
        // @ts-ignore
        sel.addRange(range);
      }
    });
  }
  private uploadTrigger() {
    this.$refs.fileUpload.click();
  }
  private async uploadImage(event: Event) {
    // @ts-ignore
    this.file = event.target.files[0];
    if (_.isNil(this.file)) {
      return;
    }
    this.$loading.on('이미지를 업로드 중입니다...', 0.5);
    console.log(this.file);
    const upload: AWS.S3.ManagedUpload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: this.awsData.albumBucketName,
        Key: `${uuid()}-${this.file.name}`,
        Body: this.file,
        ACL: 'public-read'
      }
    });
    try {
      const data = await upload.promise();
      console.log('success file upload!', data);
      this.ui.backgroundURL = data.Location;
      this.$loading.changeText('이미지를 적용 중입니다...');

      this.image = new Image();
      this.image.src = data.Location;

      this.uploadedImageUrls.push(data.Location);
      await UserApi.addImageURL(data.Location);
      setTimeout(() => {
        this.$loading.off();
      }, 2000);
    } catch (e) {
      console.error(e);
      this.$loading.off();
    }

   }
  private alignButton(pos: 'flex-start' | 'center' | 'flex-end') {
    // this.ui.alignHorizontal = pos;
    this.$refs.editArea.style.justifyContent = pos;
  }
  private verticalButton(pos: 'flex-start' | 'center' | 'flex-end') {
    // this.ui.alignVertical = pos;
    this.$refs.editArea.style.alignItems = pos;
  }
  private fontSizeButton(change: 'add' | 'remove') {
    if (change === 'remove' && this.ui.fontSize < 10) {
      return;
    }
    change === 'add' ? this.ui.fontSize += 10 : this.ui.fontSize -= 10;
  }
  private fontWeightButton(change: 'add' | 'remove') {
    if (change === 'remove' && this.ui.fontWeight <= 200) {
      return;
    }
    if (change === 'add' && this.ui.fontWeight >= 800) {
      return;
    }
    change === 'add' ? this.ui.fontWeight += 100 : this.ui.fontWeight -= 100;
  }
  private onChangeColor() {
    this.ui.color = this.$refs.colorInput.value;
  }
  private clickEmotion(emo: string) {
    if (this.ui.emotion === emo) {
      this.ui.emotion = 'none';
      return;
    }
    this.ui.emotion = emo;
  }
  private async getUserData() {
    this.$loading.on();
    try {
      const res = (await UserApi.getUser()).result;
      this.uploadedImageUrls = res.imageURLs;
    } catch (e) {
      // TODO error 처리
      console.log(e);
    }
    this.$loading.off();
  }
  private setBackgroundImage(imageURL: string) {
    this.ui.backgroundURL = imageURL;
  }
  private async getDiary() {
    try {
      const result = await DiaryApi.getDiary(this.$route.params.id);
      if (!result.success) {
        await this.$alertWindow.on({title: '접근 에러', content: '잘못된 접근입니다.', hasCancel: false});
        this.$router.go(-1);
        return;
      }
      const data = result.result;
      this.$refs.editArea.innerText = data.textAttr.text;
      this.ui.backgroundURL = data.imageAttr.imageURL;
      this.ui.fontSize = data.textAttr.fontSize;
      this.ui.fontWeight = data.textAttr.fontWeight;
      this.ui.italic = data.textAttr.italic;
      this.ui.underline = data.textAttr.underline;
      this.ui.color = data.textAttr.color;
      this.ui.emotion = data.emotion;
      this.$refs.editArea.style.justifyContent = data.textAttr.alignHorizontal;
      this.$refs.editArea.style.alignItems = data.textAttr.alignVertical;
    } catch (e) {
      // TODO error 처리
    }
  }
  private async updateDiary() {
    try {
      await this.$alertWindow.on({title: '게시물 업로드', content: '게시물을 업로드 하시겠습니까?', hasCancel: true});
      this.$loading.on('게시물을 업로드 중입니다..', 0.6);
      const style = this.$refs.editArea.style;
      const res = await DiaryApi.updateDiary(this.$route.params.id, {
        imageAttr: {
          width: this.image ? this.image.width : 0,
          height: this.image ? this.image.height : 0,
          imageURL: this.ui.backgroundURL,
        },
        textAttr: {
          text: this.$refs.editArea.innerText,
          alignHorizontal: style.justifyContent ? style.justifyContent : 'center',
          alignVertical: style.alignItems ? style.alignItems : 'center',
          fontSize: this.ui.fontSize,
          fontWeight: this.ui.fontWeight,
          italic: this.ui.italic,
          underline: this.ui.underline,
          color: this.ui.color
          },
        emotion: this.ui.emotion
      });
    } catch (e) {
      // TODO error 처리
    }
    setTimeout(() => this.$loading.off(), 1400);
  }

  private async mounted() {
    this.$loading.on();
    this.setKeyEvent();
    this.$store.commit('addSignedTrigger', this.getUserData);
    this.$store.commit('addSignedTrigger', this.getDiary);
    this.initAWS();
    setTimeout(() => {
      this.$loading.off();
    }, 2000);
  }
}
