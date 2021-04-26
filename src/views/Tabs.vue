<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
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

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { cog, person, people } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      cog,
      person,
      people,
    }
  }
}
</script>