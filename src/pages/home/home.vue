<template>
  <div class="hello">
   <h1>
   </h1>
   <home-header></home-header>
   <home-swiper></home-swiper>
   <div>下面是icon图标点击。。测试</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
