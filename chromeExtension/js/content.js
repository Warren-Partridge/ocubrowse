// setTimeout(function(){ chrome.runtime.sendMessage({ from: 'content', message: 'Information from webpage.' }); }, 3000);

chrome.runtime.sendMessage(
    "foo",
    function( response ) {
        console.log(response);
    } );
    // { from: 'content', message: 'Information from webpage.' });
console.log("yay sent runtime message");