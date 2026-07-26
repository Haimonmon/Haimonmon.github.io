import { type JSX } from "react";
import ProfileImage from "@/app/assets/profile.png";

function ProfilePicture() {
  return (
    <div className="relative size-[125.74px] ml-[4px]">
      <img
        src={ProfileImage}
        alt="Profile picture of Vince"
        className="border-2 border-orange-coded size-[125.74px]"
      />
      <div className="size-[11.61px] bg-dark-coded border-orange-coded border-2 absolute -top-1 -right-1"></div>
      <div className="size-[11.61px] bg-dark-coded border-orange-coded border-2 absolute -top-1 -left-1"></div>
      <div className="size-[11.61px] bg-dark-coded border-orange-coded border-2 absolute -bottom-1 -right-1"></div>
      <div className="size-[11.61px] bg-dark-coded border-orange-coded border-2 absolute -bottom-1 -left-1"></div>
    </div>
  );
}

export default function MeCard({ className }: { className?: string }): JSX.Element {
  return (
    <div className={className}>
      <h1 className="font-[Fira_Code_Semibold] text-[1.875rem] text-orange-coded">Hi, I'm Vince</h1>
      <div className="flex items-center gap-5 mt-[25px] mb-[25px]">
        <ProfilePicture />
        <span className="wrap-break-word flex-1 font-[Pixel_Code] text-white-coded text-[14px]">
          22 year old{" "}
          <span className="bg-orange-coded text-dark-coded pl-1.5 -ml-1.5 pr-1.5 -mr-1.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
            Junior Software Engineer
          </span>{" "}
          based in The Philippines.
        </span>
      </div>
      <span className="font-[Pixel_Code] text-[14px] text-white-coded text-justify block ml-px">
        <span className="bg-orange-coded text-dark-coded pl-1.5 -ml-1.5 pr-1.5 -mr-1.5 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
          Full stack by passion,backend focused by profession.
        </span>{" "}
        building APIs and scalable systems, exploring low level programming and game development.
      </span>
    </div>
  );
}
