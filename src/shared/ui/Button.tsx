import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  size?: "small" | "large";
};

export function Button({ title, onPress, size = "small" }: Props) {
  return (
    <Pressable style={[styles.button, size === "large" && styles.buttonLarge]} onPress={onPress}>
      <Text style={[styles.text, size === "large" && styles.textLarge]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF7F5C",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
  },
  buttonLarge: {
    paddingHorizontal: 40,
    paddingVertical: 16,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  textLarge: {
    fontSize: 22,
  },
});
