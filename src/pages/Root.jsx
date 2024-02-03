import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Modal from "../components/Modal/Modal"

const Root = () => {

    useEffect(() => {

        document.title = "practika1"

    }, [])

    return (
        <>
            <Modal />

            <div className="container">

                <Header />

                <Outlet />

            </div>

        </>
    )
}

export default Root