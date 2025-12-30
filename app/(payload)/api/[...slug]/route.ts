import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'
import config from '@/payload.config'

const GET_Handler = REST_GET(config)
const POST_Handler = REST_POST(config)
const DELETE_Handler = REST_DELETE(config)

export const GET = async (req: Request, { params }: { params: Promise<{ slug: string[] }> }) => {
    return GET_Handler(req, { params: await params } as any)
}

export const POST = async (req: Request, { params }: { params: Promise<{ slug: string[] }> }) => {
    return POST_Handler(req, { params: await params } as any)
}

export const DELETE = async (req: Request, { params }: { params: Promise<{ slug: string[] }> }) => {
    return DELETE_Handler(req, { params: await params } as any)
}
