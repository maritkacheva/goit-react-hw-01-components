import React from "react";
import PropTypes from "prop-types";
import styles from "./Stats.module.css";
import getRandomColor from "./ransomColor";

const Stats = ({ stats, title }) => (
  <section>
    {title ? (
      <section className={styles.statsSection}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.statList}>
          {stats.map(stat => (
            <li
              className={styles.item}
              key={stat.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    ) : (
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    )}
  </section>
);

Stats.defaultProps = {
  title: ""
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default Stats;
