let version = "2.3.4";

let currentVer = "2.2.3"


let verChecker = (i, o) => {
	let v = i.split(".");
  let current = o.split(".");
	let fail,
  		pass,
      not,
      update,
      p = 0,
      w = 0,
      lower = 0,
      middle = 0,
      high = 0



  for(let e = 0; e < 3; e++){


  	if(v[e] > current[e]){
    	console.log( v[e] + " is more than current");

      if(v[2] > current[2]){

      	lower= + 1;

      }

      if(v[1] > current[1]){

        middle = + 1;

      }

      if(v[0] > current[0]){

        high=  + 1;
        not = true;
      }




    }

    else if(v[e] === current[e]){

    	console.log( v[e] + " pass");
      p++

      if(p === 3){
      	pass = true
      }


    }else if(v[e] < current[e]){
    	console.log( v[e] + " is lovwer than current");

    	if(v[2] < current[2]){
      	if(v[1] < current[1]){
        	if(v[0] < current[0]){
      			update = true;
      		}
        }
      }

    }

  }


console.log(`${high}.${middle}.${lower}`);


  if(pass){
  	console.log("you are running the latest version " + currentVer)
  }

  if(update){
    	console.log("unfortunately, "+version+" needs updating to the current version " + currentVer)
    }

  if(not){
    console.log("You are running " + version + " which has not been made")
  }
}

verChecker(version, currentVer)
