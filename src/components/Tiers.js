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
            <th>ShopPay Price</th>
            <th>Development Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1–2 pages</td>
            <td>$225</td>
            <td>$20.31/mo.</td>
            <td>3 Days</td>
          </tr>
          <tr>
            <td>3–4 pages</td>
            <td>$325</td>
            <td>$29.33/mo.</td>
            <td>7 Days</td>
          </tr>
          <tr>
            <td>5 pages</td>
            <td>$425</td>
            <td>$38.36/mo.</td>
            <td>14 Days</td>
          </tr>
          <tr>
            <td>Additional pages</td>
            <td>$100 each</td>
            <td>+~$7/mo.</td>
            <td>+2 Days</td>
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
