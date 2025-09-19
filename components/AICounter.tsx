import { View, Text, StyleSheet } from "react-native";

export const AICounter = ({ count }: { count: number }) => (
  <View style={styles.counterBox}>
    <Text style={styles.counterLabel}>Push-ups Detected</Text>
    <Text style={styles.counterValue}>{count}</Text>
  </View>
);

const styles = StyleSheet.create({
  counterBox: { position: "absolute", top: 12, left: 12, backgroundColor: "rgba(0,0,0,0.5)", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8 },
  counterLabel: { color: "#E2E8F0", fontSize: 12 },
  counterValue: { color: "#fff", fontSize: 24, fontWeight: "bold" },
});
