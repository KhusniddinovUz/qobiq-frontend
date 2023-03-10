import { StyleSheet } from "react-native";

const mainColor = "#00CDBD";

const styles = StyleSheet.create({
  authContainer: {
    backgroundColor: mainColor,
    height: "100%",
  },
  inputContainer: {
    position: "relative",
    padding: 30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: "70%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  inputBox: {
    position: "relative",
    width: "100%",
    height: 50,
    marginBottom: 12,
  },
  inputIconWrapper: {
    alignItems: "center",
    position: "absolute",
    left: 10,
    bottom: 0,
    top: 0,
    justifyContent: "center",
  },
  authHeaderBox: {
    height: "30%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  authHeader: {
    textAlign: "left",
    fontSize: 50,
    color: "#fff",
    margin: "auto",
  },
  input: {
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    height: "100%",
    padding: 10,
    paddingLeft: 40,
    color: "#000",
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
  },
  authButton: {
    width: "80%",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    backgroundColor: mainColor,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  primaryText: {
    color: mainColor,
  },
  flexView: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  authText: {
    color: "#A29EB6",
    fontSize: 16,
    textAlign: "center",
    marginRight: 10,
  },
  bottom: {
    position: "absolute",
    bottom: "7%",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  authLine: {
    position: "absolute",
    bottom: "15%",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
});

export default styles;
