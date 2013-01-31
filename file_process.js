window.onload = function() {

    var pad = document.getElementById('pad');
    
    //http://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity/3866442#3866442
    function setEndOfContenteditable(contentEditableElement)
    {
        var range,selection;
        if(document.createRange)
        {
            range = document.createRange();
            range.selectNodeContents(contentEditableElement);
            range.collapse(false);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    
    // load the contents every time
    if( typeof localStorage.textpad_buffer != 'undefined') {
        pad.innerHTML = localStorage.textpad_buffer;
    } else {
        localStorage.textpad_buffer = pad.innerHTML;
    }
    
    setEndOfContenteditable(pad);

    function handleWindowBlur() {
        localStorage.textpad_buffer = pad.innerHTML;
    }

    function saveProgress() {
        localStorage.textpad_buffer = pad.innerHTML;
    }

    window.addEventListener("blur", handleWindowBlur);
    window.onbeforeunload = function() {
        saveProgress();
    };

};
