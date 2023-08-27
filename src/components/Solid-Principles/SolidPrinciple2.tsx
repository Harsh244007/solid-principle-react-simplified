import { memo } from "preact/compat";
import NAVBARJSON from "../../Configs/JSON/Navbar.json";

const SolidPrinciple2 = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{NAVBARJSON[2]}</h2>
      <div className="flex flex-col gap-3">
        <p>
          The Open/Closed Principle is one of the SOLID principles in software
          design. It states that software entities (functions, modules, etc.)
          should be open for extension but closed for modification.
        </p>
        <p>
          In simple terms, this principle suggests that you should be able to
          extend the behavior of a software component without modifying its
          existing code. This promotes maintainability, reusability, and
          scalability in your codebase.
        </p>
        <h3 className="font-semibold">Examples:</h3>
        <p>
          <strong>Example 1 - Open/Closed:</strong>
          <br />
          Let's consider a discount calculation function for a shopping cart.
          Instead of modifying the existing function to add a new discount type,
          we can create separate functions for each discount type and use them
          dynamically. This adheres to the open/closed principle.
        </p>
        <pre className=" p-2 rounded">
          {`function calculateTotalCost(items, discountStrategy) {\n`}
          {`  let totalCost = 0;\n`}
          {`  const discountAmount = discountStrategy(items);\n`}
          {`  return totalCost - discountAmount;\n`}
          {`}\n\n`}
          {`function percentageDiscountStrategy(items) {\n`}
          {`  /* ... percentage discount logic ... */\n`}
          {`}\n\n`}
          {`function fixedAmountDiscountStrategy(items) {\n`}
          {`  /* ... fixed amount discount logic ... */\n`}
          {`}\n\n`}
          {`// Usage\n`}
          {`const totalCost = calculateTotalCost(items, percentageDiscountStrategy);\n`}
        </pre>
        <p>
          <strong>Example 2 - Violation of Open/Closed:</strong>
          <br />
          If the discount logic was directly embedded in the main calculation
          function, adding a new discount type would require modifying the
          existing function. This would violate the open/closed principle.
        </p>
        <pre className=" p-2 rounded">
          {`function calculateTotalCost(items) {\n`}
          {`  let totalCost = 0;\n`}
          {`  for (const item of items) {\n`}
          {`    // ... calculate cost based on type ... \n`}
          {`  }\n`}
          {`  return totalCost;\n`}
          {`}\n\n`}
          {`// Example: Adding a new discount type\n`}
          {`function calculateTotalCostWithNewDiscount(items) {\n`}
          {`  let totalCost = 0;\n`}
          {`  for (const item of items) {\n`}
          {`    // ... calculate cost based on type ... \n`}
          {`    // ... apply new discount logic ... \n`}
          {`  }\n`}
          {`  return totalCost;\n`}
          {`}\n\n`}
        </pre>
        {/* ... Rest of the content ... */}
      </div>
    </>
  );
};

export default memo(SolidPrinciple2);
