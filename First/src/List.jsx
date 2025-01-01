function List() {
    const players = [{name: "Marcus Rashford ", wages : 300000}, 
        {name: "Casemiro ", wages : 350000}, 
        {name: "Bruno Fernandes ", wages : 300000}, 
        {name: "Mason Mount ", wages: 250000}];

    // Sorting the fruits --> 1. Ascending 2. Descending
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); --> Ascending Order
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
    players.sort((a,b) => b.wages - a.wages);
    // fruits.sort((a,b) => a.calories - b.calories);  Ascending order of calories value
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const listItems = lowCalFruits.map((lowCalFruit, index) => <li key={index}>{lowCalFruit.name}: &nbsp;
    //                                                    <b>{lowCalFruit.calories}</b></li>);
    // return (<ol>{listItems}</ol>);
// -------------------------------------------------------------------------------------------------------------------

    // const listItems = fruits.map((fruit, index) => <li key={index}>{fruit.name}: &nbsp;
    //                                                    <b>{fruit.calories}</b></li>);
    const listItems = players.map((player, index) => <li key={index}>{player.name}: &nbsp;
                                                       <b>{player.wages}</b></li>);
    return (
    <div className="players">
    <ol>{listItems}</ol>
    </div>
);

    
}

export default List;
