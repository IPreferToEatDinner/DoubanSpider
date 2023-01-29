<template>
  <Box>
    <h1>Welcome!</h1><br>
    这里是豆瓣三体动画爬虫的数据分析和展示界面，你将会看到豆瓣三体动画的评分信息、评论时间、评论来源以及词云等信息
  </Box>
</template>


<script>
import Box from '../components/Box.vue';

export default {
  components: { Box }
}
</script>

<style scoped>
h1 {
  font-size: 30px;
}
</style>