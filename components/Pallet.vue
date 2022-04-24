<template>
  <div class="pallet">
    <ul v-for="c in color" :key="c">
      <li>
        <h3>{{ c.name }}</h3>
        <h4>{{ c.sub_name }}</h4>
        <ul v-for="rgb in c.color">
          <li>{{ rgb }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import color from "@/assets/json/color.json";

export default {
  name: "Pallet",
  data() {
    return {
      color: color["color"],
    };
  },
};
</script>

<style lang="scss">
.pallet {
}
</style>
