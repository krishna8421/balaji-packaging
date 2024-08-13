import ThemeSwitcher from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="p-2">
      <nav className="flex items-center justify-between">
        <span className="font-platypi font-bold">Balaji Packaging</span>
        <ThemeSwitcher />
      </nav>
    </main>
  );
}
