function TranslationTableHeader() {
    return (
        <thead>
            <tr>
                <th>Angļu valodā</th>
                <th>Latviešu valodā</th>
            </tr>
        </thead>
    );
}

function TranslationRow({ english, latvian }) {
    return (
        <tr>
            <td>{english}</td>
            <td>{latvian}</td>
        </tr>
    );
}

function TranslationTable({ translations }) {
    return (
        <table>
            <TranslationTableHeader />
            <tbody>
                {translations.map((item, index) => (
                    <TranslationRow 
                        key={index} 
                        english={item.english} 
                        latvian={item.latvian} 
                    />
                ))}
            </tbody>
        </table>
    );
}

export default function Translations() {
    const translations = [
        { english: "Feature", latvian: "Funkcionalā iezīme" },
        { english: "Scenario", latvian: "Scenārijs" },
        { english: "Given", latvian: "Dotas" },
        { english: "When", latvian: "Kad" },
        { english: "Then", latvian: "Tad" },
        { english: "And", latvian: "Un" },
        { english: "But", latvian: "Bet" },
        { english: "Background", latvian: "Pamatne" },
        { english: "Examples", latvian: "Piemēri" }
    ];

    return (
        <div>
            <caption>Gherkin termini</caption>
            <TranslationTable translations={translations} />
        </div>
    );
}