import React, { useState } from 'react';
import SuggestionForm from '../components/Suggestion/SuggestionForm';
import SuggestionList from '../components/Suggestion/SuggestionList';
import './SuggestTool.css'; // Importar el CSS para estilos personalizados

const SuggestTool = () => {
    const [newSuggestion, setNewSuggestion] = useState(null);

    return (
        <div className="suggest-tool">
            <div className="form-section">
                <SuggestionForm onNewSuggestion={setNewSuggestion} />
            </div>
            <div className="list-section">
                <SuggestionList newSuggestion={newSuggestion} />
            </div>
        </div>
    );
};

export default SuggestTool;
