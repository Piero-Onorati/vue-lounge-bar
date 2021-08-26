<template>
  <div class="filters">
        <input type="text" v-model="searchWord"  @keyup="sendWord" placeholder="Search a drink in our menu...">
        <select name="categories" v-model="selectCategory" @change="sendCategory">
            <option value="">All</option>
            <option v-for="(category,index) in categories" :key='index'>
                {{category}}
            </option>
        </select>
        <select name="alcoholic" v-model="selectAlchol" @change="sendAlcoholic">
            <option value="">All</option>
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
        alcoholic: Array
    },
    data(){
        return{
            selectCategory:'',
            selectAlchol:'',
            searchWord:''
        }
    },

    methods:{
        sendCategory(){
            this.$emit('vModelCategory', this.selectCategory)

        },
        sendAlcoholic(){
            this.$emit('vModelAlchol', this.selectAlchol)
        },
        sendWord(){
            this.$emit('vModelWord', this.searchWord)
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.filters{
    padding: 100px 0 20px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input{
        width:250px;
        @include search-input;
    }

    select{
        width:250px;
        @include select

    }
}


</style>