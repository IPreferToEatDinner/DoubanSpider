<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <div class="grid-content ep-bg-purple">
        <ChartArea>
          <PlaceMap></PlaceMap>
        </ChartArea>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content ep-bg-purple">
        <ChartArea>
          <AverageScore></AverageScore>
        </ChartArea>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="grid-content ep-bg-purple">
        <ChartArea>
          <TimeCount></TimeCount>
        </ChartArea>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="16">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </el-col>
  </el-row>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

<script>
import ChartArea from '../components/ChartArea.vue';
import AverageScore from '../components/charts/AverageScore.vue';
import PlaceMap from '../components/charts/PlaceMap.vue';
import TimeCount from '../components/charts/TimeCount.vue';
export default {
  components: { AverageScore, ChartArea, PlaceMap, TimeCount }
}
</script>