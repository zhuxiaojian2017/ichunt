describe('Only for test',function(){
	it('running',function(){
		cy
		  .visit('https://www.ichunt.com/v3/pointmall')
		  // .request('/v3/pointmall').then((response) =>{
		  // 	expect(response.status).to.eq(200)
		  // })
		  .wait(500)
		  .root().should('match', 'html')
		  .get('.closexk').click()
		  // .get('.closexk').screenshot()
		  // .get('.group-cp-head >img').screenshot({ x: 20, y: 20, width: 100, height: 100 })
		  // .scrollTo('.mall-c-group')
		  // .get('p').filter('.t1').eq(0)
		   Cypress.Screenshot.defaults(
			  {
	  			screenshotOnRunFailure: false		//true：开启失败截图，fause：关闭失败截图
			})
		  // cy.get(':nth-child(1) > .hover > a > .wrap > .t1').should('contain','购物车')
		  // cy.get('.name > .topiszy').should('contain','购物车')
		  cy.getCookies().spread(('PHPSESSID','Yo4teW_csrf','Yo4teW_gid')) => {

		  }


	})
})