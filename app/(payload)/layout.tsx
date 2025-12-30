import config from '@/payload.config'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import { importMap } from './admin/importMap'
import { handleServerFunctionsAction } from './actions'
import './custom.css'

type Args = {
    children: React.ReactNode
}

const Layout = async ({ children }: Args) => (
    <RootLayout
        config={config}
        importMap={importMap}
        serverFunction={handleServerFunctionsAction}
    >
        {children}
    </RootLayout>
)

export default Layout
