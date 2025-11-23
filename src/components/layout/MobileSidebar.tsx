import { X } from "lucide-react";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const links = [
	{ href: "#", label: "Inicio" },
	{ href: "#tech-stack", label: "Stack" },
	{ href: "#experience", label: "Experiencia" },
	{ href: "#projects", label: "Proyectos" },
	{ href: "#about", label: "Sobre mí" },
	{ href: "#contact", label: "Contacto" },
];

export const MobileSidebar = ({ isOpen, onClose }: Props) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		if (href.startsWith("#")) {
			e.preventDefault();
			onClose();

			setTimeout(() => {
				if (href === "#") {
					window.scrollTo({ top: 0, behavior: "smooth" });
				} else {
					const targetId = href.substring(1);
					const targetElement = document.getElementById(targetId);
					if (targetElement) {
						targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
					}
				}
			}, 300); // Delay to allow sidebar to close
		}
	};

	return (
		<>
			{/* Backdrop */}
			<div
				className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
					isOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={onClose}
			/>

			{/* Sidebar */}
			<aside
				className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-zinc-900 shadow-lg transform transition-transform duration-300 ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="flex items-center justify-between px-4 py-4 border-b border-zinc-200 dark:border-zinc-800">
					<span className="text-lg font-bold text-zinc-900 dark:text-white">Menú</span>
					<button onClick={onClose} className="text-zinc-600 dark:text-zinc-300 cursor-pointer">
						<X size={24} />
					</button>
				</div>

				<nav className="flex flex-col px-4 py-2 space-y-2">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={(e) => handleClick(e, link.href)}
							className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
						>
							{link.label}
						</a>
					))}
				</nav>
			</aside>
		</>
	);
};
