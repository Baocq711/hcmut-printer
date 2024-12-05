import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes/routes.tsx';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} future={{ v7_startTransition: true }} />
);
