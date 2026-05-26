import { DEFAULT_STICKER } from "@/entities/sticker";
import { pickPhoto } from "@/features/pick-photo";
import { DraggableSticker } from "@/features/place-sticker";
import { Photo } from "@/shared";
import { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";

export function EditorScreen() {
  const [photo, setPhoto] = useState<Photo | null>(null);

  async function handlePickPhoto() {
    const result = await pickPhoto();
    if (result) setPhoto(result);
  }

  return (
    <View style={styles.container}>
      {!photo ? (
        <Button title="Выбрать фото" onPress={handlePickPhoto} />
      ) : (
        <View style={styles.canvas}>
          <Image source={{ uri: photo.uri }} style={styles.photo} />
          <DraggableSticker sticker={DEFAULT_STICKER} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  canvas: {
    flex: 1,
    width: "100%",
  },
  photo: {
    flex: 1,
    width: "100%",
  },
});
