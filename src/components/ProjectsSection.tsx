import { motion } from "framer-motion";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { Github, ExternalLink } from "lucide-react";

const projects = [
	{
		title: "Integración de APIs de delivery",
		description:
			"Backend Java EE y Webhooks para conectar DiDi, Rappi y Uber Eats al POS, procesando 50+ pedidos/min.",
		tags: ["Java EE", "Webhooks", "REST API"],
		links: {
			github: "#",
			demo: "#",
		},
	},
	{
		title: "Migración de sistema legacy",
		description: "Reemplazo de Oracle ADF 11 con un frontend Next.js 14 y backend Node.js, orquestado con PM2.",
		tags: ["Next.js", "Node.js", "Oracle"],
		links: {
			github: "#",
			demo: "#",
		},
	},
	{
		title: "CRM integral",
		description: "Aplicación Laravel + MySQL que centralizó contabilidad, nómina y prospectos.",
		tags: ["Laravel", "MySQL", "PHP"],
		links: {
			github: "#",
			demo: "#",
		},
	},
	{
		title: "Automatización de facturación",
		description: "Sistema PHP que generaba XML con addenda y timbraba facturas conectándose a SAP.",
		tags: ["PHP", "XML", "SAP"],
		links: {
			github: "#",
			demo: "#",
		},
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-20 px-4">
			<div className="max-w-5xl mx-auto">
				<RevealOnScroll width="100%">
					<h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
						Proyectos destacados
					</h2>
				</RevealOnScroll>

				<div className="grid gap-8 md:grid-cols-2">
					{projects.map((project, index) => (
						<RevealOnScroll key={index} delay={index * 0.1} width="100%">
							<div className="group h-full bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
								<div className="flex justify-between items-start mb-4">
									<h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
										{project.title}
									</h3>
									<div className="flex gap-2">
										<a
											href={project.links.github}
											className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
										>
											<Github size={20} />
										</a>
										<a
											href={project.links.demo}
											className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
										>
											<ExternalLink size={20} />
										</a>
									</div>
								</div>

								<p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mt-auto">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
};
