<template>
  <div>
    <div
     class="item"
     v-for="(item,index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title {
    line-height 50px
    font-size 28px
    padding 20px
  }
  .item-title-icon
    position relative
    left 6px
    top  6px
    display inline-block
    width 36px
    height 36px
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    background-size: 0.45rem 3.4rem
  .item-children
   padding 0 20px
   border 0
</style>
