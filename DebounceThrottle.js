// Debounce :
// means jar user search input box madhe type karat ahe eccomer hi spell ,
// jar tyane kahi normal delay kel, ani apn pass kelela time execute zala tar api hit hoil.ahe
// ani jar tyane punha type karayla suruvat keli like eccom ani 2esc delay ani parat erce tar to time parat reset hoil 
// this is debounce 
// we mostly used with search input and button rapid click
// function debounce(fn,delay)
// {
//     let timerid;
//     return function(...args)
//     {
//         clearTimeout(timerid);//clear karun taken
//         timerid=setTimeout(()=>
//         {
//             fn(...args);
//         },delay)
//     }
// }

// const search = (query) =>
// {
//     console.log("Search query is..", query);
// }

// const searchdebounce = debounce(search, 1000);
// searchdebounce("Hard");
// searchdebounce("Hard J")
// searchdebounce("Hard JS")
// searchdebounce("Hard JS Lalit")

// --------------------------------------------------------------------------------------------------------------------------------------
// throttle:
// "मी फक्त दर 1 सेकंदांनी एकदाच run होतो — कितीही वेगाने तू मला बोलाव." 
// Throttle	❌ typing चालू असलं तरी	✅ दर 1000ms ला call होतो

function throttle(fn,delay)
{
    let lastcall=0;
    return function(...args)
    {
        const now=Date.now();
        if(now-lastcall < delay)
        {
            return;
        }
       lastcall=now;
       return fn(...args);
    }
}

const sendchatmsgwithslowmode = (query) =>
{
    console.log("Search throttle query is..", query);
}

const searchthrottle = throttle(sendchatmsgwithslowmode, 2000);
searchthrottle("Hard");
searchthrottle("Hard J")
searchthrottle("Hard JS")
searchthrottle("Hard JS Lalit")

// -----------------------------------------------------------------------------------------------------------------------
// | Concept      | तुम्ही typing थांबल्यावर | तुम्ही typing करत असतानाच |
// | ------------ | ------------------------ | ------------------------- |
// | **Debounce** | ✅ 600ms नंतर एकदाच       | ❌ call होत नाही दर वेळेस  |
// | **Throttle** | ❌ typing चालू असलं तरी   | ✅ दर 1000ms ला call होतो  |
