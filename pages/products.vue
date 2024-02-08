<template>
  <section class="pb-6 mb-6">
    <h1>{{ title }}</h1>

    <v-alert v-if="loading">Loading products.... </v-alert>
    <div v-else>
      <Product-card
        v-for="product in products"
        :key="product.product_id"
        :product="product"
      />
    </div>
  </section>
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
  async mounted() {
    try {
      const products = await ProductService.getProducts();
      this.products = products;
      this.loading = false;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    // This will get called when the page begins to load
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const products = await ProductService.getProducts();
        this.products = products;
        // this.loading = false;
      } catch (error) {
        console.log("Error fetching prods:", error);
      }
    },
  },
  components: {
    ProductCard,
  },
};
</script>

<style></style>
