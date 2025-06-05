import { MetadataRoute } from 'next';
import { siteConfig } from './metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/terms',
    '/privacy',
    '/cookies',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 