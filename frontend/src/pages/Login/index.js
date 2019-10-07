import React, { useState } from 'react'
import Api from '../../services/api'

export default function Login({ history }) {
    const [email, setEmail] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        const response = await Api.post('/sessions', { email })
        const { _id } = response.data
        localStorage.setItem('user', _id)

        history.push('/dashboard')
    }

    return (
        //fragment
        <>
            <p>
                Offer <strong>spots</strong> for developers and find <strong>talents</strong> for your company
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL: *</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Use your best e-mail."
                />

                <button
                    type="submit"
                    className="btn"
                >
                    Entrar
                </button>

            </form>
        </>
    )
}
