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

## Iniciativa de Código Livre da Comunidade CPT

[CodigoPraTodos.com](https://codigopratodos.com) é uma comunidade para o aprendizado e troca de experiências de programação para todos os níveis! A ideia é 100% Gratuita e tem o objetivo de ensinar programação na Prática! Temos um curso de Introdução a Web pra quem nunca viu nada e também projetos-desafios para botar em prática a sua tecnologia favorita. Aprenda com projetos reais, participando e colaborando com nossas iniciativas open source também, assim como este projeto!
