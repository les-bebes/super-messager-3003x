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
          <form action="#" @submit="submit($event)">
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
  methods: {
    submit(event) {
      this.login()

      if (event) {
        event.preventDefault()
      }
      return false
    },
    async login() {
      fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        })
      }).then(value => {
        this.store.commit('updateUser', {
          token: value,
          user: this.username
        })

      }).catch(console.log)

      this.store.commit('updateUser', {
        token: "dpovlknfdglkvjndjksfnkedsnfkjndfgjk",
        user: this.username
      })
      this.$router.push('/tchat-general')
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