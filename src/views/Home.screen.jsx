import React from 'react';
import AboutMe from 'shared/components/AboutMe';
import CardContainer from 'shared/components/CardContainer';
import Hero from 'shared/components/Hero';

export function HomeScreen() {
    return <>
        <Hero />
        <br />
        <CardContainer>
            <AboutMe />
        </CardContainer>
    </>;
}