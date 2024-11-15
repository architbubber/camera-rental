import React, { useState } from 'react';
import { addProduct } from '../api/productApi';
import { TextField, Button } from '@mui/material';

const ProductForm = () => {
  const [product, setProduct] = useState({
    productName: '',
    description: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(product);
    alert('Product added successfully!');
    setProduct({ productName: '', description: '', quantity: '' });
  };

  return (
    <form className="p-4 bg-gray-100 rounded" onSubmit={handleSubmit}>
      <TextField
        label="Product Name"
        name="productName"
        value={product.productName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={product.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Quantity"
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
        type="number"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit" className="mt-4">
        Add Product
      </Button>
    </form>
  );
};

export default ProductForm;
