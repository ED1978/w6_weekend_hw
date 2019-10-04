# Weekend Homework Recap: DOM

1. What is the return value of `document.createElement`? And what does it accept as an argument?
    It takes in an html element type as a string as an argument and returns a new html element as defined.  It can also take an optional option argument in order to create custom elements.

2. What is the return value of `document.querySelector`? And what does is accept as an argument?
    It also takes an html element type as a string and returns the first instance of the element as defined.

3. What is the return value `document.querySelectorAll`?
    All instances of the element type defined.

4. What is the difference between using `textContent` and `appendChild`?
    textContent modifies the text content of the element it is called on, whereas appendChild appends an element to the the end of another element as defined.

5. What is the event we handle to access the values of a form, and how do we access the values?
    A submit event is handled to access the values of a form, they are accessed using event.target.value;.
