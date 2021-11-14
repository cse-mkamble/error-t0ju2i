import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { activationEmail } from '../redux/actions/authAction'

const ActivationEmail = () => {
    const { activation_token } = useParams()
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (activation_token) {
            dispatch(activationEmail(activation_token))
        }
    }, [activation_token])

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])


    return (
        <div className="active_page">
        </div>
    )
}

export default ActivationEmail