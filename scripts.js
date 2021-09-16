let version = "0.1.1";

let currentVer = "0.1.4"

let verChecker = (i, o) => {
	let v = i.split(".");
  let current = o.split(".");
  let fail;

  for(let e = 0; e < 3; e++){

  	if(v[e] > current[e]){
    	console.log( v[e] + " is less than current");
    }
    if(v[e] === current[e]){
    	console.log( v[e] + " pass");
    }

    if(v[e] < current[e]){
    	console.log( v[e] + " is lovwer than current");
      let fail = true;
    }


  }

  if(fail){
    console.log("unfortunately you are not on the current version " + currentVer)
  }

}

verChecker(version, currentVer)
