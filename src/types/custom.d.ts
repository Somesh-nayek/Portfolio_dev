
  // assets.d.ts
declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
declare module "maath/random/dist/maath-random.esm" {
  export function inSphere(array: Float32Array, options: { radius: number }): Float32Array;
}

