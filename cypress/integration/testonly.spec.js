import {login,getCookie} from './login.js'

require('./login.js')


Cypress.Cookies.defaults({
  whitelist: 'Yo4teW_uid'
})

describe('only test',function(){
	it('let is go on',function(){
		cy.visit("https://sz.ichunt.com/")
		cy.wait(200)
		cy.get('body').then(($body)=>{
			 if ($body.find('.closexk').length) {
			    	cy.get('.closexk').click()
			    	cy.get('.input-text').eq(0).type('Lm358').blur()
			    	cy.get('.login-name > a').eq(0).click();
			    	login();
			  }else{
			  	cy.get('.login-name > a').eq(0).click()
			  	login()
			  	cy.log('3')	
			  }
		});
		cy
		  .get('#namex')
		  .should('contain','zero')
		  // .and('have.attr','href')
		  .and('have.attr','href','/v3/user/order.html?ptag=index-stopnav')
		  // .and('match',/user/)
		cy
		  .get('.topiszy').eq(0).as('cart')
		  .get('@cart').should('not.be.empty')
		  // .get('.topiszy').check({force:false})
		  // .get('.search-result input').eq(0).type("LM358MX")
		  .get('div.search-cont').children('.search-result')
		  .get('div.search-input').children().should('have.length',4)
		  // .clearCookie('Yo4teW_skey').should('be.null')
		  // .getCookies().should('have.length',13)
			//cy.getCookie('Yo4teW_uid').should('have.property','value','64650')

		  // .clearCookies()
		  // .clearCookie('Yo4teW_skey').should('be.null')

		  // .should('not.be.empty')

		  // expect()

		// cy.get('#namex').and('contain','zero')
		// cy.get('#namex').should('contain','zero').and('have.attr','href')
		var test=getCookie('Yo4teW_uid');
		cy
		  // .get('.advertising').eq(0).click('left')
		  .log(test)
		// cy.clock()
		// cy.tick(1000)

		// cy.get('.search-result input').eq(0).type("LM358MX")
		// cy.clock().then((click) =>{
		//   clock.tick(1000)
		// })
		  // .clock(now)
		  // .get('.search-result input').click({ multiple: true })   //点击所以搜索框
		  .get('div.wrap').closest('a')
		  // .get('.search-cont button').eq(0).click()			//点击搜索
		  // .wait(5000)
		  // .get('.addCartlx').eq(0).click({force: true})		//对第一个匹配的sku加入购物车
		  	// cy.log(cartnum)
		  	// console.log(cartnum)				//打印购物车数量值
		// cy.document()
		cy.get('.search-result input').eq(0).type("LM358MX")	//输入搜索value
		  .get('.search-cont button').eq(0).click()			//点击搜索
		  .wait(5000)

		 cy
		  .get('.addCartlx')
		  .each(($el, index, $list) => {
		  		// cy.log($el)
		  		// cy.log(index)
		  		// cy.log($list)
		  		   if (index < 3) {
		  		   	  cy.wait(1000)
		  			  cy.get('.addCartlx').eq(index).click({force: true});
		  			  cy.get('.close').click().end()		//点击"继续找货"按钮弹框
		  		   }else {
		  		   	 cy.wait(1000)
		  		   	 cy.get('#carNum').then(($text) =>{
		  			  var cartnum = $text.text();
		  			 	 cy.log(cartnum)
					  })
		  		   }
		  })
		// const fn = cy.get('.addCartlx').its('length').then(($text) =>{
		// 		var car_len = $text;
		// 		return car_len;
		// })
		// cy.log(cy.wrap({ getNum: fn }).its('getNum'))

		// var lengths = cy.get('.addCartlx').its('length').should('be.gt', 2)
		// cy.log(lengths)
		// console.log(lengths)


	})
})