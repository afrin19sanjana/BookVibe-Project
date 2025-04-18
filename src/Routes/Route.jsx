import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from '../pages/Root/Root';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDeatils/BookDetails';
import About from '../pages/About/About';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import BookPages from '../pages/BookPages/BookPages';


export const router = createBrowserRouter([
    {
      path: "/",
      Component : Root,
      errorElement :<Error></Error>,
      children : [
        {
            index : true,
            loader: ()=>fetch('../bookList.json'),
            path: '/',
            Component : Home
        },
        {
            path:'/about',
            Component : About
        },
        {
          path:'/listedBooks',
          loader: ()=>fetch('../bookList.json'),
          Component : ListedBooks 
        },
        {
          path: '/BookDetails/:id',
          loader: ()=>fetch('../bookList.json'),
          Component : BookDetails
        },
        {
          path:'/bookPages',
          Component : BookPages
        }


      ]
    },
  ]);