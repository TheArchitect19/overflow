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
import { ProfileImage } from "../profile-image"
import { Cover } from "../../ui/cover"
import { Username } from "../../ui/username"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

export function InstructorImage() {
    return (
        <Card className="w-full">
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="mt-6 flex flex-col items-center">
                            <AspectRatio ratio={10 / 7} className="bg-muted">
                                <Image
                                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                                    alt="Photo by Drew Beamer"
                                    fill
                                    className="h-full w-full rounded-md object-cover"
                                />
                            </AspectRatio>
                        </div>
                    </div>
                </form>
            </CardContent>

        </Card>
    );
}