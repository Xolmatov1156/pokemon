let elPokemonList = document.querySelector(".pokemon-list");
let elSelect = document.querySelector(".pokemon-select");
let elInput = document.querySelector(".pokemon-input");
let elContent = document.querySelector(".content");
let elLikeBtn = document.querySelector(".like_btn")

function renderPokemonList(arr, list) {
    list.innerHTML = "";
    arr.forEach((item) => {
        let elItem = document.createElement("li");
        elItem.innerHTML = `
        <img src=${item.img}
        <div class="flex items-center justify-between">
        <div>
        <h2>${item.name}</h2>
        <p class="w-[110px] bg-black text-white my-1 rounded-[5px]">${item.type.join(" / ")}</p>
        </div>
        <div class="flex items-center gap-[10px]">
        <button class=" p-[5px] rounded-[10px] text-slate-400"><svg id=${item.id} width="30px" height="30px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path id=${item.id} fill-rule="evenodd" fill="white" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></button>
        <button  onclick={clickMore(${item.id})} class="p-[5px] rounded-[10px] text-red-400"><svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path fill="#000000" fill-rule="evenodd" d="M3 8a2 2 0 100 4 2 2 0 000-4zm5 2a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z"/>
      </svg></button>
        </div>
        </div>
        `;
        list.append(elItem);
        elItem.className ="pokemon_item w-[200px] flex flex-col items-center py-3 rounded-[15px] text-center";
    });
}

function renderSelect(arr, list) {
    let listOption = [];
    let sortedOption = [];
    arr.forEach((item) => {
        listOption = listOption.concat(item.type);
    });
    listOption.filter((item) => {
        if (!sortedOption.includes(item)) {
            sortedOption.push(item);
        }
    });
    sortedOption.map((item) => {
        elOption = document.createElement("option");
        elOption.value = item;
        elOption.textContent = item;
        list.append(elOption);
    });
}

renderSelect(pokemons, elSelect);
renderPokemonList(pokemons, elPokemonList);

elInput.addEventListener("input", (evt) => {
    const inputValue = evt.target.value.toLowerCase();
    const searchData = pokemons.filter((item) =>
        item.name.toLowerCase().includes(inputValue)
    );
    renderPokemonList(searchData, elPokemonList);
});

elSelect.addEventListener("change", (evt) => {
    const selectValue = evt.target.value;
    if (selectValue == "all") {
        renderPokemonList(pokemons, elPokemonList);
    } else {
        const selectedPokemons = pokemons.filter((item) =>
            item.type.includes(selectValue)
        );
        renderPokemonList(selectedPokemons, elPokemonList);
    }
});

function clickMore(id){
const {name, img, type, height, weight, candy, candy_count, egg} = pokemons.find(item => item.id == id)
elContent.innerHTML = `
<img src="${img}" class="w-[200px] mx-auto">
<h2>${name}</h2>
<p>Type : ${type}</p> 
<p>Height : ${height}</p> 
<p>Weight : ${weight}</p> 
<p>Candy : ${candy}</p> 
<p>Candy_count : ${candy_count}</p> 
<p>Egg : ${egg}</p> 
`;
}
