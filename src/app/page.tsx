'use client';

import dynamic from 'next/dynamic';
// we MUST load the editor dynamically, otherwise server-side rendering will fail
const Editor = dynamic(() => import('../components/editor'), {
  ssr: false,
});

export default function Home() {
  return <Editor />;
}
