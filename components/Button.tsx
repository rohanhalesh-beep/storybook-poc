import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onPress?: () => void;
  /** Custom style for the button */
  style?: StyleProp<ViewStyle>;
  /** Disabled state */
  disabled?: boolean;
  /** Button variant */
  variant?: 'solid' | 'outline' | 'ghost' | 'gradient';
  /** Icon component (optional) */
  icon?: React.ReactNode;
  /** Icon position */
  iconPosition?: 'left' | 'right';
}

/** Enhanced UI component for user interaction with modern styling */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  style,
  onPress,
  disabled = false,
  variant = 'solid',
  icon,
  iconPosition = 'left',
}: ButtonProps) => {
  const getVariantStyle = () => {
    if (primary) {
      switch (variant) {
        case 'outline':
          return styles.primaryOutline;
        case 'ghost':
          return styles.primaryGhost;
        case 'gradient':
          return styles.primaryGradient;
        default:
          return styles.primary;
      }
    } else {
      switch (variant) {
        case 'outline':
          return styles.secondaryOutline;
        case 'ghost':
          return styles.secondaryGhost;
        case 'gradient':
          return styles.secondaryGradient;
        default:
          return styles.secondary;
      }
    }
  };

  const getTextVariantStyle = () => {
    if (primary) {
      switch (variant) {
        case 'outline':
          return styles.primaryOutlineText;
        case 'ghost':
          return styles.primaryGhostText;
        case 'gradient':
          return styles.primaryGradientText;
        default:
          return styles.primaryText;
      }
    } else {
      switch (variant) {
        case 'outline':
          return styles.secondaryOutlineText;
        case 'ghost':
          return styles.secondaryGhostText;
        case 'gradient':
          return styles.secondaryGradientText;
        default:
          return styles.secondaryText;
      }
    }
  };

  const variantStyle = getVariantStyle();
  const textVariantStyle = getTextVariantStyle();
  const sizeStyle = styles[size];
  const textSizeStyle = textSizeStyles[size];

  return (
    <TouchableOpacity 
      accessibilityRole="button" 
      activeOpacity={disabled ? 1 : 0.7} 
      onPress={disabled ? undefined : onPress}
      style={[
        styles.container,
        disabled && styles.disabledContainer
      ]}
    >
      <View
        style={[
          styles.button,
          variantStyle,
          sizeStyle,
          style,
          !!backgroundColor && { backgroundColor },
          disabled && styles.disabled,
        ]}
      >
        <View style={styles.content}>
          {icon && iconPosition === 'left' && (
            <View style={[styles.icon, styles.iconLeft]}>{icon}</View>
          )}
          <Text style={[styles.buttonText, textVariantStyle, textSizeStyle, disabled && styles.disabledText]}>
            {label}
          </Text>
          {icon && iconPosition === 'right' && (
            <View style={[styles.icon, styles.iconRight]}>{icon}</View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },

  // Primary variants
  primary: {
    backgroundColor: '#007AFF',
    borderWidth: 0,
  },
  primaryText: {
    color: 'white',
  },
  primaryOutline: {
    backgroundColor: 'transparent',
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  primaryOutlineText: {
    color: '#007AFF',
  },
  primaryGhost: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 0,
  },
  primaryGhostText: {
    color: '#007AFF',
  },
  primaryGradient: {
    backgroundColor: '#007AFF',
    borderWidth: 0,
  },
  primaryGradientText: {
    color: 'white',
  },

  // Secondary variants
  secondary: {
    backgroundColor: '#F2F2F7',
    borderWidth: 0,
  },
  secondaryText: {
    color: '#1C1C1E',
  },
  secondaryOutline: {
    backgroundColor: 'transparent',
    borderColor: '#D1D1D6',
    borderWidth: 2,
  },
  secondaryOutlineText: {
    color: '#1C1C1E',
  },
  secondaryGhost: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  secondaryGhostText: {
    color: '#1C1C1E',
  },
  secondaryGradient: {
    backgroundColor: '#8E8E93',
    borderWidth: 0,
  },
  secondaryGradientText: {
    color: 'white',
  },

  // Sizes
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minHeight: 36,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    minHeight: 44,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    minHeight: 52,
  },

  // Disabled state
  disabled: {
    opacity: 0.5,
  },
  disabledContainer: {
    shadowOpacity: 0,
    elevation: 0,
  },
  disabledText: {
    opacity: 0.6,
  },
});

const textSizeStyles = {
  small: {
    fontSize: 14,
    lineHeight: 18,
  },
  medium: {
    fontSize: 16,
    lineHeight: 20,
  },
  large: {
    fontSize: 18,
    lineHeight: 22,
  },
};