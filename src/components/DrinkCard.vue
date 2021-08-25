<template>
<div class="cocktail">
    <div class="drink-image">
        <img :src="cocktail.strDrinkThumb" alt="">
    </div>
    <div class="card-text">
        <h3>{{cocktail.strDrink}}</h3>
        <p>I’m a description. Click “Edit Menu” to open the Restaurant Menu editor and change my text</p>
        <span>$ 9.99</span>
    </div>
</div>
</template>

<script>
export default {
    name:'DrinkCard',
    props:{
        cocktail:Object
    }

}
</script>

<style lang="scss" scoped>
.cocktail{
    padding:35px;

    .drink-image{

        img{
            width:100%;
            filter: grayscale(100%) brightness(100%) contrast(0.9);

            &:hover{
                filter: none;
                cursor: pointer;
            }
        }
    }

    .card-text{
        padding:35px 0;
        border-bottom:3px dotted whitesmoke;
        h3{
            text-transform: uppercase;
            color: whitesmoke;
            min-height: 60px;
        }

        p{
            padding: 25px 0;
            color:#bc9a65;
            font-family: 'Roboto';
        }

        span{
            color: whitesmoke;
        }
    }
}

</style>