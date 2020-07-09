<template>
  <Navbar brand="App Footer" v-bind:type="navbarType" />
</template>

<script>
import { Components } from "gd-sprest-bs";
import { Navbar } from "gd-sprest-bs-vue";
export default {
  components: { Navbar },
  data: () => {
    return {
      navbarType: Components.NavbarTypes.Dark
    };
  }
};
</script>