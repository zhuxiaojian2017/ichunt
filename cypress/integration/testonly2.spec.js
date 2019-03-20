
describe('only test2',function(){
	it('run test',function(){
		cy
		  .visit("https://www.ichunt.com/v3/xianhuo?ptag=selfshop-btopnav")
		  .wait(200)
		  .get('body').then(($body)=>{
			 if ($body.find('.closexk').length) {
			    cy.get('.closexk').click()
			  }else{
			  	cy.log('无弹框')	
			  }
	    cy.readFile('cypress.json').should('exist')			//断言文件存在
		cy
		  // .get('.f-blue').first()
		  .get('.addCartx').nextAll()
		  .get('.total-rank >li').not('.act').should('have.length',2)
		  .get('.ax').parents('.clear')			//匹配导航栏

		  .get('.details_input').type('CL10')
		  .get('span').filter('.addCartx').first()
		  .get('span').filter('.addCartx').last()
		  // .get('span').filter('.addCartx').next()
		  .get('.self-box li:first')
		cy.focused().then(($el) => {
			cy.log($el)
		cy
		  .contains('首页').click()
		  // .get('.fx21:first').click()	//点击进入首页
		  // .go('back')		//返回现货页面
		  .go(-1)
		  .wait(200)
		  // .go('forward')	//再前进到首页
		  // .go(1)
		// cy.hash().should('eq','#abc')
		  .location('search').should('eq','?ptag=selfshop-btopnav')   //匹配ptag值
		  // .get('.allClass > :nth-child(1)').trigger('mouseover')		//鼠标悬停到自营分类
		  // .get('.classify-two').should('be.visible')				//判断自营分类可见
		  .get('.classify-two').invoke('show').click()		//显示元素并执行点击操作

		const getName = () => {
		  return 'Jane Lane'
		}
		cy.wrap({ name: getName }).invoke('name').should('eq', 'Jane Lane')   //true
		cy
		  .get('.one-4')
		  .click(10,10)
		  // .pause()		//暂停
		  .click(10,20)
		  .click(10,30)
		  // .get('li').prev('.w-183')		//用class定位元素
		  // .get('.w-150').prev()				//查找"w-183"类同辈的上一个元素
		  .get('.w-150').prevAll()			//查找"w-183"类同辈的所有元素
		  .get('.w-150').prevUntil()
		  .get('.w-150').siblings()
		  .get('li').siblings('.w-150')





		  		})

		  // .fixture('users.json').as('usersData')
		  // .log('usersData')

		
		});
	})
})
// cy.exec('npm -v')