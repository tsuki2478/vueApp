<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of Weenkend"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      Weenkend: [{
        id: '001',
        imgUrl: 'http://img.hb.aicdn.com/914a0abcb94affab338bb62437fd79861fba58aa9e98-amEtz8_fw658',
        title: '花瓣之美',
        desc: '啪啦啪啦啪啦啪啦啪啦啪啦啪啦啪啦'
      }, {
        id: '002',
        imgUrl: 'http://img.hb.aicdn.com/914a0abcb94affab338bb62437fd79861fba58aa9e98-amEtz8_fw658',
        title: '花瓣之美',
        desc: '啪啦啪啦啪啦啪啦啪啦啪啦啪啦啪啦'
      }, {
        id: '003',
        imgUrl: 'http://img.hb.aicdn.com/914a0abcb94affab338bb62437fd79861fba58aa9e98-amEtz8_fw658',
        title: '花瓣之美',
        desc: '啪啦啪啦啪啦啪啦啪啦啪啦啪啦啪啦'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~@/assets/styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
