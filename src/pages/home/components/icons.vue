<template>
 <div>
  <swiper  class="icons" :options="swiperOption">
    <swiper-slide  v-for="(page, index) of pages" :key="index" class="icons-swiper">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img
          class="icon-img-content"
          :src='item.imgUrl'
          :alt="item.desc">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
     </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
 </div>
</template>

<script>
export default {
  name: 'HomeIcons',


  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      iconList: [{
        id: '001',
        imgUrl: 'http://www.uimaker.com/uploads/allimg/20140821/1408590457108625.jpg',
        desc: '泡泡'
      }, {
        id: '002',
        imgUrl: 'http://www.uimaker.com/uploads/allimg/20140821/1408590457108625.jpg',
        desc: '泡泡'
      }, {
        id: '003',
        imgUrl: 'http://www.uimaker.com/uploads/allimg/20140821/1408590457108625.jpg',
        desc: '泡泡'
      }, {
        id: '004',
        imgUrl: 'http://www.uimaker.com/uploads/allimg/20140821/1408590457108625.jpg',
        desc: '泡泡'
      }, {
        id: '005',
        imgUrl: 'http://www.uimaker.com/uploads/allimg/20140821/1408590457108625.jpg',
        desc: '泡泡'
      }, {
        id: '006',
        imgUrl: 'http://www.uimaker.com/uploads/allimg/20140821/1408590457108625.jpg',
        desc: '泡泡'
      }, {
        id: '007',
        imgUrl: 'http://www.uimaker.com/uploads/allimg/20140821/1408590457108625.jpg',
        desc: '泡泡'
      }, {
        id: '008',
        imgUrl: 'http://www.uimaker.com/uploads/allimg/20140821/1408590457108625.jpg',
        desc: '泡泡'
      }, {
        id: '009',
        imgUrl: 'http://www.uimaker.com/uploads/allimg/20140821/1408590457108625.jpg',
        desc: '泡泡泡泡泡泡泡泡泡泡'
      }]
    }
  },
  computed: {
    pages () {
      const pages =[]
      this.iconList .forEach((item,index) => {
        const page =  Math.floor(index / 8)
        if(!pages[page]) {
          pages[page]=[]
        }
        console.log('item:'+item)
        console.log('index:'+index)
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-pagination-bullet-active
    background pink  !important
  .icons >>> .swiper-pagination-bullet
    width 18px !important
    height 18px !important
   .icons-swiper >>> .swiper-container
    height 0
    padding-bottom 30%
   .icons-swiper
    display flex
    flex-direction row
    flex-wrap: wrap;
    .icon
      height 170px
      width 25%
      .icon-img
      .icon-img-content
        overflow hidden
        width 100%
    .icon-desc
      text-align center
      font-size 26px
      color  $bgColor
      ellipsis()
</style>
