function Weather() {

};

Weather.prototype.isStormy = function(){
  number = Math.random()
  if (number > 0.7){
    return true;
  } else {
    return false;
  }
};
