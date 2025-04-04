import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const api = axios.create({
	baseURL: "/api",
	headers: {
		"Content-Type": "application/json",
	},
});
