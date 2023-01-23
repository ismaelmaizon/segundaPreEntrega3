import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from '../Card/Card'

const Listall = function ({data}) {
  
    return (
        data[1].map(({idDrink, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5}) => (
            <Card key={idDrink} name={strDrink} img={strDrinkThumb} description={[strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]}/>
            )))
  }


export default Listall;


// idDrink, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5