import { Tabs } from 'expo-router';
import { tokens } from '@aquascape/ui/theme';

/**
 * Bottom tab bar, ink-green palette.
 *
 * No custom icons in Phase 1 — letter placeholders until we add
 * lucide-react-native. That keeps the dependency surface small while we
 * stabilise the shell.
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: tokens.color.ink[800],
          borderTopColor: tokens.color.stone[500],
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: tokens.color.moss[300],
        tabBarInactiveTintColor: tokens.color.bone[300],
        headerStyle: { backgroundColor: tokens.color.ink[900] },
        headerTintColor: tokens.color.bone[100],
        headerTitleStyle: { fontWeight: '600' },
        sceneStyle: { backgroundColor: tokens.color.ink[900] },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="plants" options={{ title: 'Plants' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}
