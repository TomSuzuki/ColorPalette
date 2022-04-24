<template>
  <div class="foot">
    <h2>MEMO</h2>
    <ul>
      <li>個人的に使う色なので偏っています。</li>
    </ul>
    <h2>LICENSE</h2>
    <ul>
      <li>MIT</li>
      <li>
        GitHub:
        <a href="https://github.com/TomSuzuki/ColorPalette"
          >https://github.com/TomSuzuki/ColorPalette</a
        >
      </li>
      <li>色の使用はご自由にどうぞ。</li>
    </ul>
    <p class="center">2019-2020 TomSuzuki</p>
  </div>
</template>

<script>
export default {
  name: "Foot",
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
