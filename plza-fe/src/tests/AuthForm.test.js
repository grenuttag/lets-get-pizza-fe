import React from 'react'
import { render } from '@testing-library/react'
import AuthForm from '../components/authentication/AuthForm'


import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


test ('Auth Form renders correctly', () => {
    const mockGetData = jest.fn();
    const { getByText } = render (
        <Provider store = {store}><AuthForm userRegister = {mockGetData} /></Provider>

    );
     getByText (/submit/i );
})