the request.)

The API that translates your text into Yoda Speak text requires an API key in order to work. You need to add that to the headers of the request:

var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};

// You don't NEED to define it in a separate variable, but it makes it easier to read and edit.
$http.get("your-url-here", config)...
Response

Learn how to speak like yoda someday, you will. Herh herh herh.  
(Try this out in Postman before writing it in Angular. The API is pretty slow so you may have to wait a few seconds.)

