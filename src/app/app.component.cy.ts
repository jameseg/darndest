import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('mounts', () => {
    cy.mount(AppComponent);
    cy.get('h1').should('have.text', 'Hello, darndest');
  });
});
