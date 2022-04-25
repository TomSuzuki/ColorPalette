<template>
  <div class="foot">
    <div v-for="f in foot" :key="f">
      <h2>{{ f.title }}</h2>
      <ul>
        <li v-for="list in f.list" :key="list" v-html="list"></li>
      </ul>
    </div>
    <p class="center">{{ copyright }}</p>
  </div>
</template>

<script>
import foot from "@/assets/json/foot.json";

export default {
  name: "Foot",
  data() {
    return {
      foot: foot["foot"],
      copyright: foot["copyright"],
    };
  },
};
</script>

<style lang="scss">
.foot {
  grid-area: footer;
  padding: 1.5em 2em;
  background-color: #efefef;

  .center {
    padding: 1em 0 0.2em;
    margin: 0;
    text-align: center;
  }
}
</style>
