<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Messages privés</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-item>
          <ion-avatar item-start>
            <img src="https://www.pokepedia.fr/images/e/e7/Pikachu-RFVF.png" />
          </ion-avatar>
          <ion-grid>
            <ion-row>
              <ion-col>
                <h4>Pikachu</h4>
              </ion-col>
              <ion-col class="ion-text-right">
                <span class="date">06/05/2021</span>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-card-content>
          <p>Yo mec</p>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-item>
          <ion-avatar item-start>
            <img
              src="https://www.pokepedia.fr/images/4/4d/M%C3%A9lof%C3%A9e-RFVF.png"
            />
          </ion-avatar>
          <ion-grid>
            <ion-row>
              <ion-col>
                <h4>Mélofee</h4>
              </ion-col>
              <ion-col class="ion-text-right">
                <span class="date">06/05/2021</span>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-card-content>
          <p>yo pikachu</p>
        </ion-card-content>
      </ion-card>
      <ion-item class="ion-textarea">
        <ion-textarea placeholder="Message texte"></ion-textarea>
        <ion-button size="large" fill="clear">
          <ion-icon :icon="paperPlaneOutline" />
        </ion-button>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { paperPlaneOutline } from "ionicons/icons";

import {
  IonCard,
  IonCardContent,
  IonItem,
  IonAvatar,
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

export default {
  name: "Tab2",
  components: {
    IonAvatar,
    IonCard,
    IonCardContent,
    IonItem,
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup: function () {
    return {
      paperPlaneOutline,
    };
  },
};
</script>


<style>
.date {
  font-size: 12px;
  opacity: 0.5;
}
.social-cards ion-col {
  padding: 0;
}
.ion-textarea{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}

</style>