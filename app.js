//  Now we know working of "Our own Modules" and "In-Built Node.js Modules".

/************************************************ NPM : Node Package Manager **********************************************************/

/*
  Notes :-

  NPM :- Node Package Manager. It is installed along with Node.js

  NPM enables us to do following things :-  1]Reuse our own code in other projects.
                                            2]Use code written by other developers.
                                            3]Share our own solution with other developers.
 
  Naming :- 1]A reusable code is called as "Package".
            2]"Package" is a folder that contains Javascript code.
            3]Other names are 'Modules' and 'Dependencies'.
            4]It short it is a "Sharable JavaScript Code".

  * No quality control in NPM Registry.
  * Fun Fact :- NPM of Node.js is same as PIP of Python.
   
  Two ways of Installing Node Packages :-
  1]Local Dependencies :- We can use it only in this particular project.
    Syntax : npm install <packageName>
  2]Global Dependencies :- We can use it in any project.
    Syntax : npm install -g <packageName>

  Important :- 
  package.json : It is the manifest file that stores all the important information about our project.
  It can be created by 3 ways :- 
  1] Manual Approach - Create package.json in root and create all the properties. (It is very time consuming.)
  2] Semi-Automated  - npm init (Step by Step questions will be asked to set properties, you can answer or skip it by pressing enter).
  3] Fully-Automated - npm init -y (Everything will be automatically set as "Default")
  
  Observation Points :-
  1] When we install any npm package, we can see it inside 'package.json' file in "dependencies" property.
  2] Node.js also creates a "node_modules" Folder in which all the dependencies are stored.

  Process :-
  1] 'npm init -y' :- This creates package.json file.
  2] Install npm packages eg 'npm i lodash' :-1] You can see it in package.json inside 'dependencies'.
                                              2] Node.js create seprate folder 'node_modules' in which all the dependencies are stored.
                                
   * If we are trying to install packages which have there own dependencies then they will also get installed along with it.

*/


// This is how we use npm installed packages.
const _ = require('lodash');

const items = [1, [2, [3, [4] ] ] ] ;

const new_items = _.flattenDeep(items);                         // Using a functionality provided by 'lodash'

console.log(new_items);



/* 

Node.js and GitHub :-

1] By Following "Process.txt" our GitHub Repository "Node-Repo" is setup and we have pushed all our code there.
2] But we have not pushed "node_modules" on "GitHub" by putting it inside'.gitignore' folder.
3] How does the user cloning our repository will be able to run this code as all the dependencies are stored inside "node_modules".
4] Well package.json have all the dependencies inside its 'dependencies' property.
5] A single command 'npm install' will install all the dependencies present there.
6] Thus node_module folder will be set-up in user's own workspace.
7] Hence there is no need to push such a huge folder to GitHub. All thanks goes to package.json

Thus package.json has immense importance :- We can share our code without dragging massive "node_modules" folder with us.
*/