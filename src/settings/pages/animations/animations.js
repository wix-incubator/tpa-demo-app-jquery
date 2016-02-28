define(['$', 'text!./animations.html'], function ($, templateSrc) {
    var $tpl = $(templateSrc);

    setTimeout(function () {
        debugger;
        var $playAnimationBtnCtrl = $tpl.find('#play-animation-btn').getCtrl();
        $playAnimationBtnCtrl.onClick(function () {
            console.log('Play Animation was clicked');
        });
    }, 200);

    return $tpl;
});
