import { DEFAULT_STICKER } from "@/entities/sticker";
import { saveToGallery, shareImage } from "@/features/export-image";
import { pickPhoto } from "@/features/pick-photo";
import { DraggableSticker } from "@/features/place-sticker";
import { Photo, Sticker } from "@/shared";
import { Button, CoinFlip } from "@/shared/ui";
import { useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeTitle } from "./HomeTitle";
import { StickerPanel } from "./StickerPanel";

export function EditorScreen() {
  const insets = useSafeAreaInsets();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [sticker, setSticker] = useState<Sticker>(DEFAULT_STICKER);
  const canvasRef = useRef<View>(null);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  function resetTransform() {
    translateX.value = 0;
    translateY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    scale.value = 1;
    savedScale.value = 1;
  }

  const dragGesture = Gesture.Pan()
    .minPointers(1)
    .maxPointers(1)
    .onUpdate((e) => {
      translateX.value = offsetX.value + e.translationX;
      translateY.value = offsetY.value + e.translationY;
    })
    .onEnd(() => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
    });

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const gesture = Gesture.Simultaneous(dragGesture, pinchGesture);

  async function handlePickPhoto() {
    const result = await pickPhoto();
    if (result) {
      setPhoto(result);
      resetTransform();
    }
  }

  function handleSelectSticker(s: Sticker) {
    setSticker(s);
    resetTransform();
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
        <HomeTitle />
        <CoinFlip />
        <Button title="Выбрать фото" size="large" onPress={handlePickPhoto} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View style={styles.canvas} ref={canvasRef} collapsable={false}>
          <Image source={{ uri: photo.uri }} style={styles.photo} />
          <DraggableSticker
            sticker={sticker}
            translateX={translateX}
            translateY={translateY}
            scale={scale}
          />
        </View>
      </GestureDetector>
      <StickerPanel onSelect={handleSelectSticker} />
      <View style={[styles.actions, { paddingBottom: 12 + insets.bottom }]}>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF8F0",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
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
    backgroundColor: "#FFF8F0",
  },
});
