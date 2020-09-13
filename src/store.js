import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import NotifyReducer from "./reducers/NotifyReducer";
import settingReducer from "./reducers/settingReducer";

//Reducers To be made yet

//Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAqe9xOBWzNne-_T2vmGRR_yRrb6mzsz04",
  authDomain: "reactclientpanel-a1644.firebaseapp.com",
  databaseURL: "https://reactclientpanel-a1644.firebaseio.com",
  projectId: "reactclientpanel-a1644",
  storageBucket: "reactclientpanel-a1644.appspot.com",
  messagingSenderId: "310080395841",
  appId: "1:310080395841:web:d782bc6a39419ef22244c0",
  measurementId: "G-T2C9S8V6Q1",
};

//React-Redux Firebase Config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

//Initialize the firebase instatnce
firebase.initializeApp(firebaseConfig);

//Initialize the firestore
const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: NotifyReducer,
  setting: settingReducer,
});

//check for settings in local Storage
if (localStorage.getItem("setting") == null) {
  //Default Setting
  const defaultSetting = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false,
  };

  //Set to local Storage
  localStorage.setItem("setting", JSON.stringify(defaultSetting));
}

//Create Initial State
const initialState = {
  setting: JSON.parse(localStorage.getItem("setting")),
};

//Create our store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
