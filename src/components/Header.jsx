import { useDispatch, useSelector } from "react-redux"
import Navbar from "./Navbar"
import { login, logout } from "../state/dataReducer"

export default function Header() {
    const loggedIn = useSelector((state) => state.data.loggedIn)
    console.log(loggedIn)
    const dispatch = useDispatch()

    return <header className="flex justify-between align-baseline flex-wrap pb-5">
        <span>
            <span className="text-2xl  font-[impact] italic">Dashboard app 2.0 </span> 

            <span className="text-1xl font-[Segoe_Script] italic">Stenlund edition</span>
        </span>
        <Navbar/>
        <span className="w-3xs text-right">
        {
            loggedIn ?
            <span>Användarnamn <button className="text-blue-600 underline cursor-pointer" onClick={() => dispatch(logout())} >Logga ut</button></span>
            :
            <span><button className="text-blue-600 underline cursor-pointer" onClick={() => dispatch(login())} >Logga in</button></span>


        }
        </span>

    </header>
}