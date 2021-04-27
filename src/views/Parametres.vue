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
          <ion-toggle checked @click="onToggle($event.target.value)" ></ion-toggle>
        </ion-item>

        <ion-item>
          Notifications
          <ion-toggle checked ></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" >Modifier votre pseudo</ion-label>
        <ion-input placeholder="ex. D'artagnan"></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-label position="stacked" >Modifier son mot de passe</ion-label>
          <ion-input placeholder="ex. Az€rTy123!"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" >Confirmer le mot de passe</ion-label>
          <ion-input placeholder="ex. La même chose"></ion-input>
        </ion-item>

        <ion-item>
          <ion-button>Confirmer</ion-button>
        </ion-item>

        <ion-item>
          <ion-button color="dark">Déconnexion</ion-button>
        </ion-item>
        
        <ion-item>
          <ion-button color="danger"> Suppression du compte</ion-button>
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
      isDark: true
    }
  },
  created() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((e) => this.checkToggle(e.matches));

    this.checkToggle(prefersDark.matches);
  },
  methods: {
    onToggle(value) {
      this.isDark = !this.isDark;
      document.body.classList.toggle('dark', this.isDark);
      console.log(this.isDark);
      console.log(value);

      // document.body.classList.toggle('dark', ev.detail.checked);
    },
    // Called by the media query to check/uncheck the toggle
    checkToggle(shouldCheck) {
      // toggle.checked = shouldCheck;
    }
    
  }
}
</script>

<style scoped>
ion-input {
}
</style>