import { Ingredient } from "./IngredientList";

// `src/components/BurgerStack.jsx`
const BurgerStack = ({ selectedIngredients, removeFromBurger }) => {
  return (
    <>
      <ul>
        {selectedIngredients.length > 0 ? (
          selectedIngredients.map((ingredient) => {
            return (
              <Ingredient
                ingredient={ingredient}
                key={ingredient.name + ingredient.color + "stacked"}
                isStacked={true}
                removeFromBurger={removeFromBurger}
              />
            );
          })
        ) : (
          <p>
            Sheesh talk about a plain burger... add some ingredients from the
            left 😁
          </p>
        )}{" "}
      </ul>
    </>
  );
};

export default BurgerStack;
