<template>
    <div class="hero-text-box">
        <div class="hero-text">
            <span>EST. | 2023</span> 
            <h1>2100</h1>
            <h2>CLUB</h2>
            <p> 500 Terry Francois St.</p>
            <p> 500 Terry Francois St.</p>
            <p>  San Francisco, CA 94158 </p>
            <p>  Open from 5PM - 2AM </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'HeroText'

}
</script>

<style lang="scss" scoped>
.hero-text-box{
    background: rgba(20, 21, 22, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;


    .hero-text{
        color:#bc9a65;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding:30px 20px ;
        outline: 2px solid #bc9a65;
        position: relative;

        /* &::after{
            content: '';
            background: transparent;
            border: 1px solid #bc9a65;
            position: absolute;
            top:8px;
            right:-10px;
            bottom:8px;
            left:-10px;
        } */

        h1,h2{
            color: white;
        }
    }

}

</style>