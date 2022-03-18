/* import { StatusBar } from 'expo-status-bar'; */
/* import { StyleSheet, Text, View } from "react-native"; */
import React from "react";
import Navigation from "./Navigation/Navigation";
import { Provider } from "react-redux";
import Store from "./Store/configureStore";
/* import { createStackNavigator } from "react-navigation-stack"; */
/* import FilmDetail from "./components/FilmDetail"; */

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    )
  }
}
const SearchStackNavigator = createStackNavigator({
  // ...
  // le nom dans le StackNavigator n'est pas obligatoirement
  // identique au nom du Composant
  FilmDetail: {
    screen: FilmDetail,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
