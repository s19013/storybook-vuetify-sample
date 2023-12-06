import Counter from '@/components/Counter.vue'

test("increment", async () => {
    const counter = new Counter
    counter.increment()
    expect(counter.count).toBe(1)
})