let version = "0.1.4";

let currentVer = "0.2.3"


let verChecker = (i, o) => {
	let v = i.split(".");
  let current = o.split(".");
	let fail,
  		pass,
      not,
      p = 0


  for(let e = 0; e < 3; e++){

  	if(v[e] > current[e]){
    	console.log( v[e] + " is more than current");
      not = true


    }else if(v[e] === current[e]){

    	console.log( v[e] + " pass");
      p++

      if(p === 3){
      	pass = true
      }


    }else if(v[e] < current[e]){
    	console.log( v[e] + " is lovwer than current");
      fail = true;
    }

  }

  if(fail === true){
  	console.log("unfortunately, "+version+" needs updating to the current version " + currentVer)
  }else{
  	//console.log("you are not on the current version " + currentVer)
  }

  if(pass){
  	console.log("you are running the latest version " + currentVer)
  }

  if(not === true){
    console.log("You are running " + version + " which is not supported")
  }else{
  	//console.log("you are on the current version " + currentVer)
  }

}

verChecker(version, currentVer)
