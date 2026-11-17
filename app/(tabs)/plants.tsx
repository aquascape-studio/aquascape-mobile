import { FlatList, StyleSheet, Text, View } from 'react-native';
import { plants } from '@aquascape/botany';
import { tokens } from '@aquascape/ui/theme';

/**
 * Plants tab — SSR-less list of every species from @aquascape/data.
 *
 * The web list renders the same data. Keeping both readers trivial lets the
 * shared package stay the single source of truth; no re-parsing, no ad-hoc
 * adapters.
 */
export default function PlantsScreen() {
  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={styles.content}
      data={plants as ReadonlyArray<(typeof plants)[number]>}
      keyExtractor={(p) => p.id}
      ListHeaderComponent={
        <Text style={styles.heading}>
          {plants.length} species
        </Text>
      }
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => {
        const english = item.commonNames.en[0] ?? item.scientificName;
        return (
          <View style={styles.card}>
            <Text style={styles.title}>{english}</Text>
            <Text style={styles.latin}>{item.scientificName}</Text>
            <Text style={styles.meta}>
              {item.difficulty.label.toUpperCase()} · {item.growthForm}
            </Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: tokens.color.ink[900],
  },
  content: {
    padding: tokens.spacing[4],
  },
  heading: {
    color: tokens.color.bone[300],
    fontSize: tokens.fontSize.sm,
    marginBottom: tokens.spacing[3],
  },
  card: {
    backgroundColor: tokens.color.ink[800],
    borderRadius: tokens.radius.md,
    padding: tokens.spacing[4],
    borderWidth: 1,
    borderColor: tokens.color.stone[500],
  },
  separator: {
    height: tokens.spacing[2],
  },
  title: {
    color: tokens.color.bone[100],
    fontSize: tokens.fontSize.lg,
    fontWeight: '600',
  },
  latin: {
    color: tokens.color.bone[300],
    fontSize: tokens.fontSize.sm,
    marginTop: tokens.spacing[1],
  },
  meta: {
    color: tokens.color.moss[300],
    fontSize: tokens.fontSize.xs,
    letterSpacing: 1,
    marginTop: tokens.spacing[2],
  },
});
