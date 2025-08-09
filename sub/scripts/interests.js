function load()
{
    let chi = document.getElementById("starts").children;

    for(let i =1;i<chi.length;i++)
    {
        chi[i].addEventListener("click",function (){focus(chi[i].innerText)});
    }

    document.getElementById("close").addEventListener("click",unfocus);
    document.getElementById("close").style.display="none";
}

function focus(emoji)
{
    document.getElementById("close").style.display="block";
    document.getElementById("starts0").style.display= "none";

    const collection = document.getElementById("starts").children;
    let id = 1;
    for (let i = 1; i < collection.length; i++) 
    {
        if(collection[i].innerHTML!=emoji) collection[i].style.display = "none";
        else id= i;
    }

    const collection1 = document.getElementById("ends").children;

    for (let i = 1; i < collection1.length; i++) 
    {
        if(i != id) collection1[i].style.display = "none";
    }

    document.getElementById("content").src="sub-interests/"+emoji+".html"

}

function unfocus()
{
    document.getElementById("close").style.display="none";
    document.getElementById("starts0").style.display= "flex";

    const collection = document.getElementById("starts").children;
    for (let i = 1; i < collection.length; i++) 
    {
        collection[i].style.display = "flex";
    }

    const collection1 = document.getElementById("ends").children;
    for (let i = 1; i < collection1.length; i++) 
    {
        collection1[i].style.display = "block";
    }

    document.getElementById("content").src="sub-interests/info.html"
}