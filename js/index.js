const { color } = require("echarts");

(function(){
  var myChart = echarts.init(document.querySelector(".bar .chart"))
  option = {
    color:'#2f89cf',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top:"10px",
      left: '0%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel:{
          color:"rgba(255,255,255,.6)",
          fontSize:'12'
        },
        axisLine:{
          show:false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel:{
          color:'rgba(255,255,255,.6)',
          fontSize:"12"
        },
        axisLine:{
          lineStyle:{
            color:"rgba(255,255,255,.1)"
          }
        },
        splitLine:{
          lineStyle:{
            color:"rgba(255,255,255,1)"
          }
        }
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '35%',
        itemStyle:{
          barBorderRadius:5
        },
        data: [200,300,300,900,1500,1200,600]
      }
    ]
  };
  myChart.setOption(option)
// 图标跟随屏幕自动适配
  window.addEventListener('resize',function(){
    myChart.resize()
  })
})()