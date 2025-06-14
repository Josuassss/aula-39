const servicoDeUsuario = require("../services/servicoDeUsuario");
const { HttpError } = require("../errors/HttpError");

class ControladorDeUsuario {
  async pegarTodos(_req, res) {
    const usuarios = await servicoDeUsuario.buscarTodos();

    res.status(200).json(usuarios);
  }

  pegarUmPeloID(req, res) {
    const id = req.params.id;
    const usuario = servicoDeUsuario.pegarPeloID(id);

    res.status(200).json(usuario);
  }

  async cadastrar(req, res) {
    const { nome, email, cpf, senha } = req.body;
    const resposta = await servicoDeUsuario.cadastrar(nome, email, cpf, senha);

    if (resposta.error) res.status(400).json(resposta.error);

    res.status(201).json(resposta);
  }

  conectar(req, res) {
    const { email, senha } = req.body;
    const resposta = servicoDeUsuario.conectar(email, senha);

    res.status(200).json(resposta);
  }

  async atualizar(req, res) {
    const dados = await req.body;
    const usuarioId = await req.params.id;
    const resposta = await servicoDeUsuario.atualizar(usuarioId, dados);

    res.status(200).json(resposta);
  }

  async deletar(req, res) {
    const id = await req.params.id;
    servicoDeUsuario.deletar(id);

    res
      .status(200)
      .json({ mensagem: `Usuário com ID ${id} deletado com sucesso.` });
  }
}

module.exports = new ControladorDeUsuario();
