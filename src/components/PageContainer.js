// src/components/PageContainer.js
"use client"; // 이 지시어를 추가

import React, { useState } from 'react';
import { Range } from 'react-range';
import PagePresenter from './PagePresenter';
import styles from './PagePresenter.module.css';  // CSS 파일 경로 수정

const PageContainer = () => {
  const dataOptions = [0, 1, 2, 3, 5, 10, 50, 100, "무제한"];
  const voiceOptions = [0, 50, 100, 250, 500, "무제한"];
  const smsOptions = [0, 50, 100, 250, 500, "무제한"];
  const priceOptions = ["0원", "40만원", "80만원", "120만원", "160만원", "160만원+"];

  const [dataValue, setDataValue] = useState([dataOptions[0], dataOptions[dataOptions.length - 1]]);
  const [voiceValue, setVoiceValue] = useState([voiceOptions[0], voiceOptions[voiceOptions.length - 1]]);
  const [smsValue, setSmsValue] = useState([smsOptions[0], smsOptions[smsOptions.length - 1]]);
  const [priceValue, setPriceValue] = useState([priceOptions[0], priceOptions[priceOptions.length - 1]]);
  const [showRightContainer, setShowRightContainer] = useState(false);

  const renderThumb = ({ props }) => (
    <div {...props} style={{ ...props.style, height: '20px', width: '20px', borderRadius: '50%', backgroundColor: '#FFF', border: '2px solid #CCC', boxShadow: '0 2px 6px #AAA' }} />
  );

  const renderTrack = ({ props, children, value, options }) => {
    const index1 = options.indexOf(value[0]);
    const index2 = options.indexOf(value[1]);
    const stepSize = 100 / (options.length - 1);
    const start = index1 * stepSize;
    const end = index2 * stepSize;
    return (
      <div {...props} style={{ ...props.style, height: '6px', width: '100%', background: `linear-gradient(to right, #CCC ${start}%, #FF0000 ${start}%, #FF8C00 ${end}%, #CCC ${end}%)`, borderRadius: '4px' }}>
        {children}
      </div>
    );
  };

  const convertValueToPercentage = (value, options) => value.map(v => {
    const index = options.indexOf(v);
    return index >= 0 ? index / (options.length - 1) * 100 : 0;
  });

  const handleRangeChange = (setValue, options) => values => {
    const stepSize = 100 / (options.length - 1);
    const newValues = values.map(v => options[Math.round(v / stepSize)]);
    setValue(newValues);
  };

  const createSlider = (value, setValue, options) => (
    <Range
      step={1}
      min={0}
      max={100}
      values={convertValueToPercentage(value, options)}
      onChange={handleRangeChange(setValue, options)}
      renderTrack={({ props, children }) => renderTrack({ props, children, value, options })}
      renderThumb={renderThumb}
    />
  );

  const formatRange = (values, unit) => {
    const formattedValues = values.map(v => v === "무제한" || v === "160만원+" ? v : `${v}${unit}`);
    return `${formattedValues[0]} ~ ${formattedValues[1]}`;
  };

  return (
    <div className={styles.container}>
      <PagePresenter
        dataValue={dataValue}
        voiceValue={voiceValue}
        smsValue={smsValue}
        priceValue={priceValue}
        dataOptions={dataOptions}
        voiceOptions={voiceOptions}
        smsOptions={smsOptions}
        priceOptions={priceOptions}
        setDataValue={setDataValue}
        setVoiceValue={setVoiceValue}
        setSmsValue={setSmsValue}
        setPriceValue={setPriceValue}
        createSlider={createSlider}
        formatRange={formatRange}
        showRightContainer={showRightContainer}
        setShowRightContainer={setShowRightContainer}
      />
    </div>
  );
};

export default PageContainer;
