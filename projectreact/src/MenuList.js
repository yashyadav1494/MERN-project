import React from "react";
import MenuItem from './MenuItem';

export default function MenuList({ items, onAddToOrder, onDeleteMenuItem })
{
    return(
        <>
        <div className="d-flex flex-wrap justify-content-center">
         {items.map(item => (
        <MenuItem
          key={item.id}
          item={item}
          onAddToOrder={onAddToOrder}
          onDeleteMenuItem={onDeleteMenuItem}
        />
      ))}
    </div>
        </>
    )
}