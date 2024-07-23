import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <form action='/' method='POST'>
                    <input className="text-black border-solid border-black border-2" type="text" name="mail" placeholder="Enter Your Email"></input> <br></br> <br></br>
                    <input className="text-black border-solid border-black border-2" type="text" name="password" placeholder="Enter Your password"></input> <br></br> <br></br>
                    <input className="text-black cursor-pointer bg-blue-500 rounded p-1" type="submit" value={"Submit"}></input>
                </form> 
    </main>
  );
}
