import React from 'react';
import { container } from '../../styles/styles';
import PageUnderConstruction from '../../ui/PageUnderConstruction';
import QALandingPage from '../../components/qualityAssurance/QALandingPage';
import QASuccessfulInsurance from '../../components/qualityAssurance/QASuccessfulInsurance';
import QAChooseInnovazy from '../../components/qualityAssurance/QAChooseInnovazy';
import QAServices from '../../components/qualityAssurance/QAServices';
import CallToAction from '../../ui/CallToAction';

const QualityAssurance = () => {
    return (
        <>
        <div className={`${container} mt-[130px]`}>
          <QALandingPage/>
          <QAChooseInnovazy/>
          <QASuccessfulInsurance/>
          <QAServices/>
        </div>
          <CallToAction/>
        </>
    );
};

export default QualityAssurance;