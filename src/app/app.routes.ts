import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gestion } from './pages/gestion/gestion';
import { Favoritos } from './pages/favoritos/favoritos';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path:"gestion",
        component:Gestion
    },
    {
        path:"favoritos",
        component:Favoritos
    },
    {
        path:"contacto",
        component:Contacto
    }
    
];
