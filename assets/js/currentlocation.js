
export function currentlocation(){
    var location = [];

    navigator.geolocation.getCurrentPosition(successCallback);  
	
    function successCallback(position){  
        location.push(position.coords.latitude);  
        location.push(position.coords.longitude);  
    }

    return location;

}

