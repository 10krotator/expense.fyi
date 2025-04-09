import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// import urls from 'constants/url';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getRedirectUrl = () => {
	const isProduction = process.env.NODE_ENV === 'production';
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

	if (isProduction && siteUrl) {
		// Ensure we have https:// prefix
		const baseUrl = siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`;
		return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
	}

	// Development fallback
	return 'http://localhost:3000/';
};
