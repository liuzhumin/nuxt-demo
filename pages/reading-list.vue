<template>
  <div class="reading-list">
    <LangSwitcher/>
    <br>
    <br>
    <a 
      href="javascript" 
      @click="loginout">{{ $t("loginout") }}</a>
    <br>
    <br>
    {{ this.$t('index') }}
    {{ this.$t('list') }}
  </div>
</template>

<script>
import { Service } from "@/config/api";
import LangSwitcher from "../components/lang-switcher";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  async asyncData({ store }) {
    const { data } = await Service.getReadingList.request({}, store.state.auth);
    return {
      data: data.data
    };
  },
  name: "",
  components: {
    LangSwitcher
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    loginout() {
      this.$store.commit("resetState");
      Cookie.remove("auth");
      Cookie.remove("currentInstitute");
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reading-list {
  margin-top: 20px;
}
</style>
