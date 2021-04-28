<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Connexion</ion-title>
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
          <form action="#" @submit="submit" @keypress.enter="submit">
            <ion-item>
              <ion-label position="stacked">Nom d'utilisateur</ion-label>
              <ion-input placeholder="Nom d'utilisateur" v-model="username" required></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Mot de passe</ion-label>
              <ion-input placeholder="Mot de passe" type="password" v-model="password" required></ion-input>
            </ion-item>

            <div class="ion-text-center">
              <ion-button type="submit" class="ion-margin-top">Se connecter</ion-button>
            </div>
          </form>
          <div class="ion-text-center ion-margin-top">
            <router-link to="/inscription">
              Vous n'avez pas de compte ?
              Inscrivez-vous !
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
import { useStore } from 'vuex';
import { key } from '@/store';
import firebase from "firebase";

export default {
  name: "Connexion",
  components: { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonItem, IonLabel },
  data: () => {
    return {
      store: null,
      username: null,
      password: null,
    }
  },
  setup() {
    return {
      person,
    }
  },
  created() {
    this.store = useStore(key)
  },
  activated() {
    firebase.auth().signOut()
  },
  methods: {
    submit(event) {
      this.login()

      if (event) {
        event.preventDefault()
      }
      return false
    },
    async login() {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(userCredential => {
        console.log(userCredential)

        this.store.commit('updateUser', userCredential.user)
        this.$router.push({name: 'general'})
      }).catch(reason => {
        // TODO Alerte
        console.log(reason);
      })
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