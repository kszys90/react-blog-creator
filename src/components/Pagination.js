import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

const Pagination = props => {
    const { children, path, limit = 5 } = props
    const length = children.length
    const page = 1
    const begin = limit * (page - 1)
    const end = page * limit
    const pages = Math.ceil(length / limit)
    const links = (new Array(pages).fill(0).map((item, index) => {
        <li key={index}>
            <Link to={`${path}/${index + 1}`}>
                {index + 1}
            </Link>
        </li>
    }))


    return (
        <Routes>
            <Route path={`${path}/:page`}>
                {/* dopiero tutaj jest dostęp do page */}
                {children.slice(begin, end)}
                <nav>
                    <ul>{links}</ul>
                </nav>
            </Route>
            <Navigate to={`${path}/1`} />
        </Routes>
    )
}

export default Pagination