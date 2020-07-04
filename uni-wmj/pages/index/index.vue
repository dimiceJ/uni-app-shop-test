<template>
  <view class="index">

  </view>
</template>

<script>
  import { getLunbo } from '@/util/api/index.js';
  export default {
    data() {
      return {
        title: 'Hellowmj55'
      }
    },
    onLoad() {
      this.fetchlunbo();
    },
    methods: {
      fetchlunbo() {
        getLunbo().then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(`err`,err)
        })
      }
    }
  }
</script>

<style>

</style>
