<template>
<div>
<detailbanner></detailbanner>
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
export default {
  name: 'Detail',
  components: {
    Detailbanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '国家:A',
        children: [{
          title: '省级:A',
          children: [{
            title: '城市:A'
          }, {title: '城市:B'
          }]
        }, {
          title: '省级:B',
          children: [{
            title: '城市:B-A'
          }, {title: '城市:B-B'
          }]
        }]
      }, {
        title: '国家:B'
      }, {
        title: '国家:C'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
   height 20rem
</style>
