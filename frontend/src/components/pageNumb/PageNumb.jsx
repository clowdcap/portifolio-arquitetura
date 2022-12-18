import React from 'react'
import './numbers.css'

const PageNumb = (props) => {
    return (
        <div className="table__numbers">
            <p className="item__table__numbers">{props.num_page}</p>
            <p className="item__table__numbers">/</p>
            <p className="item__table__numbers">{props.num_pages}</p>
        </div>
    )
}

export default PageNumb