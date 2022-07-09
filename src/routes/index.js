import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/text" component={Ckeditor} />
            </Switch>
        </BrowserRouter>
    )
}