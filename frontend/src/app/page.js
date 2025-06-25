import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      HomePage
      <Link href='/login'> LoginPage</Link>
      <Link href='/signup'> SignupPage</Link>
    </div>
  );
}