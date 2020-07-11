<template>
  <div class="bs">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/footer.vue";
import Header from "./components/header.vue";
import Main from "./components/main.vue";
export default {
  components: {
    Footer,
    Header,
    Main
  }
};
</script>