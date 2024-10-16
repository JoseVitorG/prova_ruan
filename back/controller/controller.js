import Vaga from "../model/model.js"

const pegar_vagas = async (req, res) => {
    try {
        const data = await Vaga.findAll()
        res.status(200).send(data)
    } catch (e) {
        console.log(e)
        res.status(500).send("nenhum um encontrado")
    }
}

const adicionar_vaga = async (req, res) => {
    try {
        const { titulo, descri, cargo, cidade, salario } = req.body
        const vaga = await Vaga.create({ titulo, descri, cargo, cidade, salario })
        res.status(201).send(vaga)
    } catch(e){
        console.log(e)
        res.status(500).send("erro em adicionar ")
    }
}

const vaga_especifica = async (req, res) => {
    const { id } = req.params 
    try{
        const data = await Vaga.findByPk(id)
        res.status(200).send(data)
    } catch(e) {
        console.log(e)
        res.status(404).send("vaga nao encontrada")
    }
}

const atualizar_vaga = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try{
        const resposta = await Vaga.update(data, {where: {id: id}})
        res.status(200).send(resposta)
    } catch(e) {
        console.log(e)
        res.status(404).send("vaga nao encontrada")
    }
}

const remover_vaga = async (req, res) => {
    const { id } = req.params
    try{
        await Vaga.destroy({where: {id}})
        res.status(200).send("item deletado")
    } catch(e) {
        console.log(e)
        res.status(404).send("vaga nao encontrada")
    }
}

const filtar_cargo = async (req, res) => {
    const { cargo } = req.params
    try{
        const resposta = await Vaga.findOne({where: {cargo: cargo}})
        res.status(200).send(resposta)
    } catch(e) {
        console.log(e)
        res.status(404).send("vaga nao encontrada")
    }
}

const filtar_cidades = async (req, res) => {
    const {cidade} = req.params
    try{
        const resposta = await Vaga.findOne({where: {cidade: cidade}})
        res.status(200).send(resposta)
    } catch (e){
        res.status(404).send("nao encontrado")
    }
}

export {pegar_vagas, adicionar_vaga, vaga_especifica, atualizar_vaga, remover_vaga, filtar_cargo, filtar_cidades}