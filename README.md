![letmeask](https://github.com/bernardobfg/manipulae/blob/main/src/assets/logo.svg)
#
### <a href="https://bernardobfg-music.vercel.app/">Link para o deploy </a>

## 👨‍💻 Instruções para uso
### Clone o repositório

```
git clone https://github.com/bernardobfg/manipulae.git
```

### Instale as dependências
```
yarn
```

### Inicie o servidor local
```
yarn dev
```
Acesse no seu navegador pela url http://localhost:3000

Caso tenha algum problema para fazer as requisições ao executar o projeto localmente, 
acese https://cors-anywhere.herokuapp.com/corsdemo e clique na opção
```Request temporary access to the demo server```

## 🔨 Funcionalidades
- O usuário pode ver as principais tendências da atualidade
- O usuário pode pesquisar por suas músicas e artistas preferidos
- O usuário pode adicionar as músicas á uma lista de favoritos, e caso ele saia da aplicação, ela ficará salva quando ele voltar
- As músicas listadas apresentam um link para serem ouvidas no Deezer

## 🚀 Tecnologias utilizadas
- React
- Vite
- Axios
- Redux
- Styled-Components

## 📝 Nota 
Como a API sugerida pelo Deezer não estava disponível devido a política de CORS, foi optado por utilizar a seguinte API

```https://cors-anywhere.herokuapp.com/api.deezer.com```

No entanto, ela apresenta algumas falhas, principalmente na hora de buscar as principais músicas e não é possível obter o preview da música através dela

## 💻 Desenvolvido por
<img src="https://github.com/bernardobfg.png" width=80><br><sub>Bernardo Bevilaqua</sub>
