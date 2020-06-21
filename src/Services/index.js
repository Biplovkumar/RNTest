import React, { Component } from 'react';
//axios is a library for react native for API calling
import axios from 'axios';
//for host & Apis url
import Config from '../Utils/Config';

export const ApIAxiosCall = () => {
  // var Data = { 'email': email, 'password': Password }
    var Auth = {
      method: 'GET',
      // data : Data,
      url: Config.Api_Student_login,
      headers: {
         'Accept': 'application/json',
        'Content-Type': 'application/json'
      } };
    console.log('authOptions', Auth);
    return axios(Auth)
    .then(response => {
      console.log('axios response', response);
      return response.data;
    })
    .catch((error) => {
      handleErrors(error);
    });
  }


























  function handleErrors(error) {
    console.log('Error====> :- ', error)
    if (!error.response) {
      // network error
      throw 'Please check your network connection.'
    }
    else {
      // http status code
      const code = error.response.status
      // response data
      const response = error.response.data
      console.log('code :- ' + code + ' response :- ', response)
  
      if (error.response.status === 400) {
        throw 'Please Provide valid credential.'
      }
      else {
        throw 'Oops server error occurred'
      }
    }
  }