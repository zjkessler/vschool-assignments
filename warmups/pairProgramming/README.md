MENU
Dashboard
Outside Resources
Homework
Exercises
Pre-Course
Angular
Bootstrap
CSS
Javascript
HTML
jQuery
Mongo
Node
Tools
Warmups
Career
MEAN Stack
Authentication
Intro
Class Instruction
SUBSCRIBE
V School Web DevelopmentMENU
Pair Programming
11 OCTOBER 2016
In this exercise you will be pair programming to create a function that performs a specific behavior.

These are worth reading:

Here is a great guide and reference to Pair Programming. 
And another about the benefits of pair programming.

Pair Programming
Pair programming is a very efficient way to create quality code. In pair programming both developers benefit and learn from each other. It is a process that has built-in constant code review. It encourages more thoughtful planning, programming, and helps build better communications skills. It also generally encourages young developers to reflect on programming as a true craft that can be honed and improved on.

In pair programming, two programmers are assigned to jointly produce one artifact (design, algorithm, code, etc.). The two programmers are like a coherent, intelligent organism working with one mind, responsible for every aspect of this artifact. One person is typing or writing, the other is continually reviewing the work. But, both are equal participants in the process. It is not acceptable to say or think things such as, “You made an error in your design.” or “That defect was from your part.” Instead, “We screwed up the design.” or, better yet, “We just got through the test with no defects!” Both partners own everything.

Exercises
Find a partner and complete the following 2 exercises. Take turns being the one who types.

#1 Steam Roller
Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {  
  // I'm a steamroller, baby
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);  
// returns [1, 2, 3, [[4]]];
Here is a helpful link: Array.isArray()

#2 Pair Wise
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index    0   1   2   3   4  
Value    7   9   11  13  15  
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3  
9 + 11 = 20 → Indices 1 + 2 = 3  
3 + 3 = 6 → Return 6  
