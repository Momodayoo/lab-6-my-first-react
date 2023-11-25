import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';
import './BigCats.css';

export default function BigCats() {
    // Initial cat data
    const initialCats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg' },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg' },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg' },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg' },
        { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg' },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG' },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg' },
    ];

    // State for managing the list of cats
    const [cats, setCats] = useState(initialCats);

    const handleAddCat = (newCat) => {
        newCat.id = cats.reduce((maxId, cat) => Math.max(maxId, cat.id), 0) + 1; // generate a unique id
        setCats([...cats, newCat]);
    };

    const handleReverseAndSort = () => {
        let newCats = [...cats];
        newCats.reverse();
        setCats(newCats);
    };

    const handleAlphabeticalSort = () => {
        let newCats = [...cats];
        newCats.sort((a, b) => a.name.localeCompare(b.name));
        setCats(newCats);
    };

    const handleFilterPanthera = () => {
        let pantheraCats = cats.filter(cat => cat.latinName.includes('Panthera'));
        setCats(pantheraCats);
    };

    const handleResetList = () => {
        // Reset to the initial list of cats
        setCats(initialCats);
    };

    const handleDeleteCat = (id) => {
        const updatedCats = cats.filter((cat) => cat.id !== id);
        setCats(updatedCats);
    };

    const bigCatsList = cats.map(cat => (
        <SingleCat
            key={cat.id}
            id={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
            onDelete={handleDeleteCat}
        />
    ));

    return (
        <div className="container">
            <div className="button-container">
                <button onClick={handleAlphabeticalSort}>Alphabetical Sort</button>
                <button onClick={handleReverseAndSort}>Reverse and Sort</button>
                <button onClick={handleFilterPanthera}>Filter Panthera Family</button>
                <button onClick={handleResetList}>Reset List</button>
            </div>

            <ul>{bigCatsList}</ul>


            <div className="add-cat-form">
                <AddCatForm onAddCat={handleAddCat} />
            </div>
        </div>
    );
}
