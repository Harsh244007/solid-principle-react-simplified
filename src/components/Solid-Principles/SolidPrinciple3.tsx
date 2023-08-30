import { memo } from "preact/compat";
import NAVBARJSON from "../../Configs/JSON/Navbar.json";

const SolidPrinciple3 = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{NAVBARJSON[3]}</h2>
      <div className="flex flex-col gap-3">
        <p>
          The <strong>Liskov Substitution Principle (LSP)</strong> is one of the SOLID principles in software design. It states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
        </p>
        <p>
          In other words, if a component or module is a subclass of another, it should be able to replace instances of the superclass without introducing unexpected behavior or violating the contract of the superclass.
        </p>
        <h3 className="font-semibold">Examples:</h3>
        <p>
          <strong>Example 1 - Liskov Substitution:</strong>
          <br />
          Let's consider a scenario with a `Button` component that has a common behavior shared across different button types. Following LSP, we can create subclasses of `Button` (like `PrimaryButton` and `SecondaryButton`) that extend the behavior without changing the contract.
        </p>
        <pre className="p-2 rounded">
          {`import React from 'react';\n\n`}
          {`const Button = ({ text }) => {\n`}
          {`  return <button>{text}</button>;\n`}
          {`};\n\n`}
          {`const PrimaryButton = ({ text }) => {\n`}
          {`  return <Button text={text} className="primary-button" />;\n`}
          {`};\n\n`}
          {`const SecondaryButton = ({ text }) => {\n`}
          {`  return <Button text={text} className="secondary-button" />;\n`}
          {`};\n\n`}
          {`// Usage\n`}
          {`const App = () => {\n`}
          {`  return (\n`}
          {`    <div>\n`}
          {`      <PrimaryButton text="Primary" />\n`}
          {`      <SecondaryButton text="Secondary" />\n`}
          {`    </div>\n`}
          {`  );\n`}
          {`};\n\n`}
          {`export default App;`}
        </pre>
        <p>
          <strong>Example 2 - Violation of Liskov Substitution:</strong>
          <br />
          In this example, let's consider an `Animal` superclass with subclasses `Bird` and `Fish`. If the `Bird` subclass overrides a method `swim`, it could violate LSP if the overridden behavior is not appropriate for all animals.
        </p>
        <pre className="p-2 rounded">
          {`import React from 'react';\n\n`}
          {`const Animal = () => {\n`}
          {`  // Common animal behavior\n`}
          {`};\n\n`}
          {`const Bird = () => {\n`}
          {`  // Bird-specific behavior\n`}
          {`  const swim = () => {\n`}
          {`    // Swim behavior for a bird (violates LSP)\n`}
          {`  };\n`}
          {`};\n\n`}
          {`const Fish = () => {\n`}
          {`  // Fish-specific behavior\n`}
          {`  const swim = () => {\n`}
          {`    // Swim behavior for a fish\n`}
          {`  };\n`}
          {`};\n\n`}
          {`// Usage\n`}
          {`const App = () => {\n`}
          {`  const animals = [<Bird />, <Fish />];\n`}
          {`  return (\n`}
          {`    <div>\n`}
          {`      {animals.map((animal, index) => (\n`}
          {`        <div key={index}>{animal}</div>\n`}
          {`      ))}\n`}
          {`    </div>\n`}
          {`  );\n`}
          {`};\n\n`}
          {`export default App;`}
        </pre>
      </div>
    </>
  );
};

export default memo(SolidPrinciple3);
