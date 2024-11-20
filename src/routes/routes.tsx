import Layout from '@/components/layout/layout';
import HistoryPage from '@/screens/history';
import HomePage from '@/screens/home';
import PrintDocumentIdPage from '@/screens/print-document/[id]/print-document.id';
import PrintDocumentPage from '@/screens/print-document/print-document';
import PrinterPage from '@/screens/printer';
import ReportPage from '@/screens/report';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/print-document',
          element: <PrintDocumentPage />,
        },
        {
          path: '/print-document/:id',
          element: <PrintDocumentIdPage />,
        },
        {
          path: '/history',
          element: <HistoryPage />,
        },
        {
          path: '/report',
          element: <ReportPage />,
        },
        {
          path: '/printer',
          element: <PrinterPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
