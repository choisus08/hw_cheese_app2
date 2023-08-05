import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {

    const cheeses = useLoaderData();
    console.log(cheeses)

    return (
        <div>
            <h2>Add Cheese</h2>
            <Form action='/create' method='post'>
                <input type='text' name='name' placeholder='cheese name' />
                <input type='text' name='country of origin' placeholder='country name' />
                <input type='text' name='image' placeholder='cheese image' />
                <input type='submit' value='Create Cheese' />
            </Form>
            {cheeses.map((cheese, index) => {
                return (
                    <div key={cheese._id} className="cheese">
                        <Link to={`/${cheese._id}`}>
                            <h1>{cheese.name}</h1>
                        </Link>
                        <img src={cheese.image} alt={cheese.name} />
                        <h3>Origin: {cheese.countryOfOrigin}</h3>
                    </div>
                )
            })}

        </div>
    )
}

export default Index;