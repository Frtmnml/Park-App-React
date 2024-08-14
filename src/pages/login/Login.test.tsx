import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';

describe('Render <Login /> component', () => {
  test('Login elements render', () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});
