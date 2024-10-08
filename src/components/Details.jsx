import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Details = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);
  const navigate = useNavigate();


  //one coin details
  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${coinId}`)
      .then((response) => response.json())
    //   console.log(response)
      .then((data) => {
        setCoin(data.data);
      })
      .catch((error) => console.error("Error fetching coin details:", error));
  }, [coinId]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Cryptocurrency Details</h2>
      {coin ? (
        <>
          <p><strong>Name:</strong> {coin.name}</p>
          <p><strong>Symbol:</strong> {coin.symbol}</p>
          <p><strong>Rank:</strong> {coin.rank}</p>
          <p><strong>Price (USD):</strong> ${parseFloat(coin.priceUsd).toFixed(2)}</p>
          <p><strong>Market Cap (USD):</strong> ${parseFloat(coin.marketCapUsd).toFixed(2)}</p>
          <p><strong>Supply:</strong> {parseFloat(coin.supply).toFixed(2)}</p>
          <p><strong>Volume (24Hr):</strong> ${parseFloat(coin.volumeUsd24Hr).toFixed(2)}</p>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Back
          </Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
