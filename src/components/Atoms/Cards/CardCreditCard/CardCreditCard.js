import React from "react";
import cardSvg from "assets/images/credit-card.png";
import cardIconSvg from "assets/images/card-icon.png";
import { Input } from "antd";
import ButtonSubmit from "components/Atoms/Buttons/ButtonSubmit";

const CardCreditCard = ({ title }) => {
  return (
    <div className="CardCreditCard">
      <h3 className="h4">Credit card details</h3>
      <div className="form">
        <div class="form-control">
          <input
            type="email"
            name="email"
            class="form-input"
            placeholder="none"
          />
          <label for="email" class="form-label">
            Email address
          </label>
        </div>
      </div>

      <div className="column">
        <div className="flex-btw">
          <div class="form form-control">
            <input
              type="email"
              name="email"
              class="form-input"
              placeholder="none"
            />
            <label for="email" class="form-label">
              Card number
            </label>
          </div>
          <img src={cardSvg} className="cardSvg" alt="cardSvg" />
        </div>
        <div className="row">
          <div className="row-input">
            <p>Expiration date</p>
            <Input placeholder="MM/YY" />
          </div>
          <div className="row-input">
            <p className="">Security code</p>
            <div className="row-f">
              <Input placeholder="CVC" />
              <img src={cardIconSvg} className="icon" alt="card" />
            </div>
          </div>
        </div>
      </div>
      <div class="form form-control form-last">
        <input type="name" name="name" class="form-input" placeholder="none" />
        <label for="email" class="form-label">
          Name on card
        </label>
      </div>
      <ButtonSubmit title="Pay $20" />
    </div>
  );
};
export default CardCreditCard;
