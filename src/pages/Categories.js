import React from "react"
import NavBar from "../components/NavBar"
import Logo from "../components/Logo"
import { useNavigate, Outlet } from "react-router-dom";




export const Categories = (props) => {

    const style = {
        fontSize: '17px',
        color: 'black',
        textDecoration: 'inherit',
        fontWeight: 400
    }
    const { posts } = props
    let categories = []
    posts.forEach(post => {
        if (categories.includes(post.category)) { return null }
        return categories.push(post.category)
    })
    const history = useNavigate()

    function handleClick(e, route) {
        e.preventDefault()
        return history(route)
    }
    return (
        <>
            <Logo />
            <NavBar />
            <div style={{ textAlign: "center" }}><h2>Choose article category:</h2></div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {categories ? categories.map((category, index) => <a href='/' style={style} onClick={(e) => handleClick(e, category)} key={`cat${index}`}
                >{category}</a>) : null}
            </div>
            <Outlet />
            {/* <Outlet context={{ hello: "world" }} /> */}
        </>
    )

}
