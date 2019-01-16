
<template>
    <div class="home">
     <div id="product" >
        <div  class="item-catalog">
           <h2>Items catalog</h2>
           <div class="searchItem">
             <div class="select">
               <span>Category</span>
                <select  v-model="category">
                  <option></option>
                  <option>Зимние шины</option>
                  <option>Летние шины</option>
                  <option>Всесезонные шины</option>
                </select>
              </div>
             <div class="search">
               <input type="text" v-model="search"  placeholder="Search">
              </div>
              
           </div>
         
                       
            <div class="list">
               <div class="category" style="padding: 25px 0;">
                 <span style="width: 165px;padding-left: 25px;} ">Image </span>
                 <span style="width: 600px;">Name</span> 
                 <span style="width: 140px">Category</span>
                 <span style="    width: 100px;text-align: center;">Price</span>
               </div>
               <div class="product"  v-for="(prod,key) in todosByTitle" :key="key">
                 <div class="img-product"><img :src="prod.img" ></div>
                  <div>
                    <div @click="goTodetail(prod.id,prod.description,prod.title,prod.category,prod.price,prod.img)" class="title-product">{{prod.title}}</div>
                    <div class="description-product">{{prod.description}}</div>
                  </div>
                  <div class="category-product">{{prod.category}}</div>
                  <div class="price-product">{{prod.price}} UAH</div>
                  <div class="delete-btn"><button @click="deleteProduct(prod.id)"></button></div>
               </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  
  name: 'home',
  data () {
    return {
      search: '',
      category:'',
    }
  },
  mounted() {
    // get json file
     this.$store.dispatch('GET_PRODUCT_LIST');
    
  },
  computed: {
    // Parse and return productList for render 
    todosByTitle() {
      // Search
      
      return this.$store.getters.PRODUCT_LIST
      .filter(item => {
         return item.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1})
        // Category
      .filter(item=> {
          return item.category.indexOf(this.category) !== -1});
        },
    
        
  },
   methods:{
     deleteProduct(id){
       this.$store.dispatch('GET_REMOVE_ID',id)
     },
    goTodetail(prodId,description,tit,category,price,img) {
      this.$router.push({name:'product',
      params:{Pid:prodId,
              tittle:tit,
              descr:description,
              category:category,
              price:price,
              img:img
              }})
    
  }}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-catalog{
  padding: 50px 50px;
}
.item-catalog h2{
  font-size: 28px;
  font-weight: bold;
}
.searchItem{
  margin:  25px 0;
  display: flex;
  justify-content: space-between;
}
.select select{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 16px;
  color: #7D7F80;
  width: 200px;
  height: 40px;
  background: #F4F4F4;
/* Black 80 */
  border: 1px solid #C8CBCC;
  box-sizing: border-box;
  border-radius: 4px;
}

.search input{
  width: 250px;
height: 40px;
  background: #F4F4F4;
/* Black 80 */
border: 1px solid #C8CBCC;
box-sizing: border-box;
border-radius: 4px;
}
input::placeholder{
  color: #7D7F80;
  padding-left: 20px;
}
.list{
  background: #FBFBFB;


border: 1px solid #E6E6E6;
border-radius: 8px;
}
.category{
  min-width: 900px;
  
  display: flex;
}
.product{
  border: 1px solid #E6E6E6;
  display: flex;
  align-items: center;
  height: 120px;
  /* justify-content: space-around; */
}
.product:hover{
  background: #F5F6FA;
}
.img-product{
  margin: 10px 40px 10px 25px;
}
.title-product{
  cursor: default;
  color: #0088C4;
  margin-bottom: 10px;
}
.description-product{
  cursor: default;
  width: 600px;
  font-size: 14px;
  color: #AFB1B3;
}
.category-product{
  width: 140px;
  margin-right: 10px;
}
.delete-btn button {
  opacity: 0;
  width: 25px;
  height: 20px;
  text-decoration: none;
  border: none;
  background: transparent;
  background-image: url(../assets/img/del.png);
  background-repeat: no-repeat;
  background-size: 100%;
  margin-right: 30px;
}
.product:hover button{
opacity: 1;
}
.price-product{
  text-align: center;
  font-size: 20px;
margin-right: 20px;
width: 100px;
color: #FF7800;
}
</style>
