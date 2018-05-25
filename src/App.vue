<template>
  <div id="app">
    <!-- exclude 排除掉Detail组件。也就是不缓存Detail组件  -->
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
