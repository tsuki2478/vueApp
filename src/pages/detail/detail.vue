<template>
<div>
<detailbanner></detailbanner>
<detail-header></detail-header>
<div class="content"></div>
</div>
</template>

<script>
import Detailbanner from './components/banner'
import DetailHeader from './components/Header'

export default {
  name: 'Detail',
  components: {
    Detailbanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
   height 20rem
</style>
