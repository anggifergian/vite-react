import { MDXProvider } from "@mdx-js/react";
import { Outlet } from "react-router-dom";
import { mdxComponents } from './styled-blog';
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";

export default function BlogLayout() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-4 md:max-w-[800px] m-auto mt-[100px] md:mt-[160px]">
        <MDXProvider components={mdxComponents}>
          <Outlet />
        </MDXProvider>
      </div>
      <Footer />
    </>
  );
}
