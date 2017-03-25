var he = new Object({
	fam,
	fri,
	sab,
	gra
}),
fam = new Set([1,2,3,4,5,2,4,5,6,3]);
fam.add(23,23);//增
fam.delect(3,5);//删
fam.has(23);//查
fam.replace(1,'X');
for (let X of fam){console.log(X)}//遍历



fri = new Set(['a','a','b','c','c','d','e']);

fri.add(2,4,3);
fri.delect('a','e');

sab = new Set([2,34,2,3,41,35]),
gra = new Set([1,2,4,8,5,5,8,9,0,4]);

//冻结

let  hisgf = {
	name: 'aaa',
	age: '20'
};

let unchange = Object.freeze(hisgf);


let hieper = new Object();


