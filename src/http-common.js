import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://grades-api-schinoff.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});

// fixing heroku create-react-app
