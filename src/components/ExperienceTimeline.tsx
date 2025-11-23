import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./ui/RevealOnScroll";

const experience = [
	{
		role: "Analista Programador",
		company: "Grupo Telnet",
		period: "Ene. 2023 - Actualidad",
		description:
			"Integración de APIs de delivery (Uber Eats, Rappi) con POS en tiempo real usando Java EE y Webhooks. Reducción de latencia en 90% (90s a 10s). Migración de sistema legacy ADF a Next.js + Node.js + Oracle.",
	},
	{
		role: "Desarrollador de Software",
		company: "Criteria Inteligencia de Negocios",
		period: "Ago. 2019 - Dic. 2022",
		description:
			"Desarrollo de CRM integral con Laravel y MySQL. Automatización de facturación electrónica (CFDI) reduciendo el tiempo de procesamiento de 2 horas a 15 minutos.",
	},
];

export const ExperienceTimeline = () => {
	return (
		<section className="py-20">
			<RevealOnScroll width="100%">
				<h2 className="text-3xl font-bold text-center mb-16 text-zinc-900 dark:text-white">
					Experiencia Profesional
				</h2>
			</RevealOnScroll>

			<div className="max-w-3xl mx-auto px-4">
				<div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 space-y-12">
					{experience.map((job, index) => (
						<RevealOnScroll key={index} delay={index * 0.2} width="100%">
							<div className="relative ml-8">
								<span className="absolute -left-[43px] top-0 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-8 ring-white dark:ring-zinc-900 dark:bg-blue-900">
									<Briefcase size={16} className="text-blue-600 dark:text-blue-300" />
								</span>

								<div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
									<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
										<h3 className="text-xl font-bold text-zinc-900 dark:text-white">{job.role}</h3>
										<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 w-fit">
											{job.company}
										</span>
									</div>

									<time className="block mb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
										{job.period}
									</time>

									<p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
										{job.description}
									</p>
								</div>
							</div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
};
