import { StyleSheet, Text, View } from "react-native";

export function HomeTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BabyStickers</Text>
      <Text style={styles.subtitle}>для мам, которые заботятся</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#FF7F5C",
  },
  subtitle: {
    fontSize: 16,
    color: "#5C4A3A",
    marginTop: 4,
    fontStyle: "italic",
    // textTransform: "uppercase",
  },
});
