import React, { useState, useEffect } from 'react';
import data from './data2'; // Adjust the path if necessary

function PricesEditor() {
  // Initialize state with an empty array
  const [products, setProducts] = useState([]);

  // Fetch the initial data from the data function
  useEffect(() => {
    const fetchData = async () => {
      const initialData = await data(); // Handle asynchronous data if necessary
      setProducts(initialData || []); // Ensure products is an array
    };

    fetchData();
  }, []);

  // Handle price change in the UI
  const handlePriceChange = (id, newPrice) => {
    setProducts(prevProducts =>
      prevProducts.map(item =>
        item.id === id ? { ...item, price: newPrice } : item
      )
    );
  };

  // Save changes to the database
  const saveChanges = async (id, price) => {
    try {
      const response = await fetch(`https://alexchem-server.vercel.app/products/${id}`, {
        method: 'PUT', // Or PATCH depending on your API design
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price }), // Send updated price only
      });
      if (!response.ok) {
        throw new Error('Error updating price');
      }
      alert('Price updated successfully!');
    } catch (error) {
      console.error('Failed to update price', error);
      alert('Failed to update price');
    }
  };

  return (
    <div>
      <h2>Edit Prices</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Current Price</th>
            <th>New Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map(({ id, price, title }) => (
              <tr key={id}>
                <td>{title}</td>
                <td>${price}</td>
                <td>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => handlePriceChange(id, parseFloat(e.target.value))}
                  />
                </td>
                <td>
                  <button onClick={() => saveChanges(id, price)}>Save</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PricesEditor;
