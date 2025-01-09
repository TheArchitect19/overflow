import { ProfileCard } from "@/components/mock-interview/card";
import AboutInstructor from "@/components/mock-interview/instructor/about";
import ShareProfile from "@/components/mock-interview/instructor/link";
import { InstructorImage } from "@/components/mock-interview/instructor/profileImage";

const mockProfiles = [
    { id: 1, name: "John Doe", title: "Software Engineer" },
    { id: 2, name: "Jane Smith", title: "Product Manager" },
    { id: 3, name: "Alice Johnson", title: "Data Scientist" },
    { id: 4, name: "Bob Brown", title: "UI/UX Designer" },
    { id: 5, name: "Charlie Davis", title: "DevOps Engineer" },
    { id: 6, name: "Emily Clark", title: "Frontend Developer" },
    { id: 7, name: "David Wilson", title: "Backend Developer" },
    { id: 8, name: "Sophia Lee", title: "AI Researcher" },
];

export default function InstructorDetail({ params }: any) {
    const username = params.instructor;
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
            <div className="p-5 text-3xl text-center">
                Recommendations
                <div className="w-full">
                    --------
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4">
                {mockProfiles.map((profile) => (
                    <ProfileCard key={profile.id} />
                ))}
            </div>
        </>
    );
}
