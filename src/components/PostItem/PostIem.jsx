import PropTypes from 'prop-types';
import React from 'react';
export function PostItem ({ title, text}) {
    return (
        <li>
        <h4>{title}</h4>
        <p>{text}</p>
      </li>
    )
}

PostItem.PropTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}