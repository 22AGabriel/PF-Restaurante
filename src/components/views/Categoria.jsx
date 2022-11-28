import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { consultarProducto } from '../helpers/queriesProducto';
import CardProducto from './CardProducto';

const Categoria = ({carrito, setCarrito, usuarioLogueado}) => {
    const { categoria } = useParams();
    const [productos, setProductos] = useState([])

    useEffect(() => {
        consultarProducto().then((respuesta) => {
            let productosCategoria = respuesta.filter((item) => item.categoria === categoria)
        setProductos(productosCategoria)
        })
    }, [])

    return (
        <Container className='my-5 bajarFooter'>
            <div>
                <h1 className='display-4 text-center mb-5'>{categoria}</h1>
            </div>
            <Row>
                {
                    productos.map((producto) => <CardProducto key={producto._id} producto={producto} carrito={carrito} setCarrito={setCarrito} usuarioLogueado={usuarioLogueado}></CardProducto>)
                }
            </Row>
        </Container>
    );
};

export default Categoria;