# Template NodeJS com Express e Typescript

## Como rodar o projeto

Você precisa instalar na sua máquina:

-   docker (ou ter um postgres rodando, caso queira rodar um banco de dados)
-   nodejs versão 12.x
-   yarn

Então rode os seguintes comandos:

```
docker-compose up -d   # se vc usa docker pra iniciar o banco
yarn                   # instala pacotes do node
cp .env.example .env   # copia nossas configuracoes de exemplo
yarn dev               # inicia servidor
```
