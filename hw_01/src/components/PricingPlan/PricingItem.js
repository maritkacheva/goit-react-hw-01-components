import React from "react";
import PropTypes from "prop-types";
import styles from "./PricingPlan.module.css";

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.pricingItem}>
    <i className={styles.icon} style={{ backgroundImage: `url(${icon})` }} />
    <h2 className={styles.label}>{label}</h2>
    <p className={styles.capacity}>{capacity}</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>${price}/MO</p>
    <button type="button" className={styles.button}>
      Get Started
    </button>
  </div>
);

PricingItem.defaultProps = {
  icon: "icon ulr"
};

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default PricingItem;
