import type { Plugin as Plugin_2 } from 'vite';

export declare const defaultOptions: {
    prefix: string;
};

declare function injectStaticResources(isBuild: boolean, options?: Options): Plugin_2;
export default injectStaticResources;

export declare type Options = {
    prefix: string;
};

export { }
