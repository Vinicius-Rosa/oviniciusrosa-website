import React from 'react';
import AboutMe from 'shared/components/AboutMe';
import CardContainer from 'shared/components/CardContainer';
import Hero from 'shared/components/Hero';
import SomeProjects from 'shared/components/SomeProjects';
import Techs from 'shared/components/Techs';
import WhatIDoForLiving from 'shared/components/WhatIDoForLiving';

export function HomeScreen() {
    return <>
        <Hero />
        <br />
        <CardContainer>
            <AboutMe />
            <Techs />
            <WhatIDoForLiving />
            <SomeProjects />
            <br /><br />
        </CardContainer>
    </>
}