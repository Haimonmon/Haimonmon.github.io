import my from "@data/me.json";
import type { EmploymentStatus, Socials } from "../typings/global.types";
import { type JSX } from "react";
import { WORKING } from "../constants/global.constants";

function FooterPrivacyPolicy({ className }: { className?: string }): JSX.Element {
    return (
        <div className={className}>
            <div className="flex w-full mb-3.75 bg-blue-coded h-3.75 relative text-blue-coded absolute">
                <div className="flex relative -top-5.5 items-center gap-2.5">
                    <img
                        src="public/images/icons/copyright-symbol.png"
                        alt="copyright icon"
                        className="size-[10.38px]"
                    />
                    <span className="mr-1.25">2026</span>{" "}
                    <span className="hidden tablet:flex">Haim0oon.me</span>
                </div>
            </div>
            <div className="text-[14px] text-white-coded">Privacy</div>
        </div>
    );
}

function FooterWorkStatus({ className }: { className?: string }): JSX.Element {
    return (
        <div className={className}>
            <div className="flex w-full mb-3.75 bg-brown-coded h-3.75 relative text-brown-coded">
                <div className="flex items-center gap-2.5 absolute -top-5.5">
                    <img
                        src="public/images/icons/linux-platform.png"
                        alt="ubuntu linux distro icon"
                        className="size-3"
                    />
                    <span className="text-[14px] hidden tablet:flex">
                        {WORKING[my.employment as EmploymentStatus]}
                    </span>
                </div>
            </div>
            <div className="text-white-coded">
                <span className="hidden large-phone:flex">
                    <span className="hidden large-pablet:flex mr-2.5">Let's</span>Connect
                    <span className="ml-2.5 large-pablet:hidden">Me</span>
                </span>
            </div>
        </div>
    );
}

function FooterSocials({ className }: { className?: string }): JSX.Element {
    return (
        <div className={className}>
            <div className="flex w-full mb-3.75">
                <div className="h-3.75 bg-yellow-coded text-yellow-coded w-[35%] relative">
                    <span className="absolute -top-5.5 text-[14px]">{">_*vince"}</span>
                </div>
                <div className="h-3.75 bg-purple-coded text-purple-coded w-[65%] relative">
                    <div className="flex gap-2.5 absolute -top-5.5 items-center">
                        <img
                            src="public/images/icons/folder.png"
                            alt="folder icon"
                            className="size-[13.19px]"
                        />
                        <span className="text-[14px]">{"-> socials"}</span>
                    </div>
                </div>
            </div>
            <div className="flex text-white-coded">
                {my.socials.map((social: Socials) => (
                    <span className="text-[14px] w-fit  flex-1">{social.name}</span>
                ))}
            </div>
        </div>
    );
}

export default function Footer(): JSX.Element {
    return (
        <div className="w-full mb-13 mt-[35px] font-[Fira_code] flex">
            <FooterSocials className="w-full medium-phone:w-[75%] large-pablet:w-[45%] tablet:w-[41.41%]" />
            <FooterWorkStatus className="hidden medium-phone:flex flex-col medium-phone:w-[25%] large-pablet:w-[30%] tablet:w-[29.29%]" />
            <FooterPrivacyPolicy className="hidden large-pablet:flex flex-col large-pablet:w-[25%] tablet:w-[29.29%]" />
        </div>
    );
}