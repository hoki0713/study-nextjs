import Link from "next/link";

const people = [
  { v: "car", name: "hoki" },
  { v: "bike", name: "doki" },
  { v: "airplane", name: "lukas" },
];

export default function Details() {
  return (
    <div>
      {people.map((e) => (
        <div>
          <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {e.name}'s {e.v}
            </a>
          </Link> 
        </div>
      ))}
    </div>
  );
}
