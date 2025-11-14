import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-10 py-4">
        <div className="flex items-center justify-between w-full">
            <Image 
            src="/logo.png" 
            alt="Logo" 
            width={180} 
            height={38} 
            priority 
            />
            <div className="flex gap-6 items-center justify-center">
                <Link href="/" className="text-[#722F14] hover:text-[#795F02] text-lg font-bold">
                    Home
                </Link>
                <Link href="/main/find" className="text-[#722F14] hover:text-[#795F02] text-lg font-bold">
                    Find Your House
                </Link>
                <Link href="/main/education" className="text-[#722F14] hover:text-[#795F02] text-lg font-bold">
                    Education
                </Link>
            </div>
            <div> 
                <Link href="/auth/login" className="bg-[#722F14] px-5 py-3 rounded-xl text-white hover:bg-[#795F02] text-lg font-bold">
                    Login
                </Link>
            </div>
        </div>
    </header>
 
  );
}