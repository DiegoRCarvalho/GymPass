# Gympass

Aplicativo que permite pessoas fazerem check-in em acadêmias cadastradas no aplicativo.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter o seu histórico de chck-ins;
- [ ] Deve ser possível o usuário buscar acadêmias próximas;
- [ ] Deve ser possível o usuário buscar acadêmias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma acadêmia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma acadêmia;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com o email duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não tiver perto (100m) da acadêmia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A acadêmia só pode ser cadastrada por administradores;

## RNFs (Requisitos não funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);