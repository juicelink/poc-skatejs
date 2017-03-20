declare module "*.css" {
    // Module with css-loader only (no style-loader)
    interface CssLoaderModule {
        toString() : string;
        locals: {
            [className: string] : string;
        }
    }
    const cssModule: CssLoaderModule;

    export = cssModule;
}