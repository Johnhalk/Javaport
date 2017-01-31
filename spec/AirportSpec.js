describe('Airport', function(){
  beforeEach(function() {
    airport = new Airport();
  });
  beforeEach(function() {
    plane = jasmine.createSpyObj('plane', ['land', 'takeoff']);
  })


  describe('when landing it', function(){
    it('stores the plane in the hangar',function(){
      airport.arrive(plane);
      expect(airport._hangar).toContain(plane)
      expect(plane.land).toHaveBeenCalled();
    });
  });

  describe('is expected to', function(){
    it('respond to land', function(){
      expect(typeof airport.land).toBe("function")
    });
  });

  describe('when taking off', function(){
    it('removes a plane from the hangar', function(){
      airport.depart(plane);
      expect(airport._hangar).not.toContain(plane)
      expect(plane.takeoff).toHaveBeenCalled();
    });
  });
});
