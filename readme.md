Coding Dojo: Bracket Matching
===

Using [Randori Kata](https://codingdojo.org/RandoriKata/) and [Test Driven Development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development), solve the presented problem.

Problem
---

Write a function that receives a string input and returns whether the brackets in the input match.

Examples:

* `(hello)` matches
* `)` does not match
* `(([])())` matches

The function is defined in `src/bracketMatcher.js` and the corresponding unit tests should be in `src/bracketMatcher.spec.js`.

Local Development
---

A [Dev Container](https://code.visualstudio.com/docs/remote/containers) is specified for this repository. 

You can open the workspace in a container, already configured with all the required tools. See [this guide](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-an-existing-folder-in-a-container) for how to do this.

Once in the container, you can run `npm test` in the terminal to run the unit tests. `npm run watch:test` will run the tests continuously as you update the files.

Dojo Setup
---

Here is an optimal setup for the online coding dojo:

* Join the online meeting and share your screen
* In VS Code, run "Live Share: Start Read-Only Collaboration Session" command
* Run "Live Share: Open mob timer" command
* On the side-bar, open the Test Explorer and "Enable auto-run" from its settings
* Open the two JavaScript files