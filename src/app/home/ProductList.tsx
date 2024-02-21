"use client";
import React, { useState, useEffect } from 'react';
interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  rating: number;
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    stock: 0,
    rating: 0,
  });

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const addProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const data = await response.json();
      console.log(data);
      fetchProducts();
      setNewProduct({
        title: '',
        price: 0,
        stock: 0,
        rating: 0,
      });
    } catch (error) {
      console.error('Error:', error);

    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const SearchFilter = (event: any) => {
    setSearch(event.target.value);
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div>
        <h2>Add Product</h2>
        <form onSubmit={addProduct}>
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            placeholder="Product Name"
          />
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            placeholder="Stock"
          />
          <input
            type="number"
            name="rating"
            value={newProduct.rating}
            onChange={handleInputChange}
            placeholder="Rating"
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Product List</h2>
        <input
          type="text"
          value={search}
          onChange={SearchFilter}
          placeholder="Search your product"
          className="w-[30%] mb-5 border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
        />
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              
              <th className="py-2 px-4 border-b">Stock</th>

              <th className="py-2 px-4 border-b">Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">
                  <h2>{item.title}</h2>
                </td>
                <td className="py-2 px-4 border-b">$ {item.price}</td>
                <td className="py-2 px-4 border-b">{item.stock}</td>
                <td className="py-2 px-4 border-b">{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
