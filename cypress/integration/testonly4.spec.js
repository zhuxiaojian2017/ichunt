

describe('Only for test',function(){
	it('running',function(){
		beforeEach(() => {
		cy.visit('/')
		  .window().should('have.property', 'appReady', true)
		})

		cy
		  .visit('https://www.ichunt.com')
		  // .wait(500)
		  .root().should('match', 'html')
		  // .get('.closexk').click()
		  // .get('#uploadForm').submit()
		  // .get('.btn-foot').submit()
		  .title()
		  .url()
		  .location('href')
		  .viewport(1600,1000)
		  // .viewport('iphone-6')
		  // .viewport('iphone-6', 'landscape')
		  .window()
		  .writeFile('test.txt','I like cy',{flag:'a+'})



	})
})