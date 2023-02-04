import CategoryMatrix_ from "../Assets/js/CategoryMatrix"
import {CategoryMatrix} from "../Components/Spaces/AnnonceSpace/AnnonceFilterSpace" 

describe('CategoryMatrix', () => {
  it('Gives the correct ENUM form of the categories in the DATABASE ', () => {
    const result = CategoryMatrix_("Sale");
    expect(result).to.equal("Vente");
  });
});


describe('CategoryMatrix of nums', () => {
    it('Gives the correct ID form of the categories ENUMS in the DATABASE ', () => {
      const result = CategoryMatrix(1);
      expect(result).to.equal("Sale");
    });
  });


