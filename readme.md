# dom2dom
<img src="http://blackmiaool.com/dom2dom/preview.gif" width="400"/>

### Install 

```bash
npm i -S dom2dom
```

### Usage

```javascript
import D2D from "dom2dom";

const d2d=new D2D({
    from: $("#input"), to: $("#button"), arrowOptions: {
        strokeStyle: '#4CAF50',
        lineWidth: 3,
    }
});
setTimeout(()=>{
    d2d.destroy();
},2000);
```
