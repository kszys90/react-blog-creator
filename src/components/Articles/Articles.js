import React from "react";
import StyledArticles from './Articles.styled'
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination";


const Articles = props => {
    const history = useNavigate()

    function handleClick(route) {
        return history(route)
    }
    return (
        <StyledArticles>
            {props.items.map(item => {
                return (
                    <div key={`article${item.id}`} style={{ padding: '12px', marginBottom: '20px' }}>
                        <h2
                            style={{ cursor: 'pointer', fontSize: '28px', margin: '0px', marginBlockStart: '0', marginBlockEnd: '0' }}
                            onClick={() => handleClick(item.alias)}
                        >
                            {item.title}
                        </h2>
                        <p
                            style={{ fontSize: '20px', margin: '0px', marginBlockStart: '0', marginBlockEnd: '0' }}
                        >
                            {item.intro}...
                        </p>

                    </div>
                )
            })}
        </StyledArticles >
    )
}

export default Articles