import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } =  useContext(Context);

  return (<View style={styles.container}>
              <NavigationEvents
                onWillFocus={clearErrorMessage}
              />
              <AuthForm
                headerText= "Sign In to your Account"
                errorMessage= {state.errorMessage}
                submitButtonText= "Sign In"
                onSubmit= {signin}
              />
              <NavLink
                routeName= "Signup"
                text= "Don't have an account? Sign up instead!"
              />
          </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //marginBottom: 250
  }
});

export default SigninScreen;
