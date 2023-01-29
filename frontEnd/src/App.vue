<template>
  <el-container class="total">
    <el-aside>
      <div class="symbol">
        <RouterLink to="/">
          <img src="./assets/app-logo.svg" alt="">
          <span>ZSR</span>
        </RouterLink>
      </div>
      <div v-for="([link, name], index) in links" :key="index" class="list">

        <RouterLink :to="link">{{ name }}</RouterLink>

      </div>
    </el-aside>
    <el-container>
      <el-header>
        <div class="topic">
          豆瓣三体动画数据分析
        </div>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>

</template>


<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  name: 'app',
  components: { RouterView, RouterLink },
  data()
  {
    return {
      links: [['/', 'home'], ['/charts', 'charts']],
    }
  },
  methods: {
  }
}
</script>

<style scoped>
div.list a.router-link-exact-active {
  border-left: 3px solid rgb(21, 163, 98);
  background-color: rgb(237, 253, 246);
  color: rgb(21, 163, 98);
}

.list {
  overflow: hidden;
}

.list a {
  display: inline-block;
  margin: 0px 0px;
  padding: 0px 20px;
  height: 100%;
  width: 100%;
  line-height: 50px;
  font-weight: normal;
  font-size: large;
  letter-spacing: 1px;
  transition: all 0.1s ease;
}

.list a:visited {
  color: black;
}

.list:hover {
  border-left: 3px solid rgb(21, 163, 98);
}

.list a:hover {
  color: rgb(21, 163, 98);
}

.symbol {
  height: 60px;
  line-height: 60px;
  margin-bottom: 20px;
}

.symbol img {
  height: 36px;
  vertical-align: middle;
  margin: 0 15px;
}

.symbol span {
  vertical-align: middle;
}

.topic {
  line-height: 56px;
  text-align: center;
  letter-spacing: 5px;
  font-size: 25px;
  font-family: 'Microsoft YaHei';
  font-weight: lighter;
}

.total {
  height: 100%;
  width: 100%;
}

.el-header {
  z-index: 1;
  background-color: rgb(255, 255, 255);
  height: 56px;
  border-bottom: 2px solid rgb(0 0 0 / 10%);
  box-shadow: 0px 7px 60px rgb(0 0 0 / 10%);
}

.el-aside {
  z-index: 2;
  background-color: rgb(255, 255, 255);
  height: 100%;
  width: 250px;
  box-shadow: 0px 8px 45px rgb(0 0 0 / 5%);

}

.el-main {
  background-color: rgb(245, 246, 254);
  padding: 30px 40px;
}
</style>
