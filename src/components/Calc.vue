<template>
  <div>
    <div class="main">
      <input type="text" v-model.number="increment"/>
      <input type="text" v-model.number="increment2"/>
      = {{result}}
    </div>
    <div class="keyboard">
      <button @click="sum">+</button>
      <button @click="sub">-</button>
      <button @click="div">/</button>
      <button @click="mult">*</button>
      <button @click="expo">**</button>
      <button @click="intDiv">% /</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    increment: 0,
    decrement2: 0,
    result: 0
  }),
  methods: {
    sum () {
      this.result = this.increment + this.increment2
    },
    sub () {
      this.result = this.increment - this.increment2
    },
    div () {
      this.result = this.increment / this.increment2
    },
    mult () {
      this.result = this.increment * this.increment2
    },
    expo () {
      this.result = this.increment ** this.increment2
    },
    intDiv () {
      this.result = (this.increment - this.increment % this.increment2) / this.increment2
    }
  }
}
</script>
