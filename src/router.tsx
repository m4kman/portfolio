import { createRouter, Link } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const router = createRouter({
    defaultNotFoundComponent: () => (
      <div>
        <p>Not found!</p>
        <Link to="/">Go home</Link>
      </div>
    ),
    routeTree,
    scrollRestoration: true,
  });

  return router;
};
