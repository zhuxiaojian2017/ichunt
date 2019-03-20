function  login(){
	cy.log('login start')
	cy.get('.login-tab ul li').eq(0).click();
	cy.get('#usernamexp').type('18682159081').blur();
	cy.get('#passwordxp').type('123456');
	cy.url().should('contain', 'login')	
	cy.get('.login-tabbox button').eq(0).click();
}


function getCookie(name){ //取cookies函数{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;
}



export default {
	login,
	getCookie
}