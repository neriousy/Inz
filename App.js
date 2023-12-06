import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/auth/authContext";
import React, { useCallback } from "react";
import SplashScreen from "expo-splash-screen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Characteristics from "./screens/Characteristics/Characteristics";
import Chat from "./screens/Chat/Chat";
import MyProfile from "./screens/MyProfile/MyProfile";
import ChatRoom from "./screens/ChatRoom/ChatRoom";
import Search from "./screens/Search/Search";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isFontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (!isFontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isFontsLoaded]);

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer onLayout={onLayoutRootView}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Characteristics" component={Characteristics} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    fontFamily: "regular",
    fontSize: 16,
  },
});
