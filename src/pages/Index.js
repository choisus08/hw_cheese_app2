import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {

    const cheeses = useLoaderData();
    // console.log(cheeses)

    return (
        <div>
            <Form className="index-form" action='/create' method='post'>
                <input className="input" type='text' name='name' placeholder='cheese name' />
                <input className="input" type='text' name='country of origin' placeholder='country name' />
                <input className="input" type='text' name='image' placeholder='cheese image' />
                <input className="create" type='submit' value='Create Cheese' />
            </Form>
            {cheeses.map((cheese, index) => {
                return (
                    <div key={cheese._id} className="cheese">
                        <Link style={{textDecoration: 'none', color: 'saddlebrown'}} to={`/${cheese._id}`}>
                            <h1>{cheese.name}</h1>
                        </Link>
                        <h3>Origin: {cheese.countryOfOrigin}</h3>
                        <img className="img" src={cheese.image} alt={cheese.name} />
                    </div>
                )
            })}

        </div>
    )
}

export default Index;