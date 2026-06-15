import { Sticker } from "@/shared";
import { Image } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

type Props = {
  sticker: Sticker;
  translateX: SharedValue<number>;
  translateY: SharedValue<number>;
  scale: SharedValue<number>;
};

export function DraggableSticker({ sticker, translateX, translateY, scale }: Props) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Image source={sticker.uri} style={{ width: 140, height: 140 }} />
    </Animated.View>
  );
}
