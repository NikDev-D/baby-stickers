import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import { RefObject } from "react";
import { View } from "react-native";
import { captureRef } from "react-native-view-shot";

export async function saveToGallery(ref: RefObject<View | null>): Promise<boolean> {
  const uri = await captureRef(ref, { format: "jpg", quality: 0.9 });
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== "granted") return false;
  await MediaLibrary.saveToLibraryAsync(uri);
  return true;
}

export async function shareImage(ref: RefObject<View | null>): Promise<void> {
  const uri = await captureRef(ref, { format: "jpg", quality: 0.9 });
  await Sharing.shareAsync(uri);
}
