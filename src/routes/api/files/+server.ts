import { getId } from '$src/lib/server/db/utils';
import fs from 'fs';
import path from 'path';

export async function PUT({ request }) {
    try {
        // Ensure the upload directory exists
        const uploadDir = path.resolve('static/files');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Parse the incoming request
        const data = await request.formData();
        const file = data.get('file');
        const id = data.get('id');

        if (!file) {
            return new Response('No file uploaded', { status: 400 });
        }
        console.log('here 0')

        // Generate a unique filename to avoid collisions
        const fileId = id;
        const filePath = path.join(uploadDir, fileId);

        // Save the file to the uploads directory
       console.log('here 1')
        
        // Save the file directly to the uploads directory
        const buffer = Buffer.from(await file.arrayBuffer());
       console.log('here 2', filePath)

        fs.writeFileSync(filePath, buffer);
        console.log('here 3')


        const body = JSON.stringify({ success: true, id: fileId })
        console.log('return new Response', body)
        return new Response(body, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('File upload error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
