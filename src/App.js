import React, {useContext, useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import ShopNavBar from "./components/ShopNavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import {fetchBiscuits, fetchCakes, fetchFillings} from "./http/CakeAPI";

const App = observer( () => {
    const {user} = useContext(Context)
    const {cakes} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if(loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <ShopNavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
