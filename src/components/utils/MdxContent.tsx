"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface MdxContentProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function MdxContent({ mdxSource }: MdxContentProps) {
  return <MDXRemote {...mdxSource} />;
}
