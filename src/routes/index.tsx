import { createFileRoute } from "@tanstack/react-router";

import MeridianLanding from "#/components/MeridianLanding";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <MeridianLanding />;
}
