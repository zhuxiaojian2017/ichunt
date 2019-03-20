describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://sz.ichunt.com/v3/user/reciveaddress.html')
		cy.wait(200)
		//cy.get('.login-name > a').eq(0).click();
		// cy.get('.login-tab ul li').eq(0).click();
		cy.get('.login-tab ul li').eq(0).as('loginclick')
		cy.get('@loginclick').click()
		cy.get('#usernamexp').type('18682159081');
		cy.get('#passwordxp').type('123456');
		cy.url().should('contain', 'login')
		
		cy.get('.login-tabbox button').eq(0).click();
		
		cy.get('#namex').should('contain','zero')
		cy.get('.table-but .editList').eq(0).click();
		// cy.get("#nameA").type("啊大师大师大师");
		// cy.get("#nameA").clear()
		cy.get("#nameA").clear().type("test1").blur();
		//cy.get('.submitAd').eq(0).click();
		
		cy.get('#namex').then(($text)=>{
	        const txt = $text.text();
	        cy.log(txt)
	        console.log(txt)
	    })
  })
})
