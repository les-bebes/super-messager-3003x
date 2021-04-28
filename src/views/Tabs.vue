<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom" v-if="displayTabs">
        <ion-tab-button tab="tab1" href="/tchat-general">
          <ion-icon :icon="people" />
          <ion-label>Tchat général</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/messages-prives">
          <ion-icon :icon="person" />
          <ion-label>Messages privés</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/parametres">
          <ion-icon :icon="cog" />
          <ion-label>Paramètres</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { cog, person, people } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  data: () => {
    return {
      pageHide: [
        'login',
        'register'
      ]
    }
  },
  setup() {
    return {
      cog,
      person,
      people,
    }
  },
  computed: {
    displayTabs: function () {
      return !this.pageHide.includes(this.$router.currentRoute.value.name)
    }
  }
}
</script>