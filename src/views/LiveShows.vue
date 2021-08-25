<template>

  <!-- Start hero -->
  <div class="hero">
    <!-- Start container -->
    <div class="container">

      <div class="row center-xs">

        <!-- All events-container -->
        <div class="all_events col-xs-11 col-md-8 col-lg-7 ">
          <!-- start event -->
          <div class="event" v-for="event in events" :key="event.id">

            <!-- Event Info -->
            <div class="event_info">

              <!-- Date -->
              <div class="date">
                <!-- Day -->
                <div class="day">
                  <h4>{{event.day}}</h4>
                </div>
                <!-- Week_month -->
                <div class="week_month">
                  <h5 class="week">{{event.week.substring(0, 2)}}</h5>
                  <h5>{{event.month.substring(0, 2)}}</h5>
                </div>
              </div>

              <!-- Artist -->
              <h3>{{event.artist}}</h3>

            </div>

            <!-- BUtton -->
            <button>Register Now</button>

          </div>
          <!-- end event -->
        </div>
        <!--  End all events-container -->

      </div>

    </div>
    <!-- End container -->
  </div>
  <!-- End hero -->
      
</template>

<script>
import LiveShow from '../data/LiveShow.js'
export default {
  data(){
    return{
      events:LiveShow
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.hero{
  margin-top: 85px;
  background-image: url('../assets/img/outside_bar.jpg');
  min-height: 550px;
  width:100%;
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .event{
    background-color: #141516b0;
    height: 60px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #bc9a65;
    margin-bottom: 10px;
    padding: 0 10px;
    overflow: hidden;

    .event_info{
      display: flex;
      align-items: center;
      transition: 0.1s ease-in-out;

      .date{
        display: flex;
        align-items: center;
        color: whitesmoke;
        margin-right:30px;
        font-weight: 300;

        .day{
          h4{
            font-size: 24px;
          }
        }

        .week_month{
          padding: 0 10px;
          font-weight: 200;

          .week{
            color: grey;
          }
        }
      }

      h3{
        color:whitesmoke;
        font-family: 'Sora';
        font-weight: 200
      }

    }

    &:hover{
      cursor:pointer ;
      border-bottom: 1px solid whitesmoke ;
      background-color:#141516d5 ;
    }

    &:hover .event_info{
      transform: translateX(-85px);
      color:#bc9a65
    }

    &:hover .event_info>h3{
      color:#bc9a65
    }

    button{
      @include button;
    }
  }
}

</style>