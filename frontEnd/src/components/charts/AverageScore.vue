<template>
  <div class="chartSelf" ref="chart"></div>
</template>

<style scoped>
.chartSelf {
  height: 500px;
}
</style>

<script>
import * as echarts from 'echarts';

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
      option:
      {
        title: {
          text: '日均评分',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          }
        },
        dataset: {
          dimensions: ['时间', 'score'],
          source: []
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {
          min: 0,
          max: 5,
        },
        series: [{
          type: 'line', smooth: true,
        }]
      }
    };
  },
  methods: {
    getSource()
    {
      fetch('http://127.0.0.1:3000/api/averageScore')
        .then(response => response.json())
        .then(data =>
        {
          this.option.dataset.source = data.map(({ _id, avgScore }) =>
          {
            return {
              '时间': _id,
              'score': avgScore
            }
          });
        })
        .then(() =>
        {
          this.chart = echarts.init(this.$refs.chart);
          // 使用刚指定的配置项和数据显示图表。
          this.chart.setOption(this.option);
        })
    }
  },
  mounted()
  {
    this.getSource()
  },
};
</script>
