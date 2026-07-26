import { type JSX } from "react";
import stacks from "@data/stacks.json";

import MightyCubism3 from "@/app/assets/MightyCubism-3.svg";
import CardHeader from "@/app/components/home/card-header";

export function StackCookie({ stackName }: { stackName: string }) {
  return (
    <div className="flex justify-center items-center bg-blue-coded pr-2.5 pl-2.5 pt-2 pb-2 w-fit">
      <span className="font-[Fira_Code] text-[12px] text-dark-coded">{stackName}</span>
    </div>
  );
}

export default function StacksCard({ className }: { className?: string }): JSX.Element {
  return (
    <div className={className}>
      <CardHeader img={MightyCubism3} headerLabel="Stacks" className="text-blue-coded" />
      <div className="mt-6.25 flex flex-wrap gap-x-6.25 gap-y-3.75">
        {stacks.main.map((stack: string) => (
          <StackCookie stackName={stack} />
        ))}
      </div>
    </div>
  );
}
