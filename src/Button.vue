<template>
  <button @click="increase()">Button</button>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    number: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const count = ref(props.number)

    function increase() {
      count.value = count.value + 1
    }

    return { count, increase }
  },
})
</script>
