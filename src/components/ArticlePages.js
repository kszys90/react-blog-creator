import React from "react";
import { Navigate, useParams } from "react-router-dom";
import NavLink from './NavLink'
import Articles from "./Articles";

const ArticlePages = props => {
    const { posts } = props
    const { currentPage } = useParams()
    const limit = 3
    const length = posts.length
    const begin = limit * (currentPage - 1)
    const end = currentPage * limit
    const pages = Math.ceil(length / limit)
    const currentArticles = posts.slice(begin, end)
    const linkStyle = {
        textAlign: 'center',
        padding: '5px',
        margin: '5px',
        fontSize: '20px',
        color: 'black',
        textDecoration: 'inherit',
        fontWeight: 400,
        border: '1px grey solid',
        borderRadius: '5px',
        minWidth: '15px'
    }
    const activeLinkStyle = {
        textAlign: 'center',
        padding: '5px',
        margin: '5px',
        fontSize: '20px',
        color: 'black',
        textDecoration: 'inherit',
        fontWeight: 900,
        border: '1px grey solid',
        borderRadius: '5px',
        minWidth: '15px'
    }

    function renderArticles() {
        if (currentPage && Number(currentPage) <= pages && Number(currentPage) > 0) {
            return <Articles items={currentArticles} />
        }
        return (
            <Navigate replace to='/404' />
        )
    }
    function renderNav() {
        if (currentPage && Number(currentPage) === 1) {
            return (
                <>
                    <NavLink title={'<'} style={linkStyle} />
                    <NavLink title={currentPage} style={activeLinkStyle} />
                    <NavLink title={(Number(currentPage) + 1).toString()} alias={`home/${(Number(currentPage) + 1).toString()}`} style={linkStyle} />
                    <NavLink title={'...'} style={linkStyle} />
                    <NavLink title={'4'} alias={`home/${pages}`} style={linkStyle} />
                    <NavLink title={'>'} alias={`home/${(Number(currentPage) + 1).toString()}`} style={linkStyle} />
                </>
            )
        }
        if (currentPage && Number(currentPage) > 1 && Number(currentPage) < pages) {
            return (
                <>
                    <NavLink title={'<'} alias={`home/${(Number(currentPage) - 1).toString()}`} style={linkStyle} />
                    {Number(currentPage) > 2 ? <NavLink title={'1'} alias={`home/1`} style={linkStyle} /> : null}
                    {Number(currentPage) > 3 ? <NavLink title={'...'} style={linkStyle} /> : null}
                    <NavLink title={(Number(currentPage) - 1).toString()} alias={`home/${(Number(currentPage) - 1).toString()}`} style={linkStyle} />
                    <NavLink title={(Number(currentPage)).toString()} style={activeLinkStyle} />
                    <NavLink title={(Number(currentPage) + 1).toString()} alias={`home/${(Number(currentPage) + 1).toString()}`} style={linkStyle} />
                    {Number(currentPage) < pages - 2 ? <NavLink title={'...'} style={linkStyle} /> : null}
                    {Number(currentPage) < pages - 1 ? <NavLink title={`${pages}`} alias={`home/${pages}`} style={linkStyle} /> : null}
                    <NavLink title={'>'} alias={`home/${(Number(currentPage) + 1).toString()}`} style={linkStyle} />


                </>
            )
        }
        if (Number(currentPage) === pages) {
            return (
                <>
                    <NavLink title={'<'} alias={`home/${(Number(currentPage) - 1).toString()}`} style={linkStyle} />
                    <NavLink title={'1'} alias={`home/1`} style={linkStyle} />
                    <NavLink title={'...'} style={linkStyle} />
                    <NavLink title={(Number(currentPage) - 1).toString()} alias={`home/${(Number(currentPage) - 1).toString()}`} style={linkStyle} />
                    <NavLink title={(Number(currentPage)).toString()} style={activeLinkStyle} />
                </>
            )
        }
    }

    return (
        <>
            <div style={{ paddingBottom: '50px' }}>
                {renderArticles()}
            </div>
            <div style={{ position: 'absolute', bottom: '0px', width: '100%', display: 'flex', justifyContent: 'center' }} >
                {renderNav()}
            </div>
        </>
    )
}

export default ArticlePages