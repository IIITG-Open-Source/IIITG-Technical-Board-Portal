import React from 'react';
import ListButton from './ListButton';

function Items(props) {
    const items = props.children;

    return (
        items ? (
            items.map(item => {
                return (
                    <ListButton key={item.name} item href={item.link}>
                        {item.name}
                    </ListButton>
                );
            })
        ) : (
            <ListButton empty />
        )
    );
}

export default Items;