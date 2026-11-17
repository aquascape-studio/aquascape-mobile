import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@aquascape/ui/theme';

/**
 * Settings tab — placeholder for sign-in, locale, and notification prefs.
 * Cognito / Google OAuth lands in Phase 2.
 */
export default function SettingsScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Account</Text>
        <Text style={styles.rowValue}>Sign in — Phase 2</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Language</Text>
        <Text style={styles.rowValue}>English</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Appearance</Text>
        <Text style={styles.rowValue}>Ink green (dark)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: tokens.color.ink[900],
  },
  content: {
    padding: tokens.spacing[5],
    gap: tokens.spacing[3],
  },
  heading: {
    color: tokens.color.bone[100],
    fontSize: tokens.fontSize.xl,
    fontWeight: '600',
    marginBottom: tokens.spacing[3],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: tokens.spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: tokens.color.stone[500],
  },
  rowLabel: {
    color: tokens.color.bone[100],
    fontSize: tokens.fontSize.base,
  },
  rowValue: {
    color: tokens.color.bone[300],
    fontSize: tokens.fontSize.sm,
  },
});
