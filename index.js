function sumSqrt(a,b){
    return Math.sqrt(a*a+b*b);
}
function getBoundingRect(dom){
    const rect=dom.getBoundingClientRect();
    rect.x+=rect.width/2;
    rect.y+=rect.height/2;
    return rect;
}
class Fdtd {
    constructor({ from, to }) {
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        canvas.style = "position:fixed;left:0;right:0;top:0;bottom:0;height:100%;width:100%;pointer-events:none;"
        canvas.height = document.documentElement.offsetHeight;
        canvas.width = document.documentElement.offsetWidth;
        // canvas.width="10vh";
        const ctx = canvas.getContext('2d');
        this.from = from;
        this.to = to;
        function sumSqrt(a, b) {
            return Math.sqrt(a * a + b * b);
        }        
        
        this.canvas = canvas;
        this.ctx = ctx;
        this.update();
    }
    update(){
        this.draw();
        requestAnimationFrame(this.update.bind(this));
    }
    draw() {
        const canvas = this.canvas;
        const ctx = this.ctx;
        const arrowRect = {
            from: getBoundingRect(this.from), to: getBoundingRect(this.to)
        };


        if (JSON.stringify(this.preArrowRect) === JSON.stringify(arrowRect)) {
            return;
        }
        canvas.height = document.documentElement.offsetHeight;
        canvas.width = document.documentElement.offsetWidth;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        function makeBias(pos,len,angle){
            pos.x+=len*Math.cos(angle);
            pos.y+=len*Math.sin(angle);
        }
        function drawArrow({ to, from }) {
            const tailY = 20;

            let toP, fromP;
            toP=JSON.parse(JSON.stringify(to));
            fromP=JSON.parse(JSON.stringify(from));

            const angle=Math.atan2((toP.y- fromP.y),(toP.x- fromP.x ));
            let biasY=Math.abs(tailY/Math.tan(angle)*Math.sin(angle));
            let biasX=Math.abs(tailY/Math.tan(angle)*Math.cos(angle));

            const ratio=(biasY+from.height/2)/biasY;
            makeBias(fromP,Math.abs(tailY/Math.tan(angle)*ratio),angle);



            ctx.translate(toP.x, toP.y );
            ctx.rotate(Math.PI+angle)
            ctx.beginPath();
            ctx.lineWidth = 3;
            // ctx.lineTo(from.x+from.width/2,from.y+from.height/2);
            // ctx.lineTo(to.x+to.width/2,to.y+to.height/2);
            const x1 = 30;
            const y1 = 20;
            const x2 = 25;
            const y2 = 5;
            
            const tailX = sumSqrt(toP.x - fromP.x , toP.y - fromP.y );
            ctx.moveTo(0, 0);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.moveTo(x2, -y2);
            ctx.lineTo(x1, -y1);
            ctx.lineTo(0, 0);
            ctx.lineTo(x1, y1);
            ctx.stroke();


            ctx.beginPath();
            ctx.moveTo(x2, y2);
            ctx.lineTo(tailX, tailY);
            ctx.lineTo(tailX, -tailY);
            ctx.lineTo(x2, -y2);
            ctx.stroke();
        }
        drawArrow(arrowRect);
        this.preArrowRect= arrowRect;        
    }
}
