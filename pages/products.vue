<template>
  <section>
    <h1>{{ title }}</h1>

    <!-- <v-alert> Display the products here </v-alert> -->

    <v-alert v-if="loading">Loading products.... </v-alert>
    <div v-else>    
        <p v-for="product in products" :key="product">
          {{ product.name }} 
        
        </p>
        
    </div>


  </section>
</template>

<script>
import ProductService from "@/services/ProductService.js";
// import ProductCard from "@/pages/ProductCard.vue";

export default {
  name: "ProductPage",
  data() {
    return {
      title: "Products",
      products: [],
      loading: true
    };
  },
  mounted() {
    // This will get called when the page begins to load
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const products = await ProductService.getProducts();
        this.products = products;
        this.loading = false;
      } catch (error) {
        console.log("Error fetching prods:", error);
      }
    },
  },
  // components: {
  //   ProductCard,
  // },
};
      
</script>

<style></style>