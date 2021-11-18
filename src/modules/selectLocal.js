import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectTest from '../components/selectTest';


const selectLocal = () => {
    const { local } = useSelector((state) => {
        local : state.selectTest.local
    })
}

