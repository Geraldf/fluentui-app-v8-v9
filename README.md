# Overview

This takes you through the steps of creating a Fluent UI React web application that uses v8 and v9 side-by-side. At the time of this writing, v9 latest is 9.0.0.rc-11.

# Create the v8 application

1. Use the create react app (CRA) template

`yarn create react-app fluentui-app-v8-v9 --template @fluentui/cra-template`

2. Install dependencies and build/run.

`yarn install`

`yarn start`

3. Verify you see the standard spinning react logo with the 'Welcome to your Fluent UI app' message.

# Remove v8 application boilerplate

1. Delete App.css
2. Delete App.test.tsx
3. Update App.tsx to render hello world
4. Delete logo.svg
5. Verify the app still runs with `yarn start`

```tsx
import React from 'react';

export const App: React.FunctionComponent = () => {
  return (
    <div>Hello Fluent UI React v9</div>
  );
};
```

# Add the v9 react-components package

1. Add react-components

`yarn add @fluentui/react-components`

You should now see "@fluentui/react-components": "^9.0.0-rc.11" in the dependencies of package.json.
