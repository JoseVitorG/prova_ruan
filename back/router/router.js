import express from "express";
import { pegar_vagas, adicionar_vaga, vaga_especifica, atualizar_vaga, remover_vaga, filtar_cargo, filtar_cidades } from "../controller/controller.js"
const router = express.Router()

router.get("/vagas", pegar_vagas)
router.post("/vagas", adicionar_vaga)
router.get("/vagas/:id", vaga_especifica)
router.put("/vagas/:id", atualizar_vaga)
router.delete("/vagas/:id", remover_vaga)
router.get("/cargo/:cargo", filtar_cargo)
router.get("/localizacao/:cidade", filtar_cidades)

export default router