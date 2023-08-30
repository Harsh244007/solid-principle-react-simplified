import { memo } from "preact/compat";
import NAVBARJSON from "../../Configs/JSON/Navbar.json";

const SolidPrinciple5 = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{NAVBARJSON[6]}</h2>
      <div className="flex flex-col gap-3">
        <p>
          The <strong>Dependency Inversion Principle (DIP)</strong> is one of the SOLID principles in software design. It states that high-level modules should not depend on low-level modules; both should depend on abstractions. Furthermore, abstractions should not depend on details; details should depend on abstractions.
        </p>
        <p>
          In simpler terms, this principle suggests that components should depend on abstractions (interfaces or abstract classes) rather than concrete implementations. This promotes decoupling, flexibility, and easier testing.
        </p>
        <h3 className="font-semibold">Examples:</h3>
        <p>
          <strong>Example 1 - DIP (Followed):</strong>
          <br />
          In this example, a `NotificationService` interface is defined. The high-level `OrderProcessor` component depends on this abstraction, and the actual implementation is injected at runtime. This allows easy swapping of implementations without affecting the high-level module.
        </p>
        <pre className="p-2 rounded">
          {`// Abstraction\n`}
          {`interface NotificationService {\n`}
          {`  sendNotification(message: string): void;\n`}
          {`}\n\n`}
          {`// Concrete Implementation\n`}
          {`class EmailNotificationService implements NotificationService {\n`}
          {`  sendNotification(message: string) {\n`}
          {`    /* Implement email notification */\n`}
          {`  }\n`}
          {`}\n\n`}
          {`// High-level module\n`}
          {`const OrderProcessor = ({ notificationService }) => {\n`}
          {`  // ... process order ...\n`}
          {`  notificationService.sendNotification("Order processed successfully!");\n`}
          {`};\n`}
        </pre>
        <p>
          <strong>Example 2 - Violation of DIP:</strong>
          <br />
          In this example, the high-level `OrderProcessor` directly depends on the concrete implementation `EmailNotificationService`. This tight coupling makes it difficult to change the implementation or extend functionality without modifying the high-level module.
        </p>
        <pre className="p-2 rounded">
          {`// High-level module with direct dependency\n`}
          {`const OrderProcessor = () => {\n`}
          {`  const notificationService = new EmailNotificationService();\n`}
          {`  // ... process order ...\n`}
          {`  notificationService.sendNotification("Order processed successfully!");\n`}
          {`};\n\n`}
          {`// Concrete Implementation\n`}
          {`class EmailNotificationService {\n`}
          {`  sendNotification(message: string) {\n`}
          {`    /* Implement email notification */\n`}
          {`  }\n`}
          {`}\n`}
        </pre>
      </div>
    </>
  );
};

export default memo(SolidPrinciple5);
