import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
    admin: {
        user: 'users',
    },
    plugins: [
        vercelBlobStorage({
            enabled: !!process.env.BLOB_READ_WRITE_TOKEN,
            collections: {
                media: true,
            },
            token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
    ],
    collections: [
        {
            slug: 'users',
            auth: true,
            access: {
                delete: () => false,
                update: () => false,
            },
            fields: [],
        },
        {
            slug: 'media',
            upload: {
                staticDir: path.resolve(dirname, 'public/media'),
            },
            access: {
                read: () => true, // Public read access for images
            },

            fields: [
                {
                    name: 'alt',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            slug: 'services',
            admin: {
                useAsTitle: 'title',
            },
            fields: [
                {
                    name: 'number',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'tags',
                    type: 'array',
                    fields: [
                        {
                            name: 'tag',
                            type: 'text',
                        },
                    ],
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            slug: 'projects',
            admin: {
                useAsTitle: 'title',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'client',
                    type: 'text',
                },
                {
                    name: 'tech',
                    type: 'text',
                },
                {
                    name: 'outcome',
                    type: 'text',
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            slug: 'philosophy',
            admin: {
                useAsTitle: 'title',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'content',
                    type: 'array',
                    fields: [
                        {
                            name: 'point',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
        {
            slug: 'testimonials',
            admin: {
                useAsTitle: 'author',
            },
            fields: [
                {
                    name: 'quote',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'author',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'role',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'company',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            slug: 'metrics',
            admin: {
                useAsTitle: 'label',
            },
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'suffix',
                    type: 'text',
                },
                {
                    name: 'order',
                    type: 'number',
                    required: true,
                    defaultValue: 0,
                },
            ],
        },
        {
            slug: 'contact',
            admin: {
                useAsTitle: 'email',
            },
            fields: [
                {
                    name: 'email',
                    type: 'email',
                    required: true,
                },
                {
                    name: 'phone',
                    type: 'text',
                },
                {
                    name: 'location',
                    type: 'textarea',
                },
                {
                    name: 'githubUrl',
                    type: 'text',
                    label: 'GitHub URL',
                },
                {
                    name: 'linkedinUrl',
                    type: 'text',
                    label: 'LinkedIn URL',
                },
                {
                    name: 'twitterUrl',
                    type: 'text',
                    label: 'Twitter URL',
                },
            ],
        },
    ],
    editor: lexicalEditor({}),
    secret: process.env.PAYLOAD_SECRET || 'fallback-secret',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || process.env.DATABASE_URL || '',
            ssl: {
                rejectUnauthorized: false,
            },
        },
        push: true,
    }),
    sharp,
})
