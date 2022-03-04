//Requiring dependencies

var express = require('express');
//const { get } = require('express/lib/response');
var app = express();



//Starting app server
var port = 5000

var server = app.listen(port, () => {
  console.log('App listening on port %PORT%'.replace('%PORT%',port))
});


//defining check endpoint
app.get('/app', (req,res) => {
    res.status(200).end('200 OK')
})


app.get('/app/echo/:number', (req,res) => {
  res.status(200).json({'message': req.params.number })
})

//endpoint for random flip
app.get('/app/flip', (req,res) => {
    res.status(200).json({ 'flip' : coinFlip()})
})

//endpoint for array of flips
app.get('/app/flips/:number', (req,res) => {
  const arr = coinFlips(req.params.number);

  res.status(200).json({ 'raw' : arr , 'summary' : countFlips(arr)})
})

//endpoint for call against heads
app.get('/app/flip/call/heads', (req,res) => {
  res.status(200).json(flipACoin("heads"))
})

//endpoint for call against tails
app.get('/app/flip/call/tails', (req,res) => {
  let tails = "tails";
  res.status(200).json(flipACoin(tails))
})


//Defining default endpoint 
app.use(function(req, res){
    res.status(404).send('404 Not found')
})






/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */


/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

  function coinFlip() {
    let flip = Math.floor(Math.random()*10);
    
    if(flip%2 == 0){
      return "heads";
    }
    else{
      return "tails";
    }
    
    }
    
    /** Multiple coin flips
     * 
     * Write a function that accepts one parameter (number of flips) and returns an array of 
     * resulting "heads" or "tails".
     * 
     * @param {number} flips 
     * @returns {string[]} results
     * 
     * example: coinFlips(10)
     * returns:
     *  [
          'heads', 'heads',
          'heads', 'tails',
          'heads', 'tails',
          'tails', 'heads',
          'tails', 'heads'
        ]
     */
    
    function coinFlips(flips) {
    var arrofflips = [];
    for (var count = 0; count < flips; count++){
      let flip = Math.floor(Math.random()*10);
      if(flip%2 == 0){
        arrofflips[count] = "heads";
      }
      else{
        arrofflips[count] = "tails";
      }
    }
    return arrofflips; //as a string
    }
    //console.log(coinFlips(10));
    
    /** Count multiple flips
     * 
     * Write a function that accepts an array consisting of "heads" or "tails" 
     * (e.g. the results of your `coinFlips()` function) and counts each, returning 
     * an object containing the number of each.
     * 
     * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
     * { tails: 5, heads: 5 }
     * 
     * @param {string[]} array 
     * @returns {{ heads: number, tails: number }}
     */
    
    function countFlips(array) {
    var length = array.length;
    var heads = 0;
    var tails = 0;
    for(var i=0; i<length; i++){
      if(array[i]=="heads"){
        heads++;
      }
      else{
        tails++;
      }
    }
    const flipscounted = "{ tails: " + tails + "," + "heads: " + heads + " }";
    return flipscounted;
    }
    
    /** Flip a coin!
     * 
     * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
     * 
     * @param {string} call 
     * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
     * 
     * example: flipACoin('tails')
     * returns: { call: 'tails', flip: 'heads', result: 'lose' }
     */
    
    
    function flipACoin(call) {
     /* var flip = Math.floor(Math.random()*10);
      let flipped = null;
      let result = null;
      if(flip%2 == 0){
        flipped = "heads";
      }
      else{
        flipped = "tails";
      }
      */
     let flipped = coinFlip()
     let result = null;
      if(call==flipped){
        result = "win";
      }
      else{
        result = "lose";
      }
    return "{ call: '"+ call + "', flip: '" + flipped + "', result: '" + result + "' }";
    }
    
    
    /** Export 
     * 
     * Export all of your named functions
    */
   
    