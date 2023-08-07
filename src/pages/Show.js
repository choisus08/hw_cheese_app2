import { useLoaderData, Form } from "react-router-dom";

function Show(props) {

    const cheese = useLoaderData();
    // console.log(cheese)

    return (
        <div className="cheese">
            <h1>{cheese.name}</h1>
            <h2>{cheese.countryOfOrigin}</h2>
            <img src={cheese.image} alt={cheese.name} />

            <h2>Update {cheese.name}</h2>
            <Form action={`/update/${cheese._id}`} method='post'>
                <input type="text" name="name" placeholder="cheese name" defaultValue={cheese.name} />
                <input type="text" name="country of origin" placeholder="cheese country" defaultValue={cheese.countryOfOrigin} />
                <input type="text" name="image" placeholder="cheese image" defaultValue={cheese.image} />
                <input type="submit" value="Update Cheese" />

            </Form>
        </div>
    )
}

export default Show;