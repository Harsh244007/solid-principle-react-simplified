import { memo } from "preact/compat";
import NAVBARJSON from "../../Configs/JSON/Navbar.json";

const SolidPrinciple1 = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{NAVBARJSON[2]}</h2>
      <div className="mb-4">
        <p>
          The <strong>Single Responsibility Principle (SRP)</strong> is one of
          the SOLID principles of software design. It states that a component or
          module should have only one reason to change, meaning it should have a
          single responsibility.
        </p>
        <p>
          In the context of JavaScript React functional components, this
          principle suggests that each component should focus on a specific task
          or functionality. This not only makes the component easier to
          understand and maintain but also encourages better code organization
          and reusability.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Example:</h3>
        <p>
          Consider a React functional component that displays a user's profile
          information and handles API calls to fetch the user data. Following
          SRP, we can break this component into two separate components:
        </p>
        <ol className="list-disc pl-6">
          <li>
            <strong>ProfileInfo:</strong> Responsible for rendering the user's
            profile information. This component only focuses on the visual
            representation of the profile data.
          </li>
          <li>
            <strong>ProfileDataFetcher:</strong> Responsible for making API
            calls to fetch the user data. It does not handle the rendering;
            instead, it returns the fetched data to be displayed by the
            ProfileInfo component.
          </li>
        </ol>
        <p>
          By separating these responsibilities, we achieve better modularity,
          reusability, and easier maintenance. Each component can evolve
          independently, and changes in one component are less likely to affect
          the other.
        </p>
      </div>
      <div className="mt-4 p-4 rounded">
        <p className="mb-2">
          <strong>ProfileInfo Component:</strong>
        </p>
        <pre className="p-2 rounded">
          {`import React from 'react';\n\nconst ProfileInfo = ({ user }) => {\n  return (\n    <div>\n      <h3>{user.name}</h3>\n      <p>Email: {user.email}</p>\n      {/* More profile information */}\n    </div>\n  );\n};\n\nexport default ProfileInfo;`}
        </pre>
        <p className="mt-4 mb-2">
          <strong>ProfileDataFetcher Component:</strong>
        </p>
        <pre className="p-2 rounded">
          {`import React, { useState, useEffect } from 'react';\nimport ProfileInfo from './ProfileInfo';\n\nconst ProfileDataFetcher = ({ userId }) => {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    // API call to fetch user data by userId\n    // Set user data using setUser\n  }, [userId]);\n\n  return <ProfileInfo user={user} />;\n};\n\nexport default ProfileDataFetcher;`}
        </pre>
      </div>
    </>
  );
};

export default memo(SolidPrinciple1);
