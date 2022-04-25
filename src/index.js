import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleEntry from './components/ArticleEntry';
import ArticleEdit from './components/ArticleEdit';
import Login from './components/Login';
import Header from './components/Header';
import CreateUser from './components/CreateUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/articles/:articleId"} element={<ArticleEntry />} />
        <Route path={"/articles/edit/:articleId"} element={<ArticleEdit />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/createUser"} element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
