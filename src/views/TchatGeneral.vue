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
        <ion-item class="general-item" v-for="(message, index) in messages" :key="index">
          <ion-avatar class="ion-avatar"><img :src="utilisateurs[message.auteur_id].avatar" /></ion-avatar>
          <ion-text>
            <ion-text color="secondary" class="pseudo-text">{{ utilisateurs[message.auteur_id].pseudo }}</ion-text>
            <p>{{ message.content }}</p>
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
      utilisateurs: {}
    }
  },
  created() {

    // recuperation des utilisateurs
    firebase.database().ref('/').child('utilisateurs').get().then((value)=>{
      this.utilisateurs = value.val();

      // recuperation des messages
      firebase.database().ref('/').child('messages').get().then((snapshotMessage)=>{
        const messages = [];
        snapshotMessage.forEach(childSnapshot => {
          messages.push(childSnapshot.val())
        })
        this.messages = messages

        // recuperation des messages en temps réel
        firebase.database().ref('/messages').limitToLast(0).on('child_added', (snapshot)=>{
          this.messages.push(snapshot.val())
        })
      }).catch(console.log)
    }).catch(console.log)
  },
  methods: {
    async saveMessage(auteurId, content, date){
      console.log(this.messages)

      // A post entry.
      const postData = {
        'auteur_id': auteurId,
        'content': content,
        'date': date,
        'type': 'general'
      };

      // Get a key for a new Post.
      return firebase.database().ref('/').child('messages').push(postData).then(()=>{
        console.log("message envoyé")
      }).catch((reason)=>{
        console.log(reason)
      });
    },

    // Enregistrement d'un nouveau message
    onSubmit() {
      this.saveMessage(firebase.auth().currentUser.uid, this.content, new Date());
    },
  },
}
</script>