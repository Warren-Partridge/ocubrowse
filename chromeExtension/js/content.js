// setTimeout(function(){ chrome.runtime.sendMessage({ from: 'content', message: 'Information from webpage.' }); }, 3000);

chrome.runtime.sendMessage(
  {command: "start webgazer"},
    function( response ) {
        console.log(response);
    } );
    // { from: 'content', message: 'Information from webpage.' });
console.log("yay sent runtime message");