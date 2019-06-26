var consoleString = ''

function makeString () {

 for(i=3; i<=process.argv.length-1; i++) {
   consoleString += process.argv[i]+ ' ' ;
   console.log(process.argv[i]);
 }

 console.log("string:" + consoleString);
}

function checkArgs () {
 if(process.argv[2] == 'show' ) {
   console.log("show...")
   makeString();
 } else if (process.argv[2] == 'actor') {
   console.log("show...");
   makeString();
 }
}

checkArgs();