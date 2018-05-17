<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">深圳</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
          class="button-wrapper"
          v-for="item of hot"
          :key="item.id"
          >
            <div class="button">{{item.name}}</div>
          </div>

        </div>
      </div>
      <div
          class="area"
          v-for="(item,key) of cities"
          :key="key"
          :ref="key"
       >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
           v-for="innerItem of item"
           :key="innerItem.id"
          >
          {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
    // 监视Alphabet点击的值， letter是传过来的。 通过点击滚动到相对应位置,如果不懂refs为什么这么写。可以打印看看
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~@/assets/styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 186px
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: 53px
      background: #eee
      padding-left: 20px
      color: #666
      font-size: 26px
    .button-list
      overflow: hidden
      padding: 10px 60px 10px 10px
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: 10px
          padding: 10px 0
          text-align: center
          border: 2px solid #ccc
          border-radius: 8px
    .item-list
      .item
        line-height: 76px
        padding-left: 20px
</style>
