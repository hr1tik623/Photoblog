<template>
  <v-app>
   
    <v-toolbar dark ><v-toolbar-side-icon @click.stop="sideNav=!sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="#toolbartitle font-weight-light" ><router-link to="/" tag="span" style="cursor:pointer" ><v-icon left>camera_alt</v-icon>HSPhotography</router-link></v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        
        <v-btn flat v-for="item in menuItems " :key="item.title":to="item.link">
          <v-icon left >{{item.icons}}</v-icon>{{item.title}}</v-btn>
          <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          Logout</v-btn>

      </v-toolbar-items>
    </v-toolbar>
     <v-navigation-drawer temporary v-model="sideNav" >
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link"><v-list-tile-action><v-icon>{{item.icons}}</v-icon dark></v-list-tile-action><v-list-tile-content>{{item.title}}</v-list-tile-content></v-list-tile>
        <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <main><router-view></router-view>
    <app-footer></app-footer></main>
      
  </v-app>
  
</template>

<script>
import footer from './components/footer.vue';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';
  export default {
      components: {
        
        'app-footer':footer

    },
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icons: 'face', title: 'Sign up', link: '/signup'},
          {icons: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icons: 'image', title: 'View snaps', link: '/contests'},
            {icons: 'add_to_queue', title: 'Create album', link: '/contests/new'},
            {icons: 'account_box', title: 'About me', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }
  
</script
 <style  scoped>
#toolbartitle{
  font:futura;
}
</style>

