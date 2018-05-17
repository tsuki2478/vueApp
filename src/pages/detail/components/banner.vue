<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src='../../../assets/image/1.jpg'>
    <div class="banner-info">
      <div class="banner-title">二之回廊的世界:赛利卡</div>
      <div class="banner-number">
        <span class="iconfont branner-icon">&#xe60d;</span>
      666</div>
    </div>
  </div>
  <common-gallary
  :imgs="imgs"
  v-show="showGallary"
  @close="handlereturnClick"></common-gallary>
</div>
</template>

<script>
import CommonGallary from './../../../common/gallary/gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img.hb.aicdn.com/f89608180852809ea12bf9a639f08ebd0e8a4932c37f-69hw7J_fw658',
        'http://img.hb.aicdn.com/1b9864a67da095a588aa072a82b74c798bc5396396be-zC7o0n_fw658',
        'http://img.hb.aicdn.com/3d1b21d0e6796666cd655d956a358c179246ae13ba33-tGDiZw_fw658' ]
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
