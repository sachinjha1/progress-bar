import Employee from './employee';
import RootSSRHandlers from './root-ssr';
import RootPublicHandlers from './root-public';

const Routes = [...Employee, ...RootSSRHandlers, ...RootPublicHandlers];

export default Routes;
