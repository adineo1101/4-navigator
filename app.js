function calculateSumOfSquares(addressLat, positionLat, addressLong, positionLong) {

   const deltaLat = addressLat - positionLat;
   const deltaLong = addressLong - positionLong;
 
  
   const sumOfSquares = deltaLat ** 2 + deltaLong ** 2;
 

   return sumOfSquares;
 }
 