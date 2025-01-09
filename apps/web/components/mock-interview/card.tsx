import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ProfileImage } from "./profile-image"
import { Cover } from "../ui/cover"
import { Username } from "../ui/username"

export function ProfileCard() {
    return (
        <Card className="w-[350px]">
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="mt-6 flex flex-col items-center">
                            <ProfileImage />
                            <div className="text-center mt-2">
                                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                    Works at{" "}
                                    <span className="text-blue-500 dark:text-blue-400 font-bold">
                                        Google
                                    </span>
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Username>
                                Ayush Kumar
                            </Username>
                        </div>

                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center items-center w-full">
                <Button className="w-full">Request a Call</Button>
            </CardFooter>
        </Card>
    );
}