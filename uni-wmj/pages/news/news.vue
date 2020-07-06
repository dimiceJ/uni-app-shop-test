<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newsList"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../component/news-item.vue';
  import {
    getNews
  } from '@/util/api/news.js';
	export default {
		data() {
			return {
				newsList: []
			}
		},
		methods: {
      fetchNews(){
        getNews().then((res) => {
          this.newsList = res.data.message;
        }).catch((err) => {
          console.log(`err`, err)
        })
      },
			goDetail (id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
			}
		},
		components: {"news-item":newsItem},
		mounted () {
			 this.fetchNews()
		}
	}
</script>

<style lang="scss">
	.news {

	}
</style>
