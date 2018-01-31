<template>
  <div class="products" id="home">
    <div v-for="product in products" class="product">
       <product :product="product"></product>
    </div>
  </div>
  
</template>

<script>
import Product from '../components/Product.vue'

export default {
  name: 'home',
  components: {
    Product
  },
  computed:{
    products(){
      return this.$store.state.products
    }
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-width: 320px;
  max-width: 640px;
  margin: auto;
  overflow: hidden;
}
</style>
