function Plane(){
  this._landed = false
};

Plane.prototype.takeoff = function(){
  this._landed = false
};

Plane.prototype.land = function (){
  this._landed = true
};


Plane.prototype.landed = function (){
  return this._landed
}
