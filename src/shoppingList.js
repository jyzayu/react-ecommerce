const items = [
  { id: 1, name: 'mouse', price: 12000 },
  { id: 5, name: 'keyboard', price: 70000 },
  { id: 16, name: 'water', price: 1000 },
];

function ShoppingList() {
  const listItems = items.map((item) => <li key={item.id}>{item.name}</li>);

  return <ul>{listItems}</ul>;
}

export default ShoppingList;
