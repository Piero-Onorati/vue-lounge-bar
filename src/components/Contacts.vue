<template>
  <div class="component_background">
      <div class="container">
          <div class="row center-md">
               <div class="item_row  col-xs-12 col-md-5"> 
                    <div class="item_row_text item-right">
                        <h2>Contact us</h2>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.
                        </p>
                        <p>123-456-7890 | info@mysite.com</p>
                    </div>
                    
                </div>
                <div class="col-xs-12 col-md-5 reservation"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <span>BOOK A TABLE</span>
                  <!-- date + hours picker -->
                  <date-picker v-model="time1" type="datetime"></date-picker>
                  <!-- number of people -->
                  <select>
                      <option v-for="(person,index) in partySize" :key="index">{{person}}</option>
                  </select>
              </div>
          </div>
      </div>
  </div>
  
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    name:'Contacts',
    components: { DatePicker },
    data() {
      return {
        time1: null,
        hours:['8:00 PM','8:15 PM', '8:30 PM', '8:45 PM', '9:00 PM','9:15 PM', '9:30 PM', '9:45 PM','10:00 PM','10:15 PM', '10:30 PM', '10:45 PM'],
        partySize:['1 person', '2 people', '3 people', '4 people', '5 people', '6 people']

        }
    }

}
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';


.component_background{
    /* background-color:#000b18; */
    background-color:#141516;
    background-image: url('../assets/img/subtle-dark-vertical.png');
    color:#bc9a65;
    padding: 40px 0 50px 0;

    .container{
        .row{
            padding: 60px 0;

            .item_row{
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: 30px;

                .item-right {
                    border-top: 1px solid #bc9a65;
                    border-right: 1px solid #bc9a65;
                }

                .item_row_text{
                    width:80%;
                    padding: 30px;
                    
                    span{
                        @include span
                    }

                    h2{
                        @include h2
                    }

                    p{
                        @include p
                    }
                }

            }
            .reservation{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                span{
                    font-size: 18px;
                    padding-bottom: 20px;
                }

                select{
                    width:210px;
                    @include select;
                    border-radius:4px;
                    margin-top: 30px;

                }

            }
        }
    }

}

</style>