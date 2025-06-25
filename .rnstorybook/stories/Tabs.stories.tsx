import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import Tabs from '../../components/Tabs';

// Mock icon components
const IconHome = () => (
  <View style={{ width: 16, height: 16, backgroundColor: '#666', borderRadius: 2 }}>
    <Text style={{ color: 'white', fontSize: 8, textAlign: 'center', lineHeight: 16 }}>🏠</Text>
  </View>
);

const IconSearch = () => (
  <View style={{ width: 16, height: 16, backgroundColor: '#666', borderRadius: 2 }}>
    <Text style={{ color: 'white', fontSize: 8, textAlign: 'center', lineHeight: 16 }}>🔍</Text>
  </View>
);

const IconUser = () => (
  <View style={{ width: 16, height: 16, backgroundColor: '#666', borderRadius: 2 }}>
    <Text style={{ color: 'white', fontSize: 8, textAlign: 'center', lineHeight: 16 }}>👤</Text>
  </View>
);

const IconSettings = () => (
  <View style={{ width: 16, height: 16, backgroundColor: '#666', borderRadius: 2 }}>
    <Text style={{ color: 'white', fontSize: 8, textAlign: 'center', lineHeight: 16 }}>⚙️</Text>
  </View>
);

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { title: 'Tab 1', content: <Text>Content for Tab 1</Text> },
      { title: 'Tab 2', content: <Text>Content for Tab 2</Text> },
      { title: 'Tab 3', content: <Text>Content for Tab 3</Text> },
    ],
  },
};

export const WithLongTitles: Story = {
  args: {
    tabs: [
      { title: 'Very Long Tab Title 1', content: <Text>First tab content</Text> },
      { title: 'Extremely Long Tab Title 2', content: <Text>Second tab content</Text> },
    ],
  },
};

export const WithCustomStyles: Story = {
  args: {
    tabs: [
      { 
        title: 'Red Tab', 
        content: <Text style={{ color: 'red' }}>Red content</Text> 
      },
      { 
        title: 'Blue Tab', 
        content: <Text style={{ color: 'blue' }}>Blue content</Text> 
      },
    ],
  },
};
