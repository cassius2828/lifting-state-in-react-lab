// src/components/IngredientList.jsx
const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => {
        return (
          <>
            <Ingredient
              key={ingredient.name + ingredient.color}
              ingredient={ingredient}
              isStacked={false}
              addToBurger={addToBurger}
            />
          </>
        );
      })}
    </ul>
  );
};

export default IngredientList;

export const Ingredient = ({
  ingredient,
  key,
  isStacked,
  addToBurger,
  removeFromBurger,
}) => {
  return (
    <li style={{ backgroundColor: ingredient.color }} key={key}>
      <span>{ingredient.name}</span>
      {isStacked ? (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => removeFromBurger(ingredient)}
          className="remove-ingredient"
        >
          <span>-</span>
        </div>
      ) : (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => addToBurger(ingredient)}
          className="add-ingredient"
        >
          <span>+</span>
        </div>
      )}
    </li>
  );
};
