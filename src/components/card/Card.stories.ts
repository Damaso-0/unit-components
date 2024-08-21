import Card from '@/components/card';
import type { Meta, StoryObj } from '@storybook/react';
import image from '@/stories/assets/painting.avif'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Card/Simple Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Card Title',
    description: 'Card Description',
    image: image.src,
  },
};