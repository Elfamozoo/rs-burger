import React from 'react';
import "../styles/Footer.scss";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';


const FooterRS = () => {

    return (
        <>
            <Footer
                columns={[
                    {
                        icon: (
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
                        ),
                        title: 'RS Burger',
                        url: 'https://yuque.com',
                        description: '知识创作与分享工具',
                        openExternal: true,
                    },
                ]}
                bottom="Développé et designé par Zerga Illyes."
            />


        </>
    )











}



export default FooterRS;