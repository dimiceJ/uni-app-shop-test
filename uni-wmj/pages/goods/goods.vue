<template>
  <view class="goods">
    <goods-list :goods="goods"></goods-list>
    <text class="over" v-if="flag">到底啦~</text>
  </view>
</template>

<script>
  import goodsList from '@/component/goods-list.vue';
  import {
    getGoods
  } from '@/util/api/goods.js';
  export default {
    data() {
      return {
        goods: [],
        page: 1,
        flag: false
      }
    },
    methods: {
      fetchData(callback) {
        let opt = {
          data: {
            pageindex: this.page
          }
        };

        getGoods(opt).then((res) => {
          this.goods = [...this.goods, ...res.data.message];
          callback && callback();
        }).catch(err => {
          console.log(err)
        })
      }
    },
    onReachBottom() {
      if (this.goods.length < (this.page * 10)) {
        this.flag = true;
        return
      }
      this.page++;
      this.fetchData()
    },
    onPullDownRefresh() {
      console.log(`下拉刷新`);
      this.flag = false;
      this.goods = [];
      this.page = 1;
      this.fetchData(uni.stopPullDownRefresh);
    },
    components: {
      goodsList
    },
    mounted() {
      this.fetchData()
    }
  }
</script>

<style>
  .goods {
    background-color: #eee;
  }

  .over {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 28rpx;
    display: inline-block;
  }
</style>
