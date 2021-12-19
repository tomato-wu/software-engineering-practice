<template>
  <div class="base-nav">
    <span class="base-nav__label">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.base-nav {
  width: 100%;
  height: 100px;
  line-height: 100px;
  border-left: 5px solid rgb(48, 115, 223);
  text-align: start;
}
.base-nav__label {
  margin-left: 20px;
  color: rgb(48, 115, 223);
  font-size: 1.5rem;
}
</style>
