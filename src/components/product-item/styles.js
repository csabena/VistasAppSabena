import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: height / 4,
    borderRadius: 8,
    margin: 10,
  },
  containerTouchable: {
      flex: 1,
      borderRadius: 4,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 3,
      elevation: 3,
      justifyContent: "center",
      alignItems: "center",
      padding: 20
  },
  name: {
        //fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        fontWeight: 'bold'
    },
    details: {
      //fontFamily: 'OpenSans-Regular',
      fontSize: 16,
      fontWeight: 'normal'
  }
  });

  export default styles; 