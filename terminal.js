window.addEventListener('load', function(){
    var cmd_history = []
    var current_cmd = 0
    document.getElementById('terminal').addEventListener('click', function(){
        document.getElementById('terminal-input').focus()
    })

    document.getElementById('terminal-input').addEventListener('keydown',handlePromptKeychange,true);

    document.getElementById('prompt').addEventListener('keydown', function ( e ) {
        if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 'l') ) {
            clearTerminal()
            return false
        }
    });

    function handlePromptKeychange(event){
        if(event.keyIdentifier=='U+000A'||event.keyIdentifier=='Enter'||event.keyCode==13){
            if(event.target.nodeName=='SPAN'){
                event.preventDefault();
                freezeTerminal()
                document.getElementById('history').innerHTML += `<label class="terminal-text">username@hostname ~/home $</label> ${event.target.innerText}<br>`
                cmd_history.push(event.target.innerText)
                event.target.innerText = ''
                current_cmd++
                setTimeout(unFrezeTerminal, 1000)
                return false;
            }
        }
    
        if(event.keyCode==38 || event.keyIdentifier=='Up'){
            if(current_cmd > 0 ){
                current_cmd--
                event.target.innerText = cmd_history[current_cmd]
                setCaretToEnd(document.getElementById('terminal-input'))
            }
        }
    
        if(event.keyCode==40 || event.keyIdentifier=='Down'){
            if(current_cmd < cmd_history.length - 1){
                current_cmd++
                event.target.innerText = cmd_history[current_cmd]
                setCaretToEnd(document.getElementById('terminal-input'))
            }
            else{
                event.target.innerText = ''
            }
        }
    }
    
    function setCaretToEnd(target) {
        alert('p')
        const range = document.createRange();
        const sel = window.getSelection();
        window.range = range
        window.target = target
        window.sel = sel    
        range.selectNodeContents(target);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
        target.focus();
        range.detach(); // optimization
      
        // set scroll to the end if multiline
        target.scrollTop = target.scrollHeight; 
      }

    function freezeTerminal(){
        document.getElementById('prompt').style.display = 'none'
    }

    function unFrezeTerminal(){
        document.getElementById('prompt').style.display = 'block'
        document.getElementById('terminal-input').focus()
    }

    function clearTerminal(){
        document.getElementById('history').innerHTML=''
    }


})


