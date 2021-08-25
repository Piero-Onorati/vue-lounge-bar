<template>
  <div class="page"> 
    <div class="hero">
    </div>    
    <div class="container">

      <!-- Page Title -->
      <div class="row center-md">
        <div class="col-xs-12 col-md-4">
          <h2>drinking menu</h2>
          <p>Get people exited about your menu and your food. Give your menu a brief description</p>
          <input type="text">
        </div>
      </div>

      <Filters
        :categories=categories
        :glasses=glasses
        :ingredients=ingredients
        :alcoholic=alcoholic
      />

      <!-- cocktails -->
      <section>
        <!-- Title Section -->
        <h2>cocktails</h2>
        <!-- Content section: list of all cocktail -->
        <div class="cocktails">
          <div v-for="cocktail in cocktails" :key="cocktail.idDrink" class="cocktail-wrapper col-xs-12 col-md-4 col-lg-3">
            <DrinkCard :cocktail=cocktail />
          </div>
        </div>
      </section>

      <!-- Beer and Wine Cocktails -->
      <section>
        <!-- Title Section -->
        <h2>Beer and Wine Cocktails</h2>
        <div class="cocktails">
          <!-- Content section: list of all cocktail -->
          <div v-for="cocktail in bAndWCocktails" :key="cocktail.idDrink" class="cocktail-wrapper col-xs-12 col-md-4 col-lg-3">
            <DrinkCard :cocktail=cocktail />
          </div>
        </div>
      </section>
  
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DrinkCard from '@/components/DrinkCard.vue';
import Filters from '@/components/Filters.vue';

export default {
  name:'Menu',
  components:{
    DrinkCard,
    Filters
  },
  data(){
    return{
      urlbyName:'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      urlbyList:'https://www.thecocktaildb.com/api/json/v1/1/list.php',
      drinks:['martini', 'gin', 'mojito'],
      cocktails:[],
      otherDrinks:['beer', 'wine'],
      bAndWCocktails:[],
      categories:[],
      glasses:[],
      ingredients:[],
      alcoholic:[]
    }
  },

  mounted(){

    // populate the array cocktails
    this.drinks.forEach(element => {
      axios
        .get(this.urlbyName,{
          params:{
            s:element
          }
        }
          )
        .then( response =>{
          // merge the array created at each cicle with the previous one
          this.cocktails = [...this.cocktails, ...response.data.drinks];

          // delete all the key with null values
          this.cocktails.forEach(element => {
            for (const key in element) {
              if ( element[key] === null) {
                delete element[key];
              }
            }
            return element
          });
          // console.log(this.cocktails);
        });
        
    });
     
    // populate the array beerCocktails
    this.otherDrinks.forEach(element => {
      axios
        .get(this.urlbyName,{
          params:{
            s:element
          }
        }
          )
        .then( response =>{
          // merge the array created at each cicle with the previous one
          this.bAndWCocktails = [...this.bAndWCocktails, ...response.data.drinks];

          // delete all the key with null values
          this.bAndWCocktails.forEach(element => {
            for (const key in element) {
              if ( element[key] === null) {
                delete element[key];
              }
            }
            return element
          });
          // console.log(this.bAndWCocktails);
        });
        
    });
  
    // populate the array categories
    axios
      .get(this.urlbyList,{
        params:{
          c:'list'
        }
      }
        )
      .then( response =>{
        this.categories = response.data.drinks.map(el=>{return el.strCategory})
        // console.log(this.categories);
      });

    // populate the array glasses
    axios
      .get(this.urlbyList,{
        params:{
          g:'list'
        }
      }
        )
      .then( response =>{
        this.glasses = response.data.drinks.map(el=>{return el.strGlass})
        // console.log(this.glasses);
      });

    // populate the array ingredients
    axios
      .get(this.urlbyList,{
        params:{
          i:'list'
        }
      }
        )
      .then( response =>{
        this.ingredients = response.data.drinks.map(el=>{return el.strIngredient1})
        // console.log(this.ingredients);
      });

    // populate the array alcoholic
    axios
      .get(this.urlbyList,{
        params:{
          a:'list'
        }
      }
        )
      .then( response =>{
        this.alcoholic = response.data.drinks.map(el=>{return el.strAlcoholic})
        // console.log(this.alcoholic);
      });
  
  }

}
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.page{
  background-color:#141516;
  background-image: url('../assets/img/subtle-dark-vertical.png');
  .hero{
    margin-top: 85px;
    background-image: url('../assets/img/counter_bar.jpg');
    min-height: 500px;
    width:100%;
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h2{
    @include h2;
    text-align: center
  }

  p{
    @include p;
    text-align: center
  }

  .container{
    background-color:#141516;

    .cocktails{
      display: flex;
      flex-flow: row wrap;

    }

  }
}

</style>
