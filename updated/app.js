import obj from "./Product.js";
const outer = document.querySelector(".outer")
let index= 0;
const data=obj.data;
let len = data.length;

while (index < len) {
    
    const row = document.createElement("div")
    row.className="row"
    let newIndex=createColumns(index,data,row);
    
    index=newIndex; 

    outer.appendChild(row)
    
}

function createColumns(index,data,row){
    for (let col = 0; col < 3; col++) {  
        const iteme=document.createElement("div")
        iteme.className="items"
        const inner=document.createElement("div")
        inner.className="inner" 
        let ind = index + col + index;
            const obj = data[ind];
            for(const attr in obj.data1){
                if(attr === 'image'){
                    iteme.style.backgroundImage = `url(${obj.data1[attr]})`;
                }
                else if(attr==='oldprice'){
                    inner.innerHTML += `<div class="column columnoldprice">${obj.data1[attr]}</div>`;
                }
                else{
                    inner.innerHTML += `<div class="column">${obj.data1[attr]}</div>`;
                }
            }
            const title=document.createElement("div")
            title.className="title"
            title.innerHTML=obj.data2
        inner.appendChild(title)
        iteme.appendChild(inner)
        row.appendChild(iteme)
    }
    len--;
    return index + 1;
}

// <img drc