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
import CreateArticle from './components/CreateArticle';
import ReviewEdit from './components/ReviewEdit';
import ReviewEntry from './components/ReviewEntry';

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
        <Route path={"/createArticle"} element={<CreateArticle />} />
        <Route path={"/articles/:articleId/reviews/:reviewId"} element={<ReviewEntry />} />
        <Route path={"/articles/:articleId/edit/:reviewId"} element={<ReviewEdit />} />
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
