import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../views/Admin';
import AgregarProducto from '../views/producto/AgregarProducto';
import EditarProducto from '../views/producto/EditarProducto';

const RutasAdmin = () => {
    return (
        <>
        <Routes>
        <Route exact path="/" element={<Admin/>}/>
        <Route exact path="/agregar" element={<AgregarProducto/>}/>
        <Route exact path="/editar/:id" element={<EditarProducto/>}/>
        </Routes>
        </>
    );
};

export default RutasAdmin;