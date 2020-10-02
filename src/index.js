
exports.min = function min (arr) {
  	
  	if (arr == undefined || arr == 0) {
 		return 0;
 	}

	let arr_min = arr[0];
   		 
    for (i = 1; i <=arr.length; i++) {
        if (arr[i] <= arr_min) {
            arr_min = arr[i]; 
        }
    }
 			
  		return arr_min;
}

exports.max = function max (arr) {
  	if (arr==undefined || arr==0) {
 		return 0;
 	}

  	let arr_max = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr_max <= arr[i]) {
            arr_max = arr[i];   
        }
    }
 			
  		return arr_max;
}

exports.avg = function avg (arr) {
		
	if (arr==undefined || arr==0) {
 		return 0;
 	}

	let arr_avg = 0;
	let arr_num = 0;
	let count = 0;

    for (i = 0; i < arr.length; i++) {
        arr_num += arr[i];
        count++;
    }

 	arr_avg = arr_num/count;
  	return arr_avg;
}
