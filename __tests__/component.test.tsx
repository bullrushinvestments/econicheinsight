import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({} as any);
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByRole('status')).toBeInTheDocument();
  });

  test('displays content after successful fetch', async () => {
    const mockContent = { title: 'Test Title' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockContent);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/test title/i));
  });

  test('handles error when fetching data fails', async () => {
    const errorMessage = 'Failed to fetch';
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(errorMessage));
  });

  test('allows user interaction with content', async () => {
    const mockContent = { title: 'Test Title' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockContent);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('heading'));
    fireEvent.click(screen.getByText(/test title/i));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('ensures accessibility features are properly implemented', async () => {
    const mockContent = { title: 'Test Title' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockContent);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('heading'));
    expect(screen.getByText(/test title/i)).toHaveAttribute('aria-label', 'content-title');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({} as any);
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByRole('status')).toBeInTheDocument();
  });

  test('displays content after successful fetch', async () => {
    const mockContent = { title: 'Test Title' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockContent);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/test title/i));
  });

  test('handles error when fetching data fails', async () => {
    const errorMessage = 'Failed to fetch';
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(errorMessage));
  });

  test('allows user interaction with content', async () => {
    const mockContent = { title: 'Test Title' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockContent);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('heading'));
    fireEvent.click(screen.getByText(/test title/i));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('ensures accessibility features are properly implemented', async () => {
    const mockContent = { title: 'Test Title' };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockContent);
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByRole('heading'));
    expect(screen.getByText(/test title/i)).toHaveAttribute('aria-label', 'content-title');
  });
});