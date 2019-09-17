import React from "react";
import user from "../assets/profile";
import Profile from "./Profile/Profile";
import Stats from "./Stats/Stats";
import stats from "../assets/stats";
import pricingPlanItems from "../assets/pricing-plan.json";
import PricingPlan from "./PricingPlan/PricingPlan";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../assets/transactions.json";

const App = () => (
  <>
    <Profile user={user} />
    <Stats stats={stats} title="Upload stats" />
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
