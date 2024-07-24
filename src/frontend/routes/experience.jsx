import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  component: () => <div>Hello /experience!</div>,
});
