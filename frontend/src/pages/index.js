import { Route, Routes } from "react-router-dom";
import React from "react";
import About from "./About";
import Home from "./Home";
import AppLayout from "components/AppLayout";
import AccountsRoutes from "./accounts";

function Root() {
    return (
        <AppLayout>
            최상위 컴포넌트
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/accounts/*" element={<AccountsRoutes />} />
            </Routes>

        </AppLayout>
    );
}

export default Root;
