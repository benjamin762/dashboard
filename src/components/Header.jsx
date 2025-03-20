import { useDispatch, useSelector } from "react-redux"
import Navbar from "./Navbar"
import { login, logout } from "../state/dataReducer"

export default function Header() {
    const loggedIn = useSelector((state) => state.data.loggedIn)
    console.log(loggedIn)
    const dispatch = useDispatch()

    return <header className="grid mb-5 grid-cols-2 lg:grid-cols-3 grid-flow-dense  border-b-2">
        <span>
            <span className="text-2xl  font-[impact] italic">Dashboard app 2.0 </span> 

            <span className="text-1xl font-[Segoe_Script] italic">Stenlund&nbsp;edition</span>
        </span>
        <div className="col-start-1 col-span-2 lg:col-start-2 lg:col-span-1"><Navbar  /></div>
        <span className=" text-right">
        {
            loggedIn ?
            <span>Janne Andersson <button className="text-blue-600 underline cursor-pointer" onClick={() => dispatch(logout())} >Logga ut</button></span>
            :
            <span><button className="text-blue-600 underline cursor-pointer" onClick={() => dispatch(login())} >Logga in</button></span>


        }
        </span>

    </header>
}