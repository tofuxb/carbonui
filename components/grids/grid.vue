<template>
<a :href="link" v-link="routerLink" class="cbui_grid">
  <div class="cbui_grid_icon" v-if="imageUrl">
    <img :src="imageUrl" alt="" />
  </div>
  <p class="cbui_grid_label" v-if="label">{{label}}</p>
</a>
</template>

<script>
export default {
  props: {
    
    link: {
      type: String,
      required: false
    },

    routerLink: {
      type: null,
      required: false
    },

    imageUrl: {
      type: String,
      required: false
    },

    label: {
      type: null,
      required: false
    }
  }
}
</script>

<style lang="less">
@import "../../style/fn.less";
.cbui_grid {
  position: relative;
  float: left;
  padding: 20px 10px;
  width: 100% / @cbuiGridColumnCount;
  box-sizing: border-box;

  &:before {
      .setRightLine(@cbuiGridBorderColor);
  }
  &:after {
      .setBottomLine(@cbuiGridBorderColor);
  }

  &:active {
      background-color: @bgColorActive;
  }
}

.cbui_grid_icon {
    width: @cbuiGridIconSize;
    height: @cbuiGridIconSize;
    margin: 0 auto;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }

    & + .cbui_grid_label{
        margin-top: 5px;
    }
}

.cbui_grid_label {
    display: block;
    text-align: center;
    color: @textColorTitle;
    font-size: @cbuiGridFontSize;
}
</style>