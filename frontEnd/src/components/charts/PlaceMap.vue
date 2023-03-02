<template>
  <div class="chartSelf" ref="chart"></div>
</template>

<style scoped>
.chartSelf {
  height: 500px;
}
</style>

<script>
// 地图
import * as echarts from "echarts/core";
import china from "echarts/map/json/china.json";
import
{
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
} from "echarts/components";
import "echarts/extension/bmap/bmap";
import { MapChart } from "echarts/charts";


export default {
  data()
  {
    return {
      /**
       * @type {echarts.ECharts} chart
      */
      chart: undefined,
      /**
       * @type {echarts.EChartsOption} option
      */
      option: {
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
          borderType: "solid",
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2
        },
        visualMap: {
          left: 'right',
          min: 0,
          max: 80,
          inRange: {
            color: [
              '#313695',
              '#4575b4',
              '#74add1',
              '#abd9e9',
              '#e0f3f8',
              '#ffffbf',
              '#fee090',
              '#fdae61',
              '#f46d43',
              '#d73027',
              '#a50026'
            ]
          },
          text: ['High', 'Low'],
          calculable: true
        },
        toolbox: {
          show: true,
          left: 'left',
          top: 'top',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          type: 'map',
          // 绘制geo地图
          map: "china",
          name: '省评论数量',
          colorBy: 'data',
          selectedMode: "single",
          roam: true, // 是否可缩放
          aspectScale: 0.8,
          layoutSize: 1000,
          label: {
            show: false,
            fontSize: '0px',
          },
          itemStyle: {
            borderColor: "#fff",
          },
          emphasis: {
            label: {
              color: "#0A62FF",
            },
            itemStyle: {
              areaColor: "#FB923C",
            },
          },
          select: {
            itemStyle: {
              areaColor: "#FB923C",
            },
          },
          regions: [
            //隐藏南海诸岛
            {
              name: "南海诸岛",
              itemStyle: {
                // 隐藏地图
                opacity: 0, // 为 0 时不绘制该图形
              },
              label: {
                show: false, // 隐藏省份文案，false 不隐藏
              },
            },
          ],
        }]
      }
    }
  },
  mounted()
  {
    fetch('http://127.0.0.1:3000/api/place')
      .then(res => res.json())
      .then(obj =>
      {
        this.option.series[0].data = obj.map(({ _id, count }) =>
        {
          return {
            name: _id,
            value: count
          }
        })
      })
      .then(() => { this.initMap() })

  },
  methods: {
    // 初始化 echarts
    initMap()
    {
      echarts.use([
        ToolboxComponent,
        TooltipComponent,
        VisualMapComponent,
        GeoComponent,
        MapChart,
      ]);

      let mapChart = echarts.init(this.$refs.chart);

      echarts.registerMap('china', china);

      mapChart.setOption(this.option);

      mapChart.on('click', (parma) => console.log(parma))
    },
  },
}
</script>
