let cart =[{ name: "Pacotinfo", amount: 2, value: 10.00 }];

function add(item){
  cart.push(item);
  return cart;
}

function remove(nomeItem){
  car = car.filter(produto => produto.name != nomeItem);
  return car;
}

function exist(nomeItem){
  let itemExiste = car.find(produto => produto.name === nomeItem ? 1 : 0);
  if(itemExiste) return true;
  else return false;
}

function change(nomeItem, quantidadeItem){
  let indice = car.findIndex(item => item.name === nomeItem);
  if(exist(nomeItem)){
   quantidadeItem === 0 ? remove(nomeItem):car[indice].amount = quantidadeItem;
  } else {
   add({ name: nomeItem, amount:quantidadeItem, value: 100.0 });
  }
  return car;
}