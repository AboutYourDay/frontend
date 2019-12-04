// file created at 2019. 11. 12.
// Auto-generated files upload.ts

import { Vue, Component, Watch } from 'vue-property-decorator';
import _ from 'lodash';
import AWS from 'aws-sdk';
import uuid from 'uuid/v4';

@Component({})
export default class Upload extends Vue {

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
    alignHorizontal: 'center' | 'flex-start' | 'flex-end',
    alignVertical: 'center' | 'flex-start' | 'flex-end',
    fontWeight: number,
    italic: boolean,
    underline: boolean,
    color: string,
  } = {
    backgroundURL: '',
    fontSize: 16,
    alignHorizontal: 'center',
    alignVertical: 'center',
    fontWeight: 400,
    italic: false,
    underline: false,
    color: '#777777',
  };

  private image: File | null = null;

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
        Key: uuid(),
        Body: this.file,
        ACL: 'public-read'
      }
    });
    try {
      const data = await upload.promise();
      console.log('success file upload!', data);
      this.ui.backgroundURL = data.Location;
      // TODO
      // 1. server api => DB (user)에 data.Location 저장
      // 2. list 추가
      this.$loading.changeText('이미지를 적용 중입니다...');
      setTimeout(() => {
        this.$loading.off();
      }, 2000);
    } catch (e) {
      console.error(e);
      this.$loading.off();
    }

   }
  private alignButton(pos: 'flex-start' | 'center' | 'flex-end') {
    this.ui.alignHorizontal = pos;
  }
  private verticalButton(pos: 'flex-start' | 'center' | 'flex-end') {
    this.ui.alignVertical = pos;
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
  private mounted() {
    this.initAWS();
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
}
