// src/components/PagePresenter.js
"use client"; // 이 지시어를 추가

import React from 'react';
import styles from './PagePresenter.module.css';

const PagePresenter = ({
  dataValue,
  voiceValue,
  smsValue,
  priceValue,
  dataOptions,
  voiceOptions,
  smsOptions,
  priceOptions,
  setDataValue,
  setVoiceValue,
  setSmsValue,
  setPriceValue,
  createSlider,
  formatRange,
  showRightContainer,
  setShowRightContainer
}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.header}>
          <h1>맞춤형 요금제</h1>
          <p>데이터, 통화 사용량을 선택해주세요! 딱 맞는 요금제를 추천드립니다.</p>
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.sliderBox}>
            <div className={styles.sliders}>
              <div className={styles.sliderContainer}>
                <h2>데이터: {formatRange(dataValue, 'GB')}</h2>
                {createSlider(dataValue, setDataValue, dataOptions)}
                <div className={styles.sliderLabels}>
                  {dataOptions.map((option, index) => (
                    <span key={index} style={{ left: `${index / (dataOptions.length - 1) * 100}%`, whiteSpace: 'nowrap' }}>
                      {option === "무제한" ? option : `${option}GB`}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.sliderContainer}>
                <h2>음성량: {formatRange(voiceValue, '분')}</h2>
                {createSlider(voiceValue, setVoiceValue, voiceOptions)}
                <div className={styles.sliderLabels}>
                  {voiceOptions.map((option, index) => (
                    <span key={index} style={{ left: `${index / (voiceOptions.length - 1) * 100}%`, whiteSpace: 'nowrap' }}>
                      {option === "무제한" ? option : `${option}분`}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.sliderContainer}>
                <h2>문자: {formatRange(smsValue, '건')}</h2>
                {createSlider(smsValue, setSmsValue, smsOptions)}
                <div className={styles.sliderLabels}>
                  {smsOptions.map((option, index) => (
                    <span key={index} style={{ left: `${index / (smsOptions.length - 1) * 100}%`, whiteSpace: 'nowrap' }}>
                      {option === "무제한" ? option : `${option}건`}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.filterBox}>
            <div className={styles.filters}>
              <div className={styles.filterSection}>
                <h2>휴대폰 종류</h2>
                <div className={styles.buttonGroup}>
                  <button className={`${styles.button} ${styles.active}`}>전체</button>
                  <button className={styles.button}>자급제 휴대폰</button>
                  <button className={styles.button}>중고 휴대폰</button>
                  <button className={styles.button}>요금제 결합 휴대폰</button>
                </div>
              </div>
              <div className={styles.filterSection}>
                <h2>제조사</h2>
                <div className={styles.buttonGroup}>
                  <button className={`${styles.button} ${styles.active}`}>전체</button>
                  <button className={styles.button}>삼성</button>
                  <button className={styles.button}>LG</button>
                  <button className={styles.button}>Apple</button>
                  <button className={styles.button}>기타</button>
                </div>
              </div>
              <div className={styles.sliderContainer}>
                <h2>가격대: {formatRange(priceValue, '')}</h2>
                {createSlider(priceValue, setPriceValue, priceOptions)}
                <div className={styles.sliderLabels}>
                  {priceOptions.map((option, index) => (
                    <span key={index} style={{ left: `${index / (priceOptions.length - 1) * 100}%`, whiteSpace: 'nowrap' }}>
                      {option}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                className={styles.searchButton}
                onClick={() => setShowRightContainer(true)}
              >
                검색
              </button>
            </div>
          </div>
        </div>
        <div 
          className={styles.rightContainer}
          style={{ visibility: showRightContainer ? 'visible' : 'hidden' }}
        >
          <img src="/image/image1.png" alt="background" className={styles.backgroundImage} />
        </div>
      </div>
    </div>
  );
};

export default PagePresenter;
