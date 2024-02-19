"use client";
import React, { useEffect, useState } from "react";
interface Product {
  id: number;
  image: any;
  stock: number;
  price: number;
  title: string;
  body: string;
  rating: number;
}
function ProductList(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const SearchFilter = (event: any) => {
    setSearch(event.target.value);
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="">
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

export default ProductList;
