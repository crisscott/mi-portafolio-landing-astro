import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
	const [theme, setTheme] = useState("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const stored = localStorage.getItem("theme");
		if (stored) {
			setTheme(stored);
			if (stored === "dark") {
				document.documentElement.classList.add("dark");
			}
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		if (newTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	if (!mounted) return null;

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition cursor-pointer"
			aria-label="Toggle theme"
		>
			{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
};
