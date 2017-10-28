if(input.match(/what|who|gender|my|name|age|recommend|fav/i))
    {
        if(input.match(/my|gender|name|age|are|movie|song|music/gi))
        {
            if(input.match(/gender/gi))
            {
                var str = getRandomSentence(re_gender,re_gender.length)
                question = '<h1>' + str + '</h1>'
                setTimeout(timedQuestion,500);
                document.getElementById("input").value = "";                
            }
            
            if(input.match(/name|i/gi))
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
