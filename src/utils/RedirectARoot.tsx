import { Redirect } from "react-router";

export default function RedirectARoot(){

    return(
        <Redirect to={{pathname:'/'}}/>
    );
}