import { useState, useMemo } from "react";
import {
  projects as initialProjects,
  type Project,
} from "@nesso/shared-config";
import { ProjectTable } from "./components/ProjectTable";
import { ProjectForm } from "./components/ProjectForm";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Button, Modal, Input } from "@nesso/shared-ui";
import "./App.css";

function App() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDeleteProject = (titleToDelete: string) => {
    setProjects(projects.filter((project) => project.title !== titleToDelete));
  };

  const handleAddProject = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleSubmitProject = (submittedProject: Project) => {
    if (editingProject) {
      setProjects(
        projects.map((project) =>
          project.title === editingProject.title ? submittedProject : project
        )
      );
    } else {
      if (!submittedProject.title) {
        submittedProject.title = `New Project ${projects.length + 1}`;
      }
      setProjects([...projects, submittedProject]);
    }
    setIsModalOpen(false);
  };

  const filteredProjects = useMemo(() => {
    if (!searchTerm) {
      return projects;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowercasedSearchTerm) ||
        project.client.toLowerCase().includes(lowercasedSearchTerm) ||
        project.description.toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [projects, searchTerm]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Project Management Dashboard
          </h1>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4 gap-2">
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-1/3"
              />
              <Button
                size="md"
                onClick={handleAddProject}
                variant="outline"
                className="text-nowrap"
              >
                Add Project
              </Button>
            </div>
            <ProjectTable
              projects={paginatedProjects}
              onDelete={handleDeleteProject}
              onEdit={handleEditProject}
            />
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  variant={currentPage === i + 1 ? "primary" : "secondary"}
                  size="sm"
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingProject ? "Edit Project" : "Add Project"}
      >
        <ProjectForm
          project={editingProject}
          onSubmit={handleSubmitProject}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default App;
