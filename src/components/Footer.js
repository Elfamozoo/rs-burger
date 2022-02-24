import React from 'react';
import "../styles/Footer.scss";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import rsburger from '../assets/rsburger.png'



const FooterRS = () => {

    return (
        <>
            <Footer className='Footer'
                columns={[
                    {
                        title: 'Horaires',
                        items: [
                            {
                                title: 'Du Lundi au Vendredi et Dimanche :',

                            },
                            {
                                title: '12:00–15:00, 19:00–23:00',
                            },
                            {
                                title: 'Samedi :',

                            },
                            {
                                title: '19:00–01:00',
                            },
                        ],
                    },
                    {
                        icon: (
                            <img src={rsburger} alt="Rsburger" />
                        ),
                        title: 'RS Burger',
                        items: [
                            {
                                title: `© 2018 / ${new Date().getFullYear()} - RS Burger - Mentions légales`

                            },
                        ],
                    },
                ]}
                bottom="Développé et designé par Zerga Illyes."
            />


        </>
    )











}



export default FooterRS;