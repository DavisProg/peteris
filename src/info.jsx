export function FeatureInfo(){
    return(
        <div>
            <h2>Kas un kāpēc ir funkcionālā iezīme?</h2>
            <p>funkcija ir funkcionalitāte, ko mūsu sistēma ieviesusi, lai atbalstītu piedāvātu iespēju</p>
        </div>
    )
}
export function UserStoryFormatInfo(){
    return(
        <div>
        <h2>Kādā formātā veidot lietotājstāstus?</h2>
        <p>Bieži cilvēki veido lietotājstātus šādā formātā: 
            Kā [lietotājs]
            Es vēlos [specifisks sistēmas uzvedībai]
            Lai sasniegtu [mērķis papildinot sistēmas iespējas]
        </p>
        </div>
    )
}
export function ScenarioInfo(){
    return(
        <div>
            <h2>Kā veidot scenārijus? Cik daudz scenāriju ir vienai funkcionālajai iezīmei?</h2>
            <p>Scenāriji tiek rakstīti izmantojot Gherkin. Lielākoties katra rinda sākās ar atslēgvārdu.
                Šie atslēgvārdi ir:
                <ul>
                    <li>Funkcionāla iezīme</li>
                    <li>Noteikums</li>
                    <li>Scenārijs</li>
                    <li>Kad, Ja, Tad, Un, *</li>
                </ul>
            </p>
            </div>
            )
        }
export function RubixCubeExample(){
    return(
        <div>
        <h2>Kā Rubika kubs ļauj skatīties uz funkcionālajām iezīmēm?</h2>
        <p>Līdzīgi kā mēs atrisinam rubika kubu mēs atkklājam scenārijus.
            Mēs skatamies uz funkcionālo iezīmi no dažadiem leņķiem un perspektīviem.
            Funkcionālā iezīme nemainās, bet mainās kā mēs to peilāgojam dažadām situācijām.
        </p>
        </div>
    )
}
export function HappyPathScenarioInfo(){
    return(
        <div>
            <h2>Kas ir veiksmīgā iznākuma scenārijs?</h2>
            <p>
                Katrai funkcionālai iezīmei būs vismaz viens veiksmīga iznākuma scenārijs.
                Veiksmīga iznākuma scenārijs ir scenārijs kurā funkcionālās iezīmes galvenais
                lietotājs sasniedz savu mērķi bez problēmām vai šķēršļiem.
            </p>
        </div>
    )
}