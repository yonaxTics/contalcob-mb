/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/16/2015
@ Date update: 4/16/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: utils class
**/
var Utils = (function () {
    function Utils() {
    }
    /**
    @ Autor :@yonax73 | yonax73@gmail.com
    @ Version: 0.1
    @ Date : 4/16/2015
    @ Date update: 4/16/2015
    @ Update by: @yonax73  | yonax73@gmail.com
    @ Description: keyboardlistener
    **/
    Utils.keyBoardListener = function () {
        try {
            window.addEventListener('native.keyboardshow', function (e) {
                var deviceHeight = window.innerHeight;
                var keyboardHeight = e.keyboardHeight;
                var deviceHeightAdjusted = deviceHeight - keyboardHeight;
                deviceHeightAdjusted = deviceHeightAdjusted < 0 ? (deviceHeightAdjusted * -1) : deviceHeightAdjusted;
                document.getElementById('page').style.height = deviceHeightAdjusted + 'px';
                document.getElementById('page').setAttribute('keyBoardHeight', keyboardHeight);
            });
            window.addEventListener('native.keyboardhide', function (e) {
                setTimeout(function () {
                    document.getElementById('page').style.height = 100 + '%';
                }, 100);
            });
        }
        catch (ex) {
            alert(ex.message);
        }
    };
    /**
    @ Autor :@yonax73 | yonax73@gmail.com
    @ Version: 0.1
    @ Date : 4/16/2015
    @ Date update: 4/16/2015
    @ Update by: @yonax73  | yonax73@gmail.com
    @ Description: keyBoardScroller
    **/
    Utils.keyBoardScroller = function () {
        var inputs = document.querySelectorAll('input');
        var n = inputs.length;
        for (var i = 0; i < n; i++) {
            var input = inputs[i];
            input.addEventListener('focus', function (e) {
                var inp = this;
                setTimeout(function () {
                    try {
                        if (cordova.plugins.Keyboard.isVisible) {
                            var padding = 15;
                            var targetPosition = parseInt($$(inp).offset().top + padding);
                            var keyboardHeight = parseInt(document.getElementById('page').getAttribute('keyBoardHeight'));
                            if (targetPosition >= keyboardHeight) {
                                padding *= 5;
                                document.getElementById('page-content').scrollTop = targetPosition - padding;
                            }
                        }
                    }
                    catch (ex) {
                        console.log(ex.message);
                    }
                }, 600);
            }, true);
        }
    };
    /**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 4/23/2015
@ Date update: 4/23/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: close popover for framework7
**/
    Utils.closePopoverF7 = function (clazz) {
        try {
            var element = document.getElementsByClassName(clazz)[0];
            var overlay = document.getElementsByClassName('modal-overlay')[0];
            if (element && overlay) {
                element.classList.remove('modal-in');
                element.style.display = 'none';
                overlay.classList.remove('modal-overlay-visible');
            }
        }
        catch (ex) {
            console.log(ex);
            alert(ex.message);
        }
    };
    return Utils;
})();
