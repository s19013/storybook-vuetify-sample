import Counter from "@/components/Counter.vue";
import { within, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


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

export const Default = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByText('Count: 0')).toBeInTheDocument()
    }
}

export const Increment = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await fireEvent.click(canvas.getByText('Increment'));
        await fireEvent.click(canvas.getByText('Increment'));

        expect(canvas.getByText('Count: 2')).toBeInTheDocument()
    }
}

export const Reset = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await fireEvent.click(canvas.getByText('Increment'));
        await fireEvent.click(canvas.getByText('Increment'));

        await fireEvent.click(canvas.getByText('Reset'));

        expect(canvas.getByText('Count: 0')).toBeInTheDocument()
    }
}