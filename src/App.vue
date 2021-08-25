<template>
  <div id="app">
    <Navbar/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue'

export default{
  components: {
    Navbar,
    Footer,
  },
  data(){
    return{
      
    }
  }
}


</script>


<style lang="scss">
@import '@/styles/global.scss';
@import '@/styles/framework.scss';

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

</style>
