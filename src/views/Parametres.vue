<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Paramètres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
      <ion-list>

        <ion-item>
            Thème obscur
          <ion-toggle checked @click="onToggle()" ></ion-toggle>
        </ion-item>

        <ion-item>
          Notifications
          <ion-toggle checked @click="onNotif()"  ></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" >Modifiez votre pseudo</ion-label>
        <ion-input placeholder="ex. D'artagnan"></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-label position="stacked" >Nouveau mot de passe</ion-label>
          <ion-input type="password" placeholder="ex. Az€rTy123!"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" >Confirmez le mot de passe</ion-label>
          <ion-input type="password" placeholder="ex. La même chose"></ion-input>
        </ion-item>

        <ion-item>
          <ion-button @click="saveUser()">Enregistrer</ion-button>
        </ion-item>

        <ion-item>
          <router-link to="/connexion">
            <ion-button color="dark">Déconnexion</ion-button>
          </router-link>
        </ion-item>
        
        <ion-item>
          <ion-button @click="deleteUser()" color="danger">Suppression du compte</ion-button>
        </ion-item>

      </ion-list>
    
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data: () => {
    return {
      isDark: true,
      notifOn: true,
      username: null,
      password: null,
    }
  },
  created() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // // Listen for changes to the prefers-color-scheme media query
    // prefersDark.addListener((e) => this.checkToggle(e.matches));

    // this.checkToggle(prefersDark.matches);
  },
  methods: {
    onNotif() {
      this.notifOn = !this.notifOn;
      if(this.notifOn) {
        console.log("notifs activées");
      }
      else {        
        console.log("notifs désactivées");
      }
      // document.body.classList.toggle('dark', this.isDark);
    },
    onToggle() {
      this.isDark = !this.isDark;
      document.body.classList.toggle('dark', this.isDark);
    },
    decoUser() {
      console.log("deco");
    },
    deleteUser() {
      console.log("delete");
    },
    saveUser() {
      console.log("save");
    },
  }
}
</script>

<style scoped>
/* ion-item {
  border-bottom: 1px solid #888;
} */
body.dark ion-item {
  border-bottom: 1px solid #444;
}
item-inner {
  border-bottom: 1px solid #444;
}
</style>