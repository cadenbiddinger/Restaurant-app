import React from 'react';
import Food from './Food';

const FoodList = ({ Foods, updateFood, deleteFood }) => (
  <div>
    { foods.map( food => 
        <Menu
          key={food.id}
          {...food}
          updateFood={updateFood}
          deleteFood={deleteFood}
        />
      )
    }
  </div>
)

export default FoodList;

