<template>
<div>
<detailbanner
:sightName="sightName"
:bannerImg="bannerImg"
:gallaryImgs="gallaryImgs"></detailbanner>
<detail-header></detail-header>
<div class="content">
  <detail-list :list="list"></detail-list>
</div>
</div>
</template>

<script>
import Detailbanner from './components/banner'
import DetailHeader from './components/Header'
import DetailList from './components/list'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    Detailbanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      //  this.$route.params 可以获取路由传过来的值， 进入detail时，我穿了个id过来; 所以是.id
      axios.get('/api/detail.json', {
        params: {id: this.$route.params.id}
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
        console.log(data)
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
   height 20rem
</style>
