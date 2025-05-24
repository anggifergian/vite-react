import { MDXProvider } from "@mdx-js/react";
import { Outlet } from "react-router-dom";
import { mdxComponents } from './styled-blog';
import Navbar from "../ui/navbar";

export default function BlogLayout() {
  return (
    <>
      <Navbar />
      <div className="px-4 md:max-w-[800px] m-auto mt-[100px]">
        <MDXProvider components={mdxComponents}>
          <Outlet />
        </MDXProvider>
      </div>
    </>
  );
}
