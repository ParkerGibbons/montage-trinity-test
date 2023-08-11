import type { Meta, StoryObj } from '@storybook/svelte';

import Test from "./Test.svelte";

export default {
    component:Test,
};

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
    title: 'shadcn/Test',
    component: Test,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
  } satisfies Meta<Test>;
  
  type Story = StoryObj<typeof meta>;