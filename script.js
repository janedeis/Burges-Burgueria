const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-All");
const buttonMapAll = document.querySelector(".map-All");
const buttonSomaAll = document.querySelector(".sum-All");
const btnFilterAll = document.querySelector('.filter-all');

/*function to the currency ou moeda*/
function formatCurrency(value){
	const newValue = value.toLocaleString('pt-br',{
		style: 'currency',
		currency:'BRL',
	})

	return newValue;
}

function showAll(productArray) {
	let myli = ""; /**  li começa  vazia **/

	productArray.forEach((product) => {
		myli += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>        
        `;

		list.innerHTML = myli;
	});
}

function mapAllItems() {
	// console.log('Funcionou o botao MAP VAMOS PROGRAMAR')
	// alert('tudo certo por aqui')

	const newList = menuOptions.map((product) => ({
		// ...spraed operator//
		...product,
		price: product.price * 0.9, // 10% e desconto
	}));

	showAll(newList);
}

function reduceAllItems() {
	const productValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

	list.innerHTML = `
        <li>        
            <p> Valor total dos Produtos: ${formatCurrency(productValue)}</p>
        </li>
    `;
}

function filterAllItems(){
	const productFilter = menuOptions.filter(product => product.vegan)
	
	showAll(productFilter)
	// console.log('function filter funcionou')
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItems);
buttonSomaAll.addEventListener("click", reduceAllItems);
btnFilterAll.addEventListener('click', filterAllItems)
