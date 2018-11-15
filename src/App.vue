<template>
  <v-app id="inspire">
    <v-content>
        <v-layout v-show="view_all">
          <v-flex text-xs-center>
            <vue-topprogress ref="topProgress" :height="10" color="#00A6C4"></vue-topprogress>
            <transition name="fade">
              <!-- <div class="app"> -->
                <router-view v-scroll="onScroll"></router-view>
              <!-- </div> -->
            </transition>
            </v-card-text>
              <v-card-text class="class_button_fixed">
                <v-fab-transition >
                  <v-btn
                  @click="action_button_fixed"
                    v-show="show_button"
                    class="otra_class"
                    color="azul_claro"
                    dark
                    fixed
                    top
                    right
                    fab
                  >
                    <v-icon>fas fa-angle-up</v-icon>
                  </v-btn>
                </v-fab-transition>
              </v-card-text>
          </v-flex>
       </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import {EventBus} from './main'
// import Loader from './components/Templates/Loader'
import animateScrollTo from 'animated-scroll-to'
import { vueTopprogress } from 'vue-top-progress'
export default {
  name: 'App',
  components:{
    // 'Loader':Loader,
    vueTopprogress
  },
  mounted () {
    this.$router.beforeEach((to,from,next)=>{
      this.show_button=false
      this.$refs.topProgress.start()
      next()
    })
    this.$router.afterEach((to,from,next)=>{
      setTimeout(()=>{
        this.$refs.topProgress.done()
      }, 1000);
    })
 
    // Use setTimeout for demo
  },
  created () {
  },
  data () {
    return {
      view_all:true,
      show_button:false,
      offsetTop:0
    }
  },
  methods:{
    action_button_fixed(){
        animateScrollTo(0);
    },
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      if(this.offsetTop>=0){
          this.show_button=false
        }
        if(this.offsetTop>200){
          this.show_button=true
        }
    },
  },
  computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '220px'
        case 'sm': return '400px'
        case 'md': return '500px'
        case 'lg': return '600px'
        case 'xl': return '800px'
      }
    }
  }
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
 
.fade-enter-active {
  transition-delay: .25s;
}
 
.fade-enter, .fade-leave-active {
  opacity: 0
}
.class_button_fixed{
    height: 100px; 
    position: fixed;
    z-index: 9999;
  }
  .otra_class{
    margin-top: 85vh;
  }
</style>
