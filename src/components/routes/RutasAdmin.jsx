import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../views/Admin';
import AgregarProducto from '../views/producto/AgregarProducto';
import EditarProducto from '../views/producto/EditarProducto';
import Error404 from '../views/Error404'

const RutasAdmin = () => {
    return (
        <>
        <Routes>
        <Route exact path="/" element={<Admin/>}/>
        <Route exact path="/agregar" element={<AgregarProducto/>}/>
        <Route exact path="/editar/:id" element={<EditarProducto/>}/>
        <Route exact path="*" element={<Error404></Error404>}/>
        </Routes>
        </>
    );
};

export default RutasAdmin;