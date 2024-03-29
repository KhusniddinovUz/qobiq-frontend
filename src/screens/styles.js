import { StyleSheet } from "react-native";

const mainColor = "#00CDBD";

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  authContainer: {
    backgroundColor: mainColor,
    flex: 1,
    justifyContent: "space-between",
  },
  loginInputBox: {
    marginTop: 10,
    height: 60,
  },
  genderAgeBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  genderAgeInput: {
    marginLeft: 0,
    marginRight: 0,
    width: "45%",
  },
  inputContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    position: "relative",
    padding: 30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
    marginTop: 50,
    marginBottom: 20,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  authHeader: {
    // fontFamily: "Verdana",
    textAlign: "left",
    fontSize: 45,
    color: "#fff",
    margin: "auto",
  },
  input: {
    // fontFamily: "Verdana",
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
    // fontFamily: "Verdana",
    width: "80%",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    backgroundColor: mainColor,
    borderRadius: 20,
  },
  loginAuthButton: {
    // fontFamily: "Verdana",
    marginTop: 30,
  },
  text: {
    // fontFamily: "Verdana",
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
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // bottom: "10%",
    // left: 0,
    // right: 0,
  },
  authLine: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  chatsList: {
    backgroundColor: mainColor,
    color: "#fff",
    width: "80%",
    padding: 20,
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 30,
    textAlign: "center",
  },
  boxShadow: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  groupContainer: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  ownMessageContainer: {
    marginLeft: "auto",
    marginRight: 0,
    width: "50%",
    backgroundColor: mainColor,
    marginBottom: 20,
    borderRadius: 20,
    borderBottomRightRadius: 7,
    padding: 10,
    paddingLeft: 15,
  },
  messageContainer: {
    width: "50%",
    backgroundColor: "#F5F5F5",
    marginBottom: 20,
    borderRadius: 20,
    borderTopLeftRadius: 7,
    padding: 10,
    paddingTop: 5,
    paddingLeft: 15,
  },
  messageOwner: {
    color: mainColor,
    fontSize: 16,
    marginBottom: 5,
  },
  message: {
    color: "#353806cc",
  },
  ownMessage: {
    backgroundColor: mainColor,
    color: "#fff",
  },
  sendMessageContainer: {
    height: 100,
  },
  sendMessageInputWrapper: {
    height: 50,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  sendMessageInput: {
    height: 50,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 40,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  sendMessageIconWrapper: {
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 0,
    top: 0,
    justifyContent: "center",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  articleContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    width: "90%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  articleTitle: {
    fontSize: 25,
    color: mainColor,
    textAlign: "center",
    marginBottom: 30,
  },
  articleContent: {
    textAlign: "left",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: mainColor,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 16,
  },
});

export default styles;
