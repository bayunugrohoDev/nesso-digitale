import React, { useState, useEffect } from 'react';
import { type Project } from '@nesso/shared-config';
import { Input, Textarea, Button } from '@nesso/shared-ui';

interface ProjectFormProps {
  project?: Project | null;
  onSubmit: (project: Project) => void;
  onCancel: () => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({
  project,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Project>({
    title: '',
    client: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (project) {
      setFormData(project);
    } else {
      setFormData({
        title: '',
        client: '',
        description: '',
        image: '',
      });
    }
  }, [project]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <Input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="client" className="block text-sm font-medium text-gray-700">
          Client
        </label>
        <Input
          type="text"
          name="client"
          id="client"
          value={formData.client}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <Textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <Input
          // type="url"
          name="image"
          id="image"
          value={formData.image}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {project ? 'Update Project' : 'Add Project'}
        </Button>
      </div>
    </form>
  );
};
