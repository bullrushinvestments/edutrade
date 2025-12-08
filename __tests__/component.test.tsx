import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/loading.../i));
  });

  test('renders error message if fetch fails', async () => {
    (useExternalService as jest.Mock).mockReturnValue({
      status: 'error',
      errorMessage: 'Failed to load data',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/failed to load data/i));
  });

  test('handles user interaction with button click', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success' });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(useExternalService).toHaveBeenCalled();
  });

  test('validates form input on submit', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success' });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.queryByText(/please fill out this field/i)).toBeInTheDocument();
  });

  test('checks accessibility of form elements', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success' });
    render(<CoreFunctionalityComponent />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-label', /input field/i);
    fireEvent.change(input, { target: { value: 'testValue' } });
    expect(screen.getByDisplayValue(/testvalue/i)).toBeVisible();
  });

  test('handles edge case of empty data response', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success', data: [] });
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/no data available/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/loading.../i));
  });

  test('renders error message if fetch fails', async () => {
    (useExternalService as jest.Mock).mockReturnValue({
      status: 'error',
      errorMessage: 'Failed to load data',
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/failed to load data/i));
  });

  test('handles user interaction with button click', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success' });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(useExternalService).toHaveBeenCalled();
  });

  test('validates form input on submit', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success' });
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.queryByText(/please fill out this field/i)).toBeInTheDocument();
  });

  test('checks accessibility of form elements', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success' });
    render(<CoreFunctionalityComponent />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-label', /input field/i);
    fireEvent.change(input, { target: { value: 'testValue' } });
    expect(screen.getByDisplayValue(/testvalue/i)).toBeVisible();
  });

  test('handles edge case of empty data response', () => {
    (useExternalService as jest.Mock).mockReturnValue({ status: 'success', data: [] });
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/no data available/i)).toBeInTheDocument();
  });
});