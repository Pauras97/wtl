var ifr=document.getElementById('youriframe') ;
function go_get()
{   
    var search_field = document.getElementById('query').value;
    //----ajax
    var form_data = new FormData();
    form_data.append('input',search_field);
    form_data.append('output','NULL');
    console.log(search_field);
    
    setTimeout(function() {

            $.ajax({
               type: "POST",
               url: "http://localhost:8888/app",
               data: form_data,
               cache: false,
               contentType: false,
               processData: false,
               dataType: 'json',
               success: function (response) {
                   console.log("successful");
               },
               error: function (response) {
               }
            });

        },0);
    //-----
    
    pexit = new RegExp("exit","i");
    
    pimage = new RegExp("image|images|photo|photos|pic|pics|picture|pictures","i");

    plocation = new RegExp("location|locate|map","i");
    
    pnews = new RegExp("news","i");
    pindia = new RegExp("india","i");
    pworld = new RegExp("world", "i");
    
    pplay = new RegExp("play|video|music|song|songs","i");

    psearch = new RegExp("search","i");

    pwiki = new RegExp("information|info","i");


//------------------------------------------------------------------------------------------------------------------------------------------------//
    
    //EXIT

    if(pexit.test(search_field))
    {
        setTimeout(reload, 1000);
    }
    
//------------------------------------------------------------------------------------------------------------------------------------------------//
    
    //IMAGES
    
    else if(pimage.test(search_field))
    {
        var base_url = 'https://duckduckgo.com/?q=';
        re = /\bfor\b|\babout\b|\bon\b|\b of \b/i;
        try{
            var ext = search_field.match(re).toString();
            ind = ext.length;
            var str = search_field.substring(search_field.indexOf(ext)+ind);
            var target_url = base_url + str + '&t=h_&iax=1&ia=images';
            ifr = document.getElementById('youriframe');
            ifr.src = target_url;
        }
        catch(err){
            var ext = search_field.match(pimage).toString();
            ind = search_field.indexOf(ext);
            var str = search_field.substring(0,ind);
            var target_url = base_url + str + '&t=h_&iax=1&ia=images';
            ifr = document.getElementById('youriframe');
            ifr.src = target_url;
        }
        
        document.getElementById("query").value = "";
        return false;   
    }
    
//------------------------------------------------------------------------------------------------------------------------------------------------//

    //LOCATION
    
    else if(plocation.test(search_field))
    {
        var base_url = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAM4TgXN3CNEmQs0QrBX4VOmx1kk3Ty34Y&q=';
        var target_url = base_url + search_field
        ifr = document.getElementById('youriframe');
        ifr.src = target_url;
        document.getElementById("query").value = "";
        return false;
    }
//------------------------------------------------------------------------------------------------------------------------------------------------//

    //NEWS
    
    else if(pnews.test(search_field))
    {
        if(pindia.test(search_field))
        {
            var target_url = 'http://timesofindia.indiatimes.com/home/headlines';
            ifr = document.getElementById('youriframe');
            ifr.src = target_url;
            document.getElementById("query").value = "";
            return false;
        }
        else if(pworld.test(search_field))
        {
            var target_url = 'http://www.bbc.com/news/world';
            ifr = document.getElementById('youriframe');
            ifr.src = target_url;
            document.getElementById("query").value = "";
            return false;
        }
        else
        {
            var base_url = 'https://duckduckgo.com/?q='; 
            re = /\b for \b|\b about \b|\b on \b|\b of \b|\b \b/gi;
            var ext = search_field.match(re).toString();
            ind = ext.length;
            var str = search_field.slice(search_field.indexOf(ext)+ind);
            var target_url = base_url + str + '&t=h_&ia=news';
            ifr = document.getElementById('youriframe');
            ifr.src = target_url;
            document.getElementById("query").value = "";
            return false;
        }

    }   
//------------------------------------------------------------------------------------------------------------------------------------------------//
    
    //VIDEO
    
    else if(pplay.test(search_field))
    {
        var base_url = 'http://www.youtube.com/embed?listType=search&list=';
        re = /\bf or \b|\b about \b|\b on \b|\b of \b|\b \b/gi;
        var ext = search_field.match(re).toString();
        ind = ext.length;
        var str = search_field.slice(search_field.indexOf(ext)+ind);
        var target_url = base_url + str;
        ifr = document.getElementById('youriframe');
        ifr.src = target_url;
        document.getElementById("query").value = "";
        return false;
    }
//------------------------------------------------------------------------------------------------------------------------------------------------//

    //SEARCH
    
    else if(psearch.test(search_field))
    {
        var base_url = 'https://duckduckgo.com/?q=';
        re = /\b for \b|\b about \b|\b on \b|\b of \b|\b \b/gi;
        var ext = search_field.match(re).toString();
        ind = ext.length;
        var str = search_field.slice(search_field.indexOf(ext)+ind);
        var target_url = base_url + str;
        ifr = document.getElementById('youriframe');
        ifr.src = target_url;
        document.getElementById("query").value = "";
        return false;   
    }
//------------------------------------------------------------------------------------------------------------------------------------------------//

   //WIKI
    
    else if(pwiki.test(search_field))
    {
        var base_url = 'https://en.wikipedia.org/wiki/';
        re = /\b of \b|\b about \b|\b on \b/gi;
        var ext = search_field.match(re).toString();
        ind = ext.length;
        var str = search_field.slice(search_field.indexOf(ext)+ind);
        var target_url = base_url + titleCase(str);
        ifr = document.getElementById('youriframe');
        ifr.src = target_url;
        document.getElementById("query").value = "";
        return false; 
    }    
//------------------------------------------------------------------------------------------------------------------------------------------------//

    //DEFAULT SEARCH IF NO MATCHES
    
    else
    {                
        var base_url = 'https://duckduckgo.com/?q=';
        var target_url = base_url + search_field;
        ifr = document.getElementById('youriframe');
        ifr.src = target_url;
        document.getElementById("query").value = "";
        return false;   
    }
    

    
}
//------------------------------------------------------------------------------------------------------------------------------------------------//


function titleCase(str) 
{
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) 
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}


function reload(){
    location.href = "back.html";
}


function def()
{
    var doc = document.getElementById('youriframe');
    ifr.src = "http://localhost:8080/back.html";
//    ifr.src = "back.html";
}
