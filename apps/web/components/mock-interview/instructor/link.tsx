export default function ShareProfile(data:any){
    
    return(
        <>
            <div className="p-2 dark:bg-neutral-900 w-[50%] text-white text-center rounded-lg text-2xl w-full">
                https://localhost:3000/mock-interview/{data.username}
            </div>
        </>
    )
}