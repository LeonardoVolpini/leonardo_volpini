'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useEffect, useState } from 'react';

interface ClientMdxRendererProps {
  serializedMdxSource: string;
}

export default function ClientMdxRenderer({ serializedMdxSource }: ClientMdxRendererProps) {
  // Parsifichiamo il contenuto MDX serializzato
  const mdxSource = JSON.parse(serializedMdxSource) as MDXRemoteSerializeResult;
  
  // Assicuriamoci che il componente sia montato prima di renderizzare MDX
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Renderizza solo quando il componente è montato nel browser
  if (!isMounted) {
    return <div>Caricamento contenuto...</div>;
  }

  return <MDXRemote {...mdxSource} />;
}