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
          <ion-toggle checked ></ion-toggle>
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
          <ion-button>Enregistrer</ion-button>
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
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // // Listen for changes to the prefers-color-scheme media query
    // prefersDark.addListener((e) => this.checkToggle(e.matches));

    // this.checkToggle(prefersDark.matches);
  },
  methods: {
    onToggle() {
      this.isDark = !this.isDark;
      document.body.classList.toggle('dark', this.isDark);

    },
    
  }
}
</script>

<style scoped>

</style>