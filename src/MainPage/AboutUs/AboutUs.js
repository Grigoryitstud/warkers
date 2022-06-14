import React from 'react'
import s from './AboutUs.module.css';
import cost from '../img/cost.png';
import pay from '../img/pay.png';
import byYourself from '../img/byYourself.png';
import allTogether from '../img/allTogether.png';
import more from '../img/more.png';


const AboutUs = () => {
  return (
    <div className={s.intro}>
      <div className={s.intro__inner}>
        <h1 className={s.intro__titles}>
          выбирай из лучших
        </h1>
        <div className={s.intro__subtitles}>
          <p>мы здесь</p>
          <p>что-бы вы легко и уверенно сделали свой выбор</p>
        </div>

        <div className={s.icon}>
          <img className={s.icon__logo} src={allTogether} alt="" />
          <p className={s.icon__inner}>имея большой опыт оказания качественных услуг
           мы объединились в сообщество людей делающих свою работу от души</p>
        </div>

        <div className={s.icon}>
          <img className={s.icon__logo} src={pay} alt="" />
          <p className={s.icon__inner}>
            единый принцип расчётов
          </p>
          <img className={s.icon__logo} src={more} alt="" />
        </div>

        <div className={s.icon}>
          <img className={s.icon__logo} src={cost} alt="" />
          <p className={s.icon__inner}>
            единый прайс цен
          </p>
          <img className={s.icon__logo} src={more} alt="" />
        </div>

        <div className={s.icon}>
          <img className={s.icon__logo} src={byYourself} alt="" />
          <p className={s.icon__inner}>
            только частные проверенные временем мастера (не компании).
          </p>
          <img className={s.icon__logo} src={more} alt="" />
        </div>

      </div>
    </div>
  );
}

export default AboutUs;