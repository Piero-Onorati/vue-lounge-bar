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
        </div>
      </div>

      <Filters
        :categories=categories
        :alcoholic=alcoholic
        @vModelCategory="receveidCategory"
        @vModelAlchol="receveidAlchol"
        @vModelWord="receveidWord"
      />

      <!-- cocktails -->
      <section>
        <!-- Title Section -->
        <h2 class="cocktails_title">cocktails</h2>
        <!-- Content section: list of all cocktail -->
        <div class="cocktails" v-if="filterCocktails.length !== 0">
          <div v-for="cocktail in filterCocktails" :key="cocktail.idDrink" class="cocktail-wrapper col-xs-12 col-md-4 col-lg-3">
            <DrinkCard :cocktail=cocktail />
          </div>
        </div>
        <div class="cocktails"  v-else>
            <h3 class="warning">It seems that the drink you looking for is not in our Drinking Menu. Don't Worry!!! Our Barmen will prepare it for you.</h3>
        </div>
      </section>

      <!-- Beer and Wine Cocktails -->
      <section>
        <!-- Title Section -->
        <h2 class="cocktails_title">Beer and Wine Cocktails</h2>
        <div class="cocktails" v-if="filterBAndWCocktails.length !== 0">
          <!-- Content section: list of all cocktail -->
          <div v-for="cocktail in filterBAndWCocktails" :key="cocktail.idDrink" class="cocktail-wrapper col-xs-12 col-md-4 col-lg-3">
            <DrinkCard :cocktail=cocktail />
          </div>
        </div>
        <div class="cocktails" v-else>
            <h3 class="warning">It seems that the drink you looking for is not in our Drinking Menu. Don't Worry!!! Our Barmen will prepare it for you.</h3>
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
      alcoholic:[],
      selectedCategory:'',
      selectedAlchol:'',
      search:''
    }
  },

   computed:{
    /* apply both filters (for category and for alchol) + search*/
    filterCocktails: function(){
      return this.filterByWord(this.filterByCategory(this.filterByAlchol(this.cocktails)));
    },

    /* apply both filters (for category and for alchol) + search*/
    filterBAndWCocktails: function(){
      return this.filterByWord(this.filterByCategory(this.filterByAlchol(this.bAndWCocktails)));
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
          console.log(this.cocktails);
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
  
  },

  methods:{
    receveidCategory(arg1){
      this.selectedCategory=arg1;
    },

    receveidAlchol(arg2){
     this.selectedAlchol=arg2;
    },

    receveidWord(arg3){
     this.search=arg3;
    },

    filterByCategory(array){
      return array.filter(element =>{
        if (this.selectedCategory == '' || this.selectedCategory == 'All') {
          return array;
        }
        else{
          return element.strCategory == this.selectedCategory ;
        }
      });
    },
    filterByAlchol(array){
      return array.filter(element =>{
        if (this.selectedAlchol == '' || this.selectedAlchol == 'All') {
          return array;
        }
        else{
          return element.strAlcoholic == this.selectedAlchol ;
        }
      });
    },

    filterByWord(array){
      return array.filter(element=>{
        return element.strDrink.toLowerCase().match(this.search.toLowerCase())
      });
    }
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
    text-align: center;
    padding-top:60px;
  }

  p{
    @include p;
    text-align: center
  }

  .container{
    background-color:#141516;

    .cocktails_title{
      border-bottom: 3px solid #373838;
      padding-bottom: 20px;
    }

    .cocktails{
      padding: 50px 0;
      display: flex;
      flex-flow: row wrap;

      .warning{
        color:grey;
        font-size:22px;
        padding: 50px 0;
      }

    }

  }
}

</style>
