/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/
function toggleHighlight() {
  var act = document.getElementById("change");
  if (act.style.backgroundColor === "gold") {
    act.style.backgroundColor = "white";
  } else {
    act.style.backgroundColor = "gold";
  }
}

/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/
function generateList(array) {
  document.getElementById('c1').innerHTML=array[0]
  document.getElementById('c2').innerHTML=array[1]
  document.getElementById('c3').innerHTML=array[2]
}

/* CHALLENGE 3a
1. Take a `textarea` element as a parameter
2. Count how many characters have been typed into it
3. If it contains > 140 characters set the `aria-invalid="true"` attribute
*/
function validateTweet(textarea) {
  if (textarea.value.length > 140) textarea.setAttribute("aria-invalid", true);
  else textarea.removeAttribute("aria-invalid");
}

/* CHALLENGE 3b
1. Find the textarea with ID "tweet"
2. Whenever a user types into it validate it using the previous function
*/
function validateTweetOnInput() {
  ("tweet").addEventListener("input", () =>validateTweet($("tweet")));
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons() {
  $$(".toggle-button").forEach(button => button.addEventListener("click", () => button.nextElementSibling.classList.toggle("hidden"))
  );
}
