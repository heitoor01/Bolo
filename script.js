// Criar uma função em que eu mando elemento el e basicamente ele faz o comando querySelector pra mim 
const s = (el) => document.querySelector(el)

const sa = (el) => document.querySelectorAll(el)

cakeJson.map((item,index) => {
    // Aqui vamos dar um clone node no cakeItem que está dentro do HTML e para eu clonar o cakeItem eu vou usar o cloneNode
    let cakeItem = s('.models .cake-item').cloneNode(true);

    // Vamos setar um atributo e chamá-lo de "data-key", então vamos inserir no index a chave do bolo específico

    cakeItem.setAttribute('data-key',index)


    // Adicionando o conteúdo do bolo
    cakeItem.querySelector('.cake-item--name').innerHTML = item.name
    cakeItem.querySelector('.cake-item--desc').innerHTML = item.description
    cakeItem.querySelector('.cake-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`// Usei o toFixed para deixar apenas duas casas decimais
    // Adicionando a imagem
    cakeItem.querySelector('.cake-item--img img').src = item.img // Para adicionar a imagem, eu peguei a tag que tava dentro da div e inseri no atributo src

    // Vamos adicionar a tag <a> e colocar um evento de clique nela

    cakeItem.querySelector('a').addEventListener('click',(e) =>{
        e.preventDefault()

        let key = e.target.closest('.cake-item').getAttribute('data-key')

        s('.cakeInfo h1').innerHTML = cakeJson[key].name
        s('.cakeInfo--desc').innerHTML = cakeJson[key].description
        s('.cakeBig img').src = cakeJson[key].img
        s('.cakeInfo--actualPrice').innerHTML = `R$ ${cakeJson[key].price.toFixed(2)}`
        sa('.cakeInfo--size').forEach((size,sizeIndex) => {
            // Vamos entrar em cakeInfo--size, dentro dele temos uma tag <span>, então após selecionar o cakeInfo--size, vamos pegar o <span> e preencher com alguma informação
            size.querySelector('span').innerHTML = cakeJson[key].sizes[sizeIndex]
        }) 

        s('.cakeWindowArea').style.opacity = 0 // Coloquei opacidade no modal ao abrir
        s('.cakeWindowArea').style.display = 'flex'
        setTimeout(() =>{
            s('.cakeWindowArea').style.opacity = 1
        },30)

    })

    // Preencher as informações em cakeItem e adicionar na tela (a listagem de bolos) está em class="cake-area"
    s('.cake-area').append(cakeItem);
    
})



