import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * something
   */
  @Prop() salutation: string;

  render() {
    return (
      <div>
        {this.salutation ?? 'Hello'}
        <ext-component first={'John'} middle={'John'} last={'Johnson'} />
      </div>
    );
  }
}
