import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount(){
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBJ90ky4lrMx6qoa-_utj35bKLF9Z2fMKg',
      authDomain: 'manager-5aad9.firebaseapp.com',
      databaseURL: 'https://manager-5aad9.firebaseio.com',
      projectId: 'manager-5aad9',
      storageBucket: '',
      messagingSenderId: '692892230970'
    };
    firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store={createStore(reducers)}>
      <LoginForm/>
      </Provider>
    );
  }
}

export default App;
