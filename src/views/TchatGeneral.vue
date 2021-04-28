<style>
.ion-title{
  font-size: 1.5em;
  color: #888888;
}
.ion-textarea{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
.ion-avatar{
  width: 50px;
  height: 50px;
  margin-right: 0.5em;
}
.pseudo-text{
  vertical-align: 1%;
  font-size: 1.2em;
}
.general-item{
  border-bottom: 1px solid #88888888;
  margin: 2px;
}
p{
  font-size: 1em;
  margin-top: 0.5em;
  margin-bottom: 0;
}
</style>

<template>
  <ion-page>
    <ion-content>
      <ion-list>
        <ion-list-header lines="full">
          <ion-label class="ion-title">Tchat général</ion-label>
        </ion-list-header>
        <ion-item class="general-item">
          <ion-avatar class="ion-avatar"><img src="http://www.non-stop-zapping.com/sites/non-stop-zapping.com/files/styles/article/public/styles/paysage/public/images/2016/10/0006794_gal_005_med.jpg?itok=UFNvBoVN" /></ion-avatar>
          <ion-text>
            <ion-text color="secondary" class="pseudo-text">Dolorès Koulechov</ion-text>
            <p>Comment est votre blanquette ?</p>
          </ion-text>
        </ion-item>
        <ion-item class="general-item">
          <ion-avatar class="ion-avatar"><img src="https://www.aveleyman.com/Gallery/2017/D/57506-29968.jpg" /></ion-avatar>
          <ion-text>
            <ion-text color="danger" class="pseudo-text">Hubert Bonisseur de la Bath</ion-text>
            <p>Elle est... bonne.</p>
          </ion-text>
        </ion-item>
      </ion-list>
      <form action="#" @submit.prevent="onSubmit" @keypress.enter="onSubmit">
        <ion-item class="ion-textarea">
            <ion-textarea v-model="content" placeholder="Message texte"></ion-textarea>
            <ion-button type="submit" size="large" fill="clear">
              <ion-icon :icon="paperPlaneOutline" />
            </ion-button>
        </ion-item>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonItem, IonList, IonLabel, IonAvatar, IonTextarea, IonIcon, IonButton, IonText } from '@ionic/vue';
import { paperPlaneOutline } from 'ionicons/icons';
import firebase from 'firebase'

export default  {
  name: 'Tab1',
  components: { IonContent, IonPage, IonItem, IonList, IonLabel, IonAvatar, IonTextarea, IonIcon, IonButton, IonText },
  setup: function(){
    return {
      paperPlaneOutline
    }
  },
  data: function (){
    return {
      // le contenu du message
      content: '',
      // les messages
      messages: [],
      // les utilisateurs
      utilisateurs: []
    }
  },
  created(){
    const database = firebase.database();
    const messages = database.ref('/').child('messages');
  },
  methods: {
    async saveMessage(auteurId, content, date, destinataireId){
      // A post entry.
      const postData = {
        'auteur_id': auteurId,
        'content': content,
        'date': date,
        'destinataire_id': destinataireId
      };

      // Get a key for a new Post.
      return firebase.database().ref('/').child('messages').push(postData);
    },

    // Enregistrement d'un nouveau message
    onSubmit() {
      this.saveMessage('', this.content, new Date(), '');
    }
  },
}
</script>