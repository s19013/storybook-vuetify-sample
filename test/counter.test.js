import Counter from '@/components/Counter.vue'
import { mount } from '@vue/test-utils'

test("increment", () => {
    const wrapper = mount(Counter)
    wrapper.vm.increment()
    expect(wrapper.vm.count).toBe(1)
})