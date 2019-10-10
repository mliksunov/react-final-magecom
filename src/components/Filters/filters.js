import React from 'react';

export const Filters = props => {
    console.log(props);

    const title = props.title;

    return (
        <div className='filters'>
            {title}
        </div>
    );
};