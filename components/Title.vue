<template>
  <div class="title">
    <h1>{{ pageTitle }}</h1>
    <small>{{ version }}</small>
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      pageTitle: "Color Pallet",
      version: "ver 2.00",
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

  h1 {
    padding: 0 0 0.4em;
    margin: 0;
  }
}
</style>
