export interface Tech {
	name: string;
	icon: string;
	category: "Backend" | "Frontend" | "Database" | "DevOps";
	isPrincipal?: boolean;
}

export const techStack: Tech[] = [
	// Backend
	{
		name: "Java",
		icon: "https://cdn.simpleicons.org/openjdk/000000",
		category: "Backend",
		isPrincipal: true,
	},
	{
		name: "Node.js",
		icon: "https://cdn.simpleicons.org/nodedotjs/000000",
		category: "Backend",
	},
	{
		name: "PHP (Laravel)",
		icon: "https://cdn.simpleicons.org/laravel/000000",
		category: "Backend",
	},
	{
		name: "Python (Flask)",
		icon: "https://cdn.simpleicons.org/python/000000",
		category: "Backend",
	},
	{
		name: "NestJS",
		icon: "https://cdn.simpleicons.org/nestjs/000000",
		category: "Backend",
		isPrincipal: true,
	},
	{
		name: "Spring Boot",
		icon: "https://cdn.simpleicons.org/springboot/000000",
		category: "Backend",
	},

	// Frontend
	{
		name: "Next.js",
		icon: "https://cdn.simpleicons.org/nextdotjs/000000",
		category: "Frontend",
		isPrincipal: true,
	},
	{
		name: "React",
		icon: "https://cdn.simpleicons.org/react/000000",
		category: "Frontend",
	},
	{
		name: "TypeScript",
		icon: "https://cdn.simpleicons.org/typescript/000000",
		category: "Frontend",
	},
	{
		name: "Astro",
		icon: "https://cdn.simpleicons.org/astro/000000",
		category: "Frontend",
	},
	{
		name: "Tailwind CSS",
		icon: "https://cdn.simpleicons.org/tailwindcss/000000",
		category: "Frontend",
	},

	// Database
	{
		name: "PostgreSQL",
		icon: "https://cdn.simpleicons.org/postgresql/000000",
		category: "Database",
		isPrincipal: true,
	},
	{
		name: "Oracle",
		icon: "https://cdn.simpleicons.org/oracle/000000",
		category: "Database",
	},
	{
		name: "MySQL",
		icon: "https://cdn.simpleicons.org/mysql/000000",
		category: "Database",
	},
	{
		name: "MongoDB",
		icon: "https://cdn.simpleicons.org/mongodb/000000",
		category: "Database",
	},

	// DevOps
	{
		name: "Docker",
		icon: "https://cdn.simpleicons.org/docker/000000",
		category: "DevOps",
	},
	{
		name: "Git",
		icon: "https://cdn.simpleicons.org/git/000000",
		category: "DevOps",
	},
	{
		name: "Nginx",
		icon: "https://cdn.simpleicons.org/nginx/000000",
		category: "DevOps",
	},
	{
		name: "PM2",
		icon: "https://cdn.simpleicons.org/pm2/000000",
		category: "DevOps",
	},
];

export const categoryGradients: Record<Tech["category"], string> = {
	Backend: "from-blue-500 to-cyan-500",
	Frontend: "from-purple-500 to-pink-500",
	Database: "from-green-500 to-emerald-500",
	DevOps: "from-orange-500 to-red-500",
};
