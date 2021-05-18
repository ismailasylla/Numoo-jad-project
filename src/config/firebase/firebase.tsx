import firebase from "firebase/app";
import "firebase/auth";
import { env_dev } from "./config";

const app = firebase.initializeApp(env_dev);
const auth = app.auth();

export { app, auth };
