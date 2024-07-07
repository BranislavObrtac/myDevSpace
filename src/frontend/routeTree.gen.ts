import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as ProjectsImport } from './routes/projects'

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsRoute = ProjectsImport.update({
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)


declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
  }
}

export const routeTree = rootRoute.addChildren({ IndexRoute, AboutRoute, ProjectsRoute})

