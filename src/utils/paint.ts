export function paintOnCanvas(
    parent: HTMLDivElement | null,
    canvas: HTMLCanvasElement | null,
    player: HTMLVideoElement | null
) {
    if(parent && canvas && player) {
        const container = parent.getBoundingClientRect();
        const ctx = canvas.getContext("2d");
        canvas.width = container.width;
        canvas.height = container.height;
        if(ctx) {
           ctx.drawImage(player, 0, 0, container.width, container.height);
        }
    }
    return;
}