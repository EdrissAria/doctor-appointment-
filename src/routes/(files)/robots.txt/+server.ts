export async function GET() {
    const content = `
User-agent: *
Disallow: /admin/        # Example of an admin section you don't want crawled (if applicable)
Disallow: /login/        # Example of a login page that shouldn't be crawled

# Sitemap location (if you have one)
Sitemap: https://veltify.org/sitemap.xml
    `
    return new Response(content)
}