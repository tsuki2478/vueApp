<template>
  <div>
    <router-link tag='div' to="/"
    class="header-abs"
    v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe65b;</span>
    </router-link>
    <div class="header-fixed"
    v-show="!showAbs"
    :style=opacityStyle>
      <router-link  to="/" >
        <span class="iconfont header-fixed-back">&#xe65b;</span>
      </router-link>
        景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // 获取到页面scroll滑动值，距离顶部
      const top = document.documentElement.scrollTop
      if (top > 60) {
        // 动态style..
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
        // console.log(document.documentElement.scrollTop)
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header-abs
   position absolute
   left 20px
   top: 20px
   width 80px
   height 80px
   line-height 80px
   border-radius 40px
   background rgba(0,0,0,.8)
   .header-abs-back
    color #fff
    font-size 50px
    padding-left: 5px;
  .header-fixed
    z-index 2
    position: fixed
    top 0
    right 0
    left 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: 32px
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: 0.533333rem;
      color: #fff
</style>
