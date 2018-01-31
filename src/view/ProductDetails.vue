<template>
	<div class="product-details">
		产品详情
		
		<img v-bind:src="product.images" v-bind:alt="product.name" class="thumbnail" height="200">
		<div class="product-description">
			<p>{{product.name}}</p>
			<p>{{product.description}}</p>
			<button class="snipcart-add-item" v-bind:data-item-name="product.name" v-bind:date-item-id="product.id"  :data-item-price="product.price" data-item-url="/">
				 buy it for ${{product.price}}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name:'ProductDetails',
	computed:{
		id(){
			return this.$store.state.route.params.id
		},
		product(){
			return this.$store.getters.getProductById(this.id)
		}
	}
}
</script>
<style>
p{font-weight: bold;}
.snipcart-add-item{background-color: #6868d6;border: none;display: block;margin: auto;padding: 10px;color: #fff;font-weight: bold;}
</style>