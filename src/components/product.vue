<template>
 <div class="product">
 
  <router-link class="nav-link" to="/">Back to catalog</router-link>

  <div class="wrapper">
    <div class="img-product">
      <img :src="this.$route.params.img" alt="">
    </div>
    <div class="info-product">
      <div class="tittle"><h2>{{this.$route.params.tittle}}</h2></div>
      <div class="category">Category: <span>{{this.$route.params.category}}</span></div>
      <div class="description">{{this.$route.params.descr}}</div>
      <div class="price-wrapper">
       <div class="price">Цена: <br> <span>{{this.$route.params.price}} UAH</span></div>
        <button class="Buy">Buy</button>
      </div>
    </div>
  </div>

 </div>
</template>
<script>

export default {
  name:'product',
  data(){
   return{
    proId:this.$route.params.Pid,
    title:"product"
     }}}
</script>
<style scoped>
.img-product{
  margin-right: 30px;
  width: 320px;
  height: 320px;
 
}
.img-product img{
  width: 100%;
  height: 100%;
}
.wrapper{
  padding: 35px 0px 50px 25px;
  width: 1091px;
height: 407px;
  display: flex;
  background: #FFFFFF;
/* Default shadow(high) */
box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
border-radius: 4px;
}
.product{
  font-family: Roboto;
  color: #7D7F80;
  padding: 50px;
}
.info-product{
  width: 650px;
  display: flex;
  flex-direction: column;
  
}
.tittle h2{
  
color: #2D2E2E;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
}
.category{
  margin-bottom: 15px;
}
.category span{
  font-size: 18px;
  font-weight: 500;
  color: #2D2E2E;
}
.price-wrapper{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

}
.price span{
  font-weight: 500;
line-height: normal;
font-size: 44.1667px;
color: #F2994A
}
.Buy{
  border: 0;
  width: 204px;
  height: 54px;
  background: #32B1F8;
  border-radius: 100px;
  font-size: 26px;
  color: #FFFFFF;
}
</style>
