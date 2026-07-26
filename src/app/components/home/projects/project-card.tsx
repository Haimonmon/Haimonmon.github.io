import { type JSX } from "react";
import CardHeader from "@/app/components/home/card-header";
import MightyCubism2 from "@/app/assets/MightyCubism-2.svg";

export default function ProjectCard({ className }: { className?: string }): JSX.Element {
  return (
    <div className={className}>
      <CardHeader img={MightyCubism2} headerLabel="Projects" className="text-yellow-coded" />
    </div>
  );
}
