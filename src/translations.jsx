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
        { english: "Given", latvian: "Kad" },
        { english: "When", latvian: "Ja" },
        { english: "Then", latvian: "Tad" },
        { english: "And", latvian: "Un" },
        { english: "Or", latvian: "Vai" },
        { english: "But", latvian: "Bet" },
        { english: "Background", latvian: "Konteksts" },
        { english: "Scenario Outline", latvian: "Scenārijs pēc parauga" },
        { english: "Examples", latvian: "Piemēri" },
        { english: "User story", latvian: "Lietotājstāsts" },
        { english: "Rule", latvian: "Noteikums" },
        { english: "Komentārs", latvian: "#" },
    ];

    return (
        <div>
            <caption>Gherkin termini</caption>
            <TranslationTable translations={translations} />
        </div>
    );
}