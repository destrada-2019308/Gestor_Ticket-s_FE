import React from 'react'
import { AuthPage } from './Pages/AuthPage/AuthPage.jsx'
import { NotFound } from './Pages/NotFound.jsx'
import { HomePageAdmin } from './Pages/Admin/HomePageAdmin.jsx'
import { HomePageClient } from './Pages/Client/HomePageClient.jsx'
import { HomePageGerente } from './Pages/Gerente/HomePageGerente.jsx'
import { ContentRole } from './Pages/AuthPage/ContentRole.jsx'

export const routes = [
    //Paginas principales
    {path: '/', element: <AuthPage/>},
    {path: '/home/*', element: <ContentRole/>},
    {path: '*', element: <NotFound/>},

    {path: '/home/macro/admin', element: <HomePageAdmin/>},
    {path: '/home/macro/client', element: <HomePageClient/>},
    {path: '/home/macro/gerente', element: <HomePageGerente/>},
]