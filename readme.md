### Rodar o repositório:
`git clone`

### Instalar as dependências:
`npm install`

### Variáveis de ambiente:
`Copiar o arquivo .env_exemplo, renomear para .env e preencher as variáveis de ambiente com seus dados.`

### Para rodar o repositório em ambiente local
`npm run start:dev`

## Trabalhando com migrations:
### Criar uma migration
1. Opção nº 1: `sequelize migration:generate --name nome_da_migracao`
2. Opção nº 2: `npx sequelize-cli migration:generate --name criar_tabela_alunos`
### Rodar uma migration. Opções:
1. Opção nº 1: `sequelize db:migrate`
2. Opção nº 2: `npx sequelize db:migrate`

### Reverter a última migration:
1. Opção nº 1: `sequelize-cli db:migrate:undo`
2. Opção nº 2: `npx sequelize-cli db:migrate:undo`

### Reverter todas as migrations:
1. Opção nº 1: `sequelize-cli db:migrate:undo:all`
2. Opção nº 2: `npx sequelize-cli db:migrate:undo:all`

## Bibliotecas utilizadas:
### instalar o sequelize
`npm install sequelize` 
### instalar o CLI do sequelize
`npm install -g sequelize-cli`
### instalar o dotenv - variáveis de ambiente
`npm install dotenv`
### instalar o cors
`npm install cors`
### instalar o driver do PostgreSQL
`npm install pg`