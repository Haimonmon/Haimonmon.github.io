import { type JSX } from "react";
import cn from "@/app/utils/tail";

export default function CardHeader({
  img,
  className,
  headerLabel,
}: {
  img: any;
  className?: string;
  headerLabel: string;
}): JSX.Element {
  return (
    <div className="flex gap-5">
      <img src={img} alt="card header" />
      <h1 className={cn(`font-[Fira_Code] text-[25px]`, className)}>{headerLabel}</h1>
    </div>
  );
}
