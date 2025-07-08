"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elem = void 0;
const elem = (url, imgSrc, title, color, price, strike, promoClass, sizesStr, sizesArr, redText) => {
    const str = `
<li>
    <div class="thumb-grid item">
        <span class="img">
            <a href="${url}"
                data-hash="">
                <img class="image" src="${imgSrc}"
              alt="${title}" width="500" height="500">
            </a>
            <span
                data-href="${url}"
                data-color="${color}" class="js-qv ">Quick View</span>
        </span>
        <div class="thumb-content">
            <a class="name"
                href="${url}"
                data-hash="">
                <span class="model">${title}</span>
            </a>

            <div class="price-wrap">
                <div class="price">
                    <strike>${strike}</strike>
                    <span id="store_price" class="price ${promoClass}">$${price}</span>
                </div>
            </div>

            <p class="size">
                <span class="thumb-sizes" title="${sizesStr}">
                    Sizes ${sizesArr[0]} to ${sizesArr[sizesArr.length - 1]}
                </span>
            </p>

            include "red-text.html"
            ${redText}

        </div>
    </div>
</li>
`;
    return str;
};
exports.elem = elem;
//# sourceMappingURL=makeSlide-elem.js.map