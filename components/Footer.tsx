import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-faint sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed & built from scratch.
        </p>
        <p>
          <span className="text-accent">❯</span> next.js · typescript · tailwind · framer-motion
        </p>
      </div>
    </footer>
  );
}
