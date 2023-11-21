import React, { useState } from 'react';

function SingleCat({ id, name, latinName, image }) {
    return (
        <li>
            <h3>{id}</h3>
            <img src={image} alt={`${name} - ${latinName}`} />
            <div>
                <span>({name})</span>
                <div>{latinName}</div>
            </div>
        </li>
    );
}

export default function BigCats() {
    const [cats, setCats] = useState([
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
        { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow-leopard.jpg' },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
    ]);

    const handleReverseAndSort = () => {
        let newCats = [...cats];
        newCats.reverse();
        newCats.sort((a, b) => a.name.localeCompare(b.name));
        setCats(newCats);
    };

    const bigCatsList = cats.map(cat => (
        <SingleCat
            key={cat.id}
            id={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
        />
    ));

    return (
        <div>
            <button onClick={handleReverseAndSort}>Reverse and Sort</button>
            <ul>{bigCatsList}</ul>
        </div>
    );
}
