## 📄 README do Projeto: Gestão Inteligente de Transporte Corporativo

Olá\! Este é o repositório do projeto de **Gestão Inteligente de Transporte Corporativo**.

Esta plataforma visa otimizar a logística de transporte de funcionários, visitantes e cargas leves de empresas, utilizando tecnologia para reduzir custos, tempo de espera e emissões, garantindo uma experiência de mobilidade mais eficiente e sustentável.

-----

## 🚀 Funcionalidades Principais

Nossa solução é dividida em módulos principais para uma gestão 360° do transporte:

### 1\. Otimização de Rotas e Agendamento

  * **Agendamento Inteligente:** Permite que funcionários e gestores solicitem viagens ou agendem rotas recorrentes através de um aplicativo ou interface web.
  * **Algoritmo de Roteamento Dinâmico:** Utiliza dados em tempo real (trânsito, clima e demanda) para consolidar viagens e criar as rotas mais eficientes, minimizando o tempo ocioso e o consumo de combustível.
  * **Pooling Inteligente (Carona Corporativa):** Sugere a união de passageiros com rotas e horários compatíveis para maximizar a ocupação dos veículos.

### 2\. Monitoramento e Segurança

  * **Rastreamento em Tempo Real (GPS):** Permite o monitoramento contínuo da localização dos veículos e do *status* da viagem.
  * **Geofencing e Alertas:** Envia notificações automáticas para motoristas e gestores em caso de desvios de rota ou chegada/partida de pontos predefinidos.
  * **Avaliação de Desempenho do Motorista:** Monitora e pontua padrões de direção (velocidade, frenagem, aceleração) para promover a segurança e a economia.



-----

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:
- HTML 
- CSS
- JAVASCRIPT 

-----

## ⚙️ Configuração e Instalação

Siga os passos abaixo para rodar o projeto localmente:



### 1\. Clonar o Repositório

```bash
git clone https://www.youtube.com/shorts/3mMG25WHLkU
cd nome-do-projeto
```

### 2\. Configurar o Backend

1.  Navegue até a pasta do backend: `cd backend/`
2.  Instale as dependências: `npm install` (ou `pip install -r requirements.txt`)
3.  Crie um arquivo `.env` e adicione suas variáveis de ambiente:
    ```
    PORT=3000
    DATABASE_URL="sua_string_de_conexao_com_o_banco"
    MAPS_API_KEY="SUA_CHAVE_API_GOOGLE_OU_OUTRA"
    JWT_SECRET="chave_secreta_para_tokens"
    ```
4.  Execute as migrações do banco de dados (se aplicável).
5.  Inicie o servidor: `npm start`

### 3\. Configurar o Frontend

1.  Navegue até a pasta do frontend: `cd ../frontend/`
2.  Instale as dependências: `npm install`
3.  Inicie a aplicação: `npm run dev`

O aplicativo estará acessível em `http://localhost:[porta_frontend]`.

-----

## 🤝 Contribuição

Contribuições são bem-vindas\! Se você encontrou um bug ou tem uma sugestão de melhoria:

1.  Crie um *fork* (ramificação) do projeto.
2.  Crie uma *branch* para sua funcionalidade: `git checkout -b feature/MinhaNovaFuncionalidade`
3.  Faça o *commit* das suas mudanças: `git commit -m 'feat: Adiciona funcionalidade XYZ'`
4.  Envie para o *branch* original: `git push origin feature/MinhaNovaFuncionalidade`
5.  Abra um **Pull Request**.

-----

## 📝 Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.
