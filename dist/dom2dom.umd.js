!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.D2D=e()}(this,function(){function t(t){var e=t.getBoundingClientRect();return e.x+=e.width/2,e.y+=e.height/2,e}function e(t,e,i){t.x+=e*Math.cos(i),t.y+=e*Math.sin(i)}var i=function(t){void 0===t&&(t={});var e=t.from,i=t.to;this.arrowOptions=Object.assign({strokeStyle:"#555",lineWidth:3},t.arrowOptions);var o=document.createElement("canvas");document.body.appendChild(o),o.style="position:fixed;left:0;right:0;top:0;bottom:0;height:100%;width:100%;pointer-events:none;",o.height=document.documentElement.offsetHeight,o.width=document.documentElement.offsetWidth;var n=o.getContext("2d");this.from=e,this.to=i,this.canvas=o,this.ctx=n,this.update()};return i.prototype.destroy=function(){this.destroyed||(document.body.removeChild(this.canvas),this.destroyed=!0)},i.prototype.update=function(){this.destroyed||(this.draw(),requestAnimationFrame(this.update.bind(this)))},i.prototype.draw=function(){var e=this.canvas,i=this.ctx,o={from:t(this.from),to:t(this.to)};JSON.stringify(this.preArrowRect)!==JSON.stringify(o)&&(e.height=document.documentElement.offsetHeight,e.width=document.documentElement.offsetWidth,i.clearRect(0,0,e.width,e.height),this.drawArrow(o),this.preArrowRect=o)},i.prototype.drawArrow=function(t){var i,o,n=t.from,a=this.ctx,h=20;i=JSON.parse(JSON.stringify(t.to)),o=JSON.parse(JSON.stringify(n));var r,s,d,c=Math.atan2(i.y-o.y,i.x-o.x),f=Math.tan(c),u=Math.sin(c),m=Math.cos(c);e(o,Math.min((s=o.height/2,d=Math.abs(h/f*u),Math.abs(h/f*((d+s)/d))),function(){var t=o.height/2,e=o.width/2,i=t/Math.abs(m);return t*((e+Math.abs(u*i))/i)}(),(r=Math.abs(h*f*m),Math.abs(h*f*((r+n.width/2)/r)))),c),e(i,function(){var t=i.height/2,e=i.width/2,o=[Math.atan2(t,e),Math.atan2(t,-e),Math.atan2(-t,-e),Math.atan2(-t,e)];return c>=o[0]&&c<o[1]||c>=o[2]&&c<o[3]?Math.abs(t/u):Math.abs(e/m)}(),Math.PI+c),a.strokeStyle=this.arrowOptions.strokeStyle,a.translate(i.x,i.y),a.rotate(Math.PI+c),a.beginPath(),a.lineWidth=this.arrowOptions.lineWidth;var p,l,y=(p=i.x-o.x,l=i.y-o.y,Math.sqrt(p*p+l*l));a.moveTo(0,0),a.lineTo(30,20),a.lineTo(25,5),a.moveTo(25,-5),a.lineTo(30,-20),a.lineTo(0,0),a.lineTo(30,20),a.stroke(),a.beginPath(),a.moveTo(25,5),a.lineTo(y,h),a.lineTo(y,-h),a.lineTo(25,-5),a.stroke()},i});
//# sourceMappingURL=dom2dom.umd.js.map
