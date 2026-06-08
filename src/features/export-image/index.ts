import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import { RefObject } from "react";
import { View } from "react-native";
import { captureRef } from "react-native-view-shot";

export async function saveToGallery(ref: RefObject<View | null>): Promise<boolean> {
  try {
    await MediaLibrary.requestPermissionsAsync();
    const uri = await captureRef(ref, { format: "jpg", quality: 0.9 });
    await MediaLibrary.saveToLibraryAsync(uri);
    return true;
  } catch (e: any) {
    alert("Ошибка: " + e.message);
    return false;
  }
}
export async function shareImage(ref: RefObject<View | null>): Promise<void> {
  const uri = await captureRef(ref, { format: "jpg", quality: 0.9 });
  await Sharing.shareAsync(uri);
}
