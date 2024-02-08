<template>
  <section>
    <h1>{{ product.name }}</h1>
    <p>Price: {{ product.wholesale_price }}</p>
    <p>Description: {{ product.image }}</p>
  </section>
</template>

<script>
import ProductService from "@/services/ProductService.js";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: {}
    };
  },
  async created() {
    const productId = this.$route.params.productId;
    try {
      this.product = await ProductService.getProduct(productId);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }
};
</script>
<style></style>