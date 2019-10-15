import React from 'react';

export const Filters = props => {
    const title = props.title;

    const br = () => {
        props.setBrand({as: '1'})
    };

    return (
        <div className='filters' onClick={br}>
            {title}
        </div>
    );
};