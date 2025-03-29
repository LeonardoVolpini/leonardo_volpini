'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useEffect, useState } from 'react';

interface ClientMdxRendererProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function ClientMdxRenderer({ mdxSource }: ClientMdxRendererProps) {

  // Assicuriamoci che il componente sia montato prima di renderizzare MDX
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Renderizza solo quando il componente è montato nel browser
  if (!isMounted) {
    return <div>Caricamento contenuto...</div>;
  }
  return (
    <div className="prose max-w-3xl">
      <MDXRemote {...mdxSource} />
    </div>
  );
}