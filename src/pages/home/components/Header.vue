<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont bcak-icon">&#xe65b;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6ac;</span>
      输入城市/景点/游玩主题
    </div>
   <router-link to="/city">
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
   </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    // 获取vuex的getter值,然后直接 this.doubleCity
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style  lang="stylus" scoped >
@import '~@/assets/styles/varibles.styl'
// scoped仅仅是对当前组件有效
//  在rest.css设置了1rem 1rem = html font-size = 50px!! 但是px2rem覆盖了其设置
//  px2rem 设置了 750 =75
.header
  display flex
  line-height: 86px
  background $bgColor
  color #fff
  flex-direction: row
 .header-left
  width 64px
  .bcak-icon
    font-size  40px
 .header-input
  flex 1
  line-height 64px
  height 64px
  padding-left 20px
  margin-top 12px
  background #ffffff
  border-radius 10px
  color #ccc
 .header-right
  min-width 124px
  text-align center
  color #fff
  .arrow-icon
   margin-left -2px
   font-size 24px
</style>
