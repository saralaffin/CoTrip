import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({adapter: new Adapter()});

describe('App component', () => {
  test('is an Object', () => {
    const component = shallow(<App />);
    expect(component).toEqual(Object.prototype);
  });
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('contains a header element', () => {
    const component = render(<App />);
    expect(component['0'].children[0].name).toBe('header');
  });
});