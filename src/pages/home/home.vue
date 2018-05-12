<template>
  <div class="hello">
   <home-header :city="city"></home-header>
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
      city: '',
      SwiperList: [],
      IconsList: [],
      RecommendList: [],
      WeekendList: []
    }
  },
  methods: {
    gethomeInfo () {
      // 本来是在static/mock有个虚拟json数据...  但在配置上，设置成api = static/mock
      axios.get('api/index.json')
        .then(this.getHonmeSus)
    },
    getHonmeSus (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.SwiperList = data.swiperList
        this.IconsList = data.iconList
        this.RecommendList = data.recommendList
        this.WeekendList = data.weekendList
      }
      console.log(res)
    }
  },
  mounted () {
    this.gethomeInfo()
  }
}
</script>
