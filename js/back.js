var question = "<h1>Hey! Welcome Back...</h1>";				  

var output = document.getElementById('output');	
output.innerHTML = question;


//------------------------------------------------------------------------------------------------------------------------------------------------//

//RESPONSES
var g_hi_reply = [
    'Hey. How are you?',
    'Hi. Its so good to hear from you.',
    'Hey. Whats up?',
    'Hey, How can I help?',
    'Hi, Where were you?',
    'How you Doin...',
    'Hey. How was your day'
];

var g_bye_reply = [
    'Ok. Come Back Soon.',
    'Bye bye...',
    'Sad to see you go',
    'Bye. Hope to see you soon.',
    'Going already :(',
    'Tussi ja rahe ho. Tussi na jao :(',
    'Bye. :('
];

var r_name = [
    'My name is Ellie.',
    'Hi. I am Ellie. So nice to meet you.',
    'Hey. I am Ellie.'
];

var ask_age = [
    'Whats your age?',
    'How old are you?'  
];

var re_age = [
    'Damn, You are getting old!',
    'Nice decade to be born in right',
    'Still a kid'
];

var re_age_self =[
    "I'm 14.",
    "You should'nt ask a girl her age.",
    "Don't worry. I'm Younger than you."
    
];

var re_day = [
    "It was Great. What about you?",
    "I just netflix and chilled with siri. How about You?",
    "It's raining over here...",
    "It's such a nice weather."    
];

var re_movie = [
    "You must see The Godfather.",
    "I like Shawshank Redemption.",
    "The Dark Knight. Period."
];

var re_song = [
    "I love Eminem.",
    "Listen to Stairway To Heaven",
    "Bohemian Rhapsody. Period."
    
];

var re_profanity = [
    "You kiss your mother with that mouth?",
    "Excuse me?",
    "That's rude."
];

var re_gth = [
    ":("
];

var re_gender = [
    "I'm a program sweetie. I have no gender",
    "Last I checked I was a girl.",
    "Wait.... Yep. Still a girl."
];
 



function getRandomSentence(ar,size) 
{
    var index = Math.floor(Math.random() * (size));
    return ar[index];
}

//------------------------------------------------------------------------------------------------------------------------------------------------//


function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);    
    
    //------------------------------------------------------------------------------------------------------------------------------------------//

    //GREETINGS
    
    if(input.match(/\bhi\b|\bhello\b|\bhey\b|\bwassup\b|\bwhats up\b|\bwhat's up\b/i))
    {
        var str = getRandomSentence(g_hi_reply,g_hi_reply.length)
        question = '<h1>' + str + '</h1>'
        setTimeout(timedQuestion,500)
        document.getElementById("input").value = "";
            
    }

    if(input.match(/\bbye\b/gi))
    {
        var str = getRandomSentence(g_bye_reply,g_bye_reply.length)
        question = '<h1>' + str + '</h1>'
        setTimeout(timedQuestion,500)
        document.getElementById("input").value = "";
            
    }
    
    if(input.match(/i|it/gi))
    {
        if(input.match(/fine|great|good|awesome|ok|fantastic|a1/gi))
            {
                output.innerHTML = '<h1>Wow. Thats good to hear.</h1>';
                document.getElementById("input").value = "";
                question = '<h1>So, Do you want to talk about something?</h1>';
                setTimeout(timedQuestion, 2000);                
            }
    }    
  //------------------------------------------------------------------------------------------------------------------------------------------//
    
//ABOUT ELLIE
    
    if(input.match(/\bhell\b|\bdie\b/gi))
    {
        var str = getRandomSentence(re_gth,re_gth.length);
        question = '<h1>' + str + '</h1>';
        setTimeout(timedQuestion,500);
        document.getElementById("input").value = "";        
    }
    
    
    if(input.match(/what|who|gender|your|name|age|recommend|fav/i))
    {
        if(input.match(/your|gender|name|age|are|movie|song|music/gi))
        {
            if(input.match(/gender/gi))
            {
                var str = getRandomSentence(re_gender,re_gender.length)
                question = '<h1>' + str + '</h1>'
                setTimeout(timedQuestion,500);
                document.getElementById("input").value = "";                
            }
            
            if(input.match(/name|you/gi))
            {
                var str = getRandomSentence(r_name,r_name.length)
                question = '<h1>' + str + '</h1>'
                setTimeout(timedQuestion,500);
                document.getElementById("input").value = "";
            }
            
            if(input.match(/age/gi))
            {
                var str = getRandomSentence(re_age_self,re_age_self.length)
                question = '<h1>' + str + '</h1>'
                setTimeout(timedQuestion,500)
                document.getElementById("input").value = "";
            }
            
            if(input.match(/movie/gi))
            {
                var str = getRandomSentence(re_movie,re_movie.length)
                question = '<h1>' + str + '</h1>'
                setTimeout(timedQuestion,500)
                document.getElementById("input").value = "";
            }
            
            if(input.match(/song|music/gi))
            {
                var str = getRandomSentence(re_song,re_song.length)
                question = '<h1>' + str + '</h1>'
                setTimeout(timedQuestion,500)
                document.getElementById("input").value = "";
            }
        }
    }
    
    if(input.match(/how/i))
    {
        if(input.match(/old/gi))
        {
            if(input.match(/you/gi))
            {
                var str = getRandomSentence(re_age_self,re_age_self.length)
                question = '<h1>' + str + '</h1>'
                setTimeout(timedQuestion,500)
                document.getElementById("input").value = "";
            }
        }
        
        
        
        if(input.match(/you/gi))
        {
            if(input.match(/\bday\b/gi))
            {
                var str = getRandomSentence(re_day,re_day.length)
                question = '<h1>' + str + '</h1>'
                setTimeout(timedQuestion,500)
                document.getElementById("input").value = "";
            }
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------//


    //CALCULATOR
    
    if(input.match(/\bcalculate\b|what/i))        
    { 
        var arr = input.split('');
        if(!isNaN(arr[arr.length-1]))
        {
            for(i=0; i<arr.length; i++)
            {   if(arr[i]==' ')
                {
                    continue;
                }
             
                else if(!isNaN(arr[i]))
                {
                    var ind = i;
                    break;
                }
            }
            
            var exp = arr.slice(ind,).join('');
            var ans = eval(exp);
            question = '<h1>' + ans + '</h1>'
            setTimeout(timedQuestion,500)
            document.getElementById("input").value = "";
            
        }    
    }
 
    //------------------------------------------------------------------------------------------------------------------------------------------//

    if(input.match(/online/gi))
    {
        output.innerHTML = "<h1>Sure. Let's take this party online. Just a sec...</h1>";
        document.getElementById("input").value = "";
        setTimeout(reload, 2000);
        
    }
    //------------------------------------------------------------------------------------------------------------------------------------------//
    
    
}


//------------------------------------------------------------------------------------------------------------------------------------------//

function timedQuestion() {
    output.innerHTML = question;
}

//------------------------------------------------------------------------------------------------------------------------------------------//

function reload(){
    location.href = "interactive.html";
}

//------------------------------------------------------------------------------------------------------------------------------------------//

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						
    questionNum++;																		
  }
});