# Atividade do Carrinho de Compra

Olar, Padawinfo!
Um super herói muito importante (o Super Mercado, também conhecido como S.M.), está procurando alguém para resolver um problema global, que pode ajudar toda a humanidade. Automatizar o sistema de carrinhos. Para isso haverá um array a seguir:

```js 
let cart = [
	{ name: "Pacotinfo de pão", amount: 2, value: 10.00 }
]; 
```

E você precisa desenvolver 4 funções para gerenciar o carrinho:

[x] add: recebe como parametro um objeto, com as informações name, amount e value como no carrtinho inicial e adicionar esse elemento no carrinho e retorna o array do carrinho
[x] remove: recebe como parametro o nome do item e remove o elemento do carrinho e retorna o array do carrinho
[x] exist: recebe como parametro o nome do item e retorna true caso o item já esteja no carrinho ou falso caso não esteja
[x] change: recebe como parametro o nome e a nova quantidade, caso o item exista altere a quantidade porém se a nova quantidade for 0 então remova o item do carrinho, caso não exista o item no carrinho adicione o item no carrinho (considere o value como 100.0)

**Obs**.(1): Busque reaproveitar codigo e usar as funções já criadas
**Obs**.(2): Busque usar os metodos de array (como map, filter, push, some, ...) em vez de for. É possivel ver esses metodos na barra lateral em Methods do https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map (Array.prototype)

Em caso de emergência (ou até qualquer dúvida besta), chame a gente no discord! 💚 ✨