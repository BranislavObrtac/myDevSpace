import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  component: () => <div>Hello /work!</div>,
});
