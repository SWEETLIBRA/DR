<template>
  <div class="div">
    <input type="text" v-model="prop">
    <button @click="save">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "TestVuex",
  data: () => {
    return {
      prop: ''
    }
  },
  methods: {
    ...mapActions(['addData']),
    save () {
      this.addData(this.prop)
    }
  }
}
</script>
