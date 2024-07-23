export default function Login() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-slate-200">
                <form action='/' method='POST'>
                    <input className="text-black border-solid border-black border-2" type="text" name="email" placeholder="Enter Your Email"></input> <br></br> <br></br>
                    <input className="text-black border-solid border-black border-2" type="text" name="password" placeholder="Enter Your password"></input> <br></br> <br></br>
                    <input className="text-black cursor-pointer bg-blue-500 rounded p-1" type="submit" value={"Submit"}></input>
                </form>
            </div>
        </>
    )
}