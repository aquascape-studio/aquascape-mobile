import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, tokens } from '@aquascape/ui/theme';

/**
 * Root layout — wraps every screen in the ink-green ThemeProvider and a
 * safe-area provider. Dark-mode only for Phase 1 (the design is inherently
 * dark-green).
 */
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar style="light" backgroundColor={tokens.color.ink[900]} />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: tokens.color.ink[900] },
            headerTintColor: tokens.color.bone[100],
            headerTitleStyle: {
              fontFamily: 'System',
              fontWeight: '600',
            },
            contentStyle: { backgroundColor: tokens.color.ink[900] },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
