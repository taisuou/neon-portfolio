import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media, zIndex } from '../../utils/style';
import { Route, Switch } from 'wouter';
import { Home } from './Home';
import { About } from './About';
import { Works } from './Works';
import { Contact } from './Contact';
import { Detail } from './Detail';
import { contents } from '../../utils/store';
import { Footer } from '../molecules/Footer';

export const Contents: VFC = () => {
  return (
    <>
        <Switch>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/works" component={Works} />
              <Route path="/contact" component={Contact} />
              <Route path="/works/:id">{(params) => <Detail post={contents.works[Number(params.id)]} pageIndex={Number(params.id)}/>}</Route>
              <Route>存在しないコンテンツです</Route>
        </Switch>
        <Footer />
    </>
  );
};
