import React from 'react';
import './pizzas.css'

function Pizza({ name, description, price }) {
  return (
    <div className="pizza">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Precio: {price}</p>
    </div>
  );
}

function Pizzas() {
  return (
    <div className="pizzas-container">
      <div className="pizzas">
        <Pizza 
          name="Pizza Margarita" 
          description="Salsa de tomate, mozzarella y albahaca fresca." 
          price="$10" 
        />
        <Pizza 
          name="Pizza Pepperoni" 
          description="Salsa de tomate, mozzarella y pepperoni." 
          price="$12" 
        />
        <Pizza 
          name="Pizza Hawaiiana" 
          description="Salsa de tomate, mozzarella, jamón y piña." 
          price="$11" 
        />
        <Pizza 
          name="Pizza Usuy" 
          description="Salsa de tomate, mozzarella, pepperoni, jamón, champiñones y pimientos." 
          price="$15" 
        />
        <Pizza 
          name="Pizza BBQ" 
          description="Salsa BBQ, mozzarella, pollo a la parrilla, cebolla roja y cilantro." 
          price="$13" 
        />
        <Pizza 
          name="Pizza Vegetariana" 
          description="Salsa de tomate, mozzarella, champiñones, pimientos, cebolla y aceitunas." 
          price="$12" 
        />
        <Pizza 
          name="Pizza de Pollo y Pesto" 
          description="Salsa pesto, mozzarella, pollo a la parrilla, tomates cherry y albahaca fresca." 
          price="$14" 
        />

      </div>
    </div>
  );
}

export default Pizzas;