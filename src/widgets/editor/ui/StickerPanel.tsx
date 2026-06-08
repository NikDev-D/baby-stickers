import { STICKERS } from "@/entities/sticker";
import { Sticker } from "@/shared";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  onSelect: (sticker: Sticker) => void;
};

export function StickerPanel({ onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}>
      {STICKERS.map((sticker) => (
        <TouchableOpacity key={sticker.id} onPress={() => onSelect(sticker)} style={styles.item}>
          <Image source={sticker.uri} style={styles.image} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF8F0",
    maxHeight: 88,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    gap: 8,
  },
  item: {
    padding: 4,
  },
  image: {
    width: 56,
    height: 56,
  },
});
