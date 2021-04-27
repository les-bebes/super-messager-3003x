<style>
.ion-label{
  padding-left: 1em;
}
.ion-input{
  border: 1px solid #ffb0b0;
  border-radius: 4px;
  position: fixed;
  bottom: 60px;
  width: 100%;
}
</style>

<template>
  <ion-page>
    <ion-content>
      <ion-list>
        <ion-list-header lines="full">
          <ion-label>SuP€r-M€$$@g3R-3003x</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-avatar class="ion-avatar"><img src="https://www.aveleyman.com/Gallery/2017/D/57506-29968.jpg" /></ion-avatar>
          <ion-label class="ion-label">SuperTesteur</ion-label>
          <ion-text>Comment est votre blanquette ?</ion-text>
        </ion-item>
        <ion-item>
          <ion-avatar class="ion-avatar"><img src="https://www.aveleyman.com/Gallery/2017/D/57506-29968.jpg" /></ion-avatar>
          <ion-label class="ion-label">SuperTesteur</ion-label>
          <ion-text>Comment est votre blanquette ?</ion-text>
        </ion-item>
      </ion-list>
      <ion-item class="ion-input">
        <ion-input placeholder="Message texte"></ion-input>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonItem, IonList, IonLabel, IonAvatar, IonInput } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonContent, IonPage, IonItem, IonList, IonLabel, IonAvatar, IonInput },
  data: function (){
    return {
      // les messages
      messages: [],
      // les utilisateurs
      utilisateurs: []
    }
  },
  methods: {
  }
}
</script>