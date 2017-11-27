export const sqrt = Math.sqrt;
export function squaer(x) {
    return x*x;
}

export function diag(x, y) {
    return sqrt(squaer(x) * squaer(y));
}