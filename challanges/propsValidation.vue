<script setup lang="ts">
type MyString = "primary" | "ghost" | "dashed" | "link" | "text";
const props = defineProps({
  type: {
    type: String as () => MyString,
    required: true,
    default: "default",
    validator(value: string): boolean {
      return ["primary", "ghost", "dashed", "link", "text"].includes(value);
    },
  },
});
</script>

<template>
  <button :class="type">Button</button>
</template>

<style scope>
.default {
  border-radius: 10px;
  background-color: red;
}
</style>
