import React from 'react'

const Show = (props) => {
    return (
        <>
            {
                props.show ? props.children: null
            }
        </>
    )
}

export default Show;
