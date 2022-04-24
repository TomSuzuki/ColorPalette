<template>
  <div class="pallet">
    {{ color }}
  </div>
</template>

<script>
import color from "@/assets/json/color.json";

export default {
  name: "Pallet",
  data() {
    return {
      color: color,
    };
  },
};
</script>

<style lang="scss">
.pallet {
}
</style>
