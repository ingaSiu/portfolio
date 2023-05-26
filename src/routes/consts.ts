import HomePage from '../pages/HomePage/HomePage';
import MainLayout from '../Layout/MainLayout';
import ProjectPage from '../pages/ProjectPage/ProjectPage';

export const HOME_PATH = '/';
export const PROJECT_PAGE_PATH = '/project/:projectId';

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: HomePage },
    { path: PROJECT_PAGE_PATH, Component: ProjectPage },
  ],
};
