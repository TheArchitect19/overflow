"use client"
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { useEffect, useState } from "react";
import { Withdraw } from "./withdraw";

export function Card({ index }: any) {
    console.log(index)
    const idx = index;

    let [title, setTitle] = useState("");
    useEffect(() => {
        if (index === 0) {
            setTitle("📖 Your Earnings");
        } else if (index === 1) {
            setTitle("📣 Estimated earning");
        } else if (index === 2) {
            setTitle("🚀 Pending requests");
        } else if (index === 3) {
            setTitle("💥 Upcoming Interviews");
        }
    }, [index]);

    return (
        <CardSpotlight className="h-[8rem] w-full rounded-lg">
            <p className="text-xl font-bold relative z-20 text-white">
                {index === 0 ?
                    <div>
                        {title}
                        <br>
                        </br>
                        <div className="flex">
                            <span className=" text-sm text-[#8f9291f1]">1000 emails </span>
                            <div className="mt-3 ml-[5rem]">
                                <Withdraw />
                            </div>

                        </div>
                        
                    </div>
                    :
                    <div>
                        {title}
                        <br>
                        </br>
                        <span className=" text-sm text-[#8f9291f1]">1000 emails </span>
                    </div>
                }
            </p>

        </CardSpotlight>
    );
}

const Step = ({ title }: { title: string }) => {
    return (
        <li className="flex gap-2 items-start">
            <CheckIcon />
            <p className="text-white">{title}</p>
        </li>
    );
};

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    );
};
