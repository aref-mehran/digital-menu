export default {
  namespaced: true,

  state: {
    items: [],
    isEmpty: true,
  },

  mutations: {},

  actions: {
    async ["loadData"]({ state }) {
      state.items = {
        pizzas: [
          {
            Titulo: "Descrição",
            nome: "Calabresa",
            preco: 20,
            id: 0,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "calabresa",
              "cebolaeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/40490/180/Expresso-Delivery_df361d6751eba435661b4c6a8ddd9008.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Portuguesa",
            preco: 20,
            id: 1,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "presunto",
              "ovo",
              "tomate",
              "cebola",
              "azeitonaeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/6883/180/Expresso-Delivery_8a20f1dbcf993c6c6652e2a529bc72fd.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Mexicana",
            preco: 20,
            id: 2,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "carnemoída",
              "bacon",
              "pimentãoamareloevermelho",
              "pimentacalabresaeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/134/180/Expresso-Delivery_7c4e01b23ec688f6db2a3aee2ac4cc88.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Marguerita",
            preco: 20,
            id: 3,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "tomate",
              "manjericãoeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/6886/180/Expresso-Delivery_d75ffb4c683b29a9355a9a1de022f68f.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Hot Dog",
            preco: 20,
            id: 4,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "salsicha",
              "milhoverde",
              "ervilha",
              "batatapalhaeorégano",
            ],
            imagem:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yt1tMKER8zTbehoIBqq5hgAAAA%26pid%3DApi&f=1",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Baiana",
            preco: 20,
            id: 5,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "carnemoída",
              "calabresaralada",
              "cebola",
              "tomate",
              "pimentãopicado",
              "pimentacalabresaeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/6876/180/Expresso-Delivery_1c819e505f7136e16670d5f444322c65.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Siciliana",
            preco: 20,
            id: 6,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "toscana",
              "calabresaralada",
              "bacon",
              "cebola",
              "pimentãopicadoeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/134/180/Expresso-Delivery_7c4e01b23ec688f6db2a3aee2ac4cc88.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Napolitano",
            preco: 20,
            id: 7,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "presunto",
              "tomateeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/138047/180/Expresso-Delivery_1c5f6f43b61fab0ebd2a71b120c8a97d.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Fran-Bacon",
            preco: 22,
            id: 8,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "frango",
              "milhoverde",
              "bacon",
              "catupiryeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/134/180/Expresso-Delivery_7c4e01b23ec688f6db2a3aee2ac4cc88.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Fran-Catupiry",
            preco: 22,
            id: 9,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "frango",
              "milhoverde",
              "catupiryeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/6885/180/Expresso-Delivery_85cc1f8e92ff99a45d6e4ea3449aca36.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Quatro Estações",
            preco: 22,
            id: 13,
            ingredientes: [
              "Queijomussarela",
              "presunto",
              "calabresa",
              "napolitano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/134/180/Expresso-Delivery_7c4e01b23ec688f6db2a3aee2ac4cc88.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Camarão",
            preco: 25,
            id: 10,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "camarão",
              "champion",
              "catupiryeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/138049/180/Expresso-Delivery_cd9a061ef2a273c502686f200e312926.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Pizza Colosso",
            preco: 25,
            id: 11,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "cebola",
              "carneseca",
              "calabresa",
              "catupiryeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/134/180/Expresso-Delivery_7c4e01b23ec688f6db2a3aee2ac4cc88.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Carne de Sol",
            preco: 25,
            id: 12,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "carnedesol",
              "cebola",
              "catupiryeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/134/180/Expresso-Delivery_7c4e01b23ec688f6db2a3aee2ac4cc88.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Mussarela",
            preco: 25,
            id: 14,
            ingredientes: ["Molho", "queijomussarela", "tomateeorégano"],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/138043/180/Expresso-Delivery_051731b80899105bb31aef3a2e87a3cd.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Três Queijos",
            preco: 26,
            id: 15,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "queijoparmessão",
              "catupiry",
              "azeitonapretaeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/6870/180/Expresso-Delivery_c336dbf90f4bcddece92cf1f4ff82481.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Quatro Queijos",
            preco: 27,
            id: 16,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "queijoparmessão",
              "queijoprato",
              "catupiry",
              "azeitonapretaeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/6870/180/Expresso-Delivery_c336dbf90f4bcddece92cf1f4ff82481.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Cinco Queijos",
            preco: 28,
            id: 17,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "queijoparmessão",
              "provolone",
              "gorgozola",
              "catupiry",
              "azeitonapretaeorégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/6873/180/Expresso-Delivery_f9414f05961cbf5ffe4baf4d9452f1a0.png",
            type: "Queijo",
            group: "pizzas",
          },
          {
            Titulo: "Descrição",
            nome: "Calabacon",
            preco: 25,
            id: 18,
            ingredientes: [
              "Molho",
              "queijomussarela",
              "calabresa",
              "bacon",
              "cebola",
              "orégano",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/6868/180/Expresso-Delivery_3df8c4fd4e7d25dca1c0197ba3c1e2d2.png",
            type: "Queijo",
            group: "pizzas",
          },
        ],
        hamburguers: [
          {
            Titulo: "Descrição",
            nome: "X Colosso",
            preco: 10,
            id: 19,
            ingredientes: [
              "Pão",
              "cremeespecial",
              "carneartesanal",
              "alface",
              "tomate",
              "cebola",
              "bacon",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/47476/180/Expresso-Delivery_b626c98d1108e969c9ac1a37a087b26d.png",
            type: "Pao",
            group: "hamburguers",
          },
          {
            Titulo: "Descrição",
            nome: "X EGGS Colosso",
            preco: 12,
            id: 20,
            ingredientes: [
              "Pão",
              "cremeespecial",
              "alface",
              "tomate",
              "cebolagratinada",
              "carneartesanal",
              "ovo",
              "bacon",
              "queijo",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/47476/180/Expresso-Delivery_b626c98d1108e969c9ac1a37a087b26d.png",
            type: "Pao",
            group: "hamburguers",
          },
          {
            Titulo: "Descrição",
            nome: "X EGGS Bacon Colosso",
            preco: 14,
            id: 21,
            ingredientes: [
              "Pão",
              "cremeespecial",
              "alface",
              "tomate",
              "cebolagratinada",
              "carneartesanal",
              "ovo",
              "queijo",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/47476/180/Expresso-Delivery_b626c98d1108e969c9ac1a37a087b26d.png",
            type: "Pao",
            group: "hamburguers",
          },
          {
            Titulo: "Descrição",
            nome: "XZÃO Colosso",
            preco: 15,
            id: 22,
            ingredientes: [
              "Pão",
              "cremeespecial",
              "salada",
              "carneartesanal",
              "ovo",
              "queijocheddar",
              "presunto",
              "bacon",
              "calabresa",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/47476/180/Expresso-Delivery_b626c98d1108e969c9ac1a37a087b26d.png",
            type: "Pao",
            group: "hamburguers",
          },
          {
            Titulo: "Descrição",
            nome: "XZÃO Colosso Duplo",
            preco: 17,
            id: 23,
            ingredientes: [
              "Pão",
              "cremeespecial",
              "salada",
              "cebolagratinada",
              "2carnes",
              "queijocheddar",
              "ovo",
              "bacon",
            ],
            imagem:
              "https://static.expressodelivery.com.br/imagens/produtos/47476/180/Expresso-Delivery_b626c98d1108e969c9ac1a37a087b26d.png",
            type: "Pao",
            group: "hamburguers",
          },
        ],
        bebidas: [
          {
            Titulo: "Descrição",
            nome: "Coca-Cola",
            preco: 17,
            id: 24,
            ingredientes: ["1L"],
            imagem:
              "https://cocacolafans.weebly.com/uploads/5/0/2/2/50226787/451295889.jpg?167",
            type: "NULL",
            group: "bebidas",
          },
          {
            Titulo: "Descrição",
            nome: "Coca-Cola",
            preco: 17,
            id: 25,
            ingredientes: ["1L"],
            imagem:
              "https://cocacolafans.weebly.com/uploads/5/0/2/2/50226787/451295889.jpg?168",
            type: "NULL",
            group: "bebidas",
          },
          {
            Titulo: "Descrição",
            nome: "Coca-Cola",
            preco: 17,
            id: 26,
            ingredientes: ["1L"],
            imagem:
              "https://cocacolafans.weebly.com/uploads/5/0/2/2/50226787/451295889.jpg?169",
            type: "NULL",
            group: "bebidas",
          },
          {
            Titulo: "Descrição",
            nome: "Coca-Cola",
            preco: 17,
            id: 27,
            ingredientes: ["1L"],
            imagem:
              "https://cocacolafans.weebly.com/uploads/5/0/2/2/50226787/451295889.jpg?170",
            type: "NULL",
            group: "bebidas",
          },
        ],
      };

      state.isEmpty = !!state.items.length;
    },
  },
  gettets: {},
};
