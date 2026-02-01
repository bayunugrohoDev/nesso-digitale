import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "./App";

describe("Project Management Dashboard", () => {
  beforeEach(() => {
    // Reset any state if needed
  });

  // ========================================
  // TEST 1: Render Initial Projects
  // ========================================
  it("displays initial projects on load", () => {
    render(<App />);

    // Check if project titles are visible
    expect(screen.getByText(/AC Milan App/i)).toBeInTheDocument();
    expect(screen.getByText(/Delivery App/i)).toBeInTheDocument();
    expect(screen.getByText(/Max Blog Website/i)).toBeInTheDocument();
  });

  // ========================================
  // TEST 2: Search Functionality
  // ========================================
  it("filters projects when searching", () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/Search projects.../i);

    // Search for "Milan"
    fireEvent.change(searchInput, { target: { value: "Milan" } });

    // Should show AC Milan
    expect(screen.getByText(/AC Milan App/i)).toBeInTheDocument();

    // Should hide others
    expect(screen.queryByText(/Delivery App/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Max Blog Website/i)).not.toBeInTheDocument();
  });

  it("shows all projects when search is cleared", () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/Search projects.../i);

    // Search first
    fireEvent.change(searchInput, { target: { value: "Milan" } });
    expect(screen.queryByText(/Delivery App/i)).not.toBeInTheDocument();

    // Clear search
    fireEvent.change(searchInput, { target: { value: "" } });

    // All projects visible again
    expect(screen.getByText(/AC Milan App/i)).toBeInTheDocument();
    expect(screen.getByText(/Delivery App/i)).toBeInTheDocument();
    expect(screen.getByText(/Max Blog Website/i)).toBeInTheDocument();
  });

  // ========================================
  // TEST 3: Delete Functionality
  // ========================================
  it("deletes a project when delete button is clicked", async () => {
    render(<App />);

    // Find all delete buttons
    const deleteButtons = screen.getAllByText(/Delete/i);

    // Click first delete button
    fireEvent.click(deleteButtons[0]);

    // Wait for project to be removed
    await waitFor(() => {
      expect(screen.queryByText(/AC Milan App/i)).not.toBeInTheDocument();
    });

    // Other projects still visible
    expect(screen.getByText(/Delivery App/i)).toBeInTheDocument();
    expect(screen.getByText(/Max Blog Website/i)).toBeInTheDocument();
  });

  // ========================================
  // TEST 4: Add Project Modal
  // ========================================
  it('opens modal when "Add Project" button is clicked', () => {
    render(<App />);

    // Get the outline button (first one in the array)
    const addButtons = screen.getAllByText(/Add Project/i);
    const headerAddButton = addButtons[0]; // The outline button in header

    fireEvent.click(headerAddButton);

    // Modal should appear with title
    expect(screen.getAllByText(/Add Project/i).length).toBeGreaterThan(1);

    // Form fields should be visible
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Client/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
  });

  // ========================================
  // TEST 5: Add New Project
  // ========================================
  it("adds a new project when form is submitted", async () => {
    render(<App />);

    // Open modal - get outline button
    const addButtons = screen.getAllByText(/Add Project/i);
    fireEvent.click(addButtons[0]);

    // Fill form
    const titleInput = screen.getByLabelText(/Title/i);
    const clientInput = screen.getByLabelText(/Client/i);
    const descriptionInput = screen.getByLabelText(/Description/i);

    fireEvent.change(titleInput, { target: { value: "New Test Project" } });
    fireEvent.change(clientInput, { target: { value: "Test Client" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });

    const submitButton = screen.getByTestId("submit-project");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/New Test Project/i)).toBeInTheDocument();
    });
  });

  // ========================================
  // TEST 6: Edit Project
  // ========================================
  it("opens edit modal with existing project data", () => {
    render(<App />);

    // Find and click first edit button
    const editButtons = screen.getAllByText(/Edit/i);
    fireEvent.click(editButtons[0]);

    // Modal should show "Edit Project"
    expect(screen.getByText(/Edit Project/i)).toBeInTheDocument();

    // Form should be pre-filled
    const titleInput = screen.getByLabelText(/Title/i) as HTMLInputElement;
    expect(titleInput.value).toBe("AC Milan App");
  });

  // ========================================
  // TEST 7: Update Project
  // ========================================
  it("updates project when edit form is submitted", async () => {
    render(<App />);

    // Click edit on first project
    const editButtons = screen.getAllByText(/Edit/i);
    fireEvent.click(editButtons[0]);

    // Change title
    const titleInput = screen.getByLabelText(/Title/i);
    fireEvent.change(titleInput, { target: { value: "Updated Milan App" } });

    // Submit - look for Update button
    const updateButton = screen.getByRole("button", {
      name: /Update Project/i,
    });
    fireEvent.click(updateButton);

    // Updated title should appear
    await waitFor(() => {
      expect(screen.getByText(/Updated Milan App/i)).toBeInTheDocument();
    });

    // Old title should be gone
    expect(screen.queryByText(/^AC Milan App$/i)).not.toBeInTheDocument();
  });

  // ========================================
  // TEST 8: Cancel Add/Edit
  // ========================================
  it("closes modal when cancel button is clicked", async () => {
    render(<App />);

    // Open add modal
    const addButtons = screen.getAllByText(/Add Project/i);
    fireEvent.click(addButtons[0]);

    // Modal is open
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();

    // Click cancel
    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    fireEvent.click(cancelButton);

    // Modal should close
    await waitFor(() => {
      expect(screen.queryByLabelText(/Title/i)).not.toBeInTheDocument();
    });
  });


  // ========================================
  // TEST 9: Search by Client
  // ========================================
  it("filters projects by client name", () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/Search projects.../i);

    // Search by client
    fireEvent.change(searchInput, { target: { value: "Logistics" } });

    // Should show Delivery App
    expect(screen.getByText(/Delivery App/i)).toBeInTheDocument();

    // Should hide others
    expect(screen.queryByText(/AC Milan App/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Max Blog Website/i)).not.toBeInTheDocument();
  });
});
