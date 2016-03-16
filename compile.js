var tpl = '<p>Hello, my name is <%name%>. I\'m <%age%> years old.</p>',
    a,
    data = {
    	name:"eason",
    	age:24
    },
    str;


var compile = function(tpl,data){
	var reg = /<%([^%>]+)%>/g;

	
	while((b =  reg.exec(tpl))!=null){
		tpl = tpl.replace(b[0],data[b[1]]);
		
	};
console.log(tpl);
};


compile(tpl,data);
