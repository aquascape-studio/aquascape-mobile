import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@aquascape/ui/theme';

/**
 * Home tab — placeholder until the 3D WebView embed lands.
 *
 * Stays pure RN (no NativeWind yet) so the Phase-1 shell type-checks without
 * additional transformer setup. Styles come straight from the shared ink-green
 * tokens so there is still a single source of truth.
 */
export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.eyebrow}>Aquascape Studio</Text>
      <Text style={styles.title}>A quiet place to design a planted tank.</Text>
      <Text style={styles.body}>
        The mobile app is a companion to the web studio. Browse species,
        review published scapes, and watch cloud-rendered previews grow.
      </Text>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Phase 1</Text>
      <Text style={styles.body}>
        Shell, navigation, and theming. The embedded 3D scape viewer (served
        by a WebView bridged to @aquascape/render) arrives in Phase 2.
      </Text>
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
    gap: tokens.spacing[4],
  },
  eyebrow: {
    color: tokens.color.moss[300],
    fontSize: tokens.fontSize.xs,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  title: {
    color: tokens.color.bone[100],
    fontSize: tokens.fontSize['2xl'],
    lineHeight: tokens.fontSize['2xl'] * tokens.lineHeight.snug,
    fontWeight: '600',
  },
  body: {
    color: tokens.color.bone[300],
    fontSize: tokens.fontSize.base,
    lineHeight: tokens.fontSize.base * tokens.lineHeight.bodyMobile,
  },
  divider: {
    height: 1,
    backgroundColor: tokens.color.stone[500],
    opacity: 0.4,
    marginVertical: tokens.spacing[3],
  },
  sectionTitle: {
    color: tokens.color.bone[100],
    fontSize: tokens.fontSize.lg,
    fontWeight: '600',
  },
});
