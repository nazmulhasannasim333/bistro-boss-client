import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items, btn, img, title, height, subtitle}) => {
    return (
        <div>
            {title && <Cover img={img} title={title} subtitle={subtitle} height={height} />}
            <div className='max-w-7xl mx-auto my-10'>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                 
            </div>
            {
                title && <div className='text-center'>
                <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4 hover:text-yellow-600">{btn}</button>
                </Link>
                 </div> 
            }
        </div>
        </div>
       
    );
};

export default MenuCategory;