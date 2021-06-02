## 💻 Projeto

O Festy é uma PoC que foi construída para a Matéria de Programação para Dispositivos Móveis, do curso de Sistemas de informação, do Centro Universitário do Distrito Federal - UDF.

O Festy foi inspirado no projeto Happy da Rocketseat. 

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)

## 🔖 Layout

Nos links abaixo você encontra o layout do projeto web e também do mobile. Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

[Mobile] - https://www.figma.com/file/7shWO0XvVathDUj0ZPiMsI/Happy-Mobile-2.0-(Copy)?node-id=48520%3A359

##  Configurando nossa aplicação


Configurações globais:
```bash
    #Yarn install
    npm install -g yarn

    #Instalando as dependências
    yarn
    yarn install
```
Configurações no app:

    src/services/api.ts

    Editar a baseURL da API de acordo com o ambiente.

    Utilizar o endereço ip local afim de evitar problemas.

    Caso utilize um emulador android para executar o aplicativo, com o emulador rodando ,execute o seguinte comando:
    adb reverse tcp:3333 tcp:3333


Configurações no servidor:
    src/views/images_view.ts    
    alterar  a url para o ip local

## 🎲 Rodando nossa aplicação

```bash
    #Servidor
    yarn dev
```

```bash
    #App
    yarn start
```

---

Done with ❤️ by Pedro Henrique Cardoso 👋🏽!
