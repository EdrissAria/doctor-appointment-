import icons from '$lib/constants/icons';

export type Project = {
	title: string;
	description: string;
	slug: string;
	image: string;
	demoLink?: string;
	githubLink?: string;
	isFreemium?: boolean;
};

export type ProjectDetail = {
	title: string;
	description: string;
	mainImage: string;
	technologies: string[];
	screenshots: string[];
};

export type Service = {
	icon: keyof typeof icons;
	title: string;
	description: string;
};

export type TeamMember = {
	name: string;
	role: string;
	image: string;
	telegram: string;
	whatsapp: string;
	linkedin: string;
	github: string;
};

export type Technology = {
	icon: keyof typeof icons;
	title: string;
};

export type Testimonial = {
	text: string;
	name: string;
	title: string;
	image: string;
};

export type Blog = {
	id: string;
	slug: string;
	title: string;
	date: string;
	description: string;
	version: string;
	image: string;
};
