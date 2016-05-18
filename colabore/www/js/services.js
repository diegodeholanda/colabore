angular.module('starter.services', [])

.factory('Publicacoes', function() {
  // Pode usar um recurso aqui que retorna uma array JSON

  // Alguns dados de testes falso
  var publicacoes = [{
    id: 0,
    nome: 'Diego Holanda',
    data: "16 de Maio de 2016",
    descricao: 'Sigo para UFPE pela Av. Norte',
    face: 'img/diego.png',
    foto: 'img/photo/fox.jpg',
    comentarios: [],
    quantidadeApoiadores: 0
  }, {
    id: 1,
    nome: 'João Veras',
    data: "15 de Maio de 2016",
    descricao: 'Vou para o Recife Antigo, saindo da Macaxeira',
    face: 'img/joao.png',
    foto: 'img/photo/march.jpg',
    comentarios: [],
    quantidadeApoiadores: 0
  }, {
    id: 2,
    nome: 'Ananda Almeida',
    data: "02 de Maio de 2016",
    descricao: 'Pessoal, vou para o Paiva todos os dias, saindo do Pina! Juro que sou boa motorista!',
    face: 'img/ananda.png',
    foto: 'img/photo/fusca.jpg',
    comentarios: [],
    quantidadeApoiadores: 0
  }, {
    id: 3,
    nome: 'Rafael Barreto',
    data: "01 de Maio de 2016",
    descricao: 'Olhem como meu carro é bom! Vamos comigo para a UFPE, moro na Madalena!',
    face: 'img/rafael.png',
    foto: 'img/photo/focus.jpg',
    comentarios: [],
    quantidadeApoiadores: 0
  }, {
    id: 4,
    nome: 'Wellington Marinho',
    data: '28 de Abril de 2016',
    descricao: 'Vou para POLI/UPE. Moro em Jardim Paulista, quero dividir combustível!',
    face: 'img/wmfo.png',
    foto: 'img/photo/c4.jpg',
    comentarios: [],
    quantidadeApoiadores: 0
  }, {
    id: 5,
    nome: 'Thiago Higino',
    data: "25 de Abril de 2016",
    descricao: 'Meio difícil, mas moro em Dubai, quem quiser carona por aqui estou a disposição.',
    face: 'img/thiago.png',
    foto: 'img/photo/bmw320i.jpg',
    comentarios: [],
    quantidadeApoiadores: 0
  }];

  return {
    all: function() {
      return publicacoes;
    },
    get: function(publicacaoId) {
      for (var i = 0; i < publicacoes.length; i++) {
        if (publicacoes[i].id === parseInt(publicacaoId)) {
          return publicacoes[i];
        }
      }
      return null;
    },
    apoiar: function(publicacaoId){
        publicacoes[publicacaoId].quantidadeApoiadores++;
    }
  };
});
