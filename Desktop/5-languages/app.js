function greetUser(language) {

  switch(language) {
    case "EN":
      console.log("Hello!");
      break;
    case "RU":
      console.log("Привет!");
      break;
    case "DE":
      console.log("Hallo!");
      break;
    case "FR":
      console.log("Bonjour!");
      break;
    default:
      console.log("Language not supported.");
  }
}


greetUser("RU");  
greetUser("EN");  
greetUser("DE");  
greetUser("IT"); 
