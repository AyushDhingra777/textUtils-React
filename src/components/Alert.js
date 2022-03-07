import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    /* Default value of alert.type is null,nothing will show,Therefore props.alert&& */
    return (
        props.alert && <div class={`alert alert-${props.alert.type} `} role="alert">
            {capitalize(props.alert.type)}   :  {props.alert.msg}
        </div>
    )
}
