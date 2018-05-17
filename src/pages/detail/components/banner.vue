<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg">
    <div class="banner-info">
      <div class="banner-title">{{this.sightName}}</div>
      <div class="banner-number">
        <span class="iconfont branner-icon">&#xe60d;</span>
      {{this.gallaryImgs.length}}</div>
    </div>
  </div>
  <common-gallary
  :imgs="gallaryImgs"
  v-show="showGallary"
  @close="handlereturnClick"></common-gallary>
</div>
</template>

<script>
import CommonGallary from './../../../common/gallary/gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handlereturnClick () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
   position relative
   overflow hidden
   height 0
   padding-bottom 55%
   .banner-img
    width 100%
   .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 60px
    color #fff
    background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
    .banner-title
     flex:1
     font-size 32px
     padding 0 20px
    .banner-number
     margin-top 14px
     padding 0 40px
     height 32px
     line-height 32px
     border-radius 20px
     background rgba(0,0,0,0.8)
     font-size 24px
     .branner-icon
      font-size 24px
</style>
