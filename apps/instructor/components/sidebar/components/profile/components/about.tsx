import { Button } from "@/components/ui/button";

export default function AboutInstructor() {
    return (
        <div className="p-5">
            <div className="text-3xl">
                Ayush Kumar
            </div>
            <div className="mt-2">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    Works at{" "}
                    <span className="text-blue-500 dark:text-blue-400 font-bold">
                        Google
                    </span>
                </p>
            </div>
            <div className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit soluta ex culpa possimus, iure ipsam delectus veritatis ducimus tenetur tempora inventore molestiae cum provident fugit vitae rerum, accusamus ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit soluta ex culpa possimus, iure ipsam delectus veritatis ducimus tenetur tempora inventore molestiae cum provident fugit vitae rerum, accusamus ipsa.
            </div>
            <div className="mt-2">
                linkedin . github
            </div>
            <div className="mt-4 flex">
                <Button className="w-1/4 m-3">Request a Call</Button>
                <Button className="w-1/4 m-3">Share</Button>
            </div>
        </div>
    )
}