describe('Plane', function(){
  beforeEach(function(){
    plane = new Plane();
  });

  describe('is expected to', function(){
    it('confirm its landed', function(){
      expect(plane._landed).toEqual(true)
    });
  });

  describe('when plane is on ground', function(){
    it('can take off', function(){
      expect(typeof plane.takeoff).toBe("function")
    });

    it('plane can confirm it has taken off', function(){
      plane.takeoff();
      expect(plane._landed).toEqual(false)
    });
  });

  describe ('when plane is in air', function(){
    it('plane can confirm it has landed', function(){
      plane.land();
      expect(plane._landed).toEqual(true)
    });
  });
});
