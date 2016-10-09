<template>
<div class="cbui_grids"><slot></slot></div>
</template>

<script>
export default {
  name: 'grids'
}
</script>

<style lang="less">
@import "../../style/fn.less";

.cbui_grids {
  position: relative;
  overflow: hidden;

  &:before {
    .setTopLine(@cbuiGridBorderColor);
  }

  &:after {
    .setLeftLine(@cbuiGridBorderColor);
  }
}
</style>