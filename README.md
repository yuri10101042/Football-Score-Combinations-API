# Football Score Combinations API

API GraphQL para calcular combinações possíveis de pontuações de jogos de futebol americano.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/yuri10101042/Football-Score-Combinations-API.git
    cd football-score-combinations-api
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    npm start
    ```

4. Acesse a API GraphQL em `http://localhost:8080/graphql`.

## Testes

Para rodar os testes, execute:
```bash
npm test
```

## Usando Docker

1. Instalação do Docker:

- Linux: [Instruções de Instalação do Docker para Linux](https://docs.docker.com/engine/install/)
- macOS: [Instruções de Instalação do Docker para macOS](https://docs.docker.com/desktop/install/)
- Windows: [Instruções de Instalação do Docker para Windows](https://docs.docker.com/desktop/install/windows-install/)

2. Construa a imagem Docker:
    ```bash
    docker build -t football-score-combinations-api .
    ```

3. Rode o contêiner Docker:
    ```bash
    docker run -p 8080:8080 football-score-combinations-api
    ```

4. Acesse a API GraphQL em http://localhost:8080/graphql.

### Instruções de Execução

1. **Executar o Projeto Localmente**:
    - Certifique-se de ter o Node.js instalado.
    - Siga as instruções no arquivo `README.md` para clonar o repositório, instalar dependências e iniciar o servidor.

2. **Executar os Testes**:
    - Utilize o comando `npm test` para executar os testes.

3. **Executar o Projeto Usando Docker**:
    - Siga as instruções no arquivo `README.md` para construir a imagem Docker e executar o contêiner.

Este conjunto de arquivos e instruções permitirá que o projeto seja configurado e executado de maneira eficiente, seja localmente ou em um ambiente Docker.