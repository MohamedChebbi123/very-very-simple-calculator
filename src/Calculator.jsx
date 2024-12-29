import './index.css';
import { useState } from "react";

const Calculator = () => {
    const [valeur, ajvaleur] = useState("");

    return (
        <div className="calculator">
            <div>
                <input type="text" value={valeur} readOnly />
            </div>
            <div>
                <input type="button" value="1" onClick={(e) => ajvaleur(valeur + e.target.value)} />
                <input type="button" value="2" onClick={(e) => ajvaleur(valeur + e.target.value)} />
                <input type="button" value="3" onClick={(e) => ajvaleur(valeur + e.target.value)} />
                <input type="button" value="4" onClick={(e) => ajvaleur(valeur + e.target.value)} />
            
            
                <input type="button" value="5" onClick={(e) => ajvaleur(valeur + e.target.value)} />
                <input type="button" value="6" onClick={(e) => ajvaleur(valeur + e.target.value)} />
                <input type="button" value="7" onClick={(e) => ajvaleur(valeur + e.target.value)} />
                <input type="button" value="8" onClick={(e) => ajvaleur(valeur + e.target.value)} />
            
            
                <input type="button" value="9" onClick={(e) => ajvaleur(valeur + e.target.value)} />
                <input type="button" value="effacer" className="clear" onClick={() => ajvaleur("")} />
                <input type="button" value="+" onClick={(e) => ajvaleur(valeur + e.target.value)} />
                <input type="button" value="-" onClick={(e) => ajvaleur(valeur + e.target.value)} />
            
                <input type="button" value="*" onClick={(e) => ajvaleur(valeur + e.target.value)} />
                <input type="button" value="/" onClick={(e) => ajvaleur(valeur + e.target.value)} />
                <input type="button" value="=" className="equal" onClick={() => ajvaleur(eval(valeur))} />
                <input type="button" value="retour" onClick={(e) => ajvaleur(valeur.slice(0,-1))} />
            </div>
        </div>
    );
}

export default Calculator;
