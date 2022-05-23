import React from 'react'
import './App.css'
import { Shapka } from "./ReactComponents/Shapka/Shapka"
import { ContentContainer } from "./ReactComponents/Content/ContentContainer"
import { initializeApp } from 'firebase/app'
import { Provider } from "react-redux"
import { store } from "./Redux/redux-store"


const firebaseConfig = {
    apiKey: "AIzaSyAi-yjk9hzpcm5z0Gmm5CYjEe9iQ8P2b3A",
    authDomain: "vpi-server1930tk.firebaseapp.com",
    projectId: "vpi-server1930tk",
    storageBucket: "vpi-server1930tk.appspot.com",
    messagingSenderId: "988585749896",
    appId: "1:988585749896:web:3d7f116e4bbaf45f219e3d",
    measurementId: "G-LV7K6ZQ12H"
}

export const app = initializeApp(firebaseConfig)

function App() {
    return (
        <Provider store={store}>
            <div>
                <div className={"div"}>
                    <Shapka />
                </div>
                <div className={"div"}>
                    <ContentContainer />
                </div>
            </div>
        </Provider>
    )
}

export default App;
