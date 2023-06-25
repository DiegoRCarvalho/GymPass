# Gympass

Aplicativo que permite pessoas fazerem check-in em acadêmias cadastradas no aplicativo.

## Instalação

- clonar o repositório;
- criar o arquivo <span style="color:#3fabb5">**.env**</span>, baseado no <span style="color:#3fabb5">**.env.example**</span>;
- rodar o comando ```npm i```;
- rodar o comando ```docker compose up -d``` para subir o banco. E caso queira pará-lo utilize ```docker compose stop```.
- rodar o comando ```npx prisma migrate dev```


## Scripts

- Rodar o servidor de desenvolvimento.
```bash
npm run start:dev
```
-  Transpilar o código Typscript.
```bash
npm run build
```

-  Rodar o servidor de produção.
```bash
npm run start
```
## Prisma

- Instalar as dependências de desenvolvimento
```bash
npm i prisma@4.10.1 -D  
```
- Instalar o plugin do Prisma no vscode: https://marketplace.visualstudio.com/items?itemName=Prisma.prisma
- Inserir a seguinte configuração no arquivo de preferrências do Vscode.
```json
"[prisma]": {
"editor.formatOnSave": true
},
```
- Rodar o comando abaixo para criar o arquivo de esquemas do Prisma.
```bash
npx prisma init
```
- Caso ainda não existam, criar os modelos, exemplo:
```typescript
model User {
  id    String @id @default(uuid())
  name  String
  email String @unique

  @@map("users")
}
```
- Rodar o comando abaixo para que o ORM crie a tipagem e os métodos para as tabelas informadas no esquema.
```bash
npx prisma generate
```
- Instale o client do Prisma.
```bash
npx @prisma/client
```