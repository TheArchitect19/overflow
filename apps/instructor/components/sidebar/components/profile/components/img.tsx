import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent
} from "@/components/ui/card"
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