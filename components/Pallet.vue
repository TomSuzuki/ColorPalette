<template>
  <div class="pallet">
    <ul class="colorFrames">
      <li class="color_outer" v-for="c in color" :key="c">
        <div
          class="colorTitle"
          :style="{ background: c.key_color }"
          :class="[text_color(c.key_color) ? 'text-black' : 'text-white']"
        >
          <h3>{{ c.name }}</h3>
          <h4>{{ c.sub_name }}</h4>
        </div>
        <ul class="color-frame">
          <li
            class="color"
            :class="[text_color(rgb) ? 'text-black' : 'text-white']"
            :style="{ background: rgb }"
            v-for="rgb in c.color"
          >
            {{ rgb }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
const color_data = "https://tomsuzuki.github.io/color-data/color.json";

export default {
  name: "Pallet",
  data() {
    return {
      color: [],
    };
  },
  created: function () {
    fetch(color_data)
      .then((response) => response.json())
      .then((data) => (this.color = data["color"]));
  },
  methods: {
    text_color: (rgb) => {
      let r = parseInt("0x" + rgb.substr(1, 2), 16);
      let g = parseInt("0x" + rgb.substr(3, 2), 16);
      let b = parseInt("0x" + rgb.substr(5, 2), 16);
      let bk = Math.sqrt(
        Math.pow(r - 0, 2) + Math.pow(g - 0, 2) + Math.pow(b - 0, 2)
      );
      let wh = Math.sqrt(
        Math.pow(r - 255, 2) + Math.pow(g - 255, 2) + Math.pow(b - 255, 2)
      );
      return bk > wh;
    },
  },
};
</script>

<style lang="scss">
.pallet {
  --radius_Color: 10px;
  --padding_Frame: 2em;

  ul {
    list-style: none;
  }

  .colorFrames {
    box-sizing: border-box;
    padding: 1em 2em 1.5em;
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: auto;
    grid-gap: var(--padding_Frame);
  }

  .categoryTitle {
    width: 100%;
    margin: 0 1em;
    padding: 0.5em 1em;
    background: #efefef;
    box-sizing: border-box;
    border-left: 4px solid #111111;
  }

  .categoryTitle:nth-child(n + 2) {
    margin-top: 1.2em;
  }

  .color-frame {
    height: 312px;
    min-width: 200px;
    background-color: #efefef;
    padding: 0;
    display: grid;
    border-bottom-left-radius: var(--radius_Color);
    border-bottom-right-radius: var(--radius_Color);
  }

  .colorTitle {
    border-top-left-radius: var(--radius_Color);
    border-top-right-radius: var(--radius_Color);
    border-bottom: 1px solid #ffffff;
  }

  h3 {
    padding: 0.9em 0em 0em;
    margin: 0;
    font-size: medium;
    font-weight: bold;
    display: block;
    text-align: center;
    justify-content: center;
  }

  h4 {
    width: 100%;
    text-align: center;
    font-size: x-small;
    padding: 0.5em 0 1em 0em;
    height: 1em;
    margin: 0;
  }

  .color_outer {
    box-sizing: border-box;
    border-radius: var(--radius_Color);
  }

  .color {
    width: 100%;
    box-sizing: border-box;
    padding: 0.4em 0.75em;
    display: flex;
    align-items: center;
  }

  .text-black {
    color: #111111;
  }

  .text-white {
    color: #fafafa;
  }

  .color:last-child {
    border-bottom-left-radius: var(--radius_Color);
    border-bottom-right-radius: var(--radius_Color);
  }
}
</style>
