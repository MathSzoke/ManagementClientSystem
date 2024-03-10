# Teste de Programação Desenvolvedor Facilita Jurídico

Neste sistema, é possível registrar novos clientes, filtrar esses clientes com base nas informações de cadastro, apresentar as melhores rotas da empresa até o cliente.

## Requisitos

#### Parte 1

Na plataforma criada deve ser possível:
- Listar os seus clientes e filtrar com base nas informações cadastradas
- Cadastrar clientes novos

#### Parte 2

Suponha que, além de cadastrar e visualizar clientes, a empresa deseja otimizar as rotas de atendimento para maximizar a eficiência na visitação dos clientes. Considere um mapa bidimensional representando a localização dos clientes, onde cada ponto cartesiano possui um cliente. Cada cliente cadastrado possui uma coordenada X e uma coordenada Y nesse mapa.

O objetivo é calcular a rota partindo da empresa (0,0) e que passe pela localização de todos os clientes cadastrados no banco de dados e retorne à empresa no final. A rota deve ser calculada para ter a menor distância possível.

O algoritmo para calcular essa rota deve estar disponibilizado via rota da api para ser chamado pelo front quando necessário.

Implemente um botão na tela de clientes que, ao ser clicado, abre uma modal e mostra a ordem de visitação dos clientes na rota calculada. A visualização pode ser a mais simples possível mostrando uma lista dos clientes na ordem que devem ser visitados do primeiro ao último cliente da rota.

Ao desenvolver essa segunda parte, altere a rota de cadastro e visualização para que seja possível cadastrar e visualizar as coordenadas X e Y dos clientes da empresa.

### Para clonar o repositório, utilize este comando:
        git clone https://github.com/MathSzoke/ManagementClientSystem.git
---

## Pacotes Instalados para o Sistema de Gerenciamento de Clientes

Para instalar todos os pacotes necessários, utilize o seguinte comando:

    npm i
---

## Padrão de Design do Projeto
O padrão de design utilizado no projeto é "Package by Feature".

## Para inicializar o projeto frontend e backend, deve-se utilizar o seguinte comando:

    yarn start / npm start
---

Para atualizar o banco de dados, aplicando alterações do Migrations, utilize este comando:

    npx sequelize-cli db:migrate
---

Para atualizar o banco de dados, removendo as alterações do Migrations, utilize este comando:

    npx sequelize-cli db:migrate:undo
---

Para gerar uma migração e um modelo, utilize o seguinte comando:

    npx sequelize-cli model:generate --name ModelName --attributes column:string,column:string
---

## No frontend, temos os seguintes comandos:

Para gerar um componente em ReactJS, utilize o seguinte comando:

    cd /frontend/src/
    npm run generate:component NameComponent
---
