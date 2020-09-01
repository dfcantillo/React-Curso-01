
export const getGifs = async (category) => {
    const key = "DzlKHsxviUPIWPXkqQGHGZJmR3RHTH2o";
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=${key}`;
    const resp = await fetch(url);
    // const  {data, pagination}  = await resp.json();
    const  {data}  = await resp.json();
    // console.log(pagination);
     const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium.url
        }
    } );
    return gifs;
}