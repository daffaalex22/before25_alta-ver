import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from "react-router"
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth()

    return currentUser ? children : <Navigate to="/admin/login" replace={true} />
}