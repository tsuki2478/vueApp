<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div
    class="search-content"
    ref="search"
    v-show="keyword"
    >
      <ul>
        <li
        class="search-item border-bottom"
        v-for="item of list" :key="item.id">
          {{item.name}}
        </li>
        <li
        class="search-item border-bottom"
        v-show="hasNodata">
        没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    // list=搜索匹配到的数据！ 如果为空，则显示： 没有找到匹配数据
    hasNodata () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // keyword是用户输入，当为空时，之前搜索的数据list也是空！
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
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
  .search-content
    overflow hidden
    position absolute
    z-index 1
    top 186px
    left 0
    right 0
    bottom 0
    background #eee
   .search-item
    line-height 62px
    padding-left 20px
    color #666
    background #fff
</style>
