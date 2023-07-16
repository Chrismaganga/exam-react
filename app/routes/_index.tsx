import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Remix youtube" },
    { name: "description", content: "CodeLovers" },
  ];
};

export default function Index() {
  return <h1>youtube</h1>;
}
