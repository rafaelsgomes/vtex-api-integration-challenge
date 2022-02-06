<h1 align="center"><strong>VTEX API Integration</strong></h1>

## **Sobre**
Integração com a [api](https://developers.vtex.com/vtex-rest-api/reference/getorder) da VTEX.

---

## ☑️ **Features**

* ✅ Deve ser capaz de consumir a api da VTEX e gerar um arquivo .csv com os dados de retorno

---

## 🛠️ **Pre-requisitos**

Antes de começar, você precisará garantir que tenhas as seguintes ferramentas instaladas em sua máquina: [Git](https://git-scm.com), [NodeJS](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) (opcional).

---

## 🗂️ **Baixando o projeto**

<br>

```bash
# Clone este reposotório com o comando
$ git clone https://github.com/rafaelsgomes/vtex-api-integration-challenge.git

# Acesse o diretório do projeto
$ cd vtex-api-integration-challenge

# Instale as dependências com o comando
$ yarn

# Inicie o servidor com o comando
$ yarn dev

# O servidor ficará disponível na porta:3333 acesse: http://localhost:3333
```

---

## 💻 **Utilizando a API**

Ao acessar a rota `http://localhost:3333/` com o método get será realizada a consulta na api `https://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{orderId}` da VTEX.
>Lembre-se de alterar os dados de acesso: ACCOUNTNAME, ENVIRONMENTLINK, ORDERID, APP_TOKEN e APP_KEY no arquivo [index.ts](src/routes/index.ts)

---

## 🚀 **Tecnologias**

<table>
    <tr>
        <td align="center"><a  href="https://nodejs.org/en/">NodeJS</a></td>
        <td align="center"><a href="https://expressjs.com/pt-br/starter/installing.html">Express</a></td>
        <td align="center"><a href="https://www.typescriptlang.org/">TypeScript</a></td>
        <td align="center"><a href="https://axios-http.com/">Axios</a></td>
        <td align="center"><a href="https://www.npmjs.com/package/csv-writer">csv-writer</a></td>
        <td align="center"><a href="https://day.js.org/">dayjs</a></td>
    </tr>
    <tr>
        <td align="center">v14.x*</td>
        <td align="center">4.17.2</td>
        <td align="center">4.5.5</td>
        <td align="center">0.25.0</td>
        <td align="center">1.6.0</td>
        <td align="center">1.10.7</td>
    </tr>
</table>

---
> <p>Made with ❤️ by Rafael Gomes <a href="https://www.linkedin.com/in/rafaelsgomes/">See my LinkedIn</a></p>