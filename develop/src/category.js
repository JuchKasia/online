import * as cat from './index';
import '../index';
// export const cat = 'category file work';
// console.log('this is file category');
// console.log("from category file "+cat.listCategory);
export function sizeFilter() {
    var way = document.querySelector('.way');
    for (var i = 0; i < cat.sizeLabel.length; i++) {
        var count = 0;
        // console.log(cat.sizeLabel[i]);
        for (var j = 0; j < cat.listCategory.length; j++) {
            // console.log('cat.listCategory[i] '+cat.listCategory[j]==cat.sizeLabel[i].innerHTML)
            if (cat.sizeLabel[i].innerHTML.split(' ')[0] == cat.listCategory[j].size) {
                count++;
            }
        }
        cat.sizeLabel[i].innerHTML = cat.sizeLabel[i].innerHTML.slice(0, 2) + " (" + "".concat(count) + ')';
    }
    if (cat.forLocal.size.size > 0 && way.innerHTML.split(" ")[way.innerHTML.split(" ").length - 1] != "size") {
        way.innerHTML = way.innerHTML + ' size';
    }
    else if (cat.forLocal.size.size == 0 && way.innerHTML.split(" ")[way.innerHTML.split(" ").length - 1] == "size") {
        way.innerHTML = way.innerHTML.split(" ").slice(0, -1).join(' ');
    }
}
export function colorFilter() {
    // const way = document.querySelector('.way');
    for (var i = 0; i < cat.colorLabel.length; i++) {
        var countColor = 0;
        for (var j = 0; j < cat.listCategory.length; j++) {
            if (cat.colorLabel[i].innerHTML.split(' ')[0] == cat.listCategory[j].color) {
                countColor++;
            }
        }
        cat.colorLabel[i].innerHTML = cat.colorLabel[i].innerHTML.split(' ')[0] + " (" + "".concat(countColor) + ')';
    }
    // if(cat.forLocal.color.size>0){
    //   console.log("way.innerHTML ");
    // }
}
