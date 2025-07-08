"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tracking = void 0;
const tracking = (elem, id) => {
    let a = $(elem);
    $.each(a, function (j, val) {
        $(val).addClass('hp-url').attr({
            'data-page': 'home page',
            'id': id
        });
    });
};
exports.tracking = tracking;
//# sourceMappingURL=tracking.js.map