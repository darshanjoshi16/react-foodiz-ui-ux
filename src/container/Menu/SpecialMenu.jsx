import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Our&apos;s Speciality</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">North Indian Royal Dine❤️</p>
        <div className="app__specialMenu_menu_items">
          {data.northindian.map((northindian, index) => (
            <MenuItem key={northindian.title + index} title={northindian.title} price={northindian.price}/>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Vanakkam South India💕</p>
        <div className="app__specialMenu_menu_items">
          {data.southindian.map((southindian, index) => (
            <MenuItem key={southindian.title + index} title={southindian.title} price={southindian.price}/>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
    </div>
  </div>
);

export default SpecialMenu;