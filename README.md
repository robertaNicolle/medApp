```markdown
# medApp - Node.js CRUD API

O **medApp** é uma aplicação backend desenvolvida com **Node.js** e **Express** para gerenciar informações sobre médicos, pacientes, prescrições e agendamentos. A API segue o padrão **REST** e oferece suporte a operações **CRUD** utilizando JSON. O app também pode ser facilmente testado com o **Postman**.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework minimalista para construir APIs REST.
- **Body-parser**: Middleware para analisar os corpos das requisições HTTP.
- **Postman**: Ferramenta para testar e documentar APIs.
- **MongoDB** (ou outro banco de dados): Para persistir as informações (ajustes podem ser feitos dependendo do banco utilizado).

## Funcionalidades

- CRUD (Criar, Ler, Atualizar, Deletar) para médicos, pacientes, prescrições e agendamentos.
- API RESTful com respostas em JSON.
- Testes de API com **Postman**.
- Acessos controlados via rotas organizadas.

## Estrutura de Pastas

A estrutura do projeto segue uma arquitetura modularizada, organizada da seguinte forma:

```
/medApp
│
├── /database              # Conexão e configuração do banco de dados
│   └── database.js        # Arquivo de configuração do banco
│
├── /models                # Definição das estruturas de dados (Modelos)
│   ├── /doctors           # Modelos para médicos
│   ├── /patients          # Modelos para pacientes
│   ├── /prescriptions     # Modelos para prescrições
│   └── /appointments      # Modelos para agendamentos
│
├── /node_modules          # Dependências do Node.js
│
├── /repositories          # Lógica de acesso e manipulação de dados no banco
│   ├── /doctorsRepository # Repositório de médicos
│   ├── /patientsRepository# Repositório de pacientes
│   ├── /prescriptionsRepository# Repositório de prescrições
│   └── /appointmentsRepository# Repositório de agendamentos
│
├── /routes                # Definição das rotas (endpoints da API)
│   ├── /doctorsRoutes     # Rotas para médicos
│   ├── /patientsRoutes    # Rotas para pacientes
│   ├── /prescriptionsRoutes# Rotas para prescrições
│   └── /appointmentsRoutes# Rotas para agendamentos
│
├── /services              # Implementação da lógica de negócio
│   ├── /doctorsService    # Lógica de médicos
│   ├── /patientsService   # Lógica de pacientes
│   ├── /prescriptionsService# Lógica de prescrições
│   └── /appointmentsService# Lógica de agendamentos
│
├── /package.json          # Configurações do projeto e dependências
└── /package-lock.json     # Detalhes exatos das dependências
```

## Como Rodar o Projeto

### 1. Clonar o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seuusuario/medApp.git
```

### 2. Instalar Dependências

Navegue até a pasta do projeto e instale as dependências:

```bash
cd medApp
npm install
```

### 3. Configurar Banco de Dados

Certifique-se de ter um banco de dados MongoDB (ou outro, dependendo da configuração do projeto). Configure a conexão no arquivo `/database/database.js`.

### 4. Iniciar o Servidor

Depois de configurar o banco de dados, inicie o servidor com o comando:

```bash
npm start
```

O servidor estará disponível na URL: `http://localhost:3000`.

## Endpoints da API

A API disponibiliza os seguintes endpoints para as operações CRUD:

### Médicos (`/doctors`)

- **GET /doctors**: Retorna todos os médicos.
- **GET /doctors/:id**: Retorna um médico específico pelo ID.
- **POST /doctors**: Cria um novo médico.
- **PUT /doctors/:id**: Atualiza os dados de um médico.
- **DELETE /doctors/:id**: Deleta um médico específico.

### Pacientes (`/patients`)

- **GET /patients**: Retorna todos os pacientes.
- **GET /patients/:id**: Retorna um paciente específico pelo ID.
- **POST /patients**: Cria um novo paciente.
- **PUT /patients/:id**: Atualiza os dados de um paciente.
- **DELETE /patients/:id**: Deleta um paciente específico.

### Prescrições (`/prescriptions`)

- **GET /prescriptions**: Retorna todas as prescrições.
- **GET /prescriptions/:id**: Retorna uma prescrição específica pelo ID.
- **POST /prescriptions**: Cria uma nova prescrição.
- **PUT /prescriptions/:id**: Atualiza uma prescrição.
- **DELETE /prescriptions/:id**: Deleta uma prescrição.

### Agendamentos (`/appointments`)

- **GET /appointments**: Retorna todos os agendamentos.
- **GET /appointments/:id**: Retorna um agendamento específico pelo ID.
- **POST /appointments**: Cria um novo agendamento.
- **PUT /appointments/:id**: Atualiza um agendamento.
- **DELETE /appointments/:id**: Deleta um agendamento.

## Exemplo de Requisições com Postman

A API pode ser testada facilmente com **Postman**. Abaixo estão exemplos de como fazer requisições:

### Criar um novo médico (POST)

```json
{
  "name": "Dr. João Silva",
  "specialty": "Cardiologia",
  "email": "joao.silva@example.com",
  "phone": "(11) 99999-9999"
}
```

- **Método**: `POST`
- **Endpoint**: `/doctors`
- **Corpo**: JSON com os dados do médico.

### Atualizar um paciente (PUT)

```json
{
  "name": "Maria Souza",
  "age": 34,
  "address": "Rua X, 123",
  "phone": "(11) 98888-7777"
}
```

- **Método**: `PUT`
- **Endpoint**: `/patients/:id`
- **Corpo**: JSON com os novos dados do paciente.

### Deletar um agendamento (DELETE)

- **Método**: `DELETE`
- **Endpoint**: `/appointments/:id`

## Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo para contribuir com o projeto:

1. Faça um fork deste repositório.
2. Crie uma nova branch para sua funcionalidade ou correção.
3. Faça as alterações necessárias.
4. Envie um pull request com uma descrição clara sobre o que foi alterado.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato comigo:

- GitHub: [seuusuario](https://github.com/seuusuario)
- E-mail: seuemail@example.com

---

Obrigado por usar o **medApp**! 🎉
```

### Melhorias na versão aprimorada:

- **Clareza e organização**: Estrutura mais limpa e explicativa.
- **Exemplos práticos de uso**: Inclui exemplos de requisições com o Postman.
- **Instruções de contribuição**: Detalhei como contribuir com o projeto, o que facilita para outros colaboradores.
- **Licença e Contato**: Inclusão de uma seção de licença e formas de contato.
