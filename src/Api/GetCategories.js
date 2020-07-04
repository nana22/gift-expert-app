

export const getCategories = async() => {

    try {

        const apiKey = 'A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/categories?api_key=${ apiKey }`);
        const { data } = await resp.json();
        return data;


    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No existe';
    }
    
    
    
}



