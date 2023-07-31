import React from 'react';
import './Tiers.css';

const Tiers = () => {
  return (
    <div className="tiers-container">
      <h2 className="tiers-title">Our Pricing Tiers</h2>
      <table className="tiers-table">
        <thead>
          <tr>
            <th>Pages</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1–2 pages</td>
            <td>$375</td>
          </tr>
          <tr>
            <td>3–4 pages</td>
            <td>$550</td>
          </tr>
          <tr>
            <td>5 pages</td>
            <td>$725</td>
          </tr>
          <tr>
            <td>Additional pages</td>
            <td>$200 each</td>
          </tr>
        </tbody>
      </table>
      <p className="tiers-note">
        Prices include tax and all incentives described. Custom business cards
        with a QR code for your new portfolio can be included, 500 for an
        additional $75.
      </p>
    </div>
  );
};

export default Tiers;
