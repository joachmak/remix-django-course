import {Form} from "@remix-run/react";

export default function SpeciesForm() {
    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log("Submitting species data");
        return false
    }

    return (
        <>
            <h2>Add species</h2>
            <Form action="/species/new" method="post">
                <label htmlFor="name">Name:</label><br/>
                <input type="text" id="name" name="name"/><br/>

                <label htmlFor="latin_name">Latin name:</label><br/>
                <input type="text" id="latin_name" name="latin_name"/><br/>

                <label htmlFor="description">Description:</label><br/>
                <textarea id="description" name="description"/><br/>

                <label htmlFor="typical_weight">Typical weight in grams:</label><br/>
                <input type="number" id="typical_weight" name="typical_weight"/>g<br/>

                <input type="submit" />
            </Form>
        </>
    )
}