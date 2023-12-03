import Counter from "@/components/Counter.vue";

export default {
  title: "Counter",
  component: Counter,
  argTypes: {}
}

const Template = (args) => ({
  components: { Counter },
  setup() {
    return { args }
  },
  template: "<Counter />",
});

export const Default = Template.bind({});
Default.args = {}