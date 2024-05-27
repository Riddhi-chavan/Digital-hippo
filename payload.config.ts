import { buildConfig } from "payload/config"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import path from "path"
import { Users } from "./src/collections/Users"
import { Products } from "./src/collections/Products/Products"
import { Media } from "./src/collections/Media"
import { ProductFiles } from "./src/collections/ProductFile"
import { Orders } from "./src/collections/Orders"
  
export default buildConfig({
    serverURL : process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections : [Users , Products , Media , ProductFiles  ,Orders],
    routes  : {
        admin : '/sell'
    },
    admin : {
        user : 'users' ,
        bundler : webpackBundler(),
        meta : {
            titleSuffix  : "- DigitalHippo",
            favicon : "/favicon.ico",
            ogImage : "/thumbnail.jpg",
        }
    } ,
    rateLimit : {
        max : 2000,
    },
    editor  : slateEditor({}) ,
    db : mongooseAdapter({
        url: process.env.MONGODB_URL! ,
    }),
    typescript : {
        outputFile : path.resolve(process.cwd(), "payload-types.ts")
    }
})
