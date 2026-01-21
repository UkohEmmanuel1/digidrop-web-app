'use client';

import dynamic from 'next/dynamic';

const ClientProviders = dynamic(
  () => import('./RootProviders').then((mod) => mod.RootProviders),
  { ssr: false }
);

export default ClientProviders;
