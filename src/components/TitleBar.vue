<template>
  <div class="title-bar">{{ title }}</div>
</template>

<script lang="ts">
export default {
  name: 'TitleBar',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.title-bar {
  margin: 20px 0 40px 0;
  font-size: 22px;
  font-weight: bold;
  border-left: 4px solid rgb(0, 157, 255);
  padding-left: 20px;
}
</style>
