<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe65b;</div>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'CityHeader',
  data () {
    return {
     target: 3,
     arr:[86, 16, 6, 15, 80, 29, 41, 22, 13, 78],
     xx:[]
    }
  },
  methods: {
     binarySearch(target, arr) {
      let start = 0;
      let end = arr.length - 1;

      while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (target == arr[mid]) {
          return mid;
        } else if (target > arr[mid]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
        }
      return -1;
     },
  bubbleSort(arr) {
    for(let i = 1; i<arr.length;i++) {
        for(let j =0; j<arr.length -i ; j++) {
          if(arr[j]> arr[j+1]) {
            var temp= arr[j]
            arr[j]=arr[j+1]
            arr[j+1] =temp
           }
          }
      }
      console.log('yy:',arr)
    return arr;
    },
  insertSort(arr){
      var tmp;
      for(var i=1;i<arr.length;i++){
          tmp  = arr[i];
          for(var j=i;j>=0;j--){
              if(arr[j-1]>tmp){
                  arr[j]=arr[j-1];
              }else{
                  arr[j]=tmp;
                  break;
              }
          }
      }
      console.log('xx:',arr)
      return arr
  }
    },
  mounted () {
    // this.binarySearch(this.target, this.arr)
    this.bubbleSort(this.arr)
    this.insertSort(this.arr)
    var quickSort = function (arr) {
              if (arr.length <= 1) { return arr; }
              var pivotIndex = Math.floor(arr.length / 2);
              var pivot = arr[pivotIndex];
              arr = arr.filter( (arr,index) => index !== pivotIndex )
              var left = [];
              var right = [];
              for (var i = 0; i < arr.length; i++) {
                      if (arr[i] > pivot) {
                          right.push(arr[i]);
                      } else {
                          left.push(arr[i]);
                      }
              }
            // console.log('arr:',arr)
            // console.log('pivote:', pivot)
            // console.log('left:',left)
            // console.log('right:',right)
            // console.log(quickSort(left))
            // console.log(quickSort(right))
            console.log('xx',quickSort(left).concat([pivot,quickSort(right)]))

          return quickSort(left).concat([pivot],quickSort(right));

    }
    console.log(quickSort(this.arr))
  },
  computed: {
  }
}
</script>

<style lang="stylus" scoped>
 @import '~@/assets/styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: 32px
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: 0.533333rem;
      color: #fff
</style>
