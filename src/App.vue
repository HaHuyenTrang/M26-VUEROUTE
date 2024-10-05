<template>
  <div>
    <nav>
      <router-link to="/" exact-active-class="active" class="nav-link">Home</router-link>
      <router-link to="/product" exact-active-class="active" class="nav-link">Product</router-link>
      <router-link to="/contact" exact-active-class="active" class="nav-link">contact</router-link>
      <router-link :to="`/product/${productId}`" exact-active-class="active" class="nav-link">Detail</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const productId = ref(1); // ID sản phẩm mẫu, có thể thay đổi theo logic của bạn

const gotoHome = () => {
  router.push("/");
};

const gotoProduct = () => {
  router.push("/product");
};

const gotoDetail = () => {
  router.push(`/product/${productId.value}`);
};
</script>

<style scoped>
.nav-link {
  margin: 0 10px;
  text-decoration: none;
  color: black;
}

.nav-link.active {
  font-weight: bold;
  color: white;
  background-color: blue; 
}
</style>