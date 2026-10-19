import React from 'react';
import { Scene01Hero } from '../components/sections/Scene01Hero';
import { Scene02Essence } from '../components/sections/Scene02Essence';
import { Scene03Manifesto } from '../components/sections/Scene03Manifesto';
import { Scene04Formation } from '../components/sections/Scene04Formation';
import { Scene05Knowledge } from '../components/sections/Scene05Knowledge';
import { Scene06Barcarena } from '../components/sections/Scene06Barcarena';
import { Scene07Campus } from '../components/sections/Scene07Campus';
import { Scene08Experience } from '../components/sections/Scene08Experience';
import { Scene09NewsEvents } from '../components/sections/Scene09NewsEvents';
import { Scene10Conversion } from '../components/sections/Scene10Conversion';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Scene01Hero />
      <Scene02Essence />
      <Scene03Manifesto />
      <Scene04Formation />
      <Scene05Knowledge />
      <Scene06Barcarena />
      <Scene07Campus />
      <Scene08Experience />
      <Scene09NewsEvents />
      <Scene10Conversion />
    </div>
  );
};
