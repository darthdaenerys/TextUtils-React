import React from 'react'

export default function Alert(props) {
    const capitalizeFirst = (word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    }
    return (
        <div style={{
            position: 'absolute',
            display: 'inline-block',
            width: '100%'
        }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalizeFirst(props.alert.type)}: </strong>
                <strong>{props.alert.message}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}
