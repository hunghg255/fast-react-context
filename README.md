# fast-react-context

## Make to react context faster


[![npm version](https://badge.fury.io/js/fast-react-context.svg)](https://badge.fury.io/js/fast-react-context) [![npm](https://img.shields.io/npm/dw/fast-react-context.svg?logo=npm)](https://www.npmjs.com/package/fast-react-context) [![npm](https://img.shields.io/bundlephobia/minzip/fast-react-context)](https://www.npmjs.com/package/fast-react-context)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

## Installation

[![NPM](https://nodei.co/npm/fast-react-context.png?compact=true)](https://nodei.co/npm/fast-react-context/)

#### To install the latest stable version:

```
npm install --save fast-react-context
```

#### Basic usage:

```tsx
import React, { Component } from 'react';
import createFastContext from 'fast-react-context';

const { Provider, useStore } = createFastContext({
  title: 'App Fast Context',
});

const ChildComponent = () => {
  const [title] = useStoreTitle((store) => store.title);

  return <h5>{title}</h5>;
}

export default const App {

  return <Provider>
        <ChildComponent />
    </Provider>;
}
```
