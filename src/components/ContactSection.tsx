import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export const ContactSection = () => {
	return (
		<section id="contact" className="py-24 max-w-4xl mx-auto px-4">
			<RevealOnScroll width="100%">
				<div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 rounded-3xl p-8 md:p-12 text-center space-y-8 shadow-sm border border-blue-100 dark:border-zinc-700">
					<div className="space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Contacto</h2>
						<p className="text-zinc-600 dark:text-zinc-300 text-lg max-w-xl mx-auto">
							¿Quieres colaborar o platicar sobre un proyecto? Estoy disponible para nuevas oportunidades.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
						<a
							href="mailto:crisscottmendoza@gmail.com"
							className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group"
						>
							<div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
								<Mail size={20} />
							</div>
							<span className="text-zinc-700 dark:text-zinc-300 font-medium">Email</span>
						</a>

						<a
							href="tel:+522227898883"
							className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group"
						>
							<div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
								<Phone size={20} />
							</div>
							<span className="text-zinc-700 dark:text-zinc-300 font-medium">Llamar</span>
						</a>

						<a
							href="https://github.com/crisscott"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-400 hover:shadow-md transition-all group"
						>
							<div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-white group-hover:scale-110 transition-transform">
								<Github size={20} />
							</div>
							<span className="text-zinc-700 dark:text-zinc-300 font-medium">GitHub</span>
						</a>

						<a
							href="https://www.linkedin.com/in/crisscott"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-md transition-all group"
						>
							<div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-700 dark:text-blue-400 group-hover:scale-110 transition-transform">
								<Linkedin size={20} />
							</div>
							<span className="text-zinc-700 dark:text-zinc-300 font-medium">LinkedIn</span>
						</a>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
