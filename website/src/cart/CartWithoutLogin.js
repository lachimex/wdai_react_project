import { Link } from "react-router-dom";

export default function CWL(){
    return(
        <>
        <p>Koszyk tylko dla zalogowanych</p>
        <Link to='/account'>
            <button>Zaloguj sie</button>
        </Link>
        </>
    )
}