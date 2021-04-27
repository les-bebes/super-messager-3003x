<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inscription</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card class="middle">
        <ion-card-header>
          <ion-card-title class="ion-text-center">
            <ion-icon :icon="person" class="icon-person" />
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <form action="#">
            <ion-item>
              <ion-label position="stacked">Pseudo</ion-label>
              <ion-input placeholder="ex. Le_BG_du_29" v-model="pseudo" required />
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Adresse email</ion-label>
              <ion-input placeholder="ex. lebgdu29@supermail.com" v-model="email" required />
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Mot de passe</ion-label>
              <ion-input placeholder="ex. Az€rTy123!" v-model="password" required />
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Confirmer le mot de passe</ion-label>
              <ion-input placeholder="La même chose du coup..." v-model="confirm" required />
            </ion-item>

            <div class="ion-text-center">
              <ion-button type="submit" class="ion-margin-top">S'inscrire</ion-button>
            </div>
          </form>

          <div class="ion-text-center ion-margin-top">
            <router-link to="/connexion">
              Vous avez déjà compte ?
              Connectez-vous !
            </router-link>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonItem, IonLabel } from '@ionic/vue';
import { person } from 'ionicons/icons';

export default {
  name: "Inscription",
  components: { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonItem, IonLabel },
  data: () => {
    return {
      pseudo: null,
      email: null,
      password: null,
      confirm: null
    }
  },
  setup() {
    return {
      person,
    }
  }
}
</script>

<style scoped>
  .icon-person {
    font-size: 100px;
  }
  .middle {
    transform: translateY(10%);
  }
</style>