<template>
  <CButton :number="count">Button</CButton>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

const CButton = () => import('./Button.vue')

export default defineComponent({
  components: {
    CButton,
  },
  setup(props) {
    const count = ref(12)

    return { count }
  },
})
</script>
