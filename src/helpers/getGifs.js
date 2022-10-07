export const GetGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0eWaKgl3O1S5w6uJwQB8mV5YQQ3qFNl3&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();// desestructuramos resp y buscamos data

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
       
    }));
    // console.log(gifs)
    return gifs;

   }