<template>
  <div>
    <div class="hero">
      <div class="container">
        <div class="row">
         <HeroText/>
        </div>
      </div>
    </div>
    <About/>
    <div class="banner">
    </div>

  </div>
 
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue';
import HeroText from '@/components/HeroText.vue'

export default {
  name: 'Home',
  components: {
    About,
    HeroText
  }
}
</script>

<style lang="scss" scoped>

.hero{
  margin-top: 85px;
  background-image: url('../assets/img/hero_banner.jpg');
  min-height: 600px;
  width:100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.banner{
  background-image: url('../assets/img/inside_bar.jpg');
  min-height: 500px;
  width:100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
