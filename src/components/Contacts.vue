<template>
  <div class="component_background">
      <div class="container">
          <div class="row">
               <div class="item_row  col-xs-12 col-md-6 col-lg-5"> 
                    <div class="item_row_text item-right">
                        <h2>Contact us</h2>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.
                        </p>
                        <p>123-456-7890 | info@mysite.com</p>
                    </div>
                    
                </div>
              <div class="col-xs-12 col-md-6"></div>
          </div>
      </div>
  </div>
  
</template>

<script>
export default {
    name:'Contacts'

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
        }
    }

}

</style>