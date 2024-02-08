<template>
  <section>
    <h1>{{ product.name }}</h1>
    <p>Price: {{ product.wholesale_price }}</p>
    <v-img
      :src="`https://solle.orbsix.com/${product.image}`"
      width="50px"
      height="auto"
      class="rounded-t-xl object-cover"
    ></v-img>
  </section>
</template>

<script>
import ProductService from "@/services/ProductService.js";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: {},
    };
  },
  async created() {
    const productId = this.$route.params.productId;
    try {
      this.product = await ProductService.getProduct(productId);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  },
};
</script>
<style></style>
