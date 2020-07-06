<template>
  <view class="index">
    <!-- 轮播 -->
    <view class="swiper-wrapper">
      <swiper class="index-swiper" circular autoplay @change="dotChange">
        <swiper-item v-for="(item,index) in lunboData" :key="index">
          <image :src="item.img" mode=""></image>
        </swiper-item>
      </swiper>
      <!-- swiperDot组件 -->
      <swiper-dot class="dot" :current="current" :list="lunboData"></swiper-dot>
    </view>
    <!-- /轮播 -->
    <!-- 导航 -->
    <view class="nav">
      <view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navClick(item.path)">
        <view :class="item.icon"> </view>
        <text class="nav-title">{{item.title}}</text>
      </view>
    </view>
    <!-- /导航 -->
    <!-- 推荐商品 -->
	<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		</view>
    <!-- /推荐商品 -->
  </view>
</template>

<script>
  import swiperDot from '@/component/swiperDot.vue';
  import goodsList from '@/component/goods-list.vue';

  import {
    // getLunbo,
    getGoods
  } from '@/util/api/index.js';
  export default {
    data() {
      return {
        navs: [{
            icon: 'iconfont icon-ziyuan',
            title: '测试超市',
            path: '/pages/goods/goods'
          },
          {
            icon: 'iconfont icon-guanyuwomen',
            title: '联系我们',
            path: '/pages/contact/contact'
          },
          {
            icon: 'iconfont icon-tupian',
            title: '社区图片',
            path: '/pages/pics/pics'
          },
          {
            icon: 'iconfont icon-shipin',
            title: '学习视频',
            path: '/pages/videos/videos'
          }
        ],
        lunboData: [{
          img:'/static/images/index/mylunbo1.jpg'
        },{
          img:'/static/images/index/mylunbo2.jpg'
        },{
          img:'/static/images/index/mylunbo3.jpg'
        }],
        current: 0,
        goods: []
      }
    },
    onLoad() {
      // this.fetchlunbo();
      this.fetchHotGoods();
    },
    methods: {
      fetchlunbo() {
        getLunbo().then((res) => {
          this.lunboData = res.data.message;
        }).catch((err) => {
          console.log(`err`, err)
        })
      },
      // 改变组件指示点下标
      dotChange(e) {
        this.current = e.detail.current;
      },
      fetchHotGoods() {
        getGoods().then((res) => {

          this.goods = res.data.message;

        }).catch((err) => {
          console.log(`err`, err)
        })
      },
      goGoodsDetail(id){
        uni.navigateTo({
           url:`/pages/goods-detail/goods-detail?id=${id}`
        })
      },
      navClick(url){
        uni.navigateTo({
          url
        })
      }
    },
    components: {
      swiperDot,
      goodsList
    },
  }
</script>

<style lang="scss">
  .index {
    .swiper-wrapper {
      position: relative;

      .index-swiper {
        width: 750rpx;
        height: 380rpx;

        image {
          width: 100%;
          height: 100%;
        }
      }
    }

    .nav {
      display: flex;
       margin-top: 20rpx;
      .nav-item {
        width: 25%;
        text-align: center;
        .nav-title{
          font-size: 26rpx;

        }
        view {
          background-color: $rColor;
          width: 120rpx;
          height: 120rpx;
          border-radius: 50%;
          margin: 0 auto;
          line-height: 120rpx;
          color: #fff;
          font-size: 50rpx;
          margin-bottom: 8rpx;
        }

      }
    }
    		.hot_goods {
    			background: #eee;
    			overflow: hidden;
    			margin-top: 10px;
    			.tit{
    				height: 50px;
    				line-height: 50px;
    				color: $rColor;
    				text-align: center;
    				letter-spacing: 20px;
    				background: #fff;
    				margin: 7rpx 0;
    			}
    		}
  }
</style>
