export function getTextColorFromBackgroundColor(
    bgColor: string
) {
    const color = bgColor
        .slice(4, -1)
        .split(',')
        .map(Number);
    // Using the luminance formula for RGB colors
    const luminance =
        (0.299 * color[0] +
            0.587 * color[1] +
            0.114 * color[2]) /
        255;
    return luminance > 0.5 ? 'black' : 'white';
}
