import { memo } from "preact/compat";
import NAVBARJSON from "../../Configs/JSON/Navbar.json";

const SolidPrinciple4 = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{NAVBARJSON[4]}</h2>
      <div className="flex flex-col gap-3">
        <p>
          The <strong>Interface Segregation Principle (ISP)</strong> is one of the SOLID principles in software design. It states that a client should not be forced to implement interfaces it does not use.
        </p>
        <p>
          In simple terms, this principle suggests that smaller, focused interfaces are better than large, monolithic ones. A component should only consume the functions that are relevant to its behavior, avoiding unnecessary dependencies.
        </p>
        <h3 className="font-semibold">Examples:</h3>
        <p>
          <strong>Example 1 - ISP (Followed):</strong>
          <br />
          Consider a scenario where a `Worker` component requires two different functions: `work` and `eat`. The ISP is followed by creating smaller functions that are specific to the behavior they represent, allowing components to use only what they need.
        </p>
        <pre className="p-2 rounded">
          {`const Workable = {\n`}
          {`  work: () => {\n`}
          {`    /* Implement work behavior */\n`}
          {`  }\n`}
          {`};\n\n`}
          {`const Eatable = {\n`}
          {`  eat: () => {\n`}
          {`    /* Implement eat behavior */\n`}
          {`  }\n`}
          {`};\n\n`}
          {`const Worker = () => {\n`}
          {`  // Use the work and eat functions\n`}
          {`  Workable.work();\n`}
          {`  Eatable.eat();\n`}
          {`  // ... other worker behaviors\n`}
          {`};\n`}
        </pre>
        <p>
          <strong>Example 2 - Violation of ISP:</strong>
          <br />
          In this example, a single large object `WorkerBehaviors` contains functions for both work and eat behaviors. When a component doesn't need both behaviors, consuming this object forces it to have unnecessary dependencies.
        </p>
        <pre className="p-2 rounded">
          {`const WorkerBehaviors = {\n`}
          {`  work: () => {\n`}
          {`    /* Implement work behavior */\n`}
          {`  },\n`}
          {`  eat: () => {\n`}
          {`    /* Implement eat behavior */\n`}
          {`  }\n`}
          {`};\n\n`}
          {`const Worker = () => {\n`}
          {`  // Use the work and eat functions\n`}
          {`  WorkerBehaviors.work();\n`}
          {`  WorkerBehaviors.eat();\n`}
          {`  // ... other worker behaviors\n`}
          {`};\n\n`}
          {`const Robot = () => {\n`}
          {`  // Use the work function only\n`}
          {`  WorkerBehaviors.work();\n`}
          {`  // No need for eat, but still has the dependency\n`}
          {`};\n`}
        </pre>
      </div>
    </>
  );
};

export default memo(SolidPrinciple4);
