<template>
  <v-card>
    <!-- <v-card-title> {{ products.products }}</v-card-title> -->
    <!-- <v-img
      height="100"
      src="https://api.sollenaturals.com"
      +
      {{products.image}}
    ></v-img> -->
    <v-card-text> price: {{ products.price }} </v-card-text>
    <!-- <v-card-actions>
      <nuxt-link :to="`/products/${products.name}`">View Details</nuxt-link>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped></style>
