//adiciona uma lista (store) para usar com o fuse

const lista = [{
        marca: 'Tesla',
        modelo: 'Model S',
        ano: '2023'
    },
    {
        marca: 'Ford',
        modelo: 'Mustang',
        ano: '2021'
    },
    {
        marca: 'Chevrolet',
        modelo: 'Camaro',
        ano: '2022'
    },
    {
        marca: 'Tesla',
        modelo: 'Model 3',
        ano: '2023'
    },
    // Adicione mais itens conforme necessário
];

const opcoes = {
    includeScore: true, // Inclui a pontuação da pesquisa nos resultados
    keys: ['marca', 'modelo', 'ano'], //são as chaves dos objetos da lista(store)
    threshold: 0.3,
}

const fuse = new Fuse(lista, opcoes)

//const result = fuse.search('ord')

const divResult = document.querySelector('.resultados')

const pesquisa = document.querySelector('#pesquisa')

pesquisa.addEventListener('keyup', (e) => {
    const result = fuse.search(e.target.value)
    divResult.innerHTML = ''
    result.forEach(el => {
        divResult.append(el.item.marca)
    })
})

