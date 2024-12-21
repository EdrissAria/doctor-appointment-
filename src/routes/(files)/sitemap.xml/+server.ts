import { db } from "$src/lib/server";

const baseUrl = 'https://veltify.org';

export async function GET() {

    const pages: any = []

    pages.push({url: '/', priority: 0.8 })
    pages.push({url: '/about', priority: 0.8 })
    pages.push({url: '/projects', priority: 0.8 })
    pages.push({url: '/blogs', priority: 0.8 })
    pages.push({url: '/contact', priority: 0.5 })

    for(let blog of await db('blogs').query().all()) {
        pages.push({priority: 0.5, url: '/blogs/' + blog.slug, lastmod: new Date((blog.updatedAt === 0 ? blog.createdAt : blog.updatedAt)).toISOString().split('T')[0]})
    }

    for(let project of await db('projects').query().all()) {
        pages.push({priority: 0.6, url: '/projects/' + project.slug, lastmod: new Date((project.updatedAt === 0 ? project.createdAt : project.updatedAt)).toISOString().split('T')[0]})
    }
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(
        (page) => `
    <url>
        <loc>${new URL(page.url, baseUrl)}</loc>
        ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
        <changefreq>weekly</changefreq>
        <priority>${page.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'content-type': 'application/xml'
        }
    })
}