export const ARRAY_BUFFER: number;
export const DYNAMIC_DRAW: number;
export const ELEMENT_ARRAY_BUFFER: number;
export const FLOAT: number;
export const STATIC_DRAW: number;
export const STREAM_DRAW: number;
export const UNSIGNED_BYTE: number;
export const UNSIGNED_INT: number;
export const UNSIGNED_SHORT: number;
export function getContext(canvas: HTMLCanvasElement, opt_attributes?: any): WebGLRenderingContext;
export function getSupportedExtensions(): string[];