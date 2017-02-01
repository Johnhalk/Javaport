function Airport() {
  this._hangar = [];
  this._maxCapacity = 50;

};

Airport.prototype.land = function(){
  return "landed"
};

Airport.prototype.arrive = function(plane){
      weather.isStormy
  if (weather.isStormy === true) {console.log("Plane can not land")}
  else {  this._hangar.push(plane)
          plane.land();
  };
};

Airport.prototype.depart = function(plane){
      this._capacityReached
      weather.isStormy
  if (weather.isStormy === true) {console.log("Plane can not take off")}
else {  this._hangar.pop(plane)
        plane.takeoff();
};

Airport.prototype.changeCapacity = function(max){
  this._maxCapacity = max
};

Airport.prototype._capacityReached = function (){
  if (this._hangar >= this._maxCapacity)
      {throw new Error ("Airport is at maximum capacity, can not land")}
  else { return false

  }
};

};
