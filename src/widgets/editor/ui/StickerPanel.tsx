import { ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { STICKERS } from "@/entities/sticker";
import { Sticker } from "@/shared";

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
    backgroundColor: "white",
    maxHeight: 80,
  },
  content: {
    paddingHorizontal: 8,
    alignItems: "center",
    gap: 8,
  },
  item: {
    padding: 4,
  },
  image: {
    width: 48,
    height: 48,
  },
});
