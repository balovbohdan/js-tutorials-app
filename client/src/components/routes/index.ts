import config from '@configs/routes';

import { Home } from './home';
import { Blog } from './blog';

export type Route = {
  component;
  path:string;

  exact?:boolean;
};

export const routes:Route[] = [
  {
    exact: true,
    component: Home,
    path: config.home.path,
  },
  {
    component: Blog,
    path: config.blog.path,
  },
];

export default routes;
