💼 Vendedor de Currículo — Seu Emprego Começa Aqui
Projeto acadêmico da disciplina Análise e Projeto de Sistemas, com o objetivo de ajudar candidatos a melhorarem seus currículos e se prepararem para entrevistas de emprego, usando o poder da Inteligência Artificial.

🧠 O Que é o Vendedor de Currículo?
Um sistema simples e inteligente que utiliza modelos de linguagem (LLM) para:

✍️ Analisar Currículos: Fornece feedback claro e direto sobre como melhorar seu currículo.

🎙️ Simular Entrevistas: Gera perguntas e respostas simulando uma entrevista de verdade com base no seu perfil profissional.

Ideal para quem está entrando no mercado de trabalho ou quer se destacar em vagas da área de tecnologia.

🚀 Funcionalidades
✅ Interface intuitiva via Web
✅ Geração automática de sugestões para currículos
✅ Entrevistas simuladas com perguntas desafiadoras e respostas exemplo
✅ Foco inicial em áreas de tecnologia (adaptável para outras áreas)
✅ Comunicação com LLMs via API segura

🛠️ Tecnologias Utilizadas
Frontend: HTML, CSS (moderno e responsivo), JavaScript puro

Backend: Node.js (Express) ou Python (Flask)

IA: OpenAI GPT (via API)

Outros: dotenv (variáveis de ambiente seguras), Fetch API (comunicação cliente-servidor)

🧪 Como Usar Localmente
1. Clone o repositório:
bash
Copiar
Editar
git clone https://github.com/seu-usuario/vendedor-curriculo.git
cd vendedor-curriculo
2. Crie um arquivo .env e adicione sua chave da OpenAI:
env
Copiar
Editar
OPENAI_API_KEY=sua-chave-aqui
3. Instale as dependências e inicie o servidor:
Se for Node.js:

bash
Copiar
Editar
npm install
node index.js
Se for Python:

bash
Copiar
Editar
pip install flask openai python-dotenv
python app.py
📬 Endpoints da API
Método	Rota	Função
POST	/analisar-curriculo	Retorna melhorias no currículo
POST	/simular-entrevista	Gera perguntas e respostas de entrevista

Exemplo de requisição:

json
Copiar
Editar
{
  "tipo": "curriculo",
  "textoUsuario": "Sou estudante de ADS com foco em backend..."
}
🧾 Exemplo de Resposta da Análise de Currículo
text
Copiar
Editar
✅ Destaque projetos com resultados mensuráveis (ex: aumento de 20% na performance)
✅ Use palavras-chave da área como: Node.js, MySQL, RESTful API
✅ Adicione seu GitHub ou portfólio
🤖 Sobre o LLM
O modelo da OpenAI foi configurado para:

Detectar lacunas em currículos com base em boas práticas de RH

Simular entrevistas realistas por área de atuação

Gerar respostas coerentes e profissionais

👨‍💻 Desenvolvido por
Luiza e Equipe ADS 2025
Disciplina: Análise e Projeto de Sistemas
Professor: [Nome do Professor]

⚠️ Aviso
Este é um projeto com fins educacionais. O uso da API da OpenAI pode estar sujeito a limitações gratuitas ou cobrança, conforme plano do usuário.

