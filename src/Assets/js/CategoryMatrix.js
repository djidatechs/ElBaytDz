
function CategoryMatrixFr  (cat)  {
    console.log({cat})
    let ret = cat
    switch (cat) {
        case 'Sale': ret = "Vente"
        break;
        case 'Exchange': ret = "Echange"
        break;
        case 'Vacation Rent': ret = "Location pour vacances"
        break;
        case 'Rent': ret = "Location"
        break;
    }
    return ret
}
export default CategoryMatrixFr