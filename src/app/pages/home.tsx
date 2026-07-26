import CareerCard from "@components/home/career-card";
import CertificateCard from "@components/home/certificate-card";
import HeroCard from "@components/home/hero-card";
import MeCard from "@components/home/me-card";
import ProjectCard from "@components/home/projects/project-card";
import StacksCard from "@components/home/stacks-card";
import { type JSX } from "react";

/**
 * Provides the full portfolio contents
 * @returns JSX Element
 */
export default function HomePage(): JSX.Element {
  return (
    <div className="grid grid-cols-1">
      <HeroCard />
      <MeCard />
      <StacksCard className="mt-10" />
      <ProjectCard className="mt-7.5" />
      <CareerCard />
      <CertificateCard />
    </div>
  );
}
