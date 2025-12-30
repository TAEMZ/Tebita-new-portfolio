'use server'

import config from '@/payload.config'
import { handleServerFunctions } from '@payloadcms/next/layouts'

export const handleServerFunctionsAction = async (args: any) => {
    return handleServerFunctions({
        ...args,
        config,
    })
}
