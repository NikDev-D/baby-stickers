import { DEFAULT_STICKER } from "@/entities/sticker";
import { saveToGallery, shareImage } from "@/features/export-image";
import { pickPhoto } from "@/features/pick-photo";
import { DraggableSticker } from "@/features/place-sticker";
import { Photo, Sticker } from "@/shared";
import { useRef, useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { StickerPanel } from "./StickerPanel";

export function EditorScreen() {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [sticker, setSticker] = useState<Sticker>(DEFAULT_STICKER);
  const canvasRef = useRef<View>(null);

  async function handlePickPhoto() {
    const result = await pickPhoto();
    if (result) setPhoto(result);
  }

  async function handleSave() {
    try {
      const result = await saveToGallery(canvasRef);
      alert(result ? "Сохранено!" : "Нет разрешения");
    } catch (e: any) {
      alert("Ошибка: " + e.message);
    }
  }

  async function handleShare() {
    await shareImage(canvasRef);
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
      <View style={styles.canvas} ref={canvasRef} collapsable={false}>
        <Image source={{ uri: photo.uri }} style={styles.photo} />
        <DraggableSticker sticker={sticker} />
      </View>
      <StickerPanel onSelect={setSticker} />
      <View style={styles.actions}>
        <Button title="Сменить" onPress={handlePickPhoto} />
        <Button title="Сохранить" onPress={handleSave} />
        <Button title="Поделиться" onPress={handleShare} />
      </View>
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
  },
  photo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    backgroundColor: "white",
  },
});
