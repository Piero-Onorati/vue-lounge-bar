<template>
  <div>
      <select name="categories" id="">
          <option v-for="(category,index) in categories" :key='index'>
              {{category}}
          </option>
      </select>
      <select name="glasses" id="">
          <option v-for="(glass,index) in glasses" :key='index'>
              {{glass}}
          </option>
      </select>
      <select name="ingredients" id="">
          <option v-for="(ingredient,index) in ingredients" :key='index'>
              {{ingredient}}
          </option>
      </select>
      <select name="alcoholic" id="">
          <option v-for="(alchol,index) in alcoholic" :key='index'>
              {{alchol}}
          </option>
      </select>
  </div>
</template>

<script>
export default {
    props:{
        categories: Array,
        glasses: Array,
        ingredients: Array,
        alcoholic: Array
    },
    data(){
        return{

        }
    }

}
</script>

<style>

</style>