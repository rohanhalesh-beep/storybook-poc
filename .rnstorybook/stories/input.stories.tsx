import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Input } from '../../components/input';
import { View } from 'react-native';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Enter text',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Default',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
  },
};

export const Underline: Story = {
  args: {
    label: 'Underline',
    variant: 'underline',
  },
};

export const CustomStyle: Story = {
  args: {
    label: 'Custom Styled',
    variant: 'default',
    style: {
      backgroundColor: '#eef6ff',
      borderColor: '#2196F3',
    },
  },
};
