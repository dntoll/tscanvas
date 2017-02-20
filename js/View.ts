export class View {
    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public render() : void {
        var ctx = this.ctx;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 800, 600);
        ctx.fillStyle = "white";
        ctx.fillRect(20, 20, 760, 560);

        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        ctx.stroke();
    }
}