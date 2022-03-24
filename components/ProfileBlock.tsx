import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  ImageBackgroundProps,
} from "react-native";

export default function NavigationBar({
  profileName,
  profileImage,
}: {
  profileName: string;
  profileImage: ImageBackgroundProps;
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground defaultSource={} source={profileImage}>
        <Text>{profileName}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    width: 400,
  },
});
