import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...props }) {
    if (!props.isCompletedDownload) {
        return;
    }
    return (
        props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace />
    );
}

export default ProtectedRoute;