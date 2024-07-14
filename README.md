# React Paramify

React Paramify is a package written with TypeScript for React.js, for managing modals and dialogs and ... via URL parameters.

This package is currently using [Material UI components](https://mui.com/) for displaying data **_( that's just for now )_**.

React Paramify is great choice for PWA applications where you have to deal with **device back buttons !**

React Paramify simply manages the opened UI components ( modals, alerts , ... ) when user press/click the device/browser back button so **they will NOT redirect to previous URL unwanted !** instead, only the last opened component would be closed.

## Installation

If you are using npm :

```bash
npm install react-paramify
```

using yarn:

```bash
yarn add react-paramify
```

## Usage

Using react-paramify package is pretty simple !

All you have to do is to wrap the ParamifyWrapper component around your application at root of the project.

### Initialization

in root file of your project :

```typescript
import { ParamifyWrapper } from 'react-paramify';

/**
 * The root component of the application.
 */

const root = createRoot(document.getElementById('root'));

root.render(<ParamifyWrapper>{/* Your Application Code */}</ParamifyWrapper>);
```

And that's it ! react-paramify is now listening for you to trigger UI components by the hooks that will be introduced later in this documentation.

### ParamifyWrapper

The main component that should be wrapped around your application.

ParamifyWrapper props interface :

- **children** : Your application code and components.
- **fallback?** : Fallback component which will be rendered for lazy components loading. _( default : MUI linear loading at top of the page )_

### Modals

[MUI Dialog](https://mui.com/material-ui/react-dialog) component is used as modal component, you can open modal at anywhere on your app via `usePushModal()` hook :

```typescript
import { usePushModal } from 'react-paramify';

function SomeRandomComponent() {
  const pushModal = usePushModal();

  const onNewModal = () => {
    pushModal({ key: 'some-random-key', body: () => <SomeRandomModal /> });
  };

  return <button onClick={onNewModal}> Click </button>;
}
```

After using this hook, the object ( which is `Modal interface`) you provided for `pushModal` function will be added to the modal list array and getting rendered immediately on the page.

Usually you don't need to close modals manually, react-paramify takes the control for that but for special cases, you can close the last opened modal via `usePopModal()` hook ( pop out of array ) :

```typescript
import { usePopModal } from 'react-paramify';

function SomeRandomComponent() {
  const popModal = usePopModal();

  const onCloseModal = () => {
    popModal();
  };

  return <button onClick={onCloseModal}> Click </button>;
}
```

Alternatively you can close all modals at once with `usePopAllModals()` hook :

```typescript
import { usePopAllModals } from 'react-paramify';

const popAllModals = usePopAllModals();
popAllModals();
```

Here is the last hook for modals : the `useModal()` hook.

this hook returns following fields :

- **items** : they array of modal items that are currently available and open in react-paramify, every time you use any hook related to modals ( the introduced hooks ), this property gets changed.
- **pushModal**: returns `usePushModal()`
- **popModal** : returns `usePopModal()`
- **popAllModals** : returns `usePopAllModals()`

```typescript
import { useModal } from 'react-paramify';

const {
  items, // array of Modal interface
  pushModal, // function
  popModal, // function
  popAllModals, // function
} = useModal();
```

### Alert

[MUI Dialog](https://mui.com/material-ui/react-dialog) component is used as alert component, you can open alert at anywhere on your app via `usePushAlert()` hook :

```typescript
import { usePushAlert } from 'react-paramify';

function SomeRandomComponent() {
  const pushAlert = usePushAlert();

  const onNewAlert = () => {
    pushAlert({ key: 'some-random-key', body: <SomeRandomAlert /> });
  };

  return <button onClick={onNewAlert}> Click </button>;
}
```

After using this hook, the object ( which is `Alert interface`) you provided for `pushAlert` function will be added to the alert list array and getting rendered immediately on the page.

Usually you don't need to close alerts manually, react-paramify takes the control for that but for special cases, you can close the last opened alert via `usePopAlert()` hook ( pop out of array ) :

```typescript
import { usePopAlert } from 'react-paramify';

function SomeRandomComponent() {
  const popAlert = usePopAlert();

  const onCloseAlert = () => {
    popAlert();
  };

  return <button onClick={onCloseAlert}> Click </button>;
}
```

Alternatively you can close all alerts at once with `usePopAllAlerts()` hook :

```typescript
import { usePopAllAlerts } from 'react-paramify';

const popAllAlerts = usePopAllAlerts();
popAllAlert();
```

Here is the last hook for alerts : the `useAlert()` hook.

this hook returns following fields :

- **items** : they array of alert items that are currently available and open in react-paramify, every time you use any hook related to alerts ( the introduced hooks ), this property gets changed.
- **pushAlert**: returns `usePushAlert()`
- **popAlert** : returns `usePopAlert()`
- **popAllAlerts** : returns `usePopAllAlerts()`

```typescript
import { useAlert } from 'react-paramify';

const {
  items, // array of Modal interface
  pushAlert, // function
  popAlert, // function
  popAllAlerts, // function
} = useAlert();
```

### Interfaces

**Modal** :

```typescript
import { ReactNode } from 'react';
import { DialogProps } from '@mui/material';

interface Modal {
  key: string;
  body: (bodyProps: BodyProps) => ReactNode;
  title?: string;
  closeIcon?: ReactNode;
  maxWidth?: DialogProps['maxWidth'];
  scroll?: DialogProps['scroll'];
  fullScreen?: boolean;
}
```

**Alert** :

```typescript
import { ReactNode } from 'react';
import { DialogProps } from '@mui/material';

interface Alert {
  key: string;
  body: ReactNode;
  title?: string;
  onCancel?: () => void;
  cancelText?: string;
  cancelColor?: ButtonProps['color'];
  onOk?: () => void;
  okText?: string;
  okColor?: ButtonProps['color'];
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
