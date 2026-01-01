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
    onInit: async (payload) => {
        if (!process.env.BLOB_READ_WRITE_TOKEN) {
            payload.logger.warn('WARNING: BLOB_READ_WRITE_TOKEN is missing locally. Media will fallback to local disk storage (public/media).')
        } else {
            payload.logger.info('Vercel Blob Storage is enabled.')
        }
    },
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
                    admin: {
                        placeholder: 'Describe the image for accessibility',
                    },
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
                    admin: {
                        placeholder: '01',
                    },
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    admin: {
                        placeholder: 'e.g., UI/UX Design',
                    },
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                    admin: {
                        placeholder: 'Describe the service in detail...',
                    },
                },
                {
                    name: 'tags',
                    type: 'array',
                    fields: [
                        {
                            name: 'tag',
                            type: 'text',
                            admin: {
                                placeholder: 'e.g., Figma',
                            },
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
                    admin: {
                        placeholder: 'Project Name',
                    },
                },
                {
                    name: 'client',
                    type: 'text',
                    admin: {
                        placeholder: 'Client Name',
                    },
                },
                {
                    name: 'tech',
                    type: 'text',
                    admin: {
                        placeholder: 'e.g., Next.js, Tailwind',
                    },
                },
                {
                    name: 'outcome',
                    type: 'text',
                    admin: {
                        placeholder: 'Main result or goal achieved',
                    },
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
                    admin: {
                        placeholder: 'e.g., Strategy First',
                    },
                },
                {
                    name: 'content',
                    type: 'array',
                    fields: [
                        {
                            name: 'point',
                            type: 'text',
                            admin: {
                                placeholder: 'Detailed philosophy point...',
                            },
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
                    admin: {
                        placeholder: 'Client testimonial quote...',
                    },
                },
                {
                    name: 'author',
                    type: 'text',
                    required: true,
                    admin: {
                        placeholder: 'Author Name',
                    },
                },
                {
                    name: 'role',
                    type: 'text',
                    required: true,
                    admin: {
                        placeholder: 'e.g., CEO',
                    },
                },
                {
                    name: 'company',
                    type: 'text',
                    required: true,
                    admin: {
                        placeholder: 'Company Name',
                    },
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
                    admin: {
                        placeholder: 'e.g., System Uptime, Global Projects, Lines of Code',
                        description: 'The metric name that will be displayed',
                    },
                },
                {
                    name: 'value',
                    type: 'number',
                    required: true,
                    admin: {
                        placeholder: 'e.g., 99, 142, 850',
                        description: 'The numeric value to display',
                    },
                },
                {
                    name: 'suffix',
                    type: 'text',
                    admin: {
                        placeholder: 'e.g., %, K+, M+',
                        description: 'Optional suffix to append to the value (leave empty if not needed)',
                    },
                },
                {
                    name: 'order',
                    type: 'number',
                    required: true,
                    defaultValue: 0,
                    admin: {
                        placeholder: '0',
                        description: 'Display order (0 = first, 1 = second, etc.)',
                    },
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
                    admin: {
                        placeholder: 'hello@example.com',
                    },
                },
                {
                    name: 'phone',
                    type: 'text',
                    admin: {
                        placeholder: '+1 (234) 567-890',
                    },
                },
                {
                    name: 'location',
                    type: 'textarea',
                    admin: {
                        placeholder: 'Address or City, Country',
                    },
                },
                {
                    name: 'githubUrl',
                    type: 'text',
                    label: 'GitHub URL',
                    admin: {
                        placeholder: 'https://github.com/username',
                    },
                },
                {
                    name: 'linkedinUrl',
                    type: 'text',
                    label: 'LinkedIn URL',
                    admin: {
                        placeholder: 'https://linkedin.com/in/username',
                    },
                },
                {
                    name: 'twitterUrl',
                    type: 'text',
                    label: 'Twitter URL',
                    admin: {
                        placeholder: 'https://twitter.com/username',
                    },
                },
            ],
        },
        {
            slug: 'techstack',
            admin: {
                useAsTitle: 'title',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    admin: {
                        placeholder: 'e.g., FRONTEND',
                    },
                },
                {
                    name: 'description',
                    type: 'text',
                    required: true,
                    admin: {
                        placeholder: 'Short description of the category...',
                    },
                },
                {
                    name: 'order',
                    type: 'number',
                    required: true,
                    defaultValue: 0,
                    admin: {
                        placeholder: '0',
                    },
                },
                {
                    name: 'items',
                    type: 'array',
                    required: true,
                    fields: [
                        {
                            name: 'name',
                            type: 'text',
                            required: true,
                            admin: {
                                placeholder: 'e.g., React',
                            },
                        },
                        {
                            name: 'icon',
                            type: 'text',
                            required: true,
                            admin: {
                                description: 'Emoji or short icon text',
                                placeholder: '⚛️',
                            },
                        },
                        {
                            name: 'desc',
                            type: 'text',
                            required: true,
                            label: 'Description',
                            admin: {
                                placeholder: 'e.g., UI Library',
                            },
                        },
                    ],
                },
            ],
        },
        {
            slug: 'cta',
            labels: {
                singular: 'CTA (Let\'s Talk)',
                plural: 'CTAs (Let\'s Talk)',
            },
            admin: {
                useAsTitle: 'title',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    defaultValue: 'LET\'S TALK',
                    admin: {
                        placeholder: 'LET\'S TALK',
                    },
                },
                {
                    name: 'buttonLabel',
                    type: 'text',
                    required: true,
                    defaultValue: 'SEND AN EMAIL',
                    admin: {
                        placeholder: 'SEND AN EMAIL',
                    },
                },
                {
                    name: 'email',
                    type: 'email',
                    required: true,
                    admin: {
                        placeholder: 'your-gmail@gmail.com',
                        description: 'The email address that the LET\'S TALK button will open in Gmail.',
                    },
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
