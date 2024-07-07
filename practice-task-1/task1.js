let authorizationStatus="Non-Subscriber";
let access;

switch(authorizationStatus){
    case "Employee":
        access="Dietary Services";
        break;
    case "Enrolled Member":
        access="Dietary services and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        access="Partial access to Dietary services only";
        break;
    default:
        access="No access"
}

if(access==="No access"){
    console.log("You need to enroll or atleast subscribe to avail this facility");
}else{
    console.log("You are allowed :",access);
}
