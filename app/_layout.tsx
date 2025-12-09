import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Image, Text, TouchableOpacity, View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: "#1B3C53",border:"none" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitle: () => (
            <Link href="/" asChild>
              <Image
                source={require("@/assets/images/logo.png")}
                style={{ width: 50, height: 50, resizeMode: "contain" }}
              />
            </Link>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Text style={{ color: "#fff", fontSize: 24 }}>🛒</Text>
            </TouchableOpacity>
          ),
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="product"
          options={{
            title: "Product",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="inventory" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="cart"
          options={{
            title: "Cart",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="shopping-cart" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="modal"
          options={{
            title: "Modal",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="view-module" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </View>
  );
}
