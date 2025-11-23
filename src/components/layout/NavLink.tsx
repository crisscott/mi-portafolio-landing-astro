import { useState, useEffect } from "react";

interface NavLinkProps {
	href: string;
	label: string;
}

export const NavLink = ({ href, label }: NavLinkProps) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		// Scroll spy: detectar qué sección está visible
		const handleScroll = () => {
			if (href === "#") {
				// "Inicio" está activo si estamos cerca del top
				setIsActive(window.scrollY < 100);
			} else if (href.startsWith("#")) {
				const targetId = href.substring(1);
				const targetElement = document.getElementById(targetId);

				if (targetElement) {
					const rect = targetElement.getBoundingClientRect();
					const offset = 100; // Offset del navbar sticky

					// Está activo si la sección está visible en el viewport
					setIsActive(rect.top <= offset + 100 && rect.bottom >= offset);
				}
			}
		};

		// Ejecutar al montar y en cada scroll
		handleScroll();
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [href]);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (href.startsWith("#")) {
			e.preventDefault();

			if (href === "#") {
				window.scrollTo({ top: 0, behavior: "smooth" });
			} else {
				const targetId = href.substring(1);
				const targetElement = document.getElementById(targetId);

				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}
		}
	};

	return (
		<a
			href={href}
			onClick={handleClick}
			className={`
				relative py-1 transition-all duration-200
				${
					isActive
						? "text-blue-600 dark:text-blue-400 font-semibold"
						: "text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
				}
			`}
		>
			{label}
			{/* Underline animado para el link activo */}
			<span
				className={`
					absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400
					transition-all duration-300 ease-out
					${isActive ? "w-full" : "w-0"}
				`}
			/>
		</a>
	);
};
