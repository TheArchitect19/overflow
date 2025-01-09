import { StepLoading } from "@/components/ats/loading";
import { UploadResume } from "@/components/ats/upload";

export default function ATS(){
    return(
        <>
            <div>
                <UploadResume />
                <StepLoading />
            </div>
        </>
    )
}