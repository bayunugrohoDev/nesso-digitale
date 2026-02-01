import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';
import { Project } from '@nesso/shared-config';

// Define the mock data using vi.hoisted outside of vi.mock
const mockInitialProjects = vi.hoisted(() => ([
  { title: 'Project Z', client: 'Client C', description: 'Description Z', image: '/img6.png' },
  { title: 'Project A', client: 'Client A', description: 'Description A', image: '/img1.png' },
  { title: 'Project B', client: 'Client B', description: 'Description B', image: '/img2.png' },
] as Project[])); // Cast to Project[] type

// Mock the shared-config module to return our mock projects
vi.mock('@nesso/shared-config', () => ({
  projects: mockInitialProjects,
}));


describe('App Component - Filtering, Sorting, and Deletion', () => {
  it('should display all projects initially', () => {
    render(<App />);

    expect(screen.getByText(/Project Z/i)).toBeInTheDocument();
    expect(screen.getByText(/Project A/i)).toBeInTheDocument();
    expect(screen.getByText(/Project B/i)).toBeInTheDocument();
  });

  it('should filter projects based on search term (title)', () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/Search projects.../i);
    fireEvent.change(searchInput, { target: { value: 'Project A' } });

    expect(screen.getByText(/Project A/i)).toBeInTheDocument();
    expect(screen.queryByText(/Project Z/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Project B/i)).not.toBeInTheDocument();
  });

  it('should filter projects by client name', () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/Search projects.../i);
    fireEvent.change(searchInput, { target: { value: 'Client B' } });

    expect(screen.queryByText(/Project A/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Project B/i)).toBeInTheDocument();
    expect(screen.queryByText(/Project Z/i)).not.toBeInTheDocument();
  });

  it('should sort projects by title in ascending order', async () => {
    render(<App />);

    const titleHeader = screen.getByText('Title');
    fireEvent.click(titleHeader); // Sort ascending

    // Check if the order is 'Project A', 'Project B', 'Project Z'
    const rows = screen.getAllByRole('rowgroup')[1].children; // Get tbody rows
    expect(rows[0]).toHaveTextContent(/Project A/i);
    expect(rows[1]).toHaveTextContent(/Project B/i);
    expect(rows[2]).toHaveTextContent(/Project Z/i);
  });

  it('should sort projects by title in descending order', async () => {
    render(<App />);

    const titleHeader = screen.getByText('Title');
    fireEvent.click(titleHeader); // Sort ascending
    fireEvent.click(titleHeader); // Sort descending

    // Check if the order is 'Project Z', 'Project B', 'Project A'
    const rows = screen.getAllByRole('rowgroup')[1].children; // Get tbody rows
    expect(rows[0]).toHaveTextContent(/Project Z/i);
    expect(rows[1]).toHaveTextContent(/Project B/i);
    expect(rows[2]).toHaveTextContent(/Project A/i);
  });

  it('should remove a project when delete button is clicked', async () => {
    render(<App />);

    // Find the delete button for "Project A" and click it
    const deleteButton = screen.getAllByRole('button', { name: 'Delete' })[0];
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText(/Project A/i)).not.toBeInTheDocument();
    });
    expect(screen.getByText(/Project Z/i)).toBeInTheDocument();
    expect(screen.getByText(/Project B/i)).toBeInTheDocument();
  });

  it('should show "No data to display." when all projects are deleted', async () => {
    render(<App />);

    // Delete all projects
    let deleteButtons = screen.getAllByRole('button', { name: 'Delete' });
    while (deleteButtons.length > 0) {
      fireEvent.click(deleteButtons[0]);
      deleteButtons = screen.queryAllByRole('button', { name: 'Delete' });
    }

    await waitFor(() => {
      expect(screen.getByText(/No data to display./i)).toBeInTheDocument();
    });
  });
});