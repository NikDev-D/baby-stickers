import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export function CoinFlip() {
  const rotateY = useSharedValue(0);

  useEffect(() => {
    rotateY.value = withRepeat(
      withSequence(withTiming(180, { duration: 800 }), withTiming(360, { duration: 800 })),
      -1,
      false,
    );
  }, []);

  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotateY.value}deg` }],
    backfaceVisibility: "hidden",
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    backfaceVisibility: "hidden",
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.coin, frontStyle]}>
        <Image source={require("../../../assets/images/coin_fron.png")} style={styles.image} />
      </Animated.View>
      <Animated.View style={[styles.coin, backStyle]}>
        <Image source={require("../../../assets/stickers/animals/1f43b.png")} style={styles.image} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 190,
    height: 190,
    marginBottom: 40,
  },
  coin: {
    width: 160,
    height: 160,
    position: "absolute",
    top: 15,
    left: 15,
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },
});
