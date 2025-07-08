"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inview = void 0;
const inview = (elem) => {
    $(elem).on('inview', function (event, isInView) {
        if (isInView) {
            let imgs = $(this).find('img');
            $.each(imgs, function (i, val) {
                let src = $(val).attr('data-set');
                if (src) {
                    $(val).attr('src', src);
                }
                $(val).removeAttr('data-set');
            });
        }
    });
};
exports.inview = inview;
//# sourceMappingURL=inview.js.map