import React from 'react';
import { View, ScrollView } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { fn } from 'storybook/test';
import Text from '../../components/text';

const meta = {
  title: 'Components/Text',
  component: Text,
  decorators: [
    (Story) => (
      <View style={{ 
        flex: 1, 
        padding: 20,
        backgroundColor: '#fff',
      }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'display1', 'display2', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline', 'button'
      ],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary', 'secondary', 'success', 'warning', 'error', 'info',
        'text', 'textSecondary', 'textDisabled', 'white', 'inherit'
      ],
    },
    weight: {
      control: { type: 'select' },
      options: [
        'thin', 'ultraLight', 'light', 'regular', 'medium', 
        'semibold', 'bold', 'heavy', 'black'
      ],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    transform: {
      control: { type: 'select' },
      options: ['none', 'capitalize', 'uppercase', 'lowercase'],
    },
    decoration: {
      control: { type: 'select' },
      options: ['none', 'underline', 'line-through'],
    },
    style: {
      control: { type: 'select' },
      options: ['normal', 'italic'],
    },
    margin: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    children: 'This is the default text component',
  },
};

export const Heading: Story = {
  args: {
    variant: 'h1',
    children: 'This is a heading',
  },
};

export const Body: Story = {
  args: {
    variant: 'body1',
    children: 'This is body text that provides detailed information and context.',
  },
};

// Typography variants showcase
export const TypographyScale: Story = {
  render: () => (
    <ScrollView style={{ flex: 1 }}>
      <Text variant="display1" margin="sm">Display 1: Large display text</Text>
      <Text variant="display2" margin="sm">Display 2: Medium display text</Text>
      <Text variant="h1" margin="sm">Heading 1: Main page title</Text>
      <Text variant="h2" margin="sm">Heading 2: Section title</Text>
      <Text variant="h3" margin="sm">Heading 3: Subsection title</Text>
      <Text variant="h4" margin="sm">Heading 4: Component title</Text>
      <Text variant="h5" margin="sm">Heading 5: Small title</Text>
      <Text variant="h6" margin="sm">Heading 6: Smallest title</Text>
      <Text variant="subtitle1" margin="sm">Subtitle 1: Large subtitle</Text>
      <Text variant="subtitle2" margin="sm">Subtitle 2: Small subtitle</Text>
      <Text variant="body1" margin="sm">Body 1: Regular body text for reading</Text>
      <Text variant="body2" margin="sm">Body 2: Smaller body text for secondary content</Text>
      <Text variant="caption" margin="sm">Caption: Small text for captions and annotations</Text>
      <Text variant="overline" margin="sm">Overline: Uppercase small text</Text>
      <Text variant="button" margin="sm">Button: Button text style</Text>
    </ScrollView>
  ),
};

// Color variants
export const Colors: Story = {
  render: () => (
    <ScrollView style={{ flex: 1 }}>
      <Text color="primary" margin="sm">Primary color text</Text>
      <Text color="secondary" margin="sm">Secondary color text</Text>
      <Text color="success" margin="sm">Success color text</Text>
      <Text color="warning" margin="sm">Warning color text</Text>
      <Text color="error" margin="sm">Error color text</Text>
      <Text color="info" margin="sm">Info color text</Text>
      <Text color="text" margin="sm">Default text color</Text>
      <Text color="textSecondary" margin="sm">Secondary text color</Text>
      <Text color="textDisabled" margin="sm">Disabled text color</Text>
    </ScrollView>
  ),
};

// Font weights
export const FontWeights: Story = {
  render: () => (
    <ScrollView style={{ flex: 1 }}>
      <Text weight="thin" margin="sm">Thin weight (100)</Text>
      <Text weight="ultraLight" margin="sm">Ultra Light weight (200)</Text>
      <Text weight="light" margin="sm">Light weight (300)</Text>
      <Text weight="regular" margin="sm">Regular weight (400)</Text>
      <Text weight="medium" margin="sm">Medium weight (500)</Text>
      <Text weight="semibold" margin="sm">Semibold weight (600)</Text>
      <Text weight="bold" margin="sm">Bold weight (700)</Text>
      <Text weight="heavy" margin="sm">Heavy weight (800)</Text>
      <Text weight="black" margin="sm">Black weight (900)</Text>
    </ScrollView>
  ),
};

// Text alignments
export const Alignments: Story = {
  render: () => (
    <View style={{ flex: 1 }}>
      <Text align="left" margin="sm" customStyle={{ backgroundColor: '#f0f0f0', padding: 8 }}>
        Left aligned text
      </Text>
      <Text align="center" margin="sm" customStyle={{ backgroundColor: '#f0f0f0', padding: 8 }}>
        Center aligned text
      </Text>
      <Text align="right" margin="sm" customStyle={{ backgroundColor: '#f0f0f0', padding: 8 }}>
        Right aligned text
      </Text>
      <Text align="justify" margin="sm" customStyle={{ backgroundColor: '#f0f0f0', padding: 8 }}>
        Justified text that spreads across the full width of the container and aligns to both left and right edges.
      </Text>
    </View>
  ),
};

// Text transformations
export const Transformations: Story = {
  render: () => (
    <View style={{ flex: 1 }}>
      <Text transform="none" margin="sm">Normal text transformation</Text>
      <Text transform="capitalize" margin="sm">capitalized text transformation</Text>
      <Text transform="uppercase" margin="sm">uppercase text transformation</Text>
      <Text transform="lowercase" margin="sm">LOWERCASE TEXT TRANSFORMATION</Text>
    </View>
  ),
};

// Text decorations
export const Decorations: Story = {
  render: () => (
    <View style={{ flex: 1 }}>
      <Text decoration="none" margin="sm">Normal text without decoration</Text>
      <Text decoration="underline" margin="sm">Underlined text</Text>
      <Text decoration="line-through" margin="sm">Strikethrough text</Text>
    </View>
  ),
};

// Font styles
export const FontStyles: Story = {
  render: () => (
    <View style={{ flex: 1 }}>
      <Text style="normal" margin="sm">Normal font style</Text>
      <Text style="italic" margin="sm">Italic font style</Text>
    </View>
  ),
};

// Interactive text
export const Interactive: Story = {
  args: {
    children: 'Tap me!',
    color: 'primary',
    decoration: 'underline',
    onPress: fn(),
  },
};

export const InteractiveLongPress: Story = {
  args: {
    children: 'Long press me!',
    color: 'secondary',
    onLongPress: fn(),
  },
};

// Special features
export const Monospace: Story = {
  args: {
    children: 'console.log("Hello, World!");',
    monospace: true,
    customStyle: { backgroundColor: '#f5f5f5', padding: 8 },
  },
};

export const Truncated: Story = {
  args: {
    children: 'This is a very long text that should be truncated with an ellipsis',
    truncate: true,
    customStyle: { width: 200, backgroundColor: '#f0f0f0', padding: 8 },
  },
};

export const NumberOfLines: Story = {
  args: {
    children: 'This is a long text that spans multiple lines and should be limited to only show a specific number of lines before truncating with ellipsis.',
    numberOfLines: 2,
    customStyle: { backgroundColor: '#f0f0f0', padding: 8 },
  },
};

export const CustomLineHeight: Story = {
  args: {
    children: 'This text has custom line height that makes it more spacious and easier to read.',
    lineHeight: 1.8,
    customStyle: { backgroundColor: '#f0f0f0', padding: 8 },
  },
};

export const CustomLetterSpacing: Story = {
  args: {
    children: 'This text has custom letter spacing',
    letterSpacing: 2,
    customStyle: { backgroundColor: '#f0f0f0', padding: 8 },
  },
};

// Spacing examples
export const Spacing: Story = {
  render: () => (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <Text margin="xs" customStyle={{ backgroundColor: '#e9ecef' }}>Extra small margin</Text>
      <Text margin="sm" customStyle={{ backgroundColor: '#e9ecef' }}>Small margin</Text>
      <Text margin="md" customStyle={{ backgroundColor: '#e9ecef' }}>Medium margin</Text>
      <Text margin="lg" customStyle={{ backgroundColor: '#e9ecef' }}>Large margin</Text>
      <Text margin="xl" customStyle={{ backgroundColor: '#e9ecef' }}>Extra large margin</Text>
      
      <Text padding="xs" margin="md" customStyle={{ backgroundColor: '#dee2e6' }}>Extra small padding</Text>
      <Text padding="sm" margin="md" customStyle={{ backgroundColor: '#dee2e6' }}>Small padding</Text>
      <Text padding="md" margin="md" customStyle={{ backgroundColor: '#dee2e6' }}>Medium padding</Text>
      <Text padding="lg" margin="md" customStyle={{ backgroundColor: '#dee2e6' }}>Large padding</Text>
      <Text padding="xl" margin="md" customStyle={{ backgroundColor: '#dee2e6' }}>Extra large padding</Text>
    </View>
  ),
};

// States
export const Disabled: Story = {
  args: {
    children: 'This text is disabled',
    disabled: true,
  },
};

export const Selectable: Story = {
  args: {
    children: 'This text is selectable - try selecting it!',
    selectable: true,
    customStyle: { backgroundColor: '#f0f0f0', padding: 8 },
  },
};

// Real-world examples
export const ArticleText: Story = {
  render: () => (
    <ScrollView style={{ flex: 1 }}>
      <Text variant="h1" margin="md" color="primary">
        The Future of Mobile Development
      </Text>
      <Text variant="subtitle1" margin="md" color="textSecondary">
        Exploring trends and technologies shaping the industry
      </Text>
      <Text variant="caption" margin="md" color="textSecondary" style="italic">
        Published on March 15, 2024
      </Text>
      <Text variant="body1" margin="md" lineHeight={1.6}>
        Mobile development has evolved significantly over the past decade. 
        With the introduction of cross-platform frameworks like React Native, 
        developers can now build high-quality applications that run seamlessly 
        across multiple platforms.
      </Text>
      <Text variant="h2" margin="md">
        Key Technologies
      </Text>
      <Text variant="body1" margin="md" lineHeight={1.6}>
        The landscape includes various frameworks and tools that make development 
        more efficient and maintainable. From state management to UI components, 
        the ecosystem continues to grow and mature.
      </Text>
    </ScrollView>
  ),
};

export const UserInterface: Story = {
  render: () => (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#f8f9fa' }}>
      <Text variant="h3" margin="md" align="center">
        User Profile
      </Text>
      <Text variant="body1" weight="semibold" margin="sm">
        Name:
      </Text>
      <Text variant="body1" margin="sm" color="textSecondary">
        John Doe
      </Text>
      <Text variant="body1" weight="semibold" margin="sm">
        Email:
      </Text>
      <Text variant="body1" margin="sm" color="primary" decoration="underline">
        john.doe@example.com
      </Text>
      <Text variant="body1" weight="semibold" margin="sm">
        Status:
      </Text>
      <Text variant="body2" margin="sm" color="success" weight="medium">
        Active
      </Text>
      <Text variant="caption" margin="md" color="textSecondary" align="center">
        Last updated: 2 hours ago
      </Text>
    </View>
  ),
};

// Playground for testing
export const Playground: Story = {
  args: {
    children: 'Customize this text using the controls panel',
    variant: 'body1',
    color: 'text',
    weight: 'regular',
    align: 'left',
    transform: 'none',
    decoration: 'none',
    style: 'normal',
    margin: 'md',
    padding: 'none',
    disabled: false,
    selectable: false,
    truncate: false,
    monospace: false,
  },
};