import React from 'react';
import '../styles/receipt.scss';

const Receipt: React.FC = () => {
  return (
    <div className="receipt">
      <img className="watermark" src="https://www.dropbox.com/s/mmf6y9rpibwy9tk/bronyhouse-logo-sm.svg?raw=1" alt="Watermark" />

      <div className="orderNo">
        Order# <span id="OrderNumber">71</span>: <span id="OrderName">Jet Set</span>
      </div>

      <div className="headerSubTitle">
        Thank you for supporting the
      </div>

      <div className="headerTitle">
        Galloping Gallery
      </div>

      <div className="headerSubTitle">
        A division of the BronyHouse
      </div>

      <div id="location">
        BronyCon 2018
      </div>

      <div id="date">
        Saturday, Jun 13 2018 1:05:18
      </div>

      <svg id="barcode"></svg>

      <div className="keepIt">
        Keep your receipt!
      </div>

      <hr />

      {/* Items Purchased */}
      <div className="items">
        <div className="item">
          <div className="itemRow">
            <div className="itemName">Where There's Trouble</div>
            <div className="itemPrice itemTaxable">$2.00</div>
          </div>
          <div className="itemRow">
            <div className="itemColor"></div>
            <div className="itemData1">DNC-P01</div>
            <div className="itemData2">DaniCojo</div>
            <div className="itemData3 itemQuantity">10</div>
          </div>
          <div className="itemRow">
            <div className="itemColor"></div>
            <div className="itemData1">Print</div>
            <div className="itemData2">Reg(WS) 11x17 Bordered</div>
            <div className="itemData3">$20.00</div>
          </div>
        </div>

        <div className="item">
          <div className="itemRow">
            <div className="itemName">Miraculous Ladybug & Cat Noir</div>
            <div className="itemPrice itemTaxable">$1.25</div>
          </div>
          <div className="itemRow">
            <div className="itemColor"></div>
            <div className="itemData1">DNC-P03</div>
            <div className="itemData2">DaniCojo</div>
            <div className="itemData3 itemQuantity">10</div>
          </div>
          <div className="itemRow">
            <div className="itemColor"></div>
            <div className="itemData1">Print</div>
            <div className="itemData2">Reg(WS) 8.5x11 Borderless</div>
            <div className="itemData3">$12.25</div>
          </div>
        </div>
      </div>

      {/* Totals */}
      <hr />
      <div className="flex">
        <div id="qrcode"></div>
        <div className="totals">
          <div className="section">
            <div className="row">
              <div className="col1"></div>
              <div className="col2">Subtotal</div>
              <div className="col3">$61.25</div>
            </div>
            <div className="row">
              <div className="col1">0.00%</div>
              <div className="col2">Subtotal</div>
              <div className="col3">$61.25</div>
            </div>
            <div className="row">
              <div className="col1">2.75%</div>
              <div className="col2">Credit Card Fee</div>
              <div className="col3">$1.68</div>
            </div>
          </div>
          <div className="section">
            <div className="row">
              <div className="col1">Total</div>
              <div className="col2"></div>
              <div className="col3">$62.93</div>
            </div>
          </div>
          <div className="section">
            <div className="row">
              <div className="col1">Tendered</div>
              <div className="col2"></div>
              <div className="col3"></div>
            </div>
            <div className="row">
              <div className="col1">Change</div>
              <div className="col2"></div>
              <div className="col3">$62.93</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="eta">Saturday @ 1:25 PM</div>
        <div className="printType">customer copy</div>
      </div>
    </div>
  );
};

export default Receipt;