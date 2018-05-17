<template>
  <div class="containner" @click="handlereturnClick">
    <div class="wrapper">
    <swiper :options="swiperOptions">
    <swiper-slide v-for="(item,index) in imgs" :key="index">
      <img class='gallary-img' :src="item" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handlereturnClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .containner >>> .swiper-container
   overflow inherit
  .containner
   display flex
   flex-direction column
   justify-content center
   z-index 99
   position fixed
   left 0
   right 0
   bottom 0
   top 0
   background #00
   .wrapper
    height 0px
    width 100%
    padding-bottom 100%
    .gallary-img
     width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
      font-size 30px
 </style>
