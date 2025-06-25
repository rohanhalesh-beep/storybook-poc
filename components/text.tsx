import React from 'react';
import { Text as RNText, StyleSheet, StyleProp, TextStyle } from 'react-native';

export interface TextProps {
  /** Text content */
  children: React.ReactNode;
  /** Typography variant */
  variant?: 
    | 'display1' 
    | 'display2' 
    | 'h1' 
    | 'h2' 
    | 'h3' 
    | 'h4' 
    | 'h5' 
    | 'h6' 
    | 'subtitle1' 
    | 'subtitle2' 
    | 'body1' 
    | 'body2' 
    | 'caption' 
    | 'overline' 
    | 'button';
  /** Text color */
  color?: 
    | 'primary' 
    | 'secondary' 
    | 'success' 
    | 'warning' 
    | 'error' 
    | 'info' 
    | 'text' 
    | 'textSecondary' 
    | 'textDisabled' 
    | 'white' 
    | 'inherit'
    | string;
  /** Font weight */
  weight?: 
    | 'thin' 
    | 'ultraLight' 
    | 'light' 
    | 'regular' 
    | 'medium' 
    | 'semibold' 
    | 'bold' 
    | 'heavy' 
    | 'black';
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Text transform */
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  /** Text decoration */
  decoration?: 'none' | 'underline' | 'line-through';
  /** Font style */
  style?: 'normal' | 'italic';
  /** Number of lines (for truncation) */
  numberOfLines?: number;
  /** Allow font scaling */
  allowFontScaling?: boolean;
  /** Selectable text */
  selectable?: boolean;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Accessibility hint */
  accessibilityHint?: string;
  /** Custom styles */
  customStyle?: StyleProp<TextStyle>;
  /** Margin variants */
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Padding variants */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Letter spacing */
  letterSpacing?: number;
  /** Line height multiplier */
  lineHeight?: number;
  /** Monospace font */
  monospace?: boolean;
  /** Truncate with ellipsis */
  truncate?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Press handler for interactive text */
  onPress?: () => void;
  /** Long press handler */
  onLongPress?: () => void;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body1',
  color = 'text',
  weight = 'regular',
  align = 'left',
  transform = 'none',
  decoration = 'none',
  style = 'normal',
  numberOfLines,
  allowFontScaling = true,
  selectable = false,
  accessibilityLabel,
  accessibilityHint,
  customStyle,
  margin = 'none',
  padding = 'none',
  letterSpacing,
  lineHeight,
  monospace = false,
  truncate = false,
  disabled = false,
  onPress,
  onLongPress,
}) => {
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'display1':
        return styles.display1;
      case 'display2':
        return styles.display2;
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      case 'h4':
        return styles.h4;
      case 'h5':
        return styles.h5;
      case 'h6':
        return styles.h6;
      case 'subtitle1':
        return styles.subtitle1;
      case 'subtitle2':
        return styles.subtitle2;
      case 'body1':
        return styles.body1;
      case 'body2':
        return styles.body2;
      case 'caption':
        return styles.caption;
      case 'overline':
        return styles.overline;
      case 'button':
        return styles.button;
      default:
        return styles.body1;
    }
  };

  const getColorStyle = (): TextStyle => {
    if (color.startsWith('#') || color.startsWith('rgb')) {
      return { color };
    }
    
    switch (color) {
      case 'primary':
        return styles.colorPrimary;
      case 'secondary':
        return styles.colorSecondary;
      case 'success':
        return styles.colorSuccess;
      case 'warning':
        return styles.colorWarning;
      case 'error':
        return styles.colorError;
      case 'info':
        return styles.colorInfo;
      case 'text':
        return styles.colorText;
      case 'textSecondary':
        return styles.colorTextSecondary;
      case 'textDisabled':
        return styles.colorTextDisabled;
      case 'white':
        return styles.colorWhite;
      case 'inherit':
        return {};
      default:
        return styles.colorText;
    }
  };

  const getWeightStyle = (): TextStyle => {
    switch (weight) {
      case 'thin':
        return styles.weightThin;
      case 'ultraLight':
        return styles.weightUltraLight;
      case 'light':
        return styles.weightLight;
      case 'regular':
        return styles.weightRegular;
      case 'medium':
        return styles.weightMedium;
      case 'semibold':
        return styles.weightSemibold;
      case 'bold':
        return styles.weightBold;
      case 'heavy':
        return styles.weightHeavy;
      case 'black':
        return styles.weightBlack;
      default:
        return styles.weightRegular;
    }
  };

  const getSpacingStyle = (type: 'margin' | 'padding', value: string): TextStyle => {
    const spacingMap = {
      none: 0,
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    };
    
    const spacing = spacingMap[value as keyof typeof spacingMap] || 0;
    
    if (type === 'margin') {
      return { margin: spacing };
    }
    return { padding: spacing };
  };

  const computedStyle: TextStyle = {
    ...getVariantStyle(),
    ...getColorStyle(),
    ...getWeightStyle(),
    ...getSpacingStyle('margin', margin),
    ...getSpacingStyle('padding', padding),
    textAlign: align,
    textTransform: transform,
    textDecorationLine: decoration,
    fontStyle: style,
    fontFamily: monospace ? 'monospace' : undefined,
    letterSpacing: letterSpacing,
    lineHeight: lineHeight ? getVariantStyle().fontSize! * lineHeight : undefined,
    ...(disabled && styles.disabled),
  };

  return (
    <RNText
      style={[computedStyle, customStyle]}
      numberOfLines={truncate ? 1 : numberOfLines}
      ellipsizeMode={truncate ? 'tail' : 'tail'}
      allowFontScaling={allowFontScaling}
      selectable={selectable}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      onLongPress={onLongPress}
      accessible={!!accessibilityLabel || !!accessibilityHint}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  // Typography variants
  display1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '300',
    letterSpacing: -0.5,
  },
  display2: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '300',
    letterSpacing: -0.5,
  },
  h1: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
    letterSpacing: -0.25,
  },
  h3: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600',
    letterSpacing: 0,
  },
  h4: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: 0.25,
  },
  h5: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    letterSpacing: 0,
  },
  h6: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  body1: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  body2: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: 0.25,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    letterSpacing: 0.4,
  },
  overline: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  button: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },

  // Colors
  colorPrimary: {
    color: '#007AFF',
  },
  colorSecondary: {
    color: '#8E8E93',
  },
  colorSuccess: {
    color: '#34C759',
  },
  colorWarning: {
    color: '#FF9500',
  },
  colorError: {
    color: '#FF3B30',
  },
  colorInfo: {
    color: '#5AC8FA',
  },
  colorText: {
    color: '#1C1C1E',
  },
  colorTextSecondary: {
    color: '#8E8E93',
  },
  colorTextDisabled: {
    color: '#C7C7CC',
  },
  colorWhite: {
    color: '#FFFFFF',
  },

  // Font weights
  weightThin: {
    fontWeight: '100',
  },
  weightUltraLight: {
    fontWeight: '200',
  },
  weightLight: {
    fontWeight: '300',
  },
  weightRegular: {
    fontWeight: '400',
  },
  weightMedium: {
    fontWeight: '500',
  },
  weightSemibold: {
    fontWeight: '600',
  },
  weightBold: {
    fontWeight: '700',
  },
  weightHeavy: {
    fontWeight: '800',
  },
  weightBlack: {
    fontWeight: '900',
  },

  // States
  disabled: {
    opacity: 0.5,
  },
});

export default Text;