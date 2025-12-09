import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const TopBanner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/top-banner.jpg")} // change path as per your project
        style={styles.bannerImage}
        resizeMode="cover"
      />

      <Text style={styles.bannerText}>Top Banner Text Here</Text>
    </View>
  );
};

export default TopBanner;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    
  },
  bannerImage: {
    width: "100%",
    height: 150,
  },
  bannerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    position:"absolute",
    zIndex:999,
  },
});
