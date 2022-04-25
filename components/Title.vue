<template>
  <div class="title">
    <h1>{{ pageTitle }}</h1>
    <small>{{ version }}</small>
  </div>
</template>

<script>
import title from "@/assets/json/title.json";

export default {
  name: "Title",
  data() {
    return {
      pageTitle: title["title"],
      version: title["version"],
    };
  },
};
</script>

<style lang="scss">
.title {
  grid-area: head;
  padding: 1.5em 1em;
  margin-bottom: 1em;
  background-color: #111111;
  color: #efefef;
  text-align: center;

  h1 {
    padding: 0 0 0.4em;
    margin: 0;
  }
}
</style>
