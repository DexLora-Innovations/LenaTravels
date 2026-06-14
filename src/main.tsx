import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

async function bootstrap() {
  const router = getRouter();

  const root = document.getElementById("root");
  if (!root) return;

  createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

bootstrap();
