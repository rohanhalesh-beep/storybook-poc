import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
  Text,
  ViewStyle,
} from 'react-native';

type InputVariant = 'default' | 'outline' | 'underline';

interface InputProps extends TextInputProps {
  label?: string;
  variant?: InputVariant;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  variant = 'default',
  containerStyle,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.baseInput, variantStyles[variant], style]}
        placeholderTextColor="#888"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  baseInput: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 12,
    color: '#000',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
});

const variantStyles = StyleSheet.create({
  default: {
    borderWidth: 0,
  },
  outline: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 0,
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
  },
});
