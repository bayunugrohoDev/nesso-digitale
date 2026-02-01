import React from "react";
import { Table, Button, type Column } from "@nesso/shared-ui";
import type { Project } from "@nesso/shared-config";


type ExtendedProject = Project & {
  __actions__?: React.ReactNode;
};

interface ProjectTableProps {
  projects: ExtendedProject[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

interface ProjectTableProps {
  projects: ExtendedProject[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

export const ProjectTable: React.FC<ProjectTableProps> = ({
  projects,
  onEdit,
  onDelete,
}) => {
  const columns: Column<ExtendedProject>[] = [
    {
      accessor: "title",
      header: "Title",
      sortable: true,
    },
    {
      accessor: "client",
      header: "Client",
      sortable: true,
    },
    {
      accessor: "description",
      header: "Description",
      className: "max-w-xs",
    },
    {
      accessor: "image",
      header: "Image",
      cell: (image: string) =>
        image ? (
          <img
            src={image}
            alt="Project"
            className="h-10 w-10 object-cover rounded"
          />
        ) : null,
    },
    {
      accessor: "__actions__",
      header: "Actions",
      cell: (_: unknown, row: Project) => (
        <div className="flex space-x-2">
          <Button onClick={() => onEdit(row)} variant="ghost" size="sm">
            Edit
          </Button>
          <Button onClick={() => onDelete(row.title)} variant="ghost" size="sm">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return <Table data={projects} columns={columns} />;
};
