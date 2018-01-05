var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      productsICanEat = products.filter(function(product) {
        return product.containsNuts === false;
      });
      
      productsICanEat = productsICanEat.filter(function(product) {
        return product.ingredients.every(function(ingredient) {
          return ingredient !== "mushrooms";
        });
      });
      

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    
    
    var sum = _.range(0, 1000).reduce(function(a, b) {
      if (b % 3 === 0 || b % 5 === 0) {
        return a + b;
      } else {
        return a;
      }
    });   
    
    
    
    /* try chaining range() and reduce() */
    
    

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    
    
    var mapped = products.map(function(pizza) { return pizza.ingredients; });
    var flattened = [].concat.apply([], mapped);
    var reduced = flattened.reduce(function(ingredientCount, ingredient) {
      ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
      return ingredientCount;
    });
    
    return reduced;

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */

  it("should find the largest prime factor of a composite number", function () {
  
    var findLargestPrimeFactor = function(number) {
      
      var factors = [];
      
      for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
          factors.push(i);
        }
      }
      
      var primeFactors = [];
      
      factors.forEach(function(factor) {
        //if prime add to prime factors
        
        var isPrime = true;
        
        for (var i = 2; i < factor; i++) {
          if (factor % i === 0) {
            isPrime = false;
          }
        }
        
        if (isPrime) {
          primeFactors.push(factor);
        }
        
      });
      
      var result = primeFactors.pop();
      
      return result;
    };
    
    expect(findLargestPrimeFactor(22)).toBe(11);
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
  
    var findLargestPalindrome = function(num1, num2) { 
      var product = num1 * num2;
      
      var palindromes = [];
      
      product = product.toString().split('');
     
      
      product.forEach(function(center, index) {
        var palindrome = [];
        
        var startIndex = index;
        var endIndex = index;
        
        while (startIndex >= 0 && endIndex <= product.length && product[startIndex] === product[endIndex]) {
          if (product[startIndex - 1] === product[endIndex + 1]) {
            palindrome = product.slice(startIndex, endIndex + 1);
          } else {
            palindrome = [center];
          }
          palindromes.push(palindrome);
          startIndex--;
          endIndex++;
        }
        
      });
    var longest = palindromes[0];
    
    
    
    for (var j = 1; j < palindromes.length; j++) {
      if (palindromes[j].length > longest.length) {
        longest = palindromes[j];
      }
    }
    
    return longest.join('');
    
    };
    
    expect(findLargestPalindrome(111, 222)).toBe('24642');
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    
    var isAnswer = false;
    var target = 20;
    
    while (!isAnswer) {
      if (target % 20 === 0) {
        if (target % 19 === 0) {
          if (target % 18 === 0) {
            if (target % 17 === 0) {
              if (target % 16 === 0) {
                if (target % 15 === 0) {
                  if (target % 14 === 0) {
                    if (target % 13 === 0) {
                      if (target % 12 === 0) {
                        if (target % 11 === 0) {
                          isAnswer = true;
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      target++;
    }
    
    return target;
   
    expect(target).toBe(232792560);
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
    
    var squareSumDiff = function(numbers) {
    
      var sumOfNumbers = numbers.reduce(function(a, b) {
        return a + b;
      });
      
      var squareOfSum = sumOfNumbers * sumOfNumbers;
            
      var squares = numbers.map(function(number) {
        return number * number;
      });
      
      var sumOfSquares = squares.reduce(function(a, b) {
        return a + b;
      });
      
      return squareOfSum - sumOfSquares;
    }
  
    expect(squareSumDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(2640);
  });

  it("should find the 10001st prime", function () {
  
    
    var primes = [];
    var number = 1;
    
    while (primes.length <= 10001) {
      
      var isPrime = true;
      for (var i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
      
      if (isPrime) {
        primes.push(number);
      }
      
      number++;
    }
    var answer = primes.pop();
    return answer;
  
    expect(answer).toBe(104743);
  });

});
