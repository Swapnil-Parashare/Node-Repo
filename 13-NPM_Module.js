//  Now we know working of "Our own Modules" and "In-Built Node.js Modules", lets see NPM Modules.

/************************************************ NPM : Node Package Manager **********************************************************/

/* Basics of NPM :-

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
  
*/


/* Two ways of Installing Node Packages :-

  1]Local Dependencies :- We can use it only in this particular project.
    Syntax : npm install <packageName>
  2]Global Dependencies :- We can use it in any project.
    Syntax : npm install -g <packageName>

*/


/* Importance of 'package.json' File :-

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
                                
   Note : If we are trying to install packages which have there own dependencies then they will also get installed along with it.

   Resource : https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/
                                        
*/


// This is how we use npm installed packages.

const _ = require('lodash');

const items = [1, [2, [3, [4] ] ] ] ;

const new_items = _.flattenDeep(items);                         // Using a functionality provided by 'lodash'

console.log(new_items);

console.log("I am greatful for all the things I have. Thank you god for everything.");


/* Node.js and GitHub :-

1] By Following "Process.txt" our GitHub Repository "Node-Repo" is setup and we have pushed all our code there.
2] But we have not pushed "node_modules" on "GitHub" by putting it inside'.gitignore' folder.
3] How does the user cloning our repository will be able to run this code as all the dependencies are stored inside "node_modules".
4] Well package.json have all the dependencies inside its 'dependencies' property.
5] A single command 'npm install' will install all the dependencies present there.
6] Thus node_module folder will be set-up in user's own workspace.
7] Hence there is no need to push such a huge folder to GitHub. All thanks goes to package.json

Thus package.json has immense importance :- We can share our code without dragging massive "node_modules" folder with us.

*/


/* Nodemon :- 

1]It will watch our files and restart our 'app' for us.
2]We can install it as normal dependencies but here we are installing it as "Depth-Dependency".
3]It is done using command :  "  npm i nodemon -D   "  or  "  npm i --save-dev   " both means the same.(Normally we would have done "npm i nodemonn").
4]Dev-Dependencies    :- Modules which are only required during development.
  Normal Dependencies :- Modules which are required during development as well as runtime.
5]We set-up our command in "package.json" file inside "scripts".
  Now "start" : "node app.js" is set, Hences instead of 'node app.js' we can do 'npm start'.
6]We have also set "dev" : "nodemon app.js", but here instead of 'npm dev' we need to do 'npm run dev'.
7]Very intresting thing happens now once you gave the command 'npm run dev', now 'nodemon' is watching our application.
  If you modify anything you will automatically see output in terminal, it will restart our application for us.
  We are not required to type the command again and again.

 * Fun Fact :'nodemon' in "Node.js" is same as 'liveserver' in "Web-development".

8]Fimally we set "start" : "nodemon app.js" and now just "npm start" is required to start our "Nodemon".
  Note : Press Ctrl + C to stop our Nodemon.

*/

  
/* Uninstalling Packages :-

1] npm uninstall <packageName>. Eg : npm uninstall bootstrp
2] a)Delete whole 'node_modules' folder and also 'package-lock.json' file.
   b)Remove the packages from package.json's 'dependencies' property, which you want to uninstall.
   c)Do npm install
   Thus you will get your new 'node_modules' folder and 'package-lock.json' file  from scratch.

The Second approach is more clear and it should be followed as it clear most of your cached files.

*/


/* Installing Global Packages :-

1]As we know the command : npm install -g <packageName>
  But there may be issues(bugs) with global packages so lets keep it local.
2]'npx' is the feature of 'npm 5.2+ versions' , due to this we are not required to install packages globally.

I am going ahead with my local setup, NO GLOBAL!!! and NO npx!!!.
So I will use "npm start" according to my previous set-up.

*/


/* Importance of package-lock.json file :-

1] As we know our project have dependencies, these dependencies have their 'version'.
2] Some 'dependencies' have there own dependencies and these dependencies have there 'version' too.
3] 'package-lock.json' have the version of all the 'dependencies'. Not only those which our project is using,
    but also of those which our 'dependencies' are using.

Version Meaning : 4.17.21  :- MajorChange.MinorChange.BugFix

*/