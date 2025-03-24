import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, addProduct, deleteProduct, updateProduct } from './redux/slice';

const App = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.product);

  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', category: '', stock: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleAddOrUpdate = () => {
    if (editingProduct) {
      dispatch(updateProduct({ id: editingProduct.id, product: newProduct }));
      setEditingProduct(null);
    } else {
      dispatch(addProduct(newProduct));
    }
    setNewProduct({ name: '', description: '', price: '', category: '', stock: '' });
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (product) => {
    setNewProduct(product);
    setEditingProduct(product);
  };

  const handleView = (product) => {
    alert(`Product Details:\nName: ${product.name}\nDescription: ${product.description}\nPrice: ${product.price}\nCategory: ${product.category}\nStock: ${product.stock}`);
  };

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  return (
    <div>
      <h1>Product Management</h1>
      <input
        type='text'
        placeholder='Search by name'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
      </button>

      <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
      <input
        type='text'
        placeholder='Name'
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type='text'
        placeholder='Description'
        value={newProduct.description}
        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
      />
      <input
        type='number'
        placeholder='Price'
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        type='text'
        placeholder='Category'
        value={newProduct.category}
        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
      />
      <input
        type='number'
        placeholder='Stock'
        value={newProduct.stock}
        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
      />
      <button onClick={handleAddOrUpdate}>{editingProduct ? 'Update Product' : 'Add Product'}</button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.description} - ${product.price} - {product.category} - {product.stock} in stock
              <button onClick={() => handleView(product)}>View</button>
              <button onClick={() => handleEdit(product)}>Edit</button>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
};

export default App;