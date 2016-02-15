s = Snap(800, 620);
var ttlDown = "M39.1,21.9c0.4-0.3-1.7-0.4-4.8-1.5c-3.1-1-15.2-6.9-18.3-8.1S7.4,9.9,2.1,9.9c-1.3,0-2.1,1.3-2,2.7	c0.1,1.6,1.4,2.6,1.9,2.6c6.4,0,14,1.3,18.3,2.7c4.3,1.4,11.4,4.1,14.7,4.3c0.8,0.1,1.5,0.1,2,0.1C38.2,22.2,38.9,22,39.1,21.9z";

var ttlUp = "M38.7,26.5c0.4-0.3-1.7-0.5-5.2-1.2c-3.4-0.7-7.3-1.3-12.5-3.6C15.9,19.5,7.2,11,2.9,10	c-1.4-0.4-2.6,0.6-2.9,1.9c-0.3,1.6,0.6,2.8,1.1,3c3.5,1.2,12.3,7.9,17.3,9.6c5.1,1.6,11.6,2.5,13.4,2.6	C35.6,27.1,38.3,26.9,38.7,26.5z";

var ttlWave = "M37.3,6.5c0.1-0.3-1.8,0-4.8-0.2c-1.5-0.1-5.4-1.6-9.8-1.4C19.2,5,14,7.6,10.4,9.1c-3.5,1.5-7.9,0.8-8.3,0.7	c-2.5,0-2.4,4.1-1.1,4.9c0.6,0.1,3.7,0.8,9.8-1.8c6.8-2.9,10.8-4.9,12.4-5.4C26,6.6,32.6,8,35.5,7.1C36.6,6.9,37.2,6.6,37.3,6.5z";

var ttlDown = "M38.2,46.3c0.4-0.3-1.7-0.4-4.8-1.5c-3.1-1-15.2-6.9-18.3-8.1s-8.6-2.5-13.9-2.5c-1.3,0-2.1,1.3-2,2.7 c0.1,1.6,1.4,2.6,1.9,2.6c6.4,0,14,1.3,18.3,2.7c4.3,1.4,11.4,4.1,14.7,4.3c0.8,0.1,1.5,0.1,2,0.1C37.3,46.6,38,46.5,38.2,46.3z";
var ttlUp = "M37.8,51c0.4-0.3-1.7-0.5-5.2-1.2c-3.4-0.7-7.3-1.3-12.5-3.6C15,43.9,6.3,35.4,2,34.4C0.6,34-0.6,35-0.9,36.3	c-0.3,1.6,0.6,2.8,1.1,3c3.5,1.2,12.3,7.9,17.3,9.6c5.1,1.6,11.6,2.5,13.4,2.6C34.7,51.6,37.3,51.3,37.8,51z";
var ttlWave = "M37.3,6.5c0-0.2-1.8,0-4.8-0.2c-1.5-0.1-5.4-1.6-9.8-1.4C19.2,5,14,7.6,10.4,9.1c-3.5,1.5-7.9,0.8-8.3,0.7	c-2.5,0-2.4,4.1-1.1,4.9c0.6,0.1,3.7,0.8,9.8-1.8c6.8-2.9,10.8-4.9,12.4-5.4C26,6.6,32.6,8,35.5,7.1C36.6,6.9,37.3,6.7,37.3,6.5z";

	var tentacle1 = s.path(ttlDown);
//  var tentacle2 = s.path(ttlUp);
//  var tentacle3 = s.path(ttlWave);
var ttlCount = 3;
var ttl = [];
var iteration = 640;

function tentacle() {
	for (var i = 0; i < ttlCount; i++) {
  	if (i % 2 === 0) {
    	ttl.push(ttlDown);
    } else if ( i % 3 === 0) {
    	ttl.push(ttlUp);
    } else {
    	ttl.push(ttlWave);
    }
  }
}


function tentacle1Flow(){
	it = iteration + 10;
	tentacle1.animate({d: ttlWave}, it, mina.easein, function(){
  	tentacle1.animate({d: ttlUp}, it, mina.easeinout, function(){
      	tentacle1.animate({d: ttlWave}, it, mina.easeinout, tentacle1Flow);
    });
  });
}
function tentacle2Flow(){
	it = iteration - 15;
	tentacle2.animate({d: ttlWave}, it, mina.easeinout, function(){
    	tentacle2.animate({d: ttlUp}, it, mina.easeinout, function(){
	  	tentacle2.animate({d: ttlDown}, it, mina.easeinout, tentacle2Flow)});
  });
}
function tentacle3Flow(){

	tentacle3.animate({d: ttlDown}, iteration + 12, mina.easeinout, function(){
  	tentacle3.animate({d: ttlUp}, iteration + 12, mina.easeinout, function(){
  	tentacle3.animate({d: ttlWave}, iteration + 12, mina.easeinout, tentacle3Flow)});
  });
}
tentacle1Flow();
//tentacle2Flow();
//tentacle3Flow();
