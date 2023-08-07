import { baseUrl } from "./base_url";
import { redirect } from "react-router-dom";


// create action
export const createAction = async ({request}) => {
    // get data from the form 
    const formData = await request.formData();
    // setup the object for new cheese
    const newCheese = {
        name: formData.get('name'),
        image: formData.get('image'),
        countryOfOrigin: formData.get('country of origin')
    }

    await fetch(`${baseUrl}/cheese`, {
        // tell fetch to make post request
        method: "POST",
        headers: {
            // tells backend the data is json
            "Content-Type": "application/json"
        },
        // send json string of newCheese object
        body: JSON.stringify(newCheese)
    })

    return redirect('/')
};


// updat action
export const updateAction = async ({request, params}) => {
    const id = params.id;
    const formData = await request.formData();
    const updatedCheese = {
        name: formData.get('name'),
        image: formData.get('image'),
        countryOfOrigin: formData.get('country of origin')
    }

    await fetch(`${baseUrl}/cheese/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    return redirect (`/${id}`)
}