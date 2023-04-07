<template>
  <client-only placeholder="Loading...">
    <Tutorial />
  </client-only>
</template>

<script>
import Tutorial from "../components/Tutorial.vue";
import "../assets/js/main.js";

export default {
  name: "IndexPage",
  components: { Tutorial },
};
</script>
