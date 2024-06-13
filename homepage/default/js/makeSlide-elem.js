var elem = (url, imgSrc, onModel, title, color, price, sizesStr, sizesArr, redText) => {
    var str = `
<div>
    <div class="the-model" style="background-image:url(${onModel})">
        <!--<img src="${onModel}" alt="${title}">-->
    </div>
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
                    <span id="store_price" class="price">$${price}</span>
                </div>
            </div>

            <p class="size">
                <span class="thumb-sizes" title="${sizesStr}">
                    Sizes ${sizesArr[0]} to ${sizesArr[sizesArr.length - 1]}
                </span>
            </p>
            ${redText}

        </div>
    </div>
</div>
`;

    return str;

};

exports.elem = elem;