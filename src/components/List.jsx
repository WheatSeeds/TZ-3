import React from 'react';

const List = ({items, renderItem, className}) => {
    return (
        <ul className={className}>
            {items.map((item) => (
                <li className={`${className}__item`} key={item.id}>{renderItem(item)}</li>
            ))}
        </ul>
    );
};

export default List;