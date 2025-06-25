import type { Meta, StoryObj } from '@storybook/react-native';
import { View, Text } from 'react-native';
import { fn } from 'storybook/test';
import { Button } from '../../components/Button';
import React from 'react';
// Mock icon component for demonstration
const MockIcon = ({ name }: { name: string }) => (
  <View style={{ 
    width: 16, 
    height: 16, 
    backgroundColor: 'currentColor', 
    borderRadius: 2,
    opacity: 0.8 
  }}>
    <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>
      {name}
    </Text>
  </View>
);

const meta = {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ 
        flex: 1, 
        padding: 20,
        backgroundColor: '#f8f9fa',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { 
    onPress: fn(),
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost', 'gradient'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic variants
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Get Started',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Learn More',
  },
};

// Size variants
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    primary: true,
    label: 'Large Button',
  },
};

// Style variants
export const PrimaryOutline: Story = {
  args: {
    primary: true,
    variant: 'outline',
    label: 'Primary Outline',
  },
};

export const PrimaryGhost: Story = {
  args: {
    primary: true,
    variant: 'ghost',
    label: 'Primary Ghost',
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: 'outline',
    label: 'Secondary Outline',
  },
};

export const SecondaryGhost: Story = {
  args: {
    variant: 'ghost',
    label: 'Secondary Ghost',
  },
};

// States
export const Disabled: Story = {
  args: {
    primary: true,
    label: 'Disabled Button',
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    label: 'Disabled Secondary',
    disabled: true,
  },
};

// With icons
export const WithLeftIcon: Story = {
  args: {
    primary: true,
    label: 'Download',
    icon: <MockIcon name="↓" />,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    primary: true,
    label: 'Continue',
    icon: <MockIcon name="→" />,
    iconPosition: 'right',
  },
};

// Custom colors
export const CustomColor: Story = {
  args: {
    primary: true,
    label: 'Custom Color',
    backgroundColor: '#FF6B6B',
  },
};

export const CustomColorOutline: Story = {
  args: {
    primary: true,
    variant: 'outline',
    label: 'Custom Outline',
    style: { borderColor: '#4ECDC4' },
  },
};

// Interactive examples
export const CallToAction: Story = {
  args: {
    primary: true,
    size: 'large',
    label: 'Start Free Trial',
    icon: <MockIcon name="★" />,
    iconPosition: 'left',
  },
};

export const DestructiveAction: Story = {
  args: {
    primary: true,
    label: 'Delete Account',
    backgroundColor: '#FF3B30',
  },
};

export const SuccessAction: Story = {
  args: {
    primary: true,
    label: 'Save Changes',
    backgroundColor: '#34C759',
    icon: <MockIcon name="✓" />,
    iconPosition: 'left',
  },
};

// Playground story for interactive testing
export const Playground: Story = {
  args: {
    primary: true,
    size: 'medium',
    variant: 'solid',
    label: 'Playground Button',
    disabled: false,
    iconPosition: 'left',
  },
};

// Button group demonstration
export const ButtonGroup: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button primary label="Primary Action" onPress={fn()} />
      <Button variant="outline" label="Secondary Action" onPress={fn()} />
      <Button variant="ghost" label="Tertiary Action" onPress={fn()} />
    </View>
  ),
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'flex-start' }}>
      <Button size="small" primary label="Small Button" onPress={fn()} />
      <Button size="medium" primary label="Medium Button" onPress={fn()} />
      <Button size="large" primary label="Large Button" onPress={fn()} />
    </View>
  ),
};

// Variant showcase
export const VariantShowcase: Story = {
  render: () => (
    <View style={{ gap: 16, alignItems: 'flex-start' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
        Primary Variants
      </Text>
      <Button primary variant="solid" label="Solid Primary" onPress={fn()} />
      <Button primary variant="outline" label="Outline Primary" onPress={fn()} />
      <Button primary variant="ghost" label="Ghost Primary" onPress={fn()} />
      
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 8 }}>
        Secondary Variants
      </Text>
      <Button variant="solid" label="Solid Secondary" onPress={fn()} />
      <Button variant="outline" label="Outline Secondary" onPress={fn()} />
      <Button variant="ghost" label="Ghost Secondary" onPress={fn()} />
    </View>
  ),
};