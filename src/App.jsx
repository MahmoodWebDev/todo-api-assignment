import { useState, useEffect } from "react";
import { getProjects, getPages } from "./api";
import Todo from "./Todo";
import "./App.css"; // Import the CSS file

// Main application component
const App = () => {
  // State for the list of projects, the selected project, the list of pages for the selected project, and the selected page
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  // Fetch projects when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjects(projects);
    };
    fetchProjects();
  }, []);

  // Fetch pages when the selected project changes
  useEffect(() => {
    if (selectedProject) {
      const fetchPages = async () => {
        const pages = await getPages(selectedProject.id);
        setPages(pages.children);
      };
      fetchPages();
    }
  }, [selectedProject]);

  // Handle project selection
  const handleProjectSelect = (event) => {
    const projectId = event.target.value;
    const project = projects.find((project) => project.id === projectId);
    setSelectedProject(project);
  };

  // Handle page selection
  const handlePageSelect = (event) => {
    const pageId = event.target.value;
    const page = pages.find((page) => page.id === pageId);
    setSelectedPage(page);
  };

  // Render project selection dropdown
  const renderProjectSelection = () => (
    <div className="container">
      <select onChange={handleProjectSelect}>
        <option>Select a project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
    </div>
  );

  // Render page selection dropdown
  const renderPageSelection = () =>
    selectedProject && (
      <div className="container">
        <select onChange={handlePageSelect}>
          <option>Select a page</option>
          {pages.map((page) => (
            <option key={page.id} value={page.id}>
              {page.name}
            </option>
          ))}
        </select>
      </div>
    );

  // Render Todo component for selected project and page
  const renderTodo = () =>
    selectedPage && <Todo project={selectedProject} page={selectedPage} />;

  // The return statement is inside the App function
  return (
    <div className="container">
      {renderProjectSelection()}
      {renderPageSelection()}
      {renderTodo()}
    </div>
  );
};

export default App;
