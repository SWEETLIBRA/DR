<template>
  <div>
    <div class="error" v-if="error">{{error}}</div>
    <div class="main">
      <input type="number" v-model.number="number" name="number">
      <input type="number" v-model.number="number2" name="number2">
      = {{ result }}
    </div>
    <div class="keyboard">
      <button
          v-for="operation of operations"
          @click="calculate(operation)"
          :key="operation"
          :name="operation"
      >{{ operation }}</button>
    </div>
    <div>
      <input
          id="onScreenKeyboard"
          type="checkbox"
          v-model="showKeyboard"
          :checked="showKeyboard"
      >
      <label for="onScreenKeyboard">Show keyboard</label>
    </div>
    <div v-show="showKeyboard">
      <div>
        <button
            v-for="keyboard of keyboards"
            :key="keyboard"
            @click="keyboardClick(keyboard)"
        >
          {{ keyboard }}
        </button>
        <button @click="backSpace">Backspace</button>
      </div>
      <div>
        <input
            id="operand1"
            type="radio"
            value="number"
            v-model="selectedOperand"
        >
        <label for="operand1">Операнд 1</label>
        <input
            id="operand2"
            type="radio"
            value="number2"
            v-model="selectedOperand"
        >
        <label for="operand2">Операнд 2</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    number: 0,
    number2: 0,
    result: 0,
    error: '',
    keyboards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operations: ['+', '-', '/', '*', '^', '%'],
    showKeyboard: false,
    selectedOperand: 'number'
  }),
  methods: {
    sum () {
      const { number, number2 } = this
      this.result = number + number2
    },
    sub () {
      const { number, number2 } = this
      this.result = number - number2
    },
    div () {
      const { number, number2 } = this
      if (number2 === 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = number / number2
    },
    mult () {
      const { number, number2 } = this
      this.result = number * number2
    },
    pow () {
      const { number, number2 } = this
      this.result = Math.pow(number, number2)
    },
    trunc () {
      const { number, number2 } = this
      this.result = Math.trunc(number / number2)
    },
    calculate (operation) {
      this.error = ''
      switch (operation) {
        case '+': this.sum(); break
        case '-': this.sub(); break
        case '/': this.div(); break
        case '*': this.mult(); break
        case '^': this.pow(); break
        case '%': this.trunc(); break
      }
    },
    keyboardClick (keyboard) {
      const selectedOperandValue = this[this.selectedOperand]

      if (typeof selectedOperandValue === 'number') {
        this[this.selectedOperand] = Number(`${selectedOperandValue}${keyboard}`)
      }
    },
    backSpace () {
      const selectedOperandValue = this[this.selectedOperand]

      if (typeof selectedOperandValue === 'number') {
        this[this.selectedOperand] = Math.trunc(selectedOperandValue / 10)
      }
    }
  }
}
</script>
