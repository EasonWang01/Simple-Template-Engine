var tpl = '<p>Hello, my name is <%name%>. I\'m <%age%> years<%ss%> old.</p>',
    a,
    data = {
    	name:"eason",
    	age:20
    },
    str;


var compile = function(tpl,data){
	var reg = /<%([^%>]+)%>/g;

	
	while((b =  reg.exec(tpl))!=null){
		if(data[b[1]]!=null){//如data沒出現tpl的<%%>
		tpl = tpl.replace(b[0],data[b[1]]);
		};
	};
console.log(tpl);
};


compile(tpl,data);
