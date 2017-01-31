function Airport() {
  this._hangar = [];

};

Airport.prototype.land = function(){
  return "landed"
};

Airport.prototype.arrive = function(plane){
  this._hangar.push(plane)
  plane.land();
};

Airport.prototype.depart = function(plane){
  this._hangar.pop(plane)
  plane.takeoff();
};
