import React from 'react';

const MyList = props => (
    <ul className='display_list'>
        {
            props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
);

export default MyList;