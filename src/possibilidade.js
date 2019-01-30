var shadow = $('<div></div>').css({background: 'rgba(100,0,0,0.5)', position: 'absolute'}).appendTo('body');
$(document).on('mousemove', function(e) {
    shadow.hide();

    var x = e.clientX, y = e.clientY,
        dom = $(document.elementFromPoint(x, y));

    if(dom.length < 1)
        return;

    shadow.css({
        display: "block",
        width: dom[0].offsetWidth +"px",
        height: dom[0].offsetHeight +"px",
        top: dom.position().top +"px",
        left: dom.position().left +"px"
   });

   shadow.show();
});


