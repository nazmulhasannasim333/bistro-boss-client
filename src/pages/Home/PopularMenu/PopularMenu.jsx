import React from 'react';

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from '../../../hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';



const PopularMenu = () => {
   const [menu] = useMenu();
   const popularItems = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-12 max-w-7xl mx-auto px-6 lg:px-0">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
           <div className='text-center my-12'>
           <button className="btn btn-outline border-0 border-b-4 mt-4 hover:text-yellow-600">View Full Menu</button>
           </div>
        </section>
    );
};

export default PopularMenu;