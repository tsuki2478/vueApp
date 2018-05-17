<template>
  <div class="hello">
   <home-header ></home-header>
   <home-swiper :SwiperList="SwiperList"></home-swiper>
   <home-icons :IconsList="IconsList"></home-icons>
    <home-commend :RecommendList="RecommendList"></home-commend>
    <home-weekend :WeekendList="WeekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeCommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeCommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      SwiperList: [],
      IconsList: [],
      RecommendList: [],
      WeekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    gethomeInfo () {
      // 本来是在static/mock有个虚拟json数据...  但在配置上，设置成api = static/mock
      axios.get('api/index.json?city=' + this.city)
        .then(this.getHonmeSus)
    },
    getHonmeSus (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.SwiperList = data.swiperList
        this.IconsList = data.iconList
        this.RecommendList = data.recommendList
        this.WeekendList = data.weekendList
      }
      console.log(res)
    }
  },
  mounted () {
    this.lastCity = this.city
    this.gethomeInfo()
  },
  // app.vue里   <keep-alive>是第一次请求页面后缓存，第二次进去就直接读取其缓存
  // 当使用了keep-alive时，组件的mounted第二次是不会执行， 但是activeted会
  activated () {
    if (this.lastCity !== this.city) {

      this.lastCity = this.city
      this.gethomeInfo()
    }
  }
}
</script>
