import {HomePage, TasksPage, ProfilePage, GroupsPage, PersonsPage, TipogrupoPage} from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/groups', // Ruta para la vista de grupos
        element: GroupsPage // Componente de la vista de grupos
    },
    {
        path: '/persons', // Ruta para la vista de grupos
        element: PersonsPage // Componente de la vista de grupos
    },
    {
        path: '/tipogrupo', // Ruta para la vista de grupos
        element: TipogrupoPage // Componente de la vista de grupos
    }


];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
