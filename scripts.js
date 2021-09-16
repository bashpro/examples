let version = "0.2.3";

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
    }

  }


  if(pass){
  	console.log("you are running the latest version " + currentVer)
  }

  if(version < currentVer){
    	console.log("unfortunately, "+version+" needs updating to the current version " + currentVer)
    }

  if(not === true){
    console.log("You are running " + version + " which has not been made")
  }
}

verChecker(version, currentVer)
