import React from "react";
import { SafeAreaView, Text, Image, TouchableOpacity, TouchableOpacityProps} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

interface IBoxCategoryVideos extends TouchableOpacityProps {
  text: string;
  source: any;
}

export function BoxCategoryVideos({ text, source, ...rest }: IBoxCategoryVideos) {
  return (
    <SafeAreaView style={styles.body} >
      <TouchableOpacity {...rest}>
        <Image resizeMode="stretch" borderRadius={(20)} style={styles.img} source={source.cover} />
      </TouchableOpacity>
      <SafeAreaView style={styles.boxText}>
        <Text style={styles.text}>{text}</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
