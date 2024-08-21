function List() {
    const fruits = [{name: "apple", calories : 95}, 
        {name: "banana", calories : 105}, 
        {name: "orange", calories : 69}, 
        {name: "watermelon", calories: 70}];

    // Sorting the fruits --> 1. Ascending 2. Descending
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); --> Ascending Order
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
    fruits.sort((a,b) => b.calories - a.calories);
    // fruits.sort((a,b) => a.calories - b.calories);  Ascending order of calories value
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const listItems = lowCalFruits.map((lowCalFruit, index) => <li key={index}>{lowCalFruit.name}: &nbsp;
    //                                                    <b>{lowCalFruit.calories}</b></li>);
    // return (<ol>{listItems}</ol>);
// -------------------------------------------------------------------------------------------------------------------

    const listItems = fruits.map((fruit, index) => <li key={index}>{fruit.name}: &nbsp;
                                                       <b>{fruit.calories}</b></li>);
    return (
    <div className="food">
    <ol>{listItems}</ol>
    </div>
);

    
}

export default List;
