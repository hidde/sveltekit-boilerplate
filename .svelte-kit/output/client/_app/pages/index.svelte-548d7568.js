import{S as q,i as O,s as T,e as f,t as v,k as w,c as u,a as h,h as m,d as c,m as D,g as y,J as _,K as k,C as K,L as x,M as U}from"../chunks/vendor-c28e2ea2.js";function J(o,e,n){const r=o.slice();return r[2]=e[n],r}function j(o){let e,n;return{c(){e=f("p"),n=v("No pets found.")},l(r){e=u(r,"P",{});var l=h(e);n=m(l,"No pets found."),l.forEach(c)},m(r,l){y(r,e,l),_(e,n)},p:k,d(r){r&&c(e)}}}function z(o){let e,n=o[0],r=[];for(let l=0;l<n.length;l+=1)r[l]=M(J(o,n,l));return{c(){e=f("ul");for(let l=0;l<r.length;l+=1)r[l].c()},l(l){e=u(l,"UL",{});var a=h(e);for(let t=0;t<r.length;t+=1)r[t].l(a);a.forEach(c)},m(l,a){y(l,e,a);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(l,a){if(a&1){n=l[0];let t;for(t=0;t<n.length;t+=1){const i=J(l,n,t);r[t]?r[t].p(i,a):(r[t]=M(i),r[t].c(),r[t].m(e,null))}for(;t<r.length;t+=1)r[t].d(1);r.length=n.length}},d(l){l&&c(e),U(r,l)}}}function M(o){let e,n=o[2].title+"",r;return{c(){e=f("li"),r=v(n)},l(l){e=u(l,"LI",{});var a=h(e);r=m(a,n),a.forEach(c)},m(l,a){y(l,e,a),_(e,r)},p:k,d(l){l&&c(e)}}}function B(o){let e,n,r,l,a;return{c(){e=f("div"),n=v("\xAF\\_(\u30C4)_/\xAF"),r=w(),l=f("pre"),a=v(`
      Your data will show up here when you've configured everything correctly
    `)},l(t){e=u(t,"DIV",{});var i=h(e);n=m(i,"\xAF\\_(\u30C4)_/\xAF"),i.forEach(c),r=D(t),l=u(t,"PRE",{});var E=h(l);a=m(E,`
      Your data will show up here when you've configured everything correctly
    `),E.forEach(c)},m(t,i){y(t,e,i),_(e,n),y(t,r,i),y(t,l,i),_(l,a)},p:k,d(t){t&&c(e),t&&c(r),t&&c(l)}}}function F(o){let e,n,r=JSON.stringify(o[0],null,2)+"",l;return{c(){e=f("div"),n=f("pre"),l=v(r)},l(a){e=u(a,"DIV",{});var t=h(e);n=u(t,"PRE",{});var i=h(n);l=m(i,r),i.forEach(c),t.forEach(c)},m(a,t){y(a,e,t),_(e,n),_(n,l)},p:k,d(a){a&&c(e)}}}function G(o){let e,n,r,l,a,t,i,E,I,P,b,R,H;function V(s,d){return s[0]&&s[0].length?z:j}let g=V(o)(o);function Y(s,d){return s[0]&&s[0].length?F:B}let S=Y(o)(o);return{c(){e=f("article"),n=f("header"),r=f("h1"),l=v("Sanity + SvelteKit"),a=w(),t=f("main"),i=f("h2"),E=v("Pets"),I=w(),g.c(),P=w(),b=f("h2"),R=v("Data"),H=w(),S.c()},l(s){e=u(s,"ARTICLE",{});var d=h(e);n=u(d,"HEADER",{});var L=h(n);r=u(L,"H1",{});var N=h(r);l=m(N,"Sanity + SvelteKit"),N.forEach(c),L.forEach(c),a=D(d),t=u(d,"MAIN",{});var p=h(t);i=u(p,"H2",{});var A=h(i);E=m(A,"Pets"),A.forEach(c),I=D(p),g.l(p),P=D(p),b=u(p,"H2",{});var C=h(b);R=m(C,"Data"),C.forEach(c),H=D(p),S.l(p),p.forEach(c),d.forEach(c)},m(s,d){y(s,e,d),_(e,n),_(n,r),_(r,l),_(e,a),_(e,t),_(t,i),_(i,E),_(t,I),g.m(t,null),_(t,P),_(t,b),_(b,R),_(t,H),S.m(t,null)},p(s,[d]){g.p(s,d),S.p(s,d)},i:k,o:k,d(s){s&&c(e),g.d(),S.d()}}}function Q(o,e,n){let r=e.pets;return o.$$set=l=>{n(1,e=K(K({},e),x(l)))},e=x(e),[r]}class $ extends q{constructor(e){super();O(this,e,Q,G,T,{})}}export{$ as default};
