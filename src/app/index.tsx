import SignIn from "@/app/(auth)/SignIn";
import { StyleSheet, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
