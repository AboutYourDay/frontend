// file created at 2019. 11. 12.
// Auto-generated files upload.ts

import { Vue, Component, Watch } from 'vue-property-decorator';
import _ from 'lodash';
import AWS from 'aws-sdk';

@Component({})
export default class Upload extends Vue {

  public $refs!: {
    editArea: HTMLElement,
    colorInput: HTMLInputElement,
    fileUpload: HTMLInputElement
  };

  private albumBucketName = 'photo-about-your-day';
  private bucketRegion: string = 'ap-northeast-2';
  private identityPoolId: string = 'ap-northeast-2:f4375cb9-6325-43ab-8596-9a05aab09045';
  private file: File | null = null;
  private ui: {
    backgroundUrl: URL,
    fontSize: number,
    textAlignHorizontal: 'center' | 'flex-start' | 'flex-end',
    textAlignVertical: 'center' | 'flex-start' | 'flex-end',
    fontWeight: number,
    italic: boolean,
    underline: boolean,
    color: string,
  } = {
    backgroundUrl: new URL('https://photo-about-your-day.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%85%E1%85%AD_%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5_00.png'),
    fontSize: 16,
    textAlignHorizontal: 'center',
    textAlignVertical: 'center',
    fontWeight: 400,
    italic: false,
    underline: false,
    color: '#777777',
  };

  private image: File | null = null;

  private initAWS() {
    AWS.config.update({
      region: this.bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: this.identityPoolId
      })
    });
    // const s3 = new AWS.S3({
    //   apiVersion: '2006-03-01',
    //   params: { Bucket: this.albumBucketName }
    // });
  }
  private handleFileUpload() {
    this.$refs.fileUpload.click();
  }
  private imgUpload(event: Event) {
    console.log(event);
    // @ts-ignore
    this.file = event.target.files[0];
    if (this.file === null) {
      return;
    }
    console.warn(this.file);

    const upload: AWS.S3.ManagedUpload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: this.albumBucketName,
        Key: this.file.name,
        Body: this.file,
        ACL: 'public-read'
      }
    });

    upload.promise()
    .then(
        (data) => {
          alert('Successfully uploaded photo.');
          console.log(data);
        },
        (err) => {
          return alert('There was an error uploading your photo: ' + err.message);
        }
    );
   }
  private alignButton(pos: 'flex-start' | 'center' | 'flex-end') {
    this.ui.textAlignHorizontal = pos;
  }
  private verticalButton(pos: 'flex-start' | 'center' | 'flex-end') {
    this.ui.textAlignVertical = pos;
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
    this.$alertWindow.on({title: 'title', content: 'content ??', hasCancel: true});
  }
}
