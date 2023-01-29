<template>
  <div class="chartSelf" ref="chart"></div>
</template>

<style scoped>
.chartSelf {
  height: 300px;
}
</style>

<script>
import * as echarts from 'echarts';

export default {
  data()
  {
    return {
      chart: undefined,
      option: {
        legend: {},
        tooltip: {},
        dataset: {
          // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
          // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
          // 如果不指定 dimensions，也可以通过指定 series.encode
          // 完成映射，参见后文。
          dimensions: ['时间', 'score'],
          source: [
            { 时间: '1-27', score: 43.3 },
            { 时间: '1-28', score: 83.1 },
            { 时间: '1-29', score: 86.4 },
            { 时间: '1-30', score: 72.4 },
          ],
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'line', smooth: true }],
      },
    };
  },
  mounted()
  {
    this.chart = echarts.init(this.$refs.chart);
    // 使用刚指定的配置项和数据显示图表。
    this.chart.setOption(this.option);
  },
};
</script>
