<template>
  <view class="dot-main">
    <view :class="['dot-item',current==index?'active':'']" v-for="(item,index) in list" :key="index"></view>
  </view>
</template>
<style lang="scss">

  .dot-main {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20rpx;
    left: 0;
    right: 0;
    margin: auto;
  }

  .dot-item {
    width: 10.41rpx;
    height: 10.41rpx;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 6upx;
    box-sizing: border-box;
  }

  .active {
    border-radius: 33.33rpx;
    width: 25rpx;
    background-color: $rColor;
  }
</style>
<script>
  export default {
    props: ['list', 'current'],
    data() {
      return {

      };
    }
  }
</script>
