import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="text-neutral-11">Could not find requested resource</p>
      <Link href="/" className="text-link-11">
        Return Home
      </Link>
    </div>
  );
}
