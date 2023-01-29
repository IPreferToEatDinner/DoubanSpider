<template>
  <div class="boxSelf">
    <slot />
  </div>
</template>

<style scoped>
.boxSelf {
  display: inline-block;
  box-sizing: border-box;
  width: 90%;
  height: auto;
  padding: 20px 20px;
  margin: 20px 0;
  border-left: solid 4px rgb(21, 163, 98);
  border-radius: 5px 5px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  font-size: large;
  letter-spacing: 1.5px;
  line-height: 1.5em;
}
</style>

<script>
export default {
  
}
</script>