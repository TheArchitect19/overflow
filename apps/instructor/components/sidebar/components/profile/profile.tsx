import AboutInstructor from "./components/about";
import { InstructorImage } from "./components/img";
import ShareProfile from "./components/share";



export default function InstructorDetail() {
    const username = "Ayush";
    return (
        <>
            <div className="flex text-white mt-[5rem] p-2 w-full">
                {/* Left Side */}
                <div className="w-1/2 flex flex-col items-center">
                    <InstructorImage />
                    <div className="mt-5">
                        <ShareProfile username={username} />
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-1/2 flex flex-col items-center">
                    <AboutInstructor />
                </div>
            </div>
        </>
    );
}
