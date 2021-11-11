import {useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;

    try {
      const getProducts = async () => {
        const res = await axios.get(
          cat
            ? `https://fakestoreapi.com/products/category/${cat}`
            : `https://fakestoreapi.com/products/category/women's clothing`,
          signal
        );

        setProducts(res.data);
      };
      getProducts();
    } catch (err) {
      console.error(err);
    }

    return () => controller.abort();
  }, [cat]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await axios.get(
  //         cat
  //           ? `http://localhost:5000/api/products?category=${cat}`
  //           : 'http://localhost:5000/api/products'
  //       );
  //       setProducts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProducts();
  // }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter(item =>
          Object.entries(filters).every(([key, value]) => item[key].includes(value))
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === 'asc') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === 'desc') {
      setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  // useEffect(() => {
  //   if (sort === 'newest') {
  //     setFilteredProducts(prev =>
  //       [...prev].sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
  //     );
  //   } else if (sort === 'asc') {
  //     setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
  //   } else if (sort === 'desc') {
  //     setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
  //   }
  // }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map(item => <ProductItem item={item} key={item.id} />)
        : products.slice(0, 8).map(item => <ProductItem item={item} key={item.id} />)}
    </Container>
  );
};
export default Products;
