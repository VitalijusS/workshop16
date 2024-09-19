import { useState } from "react";
import { Button } from "./Button";
import { useEffect } from "react";

export function TestimonialApp() {

    const [testimonials, setTestimonials] = useState('');
    const [content, setContent] = useState('');
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
            .then(response => response.json())
            .then(json => setContent(json));
    }, [testimonials])

    return (
        <div className="container">
            <h1>Testimonial app</h1>
            <div className="d-flex">
                <Button text={'Posts'} func={() => setTestimonials('Posts')} btnClass={'btn-success'} />
                <Button text={'Users'} func={() => setTestimonials('Users')} btnClass={'btn-info'} />
                <Button text={'Comments'} func={() => setTestimonials('Comments')} btnClass={'btn-danger'} />
            </div>
            <h2 className="subtitle text-primary">{!testimonials ? "Select from above" : testimonials}</h2>
            {!content ? null : content.map(
                item => (
                    <div key={item.id} className="card card-primary">
                        {item.name && <h2>{item.name}</h2>}
                        {item.body && <p className="card-body"> {item.body}</p>}
                        {item.email && <p className="card-footer"> {item.email}</p>}
                    </div>

                )

            )}
        </div>
    );
}