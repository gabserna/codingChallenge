<template>
  <v-row justify="center">
    <v-col>
      <v-hover v-slot="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto rounded-xl"
          height="150"
          max-width="350"
        >
          <v-card @click="goToProductDetail">
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-text>Price: ${{ product.wholesale_price }},  Description: {{ product.description }}</v-card-text>
            
            <!-- <v-img
              :src="`https://solle.orbsix.com/${product.image}`"
              width="50px"
              height="auto"
              class="rounded-t-xl object-cover"
            ></v-img> -->
            
          </v-card>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import ProductService from "@/services/ProductService.js";

export default {
  async asyncData({ params }) {
    try {
      const product = await ProductService.getProduct(params.productId);
      return { product };
    } catch (error) {
      console.error("Error fetching product details:", error);
      return { product: null };
    }
  }
};
</script>