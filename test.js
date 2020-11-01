// Completed
// Que: 1
// Without using any repetitive statements or any looping constructs (for, while, do-while etc.),
// please complete the following function’s body:

function customPrint(n, message) {
    // Add your code here
      var newMessage = message + '\r';
      console.log(newMessage.repeat(n));
    }
    customPrint(5, 'Hello, World!');
    
    // Sample Input: customPrint(5, “Hello, World!”);
    // Sample Output:
    // Hello, World!
    // Hello, World!
    // Hello, World!
    // Hello, World!
    // Hello, World!
    
    // Higher-order functions
    // Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist. The term comes from mathematics, where the distinction between functions and other values is taken more seriously.
    
    // Higher-order functions allow us to abstract over actions, not just values. They come in several forms.
    
    
    // Que: 2
    // Consider the following snippet:
    let notifications = [
    {message: 'Lorem', read: true},
    {message: 'Ipsum', read: true},
    {message: 'Dolor', read: true},
    {message: 'Sit', read: false},
    {message: 'Amet', read: true}
    ];
    
    let allRead = true;
    
    // You have to set the allRead variable to false using a built-in higher-order function on the
    // `notifications` array. Conditions: a) You cannot use for, while, do-while loops b) You cannot use
    // forEach(), map(), reduce(), filter().

    allRead = notifications.every(({read}) => read);
    
    console.log(allRead);
    
    
    
    // Que: 3
    // Consider the following array:
    let arr = [1, 2, 2, 3, 4, 4, 5];
    
    // Remove the duplicates from the array using as few expressions as possible.
    
    const removeDuplicate = (arr) => {
      let newArr = [];
        arr.map((el) => {
          if (!newArr.includes(el)) {
            newArr.push(el);
          }
        })
        console.log(newArr);
    }
    
    removeDuplicate(arr);
    
    
    
    
    