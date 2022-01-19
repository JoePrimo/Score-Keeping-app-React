var expect = require('chai').expect;
import Provider from "../components/Contex/index";


  describe('playerCount', () => {
    const provider = new Provider();
    const playerCount = provider.state;
    it('Should have a player count of four', function () {
      expect(playerCount).to.be.eql(4);
    });
});