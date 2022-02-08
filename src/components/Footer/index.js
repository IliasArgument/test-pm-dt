import React from 'react';

import facebookIcon from '../../assets/footer-icon/facebook.png';
import inIcon from '../../assets/footer-icon/in.png';
import instagramIcon from '../../assets/footer-icon/inst.png';
import twitterIcon from '../../assets/footer-icon/twit.png';
import vkIcon from '../../assets/footer-icon/vkon.png';
import youtubeIcon from '../../assets/footer-icon/youtube.png';
import './style.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__info">
                <div className="footer__info-other">
                    <p className="other__title">Другое</p>
                    <ul className="other__lists">
                        <li className="other__lists-list">
                            Про Нас
                        </li>
                        <li className="other__lists-list">
                            Блог
                        </li>
                    </ul>
                </div>
                <div className="footer__info-cooperation">
                    <div className="footer__info-cooperation">
                        <p className="cooperation__title">Сотрудничество с нами</p>
                        <ul className="cooperation__lists">
                            <li className="cooperation__lists-list">
                                Реклама на сайте
                            </li>
                            <li className="cooperation__lists-list">
                                Партнерская программа
                            </li>
                            <li className="cooperation__lists-list">
                                Контакты
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__info-social">
                    <ul className="social__lists">
                        <li className="social__lists-list">
                            <img src={twitterIcon} alt={twitterIcon} />
                        </li>

                        <li className="social__lists-list">
                            <img src={facebookIcon} alt={facebookIcon} />
                        </li>

                        <li className="social__lists-list">
                            <img src={inIcon} alt={inIcon} />
                        </li>

                        <li className="social__lists-list">
                            <img src={instagramIcon} alt={instagramIcon} />
                        </li>

                        <li className="social__lists-list">
                            <img src={youtubeIcon} alt={youtubeIcon} />
                        </li>

                        <li className="social__lists-list">
                            <img src={vkIcon} alt={vkIcon} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__line"></div>
            <div className="footer__privacy">
                <ul className="footer__privacy__lists">
                    <li className="footer__privacy__lists-list first">Privacy Policy</li>
                    <div className="border-right"></div>
                    <li className="footer__privacy__lists-list second">© 2021 All rights reserved</li>
                    <div className="border-left"></div>
                    <li className="footer__privacy__lists-list third">Terms of Use</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;