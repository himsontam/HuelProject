/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Huel Website UK', {
  viewportHeight: 1080,
  viewportWidth: 1920,
  includeShadowDom: true
}, () => {
  before(() => {
    Cypress.config('numTestsKeptInMemory', 0);
    cy.visit('https://uk.huel.com/');
  })

  it('Huel Test 1', () => {

    cy.get('.MainMenuBar .MainLinks__item:nth-child(1)').trigger('mouseover')
    cy.get('[href="/products/build-your-own-bundle"]').click();
    cy.url().should('include', '/products/build-your-own-bundle');
    cy.get('[data-testid="StepsNavStep"]', { timeout: 60000 }).should('contain', 'Select products');
    cy.get('[data-testid="ProductCardVariantFlavourPicker"]', { timeout: 60000 }).should('have.length', 9);

    // add banana
    cy.get('[data-testid="ProductCardVariantFlavourPicker"][flavour-title="Banana"]')
      .shadow()
      .find('[data-testid="FlavourPicker"]')
      .find('.FlavourPicker__Quantity-selector')
      .shadow()
      .find('.QuantitySelector')
      .find('button[data-testid="QuantitySelectorIncrease"]')
      .click();

    // add Strawberries & Cream
    cy.get('[data-testid="ProductCardVariantFlavourPicker"][flavour-title="Strawberries & Cream"]')
      .shadow()
      .find('[data-testid="FlavourPicker"]')
      .find('.FlavourPicker__Quantity-selector')
      .shadow()
      .find('.QuantitySelector')
      .find('button[data-testid="QuantitySelectorIncrease"]')
      .click();

    // add Strawberries & Cream
    cy.get('[data-testid="ProductCardVariantFlavourPicker"][flavour-title="Unflavoured & Unsweetened"]')
      .shadow()
      .find('[data-testid="FlavourPicker"]')
      .find('.FlavourPicker__Quantity-selector')
      .shadow()
      .find('.QuantitySelector')
      .find('button[data-testid="QuantitySelectorIncrease"]')
      .click();

    // click cookie accept
    cy.get('#onetrust-accept-btn-handler').click();

    // click Continue
    cy.get('[data-testid="SummaryBarContinueButton"]').click();


    // click one time purchase
    cy.get('[name="purchaseStatus"][value="onetime"]')
      .shadow()
      .find('[type="radio"]')
      .click({ force: true });

    // click Continue
    cy.get('[data-testid="SummaryBarContinueButton"]').click();


    // wait the page to load
    cy.get('.cart__header > .title', { timeout: 60000 }).should('contain', 'Your basket');

    // remove item in the basket
    cy.get('button.js-mam-removeBundle').click();

    // see the title
    cy.get('.has-text-centered', { timeout: 60000 }).should('contain', 'Your basket is empty');

    // back to product page
    cy.get('.MainMenuBar .MainLinks__item:nth-child(1)').trigger('mouseover')
    cy.get('[href="/products/build-your-own-bundle"]').click();
    cy.url().should('include', '/products/build-your-own-bundle');
    cy.get('[data-testid="StepsNavStep"]', { timeout: 60000 }).should('contain', 'Select products');
    cy.get('[data-testid="ProductCardVariantFlavourPicker"]', { timeout: 60000 }).should('have.length', 9);

    // add banana
    cy.get('[data-testid="ProductCardVariantFlavourPicker"][flavour-title="Banana"]')
      .shadow()
      .find('[data-testid="FlavourPicker"]')
      .find('.FlavourPicker__Quantity-selector')
      .shadow()
      .find('.QuantitySelector')
      .find('button[data-testid="QuantitySelectorIncrease"]')
      .click();

    // add Salted Caramel
    cy.get('[data-testid="ProductCardVariantFlavourPicker"][flavour-title="Salted Caramel"]')
      .shadow()
      .find('[data-testid="FlavourPicker"]')
      .find('.FlavourPicker__Quantity-selector')
      .shadow()
      .find('.QuantitySelector')
      .find('button[data-testid="QuantitySelectorIncrease"]')
      .click();

    // add Cinnamon Swirl
    cy.get('[data-testid="ProductCardVariantFlavourPicker"][flavour-title="Cinnamon Swirl"]')
      .shadow()
      .find('[data-testid="FlavourPicker"]')
      .find('.FlavourPicker__Quantity-selector')
      .shadow()
      .find('.QuantitySelector')
      .find('button[data-testid="QuantitySelectorIncrease"]')
      .click();


    // remove banana
    cy.get('[data-testid="ProductCardVariantFlavourPicker"][flavour-title="Banana"]')
      .shadow()
      .find('[data-testid="FlavourPicker"]')
      .find('.FlavourPicker__Quantity-selector')
      .shadow()
      .find('.QuantitySelector')
      .find('button[data-testid="QuantitySelectorDecrease"]')
      .click();

    // remove Salted Caramel
    cy.get('[data-testid="ProductCardVariantFlavourPicker"][flavour-title="Salted Caramel"]')
      .shadow()
      .find('[data-testid="FlavourPicker"]')
      .find('.FlavourPicker__Quantity-selector')
      .shadow()
      .find('.QuantitySelector')
      .find('button[data-testid="QuantitySelectorDecrease"]')
      .click();

    // remove Cinnamon Swirl
    cy.get('[data-testid="ProductCardVariantFlavourPicker"][flavour-title="Cinnamon Swirl"]')
      .shadow()
      .find('[data-testid="FlavourPicker"]')
      .find('.FlavourPicker__Quantity-selector')
      .shadow()
      .find('.QuantitySelector')
      .find('button[data-testid="QuantitySelectorDecrease"]')
      .click();


    // click more details button
    cy.get('.ProductInfo__tertiary-button > .hydrated')
      .shadow()
      .find('button')
      .click({ force: true });

    // check the modal title
    cy.get('huel-modal')
      .find('huel-modal-header-color')
      .shadow()
      .find('.ModalHeaderColor')
      .find('h2')
      .should('contain', 'Huel Black Edition');

    cy.wait(5000)
    // close the modal
    cy.get('huel-modal')
      .shadow()
      .find('[data-testid="ModalCloseButton"]')
      .click()


    // click more nutritional information button
    cy.get('huel-button-tertiary:nth-child(2)')
      .shadow()
      .find('button')
      .click({ force: true });

    // check the modal title
    cy.get('huel-modal')
      .find('huel-modal-header-color')
      .shadow()
      .find('.ModalHeaderColor')
      .find('h2')
      .should('contain', 'Nutritional Information');

    cy.wait(5000)
    // close the modal
    cy.get('huel-modal')
      .shadow()
      .find('[data-testid="ModalCloseButton"]')
      .click()
  })
})