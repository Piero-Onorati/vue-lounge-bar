<template>
  <div class="component_background">
      <div class="container">
          <!-- Row with title:'ABOUT' -->
          <div class="row center-md">
              <div class="col-xs-12  col-md-7 col-lg-6  row_title">
                    <span>about</span>
                    <h2>your neighborhood institution</h2>
                    <p>
                      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
              </div>
          </div>

          <!-- Row: cocktail image + text for cocktails -->
          <div class="row center-lg">
                <div class="item_row  col-xs-12 col-md-6 col-lg-5"> 
                    <div class="item_row_text item-right">
                        <span>happy hour</span>
                        <h2>craft cocktails tuesday</h2>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                    </div>
                    
                </div>
                <div class="image_item_row box col-xs-12 col-md-6 col-lg-5">
                    <img src="../assets/img/drink.jpg" alt="drink" class="img_item">
                </div>                  
          </div>

          <!-- Row: text for events + event image -->
          <div class="row center-lg">
                <div class="image_item_row col-xs-12 col-md-6 col-lg-5"> 
                    <img src="../assets/img/live-shows.jpg" alt="live-shows" class="img_item">
                </div>
                <div class="item_row   col-xs-12 col-md-6 col-lg-5">
                    <div class="item_row_text item-left">
                        <span>music</span>
                        <h2>next show: Tyler Reece</h2>
                        <p>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                    </div>
                </div>                  
          </div>
      </div>

  </div>
</template>

<script>
export default {

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

        .row_title{
            text-align: center;

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

        .row{
            padding: 60px 0;

            .item_row{
                display: flex;
                justify-content: center;
                align-items: center;

                .item-right {
                    border-top: 1px solid #bc9a65;
                    border-right: 1px solid #bc9a65;
                }

                .item-left {
                    border-bottom: 1px solid #bc9a65;
                    border-left: 1px solid #bc9a65;
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

            .image_item_row{
                height: 350px;
                padding: 0 25px;

                .img_item{
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }

        }
    }
}
</style>