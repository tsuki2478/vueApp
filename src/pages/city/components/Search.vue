<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
  </div>
</template>

<script>
// import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~@/assets/styles/varibles.styl'
  .search
    height: 80px
    padding: 10px
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: 80px
      padding: 10px
      line-height: 80px
      text-align: center
      border-radius: .06rem
      color: #666
</style>
