import { DEFAULT_STICKER } from "@/entities/sticker";
import { pickPhoto } from "@/features/pick-photo";
import { DraggableSticker } from "@/features/place-sticker";
import { Photo, Sticker } from "@/shared";
import { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { StickerPanel } from "./StickerPanel";

export function EditorScreen() {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [sticker, setSticker] = useState<Sticker>(DEFAULT_STICKER);

  async function handlePickPhoto() {
    const result = await pickPhoto();
    if (result) setPhoto(result);
  }

  if (!photo) {
    return (
      <View style={styles.centered}>
        <Button title="Выбрать фото" onPress={handlePickPhoto} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.canvas}>
        <Image source={{ uri: photo.uri }} style={styles.photo} />
        <DraggableSticker sticker={sticker} />
      </View>
      <StickerPanel onSelect={setSticker} />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
    // overflow: "hidden",
  },
  photo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
  },
});
