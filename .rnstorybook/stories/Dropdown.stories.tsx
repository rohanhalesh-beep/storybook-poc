import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Meta, Story } from '@storybook/react-native';
import { Dropdown, DropdownItem } from '../../components/Dropdown';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default meta;

const items: DropdownItem[] = [
  { label: 'Profile', value: '1', icon: 'person' },
  { label: 'Settings', value: '2', icon: 'settings' },
  { label: 'Notifications', value: '3', icon: 'notifications' },
  { label: 'Messages', value: '4', icon: 'message' },
  { label: 'Logout', value: '5', icon: 'exit-to-app' },
];

const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];

export const Default: Story = {
  args: {
    items,
    placeholder: 'Select an option',
  },
};

export const WithIcons: Story = {
  args: {
    items,
    placeholder: 'Select with icons',
    chevronColor: '#3b82f6',
  },
};

export const CustomColors: Story = {
  args: {
    items: items.map((item, index) => ({
      ...item,
      icon: ['home', 'work', 'favorite', 'star', 'lock'][index]
    })),
    placeholder: 'Custom color dropdowns',
    placeholderColor: '#6b7280',
    style: {
      borderColor: '#e5e7eb',
    },
    dropdownStyle: {
      borderColor: '#e5e7eb',
    },
  },
  render: (args) => (
    <ScrollView>
      <View style={styles.colorContainer}>
        {colors.map((color, i) => (
          <Dropdown
            key={i}
            {...args}
            chevronColor={color}
            style={{ borderColor: color }}
            dropdownStyle={{ borderColor: color }}
            selectedValue={i === 2 ? '3' : undefined}
          />
        ))}
      </View>
    </ScrollView>
  ),
};

const styles = StyleSheet.create({
  colorContainer: {
    padding: 16,
    gap: 16,
  },
});
