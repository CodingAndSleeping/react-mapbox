"use strict";(self.webpackChunkreact_mapboxgl_zt=self.webpackChunkreact_mapboxgl_zt||[]).push([[433],{74362:function(A,d,o){o.r(d),o.d(d,{default:function(){return P}});var h=o(48305),s=o.n(h),E=o(25298),z=o.n(E),x=o(17069),B=o.n(x),M=o(82092),k=o.n(M),_=o(75271),n=o(91314),t=o(52676),L=(0,n.MapFactory)({accessToken:"pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg"}),F=null;function P(){var p=(0,_.useState)("/imgs/background1.jpg"),a=s()(p,2),m=a[0],K=a[1],D=(0,_.useState)("/imgs/icon.png"),f=s()(D,2),H=f[0],N=f[1],O=(0,_.useState)("#f00"),C=s()(O,2),u=C[0],Y=C[1],R=(0,_.useState)({type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{coordinates:[113.90310757834482,22.541427196370165],type:"Point"}},{type:"Feature",properties:{},geometry:{coordinates:[113.91668147739654,22.52511855694496],type:"Point"}}]}}),g=s()(R,2),$=g[0],G=g[1],U=(0,_.useState)("title"),j=s()(U,2),b=j[0],I=j[1],v=(0,_.useRef)(null),c=(0,_.useRef)(null),y=(0,_.useRef)(null),S=function(){var e,r;(e=v.current)===null||e===void 0||e.setUnit("nautical"),I(b==="title"?"title2":"title"),console.log(y.current),(r=c.current)===null||r===void 0||r.setLngLat([113.90310757834482,22.541427196370165])},T=function(e){var r,i;(r=c.current)===null||r===void 0||r.setLngLat(e.lngLat),(i=c.current)===null||i===void 0||i.setText(e.lngLat.toString())},W=function(e){console.log(e)};return(0,t.jsx)("div",{style:{height:"20rem"},children:(0,t.jsx)("div",{style:{height:"80%",border:"1px solid black"},children:(0,t.jsxs)(L,{onMapLoad:W,children:[(0,t.jsx)("button",{type:"button",onClick:S,style:{position:"absolute",zIndex:1e3},children:"\u6539\u53D8\u989C\u8272"}),(0,t.jsxs)(n.Popup,{ref:c,lngLat:[113.90310757834482,22.541427196370165],onOpen:function(e){return console.log(e)},onClose:function(e){return console.log(e.target.getLngLat())},children:[123213,(0,t.jsx)("div",{style:{backgroundColor:"#f40"},children:b}),(0,t.jsx)("div",{children:"content"})]}),(0,t.jsx)(n.Marker,{ref:y,draggable:!0,onDragEnd:function(e){return console.log(e.target.getLngLat())}}),(0,t.jsx)(n.MousePositionControl,{}),(0,t.jsx)(n.FullscreenControl,{}),(0,t.jsx)(n.ScaleControl,{ref:v}),(0,t.jsx)(n.NavigationControl,{}),(0,t.jsx)(n.CircleLayer,{id:"circle",color:u,opacity:.5,source:{type:"vector",url:"mapbox://mapbox.mapbox-streets-v6"},sourceLayer:"water",onClick:T}),(0,t.jsx)(n.FillLayer,{id:"fill",color:u,source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{coordinates:[[[113.91050389786739,22.53917900246715],[113.90865023135945,22.534556311568096],[113.91828929730542,22.531131996380907],[113.92343322222297,22.539179002551137],[113.91050389786739,22.53917900246715]]],type:"Polygon"}}]}},imgUrl:m}),(0,t.jsx)(n.LineLayer,{id:"line",color:u,source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{a:1},geometry:{coordinates:[[113.9086931063199,22.532889051350935],[113.90725732733108,22.530536146907636],[113.90813732090567,22.52642916311092],[113.91818777387965,22.530792829342246],[113.9174930421097,22.535498589395118]],type:"LineString"}}]},lineMetrics:!0},gradient:void 0,width:10,onClick:function(e){return console.log(e.features)}})]})})})}}}]);
