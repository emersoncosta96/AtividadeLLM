const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { consultarGemini } = require("./services/geminiService");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Rota principal: /assistente-vendas
app.post("/assistente-vendas", async (req, res) => {
    const { textoUsuario, tipo } = req.body;

    let prompt;

    if (tipo === "abordagem") {
        prompt = `Você é um especialista em vendas. Com base nas informações abaixo, gere um exemplo de abordagem inicial de venda direta ao cliente, de forma natural, empática e persuasiva. Fale como um vendedor experiente falaria com um cliente no WhatsApp ou presencialmente. Evite linguagem robótica ou artificial. \n\nContexto da venda:\n${textoUsuario}`;
    } else if (tipo === "argumento") {
        prompt = `Você é um especialista em persuasão e técnicas de vendas. Analise o seguinte argumento de venda e sugira como ele pode ser melhorado, tornando-o mais convincente, direto e emocionalmente impactante para o cliente.\n\nArgumento:\n${textoUsuario}`;
    } else if (tipo === "simulacao") {
        prompt = `Você é um cliente simulado. Vou te enviar o texto de um vendedor tentando me vender algo. Sua função é simular objeções realistas e perguntas típicas que um cliente poderia fazer com base na mensagem abaixo. Depois disso, responda como o vendedor pode superar essas objeções com naturalidade e estratégia.\n\nMensagem do vendedor:\n${textoUsuario}`;
    } else {
        return res.status(400).json({ erro: "Tipo inválido. Use 'abordagem', 'argumento' ou 'simulacao'." });
    }

    try {
        const resposta = await consultarGemini(prompt);
        console.log("Resposta do Gemini:", resposta);
        res.json({ resposta });
    } catch (error) {
        console.error("Erro ao consultar Gemini:", error.response?.data || error.message);
        res.status(500).json({ resposta: "Erro ao consultar Gemini." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
