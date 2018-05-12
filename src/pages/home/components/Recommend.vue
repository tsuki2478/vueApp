<template>
 <div class="commend">
   <div class="title">热门推销</div>
     <ul>
       <li class="item border-bottom" v-for="item of RecommendList" :key='item.id'>
         <img :src="item.imgUrl" alt="图片" class="item-img">
         <div class="item-info">
           <p class="item-title">{{item.title}}</p>
           <p class="item-desc">{{item.desc}}</p>
           <button class="item-button">查看详情</button>
         </div>
       </li>
     </ul>
 </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    RecommendList: Array
  },
  data () {
    return {
      List: [{
        id: '001',
        imgUrl: 'http://img.hb.aicdn.com/2b1ec65942033dcbe60305a868cbf841b4174c678b18-yG66fW',
        title: '花瓣之美',
        desc: '啪啦啪啦啪啦啪啦啪啦啪啦啪啦啪啦'
      }, {
        id: '002',
        imgUrl: 'http://img.hb.aicdn.com/2b1ec65942033dcbe60305a868cbf841b4174c678b18-yG66fW',
        title: '花瓣之美',
        desc: '啪啦啪啦啪啦啪啦啪啦啪啦啪啦啪啦'
      }, {
        id: '003',
        imgUrl: 'http://img.hb.aicdn.com/2b1ec65942033dcbe60305a868cbf841b4174c678b18-yG66fW',
        title: '花瓣之美',
        desc: '啪啦啪啦啪啦啪啦啪啦啪啦啪啦啪啦'
      }, {
        id: '004',
        imgUrl: 'http://img.hb.aicdn.com/2b1ec65942033dcbe60305a868cbf841b4174c678b18-yG66fW',
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
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    font-size 24px
    font-weight bold
  .item
    overflow: hidden
    display: flex
    height: 180px
    .item-img
      width: 170px
      height: 170px
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: 24px
        ellipsis()
      .item-desc
        line-height: .8rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .1rem
        color: #fff
</style>
