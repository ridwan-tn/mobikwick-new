import React from 'react'
import Head from './pagecomponents/navbar'
import Main from './pagecomponents/mainsection'
import Fourth from './pagecomponents/Fourthsection'
import Threed from './pagecomponents/Threed'
import Final from './pagecomponents/Finalsection'
import New from './pagecomponents/new'
import Footer from './pagecomponents/footer'

export default function payemt() {
    return (
        <div style={{textAlign:"center"}}>
            <Head />
            <Main/>
            <Fourth/>
            <Threed/>
            <Final/>
            <New/>
            <Footer/>
        </div>
    )
}
