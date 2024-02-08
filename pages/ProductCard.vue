<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            height="150"
            max-width="350"
            rounded-xl
          >
  <v-card @click="goToProductDetail">
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-text>Price: {{ product.wholesale_price }}</v-card-text>
    <!-- <v-img src="https://solle.orbsix.com/{{ product.image }}"></v-img> -->
    <v-img :src="`https://solle.orbsix.com/${product.image}`" width="50px"></v-img>


    <v-divider></v-divider>
  </v-card>
</v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    goToProductDetail() {
      // this.$router.push({ name: "ProductDetail", params: { id: this.product.product_id } });
      this.$router.push(`/product/${this.product.product_id}`);
    }
  }
};
</script>

<style scoped></style>
