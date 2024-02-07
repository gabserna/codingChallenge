<template>
    <section>
  <h1>{{ products.name }}</h1>
<p>Price: {{ products.price }}</p>
<p>Description: {{ products.image }}</p>
</section>
</template>

<script>

  import ProductService from "@/services/ProductService.js";
  export default {
      name: "ProductDetail",
      data() {
          return {
              products: {}
          };
      },
  async created() {
  const productId = this.$route.params.productId;
  this.products = await ProductService.getProduct(productId);
}
  };
</script>

<style></style> 