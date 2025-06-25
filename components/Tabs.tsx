import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Animated, 
  ScrollView,
  Dimensions,
  LayoutChangeEvent,
} from 'react-native';

export interface Tab {
  id?: string | number;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
  badge?: string | number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  initialTab?: number;
  onTabChange?: (index: number, tab: Tab) => void;
  variant?: 'default' | 'pills' | 'underline' | 'filled';
  size?: 'small' | 'medium' | 'large';
  scrollable?: boolean;
  showIndicator?: boolean;
  indicatorColor?: string;
  tabStyle?: StyleProp<ViewStyle>;
  activeTabStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  centered?: boolean;
}

const { width: screenWidth } = Dimensions.get('window');

const Tabs = ({
  tabs,
  initialTab = 0,
  onTabChange,
  variant = 'default',
  size = 'medium',
  scrollable = false,
  showIndicator = true,
  indicatorColor = '#007AFF',
  tabStyle,
  activeTabStyle,
  textStyle,
  activeTextStyle,
  contentStyle,
  containerStyle,
  centered = false,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [tabLayouts, setTabLayouts] = useState([]);
  const indicatorAnimation = useRef(new Animated.Value(0)).current;
  const indicatorWidth = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (tabLayouts.length > 0 && activeTab < tabLayouts.length) {
      const targetLayout = tabLayouts[activeTab];
      
      Animated.parallel([
        Animated.spring(indicatorAnimation, {
          toValue: targetLayout.x,
          useNativeDriver: false,
          tension: 100,
          friction: 8,
        }),
        Animated.spring(indicatorWidth, {
          toValue: targetLayout.width,
          useNativeDriver: false,
          tension: 100,
          friction: 8,
        }),
      ]).start();

      // Auto-scroll to active tab if scrollable
      if (scrollable && scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: Math.max(0, targetLayout.x - screenWidth / 2 + targetLayout.width / 2),
          animated: true,
        });
      }
    }
  }, [activeTab, tabLayouts]);

  const handleTabPress = (index) => {
    if (tabs[index]?.disabled) return;
    
    // Fade out content briefly for smooth transition
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 0.7,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    setActiveTab(index);
    onTabChange?.(index, tabs[index]);
  };

  const handleTabLayout = (event, index) => {
    const { x, width } = event.nativeEvent.layout;
    setTabLayouts(prev => {
      const newLayouts = [...prev];
      newLayouts[index] = { x, width };
      return newLayouts;
    });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'pills':
        return {
          tabButton: styles.pillTabButton,
          activeTabButton: styles.activePillTabButton,
          container: styles.pillContainer,
        };
      case 'filled':
        return {
          tabButton: styles.filledTabButton,
          activeTabButton: styles.activeFilledTabButton,
          container: styles.filledContainer,
        };
      case 'underline':
        return {
          tabButton: styles.underlineTabButton,
          activeTabButton: styles.activeUnderlineTabButton,
          container: styles.underlineContainer,
        };
      default:
        return {
          tabButton: styles.defaultTabButton,
          activeTabButton: styles.activeDefaultTabButton,
          container: styles.defaultContainer,
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: 8,
          fontSize: 12,
          minHeight: 32,
        };
      case 'large':
        return {
          padding: 20,
          fontSize: 18,
          minHeight: 56,
        };
      default:
        return {
          padding: 12,
          fontSize: 14,
          minHeight: 44,
        };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const TabContent = scrollable ? ScrollView : View;
  const tabContentProps = scrollable 
    ? { 
        horizontal: true, 
        showsHorizontalScrollIndicator: false,
        ref: scrollViewRef,
        contentContainerStyle: centered ? styles.centeredContent : undefined,
      } 
    : { 
        style: [styles.tabHeader, centered && styles.centeredTabs] 
      };

  return (
    <View style={[styles.container, variantStyles.container, containerStyle]}>
      <View style={styles.tabHeaderContainer}>
        <TabContent {...tabContentProps}>
          <View style={scrollable ? styles.tabHeader : undefined}>
            {tabs.map((tab, index) => (
              <TouchableOpacity
                key={tab.id || index}
                style={[
                  styles.tabButton,
                  variantStyles.tabButton,
                  { 
                    paddingVertical: sizeStyles.padding,
                    paddingHorizontal: sizeStyles.padding * 1.5,
                    minHeight: sizeStyles.minHeight,
                  },
                  activeTab === index && variantStyles.activeTabButton,
                  tab.disabled && styles.disabledTab,
                  tabStyle,
                  activeTab === index && activeTabStyle,
                ]}
                onPress={() => handleTabPress(index)}
                onLayout={(event) => handleTabLayout(event, index)}
                disabled={tab.disabled}
                activeOpacity={0.7}
              >
                <View style={styles.tabInner}>
                  {tab.icon && (
                    <View style={[styles.tabIcon, { marginRight: tab.title ? 6 : 0 }]}>
                      {tab.icon}
                    </View>
                  )}
                  <Text
                    style={[
                      styles.tabText,
                      { fontSize: sizeStyles.fontSize },
                      activeTab === index && styles.activeTabText,
                      tab.disabled && styles.disabledTabText,
                      textStyle,
                      activeTab === index && activeTextStyle,
                    ]}
                    numberOfLines={1}
                  >
                    {tab.title}
                  </Text>
                  {tab.badge && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>
                        {typeof tab.badge === 'number' && tab.badge > 99 ? '99+' : tab.badge}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </TabContent>
        
        {showIndicator && variant !== 'pills' && variant !== 'filled' && tabLayouts.length > 0 && (
          <Animated.View
            style={[
              styles.indicator,
              {
                backgroundColor: indicatorColor,
                left: indicatorAnimation,
                width: indicatorWidth,
              },
            ]}
          />
        )}
      </View>

      <Animated.View 
        style={[
          styles.tabContent, 
          contentStyle,
          { opacity: fadeAnimation }
        ]}
      >
        {tabs[activeTab]?.content}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabHeaderContainer: {
    position: 'relative',
  },
  tabHeader: {
    flexDirection: 'row',
  },
  centeredTabs: {
    justifyContent: 'center',
  },
  centeredContent: {
    justifyContent: 'center',
    minWidth: screenWidth,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tabInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#666',
    fontWeight: '500',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  disabledTab: {
    opacity: 0.4,
  },
  disabledTabText: {
    color: '#ccc',
  },
  badge: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    paddingHorizontal: 4,
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    borderRadius: 1.5,
  },
  tabContent: {
    flex: 1,
    padding: 16,
  },

  // Default variant
  defaultContainer: {
    backgroundColor: '#fff',
  },
  defaultTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeDefaultTabButton: {
    borderBottomColor: '#007AFF',
  },

  // Pills variant
  pillContainer: {
    backgroundColor: '#f8f9fa',
    padding: 4,
  },
  pillTabButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    marginHorizontal: 2,
  },
  activePillTabButton: {
    backgroundColor: '#007AFF',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },

  // Filled variant
  filledContainer: {
    backgroundColor: '#f0f0f0',
  },
  filledTabButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    marginHorizontal: 1,
  },
  activeFilledTabButton: {
    backgroundColor: '#007AFF',
  },

  // Underline variant
  underlineContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  underlineTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeUnderlineTabButton: {
    borderBottomColor: '#007AFF',
  },
});

export default Tabs;