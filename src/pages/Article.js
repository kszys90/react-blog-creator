import React from "react"
import NavBar from "../components/NavBar"
import { Navigate, useParams } from "react-router-dom"
import NavLink from "../components/NavLink"
import data from '../data.json'
import Logo from "../components/Logo"


export const Article = () => {
    const { posts } = data
    const { currentArticle } = useParams()
    const article = posts.filter(({ alias }) => (alias === `/${currentArticle}`))
    const linkStyle = {
        paddingTop: '20px',
        fontSize: '20px',
        color: 'black',
        textDecoration: 'inherit',
        fontWeight: '400'
    }
    function renderArticle() {
        const { title, photo, content } = article[0]
        return (
            <div style={{ width: '80%', margin: '0 auto 0 auto' }}>
                <h1 style={{ textAlign: "center" }}>{title}</h1>
                <div>
                    <div><img src={photo} alt={`articlePhoto`} style={{ float: 'right', margin: '0 0 20px 20px' }} /></div>
                    <div><p>{content}</p></div>
                </div>
                <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <NavLink title={'Back to Home-page'} alias={"home"} style={linkStyle} />
                </div>
            </div>
        )

    }
    if (article.length === 0) { return <Navigate to="/404" /> }
    else {
        return (
            <>
                <Logo />
                <NavBar />
                {renderArticle()}
            </>
        )
    }

}
