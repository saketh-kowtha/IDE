window.addEventListener('load', function(){
    var coding_ground = document.getElementById('code')
    var myCodeMirror = CodeMirror(coding_ground, {
        value: "function myScript(){return 100;}\n",
        mode:  "javascript",
        lineNumbers: true,
    });
    coding_ground.addEventListener('keyup', function(){
        var {line, ch} = myCodeMirror.getCursor()
        document.getElementById('lineNo').innerText = line + 1
        document.getElementById('colNo').innerText = ch
    })
})