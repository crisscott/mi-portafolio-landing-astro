import { useState } from "react";
import { Menu } from "lucide-react";
import { MobileSidebar } from "./MobileSidebar";

export const MobileMenu = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="md:hidden text-zinc-700 dark:text-zinc-300 cursor-pointer"
				aria-label="Abrir menú"
			>
				<Menu size={24} />
			</button>

			<MobileSidebar isOpen={open} onClose={() => setOpen(false)} />
		</>
	);
};
