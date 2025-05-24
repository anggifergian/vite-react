import { Suspense } from "react";
import Spinner from "../common/spinner";

const LazyWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Spinner />}>{children}</Suspense>
);

export default LazyWrapper;
