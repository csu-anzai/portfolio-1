describe("Site", function() {
  var Site = require('../lib/Site');
  var site;

  beforeEach(function() {
    site = new Site();
  });

  it("Devrait avoir accés au fichier site.yml", function() {
    expect(site.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

});
