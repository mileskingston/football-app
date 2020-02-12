import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  let props = {

  };

  describe('generic props', () => {
    it('should match snapshot', () => {
      expect(
        shallow(
          <Button>Submit</Button>
        )
      ).toMatchSnapshot();
    });
  });
  
  describe('generic props', () => {
    it('should match snapshot', () => {
      expect(
        shallow(
          <Button>Submit</Button>
        )
      ).toMatchSnapshot();
    });
  });
});
