import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  // Fetch coins
  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
    //   console.log(response)
      .then((data) => {
        setCoins(data.data);
        setFilteredCoins(data.data); 
      })
      .catch((error) => console.error("Error fetching coin list:", error));
  }, []);

  //search
  const handleSearch = (searchTerm) => {
    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCoins(filtered);
  };

  return (
    <div className="container mt-5">
      {/* Pass handleSearch to navbar */}
      <Navbar onSearch={handleSearch} />
      <h1 className="text-center mb-4">All Cyptro List</h1>
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>
                <Link to={`/details/${coin.id}`}>
                  <Button className="btn btn-success">Details</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;



