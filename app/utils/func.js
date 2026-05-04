export const fetchLocalProducts = async () => {
    try {
        const response = await fetch('/product.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};


