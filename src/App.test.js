import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { RecoilRoot } from 'recoil';

test('renders learn react link', () => {
  const { getByText } = render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
