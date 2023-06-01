import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import HomePage from '../pages/HomePage/HomePage';
import MainLayout from '../Layout/MainLayout';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import Projects from '../components/Projects/Projects';

export const HOME_PATH = '/';
export const PROJECT_PAGE_PATH = '/project/:projectId';
export const ABOUT_PATH = `${HOME_PATH}about`;
export const PROJECTS_PATH = `${HOME_PATH}projects`;
export const CONTACT_PATH = `${HOME_PATH}contact`;

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: HomePage },
    { path: ABOUT_PATH, Component: About },
    { path: PROJECTS_PATH, Component: Projects },
    { path: CONTACT_PATH, Component: Contact },
    { path: PROJECT_PAGE_PATH, Component: ProjectPage },
  ],
};
