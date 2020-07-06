<template>
  <view class="pics">
    <scroll-view scroll-y="true" class='left'>
      <view v-for="(item,index) in cates" class="left-item" :key="index" :class="acative == index?'active':''" @click="cickItem(index,item.title)">{{item.title}}</view>
    </scroll-view>
    <scroll-view scroll-y="true" >
      <view>
        {{itemTitle}}
      </view>
    </scroll-view>
  </view>
</template>

<script>
  var that = this;
  import {
    getPics,
    getItem
  } from '@/util/api/pics.js';
  export default {
    data() {
      return {
        cates: [],
        acative: 0,
        itemTitle:''
      }
    },
    methods: {
      fetchPics() {
        getPics().then((res) => {
          this.cates = res.data.message;
          this.itemTitle = this.cates[0].title;
        }).catch(err => {
          console.log(err)
        })
      },
      cickItem(_index,title){
        this.acative = _index;
      }
    },
    watch: {
      acative:{
        handler: function(newValue, oldValue){
          if(this.cates.length > 0 ){
            this.itemTitle = this.cates[newValue].title;
          }
        },
        immediate:true,
        deep: true
      }
    },
    mounted() {
      this.fetchPics()
    }
  }
</script>

<style lang="scss">
  page {
    height: 100%;
  }

  .pics {
    height: 100%;
    display: flex;
    .left {
      width: 240rpx;
      height: 100%;
      border-radius: 1px solid #eee;

      view {
        height: 60px;
        line-height: 60px;
        color: #333;
        text-align: center;
        border: 1px solid #eee;

      }

      .active {
        background-color: $rColor;
        color: #fff;
        transition: all .3s;
      }
    }
  }
</style>
