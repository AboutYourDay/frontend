
import { Vue, Component } from 'vue-property-decorator';
import {auth} from '@/lib/firebase';
@Component({})
export default class Main extends Vue {
  private clickStart() {
    if (this.$store.getters.user) {
      this.$router.push('/upload');
    } else {
      auth.signIn();
    }
  }
}
