declare module 'vite-plugin-imagemin' {
  import type { Plugin } from 'vite'

  export interface VitePluginImageMinOptions {
    gifsicle?: object
    mozjpeg?: object
    optipng?: object
    pngquant?: object
    svgo?: object
    glob?: string | string[]
  }

  export default function imageminPlugin(options?: VitePluginImageMinOptions): Plugin
}
