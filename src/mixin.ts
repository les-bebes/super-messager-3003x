import firebase from "firebase";
import {alertController} from "@ionic/vue";

const mixin = {
  computed: {
    isAuthenticated: () => {
      return firebase.auth().currentUser !== null
    },
  },
  methods: {
    async alertPop(title: string, message: string) {
      const alert = await alertController
        .create({
          header: title,
          message: message,
          buttons: ['OK'],
        });

      await alert.present();
    }
  }
}

export default mixin