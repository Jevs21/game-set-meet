import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import HeaderIconButton from '../../components/HeaderIconButton';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Find Players',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          // headerRight: () => (
          //   <HeaderIconButton href="/modal" name="info" />
          // ),
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            shadowColor: 'transparent',
          },
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Connections',
          tabBarIcon: ({ color }) => <TabBarIcon name="comment" color={color} />,
          headerRight: () => (
            <HeaderIconButton href="/modal" name="add" />
          ),
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            shadowColor: 'transparent',
          },
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'My Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
