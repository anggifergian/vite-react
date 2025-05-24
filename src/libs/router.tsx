import { LazyExoticComponent } from "react";
import LazyWrapper from "../components/base/lazy-wrapper";

type BlogPageRoute = {
  path: string;
  component: LazyExoticComponent<React.ComponentType>;
};

export const routeChild = (pages: BlogPageRoute[]) => pages.map(({ path, component: Component }) => ({
  path,
  element: (
    <LazyWrapper>
      <Component />
    </LazyWrapper>
  ),
}));