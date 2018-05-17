<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
      <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
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
        @click='handleCityClick(item.name)'
      >
      <div class="button">{{item.name}}</div>
      </div>
    </div>
  </div>
    <div
      class="area"
      v-for="(item,key) of cities"
      :key="key"
      :ref="key">
      <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
           class="item border-bottom"
           v-for="innerItem of item"
           :key="innerItem.id"
           @click="handleCityClick(innerItem.name)">
          {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // 这里改变的的是静态，并没有任何一部操作，也不是批量。
      // 所以可以直接用commit的派发给mutations。不经过dispatch到action
      //  mapMutations对应快捷mutations方法，这里就用他了
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
    click: true // 一开始的点击事件被bscroll阻止了，设置这个才能点击
    })
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
