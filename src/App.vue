<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  data: () => {
    return {
      authBypassRoutes: [
        'login',
        'register'
      ]
    }
  },
  created() {
    if (!this.isAuthenticated && !this.authBypassRoutes.includes(this.route())) {
      this.$router.push({name: 'login'})
    }
  },
  methods: {
    route() {
      const rt = this.$router.currentRoute.value

      if (rt.name) {
        return rt.name.toString()
      }

      return 'unnamed route'
    }
  }
});
</script>