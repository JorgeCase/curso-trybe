
//1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let textH1 = document.querySelector('body');
let texto = document.createElement('h1');
texto.innerText = 'Exercício 5.2 - JavaScript DOM';
textH1.appendChild(texto);

//2. Adicione a tag main com a classe main-content como filho da tag body;
let appendMain = document.querySelector('body');
let creatMain = document.createElement('main');
creatMain.className = 'main-content';
appendMain.appendChild(creatMain);

//3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let appendSection = document.querySelector('main');
let creatSection = document.createElement('section');
creatSection.className = 'center-content';
appendSection.appendChild(creatSection);

//4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
//let appendP = document.querySelector('main');
let appendP = document.querySelector('section');
let creatP = document.createElement('p');
creatP.innerText = 'Parágrafo do item 4';
appendP.appendChild(creatP);

//5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let appendSection2 = document.querySelector('main');
let creatSection2 = document.createElement('section');
creatSection2.className = 'left-content';
appendSection2.appendChild(creatSection2);

//6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let appendSection3 = document.querySelector('main');
let creatSection3 = document.createElement('section');
creatSection3.className = 'right-content';
appendSection3.appendChild(creatSection3);

//7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let appendImage = document.querySelector('section');
let creatImage = document.createElement('img');
creatImage. = 'src="https://picsum.photos/200"';
appendImage.appendChild(creatImage);

//8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;


//9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.