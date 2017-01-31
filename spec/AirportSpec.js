describe('Airport', function(){
  beforeEach(function() {
    airport = new Airport();
  });
  beforeEach(function() {
    spyOn(plane, 'land')
  })


  describe('is expected to', function(){
    it('stores the plane in the hangar',function(){
      airport.arrive(plane);
      expect(airport._hangar).toContain(plane)
      expect(plane.land).toHaveBeenCalled();
    });
  });

  // describe('starts with', function () {
  //   it('an empty array', function() {
  //     expect(typeof airport._hangar).toBe([])
  //   });
  // });

  describe('is expected to', function(){
    it('respond to land', function(){
      expect(typeof airport.land).toBe("function")
    });
  });
});
