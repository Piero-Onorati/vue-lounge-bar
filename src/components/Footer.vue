<template>
    <footer>
        <div class="container">
            <div class="row center-xs between-md">
                <!-- left part footer -->
                <div class="left-part-footer col-xs-12 col-md-6 col-lg-7 middle-xs top-md">
                    <h3>Join the Club &#38; Get Updates on Special Events </h3>
                    <div class="search-box">
                        <input type="mail" placeholder="Email...">
                        <button>Subscribe Now</button>
                    </div>
                </div>
                <!-- right part footer -->
                <div class="right-part-footer col-xs-12 col-md-6 col-lg-5 middle-xs bottom-md">
                    <!-- social icons -->
                    <div class="social-icons">
                        <div class="icon"><i class="fab fa-foursquare"></i></div>
                        <div class="icon"><i class="fab fa-twitter"></i></div>
                        <div class="icon"><i class="fab fa-instagram"></i></div>
                    </div>
                    <!-- Copyright -->
                    <p>&copy; 2023 by 2100 CLUB.</p>
                </div>
            </div>
        </div>
    </footer>
  
</template>

<script>
export default {
    name:'Footer'

}
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

footer{
    background-color: #111213;
    color: whitesmoke;

    .left-part-footer{
        display: flex;
        flex-direction: column;
        padding: 40px 0;

        h3{
            font-weight: 300;
            margin-bottom: 20px;
        }

        .search-box{
            display: flex;
            align-items: center;
            input{
                @include search-input;
            }

            button{
                @include button;
            }
        }
    }

    .right-part-footer{
        display: flex;
        flex-direction: column;
        padding: 40px 0;

        .social-icons{
            display: flex;
            margin-bottom: 20px;
    
            .icon{
                margin:0 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 35px;
                height: 35px;
                font-size: 20px;
                border-radius: 50%;
                background-color:black ;
                transition: all 0.3s linear;
    
                &:hover{
                    color:#bc9a65;
                    cursor: pointer;
                    background-color: rgba(66, 66, 66, 0.671);
                }
            }
        }
    
        p{
            color:#bc9a65;
            font-weight: 300;
        }
    }


}

</style>