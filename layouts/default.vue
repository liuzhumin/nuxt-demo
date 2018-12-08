<template>
  <div class="wrapper">
    <nuxt/>
  </div>
</template>
<script>
export default {
  components: {
  },
  head() {
    return {
      title: this.$t("webTitle")
    };
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.wrapper {
  padding: 20px;
}
</style>
