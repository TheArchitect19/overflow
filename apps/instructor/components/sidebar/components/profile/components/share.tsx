export default function ShareProfile(data:any){
    
    return(
        <>
            <div className="p-4 dark:bg-black text-white text-center rounded-full text-2xl w-full">
                https://localhost:3000/mock-interview/{data.username}
            </div>
        </>
    )
}