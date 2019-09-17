import React from "react";
import PropTypes from "prop-types";
import PricingItem from "./PricingItem";
import styles from "./PricingPlan.module.css";

const PricingPlan = ({ items }) => (
  <ul className={styles.pricingPlan}>
    {items.map(item => (
      <li className={styles.item} key={item.label}>
        <PricingItem
          icon={item.icon}
          label={item.label}
          capacity={item.capacity}
          price={item.price}
          description={item.description}
        />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
      capacity: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

export default PricingPlan;
