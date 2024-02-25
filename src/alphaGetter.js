export async function AlphaGetter(selectedIngredients) {
    try {
        const sequence = await fetchData(selectedIngredients[0]);

        if (!sequence) {
            console.log("No sequence data fetched.");
            return;
        }

        let max = 0;
        let min = 0;
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i][1] > max) {
                max = sequence[i][1];
            }
            if (sequence[i][1] < min) {
                min = sequence[i][1];
            }
        }

        let newAlphaValues = {};
        for (let i = 0; i < sequence.length; i++) {
            let alpha = (sequence[i][1] - min) / (max - min);
            newAlphaValues[sequence[i][0]] = alpha;
        }
        return newAlphaValues;
    } catch (error) {
        console.error('Error fetching and updating data:', error);
    }
    // code should fetch from API and update the sequence state if button is clicked
    async function fetchData(selectedIngredient) {
        console.log("fetching data");
        if (selectedIngredient === undefined) {
            return; // or you might want to throw an error here
        } else {
            console.log("fetching data");
            try {
                const response = await fetch(`https://maddata-backend.vercel.app/api/products/${selectedIngredient}/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                return Object.entries(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error; // propagate the error
            }
        }
    }



}