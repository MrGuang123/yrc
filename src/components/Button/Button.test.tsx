import renderer, { ReactTestRendererJSON } from 'react-test-renderer'

import Button from './Button'

describe('Button', () => {
  test('render Button Component', () => {
    const component = renderer.create(
      <Button label="Hello yrc"></Button>,
    );

    const comJson = component.toJSON() as ReactTestRendererJSON
    expect(comJson.children?.[0]).toEqual('Hello yrc')

  })
})