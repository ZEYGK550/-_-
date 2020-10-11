/**
 * 测试界面
 * @Author:ZEYGK
 * @Date:2020-10-11
 */
<template>
  <div class="test">
    <!-- 地图格子绘制 -->
    <template v-for="(x,index) in checkerboard">
      <!-- 换行 -->
      <div :key="-1*index-1" class="wrap" v-if="index%checkerLength==0"></div>
      <!-- 六边形格子 -->
      <div :key="index" :class="{hexagon: true, evenOffSet: index%checkerLength==0&&Math.floor(index/checkerLength)%2==1}">
        <span class="hexagonContent">{{index}}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  mounted(){
  },
  data () {
    return {
      // 棋盘宽度
      checkerLength: 5,
      // 棋盘内容
      checkerboard: [
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },{
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },{
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        },
      ]
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 大盒 */
  .test{
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 10px;
  }
  /* 六边形绘制，由三个旋转角度不同的矩形组成 */
  .hexagon, .hexagon:before, .hexagon:after{
      width: 87px;
      height: 56px;
      /* background: red; */
      position: relative;
      border-left: 5px solid red;
      border-right: 5px solid red;
  }
  /* 核心六边形 */
  .hexagon{
      margin-top: 36px;
      float: left;
      margin-left: 6px;
  }
  /* 换行 */
  .wrap{
    clear: both;
  }
  /* 右转矩形 */
  .hexagon:before{
      content: "";
      display: block;
      position: absolute;
      transform: rotate(60deg);
      margin-left: -5px;
  }
  /* 左转矩形 */
  .hexagon:after{
      content: "";
      display: block;
      position: absolute;
      transform: rotate(-60deg);
      margin-left: -5px;
      
  }
  /* 偶数行偏移 */
  .evenOffSet{
      margin-left: 57px;
  }
  /* 六边形内容 */
  .hexagonContent{
    position: absolute;
    z-index: 5;
    width: 85px;
    height: 85px;
    font-size: 30px;
    text-align: center;
    top: 13%;
  }
</style>