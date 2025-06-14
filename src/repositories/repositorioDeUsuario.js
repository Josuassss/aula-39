const { Usuario } = require("../models/Usuario");
const { db } = require("../../prisma/main");

class RepositorioDeUsuario {
  async buscarTodos() {
    return await db.user.findMany();
  }

  async criar(usuario) {
    return await db.user.create();
  }

  async buscarPeloEmail(email) {
    return await db.user.findUnique({
      where: (email)
      });
  }

  async buscarPeloId(id) {
    return await db.user.findUnique({
      where: (id)
      });
  }

  async atualizar(usuarioId, dadosAtualizados) {
    return await db.user.update({
      where: {
        id: usuarioId,
      },
      data: {
        name: "Dados Atualizados",
      },
    })
  }

  async deletarUmUsuario(id) {
    return await db.user.delete({
      where: (id)
      });
  }
}

module.exports = new RepositorioDeUsuario();
