# TESTE TÉCNICO FLEXGE

## SOBRE O PROJETO

CRUD de contratos e usuários utilizando express, jwt e mongodb.

## TECNOLOGIAS UTILIZADAS

Typescript, NodeJs, Express, JWT, bcrypt e mongoose.

## COMO EXECUTAR O PROJETO

### Clonar o repositório

-   Crie uma pasta para o projeto
-   Abra o terminal e digite o seguinte comando:
    "git clone https://github.com/luishenriqs/flexge-back.git"

### Executar as instalações dos pacotes no terminal

-   No terminal execute o seguinte comando: "yarn"

### Abra o projeto com um editor de código (sugestão: VSCode)

-   Na raiz do projeto crie um arquivo .env e adicione as seguintes variáveis de ambiente:

    MONGO_USER= {Credencial de usuário do mongodb}

    MONGO_PASSWORD= {Senha de acesso a conta do mongodb}

    SECRET_KEY= {chave aleatória para codificar a password do usuário da aplicação}

### Executar o script para inicializar o servidor

-   No terminal rode o comando: "yarn dev"

## USUÁRIOS

**Para cadastro de um novo usuário execute o seguinte endpoint**

curl --request POST \
 --url http://localhost:3333/accounts/create \
 --header 'Content-Type: application/json' \
 --data '{
"userName": "Jonh Doe",
"email": "jonhdoe@email.com",
"password": "123456"
}'

**Para logar um usuário ao sistema execute o seguinte endpoint**

curl --request POST \
 --url http://localhost:3333/accounts/login \
 --header 'Content-Type: application/json' \
 --data '{
"email": "jonhdoe@email.com",
"password": "123456"
}'

**Para listar todos os usuários execute o seguinte endpoint**

curl --request GET \
 --url http://localhost:3333/accounts/list \
 --header 'Authorization: Bearer token'

## CONTRATOS

**Para cadastro de um novo contrato no sistema execute o seguinte endpoint**

curl --request POST \
 --url http://localhost:3333/contracts/create \
 --header 'Authorization: Bearer token' \
 --data '{
"country": "USA",
"state": "CA",
"city": "Los Angeles",
"documentNumber": 1900,
"socialReason": "Jonh Doe Company",
"address": "W 9th st",
"district": "Long Beach",
"number": 34,
"zipCode": " 28930-000",
"email": "contact@jonhdoe.com.br",
"phone": 2226224876,
"startsIn": "",
"endsIn": "",
"dueDay": "",
"company": "Jonh Doe Company"
}'

**Para atualizar o cadastro de um contrato no sistema execute o seguinte endpoint**

curl --request PATCH \
 --url http://localhost:3333/contracts/update \
 --header 'Authorization: Bearer token' \
 --data '{
"id": "6285157664b133e95c6fdea7",
"country": "",
"state": "CA",
"city": "",
"documentNumber": "",
"socialReason": "",
"address": "",
"district": "",
"number": "",
"zipCode": "",
"email": "",
"phone": "",
"company": ""
}'

**Para listar todos os contratos do sistema execute o seguinte endpoint**

curl --request GET \
 --url 'http://localhost:3333/contracts/list?page=' \
 --header 'Authorization: Bearer token'

**Para encontrar um contrato específico no sistema execute o seguinte endpoint**

curl --request GET \
 --url 'http://localhost:3333/contracts/find?state=S%C3%A3o%20Paulo' \
 --header 'Authorization: Bearer token'

**Para deletar um contrato do sistema execute o seguinte endpoint**

curl --request DELETE \
 --url http://localhost:3333/contracts/delete/6286d3222c77b461669b2b29 \
 --header 'Authorization: Bearer token'

# AUTOR

Luís Henrique Pereira

https://www.linkedin.com/in/luis-h-pereira-nodejs-react-native/

lh.p@hotmail.com
