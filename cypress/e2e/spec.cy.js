describe('template spec', () => {
  it('passes', () => {
    cy.visit('/sample.html')
    cy.get('#id1').clear().type('jnani')
    cy.get('#id2').type('Random{enter}')
    cy.get('#id3').select('Option3')
    cy.get('[name="check1"]').uncheck()
    cy.get('[name="check2"]').check()
    cy.get('[name="check3"]').invoke("removeAttr","disabled").check()
    cy.get('#myCanvas').click()


  })
})