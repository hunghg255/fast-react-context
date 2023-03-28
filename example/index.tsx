import * as React from 'react';
import * as ReactDOM from 'react-dom';

import createFastContext from '../src/index';

import './index.css';


const { Provider, useStore } = createFastContext({
  first: '',
  last: '',
});

const { Provider: ProviderTitle, useStore: useStoreTitle } = createFastContext({
  title: 'App Fast Context',
});

const TextInput = ({ value }: { value: 'first' | 'last' }) => {
  const [fieldValue, setStore] = useStore((store) => store[value]);
  return (
    <div className='field'>
      {value}:{' '}
      <input
        value={fieldValue}
        onChange={(e) => setStore({ [value]: e.target.value })}
      />
    </div>
  );
};

const Display = ({ value }: { value: 'first' | 'last' }) => {
  const [fieldValue] = useStore((store) => store[value]);

  return (
    <div className='value'>
      {value}: {fieldValue}
    </div>
  );
};

const FormContainer = () => {
  return (
    <div className='container'>
      <h5>FormContainer</h5>
      <TextInput value='first' />
      <TextInput value='last' />
    </div>
  );
};

const DisplayContainer = () => {
  return (
    <div className='container'>
      <h5>DisplayContainer</h5>
      <Display value='first' />
      <Display value='last' />
    </div>
  );
};

const ContentContainer = () => {
  return (
    <div className='container'>
      <h5>ContentContainer</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
};

const Title = () => {
  const [title] = useStoreTitle((store) => store.title);

  return <h5>{title}</h5>;
};

function App() {
  return (
    <Provider>
      <div className='container'>
        <ProviderTitle>
          <Title />
        </ProviderTitle>
        <ContentContainer />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
