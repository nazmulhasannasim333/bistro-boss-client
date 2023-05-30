import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'salad');
    const salad = menu.filter(item => item.category === 'salad');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* Main cover */}
            <Cover img={menuImg} title="Our Menu" height="650px" subtitle="Would you like to try a dish?" />
            {/* Offered */}
            <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss" />
            <MenuCategory btn={"ORDER YOUR FAVOURITE FOOD"} items={offered} />
            <MenuCategory btn={"ORDER YOUR FAVOURITE FOOD"} items={dessert} title="dessert" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s." height="600px" img={dessertImg} />
            <MenuCategory btn={"ORDER YOUR FAVOURITE FOOD"} items={pizza} title="pizza" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s" height="600px" img={pizzaImg} />
            <MenuCategory btn={"ORDER YOUR FAVOURITE FOOD"} items={salad} title="salad" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s" height="600px" img={saladImg} />
            <MenuCategory btn={"ORDER YOUR FAVOURITE FOOD"} items={soup} title="soup" subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s" height="600px" img={soupImg} />
        </div>
    );
};

export default Menu;