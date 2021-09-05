<template>
  <section>

    <!-- HERO -->
    <div class="hero" >
      <div class="container">
        <div class="row center-xs around-md">
          <!-- Hero text -->
          <HeroText/>
          <!-- Scroll Buttons -->
          <div class="scroll-buttons col-xs-12 col-md-6 middle-xs bottom-md">
            <button v-scroll-to="'#about'">
              <div class="icon"><i class="fas fa-glass-martini"></i></div><span>About 2100</span></button>
            <button v-scroll-to="'#contacts'"><div class="icon"><i class="far fa-calendar-check"></i></div><span>Book a table!</span></button>
          </div>
        </div>
      </div>
    </div>

    <!-- ABOUT SECTION -->
    <About id="about"/>

    <!-- BANNER -->
    <div class="banner">
    </div>

    <!-- CONTACTS SECTION -->
    <Contacts id="contacts"/>

  </section>
 
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue';
import HeroText from '@/components/HeroText.vue';
import Contacts from '@/components/Contacts.vue';

export default {
  name: 'Home',
  components: {
    About,
    HeroText,
    Contacts
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

  .scroll-buttons{
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content:  center;
    padding: 20px;

     @media (min-width: 768px){
        padding: 0;
      }

    

    button{
      background-color: #141516;
      border: 1px solid rgb(188, 154, 101);
      text-transform: uppercase;
      color: rgb(188, 154, 101);;
      border-radius: 60px;
      height: 60px;
      margin: 20px 0;
      overflow:hidden;
      width: auto;
      max-width: 60px; /** I'm animating max-width because width needs to be auto, and auto can't be animated **/
      -webkit-transition: max-width 0.5s;
      transition: max-width 0.5s ease-in-out;
      box-shadow: 0 19px 38px rgba(188, 154, 101, 0.30), 0 15px 12px rgba(188, 154, 101,0.22);
      animation: pulse 2s infinite;

      @keyframes pulse {
        0% {
          -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.8);
          box-shadow: 0 0 0 0 rgba(204,169,44, 0.8);
        }
        70% {
            -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
            box-shadow: 0 0 0 10px rgba(204,169,44, 0);
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
            box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        }
      }

      @media (min-width: 768px){
        margin: 50px;
      }

      &:hover {
        max-width: 300px;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        background-color: rgba(66, 66, 66, 1);;
      }

      .icon {
        font-size: 20px;
        height: 60px;
        width:60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        white-space: nowrap;
        padding-right: 15px;
        display:none;
      }
      &:hover .icon{
        color: #fdc873;
      }
      &:hover span{
        display: inline-block;
      }
    }
   
    

  }
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
