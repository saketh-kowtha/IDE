window.addEventListener('load', function(){
    let ul = genTree(["file-1", "file-2", "file-3", {dir1: ["subf-1", "subf-2", {subdir1: ["subsub-1","subsub-2"]}]}])
    document.getElementById('tree-d').appendChild(ul)
    var toggler = document.getElementsByClassName("caret");
    var i;
    for (i = 0; i < toggler.length; i++) {        
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
    }

    function genTree(ele, index = false){
        var ul = document.createElement('ul')
        if(index)
            ul.classList.add('nested')
        else
            ul.classList.add('file-structure')
        ele.map(function(e){
            var li = document.createElement('li')
            if(typeof e == "string"){
                li.appendChild(document.createTextNode(e))
            }
            else if(typeof e == "object"){
                let span = document.createElement('span')
                span.classList.add('caret')
                span.appendChild(document.createTextNode(Object.keys(e)[0]))
                li.appendChild(span)
                li.appendChild(genTree(Object.values(e)[0], true))
            }
            ul.appendChild(li)
        })

        return ul
    }
})
