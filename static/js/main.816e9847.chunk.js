(this["webpackJsonpunit-19-homework"]=this["webpackJsonpunit-19-homework"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"img1"},{"id":2,"image":"img2"},{"id":3,"image":"img3"},{"id":4,"image":"img4"},{"id":5,"image":"img5"},{"id":6,"image":"img6"},{"id":7,"image":"img7"},{"id":8,"image":"img8"},{"id":9,"image":"img9"},{"id":10,"image":"img10"},{"id":11,"image":"img11"},{"id":12,"image":"img12"}]')},,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var i={"./img1.JPG":20,"./img10.JPG":21,"./img11.JPG":22,"./img12.JPG":23,"./img2.JPG":24,"./img3.JPG":25,"./img4.JPG":26,"./img5.JPG":27,"./img6.JPG":28,"./img7.JPG":29,"./img8.JPG":30,"./img9.JPG":31};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=19},function(e,t,a){e.exports=a.p+"static/media/img1.f5e77fad.JPG"},function(e,t,a){e.exports=a.p+"static/media/img10.3664b80f.JPG"},function(e,t,a){e.exports=a.p+"static/media/img11.a2c2d5b2.JPG"},function(e,t,a){e.exports=a.p+"static/media/img12.3fb87d54.JPG"},function(e,t,a){e.exports=a.p+"static/media/img2.6ae65852.JPG"},function(e,t,a){e.exports=a.p+"static/media/img3.09fde49a.JPG"},function(e,t,a){e.exports=a.p+"static/media/img4.92749216.JPG"},function(e,t,a){e.exports=a.p+"static/media/img5.e135530a.JPG"},function(e,t,a){e.exports=a.p+"static/media/img6.2a843827.JPG"},function(e,t,a){e.exports=a.p+"static/media/img7.02eb8ab0.JPG"},function(e,t,a){e.exports=a.p+"static/media/img8.14fc558a.JPG"},function(e,t,a){e.exports=a.p+"static/media/img9.40938ced.JPG"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(2),c=a.n(r),o=(a(14),a(3)),m=a(4),s=a(7),d=a(5),u=a(8);a(15);var l=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};a(16);var g=function(e){return n.a.createElement("div",{className:"container"},e.children)};a(17);var p=function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Clicky Game"),n.a.createElement("span",null,"Don't click the same card twice!"),n.a.createElement("span",null,"Score: ",e.currentScore," | Top Score: ",e.topScore," "))};a(18);var f=function(e){return n.a.createElement("div",{className:"card border-secondary mb-3",onClick:function(){return e.handleClick(e.id)}},n.a.createElement("img",{className:"card-img",key:e.id,src:a(19)("./".concat(e.image,".JPG")),alt:"gameCardImage"}))};a(32);var G=function(e){return n.a.createElement("div",{className:"footer"},e.children)},J=(a(33),a(6)),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={currentScore:0,topScore:0,cards:J,pickedCards:[]},a.scoreUpdate=function(e){a.setState({currentScore:a.state.currentScore+10});var t=a.state.pickedCards;t.push(e),a.setState({pickedCards:t})},a.handleClick=function(e){a.state.pickedCards.includes(e)?a.endGame():a.scoreUpdate(e);for(var t=a.state.cards,i=t.length-1;i>0;i--){var n=Math.floor(Math.random()*(i+1)),r=t[i];t[i]=t[n],t[n]=r}a.setState({cards:t})},a.endGame=function(){a.state.currentScore>a.state.topScore&&a.setState({topScore:a.state.currentScore});a.setState({currentScore:0,pickedCards:[]})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(l,null,n.a.createElement(p,{currentScore:this.state.currentScore,topScore:this.state.topScore}),n.a.createElement(g,null,this.state.cards.map((function(t){return n.a.createElement(f,{handleClick:e.handleClick,image:t.image,key:t.id,id:t.id})}))),n.a.createElement(G,null))}}]),t}(n.a.Component);c.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.816e9847.chunk.js.map