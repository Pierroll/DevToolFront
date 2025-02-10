import React, { useState } from 'react';
import SuggestionForm from '../components/Suggestion/SuggestionForm';
import SuggestionList from '../components/Suggestion/SuggestionList';

const SuggestTool = () => {
    const [newSuggestion, setNewSuggestion] = useState(null);

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="md:w-1/2">
                <SuggestionForm onNewSuggestion={setNewSuggestion} /> {/* ✅ Pasar la función */}
            </div>
            <div className="md:w-1/2">
                <SuggestionList newSuggestion={newSuggestion} /> {/* ✅ Recibir nueva sugerencia */}
            </div>
        </div>
    );
};

export default SuggestTool;
