export enum AppRoutes {
  HOME = 'home',
  LOGIN = 'login',
  NOT_EXIST = 'not_exist'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_EXIST]: '*'
};
