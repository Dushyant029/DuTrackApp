import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const LoginScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Log In to DuTrack"
        errorMessage={state.errorMessage}
        submitButtonText="Login"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an Account? Sign up instead"
      />
    </View>
  );
};

LoginScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 110,
  },
});

export default LoginScreen;
