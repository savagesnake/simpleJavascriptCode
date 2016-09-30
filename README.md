# Simple Javascript code samples
    This are some simple Javascript code

### Phrase generator
[js file](js/phraseGenerator.js)
  > create a function that generate a random phrases,
    create three literal arrays,
    randomly generate number based on the arrays length,
    use the random number to select the array value and
    concatenate the values to create a random phrase

### Array Iteration

[ js file ](js/arrayIteration.js)

    Use for loop to access array vales and index and print to console

* Display all of the values on a array

  pseudocode

  <strong> DECLARE </strong> a variable highestValue and set it to zero <br/>
  <strong> FOR </strong> : var i = 0; i < array.length; i++ <br/>
  <strong> DISPLAY </strong> the array values array[i]<br/>
  <strong> IF </strong> array[i] > highestValue <br/>
  <strong> SET </strong> highestValue == array[i]<br/>
  <strong> END IF </strong> <br>
  <strong> END FOR </strong> <br>
  <strong> DISPLAY </strong> highestValue

* Display all top values index

 <strong> DECLARE </strong> a array topValuesIndex and set it to empty array <br/>
 <strong> FOR </strong> : var i = 0; i < array.length; i++ <br/>
 <strong> IF </strong> highestValue === topValuesIndex <br/>
 <strong> ADD </strong> push i to topValuesIndex <br >
 <strong> END IF </strong> <br >
 <strong> END FOR </strong>  <br>
 <strong> DISPLAY </strong> topValuesIndex

[js file](js/arrayIterationRefactor.js)

      Refactor code to use functions to make code more reusable  

* user a second array to bind the best score

[js file](js/twoArrayIteration.js)

  pseudocode

  ** FUNCTION ** getBestScoreValue(score,costs,highScore);<br/>
  <strong> DECLARE </strong> variable cost and set to 100 <br/>
  <strong> FOR </strong> : var i = 0; i < array.length; i++ <br/>
  <strong> IF </strong> array[i] === highScore <br/>
  <strong> IF </strong> score[i] < bestScore <br/>
  <strong> SET </strong> index to i  <br >
  <strong> SET </strong> bestScore to bestScore[i]  <br >
  <strong> END IF </strong> <br >
  <strong> END IF </strong> <br >
  <strong> END FOR </strong>  <br>
  <strong> RETURN </strong> index
