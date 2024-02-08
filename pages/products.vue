<template>
  <v-col>
    <section>
      <h1 v-if="loading">Loading products...</h1>
      <h1 v-if="!loading">{{ title }}</h1>
      <v-alert v-if="error && !loading" type="error">{{ error }}</v-alert>
      <div v-else>
        <Product-card
          v-for="product in products"
          :key="product.id" :product="product"
          class="mx-auto" />
      </div>
    </section>
  </v-col>
</template>

<script>
import ProductService from "@/services/ProductService.js";
import ProductCard from "@/pages/ProductCard.vue";

export default {
  name: "ProductPage",
  data() {
    return {
      title: "Products",
      products: [],
      loading: true,
    };
  },
  async asyncData() {
    try {
      const products = await ProductService.getProducts();
      return { products };
      // this.products = products;
      // this.loading = false;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    // This will get called when the page begins to load
    return { products: []}
    // this.getProducts();
  },
  // methods: {
  //   async getProducts() {
  //     try {
  //       const products = await ProductService.getProducts();
  //       this.products = products;
  //       // this.loading = false;
  //     } catch (error) {
  //       console.log("Error fetching prods:", error);
  //     }
  //   },
  // },
  components: {
    ProductCard,
  },
};
</script>

<style></style>
