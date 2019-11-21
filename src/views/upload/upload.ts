import { Vue, Component } from 'vue-property-decorator';
import AWS from 'aws-sdk';

@Component({})
export default class Upload extends Vue {

  public $refs!: {
    editArea: HTMLElement,
    colorInput: HTMLInputElement,
    fileUpload: HTMLInputElement
  };

  private albumBucketName = 'photo-about-your-day';
  private bucketRegion = 'ap-northeast-2';
  private IdentityPoolId = 'ap-northeast-2:f4375cb9-6325-43ab-8596-9a05aab09045';
  private file = null;


  private ui: {
    fontSize: number,
    textAlignHorizontal: 'center' | 'flex-start' | 'flex-end',
    textAlignVertical: 'center' | 'flex-start' | 'flex-end',
    fontWeight: number,
    italic: boolean,
    underline: boolean,
    color: string,
  } = {
    fontSize: 16,
    textAlignHorizontal: 'center',
    textAlignVertical: 'center',
    fontWeight: 400,
    italic: false,
    underline: false,
    color: '#777777',
  };

  private image: File | null = null;

  private handleFileUpload(event) {
    console.log(event);
    this.$refs.fileUpload.click();
  }
  private imgUpload(event) {
    console.log(event);
    this.file = event.target.files[0];
    AWS.config.update({
      region: this.bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: this.IdentityPoolId
      })
    });
    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: this.albumBucketName }
    });
    const photoKey = this.file.name;
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: this.albumBucketName,
        Key: photoKey,
        Body: this.file,
        ACL: 'public-read'
      }
    });
    const promise = upload.promise();
    promise.then(
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
    //
  }
}
