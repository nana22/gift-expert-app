


const apikey='N7QCOt5iKutdIq8M1dijyiwAcdF5rzr1';
export const  getGiftByCategory = async(category)=>{
    try{
        const url =`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=10`;
        const resp= await fetch(url);
        const {data} = await resp.json();
        const gifts= data.map(img=>{
              return {
                id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
              }
         });
         return gifts;
    }catch(err){
        console.error(err);

    }
    
}