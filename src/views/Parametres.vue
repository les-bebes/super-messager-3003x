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
            Dark Thème
          <ion-toggle checked ></ion-toggle>
        </ion-item>

        <ion-item>
          Notifications : 
          <ion-toggle checked ></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Pseudo :</ion-label>
        <ion-input></ion-input>
        </ion-item>
        
        <ion-item>
          Modifier son mot de passe : 
          <ion-input></ion-input>
        </ion-item>

        <ion-item>
          Confirmer le mot de passe : 
          <ion-input></ion-input>
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

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>


<style scoped>
ion-input {
  background: #333;
}
</style>
