<template>
  <div class="wapper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for='item of swiperList' :key='item.id'>
      <img class='swiper-img' :src='item.imgUrl' />
    </swiper-slide>

    <swiper-slide >
      <img class='swiper-img' src='../../../assets/image/1.jpg' />
    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://b-ssl.duitang.com/uploads/item/201505/10/20150510184422_sTNUF.jpeg'
      }, {
        id: '002',
        imgUrl: 'https://b-ssl.duitang.com/uploads/item/201407/27/20140727114539_jZfWK.jpeg'
      }, {
        id: '003',
        imgUrl: 'https://b-ssl.duitang.com/uploads/item/201407/27/20140727114417_sdTQR.jpeg'
      }, {
        id: '004',
        imgUrl: 'https://b-ssl.duitang.com/uploads/item/201407/27/20140727114151_tLCPM.jpeg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wapper >>> .swiper-pagination-bullet-active
   background #fff !important
  .wapper >>> .swiper-pagination-bullet
   width 18px !important
   height 18px !important
  .wapper
   overflow hidden
   width 100%
   height 300px
   background #eee
  .swiper-img
   width 100%
   height 300px
</style>
