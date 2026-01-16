import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig';
import { NotExist } from '@/pages/not-exist/NotExist';
import { Suspense } from 'react';

export const AppRouter = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Routes>
      <Route path={RoutePath.not_exist} element={<NotExist />} />
    </Routes>
  </Suspense>
);
