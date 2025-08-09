function miniView()
{
    document.getElementById("imgs").remove();
    document.getElementById("as").remove();

    document.getElementById("box").style.justifyContent="center";
    let childs = document.getElementById("box").children;

    let good;
    let random = new Random();
    do good = random.get(childs.length-1);
    while( childs[good].innerHTML == "" );

    for(let i =0;i<good;i++) {  childs[0].remove(); }
    while(childs.length>1) {  childs[1].remove(); }
}

function load()
{
    if(frameElement.getAttribute("miniView")) miniView();
}

/*OLD with miniItems const;

const miniItems = 1;
function miniView()
{
    document.getElementById("box").style.flexWrap="nowrap";

    let childs = document.getElementById("box").children;

    let goods=[];
    let good;
    let random = new Random();
    for(let i =0;i<miniItems;i++)
    {
        let good;
        let guard=20;
        do 
        {
            good = random.get(childs.length-1);
            guard--;  if(guard<0) break;
        }
        while( childs[good].innerHTML == "" || goods.includes(good));
        goods.push(good);
    }

    for(let i =0;i<childs.length;i++)
    {
        if(!goods.includes(i)) childs[i].style.display="none";
    }
}
*/