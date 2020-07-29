import React from 'react';


const Table = ({ data }) => {
    console.log(data);
    return (
        <div>
            {data.map(item=> (<li>{item.date}</li>))}
        </div>
    )
}

export default Table;
