import { RevealOnScroll } from "./ui/RevealOnScroll";

export const AboutSection = () => {
	return (
		<section id="about" className="py-20 space-y-8 max-w-3xl mx-auto px-4">
			<RevealOnScroll width="100%">
				<div className="space-y-4">
					<h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white">Sobre mí</h2>
					<p className="text-zinc-600 dark:text-zinc-300 text-center text-lg leading-relaxed">
						Desarrollador Fullstack con más de 5 años de experiencia en integración de sistemas
						empresariales. Especializado en arquitecturas backend con Java EE y Oracle, y en frontend con
						Next.js 14 y TypeScript.
					</p>
				</div>
			</RevealOnScroll>

			<RevealOnScroll width="100%" delay={0.2}>
				<div className="bg-zinc-50 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800">
					<h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Educación</h3>
					<div className="space-y-2">
						<p className="text-zinc-800 dark:text-zinc-200 font-medium">
							Ingeniería en Tecnologías de la Información y Comunicaciones
						</p>
						<p className="text-zinc-600 dark:text-zinc-400">Instituto Tecnológico de Puebla (2014-2019)</p>
						<p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
							Especialidad en Estrategias de Inteligencia de Negocios
						</p>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
