<template>
  <ul class="list">
    <li
    class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart.prevent="handleLetterStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
   </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 页面数据被更新，页面完成渲染之后
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleLetterStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // A字母的距离顶部高度, 移到update去了。性能上优化。没必要每次执行
        // const startY = this.$refs['A'][0].offsetTop
        // 如果再次执行的话，会清除上次的执行命令。 连续滑动， 触发16毫秒内连续触发两次，那么第一次会放弃执行函数jiliu
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 移动距离
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 16)
          // console.log(this.startY)
          // console.log(touchY)
          console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
