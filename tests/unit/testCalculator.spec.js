import { mount } from '@vue/test-utils'
import Calc from '@/components/Calc'

describe('testCalculator', () => {
  const wrapper = mount(Calc)

  test('Test first number', () => {
    const op1Input = wrapper.find('input[name=number]')

    op1Input.setValue(1)
    expect(wrapper.vm.number).toBe(1)
  })

  test('Test second number', () => {
    const op2Input = wrapper.find('input[name=number2]')

    op2Input.setValue(2)
    expect(wrapper.vm.number2).toBe(2)
  })

  test('Test sum', () => {
    const op1Input = wrapper.find('input[name=number]')
    const op2Input = wrapper.find('input[name=number2]')
    const sumButton = wrapper.find('button[name="+"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    expect(wrapper.vm.result).toBe(6)
  })

  test('Test sub', () => {
    const op1Input = wrapper.find('input[name=number]')
    const op2Input = wrapper.find('input[name=number2]')
    const sumButton = wrapper.find('button[name="-"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  test('Test div', () => {
    const op1Input = wrapper.find('input[name=number]')
    const op2Input = wrapper.find('input[name=number2]')
    const sumButton = wrapper.find('button[name="/"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  test('Test mult', () => {
    const op1Input = wrapper.find('input[name=number]')
    const op2Input = wrapper.find('input[name=number2]')
    const sumButton = wrapper.find('button[name="*"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    expect(wrapper.vm.result).toBe(8)
  })
})
