import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

import { techStack } from "../data/techStack";

const principalStack = techStack.filter((tech) => tech.isPrincipal);

export const TerminalHero = () => {
	const [text, setText] = useState("");
	const fullText = "git commit -m 'Building scalable solutions with Java & Next.js'";

	useEffect(() => {
		let i = 0;
		const timer = setInterval(() => {
			setText(fullText.slice(0, i));
			i++;
			if (i > fullText.length) clearInterval(timer);
		}, 50);

		return () => clearInterval(timer);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			className="w-full max-w-2xl mx-auto bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-zinc-800"
		>
			<div className="bg-zinc-800 px-4 py-2 flex items-center gap-2">
				<div className="flex gap-1.5">
					<div className="w-3 h-3 rounded-full bg-red-500" />
					<div className="w-3 h-3 rounded-full bg-yellow-500" />
					<div className="w-3 h-3 rounded-full bg-green-500" />
				</div>
				<div className="flex-1 text-center text-xs text-zinc-400 font-mono flex items-center justify-center gap-2">
					<Terminal size={12} />
					<span>developer@portfolio:~</span>
				</div>
			</div>
			<div className="p-6 font-mono text-left">
				<div className="flex gap-2 text-green-400 mb-4">
					<span>$</span>
					<span className="typing-effect">{text}</span>
					<span className="animate-pulse">_</span>
				</div>

				<div className="space-y-2 text-zinc-300 text-sm">
					<p>
						<span className="text-blue-400">const</span> <span className="text-yellow-400">developer</span>{" "}
						= {"{"}
					</p>
					<p className="pl-4">
						name: <span className="text-green-400">"Cristopher Scott"</span>,
					</p>
					<p className="pl-4">
						role: <span className="text-green-400">"Fullstack Developer"</span>,
					</p>
					<p className="pl-4">
						experience: <span className="text-orange-400">5</span>,
					</p>
					<p>{"};"}</p>
				</div>
			</div>

			<div className="bg-zinc-800/50 px-6 py-3 border-t border-zinc-700 flex items-center gap-4">
				<span className="text-xs text-zinc-500 font-mono">Main Stack:</span>
				<div className="flex gap-3">
					{principalStack.map((item) => (
						<img
							src={item.icon}
							alt={item.name}
							className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity invert"
							title={item.name}
							key={item.name}
						/>
					))}
				</div>
			</div>
		</motion.div>
	);
};
