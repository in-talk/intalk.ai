import Link from "next/link";
import { SparklesText } from "./sparkles-text";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Ai inTalk">
       <SparklesText text=" AI inTalk" />
    </Link>
  );
}
