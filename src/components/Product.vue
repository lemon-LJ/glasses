<template>
  <div class="product">
    <router-link v-bind:to="url">
      <img v-bind:src="product.images" v-bind:alt="product.name" class="wd">
      <p>{{product.name}}</p>
      <button class="snipcart-add-item" v-bind:data-item-name="product.name" v-bind:data-item-id="product.id" v-bind:data-item-price="product.price">
        buy it for ${{product.price}}
      </button>
    </router-link>
    
  </div>
  
</template>

<script>
export default {
  name: 'Product',
  props:['product'],
  computed:{
    url(){
      return `/product/${this.product.id}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a{text-decoration: none;}

.wd{width: 50%}
.snipcart-add-item{background-color: #6868d6;border: none;display: block;margin: auto;padding: 10px;color: #fff;}
a{    display: block;}
</style>
