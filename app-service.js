	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClickOverlay'])
Z([[7],[3,'closeOnClickOverlay']])
Z([3,'van-action-sheet'])
Z([[7],[3,'overlay']])
Z([3,'bottom'])
Z([[7],[3,'round']])
Z([[7],[3,'safeAreaInsetBottom']])
Z([[7],[3,'show']])
Z([[7],[3,'zIndex']])
Z([[7],[3,'title']])
Z([3,'onClose'])
Z([3,'van-action-sheet__close'])
Z([3,'close'])
Z([[7],[3,'description']])
Z([[2,'&&'],[[7],[3,'actions']],[[6],[[7],[3,'actions']],[3,'length']]])
Z([[7],[3,'actions']])
Z([3,'index'])
Z([[7],[3,'appParameter']])
Z([3,'onSelect'])
Z([3,'bindContact'])
Z([3,'bindError'])
Z([3,'bindGetPhoneNumber'])
Z([3,'bindGetUserInfo'])
Z([3,'bindLaunchApp'])
Z([3,'bindOpenSetting'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'action-sheet__item']],[[8],'disabled',[[2,'||'],[[6],[[7],[3,'item']],[3,'disabled']],[[6],[[7],[3,'item']],[3,'loading']]]]]],[3,' van-hairline--top '],[[2,'||'],[[6],[[7],[3,'item']],[3,'className']],[1,'']]])
Z([[7],[3,'index']])
Z([3,'van-action-sheet__item--hover'])
Z([[7],[3,'lang']])
Z([[6],[[7],[3,'item']],[3,'openType']])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
Z([[2,'?:'],[[6],[[7],[3,'item']],[3,'color']],[[2,'+'],[1,'color: '],[[6],[[7],[3,'item']],[3,'color']]],[1,'']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'loading']]])
Z([[6],[[7],[3,'item']],[3,'subname']])
Z([3,'van-action-sheet__loading'])
Z([3,'20px'])
Z([[7],[3,'cancelText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'active-class'])
Z([3,'onCancel'])
Z([3,'onChange'])
Z([3,'onConfirm'])
Z([[7],[3,'cancelButtonText']])
Z([3,'van-area__picker'])
Z([3,'column-class'])
Z([[7],[3,'displayColumns']])
Z([[7],[3,'confirmButtonText']])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'loading']])
Z([[7],[3,'title']])
Z([3,'toolbar-class'])
Z([3,'name'])
Z([[7],[3,'visibleItemCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appParameter']])
Z([[7],[3,'ariaLabel']])
Z([3,'bindContact'])
Z([3,'bindError'])
Z([3,'bindGetPhoneNumber'])
Z([3,'bindGetUserInfo'])
Z([3,'bindLaunchApp'])
Z([3,'bindOpenSetting'])
Z([3,'onClick'])
Z([[7],[3,'businessId']])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'button']],[[4],[[5],[[5],[[5],[[7],[3,'type']]],[[7],[3,'size']]],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'block',[[7],[3,'block']]],[[8],'round',[[7],[3,'round']]]],[[8],'plain',[[7],[3,'plain']]]],[[8],'square',[[7],[3,'square']]]],[[8],'loading',[[7],[3,'loading']]]],[[8],'disabled',[[7],[3,'disabled']]]],[[8],'hairline',[[7],[3,'hairline']]]],[[8],'unclickable',[[2,'||'],[[7],[3,'disabled']],[[7],[3,'loading']]]]]]]]],[3,' '],[[2,'?:'],[[7],[3,'hairline']],[1,'van-hairline--surround'],[1,'']]])
Z([3,'van-button--active hover-class'])
Z([[7],[3,'id']])
Z([[7],[3,'lang']])
Z([[7],[3,'openType']])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
Z([a,[[7],[3,'baseStyle']],z[10][3],[[7],[3,'customStyle']]])
Z([[7],[3,'loading']])
Z([[12],[[7],[3,'loadingColor']],[[5],[[5],[[5],[[7],[3,'type']]],[[7],[3,'color']]],[[7],[3,'plain']]]])
Z([3,'loading-class'])
Z([[7],[3,'loadingSize']])
Z([[7],[3,'loadingType']])
Z([[7],[3,'loadingText']])
Z([[7],[3,'icon']])
Z([3,'van-button__icon'])
Z([3,'line-height: inherit;'])
Z(z[27])
Z([3,'1.2em'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'custom-class van-card'])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'card__header']],[[8],'center',[[7],[3,'centered']]]]])
Z([3,'onClickThumb'])
Z([3,'van-card__thumb'])
Z([[7],[3,'thumb']])
Z([3,'thumb'])
Z([[7],[3,'tag']])
Z([3,'van-card__tag'])
Z([3,'danger'])
Z([a,[3,'van-card__content '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'card__content']],[[8],'center',[[7],[3,'centered']]]]]])
Z([[7],[3,'title']])
Z([3,'title'])
Z([[7],[3,'desc']])
Z([3,'desc'])
Z([3,'tags'])
Z([3,'van-card__bottom'])
Z([3,'price-top'])
Z([[2,'||'],[[7],[3,'price']],[[2,'==='],[[7],[3,'price']],[1,0]]])
Z([3,'price'])
Z([[2,'||'],[[7],[3,'originPrice']],[[2,'==='],[[7],[3,'originPrice']],[1,0]]])
Z([[7],[3,'num']])
Z([3,'num'])
Z([3,'bottom'])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'cell']],[[4],[[5],[[5],[[7],[3,'size']]],[[9],[[9],[[9],[[8],'center',[[7],[3,'center']]],[[8],'required',[[7],[3,'required']]]],[[8],'borderless',[[2,'!'],[[7],[3,'border']]]]],[[8],'clickable',[[2,'||'],[[7],[3,'isLink']],[[7],[3,'clickable']]]]]]]]]])
Z([3,'van-cell--hover hover-class'])
Z([3,'70'])
Z([[7],[3,'customStyle']])
Z([[7],[3,'icon']])
Z([3,'van-cell__left-icon-wrap'])
Z([3,'van-cell__left-icon'])
Z(z[5])
Z([3,'icon'])
Z([3,'van-cell__title title-class'])
Z([[2,'?:'],[[7],[3,'titleWidth']],[[2,'+'],[[2,'+'],[[2,'+'],[1,'max-width:'],[[7],[3,'titleWidth']]],[1,';min-width:']],[[7],[3,'titleWidth']]],[1,'']])
Z([[7],[3,'title']])
Z([3,'title'])
Z([[2,'||'],[[7],[3,'label']],[[7],[3,'useLabelSlot']]])
Z([3,'van-cell__label label-class'])
Z([[7],[3,'useLabelSlot']])
Z([3,'label'])
Z([[7],[3,'label']])
Z([3,'van-cell__value value-class'])
Z([[2,'||'],[[7],[3,'value']],[[2,'==='],[[7],[3,'value']],[1,0]]])
Z([[7],[3,'isLink']])
Z([3,'van-cell__right-icon-wrap right-icon-class'])
Z([3,'van-cell__right-icon'])
Z([[2,'?:'],[[7],[3,'arrowDirection']],[[2,'+'],[[2,'+'],[1,'arrow'],[1,'-']],[[7],[3,'arrowDirection']]],[1,'arrow']])
Z([3,'right-icon'])
Z([3,'extra'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-checkbox custom-class'])
Z([3,'toggle'])
Z([3,'van-checkbox__icon-wrap'])
Z([[7],[3,'useIconSlot']])
Z([3,'icon'])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'checkbox__icon']],[[4],[[5],[[5],[[7],[3,'shape']]],[[9],[[8],'disabled',[[2,'||'],[[7],[3,'disabled']],[[7],[3,'parentDisabled']]]],[[8],'checked',[[7],[3,'value']]]]]]]])
Z([3,'icon-class'])
Z([3,'line-height: 1.25em;'])
Z([3,'success'])
Z([3,'0.8em'])
Z([[12],[[6],[[7],[3,'computed']],[3,'iconStyle']],[[5],[[5],[[5],[[5],[[5],[[7],[3,'checkedColor']]],[[7],[3,'value']]],[[7],[3,'disabled']]],[[7],[3,'parentDisabled']]],[[7],[3,'iconSize']]]])
Z([3,'onClickLabel'])
Z([a,[3,'label-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'checkbox__label']],[[4],[[5],[[5],[[7],[3,'labelPosition']]],[[8],'disabled',[[2,'||'],[[7],[3,'disabled']],[[7],[3,'parentDisabled']]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-circle'])
Z([[2,'!'],[[7],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'van-collapse-item custom-class '],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[1,0]],[1,'van-hairline--top'],[1,'']]])
Z([3,'onClick'])
Z([[2,'&&'],[[7],[3,'border']],[[7],[3,'expanded']]])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'collapse-item__title']],[[9],[[8],'disabled',[[7],[3,'disabled']]],[[8],'expanded',[[7],[3,'expanded']]]]]])
Z([[7],[3,'clickable']])
Z([3,'van-cell'])
Z([3,'van-cell--hover'])
Z([[7],[3,'icon']])
Z([[7],[3,'isLink']])
Z([[7],[3,'label']])
Z([3,'van-cell__right-icon'])
Z([[7],[3,'title']])
Z([3,'title-class'])
Z([[7],[3,'value']])
Z([3,'title'])
Z(z[14])
Z([3,'icon'])
Z(z[16])
Z([3,'value'])
Z([3,'right-icon'])
Z(z[19])
Z([3,'onTransitionEnd'])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'collapse-item__wrapper']],[[8],'transition',[[7],[3,'transition']]]]])
Z([a,[3,'height: '],[[7],[3,'contentHeight']],[3,';']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-count-down'])
Z([[7],[3,'useSlot']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'active-class'])
Z([3,'onCancel'])
Z([3,'onChange'])
Z([3,'onConfirm'])
Z([[7],[3,'cancelButtonText']])
Z([3,'van-datetime-picker'])
Z([3,'column-class'])
Z([[7],[3,'columns']])
Z([[7],[3,'confirmButtonText']])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'showToolbar']])
Z([[7],[3,'title']])
Z([3,'toolbar-class'])
Z([[7],[3,'visibleItemCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClickOverlay'])
Z([[7],[3,'closeOnClickOverlay']])
Z([a,[3,'van-dialog '],[[7],[3,'className']]])
Z([a,[3,'width: '],[[12],[[6],[[7],[3,'utils']],[3,'addUnit']],[[5],[[7],[3,'width']]]],[3,';'],[[7],[3,'customStyle']]])
Z([[7],[3,'overlay']])
Z([[7],[3,'overlayStyle']])
Z([[7],[3,'show']])
Z([[7],[3,'transition']])
Z([[7],[3,'zIndex']])
Z([[2,'||'],[[7],[3,'title']],[[7],[3,'useTitleSlot']]])
Z([a,[3,'van-dialog__header '],[[2,'?:'],[[2,'||'],[[7],[3,'message']],[[7],[3,'useSlot']]],[1,''],[1,'van-dialog--isolated']]])
Z([[7],[3,'useTitleSlot']])
Z([3,'title'])
Z([[7],[3,'title']])
Z([[7],[3,'useSlot']])
Z([[7],[3,'message']])
Z([3,'van-hairline--top van-dialog__footer'])
Z([[7],[3,'showCancelButton']])
Z([3,'onCancel'])
Z([3,'van-dialog__button van-hairline--right'])
Z([3,'van-dialog__cancel'])
Z([a,[3,'color: '],[[7],[3,'cancelButtonColor']]])
Z([[6],[[7],[3,'loading']],[3,'cancel']])
Z([3,'large'])
Z([[7],[3,'showConfirmButton']])
Z([[7],[3,'appParameter']])
Z([3,'onConfirm'])
Z([3,'bindContact'])
Z([3,'bindError'])
Z([3,'bindGetPhoneNumber'])
Z([3,'bindGetUserInfo'])
Z([3,'bindLaunchApp'])
Z([3,'bindOpenSetting'])
Z([[7],[3,'businessId']])
Z([3,'van-dialog__button'])
Z([3,'van-dialog__confirm'])
Z([a,z[21][1],[[7],[3,'confirmButtonColor']]])
Z([[7],[3,'lang']])
Z([[6],[[7],[3,'loading']],[3,'confirm']])
Z([[7],[3,'confirmButtonOpenType']])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
Z(z[23])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showWrapper']])
Z([3,'onOpened'])
Z([3,'onClosed'])
Z([3,'toggle'])
Z([3,'onOpen'])
Z([3,'onClose'])
Z([[7],[3,'closeOnClickOverlay']])
Z([a,[3,'position: absolute;'],[[7],[3,'popupStyle']]])
Z([[2,'?:'],[[7],[3,'transition']],[[7],[3,'duration']],[1,0]])
Z([[7],[3,'overlay']])
Z(z[7][1])
Z([[2,'?:'],[[2,'==='],[[7],[3,'direction']],[1,'down']],[1,'top'],[1,'bottom']])
Z([[7],[3,'showPopup']])
Z([[7],[3,'options']])
Z([3,'value'])
Z([3,'onOptionTap'])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'dropdown-item__option']],[[8],'active',[[2,'==='],[[6],[[7],[3,'item']],[3,'value']],[[7],[3,'value']]]]]])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'value']],[[7],[3,'value']]])
Z([3,'van-dropdown-item__icon'])
Z([[7],[3,'activeColor']])
Z([3,'success'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'arrowDirection']])
Z([[7],[3,'border']])
Z([[7],[3,'center']])
Z([[7],[3,'clickable']])
Z([3,'van-field'])
Z([[7],[3,'customStyle']])
Z([[7],[3,'leftIcon']])
Z([[7],[3,'isLink']])
Z([[7],[3,'required']])
Z([[7],[3,'size']])
Z([[7],[3,'label']])
Z([[7],[3,'titleWidth']])
Z([3,'left-icon'])
Z([3,'icon'])
Z([3,'label'])
Z([3,'title'])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'field__body']],[[4],[[5],[[5],[[7],[3,'type']]],[[7],[3,'system']]]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'clearable']],[[7],[3,'focused']]],[[7],[3,'value']]],[[2,'!'],[[7],[3,'readonly']]]])
Z([3,'onClear'])
Z([3,'van-field__clear-root van-field__icon-root'])
Z([3,'clear'])
Z([3,'16px'])
Z([3,'onClickIcon'])
Z([3,'van-field__icon-container'])
Z([[2,'||'],[[7],[3,'rightIcon']],[[7],[3,'icon']]])
Z([a,[3,'van-field__icon-root '],[[7],[3,'iconClass']]])
Z([3,'right-icon-class'])
Z(z[24])
Z(z[21])
Z([3,'right-icon'])
Z(z[13])
Z([3,'button'])
Z([[7],[3,'errorMessage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appParameter']])
Z([3,'onClick'])
Z([3,'bindContact'])
Z([3,'bindError'])
Z([3,'bindGetPhoneNumber'])
Z([3,'bindGetUserInfo'])
Z([3,'bindLaunchApp'])
Z([3,'bindOpenSetting'])
Z([[7],[3,'businessId']])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'goods-action-button']],[[4],[[5],[[5],[[7],[3,'type']]],[[9],[[9],[[8],'first',[[7],[3,'isFirst']]],[[8],'last',[[7],[3,'isLast']]]],[[8],'plain',[[7],[3,'plain']]]]]]]])
Z([[7],[3,'color']])
Z([3,'van-goods-action-button__inner'])
Z([[7],[3,'disabled']])
Z([[7],[3,'id']])
Z([[7],[3,'lang']])
Z([[7],[3,'loading']])
Z([[7],[3,'openType']])
Z([[7],[3,'plain']])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
Z([[7],[3,'type']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appParameter']])
Z([3,'onClick'])
Z([3,'bindContact'])
Z([3,'bindError'])
Z([3,'bindGetPhoneNumber'])
Z([3,'bindGetUserInfo'])
Z([3,'bindLaunchApp'])
Z([3,'bindOpenSetting'])
Z([[7],[3,'businessId']])
Z([3,'van-goods-action-icon'])
Z([[7],[3,'disabled']])
Z([[7],[3,'id']])
Z([[7],[3,'lang']])
Z([[7],[3,'loading']])
Z([[7],[3,'openType']])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
Z([3,'large'])
Z([3,'van-goods-action-icon__content'])
Z([[7],[3,'icon']])
Z([3,'van-goods-action-icon__icon'])
Z([3,'icon-class'])
Z([[7],[3,'dot']])
Z([[7],[3,'info']])
Z(z[22])
Z([3,'20px'])
Z([3,'icon'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'grid-item']],[[8],'square',[[7],[3,'square']]]]])
Z([[7],[3,'viewStyle']])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'grid-item__content']],[[9],[[9],[[9],[[8],'center',[[7],[3,'center']]],[[8],'square',[[7],[3,'square']]]],[[8],'clickable',[[7],[3,'clickable']]]],[[8],'surround',[[2,'&&'],[[7],[3,'border']],[[7],[3,'gutter']]]]]]],[3,' '],[[2,'?:'],[[7],[3,'border']],[1,'van-hairline--surround'],[1,'']]])
Z([[7],[3,'contentStyle']])
Z([[7],[3,'useSlot']])
Z([3,'van-grid-item__icon'])
Z([[7],[3,'icon']])
Z([[7],[3,'dot']])
Z([[7],[3,'info']])
Z(z[7])
Z([3,'icon'])
Z([3,'van-grid-item__text'])
Z([[7],[3,'text']])
Z([3,'text'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'custom-class '],[[7],[3,'classPrefix']],[3,' '],[[2,'?:'],[[7],[3,'isImageName']],[1,'van-icon--image'],[[2,'+'],[[2,'+'],[[7],[3,'classPrefix']],[1,'-']],[[7],[3,'name']]]]])
Z([a,[3,'color: '],[[7],[3,'color']],[3,';font-size: '],[[12],[[6],[[7],[3,'utils']],[3,'addUnit']],[[5],[[7],[3,'size']]]],[3,';'],[[7],[3,'customStyle']]])
Z([[2,'||'],[[2,'!=='],[[7],[3,'info']],[1,null]],[[7],[3,'dot']]])
Z([3,'van-icon__info'])
Z([[7],[3,'dot']])
Z([[7],[3,'info']])
Z([[7],[3,'isImageName']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'image']],[[8],'round',[[7],[3,'round']]]]]])
Z([[7],[3,'viewStyle']])
Z([[2,'!'],[[7],[3,'error']]])
Z([[2,'&&'],[[7],[3,'loading']],[[7],[3,'showLoading']]])
Z([3,'loading-class van-image__loading'])
Z([[7],[3,'useLoadingSlot']])
Z([3,'loading'])
Z([3,'photo-o'])
Z([3,'22'])
Z([[2,'&&'],[[7],[3,'error']],[[7],[3,'showError']]])
Z([3,'error-class van-image__error'])
Z([[7],[3,'useErrorSlot']])
Z([3,'error'])
Z([3,'warning-o'])
Z(z[9])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'van-index-anchor '],[[2,'?:'],[[7],[3,'active']],[1,'van-index-anchor--active van-hairline--bottom'],[1,'']]])
Z([[7],[3,'anchorStyle']])
Z([[7],[3,'useSlot']])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-index-bar'])
Z([[7],[3,'showSidebar']])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'&&'],[[2,'!=='],[[7],[3,'info']],[1,null]],[[2,'!=='],[[7],[3,'info']],[1,'']]],[[7],[3,'dot']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'custom-class van-loading '],[[2,'?:'],[[7],[3,'vertical']],[1,'van-loading--vertical'],[1,'']]])
Z([[7],[3,'array12']])
Z([3,'index'])
Z([[2,'==='],[[7],[3,'type']],[1,'spinner']])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'nav-bar']],[[8],'fixed',[[7],[3,'fixed']]]]],[3,' custom-class '],[[2,'?:'],[[7],[3,'border']],[1,'van-hairline--bottom'],[1,'']]])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,'; padding-top: '],[[2,'?:'],[[7],[3,'safeAreaInsetTop']],[[7],[3,'statusBarHeight']],[1,0]],[3,'px;']])
Z([3,'onClickLeft'])
Z([3,'van-nav-bar__left'])
Z([[2,'||'],[[7],[3,'leftArrow']],[[7],[3,'leftText']]])
Z([[7],[3,'leftArrow']])
Z([3,'van-nav-bar__arrow'])
Z([3,'arrow-left'])
Z([3,'16px'])
Z([[7],[3,'leftText']])
Z([3,'left'])
Z([3,'van-nav-bar__title title-class van-ellipsis'])
Z([[7],[3,'title']])
Z([3,'title'])
Z([3,'onClickRight'])
Z([3,'van-nav-bar__right'])
Z([[7],[3,'rightText']])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'onClick'])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'notice-bar']],[[9],[[8],'withicon',[[7],[3,'mode']]],[[8],'wrapable',[[7],[3,'wrapable']]]]]]])
Z([a,[3,'color: '],[[7],[3,'color']],[3,'; background-color: '],[[7],[3,'backgroundColor']],[3,';']])
Z([[7],[3,'leftIcon']])
Z([3,'van-notice-bar__left-icon'])
Z(z[4])
Z([3,'16px'])
Z([3,'left-icon'])
Z([[2,'==='],[[7],[3,'mode']],[1,'closeable']])
Z([3,'onClickIcon'])
Z([3,'van-notice-bar__right-icon'])
Z([3,'cross'])
Z([[2,'==='],[[7],[3,'mode']],[1,'link']])
Z(z[11])
Z([3,'arrow'])
Z([3,'right-icon'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTap'])
Z([3,'van-notify__container'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,';']])
Z([3,'slide-down'])
Z([[7],[3,'show']])
Z([[7],[3,'safeAreaInsetTop']])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([3,'noop'])
Z([3,'van-overlay'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,'; '],[[7],[3,'customStyle']]])
Z([[7],[3,'duration']])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-panel van-hairline--top-bottom custom-class'])
Z([[2,'||'],[[2,'||'],[[7],[3,'title']],[[7],[3,'desc']]],[[7],[3,'status']]])
Z([3,'header-class'])
Z([[7],[3,'desc']])
Z([[7],[3,'title']])
Z([[7],[3,'status']])
Z([3,'van-panel__header-value'])
Z([3,'header'])
Z([[7],[3,'useFooterSlot']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-picker custom-class'])
Z([[2,'==='],[[7],[3,'toolbarPosition']],[1,'top']])
Z([[9],[[9],[[9],[[8],'showToolbar',[[7],[3,'showToolbar']]],[[8],'cancelButtonText',[[7],[3,'cancelButtonText']]]],[[8],'title',[[7],[3,'title']]]],[[8],'confirmButtonText',[[7],[3,'confirmButtonText']]]])
Z([3,'toolbar'])
Z([[7],[3,'loading']])
Z([3,'#1989fa'])
Z([3,'noop'])
Z([3,'van-picker__columns'])
Z([a,[3,'height: '],[[2,'*'],[[7],[3,'itemHeight']],[[7],[3,'visibleItemCount']]],[3,'px']])
Z([[2,'?:'],[[12],[[7],[3,'isSimple']],[[5],[[7],[3,'columns']]]],[[4],[[5],[[7],[3,'columns']]]],[[7],[3,'columns']]])
Z([3,'index'])
Z([3,'active-class'])
Z([3,'onChange'])
Z([3,'van-picker__column'])
Z([3,'column-class'])
Z([[7],[3,'index']])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'defaultIndex']],[[7],[3,'defaultIndex']]])
Z([[2,'?:'],[[12],[[7],[3,'isSimple']],[[5],[[7],[3,'columns']]]],[[7],[3,'item']],[[6],[[7],[3,'item']],[3,'values']]])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'valueKey']])
Z([[7],[3,'visibleItemCount']])
Z([[2,'==='],[[7],[3,'toolbarPosition']],[1,'bottom']])
Z(z[2])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'toolbar'])
Z([[7],[3,'showToolbar']])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'overlay']])
Z([3,'onClickOverlay'])
Z([[7],[3,'overlayStyle']])
Z([[7],[3,'duration']])
Z([[7],[3,'show']])
Z([[7],[3,'zIndex']])
Z([[7],[3,'inited']])
Z([3,'onTransitionEnd'])
Z([a,[3,'custom-class '],[[7],[3,'classes']],[3,' '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'popup']],[[4],[[5],[[5],[[7],[3,'position']]],[[9],[[9],[[8],'round',[[7],[3,'round']]],[[8],'safe',[[7],[3,'safeAreaInsetBottom']]]],[[8],'safeTop',[[7],[3,'safeAreaInsetTop']]]]]]]]])
Z([a,[3,'z-index: '],z[5],[3,'; -webkit-transition-duration:'],[[7],[3,'currentDuration']],[3,'ms; transition-duration:'],[[7],[3,'currentDuration']],[3,'ms; '],[[2,'?:'],[[7],[3,'display']],[1,''],[1,'display: none;']],[3,';'],[[7],[3,'customStyle']]])
Z([[7],[3,'closeable']])
Z([3,'onClickCloseIcon'])
Z([a,[3,'van-popup__close-icon van-popup__close-icon--'],[[7],[3,'closeIconPosition']]])
Z([[7],[3,'closeIcon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'showPivot']],[[12],[[6],[[7],[3,'getters']],[3,'text']],[[5],[[5],[[7],[3,'pivotText']]],[[7],[3,'percentage']]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-radio custom-class'])
Z([[2,'==='],[[7],[3,'labelPosition']],[1,'left']])
Z([3,'onClickLabel'])
Z([a,[3,'label-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'radio__label']],[[4],[[5],[[5],[[7],[3,'labelPosition']]],[[8],'disabled',[[7],[3,'disabled']]]]]]]])
Z([3,'onChange'])
Z([3,'van-radio__icon-wrap'])
Z([a,[3,'font-size: '],[[12],[[6],[[7],[3,'utils']],[3,'addUnit']],[[5],[[7],[3,'iconSize']]]],[3,';']])
Z([[7],[3,'useIconSlot']])
Z([3,'icon'])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'radio__icon']],[[4],[[5],[[5],[[7],[3,'shape']]],[[9],[[8],'disabled',[[7],[3,'disabled']]],[[8],'checked',[[2,'==='],[[7],[3,'value']],[[7],[3,'name']]]]]]]]])
Z([3,'icon-class'])
Z([a,[3,'line-height: '],z[6][2],[3,';font-size: .8em;display: block;']])
Z([3,'success'])
Z([a,z[6][1],z[6][2],z[6][3],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'checkedColor']],[[2,'!'],[[7],[3,'disabled']]]],[[2,'==='],[[7],[3,'value']],[[7],[3,'name']]]],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'border-color:'],[[7],[3,'checkedColor']]],[1,'; background-color:']],[[7],[3,'checkedColor']]],[1,';']],[1,'']]])
Z([[2,'==='],[[7],[3,'labelPosition']],[1,'right']])
Z(z[2])
Z([a,z[3][1],z[3][2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTouchMove'])
Z([3,'van-rate custom-class'])
Z([[7],[3,'innerCountArray']])
Z([3,'index'])
Z([3,'van-rate__item'])
Z([a,[3,'padding-right: '],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[[2,'-'],[[7],[3,'count']],[1,1]]],[[12],[[6],[[7],[3,'utils']],[3,'addUnit']],[[5],[[7],[3,'gutter']]]],[1,'']]])
Z([3,'onSelect'])
Z([3,'van-rate__icon'])
Z([[2,'?:'],[[7],[3,'disabled']],[[7],[3,'disabledColor']],[[2,'?:'],[[2,'<='],[[2,'+'],[[7],[3,'index']],[1,1]],[[7],[3,'innerValue']]],[[7],[3,'color']],[[7],[3,'voidColor']]]])
Z([3,'icon-class'])
Z([[7],[3,'index']])
Z([[2,'?:'],[[2,'<='],[[2,'+'],[[7],[3,'index']],[1,1]],[[7],[3,'innerValue']]],[[7],[3,'icon']],[[7],[3,'voidIcon']]])
Z([a,[3,'font-size: '],[[12],[[6],[[7],[3,'utils']],[3,'addUnit']],[[5],[[7],[3,'size']]]]])
Z([[7],[3,'allowHalf']])
Z(z[6])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'rate__icon']],[[4],[[5],[1,'half']]]]])
Z([[2,'?:'],[[7],[3,'disabled']],[[7],[3,'disabledColor']],[[2,'?:'],[[2,'<='],[[2,'+'],[[7],[3,'index']],[1,0.5]],[[7],[3,'innerValue']]],[[7],[3,'color']],[[7],[3,'voidColor']]]])
Z(z[9])
Z([[2,'-'],[[7],[3,'index']],[1,0.5]])
Z([[2,'?:'],[[2,'<='],[[2,'+'],[[7],[3,'index']],[1,0.5]],[[7],[3,'innerValue']]],[[7],[3,'icon']],[[7],[3,'voidIcon']]])
Z([a,z[12][1],z[12][2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'search']],[[8],'withaction',[[2,'||'],[[7],[3,'showAction']],[[7],[3,'useActionSlot']]]]]],[3,' custom-class']])
Z([a,[3,'background: '],[[7],[3,'background']]])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'search__content']],[[4],[[5],[[7],[3,'shape']]]]]])
Z([[7],[3,'label']])
Z([3,'label'])
Z([3,'onBlur'])
Z([3,'onChange'])
Z([3,'onClear'])
Z([3,'onSearch'])
Z([3,'onFocus'])
Z([1,false])
Z([3,'van-search__field field-class'])
Z([[7],[3,'clearable']])
Z([3,'search'])
Z([3,'padding: 5px 10px 5px 0; background-color: transparent;'])
Z([[7],[3,'disabled']])
Z([[7],[3,'error']])
Z([[7],[3,'focus']])
Z([[7],[3,'inputAlign']])
Z([3,'input-class'])
Z([[2,'?:'],[[2,'!'],[[7],[3,'useLeftIconSlot']]],[[7],[3,'leftIcon']],[1,'']])
Z([[7],[3,'maxlength']])
Z([[7],[3,'placeholder']])
Z([[7],[3,'placeholderStyle']])
Z([[7],[3,'readonly']])
Z([[2,'?:'],[[2,'!'],[[7],[3,'useRightIconSlot']]],[[7],[3,'rightIcon']],[1,'']])
Z(z[13])
Z([[7],[3,'value']])
Z([[7],[3,'useLeftIconSlot']])
Z([3,'left-icon'])
Z(z[29])
Z([[7],[3,'useRightIconSlot']])
Z([3,'right-icon'])
Z(z[32])
Z([[2,'||'],[[7],[3,'showAction']],[[7],[3,'useActionSlot']]])
Z([3,'van-search__action'])
Z([3,'van-search__action--hover'])
Z([3,'70'])
Z([[7],[3,'useActionSlot']])
Z([3,'action'])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'sidebar-item']],[[9],[[8],'selected',[[7],[3,'selected']]],[[8],'disabled',[[7],[3,'disabled']]]]]],[3,' '],[[2,'?:'],[[7],[3,'selected']],[1,'active-class'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'disabled']],[1,'disabled-class'],[1,'']],[3,' custom-class']])
Z([3,'van-sidebar-item--hover'])
Z([3,'70'])
Z([[2,'||'],[[2,'!=='],[[7],[3,'info']],[1,null]],[[7],[3,'dot']]])
Z([3,'right: 4px'])
Z([[7],[3,'dot']])
Z([[7],[3,'info']])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loading']])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'skeleton']],[[4],[[5],[[8],'animate',[[7],[3,'animate']]]]]]]])
Z([[7],[3,'avatar']])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'slider']],[[8],'disabled',[[7],[3,'disabled']]]]]])
Z([[2,'?:'],[[7],[3,'inactiveColor']],[[2,'+'],[1,'background:'],[[7],[3,'inactiveColor']]],[1,'']])
Z([3,'onTouchEnd'])
Z(z[3])
Z([3,'onTouchStart'])
Z([3,'onTouchMove'])
Z([3,'van-slider__button-wrapper'])
Z([[7],[3,'useButtonSlot']])
Z([3,'button'])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-stepper custom-class'])
Z([[7],[3,'showMinus']])
Z([[7],[3,'showPlus']])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'steps']])
Z([3,'index'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'step']],[[4],[[5],[[5],[[7],[3,'direction']]],[[12],[[7],[3,'status']],[[5],[[5],[[7],[3,'index']]],[[7],[3,'active']]]]]]]],[3,' van-hairline']])
Z([[2,'?:'],[[2,'==='],[[12],[[7],[3,'status']],[[5],[[5],[[7],[3,'index']]],[[7],[3,'active']]]],[1,'inactive']],[[2,'+'],[1,'color: '],[[7],[3,'inactiveColor']]],[1,'']])
Z([3,'van-step__circle-container'])
Z([[2,'!=='],[[7],[3,'index']],[[7],[3,'active']]])
Z([[7],[3,'inactiveIcon']])
Z([[2,'?:'],[[2,'==='],[[12],[[7],[3,'status']],[[5],[[5],[[7],[3,'index']]],[[7],[3,'active']]]],[1,'inactive']],[[7],[3,'inactiveColor']],[[7],[3,'activeColor']]])
Z([3,'van-step__icon'])
Z(z[6])
Z([[7],[3,'activeColor']])
Z(z[8])
Z([[7],[3,'activeIcon']])
Z([[2,'!=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'steps']],[3,'length']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-submit-bar custom-class'])
Z([3,'top'])
Z([3,'van-submit-bar__tip'])
Z([[7],[3,'tipIcon']])
Z([3,'van-submit-bar__tip-icon'])
Z(z[3])
Z([3,'12px'])
Z([[7],[3,'hasTip']])
Z([3,'tip'])
Z([a,[3,'bar-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'submit-bar__bar']],[[8],'safe',[[7],[3,'safeAreaInsetBottom']]]]]])
Z([[7],[3,'hasPrice']])
Z([3,'onSubmit'])
Z([3,'van-submit-bar__button'])
Z([3,'button-class'])
Z([3,'width: 100%;'])
Z([[7],[3,'disabled']])
Z([[7],[3,'loading']])
Z([[7],[3,'buttonType']])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'endDrag'])
Z(z[0])
Z([3,'startDrag'])
Z([3,'onDrag'])
Z([3,'onClick'])
Z([[2,'?:'],[[7],[3,'catchMove']],[1,'noop'],[1,'']])
Z([3,'van-swipe-cell'])
Z([3,'cell'])
Z([[7],[3,'wrapperStyle']])
Z([[7],[3,'leftWidth']])
Z(z[4])
Z([3,'van-swipe-cell__left'])
Z([3,'left'])
Z(z[12])
Z([[7],[3,'rightWidth']])
Z(z[4])
Z([3,'van-swipe-cell__right'])
Z([3,'right'])
Z(z[17])
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'switch']],[[9],[[8],'on',[[2,'==='],[[7],[3,'value']],[[7],[3,'activeValue']]]],[[8],'disabled',[[7],[3,'disabled']]]]]]])
Z([a,[3,'font-size: '],[[7],[3,'size']],[3,'; '],[[2,'?:'],[[2,'?:'],[[7],[3,'checked']],[[7],[3,'activeColor']],[[7],[3,'inactiveColor']]],[[2,'+'],[1,'background-color: '],[[2,'?:'],[[7],[3,'checked']],[[7],[3,'activeColor']],[[7],[3,'inactiveColor']]]],[1,'']]])
Z([[7],[3,'loading']])
Z([[7],[3,'loadingColor']])
Z([3,'van-switch__loading'])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shouldRender']])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tabbar-item']],[[8],'active',[[7],[3,'active']]]]],[3,' custom-class']])
Z([a,[3,'color: '],[[2,'?:'],[[7],[3,'active']],[[7],[3,'activeColor']],[[7],[3,'inactiveColor']]]])
Z([3,'van-tabbar-item__icon'])
Z([[7],[3,'icon']])
Z([3,'van-tabbar-item__icon__inner'])
Z(z[4])
Z([[7],[3,'active']])
Z([3,'icon-active'])
Z([3,'icon'])
Z([3,'van-tabbar-item__info'])
Z([[7],[3,'dot']])
Z([[7],[3,'info']])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tabs']],[[4],[[5],[[7],[3,'type']]]]]]])
Z([3,'onTouchScroll'])
Z([[7],[3,'container']])
Z([[2,'!'],[[7],[3,'sticky']]])
Z([[7],[3,'offsetTop']])
Z([[7],[3,'zIndex']])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tabs__wrap']],[[8],'scrollable',[[7],[3,'scrollable']]]]],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'==='],[[7],[3,'type']],[1,'line']],[[7],[3,'border']]],[1,'van-hairline--top-bottom'],[1,'']]])
Z([3,'nav-left'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tabs__nav']],[[4],[[5],[[7],[3,'type']]]]]],[3,' nav-class']])
Z([[2,'==='],[[7],[3,'type']],[1,'line']])
Z([[7],[3,'tabs']])
Z([3,'index'])
Z([3,'onTap'])
Z([a,[[12],[[6],[[7],[3,'getters']],[3,'tabClass']],[[5],[[5],[[2,'==='],[[7],[3,'index']],[[7],[3,'currentIndex']]]],[[7],[3,'ellipsis']]]],z[6][2],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tab']],[[9],[[9],[[8],'active',[[2,'==='],[[7],[3,'index']],[[7],[3,'currentIndex']]]],[[8],'disabled',[[6],[[7],[3,'item']],[3,'disabled']]]],[[8],'complete',[[2,'!'],[[7],[3,'ellipsis']]]]]]]])
Z([[7],[3,'index']])
Z([[12],[[6],[[7],[3,'getters']],[3,'tabStyle']],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[[2,'==='],[[7],[3,'index']],[[7],[3,'currentIndex']]]],[[7],[3,'ellipsis']]],[[7],[3,'color']]],[[7],[3,'type']]],[[6],[[7],[3,'item']],[3,'disabled']]],[[7],[3,'titleActiveColor']]],[[7],[3,'titleInactiveColor']]],[[7],[3,'swipeThreshold']]],[[7],[3,'scrollable']]]])
Z([[2,'||'],[[2,'!=='],[[6],[[7],[3,'item']],[3,'info']],[1,null]],[[6],[[7],[3,'item']],[3,'dot']]])
Z([3,'van-tab__title__info'])
Z([[6],[[7],[3,'item']],[3,'dot']])
Z([[6],[[7],[3,'item']],[3,'info']])
Z([3,'nav-right'])
Z([3,'onTouchEnd'])
Z(z[21])
Z([3,'onTouchMove'])
Z([3,'onTouchStart'])
Z([3,'van-tabs__content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
function gz$gwx_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx_60)return __WXML_GLOBAL__.ops_cached.$gwx_60
__WXML_GLOBAL__.ops_cached.$gwx_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tag']],[[4],[[5],[[5],[[5],[[7],[3,'type']]],[[7],[3,'size']]],[[9],[[9],[[8],'mark',[[7],[3,'mark']]],[[8],'plain',[[7],[3,'plain']]]],[[8],'round',[[7],[3,'round']]]]]]]],[3,' '],[[2,'?:'],[[7],[3,'plain']],[1,'van-hairline--surround'],[1,'']]])
Z([a,[[2,'?:'],[[2,'&&'],[[7],[3,'color']],[[2,'!'],[[7],[3,'plain']]]],[[2,'+'],[[2,'+'],[1,'background-color: '],[[7],[3,'color']]],[1,';']],[1,'']],[[2,'?:'],[[2,'||'],[[7],[3,'textColor']],[[2,'&&'],[[7],[3,'color']],[[7],[3,'plain']]]],[[2,'+'],[1,'color: '],[[2,'||'],[[7],[3,'textColor']],[[7],[3,'color']]]],[1,'']]])
Z([[7],[3,'closeable']])
Z([3,'onClose'])
Z([3,'van-tag__close'])
Z([3,'cross'])
})(__WXML_GLOBAL__.ops_cached.$gwx_60);return __WXML_GLOBAL__.ops_cached.$gwx_60
}
function gz$gwx_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx_61)return __WXML_GLOBAL__.ops_cached.$gwx_61
__WXML_GLOBAL__.ops_cached.$gwx_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[7],[3,'mask']],[[7],[3,'forbidClick']]])
Z([[2,'?:'],[[7],[3,'mask']],[1,''],[1,'background-color: transparent;']])
Z([[7],[3,'show']])
Z([[7],[3,'zIndex']])
Z([3,'van-toast__container'])
Z([a,[3,'z-index: '],z[3]])
Z(z[2])
Z([3,'noop'])
Z([a,[3,'van-toast van-toast--'],[[2,'?:'],[[2,'==='],[[7],[3,'type']],[1,'text']],[1,'text'],[1,'icon']],[3,' van-toast--'],[[7],[3,'position']]])
Z([[2,'==='],[[7],[3,'type']],[1,'text']])
Z([[2,'==='],[[7],[3,'type']],[1,'loading']])
Z([3,'white'])
Z([3,'van-toast__loading'])
Z([[7],[3,'loadingType']])
Z([3,'van-toast__icon'])
Z([[7],[3,'type']])
Z([[7],[3,'message']])
})(__WXML_GLOBAL__.ops_cached.$gwx_61);return __WXML_GLOBAL__.ops_cached.$gwx_61
}
function gz$gwx_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx_62)return __WXML_GLOBAL__.ops_cached.$gwx_62
__WXML_GLOBAL__.ops_cached.$gwx_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'inited']])
Z([3,'onTransitionEnd'])
Z([a,[3,'van-transition custom-class '],[[7],[3,'classes']]])
Z([a,[3,'-webkit-transition-duration:'],[[7],[3,'currentDuration']],[3,'ms; transition-duration:'],[[7],[3,'currentDuration']],[3,'ms; '],[[2,'?:'],[[7],[3,'display']],[1,''],[1,'display: none;']],[3,' '],[[7],[3,'customStyle']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_62);return __WXML_GLOBAL__.ops_cached.$gwx_62
}
function gz$gwx_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx_63)return __WXML_GLOBAL__.ops_cached.$gwx_63
__WXML_GLOBAL__.ops_cached.$gwx_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-tree-select'])
Z([a,[3,'height: '],[[12],[[6],[[7],[3,'utils']],[3,'addUnit']],[[5],[[7],[3,'height']]]]])
Z([[7],[3,'mainActiveIndex']])
Z([3,'onClickNav'])
Z([3,'van-tree-select__nav__inner'])
Z([[7],[3,'items']])
Z([3,'index'])
Z([3,'main-active-class'])
Z([3,'main-item-class'])
Z([[6],[[7],[3,'item']],[3,'disabled']])
Z([3,'main-disabled-class'])
Z([[6],[[7],[3,'item']],[3,'text']])
Z([3,'van-tree-select__content'])
Z([3,'content'])
Z([[7],[3,'subItems']])
Z([3,'id'])
Z([3,'onSelectItem'])
Z([a,[3,'van-ellipsis content-item-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'tree-select__item']],[[9],[[8],'active',[[12],[[6],[[7],[3,'wxs']],[3,'isActive']],[[5],[[5],[[7],[3,'activeId']]],[[6],[[7],[3,'item']],[3,'id']]]]],[[8],'disabled',[[6],[[7],[3,'item']],[3,'disabled']]]]]],[3,' '],[[2,'?:'],[[12],[[6],[[7],[3,'wxs']],[3,'isActive']],[[5],[[5],[[7],[3,'activeId']]],[[6],[[7],[3,'item']],[3,'id']]]],[1,'content-active-class'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'disabled']],[1,'content-disabled-class'],[1,'']]])
Z([[7],[3,'item']])
Z([[12],[[6],[[7],[3,'wxs']],[3,'isActive']],[[5],[[5],[[7],[3,'activeId']]],[[6],[[7],[3,'item']],[3,'id']]]])
Z([3,'van-tree-select__selected'])
Z([3,'checked'])
Z([3,'16px'])
})(__WXML_GLOBAL__.ops_cached.$gwx_63);return __WXML_GLOBAL__.ops_cached.$gwx_63
}
function gz$gwx_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx_64)return __WXML_GLOBAL__.ops_cached.$gwx_64
__WXML_GLOBAL__.ops_cached.$gwx_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-uploader__wrapper'])
Z([[7],[3,'lists']])
Z([3,'index'])
Z([[7],[3,'previewImage']])
Z([3,'van-uploader__preview'])
Z([[6],[[7],[3,'item']],[3,'isImage']])
Z([3,'van-uploader__file-icon'])
Z([3,'description'])
Z([[7],[3,'deletable']])
Z([3,'deleteItem'])
Z([3,'van-uploader__preview-delete'])
Z([[7],[3,'index']])
Z([3,'clear'])
Z([[7],[3,'isInCount']])
Z([3,'startUpload'])
Z([3,'van-uploader__slot'])
Z(z[14])
Z([a,[3,'van-uploader__upload '],[[2,'?:'],[[7],[3,'disabled']],[1,'van-uploader__upload--disabled'],[1,'']]])
Z([a,[3,'width: '],[[12],[[6],[[7],[3,'utils']],[3,'addUnit']],[[5],[[7],[3,'previewSize']]]],[3,'; height: '],[[12],[[6],[[7],[3,'utils']],[3,'addUnit']],[[5],[[7],[3,'previewSize']]]],[3,';']])
Z([3,'van-uploader__upload-icon'])
Z([3,'plus'])
Z([[7],[3,'uploadText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_64);return __WXML_GLOBAL__.ops_cached.$gwx_64
}
function gz$gwx_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx_65)return __WXML_GLOBAL__.ops_cached.$gwx_65
__WXML_GLOBAL__.ops_cached.$gwx_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_65);return __WXML_GLOBAL__.ops_cached.$gwx_65
}
function gz$gwx_66(){
if( __WXML_GLOBAL__.ops_cached.$gwx_66)return __WXML_GLOBAL__.ops_cached.$gwx_66
__WXML_GLOBAL__.ops_cached.$gwx_66=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'=='],[[6],[[7],[3,'boothData']],[3,'length']],[1,0]])
Z([[7],[3,'boothData']])
Z([3,'index'])
Z([3,'clickBoothItem'])
Z([3,'dataItem'])
Z([[7],[3,'index']])
Z([3,'margin-right:15rpx;'])
Z([3,'manager-o'])
Z(z[7])
Z([3,'goods-collect-o'])
Z([3,'shopInfoBox'])
Z(z[7])
Z([3,'clock-o'])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[1,'属性']],[3,'length']],[1,0]])
Z([[2,'?:'],[[6],[[7],[3,'item']],[3,'showAttr']],[1,'arrow-up'],[1,'arrow-down']])
Z([[6],[[7],[3,'item']],[3,'showAttr']])
Z([[6],[[7],[3,'item']],[1,'属性']])
Z([3,'shopDetail'])
Z([[6],[[7],[3,'item']],[1,'类型']])
})(__WXML_GLOBAL__.ops_cached.$gwx_66);return __WXML_GLOBAL__.ops_cached.$gwx_66
}
function gz$gwx_67(){
if( __WXML_GLOBAL__.ops_cached.$gwx_67)return __WXML_GLOBAL__.ops_cached.$gwx_67
__WXML_GLOBAL__.ops_cached.$gwx_67=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_67);return __WXML_GLOBAL__.ops_cached.$gwx_67
}
function gz$gwx_68(){
if( __WXML_GLOBAL__.ops_cached.$gwx_68)return __WXML_GLOBAL__.ops_cached.$gwx_68
__WXML_GLOBAL__.ops_cached.$gwx_68=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'aoyi'])
Z([3,'aoyiInfoBox'])
Z([3,'领悟：'])
Z([3,'aoyiInfoItem'])
Z([3,'剩余天赋点：'])
Z([3,'24'])
Z([3,'天赋'])
Z([[6],[[7],[3,'data']],[3,'aoyiData']])
Z([3,'index'])
Z(z[5])
Z([[6],[[7],[3,'item']],[3,'label']])
Z([3,'36'])
Z([3,'可激活天赋：'])
Z([3,'50'])
Z([[6],[[7],[3,'data']],[3,'talentData']])
Z(z[8])
Z([3,'talentLabel'])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_68);return __WXML_GLOBAL__.ops_cached.$gwx_68
}
function gz$gwx_69(){
if( __WXML_GLOBAL__.ops_cached.$gwx_69)return __WXML_GLOBAL__.ops_cached.$gwx_69
__WXML_GLOBAL__.ops_cached.$gwx_69=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_69);return __WXML_GLOBAL__.ops_cached.$gwx_69
}
function gz$gwx_70(){
if( __WXML_GLOBAL__.ops_cached.$gwx_70)return __WXML_GLOBAL__.ops_cached.$gwx_70
__WXML_GLOBAL__.ops_cached.$gwx_70=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'btnVisible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_70);return __WXML_GLOBAL__.ops_cached.$gwx_70
}
function gz$gwx_71(){
if( __WXML_GLOBAL__.ops_cached.$gwx_71)return __WXML_GLOBAL__.ops_cached.$gwx_71
__WXML_GLOBAL__.ops_cached.$gwx_71=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_71);return __WXML_GLOBAL__.ops_cached.$gwx_71
}
function gz$gwx_72(){
if( __WXML_GLOBAL__.ops_cached.$gwx_72)return __WXML_GLOBAL__.ops_cached.$gwx_72
__WXML_GLOBAL__.ops_cached.$gwx_72=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'background:rgba(26,96,117,.9); border-radius:20rpx; box-shadow: 0px 0px 5px rgba(255, 255, 255) inset;'])
Z([[7],[3,'dialogVisible']])
Z([1,false])
Z([[2,'>'],[[6],[[7],[3,'historyData']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_72);return __WXML_GLOBAL__.ops_cached.$gwx_72
}
function gz$gwx_73(){
if( __WXML_GLOBAL__.ops_cached.$gwx_73)return __WXML_GLOBAL__.ops_cached.$gwx_73
__WXML_GLOBAL__.ops_cached.$gwx_73=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'background:rgba(26,96,117,.9); border-radius:20rpx; box-shadow: 0px 0px 5px rgba(255, 255, 255) inset;overflow:visible;'])
Z([[7],[3,'dialogVisible']])
Z([1,false])
Z([3,'submit'])
Z([3,'account'])
Z(z[2])
Z([3,'100'])
Z([3,'padding:0 20rpx;display:flex;align-items:center;'])
Z([3,'searchInput'])
Z([3,'15'])
Z(z[4])
Z([3,'请输入账号'])
Z([[6],[[7],[3,'form']],[3,'account']])
Z([3,'km'])
Z(z[2])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[13])
Z([3,'请输入卡密'])
Z([[6],[[7],[3,'form']],[3,'km']])
})(__WXML_GLOBAL__.ops_cached.$gwx_73);return __WXML_GLOBAL__.ops_cached.$gwx_73
}
function gz$gwx_74(){
if( __WXML_GLOBAL__.ops_cached.$gwx_74)return __WXML_GLOBAL__.ops_cached.$gwx_74
__WXML_GLOBAL__.ops_cached.$gwx_74=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'background:rgba(26,96,117,.9); border-radius:20rpx; box-shadow: 0px 0px 5px rgba(255, 255, 255) inset;overflow:visible;'])
Z([[7],[3,'dialogVisible']])
Z([1,false])
Z([3,'loginDialog'])
Z([3,'loginSubmit'])
Z([[2,'=='],[[7],[3,'type']],[1,'register']])
Z([3,'account'])
Z(z[2])
Z([3,'100'])
Z([3,'padding:0 20rpx;display:flex;align-items:center;'])
Z([3,'searchInput'])
Z([3,'15'])
Z(z[6])
Z([3,'请输入账号'])
Z([[6],[[7],[3,'loginForm']],[3,'account']])
Z([3,'password'])
Z(z[2])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[15])
Z([3,'请输入密码'])
Z(z[15])
Z([[6],[[7],[3,'loginForm']],[3,'password']])
Z([3,'registerSubmit'])
Z([[2,'=='],[[7],[3,'type']],[1,'login']])
Z(z[6])
Z(z[2])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[6])
Z([3,'自己设置一个账号'])
Z([[6],[[7],[3,'registerForm']],[3,'account']])
Z(z[15])
Z(z[2])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[15])
Z([3,'自己设置一个密码'])
Z(z[15])
Z([[6],[[7],[3,'registerForm']],[3,'password']])
Z([3,'km'])
Z(z[2])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[46])
Z([3,'请输入卡密'])
Z([[6],[[7],[3,'registerForm']],[3,'km']])
Z([3,'QQ'])
Z(z[2])
Z(z[8])
Z(z[9])
Z(z[10])
Z([3,'12'])
Z(z[54])
Z([3,'绑定QQ（能在群里无限查）'])
Z([3,'number'])
Z([[6],[[7],[3,'registerForm']],[3,'QQ']])
Z([3,'recommend'])
Z(z[2])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[64])
Z([3,'请输入推荐人账号（非必填）'])
Z([[6],[[7],[3,'registerForm']],[3,'recommend']])
Z([3,'van-notify'])
})(__WXML_GLOBAL__.ops_cached.$gwx_74);return __WXML_GLOBAL__.ops_cached.$gwx_74
}
function gz$gwx_75(){
if( __WXML_GLOBAL__.ops_cached.$gwx_75)return __WXML_GLOBAL__.ops_cached.$gwx_75
__WXML_GLOBAL__.ops_cached.$gwx_75=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'background:rgba(26,96,117,.9); border-radius:20rpx; box-shadow: 0px 0px 5px rgba(255, 255, 255) inset;overflow:visible;'])
Z([[7],[3,'dialogVisible']])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_75);return __WXML_GLOBAL__.ops_cached.$gwx_75
}
function gz$gwx_76(){
if( __WXML_GLOBAL__.ops_cached.$gwx_76)return __WXML_GLOBAL__.ops_cached.$gwx_76
__WXML_GLOBAL__.ops_cached.$gwx_76=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'volume-o'])
})(__WXML_GLOBAL__.ops_cached.$gwx_76);return __WXML_GLOBAL__.ops_cached.$gwx_76
}
function gz$gwx_77(){
if( __WXML_GLOBAL__.ops_cached.$gwx_77)return __WXML_GLOBAL__.ops_cached.$gwx_77
__WXML_GLOBAL__.ops_cached.$gwx_77=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClose'])
Z([3,'width: 80%;height:100%;background:#1A6075;'])
Z([3,'right'])
Z([[7],[3,'show']])
Z([3,'section'])
Z([3,'radioChange'])
Z([[7],[3,'searchTypeRadioOptions']])
Z([[7],[3,'searchType']])
Z([3,'searchType'])
Z([[2,'=='],[[7],[3,'searchType']],[1,'blur']])
Z(z[5])
Z([[7],[3,'goodsTypeRadioOptions']])
Z([[7],[3,'goodsType']])
Z([3,'goodsType'])
Z([[2,'=='],[[7],[3,'searchType']],[1,'exact']])
Z([3,'searchInputBox'])
Z([3,'onChange'])
Z([3,'onFocus'])
Z([1,false])
Z([3,'250'])
Z([3,'padding:0 20rpx;display:flex;align-items:center;'])
Z([3,'searchInput'])
Z([3,'20'])
Z([3,'请输入搜索关键词'])
Z([[7],[3,'keyWord']])
Z([[7],[3,'keyWordListVisible']])
Z(z[5])
Z([[7],[3,'orderRadioOptions']])
Z([[7],[3,'order']])
Z([3,'order'])
})(__WXML_GLOBAL__.ops_cached.$gwx_77);return __WXML_GLOBAL__.ops_cached.$gwx_77
}
function gz$gwx_78(){
if( __WXML_GLOBAL__.ops_cached.$gwx_78)return __WXML_GLOBAL__.ops_cached.$gwx_78
__WXML_GLOBAL__.ops_cached.$gwx_78=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'radioChange'])
Z([[7],[3,'order']])
Z([[7],[3,'radioOptions']])
Z([3,'index'])
Z([[6],[[7],[3,'item']],[3,'value']])
})(__WXML_GLOBAL__.ops_cached.$gwx_78);return __WXML_GLOBAL__.ops_cached.$gwx_78
}
function gz$gwx_79(){
if( __WXML_GLOBAL__.ops_cached.$gwx_79)return __WXML_GLOBAL__.ops_cached.$gwx_79
__WXML_GLOBAL__.ops_cached.$gwx_79=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'background:rgba(26,96,117,.9); border-radius:20rpx; box-shadow: 0px 0px 5px rgba(255, 255, 255) inset;overflow:visible;'])
Z([[7],[3,'dialogVisible']])
Z([1,false])
Z([3,'submit'])
Z([3,'km'])
Z(z[2])
Z([3,'100'])
Z([3,'padding:0 20rpx;display:flex;align-items:center;'])
Z([3,'searchInput'])
Z(z[4])
Z([3,'请输入卡密'])
Z([[6],[[7],[3,'form']],[3,'km']])
})(__WXML_GLOBAL__.ops_cached.$gwx_79);return __WXML_GLOBAL__.ops_cached.$gwx_79
}
function gz$gwx_80(){
if( __WXML_GLOBAL__.ops_cached.$gwx_80)return __WXML_GLOBAL__.ops_cached.$gwx_80
__WXML_GLOBAL__.ops_cached.$gwx_80=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shopAttrBox'])
Z([[2,'==='],[[7],[3,'type']],[1,'1']])
Z([[7],[3,'data']])
Z([[2,'==='],[[7],[3,'type']],[1,'4']])
Z(z[2])
Z([[2,'==='],[[7],[3,'type']],[1,'6']])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_80);return __WXML_GLOBAL__.ops_cached.$gwx_80
}
function gz$gwx_81(){
if( __WXML_GLOBAL__.ops_cached.$gwx_81)return __WXML_GLOBAL__.ops_cached.$gwx_81
__WXML_GLOBAL__.ops_cached.$gwx_81=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'skillBox'])
Z([[6],[[7],[3,'data']],[1,'技能']])
Z([3,'index'])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'data']],[1,'特技']])
Z(z[2])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_81);return __WXML_GLOBAL__.ops_cached.$gwx_81
}
function gz$gwx_82(){
if( __WXML_GLOBAL__.ops_cached.$gwx_82)return __WXML_GLOBAL__.ops_cached.$gwx_82
__WXML_GLOBAL__.ops_cached.$gwx_82=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'detailBox fontStroke'])
Z([3,'fontBoldStroke'])
Z([[6],[[6],[[7],[3,'data']],[3,'gaizao']],[3,'value']])
Z([[2,'!='],[[6],[[7],[3,'data']],[1,'强化']],[1,'0']])
Z([[2,'||'],[[2,'||'],[[2,'>'],[[6],[[6],[[7],[3,'data']],[3,'gaizaoData']],[3,'length']],[1,0]],[[6],[[7],[3,'data']],[1,'改造主属性']]],[[6],[[7],[3,'data']],[1,'四象']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'data']],[3,'gaizaoData']],[3,'length']],[1,0]])
Z([3,'topGap'])
Z([[6],[[7],[3,'data']],[1,'性别']])
Z([[6],[[7],[3,'data']],[1,'职业']])
Z([[6],[[7],[3,'data']],[1,'等级']])
Z([[6],[[7],[3,'data']],[1,'声望']])
Z([[6],[[7],[3,'data']],[1,'耐久']])
Z([[6],[[7],[3,'data']],[1,'可改']])
})(__WXML_GLOBAL__.ops_cached.$gwx_82);return __WXML_GLOBAL__.ops_cached.$gwx_82
}
function gz$gwx_83(){
if( __WXML_GLOBAL__.ops_cached.$gwx_83)return __WXML_GLOBAL__.ops_cached.$gwx_83
__WXML_GLOBAL__.ops_cached.$gwx_83=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'searchBox'])
Z([3,'onChange'])
Z([3,'onFocus'])
Z([1,false])
Z([3,'250'])
Z([3,'padding:0 20rpx;display:flex;align-items:center;'])
Z([3,'searchInput'])
Z([3,'20'])
Z([3,'请输入搜索关键词'])
Z([[7],[3,'keyWord']])
Z([3,'setSvipParams'])
Z([3,'showHistory'])
Z([3,'popup'])
Z([[7],[3,'keyWordListVisible']])
Z([3,'closeKeyWordList'])
Z([3,'shopList'])
Z([[7],[3,'tabsName']])
Z([3,'changeTabs'])
Z([3,'tabsNav'])
Z([3,'tabActive'])
Z([3,'tab'])
Z([3,'booth'])
Z([a,[3,'摊位 ('],[[7],[3,'boothTotalCount']],[3,')']])
Z([3,'dataList'])
Z([[2,'=='],[[7],[3,'boothTotalCount']],[1,0]])
Z([[7],[3,'boothData']])
Z([3,'index'])
Z([3,'clickBoothItem'])
Z([3,'dataItem'])
Z([[7],[3,'index']])
Z([3,'margin-right:15rpx;'])
Z([3,'manager-o'])
Z([3,'shopInfoBox'])
Z(z[31])
Z([3,'goods-collect-o'])
Z([[6],[[7],[3,'item']],[3,'sameBooth']])
Z(z[33])
Z(z[31])
Z([3,'clock-o'])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[1,'属性']],[3,'length']],[1,0]])
Z([[2,'?:'],[[6],[[7],[3,'item']],[3,'showAttr']],[1,'arrow-up'],[1,'arrow-down']])
Z([[6],[[7],[3,'item']],[3,'showAttr']])
Z([[6],[[7],[3,'item']],[1,'属性']])
Z([3,'shopDetail'])
Z([[6],[[7],[3,'item']],[1,'类型']])
Z([3,'shop'])
Z([a,[3,'商行 ('],[[7],[3,'totalCount']],z[23][3]])
Z(z[24])
Z([[2,'=='],[[7],[3,'totalCount']],[1,0]])
Z([[7],[3,'data']])
Z(z[27])
Z([3,'clickShopItem'])
Z(z[29])
Z(z[30])
Z(z[31])
Z([3,'shop-o'])
Z(z[31])
Z(z[35])
Z(z[33])
Z(z[31])
Z(z[39])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'sx']],[3,'length']],[1,0]])
Z(z[41])
Z(z[42])
Z([[6],[[7],[3,'item']],[3,'sx']])
Z(z[44])
Z([[6],[[7],[3,'item']],[3,'lx']])
Z([3,'consignment'])
Z([a,[3,'寄卖 ('],[[7],[3,'consignmentTotalCount']],z[23][3]])
Z([3,'consignmentDataList'])
Z([[2,'=='],[[7],[3,'consignmentTotalCount']],[1,0]])
Z([[7],[3,'consignmentData']])
Z(z[27])
Z([3,'clickConsignmentItem'])
Z(z[29])
Z(z[30])
Z(z[31])
Z(z[32])
Z(z[31])
Z(z[35])
Z(z[33])
Z(z[31])
Z(z[39])
Z(z[62])
Z(z[41])
Z(z[42])
Z(z[65])
Z(z[44])
Z(z[67])
Z([3,'loginSuccess'])
Z([3,'customDialog'])
Z([3,'loginDialog'])
Z(z[91])
Z([3,'noticeDialog'])
Z([[7],[3,'noticeMessage']])
Z([3,'clickTag'])
Z(z[91])
Z([3,'historyDialog'])
Z([3,'van-notify'])
Z([3,'van-toast'])
Z([3,'goTop'])
Z([3,'goTop center'])
Z([[2,'!'],[[7],[3,'floorstatus']]])
Z([3,'goTopIcon fontStroke'])
Z([3,'down'])
})(__WXML_GLOBAL__.ops_cached.$gwx_83);return __WXML_GLOBAL__.ops_cached.$gwx_83
}
function gz$gwx_84(){
if( __WXML_GLOBAL__.ops_cached.$gwx_84)return __WXML_GLOBAL__.ops_cached.$gwx_84
__WXML_GLOBAL__.ops_cached.$gwx_84=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_84);return __WXML_GLOBAL__.ops_cached.$gwx_84
}
function gz$gwx_85(){
if( __WXML_GLOBAL__.ops_cached.$gwx_85)return __WXML_GLOBAL__.ops_cached.$gwx_85
__WXML_GLOBAL__.ops_cached.$gwx_85=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_85);return __WXML_GLOBAL__.ops_cached.$gwx_85
}
function gz$gwx_86(){
if( __WXML_GLOBAL__.ops_cached.$gwx_86)return __WXML_GLOBAL__.ops_cached.$gwx_86
__WXML_GLOBAL__.ops_cached.$gwx_86=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'btnVisible']])
Z([3,'/img/tools/tiku.jpg'])
Z([3,'题库'])
Z([3,'/pages/toolsPage/tiku/tiku'])
Z([3,'/img/tools/kangxing.png'])
Z([3,'抗性'])
Z([3,'/pages/toolsPage/type/type?type\x3dkangxing'])
Z([3,'/img/tools/zhuangbei.jpg'])
Z([3,'装备'])
Z([3,'/pages/toolsPage/type/type?type\x3dzhuangbei'])
Z([3,'/img/tools/yuanshen.jpg'])
Z([3,'元神'])
Z([3,'/pages/toolsPage/type/type?type\x3dyuanshen'])
Z([3,'/img/tools/zinv.png'])
Z([3,'子女'])
Z([3,'/pages/toolsPage/type/type?type\x3dzinv'])
Z([3,'van-toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_86);return __WXML_GLOBAL__.ops_cached.$gwx_86
}
function gz$gwx_87(){
if( __WXML_GLOBAL__.ops_cached.$gwx_87)return __WXML_GLOBAL__.ops_cached.$gwx_87
__WXML_GLOBAL__.ops_cached.$gwx_87=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-hairline--top container'])
Z([3,'van-toast'])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_87);return __WXML_GLOBAL__.ops_cached.$gwx_87
}
function gz$gwx_88(){
if( __WXML_GLOBAL__.ops_cached.$gwx_88)return __WXML_GLOBAL__.ops_cached.$gwx_88
__WXML_GLOBAL__.ops_cached.$gwx_88=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-hairline--top container'])
Z([3,'van-toast'])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_88);return __WXML_GLOBAL__.ops_cached.$gwx_88
}
function gz$gwx_89(){
if( __WXML_GLOBAL__.ops_cached.$gwx_89)return __WXML_GLOBAL__.ops_cached.$gwx_89
__WXML_GLOBAL__.ops_cached.$gwx_89=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-hairline--top container'])
Z([3,'van-toast'])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_89);return __WXML_GLOBAL__.ops_cached.$gwx_89
}
function gz$gwx_90(){
if( __WXML_GLOBAL__.ops_cached.$gwx_90)return __WXML_GLOBAL__.ops_cached.$gwx_90
__WXML_GLOBAL__.ops_cached.$gwx_90=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-hairline--top container'])
Z([3,'van-toast'])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_90);return __WXML_GLOBAL__.ops_cached.$gwx_90
}
function gz$gwx_91(){
if( __WXML_GLOBAL__.ops_cached.$gwx_91)return __WXML_GLOBAL__.ops_cached.$gwx_91
__WXML_GLOBAL__.ops_cached.$gwx_91=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_91);return __WXML_GLOBAL__.ops_cached.$gwx_91
}
function gz$gwx_92(){
if( __WXML_GLOBAL__.ops_cached.$gwx_92)return __WXML_GLOBAL__.ops_cached.$gwx_92
__WXML_GLOBAL__.ops_cached.$gwx_92=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onChange'])
Z([3,'请输入搜索关键词'])
})(__WXML_GLOBAL__.ops_cached.$gwx_92);return __WXML_GLOBAL__.ops_cached.$gwx_92
}
function gz$gwx_93(){
if( __WXML_GLOBAL__.ops_cached.$gwx_93)return __WXML_GLOBAL__.ops_cached.$gwx_93
__WXML_GLOBAL__.ops_cached.$gwx_93=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'typeList']])
Z([3,'this'])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([[6],[[7],[3,'item']],[3,'url']])
})(__WXML_GLOBAL__.ops_cached.$gwx_93);return __WXML_GLOBAL__.ops_cached.$gwx_93
}
function gz$gwx_94(){
if( __WXML_GLOBAL__.ops_cached.$gwx_94)return __WXML_GLOBAL__.ops_cached.$gwx_94
__WXML_GLOBAL__.ops_cached.$gwx_94=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-hairline--top container'])
Z([3,'van-toast'])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_94);return __WXML_GLOBAL__.ops_cached.$gwx_94
}
function gz$gwx_95(){
if( __WXML_GLOBAL__.ops_cached.$gwx_95)return __WXML_GLOBAL__.ops_cached.$gwx_95
__WXML_GLOBAL__.ops_cached.$gwx_95=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_95);return __WXML_GLOBAL__.ops_cached.$gwx_95
}
function gz$gwx_96(){
if( __WXML_GLOBAL__.ops_cached.$gwx_96)return __WXML_GLOBAL__.ops_cached.$gwx_96
__WXML_GLOBAL__.ops_cached.$gwx_96=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-hairline--top container'])
Z([3,'van-toast'])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_96);return __WXML_GLOBAL__.ops_cached.$gwx_96
}
function gz$gwx_97(){
if( __WXML_GLOBAL__.ops_cached.$gwx_97)return __WXML_GLOBAL__.ops_cached.$gwx_97
__WXML_GLOBAL__.ops_cached.$gwx_97=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_97);return __WXML_GLOBAL__.ops_cached.$gwx_97
}
function gz$gwx_98(){
if( __WXML_GLOBAL__.ops_cached.$gwx_98)return __WXML_GLOBAL__.ops_cached.$gwx_98
__WXML_GLOBAL__.ops_cached.$gwx_98=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_98);return __WXML_GLOBAL__.ops_cached.$gwx_98
}
function gz$gwx_99(){
if( __WXML_GLOBAL__.ops_cached.$gwx_99)return __WXML_GLOBAL__.ops_cached.$gwx_99
__WXML_GLOBAL__.ops_cached.$gwx_99=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container van-hairline--top'])
Z([3,'content'])
Z([3,'plus'])
Z(z[2])
Z([[7],[3,'dialogVisible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_99);return __WXML_GLOBAL__.ops_cached.$gwx_99
}
function gz$gwx_100(){
if( __WXML_GLOBAL__.ops_cached.$gwx_100)return __WXML_GLOBAL__.ops_cached.$gwx_100
__WXML_GLOBAL__.ops_cached.$gwx_100=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_100);return __WXML_GLOBAL__.ops_cached.$gwx_100
}
function gz$gwx_101(){
if( __WXML_GLOBAL__.ops_cached.$gwx_101)return __WXML_GLOBAL__.ops_cached.$gwx_101
__WXML_GLOBAL__.ops_cached.$gwx_101=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_101);return __WXML_GLOBAL__.ops_cached.$gwx_101
}
function gz$gwx_102(){
if( __WXML_GLOBAL__.ops_cached.$gwx_102)return __WXML_GLOBAL__.ops_cached.$gwx_102
__WXML_GLOBAL__.ops_cached.$gwx_102=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'userInfo'])
Z([3,'sectionBox'])
Z([[7],[3,'btnVisible']])
Z([[7],[3,'isLogin']])
Z([3,'loginSuccess'])
Z([3,'registerSuccess'])
Z([3,'customDialog'])
Z([3,'loginDialog'])
Z(z[6])
Z([3,'initRechargeDialog'])
Z([3,'rechargeSuccess'])
Z(z[6])
Z([3,'rechargeDialog'])
Z([3,'van-notify'])
})(__WXML_GLOBAL__.ops_cached.$gwx_102);return __WXML_GLOBAL__.ops_cached.$gwx_102
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./miniprogram_npm/@vant/weapp/button/index.wxml:loadingColor":np_0,"m_./miniprogram_npm/@vant/weapp/picker/index.wxml:isSimple":np_4,"m_./miniprogram_npm/@vant/weapp/steps/index.wxml:status":np_6,"m_./pages/boothDetail/boothDetail.wxml:price":np_16,"m_./pages/components/historyDialog/historyDialog.wxml:tools":np_17,"m_./pages/index/index.wxml:price":np_18,"m_./pages/instructions/instructions.wxml:tools":np_19,"p_./miniprogram_npm/@vant/weapp/checkbox/index.wxs":np_1,"p_./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs":np_2,"p_./miniprogram_npm/@vant/weapp/picker-column/index.wxs":np_3,"p_./miniprogram_npm/@vant/weapp/progress/index.wxs":np_5,"p_./miniprogram_npm/@vant/weapp/sticky/index.wxs":np_7,"p_./miniprogram_npm/@vant/weapp/tabs/index.wxs":np_8,"p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs":np_9,"p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs":np_10,"p_./miniprogram_npm/@vant/weapp/wxs/array.wxs":np_11,"p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs":np_12,"p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs":np_13,"p_./miniprogram_npm/@vant/weapp/wxs/object.wxs":np_14,"p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs":np_15,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./miniprogram_npm/@vant/weapp/action-sheet/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/action-sheet/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/action-sheet/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/button/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['loadingColor'] =nv_require("m_./miniprogram_npm/@vant/weapp/button/index.wxml:loadingColor");
function np_0(){var nv_module={nv_exports:{}};function nv_get(nv_type,nv_color,nv_plain){if (nv_plain){return(nv_color ? nv_color:'#c9c9c9')};if (nv_type === 'default'){return('#c9c9c9')};return('white')};nv_module.nv_exports = nv_get;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/card/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/card/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/card/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/cell/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/checkbox/index.wxs");
f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/checkbox/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/checkbox/index.wxs");
function np_1(){var nv_module={nv_exports:{}};var nv_utils = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs')();function nv_iconStyle(nv_checkedColor,nv_value,nv_disabled,nv_parentDisabled,nv_iconSize){var nv_styles = [['font-size',nv_utils.nv_addUnit(nv_iconSize)]];if (nv_checkedColor && nv_value && !nv_disabled && !nv_parentDisabled){nv_styles.nv_push(['border-color',nv_checkedColor]);nv_styles.nv_push(['background-color',nv_checkedColor])};return(nv_styles.nv_map((function (nv_item){return(nv_item.nv_join(':'))})).nv_join(';'))};nv_module.nv_exports = ({nv_iconStyle:nv_iconStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/circle/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/circle/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/circle/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/col/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/col/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/col/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/collapse-item/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/collapse-item/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/collapse-item/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/dialog/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/dialog/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/dialog/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/divider/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/divider/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/divider/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/dropdown-item/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/dropdown-item/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/dropdown-item/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs");
f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxs");
function np_2(){var nv_module={nv_exports:{}};function nv_displayTitle(nv_item){if (nv_item.nv_title){return(nv_item.nv_title)};var nv_match = nv_item.nv_options.nv_filter((function (nv_option){return(nv_option.nv_value === nv_item.nv_value)}));var nv_displayTitle = nv_match.nv_length ? nv_match[(0)].nv_text:'';return(nv_displayTitle)};nv_module.nv_exports = ({nv_displayTitle:nv_displayTitle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/field/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/field/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/goods-action/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/goods-action/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/goods-action/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/grid-item/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/grid-item/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/grid-item/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/image/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/image/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/image/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/info/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/info/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/info/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/nav-bar/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/nav-bar/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/nav-bar/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/notice-bar/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/notice-bar/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/notice-bar/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']['getOptionText'] =f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/picker-column/index.wxs");
f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']['getOptionText']();

f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/picker-column/index.wxs");
function np_3(){var nv_module={nv_exports:{}};function nv_isObj(nv_x){var nv_type = typeof nv_x;return(nv_x !== null && (nv_type === 'object' || nv_type === 'function'))};nv_module.nv_exports = (function (nv_option,nv_valueKey){return(nv_isObj(nv_option) && nv_option[((nt_0=(nv_valueKey),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] != null ? nv_option[((nt_1=(nv_valueKey),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))]:nv_option)});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/picker/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/picker/index.wxml']['isSimple'] =nv_require("m_./miniprogram_npm/@vant/weapp/picker/index.wxml:isSimple");
function np_4(){var nv_module={nv_exports:{}};function nv_isSimple(nv_columns){return(nv_columns.nv_length && !nv_columns[(0)].nv_values)};nv_module.nv_exports = nv_isSimple;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/progress/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/progress/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/progress/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/progress/index.wxml']['getters'] =f_['./miniprogram_npm/@vant/weapp/progress/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/progress/index.wxs");
f_['./miniprogram_npm/@vant/weapp/progress/index.wxml']['getters']();

f_['./miniprogram_npm/@vant/weapp/progress/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/progress/index.wxs");
function np_5(){var nv_module={nv_exports:{}};nv_module.nv_exports = ({nv_text:(function (nv_pivotText,nv_percentage){return(nv_pivotText || nv_percentage + '%')}),});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/rate/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/rate/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/rate/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/search/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/search/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/search/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/skeleton/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/skeleton/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/skeleton/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/slider/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/slider/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/slider/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/stepper/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/stepper/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/stepper/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/steps/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/steps/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/steps/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/steps/index.wxml']['status'] =nv_require("m_./miniprogram_npm/@vant/weapp/steps/index.wxml:status");
function np_6(){var nv_module={nv_exports:{}};function nv_get(nv_index,nv_active){if (nv_index < nv_active){return('finish')} else if (nv_index === nv_active){return('process')};return('inactive')};nv_module.nv_exports = nv_get;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/sticky/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/sticky/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/sticky/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/sticky/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/sticky/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/sticky/index.wxs");
f_['./miniprogram_npm/@vant/weapp/sticky/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/sticky/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/sticky/index.wxs");
function np_7(){var nv_module={nv_exports:{}};function nv_wrapStyle(nv_data){if (nv_data.nv_fixed){return('top: ' + nv_data.nv_offsetTop + 'px;')};return('')};function nv_containerStyle(nv_data){if (nv_data.nv_fixed){return('height: ' + nv_data.nv_height + 'px; z-index: ' + nv_data.nv_zIndex + ';')};return('')};nv_module.nv_exports = ({nv_wrapStyle:nv_wrapStyle,nv_containerStyle:nv_containerStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/submit-bar/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/submit-bar/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/submit-bar/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/tab/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/tab/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/tab/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/tabbar-item/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/tabbar-item/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/tabbar-item/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/tabbar/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/tabbar/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/tabbar/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/tabs/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/tabs/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/tabs/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/tabs/index.wxml']['getters'] =f_['./miniprogram_npm/@vant/weapp/tabs/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/tabs/index.wxs");
f_['./miniprogram_npm/@vant/weapp/tabs/index.wxml']['getters']();

f_['./miniprogram_npm/@vant/weapp/tabs/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/tabs/index.wxs");
function np_8(){var nv_module={nv_exports:{}};function nv_tabClass(nv_active,nv_ellipsis){var nv_classes = ['tab-class'];if (nv_active){nv_classes.nv_push('tab-active-class')};if (nv_ellipsis){nv_classes.nv_push('van-ellipsis')};return(nv_classes.nv_join(' '))};function nv_tabStyle(nv_active,nv_ellipsis,nv_color,nv_type,nv_disabled,nv_activeColor,nv_inactiveColor,nv_swipeThreshold,nv_scrollable){var nv_styles = [];var nv_isCard = nv_type === 'card';if (nv_color && nv_isCard){nv_styles.nv_push('border-color:' + nv_color);if (!nv_disabled){if (nv_active){nv_styles.nv_push('background-color:' + nv_color)} else {nv_styles.nv_push('color:' + nv_color)}}};var nv_titleColor = nv_active ? nv_activeColor:nv_inactiveColor;if (nv_titleColor){nv_styles.nv_push('color:' + nv_titleColor)};if (nv_scrollable && nv_ellipsis){nv_styles.nv_push('flex-basis:' + 88 / nv_swipeThreshold + '%')};return(nv_styles.nv_join(';'))};function nv_trackStyle(nv_data){if (!nv_data.nv_animated){return('')};return(['transform: translate3d(' + -100 * nv_data.nv_currentIndex + '%, 0, 0)','-webkit-transition-duration: ' + nv_data.nv_duration + 's','transition-duration: ' + nv_data.nv_duration + 's'].nv_join(';'))};nv_module.nv_exports.nv_tabClass = nv_tabClass;nv_module.nv_exports.nv_tabStyle = nv_tabStyle;nv_module.nv_exports.nv_trackStyle = nv_trackStyle;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/tag/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/tag/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/tag/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['wxs'] =f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs");
f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxml']['wxs']();

f_['./miniprogram_npm/@vant/weapp/tree-select/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/tree-select/index.wxs");
function np_9(){var nv_module={nv_exports:{}};var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();function nv_isActive(nv_activeList,nv_itemId){if (nv_array.nv_isArray(nv_activeList)){return(nv_activeList.nv_indexOf(nv_itemId) > -1)};return(nv_activeList === nv_itemId)};nv_module.nv_exports.nv_isActive = nv_isActive;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/uploader/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/uploader/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/uploader/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs");
function np_10(){var nv_module={nv_exports:{}};var nv_REGEXP = nv_getRegExp('^\x5cd+(\x5c.\x5cd+)?$');function nv_addUnit(nv_value){if (nv_value == null){return(undefined)};return(nv_REGEXP.nv_test('' + nv_value) ? nv_value + 'px':nv_value)};nv_module.nv_exports = ({nv_addUnit:nv_addUnit,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/array.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/array.wxs");
function np_11(){var nv_module={nv_exports:{}};function nv_isArray(nv_array){return(nv_array && nv_array.nv_constructor === 'Array')};nv_module.nv_exports.nv_isArray = nv_isArray;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/bem.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs");
function np_12(){var nv_module={nv_exports:{}};var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();var nv_object = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/object.wxs')();var nv_PREFIX = 'van-';function nv_join(nv_name,nv_mods){nv_name = nv_PREFIX + nv_name;nv_mods = nv_mods.nv_map((function (nv_mod){return(nv_name + '--' + nv_mod)}));nv_mods.nv_unshift(nv_name);return(nv_mods.nv_join(' '))};function nv_traversing(nv_mods,nv_conf){if (!nv_conf){return};if (typeof nv_conf === 'string' || typeof nv_conf === 'number'){nv_mods.nv_push(nv_conf)} else if (nv_array.nv_isArray(nv_conf)){nv_conf.nv_forEach((function (nv_item){nv_traversing(nv_mods,nv_item)}))} else if (typeof nv_conf === 'object'){nv_object.nv_keys(nv_conf).nv_forEach((function (nv_key){nv_conf[((nt_0=(nv_key),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] && nv_mods.nv_push(nv_key)}))}};function nv_bem(nv_name,nv_conf){var nv_mods = [];nv_traversing(nv_mods,nv_conf);return(nv_join(nv_name,nv_mods))};nv_module.nv_exports.nv_bem = nv_bem;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/memoize.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs");
function np_13(){var nv_module={nv_exports:{}};function nv_isPrimitive(nv_value){var nv_type = typeof nv_value;return((nv_type === 'boolean' || nv_type === 'number' || nv_type === 'string' || nv_type === 'undefined' || nv_value === null))};function nv_call(nv_fn,nv_args){if (nv_args.nv_length === 2){return(nv_fn(nv_args[(0)],nv_args[(1)]))};if (nv_args.nv_length === 1){return(nv_fn(nv_args[(0)]))};return(nv_fn())};function nv_serializer(nv_args){if (nv_args.nv_length === 1 && nv_isPrimitive(nv_args[(0)])){return(nv_args[(0)])};var nv_obj = ({});for(var nv_i = 0;nv_i < nv_args.nv_length;nv_i++){nv_obj[((nt_5=('key' + nv_i),null==nt_5?undefined:'number'=== typeof nt_5?nt_5:"nv_"+nt_5))] = nv_args[((nt_6=(nv_i),null==nt_6?undefined:'number'=== typeof nt_6?nt_6:"nv_"+nt_6))]};return(nv_JSON.nv_stringify(nv_obj))};function nv_memoize(nv_fn){arguments.nv_length=arguments.length;var nv_cache = ({});return((function (){arguments.nv_length=arguments.length;var nv_key = nv_serializer(arguments);if (nv_cache[((nt_7=(nv_key),null==nt_7?undefined:'number'=== typeof nt_7?nt_7:"nv_"+nt_7))] === undefined){nv_cache[((nt_8=(nv_key),null==nt_8?undefined:'number'=== typeof nt_8?nt_8:"nv_"+nt_8))] = nv_call(nv_fn,arguments)};return(nv_cache[((nt_9=(nv_key),null==nt_9?undefined:'number'=== typeof nt_9?nt_9:"nv_"+nt_9))])}))};nv_module.nv_exports.nv_memoize = nv_memoize;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/object.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/object.wxs");
function np_14(){var nv_module={nv_exports:{}};var nv_REGEXP = nv_getRegExp('{|}|\x22','g');function nv_keys(nv_obj){return(nv_JSON.nv_stringify(nv_obj).nv_replace(nv_REGEXP,'').nv_split(',').nv_map((function (nv_item){return(nv_item.nv_split(':')[(0)])})))};nv_module.nv_exports.nv_keys = nv_keys;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
function np_15(){var nv_module={nv_exports:{}};var nv_bem = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs')().nv_bem;var nv_memoize = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs')().nv_memoize;var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')().nv_addUnit;nv_module.nv_exports = ({nv_bem:nv_memoize(nv_bem),nv_memoize:nv_memoize,nv_addUnit:nv_addUnit,});return nv_module.nv_exports;}

f_['./pages/boothDetail/boothDetail.wxml']={};
f_['./pages/boothDetail/boothDetail.wxml']['price'] =nv_require("m_./pages/boothDetail/boothDetail.wxml:price");
function np_16(){var nv_module={nv_exports:{}};var nv_indexof = (function (nv_jq){var nv_len = nv_jq.nv_toString().nv_length;switch(nv_len){case 5:return('priceFive');case 6:return('priceSix');case 7:return('priceSeven');case 8:return('priceEight');case 9:return('priceNine');case 10:return('priceTen');case 11:return('priceEleven');default:return('priceFour');}});var nv_goodsNameColor = (function (nv_color){switch(nv_color){case '白':return('white');case '绿':return('green');case '蓝':return('blue');case '紫':return('purple');case '黄':return('yellow');case '橙':return('orange');case '红':return('red');default:return('white');}});nv_module.nv_exports.nv_style = nv_indexof;nv_module.nv_exports.nv_goodsNameColor = nv_goodsNameColor;return nv_module.nv_exports;}

f_['./pages/components/historyDialog/historyDialog.wxml']={};
f_['./pages/components/historyDialog/historyDialog.wxml']['tools'] =nv_require("m_./pages/components/historyDialog/historyDialog.wxml:tools");
function np_17(){var nv_module={nv_exports:{}};var nv_name = (function (nv_ele){return(typeof (nv_ele) === 'string' ? nv_ele:nv_ele.nv_name)});var nv_goodsType = (function (nv_ele){return(typeof (nv_ele) === 'string' ? null:nv_ele.nv_goodsType)});nv_module.nv_exports.nv_name = nv_name;nv_module.nv_exports.nv_goodsType = nv_goodsType;return nv_module.nv_exports;}

f_['./pages/index/index.wxml']={};
f_['./pages/index/index.wxml']['price'] =nv_require("m_./pages/index/index.wxml:price");
function np_18(){var nv_module={nv_exports:{}};var nv_indexof = (function (nv_jq){var nv_len = nv_jq.nv_toString().nv_length;switch(nv_len){case 5:return('priceFive');case 6:return('priceSix');case 7:return('priceSeven');case 8:return('priceEight');case 9:return('priceNine');case 10:return('priceTen');case 11:return('priceEleven');default:return('priceFour');}});var nv_goodsNameColor = (function (nv_color){switch(nv_color){case '白':return('white');case '绿':return('green');case '蓝':return('blue');case '紫':return('purple');case '黄':return('yellow');case '橙':return('orange');case '红':return('red');default:return('white');}});nv_module.nv_exports.nv_style = nv_indexof;nv_module.nv_exports.nv_goodsNameColor = nv_goodsNameColor;return nv_module.nv_exports;}

f_['./pages/instructions/instructions.wxml']={};
f_['./pages/instructions/instructions.wxml']['tools'] =nv_require("m_./pages/instructions/instructions.wxml:tools");
function np_19(){var nv_module={nv_exports:{}};var nv_wrap = (function (nv_val){return(nv_val ? nv_val.nv_replace(nv_getRegExp("\\\\n","g"),"\n"):nv_val)});nv_module.nv_exports.nv_wrap = nv_wrap;return nv_module.nv_exports;}

var x=['./miniprogram_npm/@vant/weapp/action-sheet/index.wxml','./miniprogram_npm/@vant/weapp/area/index.wxml','./miniprogram_npm/@vant/weapp/button/index.wxml','./miniprogram_npm/@vant/weapp/card/index.wxml','./miniprogram_npm/@vant/weapp/cell-group/index.wxml','./miniprogram_npm/@vant/weapp/cell/index.wxml','./miniprogram_npm/@vant/weapp/checkbox-group/index.wxml','./miniprogram_npm/@vant/weapp/checkbox/index.wxml','./miniprogram_npm/@vant/weapp/circle/index.wxml','./miniprogram_npm/@vant/weapp/col/index.wxml','./miniprogram_npm/@vant/weapp/collapse-item/index.wxml','./miniprogram_npm/@vant/weapp/collapse/index.wxml','./miniprogram_npm/@vant/weapp/count-down/index.wxml','./miniprogram_npm/@vant/weapp/datetime-picker/index.wxml','./miniprogram_npm/@vant/weapp/dialog/index.wxml','./miniprogram_npm/@vant/weapp/divider/index.wxml','./miniprogram_npm/@vant/weapp/dropdown-item/index.wxml','./miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml','./miniprogram_npm/@vant/weapp/field/index.wxml','./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml','./miniprogram_npm/@vant/weapp/goods-action-icon/index.wxml','./miniprogram_npm/@vant/weapp/goods-action/index.wxml','./miniprogram_npm/@vant/weapp/grid-item/index.wxml','./miniprogram_npm/@vant/weapp/grid/index.wxml','./miniprogram_npm/@vant/weapp/icon/index.wxml','./miniprogram_npm/@vant/weapp/image/index.wxml','./miniprogram_npm/@vant/weapp/index-anchor/index.wxml','./miniprogram_npm/@vant/weapp/index-bar/index.wxml','./miniprogram_npm/@vant/weapp/info/index.wxml','./miniprogram_npm/@vant/weapp/loading/index.wxml','./miniprogram_npm/@vant/weapp/nav-bar/index.wxml','./miniprogram_npm/@vant/weapp/notice-bar/index.wxml','./miniprogram_npm/@vant/weapp/notify/index.wxml','./miniprogram_npm/@vant/weapp/overlay/index.wxml','./miniprogram_npm/@vant/weapp/panel/index.wxml','./miniprogram_npm/@vant/weapp/picker-column/index.wxml','./miniprogram_npm/@vant/weapp/picker/index.wxml','./toolbar','./miniprogram_npm/@vant/weapp/picker/toolbar.wxml','./miniprogram_npm/@vant/weapp/popup/index.wxml','./miniprogram_npm/@vant/weapp/progress/index.wxml','./miniprogram_npm/@vant/weapp/radio-group/index.wxml','./miniprogram_npm/@vant/weapp/radio/index.wxml','./miniprogram_npm/@vant/weapp/rate/index.wxml','./miniprogram_npm/@vant/weapp/row/index.wxml','./miniprogram_npm/@vant/weapp/search/index.wxml','./miniprogram_npm/@vant/weapp/sidebar-item/index.wxml','./miniprogram_npm/@vant/weapp/sidebar/index.wxml','./miniprogram_npm/@vant/weapp/skeleton/index.wxml','./miniprogram_npm/@vant/weapp/slider/index.wxml','./miniprogram_npm/@vant/weapp/stepper/index.wxml','./miniprogram_npm/@vant/weapp/steps/index.wxml','./miniprogram_npm/@vant/weapp/sticky/index.wxml','./miniprogram_npm/@vant/weapp/submit-bar/index.wxml','./miniprogram_npm/@vant/weapp/swipe-cell/index.wxml','./miniprogram_npm/@vant/weapp/switch/index.wxml','./miniprogram_npm/@vant/weapp/tab/index.wxml','./miniprogram_npm/@vant/weapp/tabbar-item/index.wxml','./miniprogram_npm/@vant/weapp/tabbar/index.wxml','./miniprogram_npm/@vant/weapp/tabs/index.wxml','./miniprogram_npm/@vant/weapp/tag/index.wxml','./miniprogram_npm/@vant/weapp/toast/index.wxml','./miniprogram_npm/@vant/weapp/transition/index.wxml','./miniprogram_npm/@vant/weapp/tree-select/index.wxml','./miniprogram_npm/@vant/weapp/uploader/index.wxml','./pages/app/app.wxml','./pages/boothDetail/boothDetail.wxml','./pages/buyCode/buyCode.wxml','./pages/components/aoyiDetail/aoyiDetail.wxml','./pages/components/banner/banner.wxml','./pages/components/buyCode/buyCode.wxml','./pages/components/gradientsLabel/gradientsLabel.wxml','./pages/components/historyDialog/historyDialog.wxml','./pages/components/initRechargeDialog/initRechargeDialog.wxml','./pages/components/loginDialog/loginDialog.wxml','./pages/components/noticeDialog/noticeDialog.wxml','./pages/components/noticeSwiper/noticeSwiper.wxml','./pages/components/popup/popup.wxml','./pages/components/radioGroup/radioGroup.wxml','./pages/components/rechargeDialog/rechargeDialog.wxml','./pages/components/shopDetail/shopDetail.wxml','./pages/components/yuanshenDetail/yuanshenDetail.wxml','./pages/components/zhuangbeiDetail/zhuangbeiDetail.wxml','./pages/index/index.wxml','./pages/instructions/instructions.wxml','./pages/queryMap/queryMap.wxml','./pages/tools/tools.wxml','./pages/toolsPage/kangxing/kangxing/kangxing.wxml','./pages/toolsPage/kangxing/kangxingwan/kangxingwan.wxml','./pages/toolsPage/kangxing/renxing/renxing.wxml','./pages/toolsPage/kangxing/wuzhi/wuzhi.wxml','./pages/toolsPage/pianshu/pianshu.wxml','./pages/toolsPage/tiku/tiku.wxml','./pages/toolsPage/type/type.wxml','./pages/toolsPage/yuanshen/baicai/baicai.wxml','./pages/toolsPage/yuanshen/chengzhang/chengzhang.wxml','./pages/toolsPage/yuanshen/jingcui/jingcui.wxml','./pages/toolsPage/zhuangbei/gaizao/gaizao.wxml','./pages/toolsPage/zhuangbei/sixiang/sixiang.wxml','./pages/toolsPage/zinv/chengben/chengben.wxml','./pages/toolsPage/zinv/tianfen/tianfen.wxml','./pages/toolsPage/zinv/xingge/xingge.wxml','./pages/userInfo/userInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'van-popup',['bind:close',0,'closeOnClickOverlay',1,'customClass',1,'overlay',2,'position',3,'round',4,'safeAreaInsetBottom',5,'show',6,'zIndex',7],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,9,e,s,gg)){xC.wxVkey=1
var hG=_mz(z,'van-icon',['bind:click',10,'customClass',1,'name',2],[],e,s,gg)
_(xC,hG)
}
var oD=_v()
_(oB,oD)
if(_oz(z,13,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,14,e,s,gg)){fE.wxVkey=1
var oH=_v()
_(fE,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_mz(z,'button',['appParameter',17,'bind:tap',1,'bindcontact',2,'binderror',3,'bindgetphonenumber',4,'bindgetuserinfo',5,'bindlaunchapp',6,'bindopensetting',7,'class',8,'data-index',9,'hoverClass',10,'lang',11,'openType',12,'sendMessageImg',13,'sendMessagePath',14,'sendMessageTitle',15,'sessionFrom',16,'showMessageCard',17,'style',18],[],lK,oJ,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,36,lK,oJ,gg)){bO.wxVkey=1
var oP=_v()
_(bO,oP)
if(_oz(z,37,lK,oJ,gg)){oP.wxVkey=1
}
oP.wxXCkey=1
}
else{bO.wxVkey=2
var xQ=_mz(z,'van-loading',['customClass',38,'size',1],[],lK,oJ,gg)
_(bO,xQ)
}
bO.wxXCkey=1
bO.wxXCkey=3
_(aL,eN)
return aL
}
oH.wxXCkey=4
_2z(z,15,cI,e,s,gg,oH,'item','index','index')
}
var oR=_n('slot')
_(oB,oR)
var cF=_v()
_(oB,cF)
if(_oz(z,40,e,s,gg)){cF.wxVkey=1
}
xC.wxXCkey=1
xC.wxXCkey=3
oD.wxXCkey=1
fE.wxXCkey=1
fE.wxXCkey=3
cF.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cT=_mz(z,'van-picker',['showToolbar',-1,'activeClass',0,'bind:cancel',1,'bind:change',1,'bind:confirm',2,'cancelButtonText',3,'class',4,'columnClass',5,'columns',6,'confirmButtonText',7,'itemHeight',8,'loading',9,'title',10,'toolbarClass',11,'valueKey',12,'visibleItemCount',13],[],e,s,gg)
_(r,cT)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oV=_mz(z,'button',['appParameter',0,'ariaLabel',1,'bindcontact',1,'binderror',2,'bindgetphonenumber',3,'bindgetuserinfo',4,'bindlaunchapp',5,'bindopensetting',6,'bindtap',7,'businessId',8,'class',9,'hoverClass',10,'id',11,'lang',12,'openType',13,'sendMessageImg',14,'sendMessagePath',15,'sendMessageTitle',16,'sessionFrom',17,'showMessageCard',18,'style',19],[],e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,21,e,s,gg)){cW.wxVkey=1
var lY=_mz(z,'van-loading',['color',22,'customClass',1,'size',2,'type',3],[],e,s,gg)
_(cW,lY)
var oX=_v()
_(cW,oX)
if(_oz(z,26,e,s,gg)){oX.wxVkey=1
}
oX.wxXCkey=1
}
else{cW.wxVkey=2
var aZ=_v()
_(cW,aZ)
if(_oz(z,27,e,s,gg)){aZ.wxVkey=1
var t1=_mz(z,'van-icon',['class',28,'customStyle',1,'name',2,'size',3],[],e,s,gg)
_(aZ,t1)
}
var e2=_n('slot')
_(cW,e2)
aZ.wxXCkey=1
aZ.wxXCkey=3
}
cW.wxXCkey=1
cW.wxXCkey=3
cW.wxXCkey=3
_(r,oV)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
var x5=_n('view')
_rz(z,x5,'class',1,e,s,gg)
var o6=_mz(z,'view',['bind:tap',2,'class',1],[],e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,4,e,s,gg)){f7.wxVkey=1
}
var h9=_n('slot')
_rz(z,h9,'name',5,e,s,gg)
_(o6,h9)
var c8=_v()
_(o6,c8)
if(_oz(z,6,e,s,gg)){c8.wxVkey=1
var o0=_mz(z,'van-tag',['mark',-1,'customClass',7,'type',1],[],e,s,gg)
_(c8,o0)
}
f7.wxXCkey=1
c8.wxXCkey=1
c8.wxXCkey=3
_(x5,o6)
var cAB=_n('view')
_rz(z,cAB,'class',9,e,s,gg)
var oBB=_n('view')
var lCB=_v()
_(oBB,lCB)
if(_oz(z,10,e,s,gg)){lCB.wxVkey=1
}
else{lCB.wxVkey=2
var tEB=_n('slot')
_rz(z,tEB,'name',11,e,s,gg)
_(lCB,tEB)
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,12,e,s,gg)){aDB.wxVkey=1
}
else{aDB.wxVkey=2
var eFB=_n('slot')
_rz(z,eFB,'name',13,e,s,gg)
_(aDB,eFB)
}
var bGB=_n('slot')
_rz(z,bGB,'name',14,e,s,gg)
_(oBB,bGB)
lCB.wxXCkey=1
aDB.wxXCkey=1
_(cAB,oBB)
var oHB=_n('view')
_rz(z,oHB,'class',15,e,s,gg)
var cLB=_n('slot')
_rz(z,cLB,'name',16,e,s,gg)
_(oHB,cLB)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,17,e,s,gg)){xIB.wxVkey=1
}
else{xIB.wxVkey=2
var hMB=_n('slot')
_rz(z,hMB,'name',18,e,s,gg)
_(xIB,hMB)
}
var oJB=_v()
_(oHB,oJB)
if(_oz(z,19,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(oHB,fKB)
if(_oz(z,20,e,s,gg)){fKB.wxVkey=1
}
else{fKB.wxVkey=2
var oNB=_n('slot')
_rz(z,oNB,'name',21,e,s,gg)
_(fKB,oNB)
}
var cOB=_n('slot')
_rz(z,cOB,'name',22,e,s,gg)
_(oHB,cOB)
xIB.wxXCkey=1
oJB.wxXCkey=1
fKB.wxXCkey=1
_(cAB,oHB)
_(x5,cAB)
_(o4,x5)
var oPB=_n('slot')
_rz(z,oPB,'name',23,e,s,gg)
_(o4,oPB)
_(r,o4)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var aRB=_v()
_(r,aRB)
if(_oz(z,0,e,s,gg)){aRB.wxVkey=1
}
var tSB=_n('slot')
_(r,tSB)
aRB.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var bUB=_mz(z,'view',['bind:tap',0,'class',1,'hoverClass',1,'hoverStayTime',2,'style',3],[],e,s,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,5,e,s,gg)){oVB.wxVkey=1
var oXB=_mz(z,'van-icon',['class',6,'customClass',1,'name',2],[],e,s,gg)
_(oVB,oXB)
}
else{oVB.wxVkey=2
var fYB=_n('slot')
_rz(z,fYB,'name',9,e,s,gg)
_(oVB,fYB)
}
var cZB=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
var h1B=_v()
_(cZB,h1B)
if(_oz(z,12,e,s,gg)){h1B.wxVkey=1
}
else{h1B.wxVkey=2
var c3B=_n('slot')
_rz(z,c3B,'name',13,e,s,gg)
_(h1B,c3B)
}
var o2B=_v()
_(cZB,o2B)
if(_oz(z,14,e,s,gg)){o2B.wxVkey=1
var o4B=_n('view')
_rz(z,o4B,'class',15,e,s,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,16,e,s,gg)){l5B.wxVkey=1
var a6B=_n('slot')
_rz(z,a6B,'name',17,e,s,gg)
_(l5B,a6B)
}
else if(_oz(z,18,e,s,gg)){l5B.wxVkey=2
}
l5B.wxXCkey=1
_(o2B,o4B)
}
h1B.wxXCkey=1
o2B.wxXCkey=1
_(bUB,cZB)
var t7B=_n('view')
_rz(z,t7B,'class',19,e,s,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,20,e,s,gg)){e8B.wxVkey=1
}
else{e8B.wxVkey=2
var b9B=_n('slot')
_(e8B,b9B)
}
e8B.wxXCkey=1
_(bUB,t7B)
var xWB=_v()
_(bUB,xWB)
if(_oz(z,21,e,s,gg)){xWB.wxVkey=1
var o0B=_mz(z,'van-icon',['class',22,'customClass',1,'name',2],[],e,s,gg)
_(xWB,o0B)
}
else{xWB.wxVkey=2
var xAC=_n('slot')
_rz(z,xAC,'name',25,e,s,gg)
_(xWB,xAC)
}
var oBC=_n('slot')
_rz(z,oBC,'name',26,e,s,gg)
_(bUB,oBC)
oVB.wxXCkey=1
oVB.wxXCkey=3
xWB.wxXCkey=1
xWB.wxXCkey=3
_(r,bUB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cDC=_n('slot')
_(r,cDC)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oFC=_n('view')
_rz(z,oFC,'class',0,e,s,gg)
var cGC=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,3,e,s,gg)){oHC.wxVkey=1
var lIC=_n('slot')
_rz(z,lIC,'name',4,e,s,gg)
_(oHC,lIC)
}
else{oHC.wxVkey=2
var aJC=_mz(z,'van-icon',['class',5,'customClass',1,'customStyle',2,'name',3,'size',4,'style',5],[],e,s,gg)
_(oHC,aJC)
}
oHC.wxXCkey=1
oHC.wxXCkey=3
_(oFC,cGC)
var tKC=_mz(z,'view',['bindtap',11,'class',1],[],e,s,gg)
var eLC=_n('slot')
_(tKC,eLC)
_(oFC,tKC)
_(r,oFC)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oNC=_n('view')
_rz(z,oNC,'class',0,e,s,gg)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,1,e,s,gg)){xOC.wxVkey=1
var oPC=_n('slot')
_(xOC,oPC)
}
else{xOC.wxVkey=2
}
xOC.wxXCkey=1
_(r,oNC)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var cRC=_n('slot')
_(r,cRC)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oTC=_n('view')
_rz(z,oTC,'class',0,e,s,gg)
var cUC=_mz(z,'van-cell',['bind:click',1,'border',1,'class',2,'clickable',3,'customClass',4,'hoverClass',5,'icon',6,'isLink',7,'label',8,'rightIconClass',9,'title',10,'titleClass',11,'value',12],[],e,s,gg)
var oVC=_mz(z,'slot',['name',14,'slot',1],[],e,s,gg)
_(cUC,oVC)
var lWC=_mz(z,'slot',['name',16,'slot',1],[],e,s,gg)
_(cUC,lWC)
var aXC=_n('slot')
_rz(z,aXC,'name',18,e,s,gg)
_(cUC,aXC)
var tYC=_mz(z,'slot',['name',19,'slot',1],[],e,s,gg)
_(cUC,tYC)
_(oTC,cUC)
var eZC=_mz(z,'view',['bind:transitionend',21,'class',1,'style',2],[],e,s,gg)
var b1C=_n('slot')
_(eZC,b1C)
_(oTC,eZC)
_(r,oTC)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var x3C=_n('slot')
_(r,x3C)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var f5C=_n('view')
_rz(z,f5C,'class',0,e,s,gg)
var c6C=_v()
_(f5C,c6C)
if(_oz(z,1,e,s,gg)){c6C.wxVkey=1
var h7C=_n('slot')
_(c6C,h7C)
}
else{c6C.wxVkey=2
}
c6C.wxXCkey=1
_(r,f5C)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var c9C=_mz(z,'van-picker',['activeClass',0,'bind:cancel',1,'bind:change',1,'bind:confirm',2,'cancelButtonText',3,'class',4,'columnClass',5,'columns',6,'confirmButtonText',7,'itemHeight',8,'showToolbar',9,'title',10,'toolbarClass',11,'visibleItemCount',12],[],e,s,gg)
_(r,c9C)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var lAD=_mz(z,'van-popup',['bind:close',0,'closeOnClickOverlay',1,'customClass',1,'customStyle',2,'overlay',3,'overlayStyle',4,'show',5,'transition',6,'zIndex',7],[],e,s,gg)
var aBD=_v()
_(lAD,aBD)
if(_oz(z,9,e,s,gg)){aBD.wxVkey=1
var eDD=_n('view')
_rz(z,eDD,'class',10,e,s,gg)
var bED=_v()
_(eDD,bED)
if(_oz(z,11,e,s,gg)){bED.wxVkey=1
var oFD=_n('slot')
_rz(z,oFD,'name',12,e,s,gg)
_(bED,oFD)
}
else if(_oz(z,13,e,s,gg)){bED.wxVkey=2
}
bED.wxXCkey=1
_(aBD,eDD)
}
var tCD=_v()
_(lAD,tCD)
if(_oz(z,14,e,s,gg)){tCD.wxVkey=1
var xGD=_n('slot')
_(tCD,xGD)
}
else if(_oz(z,15,e,s,gg)){tCD.wxVkey=2
}
var oHD=_n('view')
_rz(z,oHD,'class',16,e,s,gg)
var fID=_v()
_(oHD,fID)
if(_oz(z,17,e,s,gg)){fID.wxVkey=1
var hKD=_mz(z,'van-button',['bind:click',18,'class',1,'customClass',2,'customStyle',3,'loading',4,'size',5],[],e,s,gg)
_(fID,hKD)
}
var cJD=_v()
_(oHD,cJD)
if(_oz(z,24,e,s,gg)){cJD.wxVkey=1
var oLD=_mz(z,'van-button',['appParameter',25,'bind:click',1,'bindcontact',2,'binderror',3,'bindgetphonenumber',4,'bindgetuserinfo',5,'bindlaunchapp',6,'bindopensetting',7,'businessId',8,'class',9,'customClass',10,'customStyle',11,'lang',12,'loading',13,'openType',14,'sendMessageImg',15,'sendMessagePath',16,'sendMessageTitle',17,'sessionFrom',18,'showMessageCard',19,'size',20],[],e,s,gg)
_(cJD,oLD)
}
fID.wxXCkey=1
fID.wxXCkey=3
cJD.wxXCkey=1
cJD.wxXCkey=3
_(lAD,oHD)
aBD.wxXCkey=1
tCD.wxXCkey=1
_(r,lAD)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oND=_n('slot')
_(r,oND)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var aPD=_v()
_(r,aPD)
if(_oz(z,0,e,s,gg)){aPD.wxVkey=1
var tQD=_mz(z,'van-popup',['bind:after-enter',1,'bind:after-leave',1,'bind:close',2,'bind:enter',3,'bind:leave',4,'closeOnClickOverlay',5,'customStyle',6,'duration',7,'overlay',8,'overlayStyle',9,'position',10,'show',11],[],e,s,gg)
var eRD=_v()
_(tQD,eRD)
var bSD=function(xUD,oTD,oVD,gg){
var cXD=_mz(z,'van-cell',['clickable',-1,'bind:tap',15,'class',1,'data-option',2,'icon',3],[],xUD,oTD,gg)
var hYD=_v()
_(cXD,hYD)
if(_oz(z,19,xUD,oTD,gg)){hYD.wxVkey=1
var oZD=_mz(z,'van-icon',['class',20,'color',1,'name',2],[],xUD,oTD,gg)
_(hYD,oZD)
}
hYD.wxXCkey=1
hYD.wxXCkey=3
_(oVD,cXD)
return oVD
}
eRD.wxXCkey=4
_2z(z,13,bSD,e,s,gg,eRD,'item','index','value')
var c1D=_n('slot')
_(tQD,c1D)
_(aPD,tQD)
}
aPD.wxXCkey=1
aPD.wxXCkey=3
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var l3D=_n('slot')
_(r,l3D)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var t5D=_mz(z,'van-cell',['arrowDirection',0,'border',1,'center',1,'clickable',2,'customClass',3,'customStyle',4,'icon',5,'isLink',6,'required',7,'size',8,'title',9,'titleWidth',10],[],e,s,gg)
var b7D=_mz(z,'slot',['name',12,'slot',1],[],e,s,gg)
_(t5D,b7D)
var o8D=_mz(z,'slot',['name',14,'slot',1],[],e,s,gg)
_(t5D,o8D)
var x9D=_n('view')
_rz(z,x9D,'class',16,e,s,gg)
var o0D=_v()
_(x9D,o0D)
if(_oz(z,17,e,s,gg)){o0D.wxVkey=1
var fAE=_mz(z,'van-icon',['catch:touchstart',18,'class',1,'name',2,'size',3],[],e,s,gg)
_(o0D,fAE)
}
var cBE=_mz(z,'view',['bind:tap',22,'class',1],[],e,s,gg)
var hCE=_v()
_(cBE,hCE)
if(_oz(z,24,e,s,gg)){hCE.wxVkey=1
var oDE=_mz(z,'van-icon',['class',25,'customClass',1,'name',2,'size',3],[],e,s,gg)
_(hCE,oDE)
}
var cEE=_n('slot')
_rz(z,cEE,'name',29,e,s,gg)
_(cBE,cEE)
var oFE=_n('slot')
_rz(z,oFE,'name',30,e,s,gg)
_(cBE,oFE)
hCE.wxXCkey=1
hCE.wxXCkey=3
_(x9D,cBE)
var lGE=_n('slot')
_rz(z,lGE,'name',31,e,s,gg)
_(x9D,lGE)
o0D.wxXCkey=1
o0D.wxXCkey=3
_(t5D,x9D)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,32,e,s,gg)){e6D.wxVkey=1
}
e6D.wxXCkey=1
_(r,t5D)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var tIE=_mz(z,'van-button',['appParameter',0,'bind:click',1,'bindcontact',1,'binderror',2,'bindgetphonenumber',3,'bindgetuserinfo',4,'bindlaunchapp',5,'bindopensetting',6,'businessId',7,'class',8,'color',9,'customClass',10,'disabled',11,'id',12,'lang',13,'loading',14,'openType',15,'plain',16,'sendMessageImg',17,'sendMessagePath',18,'sendMessageTitle',19,'sessionFrom',20,'showMessageCard',21,'type',22],[],e,s,gg)
var eJE=_n('slot')
_(tIE,eJE)
_(r,tIE)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var oLE=_mz(z,'van-button',['square',-1,'appParameter',0,'bind:click',1,'bindcontact',1,'binderror',2,'bindgetphonenumber',3,'bindgetuserinfo',4,'bindlaunchapp',5,'bindopensetting',6,'businessId',7,'customClass',8,'disabled',9,'id',10,'lang',11,'loading',12,'openType',13,'sendMessageImg',14,'sendMessagePath',15,'sendMessageTitle',16,'sessionFrom',17,'showMessageCard',18,'size',19],[],e,s,gg)
var xME=_n('view')
_rz(z,xME,'class',21,e,s,gg)
var oNE=_v()
_(xME,oNE)
if(_oz(z,22,e,s,gg)){oNE.wxVkey=1
var fOE=_mz(z,'van-icon',['class',23,'customClass',1,'dot',2,'info',3,'name',4,'size',5],[],e,s,gg)
_(oNE,fOE)
}
var cPE=_n('slot')
_rz(z,cPE,'name',29,e,s,gg)
_(xME,cPE)
oNE.wxXCkey=1
oNE.wxXCkey=3
_(oLE,xME)
_(r,oLE)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oRE=_n('slot')
_(r,oRE)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oTE=_mz(z,'view',['bindtap',0,'class',1,'style',1],[],e,s,gg)
var lUE=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,5,e,s,gg)){aVE.wxVkey=1
var tWE=_n('slot')
_(aVE,tWE)
}
else{aVE.wxVkey=2
var eXE=_n('view')
_rz(z,eXE,'class',6,e,s,gg)
var bYE=_v()
_(eXE,bYE)
if(_oz(z,7,e,s,gg)){bYE.wxVkey=1
var oZE=_mz(z,'van-icon',['dot',8,'info',1,'name',2],[],e,s,gg)
_(bYE,oZE)
}
else{bYE.wxVkey=2
var x1E=_n('slot')
_rz(z,x1E,'name',11,e,s,gg)
_(bYE,x1E)
}
bYE.wxXCkey=1
bYE.wxXCkey=3
_(aVE,eXE)
var o2E=_n('view')
_rz(z,o2E,'class',12,e,s,gg)
var f3E=_v()
_(o2E,f3E)
if(_oz(z,13,e,s,gg)){f3E.wxVkey=1
}
else{f3E.wxVkey=2
var c4E=_n('slot')
_rz(z,c4E,'name',14,e,s,gg)
_(f3E,c4E)
}
f3E.wxXCkey=1
_(aVE,o2E)
}
aVE.wxXCkey=1
aVE.wxXCkey=3
_(oTE,lUE)
_(r,oTE)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var o6E=_n('slot')
_(r,o6E)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var o8E=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var l9E=_v()
_(o8E,l9E)
if(_oz(z,3,e,s,gg)){l9E.wxVkey=1
var tAF=_mz(z,'van-info',['customClass',4,'dot',1,'info',2],[],e,s,gg)
_(l9E,tAF)
}
var a0E=_v()
_(o8E,a0E)
if(_oz(z,7,e,s,gg)){a0E.wxVkey=1
}
l9E.wxXCkey=1
l9E.wxXCkey=3
a0E.wxXCkey=1
_(r,o8E)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var bCF=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var oDF=_v()
_(bCF,oDF)
if(_oz(z,3,e,s,gg)){oDF.wxVkey=1
}
var xEF=_v()
_(bCF,xEF)
if(_oz(z,4,e,s,gg)){xEF.wxVkey=1
var fGF=_n('view')
_rz(z,fGF,'class',5,e,s,gg)
var cHF=_v()
_(fGF,cHF)
if(_oz(z,6,e,s,gg)){cHF.wxVkey=1
var hIF=_n('slot')
_rz(z,hIF,'name',7,e,s,gg)
_(cHF,hIF)
}
else{cHF.wxVkey=2
var oJF=_mz(z,'van-icon',['name',8,'size',1],[],e,s,gg)
_(cHF,oJF)
}
cHF.wxXCkey=1
cHF.wxXCkey=3
_(xEF,fGF)
}
var oFF=_v()
_(bCF,oFF)
if(_oz(z,10,e,s,gg)){oFF.wxVkey=1
var cKF=_n('view')
_rz(z,cKF,'class',11,e,s,gg)
var oLF=_v()
_(cKF,oLF)
if(_oz(z,12,e,s,gg)){oLF.wxVkey=1
var lMF=_n('slot')
_rz(z,lMF,'name',13,e,s,gg)
_(oLF,lMF)
}
else{oLF.wxVkey=2
var aNF=_mz(z,'van-icon',['name',14,'size',1],[],e,s,gg)
_(oLF,aNF)
}
oLF.wxXCkey=1
oLF.wxXCkey=3
_(oFF,cKF)
}
oDF.wxXCkey=1
xEF.wxXCkey=1
xEF.wxXCkey=3
oFF.wxXCkey=1
oFF.wxXCkey=3
_(r,bCF)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var ePF=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var bQF=_v()
_(ePF,bQF)
if(_oz(z,2,e,s,gg)){bQF.wxVkey=1
var oRF=_n('slot')
_(bQF,oRF)
}
else{bQF.wxVkey=2
}
bQF.wxXCkey=1
_(r,ePF)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var oTF=_n('view')
_rz(z,oTF,'class',0,e,s,gg)
var cVF=_n('slot')
_(oTF,cVF)
var fUF=_v()
_(oTF,fUF)
if(_oz(z,1,e,s,gg)){fUF.wxVkey=1
}
fUF.wxXCkey=1
_(r,oTF)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var oXF=_v()
_(r,oXF)
if(_oz(z,0,e,s,gg)){oXF.wxVkey=1
}
oXF.wxXCkey=1
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oZF=_n('view')
_rz(z,oZF,'class',0,e,s,gg)
var l1F=_v()
_(oZF,l1F)
var a2F=function(e4F,t3F,b5F,gg){
var x7F=_v()
_(b5F,x7F)
if(_oz(z,3,e4F,t3F,gg)){x7F.wxVkey=1
}
x7F.wxXCkey=1
return b5F
}
l1F.wxXCkey=2
_2z(z,1,a2F,e,s,gg,l1F,'item','index','index')
var o8F=_n('slot')
_(oZF,o8F)
_(r,oZF)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var c0F=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var hAG=_mz(z,'view',['bind:tap',2,'class',1],[],e,s,gg)
var oBG=_v()
_(hAG,oBG)
if(_oz(z,4,e,s,gg)){oBG.wxVkey=1
var cCG=_v()
_(oBG,cCG)
if(_oz(z,5,e,s,gg)){cCG.wxVkey=1
var lEG=_mz(z,'van-icon',['customClass',6,'name',1,'size',2],[],e,s,gg)
_(cCG,lEG)
}
var oDG=_v()
_(oBG,oDG)
if(_oz(z,9,e,s,gg)){oDG.wxVkey=1
}
cCG.wxXCkey=1
cCG.wxXCkey=3
oDG.wxXCkey=1
}
else{oBG.wxVkey=2
var aFG=_n('slot')
_rz(z,aFG,'name',10,e,s,gg)
_(oBG,aFG)
}
oBG.wxXCkey=1
oBG.wxXCkey=3
_(c0F,hAG)
var tGG=_n('view')
_rz(z,tGG,'class',11,e,s,gg)
var eHG=_v()
_(tGG,eHG)
if(_oz(z,12,e,s,gg)){eHG.wxVkey=1
}
else{eHG.wxVkey=2
var bIG=_n('slot')
_rz(z,bIG,'name',13,e,s,gg)
_(eHG,bIG)
}
eHG.wxXCkey=1
_(c0F,tGG)
var oJG=_mz(z,'view',['bind:tap',14,'class',1],[],e,s,gg)
var xKG=_v()
_(oJG,xKG)
if(_oz(z,16,e,s,gg)){xKG.wxVkey=1
}
else{xKG.wxVkey=2
var oLG=_n('slot')
_rz(z,oLG,'name',17,e,s,gg)
_(xKG,oLG)
}
xKG.wxXCkey=1
_(c0F,oJG)
_(r,c0F)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var cNG=_v()
_(r,cNG)
if(_oz(z,0,e,s,gg)){cNG.wxVkey=1
var hOG=_mz(z,'view',['bind:tap',1,'class',1,'style',2],[],e,s,gg)
var oPG=_v()
_(hOG,oPG)
if(_oz(z,4,e,s,gg)){oPG.wxVkey=1
var oRG=_mz(z,'van-icon',['class',5,'name',1,'size',2],[],e,s,gg)
_(oPG,oRG)
}
else{oPG.wxVkey=2
var lSG=_n('slot')
_rz(z,lSG,'name',8,e,s,gg)
_(oPG,lSG)
}
var cQG=_v()
_(hOG,cQG)
if(_oz(z,9,e,s,gg)){cQG.wxVkey=1
var aTG=_mz(z,'van-icon',['catch:tap',10,'class',1,'name',2],[],e,s,gg)
_(cQG,aTG)
}
else if(_oz(z,13,e,s,gg)){cQG.wxVkey=2
var tUG=_mz(z,'van-icon',['class',14,'name',1],[],e,s,gg)
_(cQG,tUG)
}
else{cQG.wxVkey=3
var eVG=_n('slot')
_rz(z,eVG,'name',16,e,s,gg)
_(cQG,eVG)
}
oPG.wxXCkey=1
oPG.wxXCkey=3
cQG.wxXCkey=1
cQG.wxXCkey=3
cQG.wxXCkey=3
_(cNG,hOG)
}
cNG.wxXCkey=1
cNG.wxXCkey=3
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var oXG=_mz(z,'van-transition',['bind:tap',0,'customClass',1,'customStyle',1,'name',2,'show',3],[],e,s,gg)
var xYG=_v()
_(oXG,xYG)
if(_oz(z,5,e,s,gg)){xYG.wxVkey=1
}
xYG.wxXCkey=1
_(r,oXG)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var f1G=_mz(z,'van-transition',['bind:tap',0,'catch:touchmove',1,'customClass',1,'customStyle',2,'duration',3,'show',4],[],e,s,gg)
var c2G=_n('slot')
_(f1G,c2G)
_(r,f1G)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var o4G=_n('view')
_rz(z,o4G,'class',0,e,s,gg)
var c5G=_v()
_(o4G,c5G)
if(_oz(z,1,e,s,gg)){c5G.wxVkey=1
var l7G=_mz(z,'van-cell',['customClass',2,'label',1,'title',2,'value',3,'valueClass',4],[],e,s,gg)
_(c5G,l7G)
}
else{c5G.wxVkey=2
var a8G=_n('slot')
_rz(z,a8G,'name',7,e,s,gg)
_(c5G,a8G)
}
var t9G=_n('slot')
_(o4G,t9G)
var o6G=_v()
_(o4G,o6G)
if(_oz(z,8,e,s,gg)){o6G.wxVkey=1
var e0G=_n('slot')
_rz(z,e0G,'name',9,e,s,gg)
_(o6G,e0G)
}
c5G.wxXCkey=1
c5G.wxXCkey=3
o6G.wxXCkey=1
_(r,o4G)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var xCH=e_[x[36]].i
_ai(xCH,x[37],e_,x[36],1,1)
var oDH=_n('view')
_rz(z,oDH,'class',0,e,s,gg)
var fEH=_v()
_(oDH,fEH)
if(_oz(z,1,e,s,gg)){fEH.wxVkey=1
var oHH=_v()
_(fEH,oHH)
var cIH=_oz(z,3,e,s,gg)
var oJH=_gd(x[36],cIH,e_,d_)
if(oJH){
var lKH=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oHH.wxXCkey=3
oJH(lKH,lKH,oHH,gg)
gg.f=cur_globalf
}
else _w(cIH,x[36],4,16)
}
var cFH=_v()
_(oDH,cFH)
if(_oz(z,4,e,s,gg)){cFH.wxVkey=1
var aLH=_n('loading')
_rz(z,aLH,'color',5,e,s,gg)
_(cFH,aLH)
}
var tMH=_mz(z,'view',['catch:touchmove',6,'class',1,'style',2],[],e,s,gg)
var eNH=_v()
_(tMH,eNH)
var bOH=function(xQH,oPH,oRH,gg){
var cTH=_mz(z,'picker-column',['activeClass',11,'bind:change',1,'class',2,'customClass',3,'data-index',4,'defaultIndex',5,'initialOptions',6,'itemHeight',7,'valueKey',8,'visibleItemCount',9],[],xQH,oPH,gg)
_(oRH,cTH)
return oRH
}
eNH.wxXCkey=4
_2z(z,9,bOH,e,s,gg,eNH,'item','index','index')
_(oDH,tMH)
var hGH=_v()
_(oDH,hGH)
if(_oz(z,21,e,s,gg)){hGH.wxVkey=1
var hUH=_v()
_(hGH,hUH)
var oVH=_oz(z,23,e,s,gg)
var cWH=_gd(x[36],oVH,e_,d_)
if(cWH){
var oXH=_1z(z,22,e,s,gg) || {}
var cur_globalf=gg.f
hUH.wxXCkey=3
cWH(oXH,oXH,hUH,gg)
gg.f=cur_globalf
}
else _w(oVH,x[36],33,16)
}
fEH.wxXCkey=1
cFH.wxXCkey=1
cFH.wxXCkey=3
hGH.wxXCkey=1
_(r,oDH)
xCH.pop()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[x[37]],ic:[]}
d_[x[38]]={}
d_[x[38]]["toolbar"]=function(e,s,r,gg){
var z=gz$gwx_38()
var b=x[38]+':toolbar'
r.wxVkey=b
gg.f=$gdc(f_["./miniprogram_npm/@vant/weapp/picker/toolbar.wxml"],"",1)
if(p_[b]){_wl(b,x[38]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
return r
}
e_[x[38]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var t1H=_v()
_(r,t1H)
if(_oz(z,0,e,s,gg)){t1H.wxVkey=1
var b3H=_mz(z,'van-overlay',['bind:click',1,'customStyle',1,'duration',2,'show',3,'zIndex',4],[],e,s,gg)
_(t1H,b3H)
}
var e2H=_v()
_(r,e2H)
if(_oz(z,6,e,s,gg)){e2H.wxVkey=1
var o4H=_mz(z,'view',['bind:transitionend',7,'class',1,'style',2],[],e,s,gg)
var o6H=_n('slot')
_(o4H,o6H)
var x5H=_v()
_(o4H,x5H)
if(_oz(z,10,e,s,gg)){x5H.wxVkey=1
var f7H=_mz(z,'van-icon',['bind:tap',11,'class',1,'name',2],[],e,s,gg)
_(x5H,f7H)
}
x5H.wxXCkey=1
x5H.wxXCkey=3
_(e2H,o4H)
}
t1H.wxXCkey=1
t1H.wxXCkey=3
e2H.wxXCkey=1
e2H.wxXCkey=3
return r
}
e_[x[39]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var h9H=_v()
_(r,h9H)
if(_oz(z,0,e,s,gg)){h9H.wxVkey=1
}
h9H.wxXCkey=1
return r
}
e_[x[40]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var cAI=_n('slot')
_(r,cAI)
return r
}
e_[x[41]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var lCI=_n('view')
_rz(z,lCI,'class',0,e,s,gg)
var aDI=_v()
_(lCI,aDI)
if(_oz(z,1,e,s,gg)){aDI.wxVkey=1
var eFI=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
var bGI=_n('slot')
_(eFI,bGI)
_(aDI,eFI)
}
var oHI=_mz(z,'view',['bindtap',4,'class',1,'style',2],[],e,s,gg)
var xII=_v()
_(oHI,xII)
if(_oz(z,7,e,s,gg)){xII.wxVkey=1
var oJI=_n('slot')
_rz(z,oJI,'name',8,e,s,gg)
_(xII,oJI)
}
else{xII.wxVkey=2
var fKI=_mz(z,'van-icon',['class',9,'customClass',1,'customStyle',2,'name',3,'style',4],[],e,s,gg)
_(xII,fKI)
}
xII.wxXCkey=1
xII.wxXCkey=3
_(lCI,oHI)
var tEI=_v()
_(lCI,tEI)
if(_oz(z,14,e,s,gg)){tEI.wxVkey=1
var cLI=_mz(z,'view',['bindtap',15,'class',1],[],e,s,gg)
var hMI=_n('slot')
_(cLI,hMI)
_(tEI,cLI)
}
aDI.wxXCkey=1
tEI.wxXCkey=1
_(r,lCI)
return r
}
e_[x[42]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var cOI=_mz(z,'view',['bind:touchmove',0,'class',1],[],e,s,gg)
var oPI=_v()
_(cOI,oPI)
var lQI=function(tSI,aRI,eTI,gg){
var oVI=_mz(z,'view',['class',4,'style',1],[],tSI,aRI,gg)
var oXI=_mz(z,'van-icon',['bind:click',6,'class',1,'color',2,'customClass',3,'data-score',4,'name',5,'style',6],[],tSI,aRI,gg)
_(oVI,oXI)
var xWI=_v()
_(oVI,xWI)
if(_oz(z,13,tSI,aRI,gg)){xWI.wxVkey=1
var fYI=_mz(z,'van-icon',['bind:click',14,'class',1,'color',2,'customClass',3,'data-score',4,'name',5,'style',6],[],tSI,aRI,gg)
_(xWI,fYI)
}
xWI.wxXCkey=1
xWI.wxXCkey=3
_(eTI,oVI)
return eTI
}
oPI.wxXCkey=4
_2z(z,2,lQI,e,s,gg,oPI,'item','index','index')
_(r,cOI)
return r
}
e_[x[43]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var h1I=_n('slot')
_(r,h1I)
return r
}
e_[x[44]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var c3I=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var l5I=_n('view')
_rz(z,l5I,'class',2,e,s,gg)
var a6I=_v()
_(l5I,a6I)
if(_oz(z,3,e,s,gg)){a6I.wxVkey=1
}
else{a6I.wxVkey=2
var t7I=_n('slot')
_rz(z,t7I,'name',4,e,s,gg)
_(a6I,t7I)
}
var e8I=_mz(z,'van-field',['bind:blur',5,'bind:change',1,'bind:clear',2,'bind:confirm',3,'bind:focus',4,'border',5,'class',6,'clearable',7,'confirmType',8,'customStyle',9,'disabled',10,'error',11,'focus',12,'inputAlign',13,'inputClass',14,'leftIcon',15,'maxlength',16,'placeholder',17,'placeholderStyle',18,'readonly',19,'rightIcon',20,'type',21,'value',22],[],e,s,gg)
var b9I=_v()
_(e8I,b9I)
if(_oz(z,28,e,s,gg)){b9I.wxVkey=1
var xAJ=_mz(z,'slot',['name',29,'slot',1],[],e,s,gg)
_(b9I,xAJ)
}
var o0I=_v()
_(e8I,o0I)
if(_oz(z,31,e,s,gg)){o0I.wxVkey=1
var oBJ=_mz(z,'slot',['name',32,'slot',1],[],e,s,gg)
_(o0I,oBJ)
}
b9I.wxXCkey=1
o0I.wxXCkey=1
_(l5I,e8I)
a6I.wxXCkey=1
_(c3I,l5I)
var o4I=_v()
_(c3I,o4I)
if(_oz(z,34,e,s,gg)){o4I.wxVkey=1
var fCJ=_mz(z,'view',['class',35,'hoverClass',1,'hoverStayTime',2],[],e,s,gg)
var cDJ=_v()
_(fCJ,cDJ)
if(_oz(z,38,e,s,gg)){cDJ.wxVkey=1
var hEJ=_n('slot')
_rz(z,hEJ,'name',39,e,s,gg)
_(cDJ,hEJ)
}
else{cDJ.wxVkey=2
}
cDJ.wxXCkey=1
_(o4I,fCJ)
}
o4I.wxXCkey=1
_(r,c3I)
return r
}
e_[x[45]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var cGJ=_mz(z,'view',['bind:tap',0,'class',1,'hoverClass',1,'hoverStayTime',2],[],e,s,gg)
var oHJ=_v()
_(cGJ,oHJ)
if(_oz(z,4,e,s,gg)){oHJ.wxVkey=1
var lIJ=_mz(z,'van-info',['customStyle',5,'dot',1,'info',2],[],e,s,gg)
_(oHJ,lIJ)
}
oHJ.wxXCkey=1
oHJ.wxXCkey=3
_(r,cGJ)
return r
}
e_[x[46]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var tKJ=_n('slot')
_(r,tKJ)
return r
}
e_[x[47]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var bMJ=_v()
_(r,bMJ)
if(_oz(z,0,e,s,gg)){bMJ.wxVkey=1
var oNJ=_n('view')
_rz(z,oNJ,'class',1,e,s,gg)
var xOJ=_v()
_(oNJ,xOJ)
if(_oz(z,2,e,s,gg)){xOJ.wxVkey=1
}
var oPJ=_v()
_(oNJ,oPJ)
if(_oz(z,3,e,s,gg)){oPJ.wxVkey=1
}
xOJ.wxXCkey=1
oPJ.wxXCkey=1
_(bMJ,oNJ)
}
else{bMJ.wxVkey=2
var fQJ=_n('slot')
_(bMJ,fQJ)
}
bMJ.wxXCkey=1
return r
}
e_[x[48]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var hSJ=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var oTJ=_mz(z,'view',['bind:touchcancel',3,'bind:touchend',1,'bind:touchstart',2,'catch:touchmove',3,'class',4],[],e,s,gg)
var cUJ=_v()
_(oTJ,cUJ)
if(_oz(z,8,e,s,gg)){cUJ.wxVkey=1
var oVJ=_n('slot')
_rz(z,oVJ,'name',9,e,s,gg)
_(cUJ,oVJ)
}
else{cUJ.wxVkey=2
}
cUJ.wxXCkey=1
_(hSJ,oTJ)
_(r,hSJ)
return r
}
e_[x[49]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
var aXJ=_n('view')
_rz(z,aXJ,'class',0,e,s,gg)
var tYJ=_v()
_(aXJ,tYJ)
if(_oz(z,1,e,s,gg)){tYJ.wxVkey=1
}
var eZJ=_v()
_(aXJ,eZJ)
if(_oz(z,2,e,s,gg)){eZJ.wxVkey=1
}
tYJ.wxXCkey=1
eZJ.wxXCkey=1
_(r,aXJ)
return r
}
e_[x[50]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var o2J=_v()
_(r,o2J)
var x3J=function(f5J,o4J,c6J,gg){
var o8J=_mz(z,'view',['class',2,'style',1],[],f5J,o4J,gg)
var o0J=_n('view')
_rz(z,o0J,'class',4,f5J,o4J,gg)
var lAK=_v()
_(o0J,lAK)
if(_oz(z,5,f5J,o4J,gg)){lAK.wxVkey=1
var aBK=_v()
_(lAK,aBK)
if(_oz(z,6,f5J,o4J,gg)){aBK.wxVkey=1
var tCK=_mz(z,'van-icon',['color',7,'customClass',1,'name',2],[],f5J,o4J,gg)
_(aBK,tCK)
}
else{aBK.wxVkey=2
}
aBK.wxXCkey=1
aBK.wxXCkey=3
}
else{lAK.wxVkey=2
var eDK=_mz(z,'van-icon',['color',10,'customClass',1,'name',2],[],f5J,o4J,gg)
_(lAK,eDK)
}
lAK.wxXCkey=1
lAK.wxXCkey=3
lAK.wxXCkey=3
_(o8J,o0J)
var c9J=_v()
_(o8J,c9J)
if(_oz(z,13,f5J,o4J,gg)){c9J.wxVkey=1
}
c9J.wxXCkey=1
_(c6J,o8J)
return c6J
}
o2J.wxXCkey=4
_2z(z,0,x3J,e,s,gg,o2J,'item','index','index')
return r
}
e_[x[51]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var oFK=_n('slot')
_(r,oFK)
return r
}
e_[x[52]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
var oHK=_n('view')
_rz(z,oHK,'class',0,e,s,gg)
var fIK=_n('slot')
_rz(z,fIK,'name',1,e,s,gg)
_(oHK,fIK)
var cJK=_n('view')
_rz(z,cJK,'class',2,e,s,gg)
var hKK=_v()
_(cJK,hKK)
if(_oz(z,3,e,s,gg)){hKK.wxVkey=1
var cMK=_mz(z,'van-icon',['customClass',4,'name',1,'size',2],[],e,s,gg)
_(hKK,cMK)
}
var oLK=_v()
_(cJK,oLK)
if(_oz(z,7,e,s,gg)){oLK.wxVkey=1
}
var oNK=_n('slot')
_rz(z,oNK,'name',8,e,s,gg)
_(cJK,oNK)
hKK.wxXCkey=1
hKK.wxXCkey=3
oLK.wxXCkey=1
_(oHK,cJK)
var lOK=_n('view')
_rz(z,lOK,'class',9,e,s,gg)
var tQK=_n('slot')
_(lOK,tQK)
var aPK=_v()
_(lOK,aPK)
if(_oz(z,10,e,s,gg)){aPK.wxVkey=1
}
var eRK=_mz(z,'van-button',['round',-1,'bind:click',11,'class',1,'customClass',2,'customStyle',3,'disabled',4,'loading',5,'type',6],[],e,s,gg)
_(lOK,eRK)
aPK.wxXCkey=1
_(oHK,lOK)
_(r,oHK)
return r
}
e_[x[53]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
var oTK=_mz(z,'view',['bindtouchcancel',0,'bindtouchend',1,'bindtouchstart',1,'capture-bind:touchmove',2,'catchtap',3,'catchtouchmove',4,'class',5,'data-key',6],[],e,s,gg)
var xUK=_n('view')
_rz(z,xUK,'style',8,e,s,gg)
var oVK=_v()
_(xUK,oVK)
if(_oz(z,9,e,s,gg)){oVK.wxVkey=1
var cXK=_mz(z,'view',['catch:tap',10,'class',1,'data-key',2],[],e,s,gg)
var hYK=_n('slot')
_rz(z,hYK,'name',13,e,s,gg)
_(cXK,hYK)
_(oVK,cXK)
}
var oZK=_n('slot')
_(xUK,oZK)
var fWK=_v()
_(xUK,fWK)
if(_oz(z,14,e,s,gg)){fWK.wxVkey=1
var c1K=_mz(z,'view',['catch:tap',15,'class',1,'data-key',2],[],e,s,gg)
var o2K=_n('slot')
_rz(z,o2K,'name',18,e,s,gg)
_(c1K,o2K)
_(fWK,c1K)
}
oVK.wxXCkey=1
fWK.wxXCkey=1
_(oTK,xUK)
_(r,oTK)
return r
}
e_[x[54]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
var a4K=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var t5K=_v()
_(a4K,t5K)
if(_oz(z,3,e,s,gg)){t5K.wxVkey=1
var e6K=_mz(z,'van-loading',['color',4,'customClass',1],[],e,s,gg)
_(t5K,e6K)
}
t5K.wxXCkey=1
t5K.wxXCkey=3
_(r,a4K)
return r
}
e_[x[55]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
var o8K=_v()
_(r,o8K)
if(_oz(z,0,e,s,gg)){o8K.wxVkey=1
var x9K=_n('slot')
_(o8K,x9K)
}
o8K.wxXCkey=1
return r
}
e_[x[56]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
var fAL=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var cBL=_n('view')
_rz(z,cBL,'class',3,e,s,gg)
var hCL=_v()
_(cBL,hCL)
if(_oz(z,4,e,s,gg)){hCL.wxVkey=1
var oDL=_mz(z,'van-icon',['customClass',5,'name',1],[],e,s,gg)
_(hCL,oDL)
}
else{hCL.wxVkey=2
var cEL=_v()
_(hCL,cEL)
if(_oz(z,7,e,s,gg)){cEL.wxVkey=1
var oFL=_n('slot')
_rz(z,oFL,'name',8,e,s,gg)
_(cEL,oFL)
}
else{cEL.wxVkey=2
var lGL=_n('slot')
_rz(z,lGL,'name',9,e,s,gg)
_(cEL,lGL)
}
cEL.wxXCkey=1
}
var aHL=_mz(z,'van-info',['customClass',10,'dot',1,'info',2],[],e,s,gg)
_(cBL,aHL)
hCL.wxXCkey=1
hCL.wxXCkey=3
_(fAL,cBL)
var tIL=_n('slot')
_(fAL,tIL)
_(r,fAL)
return r
}
e_[x[57]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
var bKL=_n('slot')
_(r,bKL)
return r
}
e_[x[58]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[59]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
var xML=_n('view')
_rz(z,xML,'class',0,e,s,gg)
var oNL=_mz(z,'van-sticky',['bind:scroll',1,'container',1,'disabled',2,'offsetTop',3,'zIndex',4],[],e,s,gg)
var fOL=_n('view')
_rz(z,fOL,'class',6,e,s,gg)
var cPL=_n('slot')
_rz(z,cPL,'name',7,e,s,gg)
_(fOL,cPL)
var hQL=_n('view')
_rz(z,hQL,'class',8,e,s,gg)
var oRL=_v()
_(hQL,oRL)
if(_oz(z,9,e,s,gg)){oRL.wxVkey=1
}
var cSL=_v()
_(hQL,cSL)
var oTL=function(aVL,lUL,tWL,gg){
var bYL=_mz(z,'view',['bind:tap',12,'class',1,'data-index',2,'style',3],[],aVL,lUL,gg)
var oZL=_v()
_(bYL,oZL)
if(_oz(z,16,aVL,lUL,gg)){oZL.wxVkey=1
var x1L=_mz(z,'van-info',['customClass',17,'dot',1,'info',2],[],aVL,lUL,gg)
_(oZL,x1L)
}
oZL.wxXCkey=1
oZL.wxXCkey=3
_(tWL,bYL)
return tWL
}
cSL.wxXCkey=4
_2z(z,10,oTL,e,s,gg,cSL,'item','index','index')
oRL.wxXCkey=1
_(fOL,hQL)
var o2L=_n('slot')
_rz(z,o2L,'name',20,e,s,gg)
_(fOL,o2L)
_(oNL,fOL)
_(xML,oNL)
var f3L=_mz(z,'view',['bind:touchcancel',21,'bind:touchend',1,'bind:touchmove',2,'bind:touchstart',3,'class',4],[],e,s,gg)
var c4L=_n('slot')
_(f3L,c4L)
_(xML,f3L)
_(r,xML)
return r
}
e_[x[59]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m59=function(e,s,r,gg){
var z=gz$gwx_60()
var o6L=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var o8L=_n('slot')
_(o6L,o8L)
var c7L=_v()
_(o6L,c7L)
if(_oz(z,2,e,s,gg)){c7L.wxVkey=1
var l9L=_mz(z,'van-icon',['bind:click',3,'customClass',1,'name',2],[],e,s,gg)
_(c7L,l9L)
}
c7L.wxXCkey=1
c7L.wxXCkey=3
_(r,o6L)
return r
}
e_[x[60]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[61]]={}
var m60=function(e,s,r,gg){
var z=gz$gwx_61()
var tAM=_v()
_(r,tAM)
if(_oz(z,0,e,s,gg)){tAM.wxVkey=1
var eBM=_mz(z,'van-overlay',['customStyle',1,'show',1,'zIndex',2],[],e,s,gg)
_(tAM,eBM)
}
var bCM=_mz(z,'van-transition',['customClass',4,'customStyle',1,'show',2],[],e,s,gg)
var oDM=_mz(z,'view',['catch:touchmove',7,'class',1],[],e,s,gg)
var xEM=_v()
_(oDM,xEM)
if(_oz(z,9,e,s,gg)){xEM.wxVkey=1
}
else{xEM.wxVkey=2
var oFM=_v()
_(xEM,oFM)
if(_oz(z,10,e,s,gg)){oFM.wxVkey=1
var cHM=_mz(z,'van-loading',['color',11,'customClass',1,'type',2],[],e,s,gg)
_(oFM,cHM)
}
else{oFM.wxVkey=2
var hIM=_mz(z,'van-icon',['class',14,'name',1],[],e,s,gg)
_(oFM,hIM)
}
var fGM=_v()
_(xEM,fGM)
if(_oz(z,16,e,s,gg)){fGM.wxVkey=1
}
oFM.wxXCkey=1
oFM.wxXCkey=3
oFM.wxXCkey=3
fGM.wxXCkey=1
}
var oJM=_n('slot')
_(oDM,oJM)
xEM.wxXCkey=1
xEM.wxXCkey=3
_(bCM,oDM)
_(r,bCM)
tAM.wxXCkey=1
tAM.wxXCkey=3
return r
}
e_[x[61]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
var m61=function(e,s,r,gg){
var z=gz$gwx_62()
var oLM=_v()
_(r,oLM)
if(_oz(z,0,e,s,gg)){oLM.wxVkey=1
var lMM=_mz(z,'view',['bind:transitionend',1,'class',1,'style',2],[],e,s,gg)
var aNM=_n('slot')
_(lMM,aNM)
_(oLM,lMM)
}
oLM.wxXCkey=1
return r
}
e_[x[62]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
var m62=function(e,s,r,gg){
var z=gz$gwx_63()
var ePM=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var bQM=_mz(z,'van-sidebar',['activeKey',2,'bind:change',1,'customClass',2],[],e,s,gg)
var oRM=_v()
_(bQM,oRM)
var xSM=function(fUM,oTM,cVM,gg){
var oXM=_mz(z,'van-sidebar-item',['activeClass',7,'customClass',1,'disabled',2,'disabledClass',3,'title',4],[],fUM,oTM,gg)
_(cVM,oXM)
return cVM
}
oRM.wxXCkey=4
_2z(z,5,xSM,e,s,gg,oRM,'item','index','index')
_(ePM,bQM)
var cYM=_mz(z,'scroll-view',['scrollY',-1,'class',12],[],e,s,gg)
var oZM=_n('slot')
_rz(z,oZM,'name',13,e,s,gg)
_(cYM,oZM)
var l1M=_v()
_(cYM,l1M)
var a2M=function(e4M,t3M,b5M,gg){
var x7M=_mz(z,'view',['bind:tap',16,'class',1,'data-item',2],[],e4M,t3M,gg)
var o8M=_v()
_(x7M,o8M)
if(_oz(z,19,e4M,t3M,gg)){o8M.wxVkey=1
var f9M=_mz(z,'van-icon',['class',20,'name',1,'size',2],[],e4M,t3M,gg)
_(o8M,f9M)
}
o8M.wxXCkey=1
o8M.wxXCkey=3
_(b5M,x7M)
return b5M
}
l1M.wxXCkey=4
_2z(z,14,a2M,e,s,gg,l1M,'item','index','id')
_(ePM,cYM)
_(r,ePM)
return r
}
e_[x[63]]={f:m62,j:[],i:[],ti:[],ic:[]}
d_[x[64]]={}
var m63=function(e,s,r,gg){
var z=gz$gwx_64()
var hAN=_n('view')
_rz(z,hAN,'class',0,e,s,gg)
var cCN=_v()
_(hAN,cCN)
var oDN=function(aFN,lEN,tGN,gg){
var bIN=_v()
_(tGN,bIN)
if(_oz(z,3,aFN,lEN,gg)){bIN.wxVkey=1
var oJN=_n('view')
_rz(z,oJN,'class',4,aFN,lEN,gg)
var xKN=_v()
_(oJN,xKN)
if(_oz(z,5,aFN,lEN,gg)){xKN.wxVkey=1
}
else{xKN.wxVkey=2
var fMN=_mz(z,'van-icon',['class',6,'name',1],[],aFN,lEN,gg)
_(xKN,fMN)
}
var oLN=_v()
_(oJN,oLN)
if(_oz(z,8,aFN,lEN,gg)){oLN.wxVkey=1
var cNN=_mz(z,'van-icon',['bind:tap',9,'class',1,'data-index',2,'name',3],[],aFN,lEN,gg)
_(oLN,cNN)
}
xKN.wxXCkey=1
xKN.wxXCkey=3
oLN.wxXCkey=1
oLN.wxXCkey=3
_(bIN,oJN)
}
bIN.wxXCkey=1
bIN.wxXCkey=3
return tGN
}
cCN.wxXCkey=4
_2z(z,1,oDN,e,s,gg,cCN,'item','index','index')
var oBN=_v()
_(hAN,oBN)
if(_oz(z,13,e,s,gg)){oBN.wxVkey=1
var hON=_mz(z,'view',['bind:tap',14,'class',1],[],e,s,gg)
var oPN=_n('slot')
_(hON,oPN)
_(oBN,hON)
var cQN=_mz(z,'view',['bind:tap',16,'class',1,'style',2],[],e,s,gg)
var lSN=_mz(z,'van-icon',['class',19,'name',1],[],e,s,gg)
_(cQN,lSN)
var oRN=_v()
_(cQN,oRN)
if(_oz(z,21,e,s,gg)){oRN.wxVkey=1
}
oRN.wxXCkey=1
_(oBN,cQN)
}
oBN.wxXCkey=1
oBN.wxXCkey=3
_(r,hAN)
return r
}
e_[x[64]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[65]]={}
var m64=function(e,s,r,gg){
var z=gz$gwx_65()
return r
}
e_[x[65]]={f:m64,j:[],i:[],ti:[],ic:[]}
d_[x[66]]={}
var m65=function(e,s,r,gg){
var z=gz$gwx_66()
var eVN=_n('view')
_rz(z,eVN,'class',0,e,s,gg)
var bWN=_v()
_(eVN,bWN)
if(_oz(z,1,e,s,gg)){bWN.wxVkey=1
}
else{bWN.wxVkey=2
var oXN=_v()
_(bWN,oXN)
var xYN=function(f1N,oZN,c2N,gg){
var o4N=_mz(z,'view',['bindtap',4,'class',1,'data-index',2],[],f1N,oZN,gg)
var o6N=_mz(z,'van-icon',['customStyle',7,'name',1],[],f1N,oZN,gg)
_(o4N,o6N)
var l7N=_mz(z,'van-icon',['customStyle',9,'name',1],[],f1N,oZN,gg)
_(o4N,l7N)
var a8N=_n('view')
_rz(z,a8N,'class',11,f1N,oZN,gg)
var e0N=_mz(z,'van-icon',['customStyle',12,'name',1],[],f1N,oZN,gg)
_(a8N,e0N)
var t9N=_v()
_(a8N,t9N)
if(_oz(z,14,f1N,oZN,gg)){t9N.wxVkey=1
var bAO=_n('van-icon')
_rz(z,bAO,'name',15,f1N,oZN,gg)
_(t9N,bAO)
}
t9N.wxXCkey=1
t9N.wxXCkey=3
_(o4N,a8N)
var c5N=_v()
_(o4N,c5N)
if(_oz(z,16,f1N,oZN,gg)){c5N.wxVkey=1
var oBO=_mz(z,'shopDetail',['detail',17,'id',1,'type',2],[],f1N,oZN,gg)
_(c5N,oBO)
}
c5N.wxXCkey=1
c5N.wxXCkey=3
_(c2N,o4N)
return c2N
}
oXN.wxXCkey=4
_2z(z,2,xYN,e,s,gg,oXN,'item','index','index')
}
bWN.wxXCkey=1
bWN.wxXCkey=3
_(r,eVN)
return r
}
e_[x[66]]={f:m65,j:[],i:[],ti:[],ic:[]}
d_[x[67]]={}
var m66=function(e,s,r,gg){
var z=gz$gwx_67()
return r
}
e_[x[67]]={f:m66,j:[],i:[],ti:[],ic:[]}
d_[x[68]]={}
var m67=function(e,s,r,gg){
var z=gz$gwx_68()
var fEO=_n('view')
_rz(z,fEO,'class',0,e,s,gg)
var cFO=_n('view')
_rz(z,cFO,'class',1,e,s,gg)
var hGO=_n('gradientsLabel')
_rz(z,hGO,'label',2,e,s,gg)
_(cFO,hGO)
var oHO=_n('view')
_rz(z,oHO,'class',3,e,s,gg)
var cIO=_n('gradientsLabel')
_rz(z,cIO,'label',4,e,s,gg)
_(oHO,cIO)
var oJO=_mz(z,'gradientsLabel',['fontsize',5,'label',1],[],e,s,gg)
_(oHO,oJO)
_(cFO,oHO)
_(fEO,cFO)
var lKO=_v()
_(fEO,lKO)
var aLO=function(eNO,tMO,bOO,gg){
var xQO=_mz(z,'gradientsLabel',['fontsize',9,'label',1],[],eNO,tMO,gg)
_(bOO,xQO)
return bOO
}
lKO.wxXCkey=4
_2z(z,7,aLO,e,s,gg,lKO,'item','index','index')
var oRO=_n('view')
var fSO=_mz(z,'gradientsLabel',['fontsize',11,'label',1,'lineheight',2],[],e,s,gg)
_(oRO,fSO)
var cTO=_v()
_(oRO,cTO)
var hUO=function(cWO,oVO,oXO,gg){
var aZO=_mz(z,'gradientsLabel',['class',16,'label',1],[],cWO,oVO,gg)
_(oXO,aZO)
return oXO
}
cTO.wxXCkey=4
_2z(z,14,hUO,e,s,gg,cTO,'item','index','index')
_(fEO,oRO)
_(r,fEO)
return r
}
e_[x[68]]={f:m67,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m68=function(e,s,r,gg){
var z=gz$gwx_69()
return r
}
e_[x[69]]={f:m68,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
var m69=function(e,s,r,gg){
var z=gz$gwx_70()
var b3O=_v()
_(r,b3O)
if(_oz(z,0,e,s,gg)){b3O.wxVkey=1
}
b3O.wxXCkey=1
return r
}
e_[x[70]]={f:m69,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
var m70=function(e,s,r,gg){
var z=gz$gwx_71()
return r
}
e_[x[71]]={f:m70,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
var m71=function(e,s,r,gg){
var z=gz$gwx_72()
var o6O=_mz(z,'van-dialog',['useSlot',-1,'customStyle',0,'show',1,'showConfirmButton',1],[],e,s,gg)
var f7O=_v()
_(o6O,f7O)
if(_oz(z,3,e,s,gg)){f7O.wxVkey=1
}
f7O.wxXCkey=1
_(r,o6O)
return r
}
e_[x[72]]={f:m71,j:[],i:[],ti:[],ic:[]}
d_[x[73]]={}
var m72=function(e,s,r,gg){
var z=gz$gwx_73()
var h9O=_mz(z,'van-dialog',['useSlot',-1,'customStyle',0,'show',1,'showConfirmButton',1],[],e,s,gg)
var o0O=_n('form')
_rz(z,o0O,'bindsubmit',3,e,s,gg)
var cAP=_mz(z,'van-field',['clearable',-1,'bind:input',4,'border',1,'cursorSpacing',2,'customStyle',3,'inputClass',4,'maxlength',5,'name',6,'placeholder',7,'value',8],[],e,s,gg)
_(o0O,cAP)
var oBP=_mz(z,'van-field',['clearable',-1,'bind:input',13,'border',1,'cursorSpacing',2,'customStyle',3,'inputClass',4,'name',5,'placeholder',6,'value',7],[],e,s,gg)
_(o0O,oBP)
var lCP=_n('buyCode')
_(o0O,lCP)
_(h9O,o0O)
_(r,h9O)
return r
}
e_[x[73]]={f:m72,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
var m73=function(e,s,r,gg){
var z=gz$gwx_74()
var tEP=_mz(z,'van-dialog',['useSlot',-1,'customStyle',0,'show',1,'showConfirmButton',1],[],e,s,gg)
var eFP=_n('view')
_rz(z,eFP,'class',3,e,s,gg)
var bGP=_mz(z,'form',['bindsubmit',4,'hidden',1],[],e,s,gg)
var oHP=_mz(z,'van-field',['clearable',-1,'bind:input',6,'border',1,'cursorSpacing',2,'customStyle',3,'inputClass',4,'maxlength',5,'name',6,'placeholder',7,'value',8],[],e,s,gg)
_(bGP,oHP)
var xIP=_mz(z,'van-field',['clearable',-1,'bind:input',15,'border',1,'cursorSpacing',2,'customStyle',3,'inputClass',4,'maxlength',5,'name',6,'placeholder',7,'type',8,'value',9],[],e,s,gg)
_(bGP,xIP)
_(eFP,bGP)
var oJP=_mz(z,'form',['bindsubmit',25,'hidden',1],[],e,s,gg)
var fKP=_mz(z,'van-field',['clearable',-1,'bind:input',27,'border',1,'cursorSpacing',2,'customStyle',3,'inputClass',4,'maxlength',5,'name',6,'placeholder',7,'value',8],[],e,s,gg)
_(oJP,fKP)
var cLP=_mz(z,'van-field',['clearable',-1,'bind:input',36,'border',1,'cursorSpacing',2,'customStyle',3,'inputClass',4,'maxlength',5,'name',6,'placeholder',7,'type',8,'value',9],[],e,s,gg)
_(oJP,cLP)
var hMP=_mz(z,'van-field',['clearable',-1,'bind:input',46,'border',1,'cursorSpacing',2,'customStyle',3,'inputClass',4,'name',5,'placeholder',6,'value',7],[],e,s,gg)
_(oJP,hMP)
var oNP=_n('buyCode')
_(oJP,oNP)
var cOP=_mz(z,'van-field',['clearable',-1,'bind:input',54,'border',1,'cursorSpacing',2,'customStyle',3,'inputClass',4,'maxlength',5,'name',6,'placeholder',7,'type',8,'value',9],[],e,s,gg)
_(oJP,cOP)
var oPP=_mz(z,'van-field',['clearable',-1,'bind:input',64,'border',1,'cursorSpacing',2,'customStyle',3,'inputClass',4,'maxlength',5,'name',6,'placeholder',7,'value',8],[],e,s,gg)
_(oJP,oPP)
_(eFP,oJP)
_(tEP,eFP)
_(r,tEP)
var lQP=_n('van-notify')
_rz(z,lQP,'id',73,e,s,gg)
_(r,lQP)
return r
}
e_[x[74]]={f:m73,j:[],i:[],ti:[],ic:[]}
d_[x[75]]={}
var m74=function(e,s,r,gg){
var z=gz$gwx_75()
var tSP=_mz(z,'van-dialog',['useSlot',-1,'customStyle',0,'show',1,'showConfirmButton',1],[],e,s,gg)
_(r,tSP)
return r
}
e_[x[75]]={f:m74,j:[],i:[],ti:[],ic:[]}
d_[x[76]]={}
var m75=function(e,s,r,gg){
var z=gz$gwx_76()
var bUP=_n('van-icon')
_rz(z,bUP,'name',0,e,s,gg)
_(r,bUP)
return r
}
e_[x[76]]={f:m75,j:[],i:[],ti:[],ic:[]}
d_[x[77]]={}
var m76=function(e,s,r,gg){
var z=gz$gwx_77()
var xWP=_mz(z,'van-popup',['bind:close',0,'customStyle',1,'position',1,'show',2],[],e,s,gg)
var fYP=_n('view')
_rz(z,fYP,'class',4,e,s,gg)
var h1P=_mz(z,'radioGroup',['bind:radioChange',5,'radioOptions',1,'radioValue',2,'radioValueName',3],[],e,s,gg)
_(fYP,h1P)
var cZP=_v()
_(fYP,cZP)
if(_oz(z,9,e,s,gg)){cZP.wxVkey=1
var o2P=_mz(z,'radioGroup',['bind:radioChange',10,'radioOptions',1,'radioValue',2,'radioValueName',3],[],e,s,gg)
_(cZP,o2P)
}
cZP.wxXCkey=1
cZP.wxXCkey=3
_(xWP,fYP)
var oXP=_v()
_(xWP,oXP)
if(_oz(z,14,e,s,gg)){oXP.wxVkey=1
var c3P=_n('view')
_rz(z,c3P,'class',15,e,s,gg)
var l5P=_mz(z,'van-field',['clearable',-1,'bind:change',16,'bind:focus',1,'border',2,'cursorSpacing',3,'customStyle',4,'inputClass',5,'maxlength',6,'placeholder',7,'value',8],[],e,s,gg)
_(c3P,l5P)
var o4P=_v()
_(c3P,o4P)
if(_oz(z,25,e,s,gg)){o4P.wxVkey=1
}
o4P.wxXCkey=1
_(oXP,c3P)
}
var a6P=_mz(z,'radioGroup',['bind:radioChange',26,'radioOptions',1,'radioValue',2,'radioValueName',3],[],e,s,gg)
_(xWP,a6P)
oXP.wxXCkey=1
oXP.wxXCkey=3
_(r,xWP)
return r
}
e_[x[77]]={f:m76,j:[],i:[],ti:[],ic:[]}
d_[x[78]]={}
var m77=function(e,s,r,gg){
var z=gz$gwx_78()
var e8P=_mz(z,'van-radio-group',['bind:change',0,'value',1],[],e,s,gg)
var b9P=_v()
_(e8P,b9P)
var o0P=function(oBQ,xAQ,fCQ,gg){
var hEQ=_mz(z,'van-radio',['useIconSlot',-1,'name',4],[],oBQ,xAQ,gg)
_(fCQ,hEQ)
return fCQ
}
b9P.wxXCkey=4
_2z(z,2,o0P,e,s,gg,b9P,'item','index','index')
_(r,e8P)
return r
}
e_[x[78]]={f:m77,j:[],i:[],ti:[],ic:[]}
d_[x[79]]={}
var m78=function(e,s,r,gg){
var z=gz$gwx_79()
var cGQ=_mz(z,'van-dialog',['useSlot',-1,'customStyle',0,'show',1,'showConfirmButton',1],[],e,s,gg)
var oHQ=_n('form')
_rz(z,oHQ,'bindsubmit',3,e,s,gg)
var lIQ=_mz(z,'van-field',['clearable',-1,'bind:input',4,'border',1,'cursorSpacing',2,'customStyle',3,'inputClass',4,'name',5,'placeholder',6,'value',7],[],e,s,gg)
_(oHQ,lIQ)
var aJQ=_n('buyCode')
_(oHQ,aJQ)
_(cGQ,oHQ)
_(r,cGQ)
return r
}
e_[x[79]]={f:m78,j:[],i:[],ti:[],ic:[]}
d_[x[80]]={}
var m79=function(e,s,r,gg){
var z=gz$gwx_80()
var eLQ=_n('view')
_rz(z,eLQ,'class',0,e,s,gg)
var bMQ=_v()
_(eLQ,bMQ)
if(_oz(z,1,e,s,gg)){bMQ.wxVkey=1
var oNQ=_n('zhuangbeiDetail')
_rz(z,oNQ,'detail',2,e,s,gg)
_(bMQ,oNQ)
}
else if(_oz(z,3,e,s,gg)){bMQ.wxVkey=2
var xOQ=_n('yuanshenDetail')
_rz(z,xOQ,'detail',4,e,s,gg)
_(bMQ,xOQ)
}
else if(_oz(z,5,e,s,gg)){bMQ.wxVkey=3
var oPQ=_n('aoyiDetail')
_rz(z,oPQ,'detail',6,e,s,gg)
_(bMQ,oPQ)
}
else{bMQ.wxVkey=4
}
bMQ.wxXCkey=1
bMQ.wxXCkey=3
bMQ.wxXCkey=3
bMQ.wxXCkey=3
_(r,eLQ)
return r
}
e_[x[80]]={f:m79,j:[],i:[],ti:[],ic:[]}
d_[x[81]]={}
var m80=function(e,s,r,gg){
var z=gz$gwx_81()
var cRQ=_n('view')
_rz(z,cRQ,'class',0,e,s,gg)
var hSQ=_v()
_(cRQ,hSQ)
var oTQ=function(oVQ,cUQ,lWQ,gg){
var tYQ=_v()
_(lWQ,tYQ)
if(_oz(z,3,oVQ,cUQ,gg)){tYQ.wxVkey=1
}
tYQ.wxXCkey=1
return lWQ
}
hSQ.wxXCkey=2
_2z(z,1,oTQ,e,s,gg,hSQ,'item','index','index')
var eZQ=_v()
_(cRQ,eZQ)
var b1Q=function(x3Q,o2Q,o4Q,gg){
var c6Q=_v()
_(o4Q,c6Q)
if(_oz(z,6,x3Q,o2Q,gg)){c6Q.wxVkey=1
}
c6Q.wxXCkey=1
return o4Q
}
eZQ.wxXCkey=2
_2z(z,4,b1Q,e,s,gg,eZQ,'item','index','index')
_(r,cRQ)
return r
}
e_[x[81]]={f:m80,j:[],i:[],ti:[],ic:[]}
d_[x[82]]={}
var m81=function(e,s,r,gg){
var z=gz$gwx_82()
var o8Q=_n('view')
_rz(z,o8Q,'class',0,e,s,gg)
var o0Q=_n('view')
_rz(z,o0Q,'class',1,e,s,gg)
var lAR=_v()
_(o0Q,lAR)
if(_oz(z,2,e,s,gg)){lAR.wxVkey=1
}
var aBR=_v()
_(o0Q,aBR)
if(_oz(z,3,e,s,gg)){aBR.wxVkey=1
}
lAR.wxXCkey=1
aBR.wxXCkey=1
_(o8Q,o0Q)
var c9Q=_v()
_(o8Q,c9Q)
if(_oz(z,4,e,s,gg)){c9Q.wxVkey=1
var tCR=_v()
_(c9Q,tCR)
if(_oz(z,5,e,s,gg)){tCR.wxVkey=1
}
tCR.wxXCkey=1
}
var eDR=_n('view')
_rz(z,eDR,'class',6,e,s,gg)
var bER=_v()
_(eDR,bER)
if(_oz(z,7,e,s,gg)){bER.wxVkey=1
}
var oFR=_v()
_(eDR,oFR)
if(_oz(z,8,e,s,gg)){oFR.wxVkey=1
}
var xGR=_v()
_(eDR,xGR)
if(_oz(z,9,e,s,gg)){xGR.wxVkey=1
}
var oHR=_v()
_(eDR,oHR)
if(_oz(z,10,e,s,gg)){oHR.wxVkey=1
}
var fIR=_v()
_(eDR,fIR)
if(_oz(z,11,e,s,gg)){fIR.wxVkey=1
}
var cJR=_v()
_(eDR,cJR)
if(_oz(z,12,e,s,gg)){cJR.wxVkey=1
}
bER.wxXCkey=1
oFR.wxXCkey=1
xGR.wxXCkey=1
oHR.wxXCkey=1
fIR.wxXCkey=1
cJR.wxXCkey=1
_(o8Q,eDR)
c9Q.wxXCkey=1
_(r,o8Q)
return r
}
e_[x[82]]={f:m81,j:[],i:[],ti:[],ic:[]}
d_[x[83]]={}
var m82=function(e,s,r,gg){
var z=gz$gwx_83()
var oLR=_n('view')
_rz(z,oLR,'class',0,e,s,gg)
var cMR=_n('view')
_rz(z,cMR,'class',1,e,s,gg)
var lOR=_mz(z,'van-field',['clearable',-1,'bind:change',2,'bind:focus',1,'border',2,'cursorSpacing',3,'customStyle',4,'inputClass',5,'maxlength',6,'placeholder',7,'value',8],[],e,s,gg)
_(cMR,lOR)
var aPR=_mz(z,'popup',['bind:setSvipParams',11,'bind:showHistory',1,'id',2],[],e,s,gg)
_(cMR,aPR)
var oNR=_v()
_(cMR,oNR)
if(_oz(z,14,e,s,gg)){oNR.wxVkey=1
}
oNR.wxXCkey=1
_(oLR,cMR)
var tQR=_mz(z,'view',['bindtap',15,'class',1],[],e,s,gg)
var eRR=_mz(z,'van-tabs',['animated',-1,'swipeable',-1,'active',17,'bind:change',1,'navClass',2,'tabActiveClass',3,'tabClass',4],[],e,s,gg)
var bSR=_mz(z,'van-tab',['name',22,'title',1],[],e,s,gg)
var oTR=_n('view')
_rz(z,oTR,'class',24,e,s,gg)
var xUR=_v()
_(oTR,xUR)
if(_oz(z,25,e,s,gg)){xUR.wxVkey=1
}
else{xUR.wxVkey=2
var oVR=_v()
_(xUR,oVR)
var fWR=function(hYR,cXR,oZR,gg){
var o2R=_mz(z,'view',['bindtap',28,'class',1,'data-index',2],[],hYR,cXR,gg)
var a4R=_mz(z,'van-icon',['customStyle',31,'name',1],[],hYR,cXR,gg)
_(o2R,a4R)
var t5R=_n('view')
_rz(z,t5R,'class',33,hYR,cXR,gg)
var b7R=_mz(z,'van-icon',['customStyle',34,'name',1],[],hYR,cXR,gg)
_(t5R,b7R)
var e6R=_v()
_(t5R,e6R)
if(_oz(z,36,hYR,cXR,gg)){e6R.wxVkey=1
}
e6R.wxXCkey=1
_(o2R,t5R)
var o8R=_n('view')
_rz(z,o8R,'class',37,hYR,cXR,gg)
var o0R=_mz(z,'van-icon',['customStyle',38,'name',1],[],hYR,cXR,gg)
_(o8R,o0R)
var x9R=_v()
_(o8R,x9R)
if(_oz(z,40,hYR,cXR,gg)){x9R.wxVkey=1
var fAS=_n('van-icon')
_rz(z,fAS,'name',41,hYR,cXR,gg)
_(x9R,fAS)
}
x9R.wxXCkey=1
x9R.wxXCkey=3
_(o2R,o8R)
var l3R=_v()
_(o2R,l3R)
if(_oz(z,42,hYR,cXR,gg)){l3R.wxVkey=1
var cBS=_mz(z,'shopDetail',['detail',43,'id',1,'type',2],[],hYR,cXR,gg)
_(l3R,cBS)
}
l3R.wxXCkey=1
l3R.wxXCkey=3
_(oZR,o2R)
return oZR
}
oVR.wxXCkey=4
_2z(z,26,fWR,e,s,gg,oVR,'item','index','index')
}
xUR.wxXCkey=1
xUR.wxXCkey=3
_(bSR,oTR)
_(eRR,bSR)
var hCS=_mz(z,'van-tab',['name',46,'title',1],[],e,s,gg)
var oDS=_n('view')
_rz(z,oDS,'class',48,e,s,gg)
var cES=_v()
_(oDS,cES)
if(_oz(z,49,e,s,gg)){cES.wxVkey=1
}
else{cES.wxVkey=2
var oFS=_v()
_(cES,oFS)
var lGS=function(tIS,aHS,eJS,gg){
var oLS=_mz(z,'view',['bindtap',52,'class',1,'data-index',2],[],tIS,aHS,gg)
var oNS=_mz(z,'van-icon',['customStyle',55,'name',1],[],tIS,aHS,gg)
_(oLS,oNS)
var fOS=_mz(z,'van-icon',['customStyle',57,'name',1],[],tIS,aHS,gg)
_(oLS,fOS)
var cPS=_n('view')
_rz(z,cPS,'class',59,tIS,aHS,gg)
var oRS=_mz(z,'van-icon',['customStyle',60,'name',1],[],tIS,aHS,gg)
_(cPS,oRS)
var hQS=_v()
_(cPS,hQS)
if(_oz(z,62,tIS,aHS,gg)){hQS.wxVkey=1
var cSS=_n('van-icon')
_rz(z,cSS,'name',63,tIS,aHS,gg)
_(hQS,cSS)
}
hQS.wxXCkey=1
hQS.wxXCkey=3
_(oLS,cPS)
var xMS=_v()
_(oLS,xMS)
if(_oz(z,64,tIS,aHS,gg)){xMS.wxVkey=1
var oTS=_mz(z,'shopDetail',['detail',65,'id',1,'type',2],[],tIS,aHS,gg)
_(xMS,oTS)
}
xMS.wxXCkey=1
xMS.wxXCkey=3
_(eJS,oLS)
return eJS
}
oFS.wxXCkey=4
_2z(z,50,lGS,e,s,gg,oFS,'item','index','index')
}
cES.wxXCkey=1
cES.wxXCkey=3
_(hCS,oDS)
_(eRR,hCS)
var lUS=_mz(z,'van-tab',['name',68,'title',1],[],e,s,gg)
var aVS=_n('view')
_rz(z,aVS,'class',70,e,s,gg)
var tWS=_v()
_(aVS,tWS)
if(_oz(z,71,e,s,gg)){tWS.wxVkey=1
}
else{tWS.wxVkey=2
var eXS=_v()
_(tWS,eXS)
var bYS=function(x1S,oZS,o2S,gg){
var c4S=_mz(z,'view',['bindtap',74,'class',1,'data-index',2],[],x1S,oZS,gg)
var o6S=_mz(z,'van-icon',['customStyle',77,'name',1],[],x1S,oZS,gg)
_(c4S,o6S)
var c7S=_mz(z,'van-icon',['customStyle',79,'name',1],[],x1S,oZS,gg)
_(c4S,c7S)
var o8S=_n('view')
_rz(z,o8S,'class',81,x1S,oZS,gg)
var a0S=_mz(z,'van-icon',['customStyle',82,'name',1],[],x1S,oZS,gg)
_(o8S,a0S)
var l9S=_v()
_(o8S,l9S)
if(_oz(z,84,x1S,oZS,gg)){l9S.wxVkey=1
var tAT=_n('van-icon')
_rz(z,tAT,'name',85,x1S,oZS,gg)
_(l9S,tAT)
}
l9S.wxXCkey=1
l9S.wxXCkey=3
_(c4S,o8S)
var h5S=_v()
_(c4S,h5S)
if(_oz(z,86,x1S,oZS,gg)){h5S.wxVkey=1
var eBT=_mz(z,'shopDetail',['detail',87,'id',1,'type',2],[],x1S,oZS,gg)
_(h5S,eBT)
}
h5S.wxXCkey=1
h5S.wxXCkey=3
_(o2S,c4S)
return o2S
}
eXS.wxXCkey=4
_2z(z,72,bYS,e,s,gg,eXS,'item','index','index')
}
tWS.wxXCkey=1
tWS.wxXCkey=3
_(lUS,aVS)
_(eRR,lUS)
_(tQR,eRR)
_(oLR,tQR)
var bCT=_mz(z,'loginDialog',['bind:loginSuccess',90,'class',1,'id',2],[],e,s,gg)
_(oLR,bCT)
var oDT=_mz(z,'noticeDialog',['class',93,'id',1,'noticeMessage',2],[],e,s,gg)
_(oLR,oDT)
var xET=_mz(z,'historyDialog',['bind:clickTag',96,'class',1,'id',2],[],e,s,gg)
_(oLR,xET)
var oFT=_n('van-notify')
_rz(z,oFT,'id',99,e,s,gg)
_(oLR,oFT)
var fGT=_n('van-toast')
_rz(z,fGT,'id',100,e,s,gg)
_(oLR,fGT)
var cHT=_mz(z,'view',['bindtap',101,'class',1,'hidden',2],[],e,s,gg)
var hIT=_mz(z,'van-icon',['class',104,'name',1],[],e,s,gg)
_(cHT,hIT)
_(oLR,cHT)
_(r,oLR)
return r
}
e_[x[83]]={f:m82,j:[],i:[],ti:[],ic:[]}
d_[x[84]]={}
var m83=function(e,s,r,gg){
var z=gz$gwx_84()
return r
}
e_[x[84]]={f:m83,j:[],i:[],ti:[],ic:[]}
d_[x[85]]={}
var m84=function(e,s,r,gg){
var z=gz$gwx_85()
return r
}
e_[x[85]]={f:m84,j:[],i:[],ti:[],ic:[]}
d_[x[86]]={}
var m85=function(e,s,r,gg){
var z=gz$gwx_86()
var lMT=_n('view')
_rz(z,lMT,'class',0,e,s,gg)
var aNT=_n('noticeSwiper')
_(lMT,aNT)
var tOT=_n('banner')
_(lMT,tOT)
var ePT=_n('van-grid')
ePT.attr['square']=true
var bQT=_v()
_(ePT,bQT)
if(_oz(z,1,e,s,gg)){bQT.wxVkey=1
var oRT=_mz(z,'van-grid-item',['icon',2,'text',1,'url',2],[],e,s,gg)
_(bQT,oRT)
}
var xST=_mz(z,'van-grid-item',['icon',5,'text',1,'url',2],[],e,s,gg)
_(ePT,xST)
var oTT=_mz(z,'van-grid-item',['icon',8,'text',1,'url',2],[],e,s,gg)
_(ePT,oTT)
var fUT=_mz(z,'van-grid-item',['icon',11,'text',1,'url',2],[],e,s,gg)
_(ePT,fUT)
var cVT=_mz(z,'van-grid-item',['icon',14,'text',1,'url',2],[],e,s,gg)
_(ePT,cVT)
bQT.wxXCkey=1
bQT.wxXCkey=3
_(lMT,ePT)
var hWT=_n('van-toast')
_rz(z,hWT,'id',17,e,s,gg)
_(lMT,hWT)
_(r,lMT)
return r
}
e_[x[86]]={f:m85,j:[],i:[],ti:[],ic:[]}
d_[x[87]]={}
var m86=function(e,s,r,gg){
var z=gz$gwx_87()
var cYT=_n('view')
_rz(z,cYT,'class',0,e,s,gg)
var oZT=_n('van-toast')
_rz(z,oZT,'id',1,e,s,gg)
_(cYT,oZT)
var l1T=_mz(z,'van-dialog',['useSlot',-1,'show',2],[],e,s,gg)
_(cYT,l1T)
_(r,cYT)
return r
}
e_[x[87]]={f:m86,j:[],i:[],ti:[],ic:[]}
d_[x[88]]={}
var m87=function(e,s,r,gg){
var z=gz$gwx_88()
var t3T=_n('view')
_rz(z,t3T,'class',0,e,s,gg)
var e4T=_n('van-toast')
_rz(z,e4T,'id',1,e,s,gg)
_(t3T,e4T)
var b5T=_mz(z,'van-dialog',['useSlot',-1,'show',2],[],e,s,gg)
_(t3T,b5T)
_(r,t3T)
return r
}
e_[x[88]]={f:m87,j:[],i:[],ti:[],ic:[]}
d_[x[89]]={}
var m88=function(e,s,r,gg){
var z=gz$gwx_89()
var x7T=_n('view')
_rz(z,x7T,'class',0,e,s,gg)
var o8T=_n('van-toast')
_rz(z,o8T,'id',1,e,s,gg)
_(x7T,o8T)
var f9T=_mz(z,'van-dialog',['useSlot',-1,'show',2],[],e,s,gg)
_(x7T,f9T)
_(r,x7T)
return r
}
e_[x[89]]={f:m88,j:[],i:[],ti:[],ic:[]}
d_[x[90]]={}
var m89=function(e,s,r,gg){
var z=gz$gwx_90()
var hAU=_n('view')
_rz(z,hAU,'class',0,e,s,gg)
var oBU=_n('van-toast')
_rz(z,oBU,'id',1,e,s,gg)
_(hAU,oBU)
var cCU=_mz(z,'van-dialog',['useSlot',-1,'show',2],[],e,s,gg)
_(hAU,cCU)
_(r,hAU)
return r
}
e_[x[90]]={f:m89,j:[],i:[],ti:[],ic:[]}
d_[x[91]]={}
var m90=function(e,s,r,gg){
var z=gz$gwx_91()
return r
}
e_[x[91]]={f:m90,j:[],i:[],ti:[],ic:[]}
d_[x[92]]={}
var m91=function(e,s,r,gg){
var z=gz$gwx_92()
var aFU=_mz(z,'van-search',['bind:change',0,'placeholder',1],[],e,s,gg)
_(r,aFU)
return r
}
e_[x[92]]={f:m91,j:[],i:[],ti:[],ic:[]}
d_[x[93]]={}
var m92=function(e,s,r,gg){
var z=gz$gwx_93()
var eHU=_v()
_(r,eHU)
var bIU=function(xKU,oJU,oLU,gg){
var cNU=_mz(z,'van-cell',['isLink',-1,'title',2,'url',1],[],xKU,oJU,gg)
_(oLU,cNU)
return oLU
}
eHU.wxXCkey=4
_2z(z,0,bIU,e,s,gg,eHU,'item','index','this')
return r
}
e_[x[93]]={f:m92,j:[],i:[],ti:[],ic:[]}
d_[x[94]]={}
var m93=function(e,s,r,gg){
var z=gz$gwx_94()
var oPU=_n('view')
_rz(z,oPU,'class',0,e,s,gg)
var cQU=_n('van-toast')
_rz(z,cQU,'id',1,e,s,gg)
_(oPU,cQU)
var oRU=_mz(z,'van-dialog',['useSlot',-1,'show',2],[],e,s,gg)
_(oPU,oRU)
_(r,oPU)
return r
}
e_[x[94]]={f:m93,j:[],i:[],ti:[],ic:[]}
d_[x[95]]={}
var m94=function(e,s,r,gg){
var z=gz$gwx_95()
return r
}
e_[x[95]]={f:m94,j:[],i:[],ti:[],ic:[]}
d_[x[96]]={}
var m95=function(e,s,r,gg){
var z=gz$gwx_96()
var tUU=_n('view')
_rz(z,tUU,'class',0,e,s,gg)
var eVU=_n('van-toast')
_rz(z,eVU,'id',1,e,s,gg)
_(tUU,eVU)
var bWU=_mz(z,'van-dialog',['useSlot',-1,'show',2],[],e,s,gg)
_(tUU,bWU)
_(r,tUU)
return r
}
e_[x[96]]={f:m95,j:[],i:[],ti:[],ic:[]}
d_[x[97]]={}
var m96=function(e,s,r,gg){
var z=gz$gwx_97()
return r
}
e_[x[97]]={f:m96,j:[],i:[],ti:[],ic:[]}
d_[x[98]]={}
var m97=function(e,s,r,gg){
var z=gz$gwx_98()
return r
}
e_[x[98]]={f:m97,j:[],i:[],ti:[],ic:[]}
d_[x[99]]={}
var m98=function(e,s,r,gg){
var z=gz$gwx_99()
var f1U=_n('view')
_rz(z,f1U,'class',0,e,s,gg)
var c2U=_n('view')
_rz(z,c2U,'class',1,e,s,gg)
var h3U=_n('van-icon')
_rz(z,h3U,'name',2,e,s,gg)
_(c2U,h3U)
var o4U=_n('van-icon')
_rz(z,o4U,'name',3,e,s,gg)
_(c2U,o4U)
_(f1U,c2U)
var c5U=_mz(z,'van-dialog',['useSlot',-1,'show',4],[],e,s,gg)
_(f1U,c5U)
_(r,f1U)
return r
}
e_[x[99]]={f:m98,j:[],i:[],ti:[],ic:[]}
d_[x[100]]={}
var m99=function(e,s,r,gg){
var z=gz$gwx_100()
return r
}
e_[x[100]]={f:m99,j:[],i:[],ti:[],ic:[]}
d_[x[101]]={}
var m100=function(e,s,r,gg){
var z=gz$gwx_101()
return r
}
e_[x[101]]={f:m100,j:[],i:[],ti:[],ic:[]}
d_[x[102]]={}
var m101=function(e,s,r,gg){
var z=gz$gwx_102()
var t9U=_n('view')
_rz(z,t9U,'class',0,e,s,gg)
var e0U=_n('view')
_rz(z,e0U,'class',1,e,s,gg)
var bAV=_v()
_(e0U,bAV)
if(_oz(z,2,e,s,gg)){bAV.wxVkey=1
}
var oBV=_v()
_(e0U,oBV)
if(_oz(z,3,e,s,gg)){oBV.wxVkey=1
}
bAV.wxXCkey=1
oBV.wxXCkey=1
_(t9U,e0U)
var xCV=_mz(z,'loginDialog',['bind:loginSuccess',4,'bind:registerSuccess',1,'class',2,'id',3],[],e,s,gg)
_(t9U,xCV)
var oDV=_mz(z,'initRechargeDialog',['class',8,'id',1],[],e,s,gg)
_(t9U,oDV)
var fEV=_mz(z,'rechargeDialog',['bind:rechargeSuccess',10,'class',1,'id',2],[],e,s,gg)
_(t9U,fEV)
var cFV=_n('van-notify')
_rz(z,cFV,'id',13,e,s,gg)
_(t9U,cFV)
_(r,t9U)
return r
}
e_[x[102]]={f:m101,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['app.json'] = {"pages":["pages/index/index","pages/tools/tools","pages/userInfo/userInfo","pages/buyCode/buyCode","pages/app/app","pages/queryMap/queryMap","pages/components/buyCode/buyCode","pages/components/loginDialog/loginDialog","pages/components/historyDialog/historyDialog","pages/components/noticeSwiper/noticeSwiper","pages/components/shopDetail/shopDetail","pages/components/banner/banner","pages/components/popup/popup","pages/components/radioGroup/radioGroup","pages/toolsPage/type/type","pages/toolsPage/pianshu/pianshu","pages/toolsPage/tiku/tiku","pages/toolsPage/kangxing/wuzhi/wuzhi","pages/toolsPage/kangxing/renxing/renxing","pages/toolsPage/kangxing/kangxing/kangxing","pages/toolsPage/kangxing/kangxingwan/kangxingwan","pages/toolsPage/zhuangbei/sixiang/sixiang","pages/toolsPage/zhuangbei/gaizao/gaizao","pages/toolsPage/yuanshen/jingcui/jingcui","pages/toolsPage/yuanshen/chengzhang/chengzhang","pages/toolsPage/yuanshen/baicai/baicai","pages/toolsPage/zinv/tianfen/tianfen","pages/toolsPage/zinv/xingge/xingge","pages/toolsPage/zinv/chengben/chengben","pages/instructions/instructions","pages/boothDetail/boothDetail"],"tabBar":{"color":"#1f2f3d","selectedColor":"#04BE02","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"img/home.png","selectedIconPath":"img/homeSelected.png"},{"pagePath":"pages/tools/tools","text":"功能","iconPath":"img/tools.png","selectedIconPath":"img/toolsSelected.png"},{"pagePath":"pages/userInfo/userInfo","text":"我的","iconPath":"img/mine.png","selectedIconPath":"img/mineSelected.png"}]},"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"三国查询","navigationBarTextStyle":"black"},"sitemapLocation":"sitemap.json","usingComponents":{"van-button":"./miniprogram_npm/@vant/weapp/button/index","van-search":"./miniprogram_npm/@vant/weapp/search/index","van-dialog":"./miniprogram_npm/@vant/weapp/dialog/index","van-field":"./miniprogram_npm/@vant/weapp/field/index","van-icon":"./miniprogram_npm/@vant/weapp/icon/index","van-divider":"./miniprogram_npm/@vant/weapp/divider/index","van-tab":"./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"./miniprogram_npm/@vant/weapp/tabs/index","van-cell":"./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"./miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"./miniprogram_npm/@vant/weapp/sticky/index","van-notify":"./miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"./miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"./miniprogram_npm/@vant/weapp/popup/index","van-overlay":"./miniprogram_npm/@vant/weapp/overlay/index","van-tag":"./miniprogram_npm/@vant/weapp/tag/index","van-grid":"./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"./miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"./miniprogram_npm/@vant/weapp/toast/index","van-radio":"./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"./miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['app.wxml'] = [$gwx, './app.wxml'];else __wxAppCode__['app.wxml'] = $gwx( './app.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/action-sheet/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-popup":"../popup/index","van-loading":"../loading/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/action-sheet/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/action-sheet/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/action-sheet/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/action-sheet/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/area/index.json'] = {"component":true,"usingComponents":{"van-picker":"../picker/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/area/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/area/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/area/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/area/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/button/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-loading":"../loading/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/button/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/button/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/button/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/button/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/card/index.json'] = {"component":true,"usingComponents":{"van-tag":"../tag/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/card/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/card/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/card/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/card/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/cell-group/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/cell-group/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/cell-group/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/cell-group/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/cell-group/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/cell/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/cell/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/cell/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/cell/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/cell/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/checkbox-group/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/checkbox-group/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/checkbox-group/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/checkbox-group/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/checkbox-group/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/checkbox/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/checkbox/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/checkbox/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/checkbox/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/checkbox/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/circle/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/circle/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/circle/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/circle/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/circle/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/col/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/col/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/col/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/col/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/col/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/collapse-item/index.json'] = {"component":true,"usingComponents":{"van-cell":"../cell/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/collapse-item/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/collapse-item/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/collapse-item/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/collapse-item/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/collapse/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/collapse/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/collapse/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/collapse/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/collapse/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/count-down/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/count-down/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/count-down/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/datetime-picker/index.json'] = {"component":true,"usingComponents":{"van-picker":"../picker/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/datetime-picker/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/datetime-picker/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/datetime-picker/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/datetime-picker/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/dialog/index.json'] = {"component":true,"usingComponents":{"van-popup":"../popup/index","van-button":"../button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/dialog/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/dialog/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/dialog/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/dialog/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/divider/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/divider/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/divider/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/divider/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/divider/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/dropdown-item/index.json'] = {"component":true,"usingComponents":{"van-popup":"../popup/index","van-cell":"../cell/index","van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/dropdown-item/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/dropdown-item/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/dropdown-item/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/dropdown-item/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/dropdown-menu/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/dropdown-menu/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/field/index.json'] = {"component":true,"usingComponents":{"van-cell":"../cell/index","van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/field/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/field/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/field/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/field/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-button/index.json'] = {"component":true,"usingComponents":{"van-button":"../button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-button/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/goods-action-button/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-button/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/goods-action-button/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-icon/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"../button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-icon/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/goods-action-icon/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-icon/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/goods-action-icon/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/goods-action/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/goods-action/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/goods-action/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/grid-item/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/grid-item/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/grid-item/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/grid-item/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/grid-item/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/grid/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/grid/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/grid/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/grid/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/grid/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/icon/index.json'] = {"component":true,"usingComponents":{"van-info":"../info/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/icon/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/icon/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/icon/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/icon/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/image/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-loading":"../loading/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/image/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/image/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/image/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/image/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/index-anchor/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/index-anchor/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/index-anchor/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/index-anchor/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/index-anchor/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/index-bar/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/index-bar/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/index-bar/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/index-bar/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/index-bar/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/info/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/info/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/info/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/info/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/info/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/loading/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/loading/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/loading/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/loading/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/loading/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/nav-bar/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/nav-bar/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/nav-bar/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/nav-bar/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/nav-bar/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/notice-bar/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/notice-bar/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/notice-bar/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/notice-bar/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/notice-bar/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/notify/index.json'] = {"component":true,"usingComponents":{"van-transition":"../transition/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/notify/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/notify/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/notify/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/notify/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.json'] = {"component":true,"usingComponents":{"van-transition":"../transition/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/overlay/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/overlay/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/panel/index.json'] = {"component":true,"usingComponents":{"van-cell":"../cell/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/panel/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/panel/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/panel/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/panel/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/picker-column/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/picker-column/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/picker-column/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/picker-column/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/picker-column/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/picker/index.json'] = {"component":true,"usingComponents":{"picker-column":"../picker-column/index","loading":"../loading/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/picker/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/picker/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/picker/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/picker/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-overlay":"../overlay/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/popup/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/popup/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/progress/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/progress/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/progress/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/progress/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/progress/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/radio-group/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/radio-group/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/radio-group/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/radio-group/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/radio-group/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/radio/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/radio/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/radio/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/radio/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/radio/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/rate/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/rate/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/rate/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/rate/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/rate/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/row/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/row/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/row/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/row/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/row/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/search/index.json'] = {"component":true,"usingComponents":{"van-field":"../field/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/search/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/search/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/search/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/search/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/sidebar-item/index.json'] = {"component":true,"usingComponents":{"van-info":"../info/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/sidebar-item/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/sidebar-item/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/sidebar-item/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/sidebar-item/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/sidebar/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/sidebar/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/sidebar/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/sidebar/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/sidebar/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/skeleton/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/skeleton/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/skeleton/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/skeleton/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/skeleton/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/slider/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/slider/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/slider/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/slider/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/slider/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/stepper/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/stepper/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/stepper/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/stepper/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/stepper/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/steps/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/steps/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/steps/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/steps/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/steps/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/sticky/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/sticky/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/sticky/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/sticky/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/sticky/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/submit-bar/index.json'] = {"component":true,"usingComponents":{"van-button":"../button/index","van-icon":"../icon/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/submit-bar/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/submit-bar/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/submit-bar/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/submit-bar/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/swipe-cell/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/swipe-cell/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/swipe-cell/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/swipe-cell/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/swipe-cell/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/switch/index.json'] = {"component":true,"usingComponents":{"van-loading":"../loading/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/switch/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/switch/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/switch/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/switch/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/tab/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/tab/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/tab/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/tab/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/tab/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/tabbar-item/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-info":"../info/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/tabbar-item/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/tabbar-item/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/tabbar-item/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/tabbar-item/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/tabbar/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/tabbar/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/tabbar/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/tabbar/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/tabbar/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/tabs/index.json'] = {"component":true,"usingComponents":{"van-info":"../info/index","van-sticky":"../sticky/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/tabs/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/tabs/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/tabs/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/tabs/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/tag/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/tag/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/tag/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/tag/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/tag/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/toast/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-loading":"../loading/index","van-overlay":"../overlay/index","van-transition":"../transition/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/toast/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/toast/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/toast/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/toast/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/transition/index.json'] = {"component":true,"usingComponents":{"van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-icon":"/./miniprogram_npm/@vant/weapp/icon/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/transition/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/transition/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/transition/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/transition/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/tree-select/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-sidebar":"../sidebar/index","van-sidebar-item":"../sidebar-item/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/tree-select/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/tree-select/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/tree-select/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/tree-select/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/uploader/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-button":"/./miniprogram_npm/@vant/weapp/button/index","van-cell":"/./miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"/./miniprogram_npm/@vant/weapp/cell-group/index","van-dialog":"/./miniprogram_npm/@vant/weapp/dialog/index","van-divider":"/./miniprogram_npm/@vant/weapp/divider/index","van-field":"/./miniprogram_npm/@vant/weapp/field/index","van-grid":"/./miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"/./miniprogram_npm/@vant/weapp/grid-item/index","van-notice-bar":"/./miniprogram_npm/@vant/weapp/notice-bar/index","van-notify":"/./miniprogram_npm/@vant/weapp/notify/index","van-overlay":"/./miniprogram_npm/@vant/weapp/overlay/index","van-popup":"/./miniprogram_npm/@vant/weapp/popup/index","van-radio":"/./miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"/./miniprogram_npm/@vant/weapp/radio-group/index","van-search":"/./miniprogram_npm/@vant/weapp/search/index","van-sticky":"/./miniprogram_npm/@vant/weapp/sticky/index","van-tab":"/./miniprogram_npm/@vant/weapp/tab/index","van-tabs":"/./miniprogram_npm/@vant/weapp/tabs/index","van-tag":"/./miniprogram_npm/@vant/weapp/tag/index","van-toast":"/./miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/uploader/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/uploader/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/uploader/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/uploader/index.wxml' );
		__wxAppCode__['package-lock.json'] = {"name":"wxproject","version":"1.0.0","lockfileVersion":1,"requires":true,"dependencies":{"@vant/weapp":{"version":"1.0.7","resolved":"https://registry.npmjs.org/@vant/weapp/-/weapp-1.0.7.tgz","integrity":"sha512-F7gkcVKLTh4Pt17ukZnpZmn78CbtfmUtxSZif02ysyXZmqtAf1aAUffL3i1y+qzGWCXF4y/OVkOBVQVrKHI4MA\x3d\x3d"}}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package-lock.wxml'] = [$gwx, './package-lock.wxml'];else __wxAppCode__['package-lock.wxml'] = $gwx( './package-lock.wxml' );
		__wxAppCode__['package.json'] = {"name":"wxproject","version":"1.0.0","description":"","main":"app.js","scripts":{"test":"echo \"Error: no test specified\" \x26\x26 exit 1"},"author":"","license":"ISC","dependencies":{"@vant/weapp":"^1.0.7"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package.wxml'] = [$gwx, './package.wxml'];else __wxAppCode__['package.wxml'] = $gwx( './package.wxml' );
		__wxAppCode__['pages/app/app.json'] = {"usingComponents":{"van-button":"../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/app/app.wxml'] = [$gwx, './pages/app/app.wxml'];else __wxAppCode__['pages/app/app.wxml'] = $gwx( './pages/app/app.wxml' );
		__wxAppCode__['pages/boothDetail/boothDetail.json'] = {"usingComponents":{"shopDetail":"../components/shopDetail/shopDetail","van-button":"../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/boothDetail/boothDetail.wxml'] = [$gwx, './pages/boothDetail/boothDetail.wxml'];else __wxAppCode__['pages/boothDetail/boothDetail.wxml'] = $gwx( './pages/boothDetail/boothDetail.wxml' );
		__wxAppCode__['pages/buyCode/buyCode.json'] = {"usingComponents":{"van-button":"../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/buyCode/buyCode.wxml'] = [$gwx, './pages/buyCode/buyCode.wxml'];else __wxAppCode__['pages/buyCode/buyCode.wxml'] = $gwx( './pages/buyCode/buyCode.wxml' );
		__wxAppCode__['pages/components/aoyiDetail/aoyiDetail.json'] = {"component":true,"usingComponents":{"gradientsLabel":"../gradientsLabel/gradientsLabel","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/aoyiDetail/aoyiDetail.wxml'] = [$gwx, './pages/components/aoyiDetail/aoyiDetail.wxml'];else __wxAppCode__['pages/components/aoyiDetail/aoyiDetail.wxml'] = $gwx( './pages/components/aoyiDetail/aoyiDetail.wxml' );
		__wxAppCode__['pages/components/banner/banner.json'] = {"component":true,"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/banner/banner.wxml'] = [$gwx, './pages/components/banner/banner.wxml'];else __wxAppCode__['pages/components/banner/banner.wxml'] = $gwx( './pages/components/banner/banner.wxml' );
		__wxAppCode__['pages/components/buyCode/buyCode.json'] = {"component":true,"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/buyCode/buyCode.wxml'] = [$gwx, './pages/components/buyCode/buyCode.wxml'];else __wxAppCode__['pages/components/buyCode/buyCode.wxml'] = $gwx( './pages/components/buyCode/buyCode.wxml' );
		__wxAppCode__['pages/components/gradientsLabel/gradientsLabel.json'] = {"component":true,"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/gradientsLabel/gradientsLabel.wxml'] = [$gwx, './pages/components/gradientsLabel/gradientsLabel.wxml'];else __wxAppCode__['pages/components/gradientsLabel/gradientsLabel.wxml'] = $gwx( './pages/components/gradientsLabel/gradientsLabel.wxml' );
		__wxAppCode__['pages/components/historyDialog/historyDialog.json'] = {"component":true,"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/historyDialog/historyDialog.wxml'] = [$gwx, './pages/components/historyDialog/historyDialog.wxml'];else __wxAppCode__['pages/components/historyDialog/historyDialog.wxml'] = $gwx( './pages/components/historyDialog/historyDialog.wxml' );
		__wxAppCode__['pages/components/initRechargeDialog/initRechargeDialog.json'] = {"component":true,"usingComponents":{"buyCode":"../buyCode/buyCode","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/initRechargeDialog/initRechargeDialog.wxml'] = [$gwx, './pages/components/initRechargeDialog/initRechargeDialog.wxml'];else __wxAppCode__['pages/components/initRechargeDialog/initRechargeDialog.wxml'] = $gwx( './pages/components/initRechargeDialog/initRechargeDialog.wxml' );
		__wxAppCode__['pages/components/loginDialog/loginDialog.json'] = {"component":true,"usingComponents":{"buyCode":"../buyCode/buyCode","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/loginDialog/loginDialog.wxml'] = [$gwx, './pages/components/loginDialog/loginDialog.wxml'];else __wxAppCode__['pages/components/loginDialog/loginDialog.wxml'] = $gwx( './pages/components/loginDialog/loginDialog.wxml' );
		__wxAppCode__['pages/components/noticeDialog/noticeDialog.json'] = {"component":true,"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/noticeDialog/noticeDialog.wxml'] = [$gwx, './pages/components/noticeDialog/noticeDialog.wxml'];else __wxAppCode__['pages/components/noticeDialog/noticeDialog.wxml'] = $gwx( './pages/components/noticeDialog/noticeDialog.wxml' );
		__wxAppCode__['pages/components/noticeSwiper/noticeSwiper.json'] = {"component":true,"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/noticeSwiper/noticeSwiper.wxml'] = [$gwx, './pages/components/noticeSwiper/noticeSwiper.wxml'];else __wxAppCode__['pages/components/noticeSwiper/noticeSwiper.wxml'] = $gwx( './pages/components/noticeSwiper/noticeSwiper.wxml' );
		__wxAppCode__['pages/components/popup/popup.json'] = {"component":true,"usingComponents":{"radioGroup":"../radioGroup/radioGroup","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/popup/popup.wxml'] = [$gwx, './pages/components/popup/popup.wxml'];else __wxAppCode__['pages/components/popup/popup.wxml'] = $gwx( './pages/components/popup/popup.wxml' );
		__wxAppCode__['pages/components/radioGroup/radioGroup.json'] = {"component":true,"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/radioGroup/radioGroup.wxml'] = [$gwx, './pages/components/radioGroup/radioGroup.wxml'];else __wxAppCode__['pages/components/radioGroup/radioGroup.wxml'] = $gwx( './pages/components/radioGroup/radioGroup.wxml' );
		__wxAppCode__['pages/components/rechargeDialog/rechargeDialog.json'] = {"component":true,"usingComponents":{"buyCode":"../buyCode/buyCode","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/rechargeDialog/rechargeDialog.wxml'] = [$gwx, './pages/components/rechargeDialog/rechargeDialog.wxml'];else __wxAppCode__['pages/components/rechargeDialog/rechargeDialog.wxml'] = $gwx( './pages/components/rechargeDialog/rechargeDialog.wxml' );
		__wxAppCode__['pages/components/shopDetail/shopDetail.json'] = {"component":true,"usingComponents":{"zhuangbeiDetail":"../zhuangbeiDetail/zhuangbeiDetail","yuanshenDetail":"../yuanshenDetail/yuanshenDetail","aoyiDetail":"../aoyiDetail/aoyiDetail","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/shopDetail/shopDetail.wxml'] = [$gwx, './pages/components/shopDetail/shopDetail.wxml'];else __wxAppCode__['pages/components/shopDetail/shopDetail.wxml'] = $gwx( './pages/components/shopDetail/shopDetail.wxml' );
		__wxAppCode__['pages/components/yuanshenDetail/yuanshenDetail.json'] = {"component":true,"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/yuanshenDetail/yuanshenDetail.wxml'] = [$gwx, './pages/components/yuanshenDetail/yuanshenDetail.wxml'];else __wxAppCode__['pages/components/yuanshenDetail/yuanshenDetail.wxml'] = $gwx( './pages/components/yuanshenDetail/yuanshenDetail.wxml' );
		__wxAppCode__['pages/components/zhuangbeiDetail/zhuangbeiDetail.json'] = {"component":true,"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/components/zhuangbeiDetail/zhuangbeiDetail.wxml'] = [$gwx, './pages/components/zhuangbeiDetail/zhuangbeiDetail.wxml'];else __wxAppCode__['pages/components/zhuangbeiDetail/zhuangbeiDetail.wxml'] = $gwx( './pages/components/zhuangbeiDetail/zhuangbeiDetail.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"usingComponents":{"loginDialog":"../components/loginDialog/loginDialog","historyDialog":"../components/historyDialog/historyDialog","noticeSwiper":"../components/noticeSwiper/noticeSwiper","shopDetail":"../components/shopDetail/shopDetail","popup":"../components/popup/popup","noticeDialog":"../components/noticeDialog/noticeDialog","van-button":"../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/instructions/instructions.json'] = {"usingComponents":{"van-button":"../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/instructions/instructions.wxml'] = [$gwx, './pages/instructions/instructions.wxml'];else __wxAppCode__['pages/instructions/instructions.wxml'] = $gwx( './pages/instructions/instructions.wxml' );
		__wxAppCode__['pages/queryMap/queryMap.json'] = {"usingComponents":{"van-button":"../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/queryMap/queryMap.wxml'] = [$gwx, './pages/queryMap/queryMap.wxml'];else __wxAppCode__['pages/queryMap/queryMap.wxml'] = $gwx( './pages/queryMap/queryMap.wxml' );
		__wxAppCode__['pages/tools/tools.json'] = {"usingComponents":{"noticeSwiper":"../components/noticeSwiper/noticeSwiper","banner":"../components/banner/banner","van-button":"../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/tools/tools.wxml'] = [$gwx, './pages/tools/tools.wxml'];else __wxAppCode__['pages/tools/tools.wxml'] = $gwx( './pages/tools/tools.wxml' );
		__wxAppCode__['pages/toolsPage/kangxing/kangxing/kangxing.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"},"navigationBarTitleText":"抗性表"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/kangxing/kangxing/kangxing.wxml'] = [$gwx, './pages/toolsPage/kangxing/kangxing/kangxing.wxml'];else __wxAppCode__['pages/toolsPage/kangxing/kangxing/kangxing.wxml'] = $gwx( './pages/toolsPage/kangxing/kangxing/kangxing.wxml' );
		__wxAppCode__['pages/toolsPage/kangxing/kangxingwan/kangxingwan.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"},"navigationBarTitleText":"抗性表（抗性丸）"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/kangxing/kangxingwan/kangxingwan.wxml'] = [$gwx, './pages/toolsPage/kangxing/kangxingwan/kangxingwan.wxml'];else __wxAppCode__['pages/toolsPage/kangxing/kangxingwan/kangxingwan.wxml'] = $gwx( './pages/toolsPage/kangxing/kangxingwan/kangxingwan.wxml' );
		__wxAppCode__['pages/toolsPage/kangxing/renxing/renxing.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"},"navigationBarTitleText":"韧性表"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/kangxing/renxing/renxing.wxml'] = [$gwx, './pages/toolsPage/kangxing/renxing/renxing.wxml'];else __wxAppCode__['pages/toolsPage/kangxing/renxing/renxing.wxml'] = $gwx( './pages/toolsPage/kangxing/renxing/renxing.wxml' );
		__wxAppCode__['pages/toolsPage/kangxing/wuzhi/wuzhi.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"},"navigationBarTitleText":"武/智表"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/kangxing/wuzhi/wuzhi.wxml'] = [$gwx, './pages/toolsPage/kangxing/wuzhi/wuzhi.wxml'];else __wxAppCode__['pages/toolsPage/kangxing/wuzhi/wuzhi.wxml'] = $gwx( './pages/toolsPage/kangxing/wuzhi/wuzhi.wxml' );
		__wxAppCode__['pages/toolsPage/pianshu/pianshu.json'] = {"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/pianshu/pianshu.wxml'] = [$gwx, './pages/toolsPage/pianshu/pianshu.wxml'];else __wxAppCode__['pages/toolsPage/pianshu/pianshu.wxml'] = $gwx( './pages/toolsPage/pianshu/pianshu.wxml' );
		__wxAppCode__['pages/toolsPage/tiku/tiku.json'] = {"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/tiku/tiku.wxml'] = [$gwx, './pages/toolsPage/tiku/tiku.wxml'];else __wxAppCode__['pages/toolsPage/tiku/tiku.wxml'] = $gwx( './pages/toolsPage/tiku/tiku.wxml' );
		__wxAppCode__['pages/toolsPage/type/type.json'] = {"usingComponents":{"van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/type/type.wxml'] = [$gwx, './pages/toolsPage/type/type.wxml'];else __wxAppCode__['pages/toolsPage/type/type.wxml'] = $gwx( './pages/toolsPage/type/type.wxml' );
		__wxAppCode__['pages/toolsPage/yuanshen/baicai/baicai.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"},"navigationBarTitleText":"白菜计算器"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/yuanshen/baicai/baicai.wxml'] = [$gwx, './pages/toolsPage/yuanshen/baicai/baicai.wxml'];else __wxAppCode__['pages/toolsPage/yuanshen/baicai/baicai.wxml'] = $gwx( './pages/toolsPage/yuanshen/baicai/baicai.wxml' );
		__wxAppCode__['pages/toolsPage/yuanshen/chengzhang/chengzhang.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"},"navigationBarTitleText":"元神成长值范围"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/yuanshen/chengzhang/chengzhang.wxml'] = [$gwx, './pages/toolsPage/yuanshen/chengzhang/chengzhang.wxml'];else __wxAppCode__['pages/toolsPage/yuanshen/chengzhang/chengzhang.wxml'] = $gwx( './pages/toolsPage/yuanshen/chengzhang/chengzhang.wxml' );
		__wxAppCode__['pages/toolsPage/yuanshen/jingcui/jingcui.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"},"navigationBarTitleText":"精粹计算器"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/yuanshen/jingcui/jingcui.wxml'] = [$gwx, './pages/toolsPage/yuanshen/jingcui/jingcui.wxml'];else __wxAppCode__['pages/toolsPage/yuanshen/jingcui/jingcui.wxml'] = $gwx( './pages/toolsPage/yuanshen/jingcui/jingcui.wxml' );
		__wxAppCode__['pages/toolsPage/zhuangbei/gaizao/gaizao.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"},"navigationBarTitleText":"品质改造"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/zhuangbei/gaizao/gaizao.wxml'] = [$gwx, './pages/toolsPage/zhuangbei/gaizao/gaizao.wxml'];else __wxAppCode__['pages/toolsPage/zhuangbei/gaizao/gaizao.wxml'] = $gwx( './pages/toolsPage/zhuangbei/gaizao/gaizao.wxml' );
		__wxAppCode__['pages/toolsPage/zhuangbei/sixiang/sixiang.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"},"navigationBarTitleText":"四象激活"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/zhuangbei/sixiang/sixiang.wxml'] = [$gwx, './pages/toolsPage/zhuangbei/sixiang/sixiang.wxml'];else __wxAppCode__['pages/toolsPage/zhuangbei/sixiang/sixiang.wxml'] = $gwx( './pages/toolsPage/zhuangbei/sixiang/sixiang.wxml' );
		__wxAppCode__['pages/toolsPage/zinv/chengben/chengben.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"},"navigationBarTitleText":"子女成本计算器"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/zinv/chengben/chengben.wxml'] = [$gwx, './pages/toolsPage/zinv/chengben/chengben.wxml'];else __wxAppCode__['pages/toolsPage/zinv/chengben/chengben.wxml'] = $gwx( './pages/toolsPage/zinv/chengben/chengben.wxml' );
		__wxAppCode__['pages/toolsPage/zinv/tianfen/tianfen.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/zinv/tianfen/tianfen.wxml'] = [$gwx, './pages/toolsPage/zinv/tianfen/tianfen.wxml'];else __wxAppCode__['pages/toolsPage/zinv/tianfen/tianfen.wxml'] = $gwx( './pages/toolsPage/zinv/tianfen/tianfen.wxml' );
		__wxAppCode__['pages/toolsPage/zinv/xingge/xingge.json'] = {"usingComponents":{"van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/toolsPage/zinv/xingge/xingge.wxml'] = [$gwx, './pages/toolsPage/zinv/xingge/xingge.wxml'];else __wxAppCode__['pages/toolsPage/zinv/xingge/xingge.wxml'] = $gwx( './pages/toolsPage/zinv/xingge/xingge.wxml' );
		__wxAppCode__['pages/userInfo/userInfo.json'] = {"usingComponents":{"loginDialog":"../components/loginDialog/loginDialog","initRechargeDialog":"../components/initRechargeDialog/initRechargeDialog","rechargeDialog":"../components/rechargeDialog/rechargeDialog","noticeSwiper":"../components/noticeSwiper/noticeSwiper","van-button":"../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../miniprogram_npm/@vant/weapp/dialog/index","van-field":"../../miniprogram_npm/@vant/weapp/field/index","van-icon":"../../miniprogram_npm/@vant/weapp/icon/index","van-divider":"../../miniprogram_npm/@vant/weapp/divider/index","van-tab":"../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../miniprogram_npm/@vant/weapp/tabs/index","van-cell":"../../miniprogram_npm/@vant/weapp/cell/index","van-cell-group":"../../miniprogram_npm/@vant/weapp/cell-group/index","van-sticky":"../../miniprogram_npm/@vant/weapp/sticky/index","van-notify":"../../miniprogram_npm/@vant/weapp/notify/index","van-notice-bar":"../../miniprogram_npm/@vant/weapp/notice-bar/index","van-popup":"../../miniprogram_npm/@vant/weapp/popup/index","van-overlay":"../../miniprogram_npm/@vant/weapp/overlay/index","van-tag":"../../miniprogram_npm/@vant/weapp/tag/index","van-grid":"../../miniprogram_npm/@vant/weapp/grid/index","van-grid-item":"../../miniprogram_npm/@vant/weapp/grid-item/index","van-toast":"../../miniprogram_npm/@vant/weapp/toast/index","van-radio":"../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/userInfo/userInfo.wxml'] = [$gwx, './pages/userInfo/userInfo.wxml'];else __wxAppCode__['pages/userInfo/userInfo.wxml'] = $gwx( './pages/userInfo/userInfo.wxml' );
		__wxAppCode__['project.config.json'] = {"miniprogramRoot":"","__compileDebugInfo__":{"from":"ci","useNewCompileModule":true,"devtoolsVersion":"0","compileSetting":{"es6":true,"minify":true,"autoPrefixWXSS":true},"ciVersion":"1.0.34"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['project.config.wxml'] = [$gwx, './project.config.wxml'];else __wxAppCode__['project.config.wxml'] = $gwx( './project.config.wxml' );
		__wxAppCode__['sitemap.json'] = {"desc":"关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html","rules":[{"action":"allow","page":"*"}]};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sitemap.wxml'] = [$gwx, './sitemap.wxml'];else __wxAppCode__['sitemap.wxml'] = $gwx( './sitemap.wxml' );
	
	define("miniprogram_npm/@vant/weapp/common/color.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RED="#ee0a24",exports.BLUE="#1989fa",exports.WHITE="#fff",exports.GREEN="#07c160",exports.ORANGE="#ff976a",exports.GRAY="#323233",exports.GRAY_DARK="#969799"; 
 			}); 
		define("miniprogram_npm/@vant/weapp/common/component.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n,i){Object.keys(i).forEach(function(t){e[t]&&(n[i[t]]=e[t])})}function n(e,n,i){var s,d=i.type,a=i.name,r=i.linked,o=i.unlinked,l=i.linkChanged,h=n.beforeCreate,c=n.destroyed;"descendant"===d&&(e.created=function(){h&&h.bind(this)(),this.children=this.children||[]},e.detached=function(){this.children=[],c&&c.bind(this)()}),e.relations=Object.assign(e.relations||{},(s={},s["../"+a+"/index"]={type:d,linked:function(e){t[d].linked.bind(this)(e),r&&r.bind(this)(e)},linkChanged:function(e){l&&l.bind(this)(e)},unlinked:function(e){t[d].unlinked.bind(this)(e),o&&o.bind(this)(e)}},s))}Object.defineProperty(exports,"__esModule",{value:!0});var i=require("../mixins/basic"),t={ancestor:{linked:function(e){this.parent=e},unlinked:function(){this.parent=null}},descendant:{linked:function(e){this.children=this.children||[],this.children.push(e)},unlinked:function(e){this.children=(this.children||[]).filter(function(n){return n!==e})}}};exports.VantComponent=function(t){void 0===t&&(t={});var s={};e(t,s,{data:"data",props:"properties",mixins:"behaviors",methods:"methods",beforeCreate:"created",created:"attached",mounted:"ready",relations:"relations",destroyed:"detached",classes:"externalClasses"});var d=t.relation;d&&n(s,t,d),s.externalClasses=s.externalClasses||[],s.externalClasses.push("custom-class"),s.behaviors=s.behaviors||[],s.behaviors.push(i.basic),t.field&&s.behaviors.push("wx://form-field"),s.options={multipleSlots:!0,addGlobalClass:!0},Component(s)}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/common/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return void 0!==t&&null!==t}function n(t){return/^\d+(\.\d+)?$/.test(t)}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.isDef=t,exports.isObj=function(t){var n=void 0===t?"undefined":e(t);return null!==t&&("object"===n||"function"===n)},exports.isNumber=n,exports.range=function(t,n,e){return Math.min(Math.max(t,n),e)},exports.nextTick=function(t){setTimeout(function(){t()},1e3/30)};var o=null;exports.getSystemInfoSync=function(){return null==o&&(o=wx.getSystemInfoSync()),o},exports.addUnit=function(e){if(t(e))return e=String(e),n(e)?e+"px":e}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/count-down/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,r){void 0===r&&(r=2);for(var o=e+"";o.length<r;)o="0"+o;return o}Object.defineProperty(exports,"__esModule",{value:!0});var r=1e3,o=60*r,s=60*o,t=24*s;exports.parseTimeData=function(e){return{days:Math.floor(e/t),hours:Math.floor(e%t/s),minutes:Math.floor(e%s/o),seconds:Math.floor(e%o/r),milliseconds:Math.floor(e%r)}},exports.parseFormat=function(r,o){var s=o.days,t=o.hours,n=o.minutes,a=o.seconds,i=o.milliseconds;return-1===r.indexOf("DD")?t+=24*s:r=r.replace("DD",e(s)),-1===r.indexOf("HH")?n+=60*t:r=r.replace("HH",e(t)),-1===r.indexOf("mm")?a+=60*n:r=r.replace("mm",e(n)),-1===r.indexOf("ss")?i+=1e3*a:r=r.replace("ss",e(a)),r.replace("SSS",e(i,3))},exports.isSameSecond=function(e,r){return Math.floor(e/1e3)===Math.floor(r/1e3)}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/definitions/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}); 
 			}); 
		define("miniprogram_npm/@vant/weapp/definitions/weapp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}); 
 			}); 
		define("miniprogram_npm/@vant/weapp/dialog/dialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(){var t=getCurrentPages();return t[t.length-1]}var e=function(){return(e=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var n=[],o=function o(r){return r=e(e({},o.currentOptions),r),new Promise(function(o,s){var c=(r.context||t()).selectComponent(r.selector);delete r.context,delete r.selector,c?(c.setData(e({onCancel:s,onConfirm:o},r)),n.push(c)):console.warn("未找到 van-dialog 节点，请确认 selector 及 context 是否正确")})};o.defaultOptions={show:!0,title:"",width:null,message:"",zIndex:100,overlay:!0,selector:"#van-dialog",className:"",asyncClose:!1,transition:"scale",customStyle:"",messageAlign:"",overlayStyle:"",confirmButtonText:"确认",cancelButtonText:"取消",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,confirmButtonOpenType:""},o.alert=o,o.confirm=function(t){return o(e({showCancelButton:!0},t))},o.close=function(){n.forEach(function(t){t.close()}),n=[]},o.stopLoading=function(){n.forEach(function(t){t.stopLoading()})},o.setDefaultOptions=function(t){Object.assign(o.currentOptions,t)},o.resetDefaultOptions=function(){o.currentOptions=e({},o.defaultOptions)},o.resetDefaultOptions(),exports.default=o; 
 			}); 
		define("miniprogram_npm/@vant/weapp/mixins/basic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.basic=Behavior({methods:{$emit:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.triggerEvent.apply(this,e)},set:function(e,t){return this.setData(e,t),new Promise(function(e){return wx.nextTick(e)})},getRect:function(e,t){var n=this;return new Promise(function(r){wx.createSelectorQuery().in(n)[t?"selectAll":"select"](e).boundingClientRect(function(e){t&&Array.isArray(e)&&e.length&&r(e),!t&&e&&r(e)}).exec()})}}}); 
 			}); 
		define("miniprogram_npm/@vant/weapp/mixins/button.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.button=Behavior({externalClasses:["hover-class"],properties:{id:String,lang:{type:String,value:"en"},businessId:Number,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,ariaLabel:String}}); 
 			}); 
		define("miniprogram_npm/@vant/weapp/mixins/link.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.link=Behavior({properties:{url:String,linkType:{type:String,value:"navigateTo"}},methods:{jumpLink:function(e){void 0===e&&(e="url");var t=this.data[e];t&&wx[this.data.linkType]({url:t})}}}); 
 			}); 
		define("miniprogram_npm/@vant/weapp/mixins/open-type.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openType=Behavior({properties:{openType:String},methods:{bindGetUserInfo:function(e){this.$emit("getuserinfo",e.detail)},bindContact:function(e){this.$emit("contact",e.detail)},bindGetPhoneNumber:function(e){this.$emit("getphonenumber",e.detail)},bindError:function(e){this.$emit("error",e.detail)},bindLaunchApp:function(e){this.$emit("launchapp",e.detail)},bindOpenSetting:function(e){this.$emit("opensetting",e.detail)}}}); 
 			}); 
		define("miniprogram_npm/@vant/weapp/mixins/touch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){return t>e&&t>s?"horizontal":e>t&&e>s?"vertical":""}Object.defineProperty(exports,"__esModule",{value:!0});var s=10;exports.touch=Behavior({methods:{resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},touchStart:function(t){this.resetTouchStatus();var s=t.touches[0];this.startX=s.clientX,this.startY=s.clientY},touchMove:function(s){var e=s.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||t(this.offsetX,this.offsetY)}}}); 
 			}); 
		define("miniprogram_npm/@vant/weapp/mixins/transition.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/utils"),t=function(e){return{enter:"van-"+e+"-enter van-"+e+"-enter-active enter-class enter-active-class","enter-to":"van-"+e+"-enter-to van-"+e+"-enter-active enter-to-class enter-active-class",leave:"van-"+e+"-leave van-"+e+"-leave-active leave-class leave-active-class","leave-to":"van-"+e+"-leave-to van-"+e+"-leave-active leave-to-class leave-active-class"}},n=function(){return new Promise(function(e){return setTimeout(e,1e3/30)})};exports.transition=function(a){return Behavior({properties:{customStyle:String,show:{type:Boolean,value:a,observer:"observeShow"},duration:{type:null,value:300,observer:"observeDuration"},name:{type:String,value:"fade"}},data:{type:"",inited:!1,display:!1},methods:{observeShow:function(e,t){e!==t&&(e?this.enter():this.leave())},enter:function(){var a=this,s=this.data,i=s.duration,r=s.name,o=t(r),c=e.isObj(i)?i.enter:i;this.status="enter",this.$emit("before-enter"),Promise.resolve().then(n).then(function(){a.checkStatus("enter"),a.$emit("enter"),a.setData({inited:!0,display:!0,classes:o.enter,currentDuration:c})}).then(n).then(function(){a.checkStatus("enter"),a.transitionEnded=!1,a.setData({classes:o["enter-to"]})}).catch(function(){})},leave:function(){var a=this;if(this.data.display){var s=this.data,i=s.duration,r=s.name,o=t(r),c=e.isObj(i)?i.leave:i;this.status="leave",this.$emit("before-leave"),Promise.resolve().then(n).then(function(){a.checkStatus("leave"),a.$emit("leave"),a.setData({classes:o.leave,currentDuration:c})}).then(n).then(function(){a.checkStatus("leave"),a.transitionEnded=!1,setTimeout(function(){return a.onTransitionEnd()},c),a.setData({classes:o["leave-to"]})}).catch(function(){})}},checkStatus:function(e){if(e!==this.status)throw new Error("incongruent status: "+e)},onTransitionEnd:function(){if(!this.transitionEnded){this.transitionEnded=!0,this.$emit("after-"+this.status);var e=this.data,t=e.show,n=e.display;!t&&n&&this.setData({display:!1})}}}})}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/notify/notify.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return"string"==typeof e?{message:e}:e}function t(){var e=getCurrentPages();return e[e.length-1]}function n(n){var c=((n=o(o({},r),e(n))).context||t()).selectComponent(n.selector);if(delete n.context,delete n.selector,c)return c.setData(n),c.show(),c;console.warn("未找到 van-notify 节点，请确认 selector 及 context 是否正确")}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var r={selector:"#van-notify",type:"danger",message:"",background:"",duration:3e3,zIndex:110,color:require("../common/color").WHITE,safeAreaInsetTop:!1,onClick:function(){},onOpened:function(){},onClose:function(){}};exports.default=n,n.clear=function(n){var c=((n=o(o({},r),e(n))).context||t()).selectComponent(n.selector);c&&c.hide()}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/picker/shared.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pickerProps={title:String,loading:Boolean,showToolbar:Boolean,cancelButtonText:{type:String,value:"取消"},confirmButtonText:{type:String,value:"确认"},visibleItemCount:{type:Number,value:5},itemHeight:{type:Number,value:44}}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/toast/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return r.isObj(e)?e:{message:e}}function t(){var e=getCurrentPages();return e[e.length-1]}function n(n){var r=o(o({},a),e(n)),s=(r.context||t()).selectComponent(r.selector);if(s)return delete r.context,delete r.selector,s.clear=function(){s.setData({show:!1}),r.onClose&&r.onClose()},i.push(s),s.setData(r),clearTimeout(s.timer),r.duration>0&&(s.timer=setTimeout(function(){s.clear(),i=i.filter(function(e){return e!==s})},r.duration)),s;console.warn("未找到 van-toast 节点，请确认 selector 及 context 是否正确")}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("../common/utils"),s={type:"text",mask:!1,message:"",show:!0,zIndex:1e3,duration:2e3,position:"middle",forbidClick:!1,loadingType:"circular",selector:"#van-toast"},i=[],a=o({},s),c=function(t){return function(r){return n(o({type:t},e(r)))}};n.loading=c("loading"),n.success=c("success"),n.fail=c("fail"),n.clear=function(){i.forEach(function(e){e.clear()}),i=[]},n.setDefaultOptions=function(e){Object.assign(a,e)},n.resetDefaultOptions=function(){a=o({},s)},exports.default=n; 
 			}); 
		define("miniprogram_npm/@vant/weapp/uploader/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return t.some(function(t){return-1!==e.indexOf("."+t)})}Object.defineProperty(exports,"__esModule",{value:!0});var t=["jpeg","jpg","gif","png","svg"];exports.isImageUrl=e,exports.isImageFile=function(t){return t.type?0===t.type.indexOf("image"):t.path?e(t.path):!!t.url&&e(t.url)},exports.isVideo=function(e,t){return"video"===t}; 
 			}); 
		define("utils/CryptoJS.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./aes.js"),t=e.enc.Utf8.parse("asdjhrtuyh54w218"),r=e.enc.Utf8.parse("asdjhrtuyh54w218");exports.default={decrypt:function(n){var a=e.enc.Hex.parse(n),p=e.enc.Base64.stringify(a),s=e.AES.decrypt(p,t,{iv:r,mode:e.mode.CBC,padding:e.pad.Pkcs7});return s.toString(e.enc.Utf8).toString()},encrypt:function(n){var a=e.enc.Utf8.parse(n);return e.AES.encrypt(a,t,{iv:r,mode:e.mode.CBC,padding:e.pad.Pkcs7}).ciphertext.toString().toUpperCase()}}; 
 			}); 
		define("utils/WxValidate.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),i=function(){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,i),Object.assign(this,{data:{},rules:e,messages:n}),this.__init()}return n(i,[{key:"__init",value:function(){this.__initMethods(),this.__initDefaults(),this.__initData()}},{key:"__initData",value:function(){this.form={},this.errorList=[]}},{key:"__initDefaults",value:function(){this.defaults={messages:{required:"这是必填字段。",email:"请输入有效的电子邮件地址。",tel:"请输入11位的手机号码。",url:"请输入有效的网址。",date:"请输入有效的日期。",dateISO:"请输入有效的日期（ISO），例如：2009-06-23，1998/01/22。",number:"请输入有效的数字。",digits:"只能输入数字。",idcard:"请输入18位的有效身份证。",equalTo:this.formatTpl("输入值必须和 {0} 相同。"),contains:this.formatTpl("输入值必须包含 {0}。"),minlength:this.formatTpl("最少要输入 {0} 个字符。"),maxlength:this.formatTpl("最多可以输入 {0} 个字符。"),rangelength:this.formatTpl("请输入长度在 {0} 到 {1} 之间的字符。"),min:this.formatTpl("请输入不小于 {0} 的数值。"),max:this.formatTpl("请输入不大于 {0} 的数值。"),range:this.formatTpl("请输入范围在 {0} 到 {1} 之间的数值。")}}}},{key:"__initMethods",value:function(){var t=this;t.methods={required:function(e,n){if(!t.depend(n))return"dependency-mismatch";if("number"==typeof e)e=e.toString();else if("boolean"==typeof e)return!0;return e.length>0},email:function(e){return t.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},tel:function(e){return t.optional(e)||/^1[34578]\d{9}$/.test(e)},url:function(e){return t.optional(e)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)},date:function(e){return t.optional(e)||!/Invalid|NaN/.test(new Date(e).toString())},dateISO:function(e){return t.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)},number:function(e){return t.optional(e)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e){return t.optional(e)||/^\d+$/.test(e)},idcard:function(e){return t.optional(e)||/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e)},equalTo:function(e,n){return t.optional(e)||e===t.data[n]},contains:function(e,n){return t.optional(e)||e.indexOf(n)>=0},minlength:function(e,n){return t.optional(e)||e.length>=n},maxlength:function(e,n){return t.optional(e)||e.length<=n},rangelength:function(e,n){return t.optional(e)||e.length>=n[0]&&e.length<=n[1]},min:function(e,n){return t.optional(e)||e>=n},max:function(e,n){return t.optional(e)||e<=n},range:function(e,n){return t.optional(e)||e>=n[0]&&e<=n[1]}}}},{key:"addMethod",value:function(t,e,n){this.methods[t]=e,this.defaults.messages[t]=void 0!==n?n:this.defaults.messages[t]}},{key:"isValidMethod",value:function(t){var e=[];for(var n in this.methods)n&&"function"==typeof this.methods[n]&&e.push(n);return-1!==e.indexOf(t)}},{key:"formatTpl",value:function(t,e){var n=this;return 1===arguments.length?function(){var e=Array.from(arguments);return e.unshift(t),n.formatTpl.apply(this,e)}:void 0===e?t:(arguments.length>2&&e.constructor!==Array&&(e=Array.from(arguments).slice(1)),e.constructor!==Array&&(e=[e]),e.forEach(function(e,n){t=t.replace(new RegExp("\\{"+n+"\\}","g"),function(){return e})}),t)}},{key:"depend",value:function(t){switch(void 0===t?"undefined":e(t)){case"boolean":t=t;break;case"string":t=!!t.length;break;case"function":t=t();default:t=!0}return t}},{key:"optional",value:function(t){return!this.methods.required(t)&&"dependency-mismatch"}},{key:"customMessage",value:function(t,n){var i=this.messages[t],r="object"===(void 0===i?"undefined":e(i));if(i&&r)return i[n.method]}},{key:"defaultMessage",value:function(t,n){var i=this.customMessage(t,n)||this.defaults.messages[n.method],r=void 0===i?"undefined":e(i);return"undefined"===r?i="Warning: No message defined for "+n.method+".":"function"===r&&(i=i.call(this,n.parameters)),i}},{key:"formatTplAndAdd",value:function(t,e,n){var i=this.defaultMessage(t,e);this.errorList.push({param:t,msg:i,value:n})}},{key:"checkParam",value:function(t,e,n){this.data=n;var i=null!==n[t]&&void 0!==n[t]?n[t]:"";for(var r in e)if(this.isValidMethod(r)){var a={method:r,parameters:e[r]},o=this.methods[r](i,a.parameters);if("dependency-mismatch"===o)continue;if(this.setValue(t,r,o,i),!o){this.formatTplAndAdd(t,a,i);break}}}},{key:"setView",value:function(t){this.form[t]={$name:t,$valid:!0,$invalid:!1,$error:{},$success:{},$viewValue:""}}},{key:"setValue",value:function(t,e,n,i){var r=this.form[t];r.$valid=n,r.$invalid=!n,r.$error[e]=!n,r.$success[e]=n,r.$viewValue=i}},{key:"checkForm",value:function(t){this.__initData();for(var e in this.rules)this.setView(e),this.checkParam(e,this.rules[e],t);return this.valid()}},{key:"valid",value:function(){return 0===this.size()}},{key:"size",value:function(){return this.errorList.length}},{key:"validationErrors",value:function(){return this.errorList}}]),i}();exports.default=i; 
 			}); 
		define("utils/aes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,i){return e=r.enc.Utf8.parse(e),i=r.enc.Utf8.parse(i),r.AES.encrypt(t,e,{iv:i,mode:r.mode.CBC,padding:r.pad.Pkcs7}).toString()}function e(t,e,i){e=r.enc.Utf8.parse(e),i=r.enc.Utf8.parse(i);var n=r.AES.decrypt(t,e,{iv:i,mode:r.mode.CBC,padding:r.pad.Pkcs7});return n=r.enc.Utf8.stringify(n)}var r=r||function(t,e){var r={},i=r.lib={},n=function(){},s=i.Base={extend:function(t){n.prototype=this;var e=new n;return t&&e.mixIn(t),e.hasOwnProperty("init")||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},o=i.WordArray=s.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=void 0!=e?e:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes;if(t=t.sigBytes,this.clamp(),i%4)for(var n=0;n<t;n++)e[i+n>>>2]|=(r[n>>>2]>>>24-n%4*8&255)<<24-(i+n)%4*8;else if(65535<r.length)for(n=0;n<t;n+=4)e[i+n>>>2]=r[n>>>2];else e.push.apply(e,r);return this.sigBytes+=t,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=s.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],i=0;i<e;i+=4)r.push(4294967296*t.random()|0);return new o.init(r,e)}}),c=r.enc={},a=c.Hex={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],i=0;i<t;i++){var n=e[i>>>2]>>>24-i%4*8&255;r.push((n>>>4).toString(16)),r.push((15&n).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new o.init(r,e/2)}},f=c.Latin1={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],i=0;i<t;i++)r.push(String.fromCharCode(e[i>>>2]>>>24-i%4*8&255));return r.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new o.init(r,e)}},h=c.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},u=i.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,i=r.words,n=r.sigBytes,s=this.blockSize,c=n/(4*s);if(e=(c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0))*s,n=t.min(4*e,n),e){for(var a=0;a<e;a+=s)this._doProcessBlock(i,a);a=i.splice(0,e),r.sigBytes-=n}return new o.init(a,n)},clone:function(){var t=s.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});i.Hasher=u.extend({cfg:s.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new p.HMAC.init(t,r).finalize(e)}}});var p=r.algo={};return r}(Math);!function(){var t=r,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp(),t=[];for(var n=0;n<r;n+=3)for(var s=(e[n>>>2]>>>24-n%4*8&255)<<16|(e[n+1>>>2]>>>24-(n+1)%4*8&255)<<8|e[n+2>>>2]>>>24-(n+2)%4*8&255,o=0;4>o&&n+.75*o<r;o++)t.push(i.charAt(s>>>6*(3-o)&63));if(e=i.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var r=t.length,i=this._map;(n=i.charAt(64))&&-1!=(n=t.indexOf(n))&&(r=n);for(var n=[],s=0,o=0;o<r;o++)if(o%4){var c=i.indexOf(t.charAt(o-1))<<o%4*2,a=i.indexOf(t.charAt(o))>>>6-o%4*2;n[s>>>2]|=(c|a)<<24-s%4*8,s++}return e.create(n,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(t){function e(t,e,r,i,n,s,o){return((t=t+(e&r|~e&i)+n+o)<<s|t>>>32-s)+e}function i(t,e,r,i,n,s,o){return((t=t+(e&i|r&~i)+n+o)<<s|t>>>32-s)+e}function n(t,e,r,i,n,s,o){return((t=t+(e^r^i)+n+o)<<s|t>>>32-s)+e}function s(t,e,r,i,n,s,o){return((t=t+(r^(e|~i))+n+o)<<s|t>>>32-s)+e}for(var o=r,c=(f=o.lib).WordArray,a=f.Hasher,f=o.algo,h=[],u=0;64>u;u++)h[u]=4294967296*t.abs(t.sin(u+1))|0;f=f.MD5=a.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,r){for(o=0;16>o;o++){a=t[c=r+o];t[c]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var o=this._hash.words,c=t[r+0],a=t[r+1],f=t[r+2],u=t[r+3],p=t[r+4],d=t[r+5],l=t[r+6],y=t[r+7],_=t[r+8],g=t[r+9],v=t[r+10],B=t[r+11],m=t[r+12],x=t[r+13],k=t[r+14],S=t[r+15],z=o[0],w=o[1],C=o[2],E=o[3],w=s(w=s(w=s(w=s(w=n(w=n(w=n(w=n(w=i(w=i(w=i(w=i(w=e(w=e(w=e(w=e(w,C=e(C,E=e(E,z=e(z,w,C,E,c,7,h[0]),w,C,a,12,h[1]),z,w,f,17,h[2]),E,z,u,22,h[3]),C=e(C,E=e(E,z=e(z,w,C,E,p,7,h[4]),w,C,d,12,h[5]),z,w,l,17,h[6]),E,z,y,22,h[7]),C=e(C,E=e(E,z=e(z,w,C,E,_,7,h[8]),w,C,g,12,h[9]),z,w,v,17,h[10]),E,z,B,22,h[11]),C=e(C,E=e(E,z=e(z,w,C,E,m,7,h[12]),w,C,x,12,h[13]),z,w,k,17,h[14]),E,z,S,22,h[15]),C=i(C,E=i(E,z=i(z,w,C,E,a,5,h[16]),w,C,l,9,h[17]),z,w,B,14,h[18]),E,z,c,20,h[19]),C=i(C,E=i(E,z=i(z,w,C,E,d,5,h[20]),w,C,v,9,h[21]),z,w,S,14,h[22]),E,z,p,20,h[23]),C=i(C,E=i(E,z=i(z,w,C,E,g,5,h[24]),w,C,k,9,h[25]),z,w,u,14,h[26]),E,z,_,20,h[27]),C=i(C,E=i(E,z=i(z,w,C,E,x,5,h[28]),w,C,f,9,h[29]),z,w,y,14,h[30]),E,z,m,20,h[31]),C=n(C,E=n(E,z=n(z,w,C,E,d,4,h[32]),w,C,_,11,h[33]),z,w,B,16,h[34]),E,z,k,23,h[35]),C=n(C,E=n(E,z=n(z,w,C,E,a,4,h[36]),w,C,p,11,h[37]),z,w,y,16,h[38]),E,z,v,23,h[39]),C=n(C,E=n(E,z=n(z,w,C,E,x,4,h[40]),w,C,c,11,h[41]),z,w,u,16,h[42]),E,z,l,23,h[43]),C=n(C,E=n(E,z=n(z,w,C,E,g,4,h[44]),w,C,m,11,h[45]),z,w,S,16,h[46]),E,z,f,23,h[47]),C=s(C,E=s(E,z=s(z,w,C,E,c,6,h[48]),w,C,y,10,h[49]),z,w,k,15,h[50]),E,z,d,21,h[51]),C=s(C,E=s(E,z=s(z,w,C,E,m,6,h[52]),w,C,u,10,h[53]),z,w,v,15,h[54]),E,z,a,21,h[55]),C=s(C,E=s(E,z=s(z,w,C,E,_,6,h[56]),w,C,S,10,h[57]),z,w,l,15,h[58]),E,z,x,21,h[59]),C=s(C,E=s(E,z=s(z,w,C,E,p,6,h[60]),w,C,B,10,h[61]),z,w,f,15,h[62]),E,z,g,21,h[63]);o[0]=o[0]+z|0,o[1]=o[1]+w|0,o[2]=o[2]+C|0,o[3]=o[3]+E|0},_doFinalize:function(){var e=this._data,r=e.words,i=8*this._nDataBytes,n=8*e.sigBytes;r[n>>>5]|=128<<24-n%32;var s=t.floor(i/4294967296);for(r[15+(n+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r[14+(n+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e.sigBytes=4*(r.length+1),this._process(),r=(e=this._hash).words,i=0;4>i;i++)n=r[i],r[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8);return e},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}}),o.MD5=a._createHelper(f),o.HmacMD5=a._createHmacHelper(f)}(Math),function(){var t=r,e=t.lib,i=e.Base,n=e.WordArray,s=(e=t.algo).EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:e.MD5,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=(c=this.cfg).hasher.create(),i=n.create(),s=i.words,o=c.keySize,c=c.iterations;s.length<o;){a&&r.update(a);var a=r.update(t).finalize(e);r.reset();for(var f=1;f<c;f++)a=r.finalize(a),r.reset();i.concat(a)}return i.sigBytes=4*o,i}});t.EvpKDF=function(t,e,r){return s.create(r).compute(t,e)}}(),r.lib.Cipher||function(t){var e=(l=r).lib,i=e.Base,n=e.WordArray,s=e.BufferedBlockAlgorithm,o=l.enc.Base64,c=l.algo.EvpKDF,a=e.Cipher=s.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(t){return{encrypt:function(e,r,i){return("string"==typeof r?y:d).encrypt(t,e,r,i)},decrypt:function(e,r,i){return("string"==typeof r?y:d).decrypt(t,e,r,i)}}}});e.StreamCipher=a.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var f=l.mode={},h=function(t,e,r){},u=(e.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}})).extend();u.Encryptor=u.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;h.call(this,t,e,i),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),u.Decryptor=u.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);r.decryptBlock(t,e),h.call(this,t,e,i),this._prevBlock=n}}),f=f.CBC=u,u=(l.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,i=(r=r-t.sigBytes%r)<<24|r<<16|r<<8|r,s=[],o=0;o<r;o+=4)s.push(i);r=n.create(s,r),t.concat(r)},unpad:function(t){t.sigBytes-=255&t.words[t.sigBytes-1>>>2]}},e.BlockCipher=a.extend({cfg:a.cfg.extend({mode:f,padding:u}),reset:function(){a.reset.call(this);var t=(e=this.cfg).iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=e.createEncryptor;else r=e.createDecryptor,this._minBufferSize=1;this._mode=r.call(e,this,t&&t.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else e=this._process(!0),t.unpad(e);return e},blockSize:4});var p=e.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),f=(l.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext;return((t=t.salt)?n.create([1398893684,1701076831]).concat(t).concat(e):e).toString(o)},parse:function(t){var e=(t=o.parse(t)).words;if(1398893684==e[0]&&1701076831==e[1]){var r=n.create(e.slice(2,4));e.splice(0,4),t.sigBytes-=16}return p.create({ciphertext:t,salt:r})}},d=e.SerializableCipher=i.extend({cfg:i.extend({format:f}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i);return e=n.finalize(e),n=n.cfg,p.create({ciphertext:e,key:r,iv:n.iv,algorithm:t,mode:n.mode,padding:n.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),l=(l.kdf={}).OpenSSL={execute:function(t,e,r,i){return i||(i=n.random(8)),t=c.create({keySize:e+r}).compute(t,i),r=n.create(t.words.slice(e),4*r),t.sigBytes=4*e,p.create({key:t,iv:r,salt:i})}},y=e.PasswordBasedCipher=d.extend({cfg:d.cfg.extend({kdf:l}),encrypt:function(t,e,r,i){return i=this.cfg.extend(i),r=i.kdf.execute(r,t.keySize,t.ivSize),i.iv=r.iv,(t=d.encrypt.call(this,t,e,r.key,i)).mixIn(r),t},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),r=i.kdf.execute(r,t.keySize,t.ivSize,e.salt),i.iv=r.iv,d.decrypt.call(this,t,e,r.key,i)}})}(),function(){for(var t=r,e=t.lib.BlockCipher,i=t.algo,n=[],s=[],o=[],c=[],a=[],f=[],h=[],u=[],p=[],d=[],l=[],y=0;256>y;y++)l[y]=128>y?y<<1:y<<1^283;for(var _=0,g=0,y=0;256>y;y++){var v=(v=g^g<<1^g<<2^g<<3^g<<4)>>>8^255&v^99;n[_]=v,s[v]=_;var B=l[_],m=l[B],x=l[m],k=257*l[v]^16843008*v;o[_]=k<<24|k>>>8,c[_]=k<<16|k>>>16,a[_]=k<<8|k>>>24,f[_]=k,k=16843009*x^65537*m^257*B^16843008*_,h[v]=k<<24|k>>>8,u[v]=k<<16|k>>>16,p[v]=k<<8|k>>>24,d[v]=k,_?(_=B^l[l[l[x^B]]],g^=l[l[g]]):_=g=1}var S=[0,1,2,4,8,16,32,64,128,27,54],i=i.AES=e.extend({_doReset:function(){for(var t=(r=this._key).words,e=r.sigBytes/4,r=4*((this._nRounds=e+6)+1),i=this._keySchedule=[],s=0;s<r;s++)if(s<e)i[s]=t[s];else{var o=i[s-1];s%e?6<e&&4==s%e&&(o=n[o>>>24]<<24|n[o>>>16&255]<<16|n[o>>>8&255]<<8|n[255&o]):(o=o<<8|o>>>24,o=n[o>>>24]<<24|n[o>>>16&255]<<16|n[o>>>8&255]<<8|n[255&o],o^=S[s/e|0]<<24),i[s]=i[s-e]^o}for(t=this._invKeySchedule=[],e=0;e<r;e++)s=r-e,o=e%4?i[s]:i[s-4],t[e]=4>e||4>=s?o:h[n[o>>>24]]^u[n[o>>>16&255]]^p[n[o>>>8&255]]^d[n[255&o]]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,o,c,a,f,n)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,h,u,p,d,s),r=t[e+1],t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,s,o,c){for(var a=this._nRounds,f=t[e]^r[0],h=t[e+1]^r[1],u=t[e+2]^r[2],p=t[e+3]^r[3],d=4,l=1;l<a;l++)var y=i[f>>>24]^n[h>>>16&255]^s[u>>>8&255]^o[255&p]^r[d++],_=i[h>>>24]^n[u>>>16&255]^s[p>>>8&255]^o[255&f]^r[d++],g=i[u>>>24]^n[p>>>16&255]^s[f>>>8&255]^o[255&h]^r[d++],p=i[p>>>24]^n[f>>>16&255]^s[h>>>8&255]^o[255&u]^r[d++],f=y,h=_,u=g;y=(c[f>>>24]<<24|c[h>>>16&255]<<16|c[u>>>8&255]<<8|c[255&p])^r[d++],_=(c[h>>>24]<<24|c[u>>>16&255]<<16|c[p>>>8&255]<<8|c[255&f])^r[d++],g=(c[u>>>24]<<24|c[p>>>16&255]<<16|c[f>>>8&255]<<8|c[255&h])^r[d++],p=(c[p>>>24]<<24|c[f>>>16&255]<<16|c[h>>>8&255]<<8|c[255&u])^r[d++],t[e]=y,t[e+1]=_,t[e+2]=g,t[e+3]=p},keySize:8});t.AES=e._createHelper(i)}(),r.encrypt=function(e,r,i){return t(e,r,i)},r.decrypt=function(t,r,i){return e(t,r,i)},module.exports=r; 
 			}); 
		define("utils/base.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={uuid:function(){for(var e=[],r=0;r<36;r++)e[r]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var t=e.join("");return t}}; 
 			}); 
		define("utils/keyword.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var s=getApp(),e={"1c":"之羽","2c":"晓梦谜蝶羽|月影枫痕羽","3c":"幻灵虹霓羽|幽灵碧焰羽","4c":"玄影伽蓝翼|血影冥光翼","5c":"天使之翼|飒飒流星翼|杳杳灵凤翼","1f":"坠星","2f":"千叶","3f":"凌雪","4f":"符咒·飞羽","5f":"星芒|天时","6f":"徊翔|万物","70js":"行刺者|斩龙之剑","70hj":"毁灭者|野蛮战斧","70yy":"缚魂者|神圣守护之杖","70xs":"预言者|寒冥紫霜之扇","70yx":"火蟒|鹊画弓","70面具":"搜魂暗眼","70首饰":"紫玉","70项链":"紫玉项链","70戒指":"紫玉指环","80js":"夙夜光寒|仁道湛卢","80hj":"霸王别姬|霸道破军","80yy":"曼莎珠华|诡道迷尘杖","80xs":"遗世独立|天道忘情扇","80yx":"密纹龙鳞|虎筋弦弓","80面具":"噬神幽瞳","90js":"空明流光|玄冥光纪剑","90hj":"燕然未勒|白帝肃金斧","90yy":"天地同寿|祝融赤怒杖","90xs":"流风回雪|东君呈风扇","90yx":"苍穹流光|两石力之弓","90面具":"霸王重瞳","90首饰":"墨云","90项链":"墨云项链","90戒指":"墨云指环","100js":"飞翰逐月|常仪策月剑","100hj":"霆雷啸山|帝岳辟山斧","100yy":"流火溯日|羲和驭日杖","100xs":"江汉濯川|冰夷临川扇","100yx":"无极寒星","100面具":"九曲瑰瞳","110js":"极刃戮风|禺疆凌风剑","110hj":"荒冥斩雷|鸿钧化雷斧","110yy":"红莲流火|炎帝律火杖","110xs":"幻狱玄冰|白泽倚冰扇","110yx":"玄冥惊云","110面具":"澄霄玉面","110首饰":"静灵皑雪","110项链":"静灵皑雪项链","110戒指":"静灵皑雪指环","120js":"玄龙淬金","120hj":"烈风苍青","120yy":"精火银焰","120xs":"映雪霜荼","120yx":"幽影凝碧","120面具":"炙炎鎏金","130js":"承影幽明","130hj":"撼天干戚","130yy":"凤翼娑罗","130xs":"两仪白羽","130yx":"青霄落日","130面具":"青霜千雪","130首饰":"绯夜寒山","130项链":"绯夜寒山项链","130戒指":"绯夜寒山指环"};exports.default=function(y){var t=y.replace(/\s+/g,"").split("").join(".*"),x=e[y.toLowerCase()],j=new RegExp(t+"|"+x);return s.globalData.keyWordList.filter(function(s){return j.test(s.wpm)})}; 
 			}); 
		define("utils/lodash.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={throttle:function(e,t){var n=0,r=t||500;return function(){var t=this,o=new Date;o-n>r&&(e.call(t,arguments[0]),n=o)}},debounce:function(e,t){var n=void 0,r=t||1e3;return function(){clearTimeout(n);var t=this,o=arguments[0];n=setTimeout(function(){e.call(t,o)},r)}}}; 
 			}); 
		define("utils/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function r(n,r){return n<<r|n>>>32-r}function t(t,e,u,o,c,f){return n(r(n(n(e,t),n(o,f)),c),u)}function e(n,r,e,u,o,c,f){return t(r&e|~r&u,n,r,o,c,f)}function u(n,r,e,u,o,c,f){return t(r&u|e&~u,n,r,o,c,f)}function o(n,r,e,u,o,c,f){return t(r^e^u,n,r,o,c,f)}function c(n,r,e,u,o,c,f){return t(e^(r|~u),n,r,o,c,f)}function f(r){for(var t=1732584193,f=-271733879,i=-1732584194,a=271733878,h=0;h<r.length;h+=16){var l=t,g=f,v=i,d=a;f=c(f=c(f=c(f=c(f=o(f=o(f=o(f=o(f=u(f=u(f=u(f=u(f=e(f=e(f=e(f=e(f,i=e(i,a=e(a,t=e(t,f,i,a,r[h+0],7,-680876936),f,i,r[h+1],12,-389564586),t,f,r[h+2],17,606105819),a,t,r[h+3],22,-1044525330),i=e(i,a=e(a,t=e(t,f,i,a,r[h+4],7,-176418897),f,i,r[h+5],12,1200080426),t,f,r[h+6],17,-1473231341),a,t,r[h+7],22,-45705983),i=e(i,a=e(a,t=e(t,f,i,a,r[h+8],7,1770035416),f,i,r[h+9],12,-1958414417),t,f,r[h+10],17,-42063),a,t,r[h+11],22,-1990404162),i=e(i,a=e(a,t=e(t,f,i,a,r[h+12],7,1804603682),f,i,r[h+13],12,-40341101),t,f,r[h+14],17,-1502002290),a,t,r[h+15],22,1236535329),i=u(i,a=u(a,t=u(t,f,i,a,r[h+1],5,-165796510),f,i,r[h+6],9,-1069501632),t,f,r[h+11],14,643717713),a,t,r[h+0],20,-373897302),i=u(i,a=u(a,t=u(t,f,i,a,r[h+5],5,-701558691),f,i,r[h+10],9,38016083),t,f,r[h+15],14,-660478335),a,t,r[h+4],20,-405537848),i=u(i,a=u(a,t=u(t,f,i,a,r[h+9],5,568446438),f,i,r[h+14],9,-1019803690),t,f,r[h+3],14,-187363961),a,t,r[h+8],20,1163531501),i=u(i,a=u(a,t=u(t,f,i,a,r[h+13],5,-1444681467),f,i,r[h+2],9,-51403784),t,f,r[h+7],14,1735328473),a,t,r[h+12],20,-1926607734),i=o(i,a=o(a,t=o(t,f,i,a,r[h+5],4,-378558),f,i,r[h+8],11,-2022574463),t,f,r[h+11],16,1839030562),a,t,r[h+14],23,-35309556),i=o(i,a=o(a,t=o(t,f,i,a,r[h+1],4,-1530992060),f,i,r[h+4],11,1272893353),t,f,r[h+7],16,-155497632),a,t,r[h+10],23,-1094730640),i=o(i,a=o(a,t=o(t,f,i,a,r[h+13],4,681279174),f,i,r[h+0],11,-358537222),t,f,r[h+3],16,-722521979),a,t,r[h+6],23,76029189),i=o(i,a=o(a,t=o(t,f,i,a,r[h+9],4,-640364487),f,i,r[h+12],11,-421815835),t,f,r[h+15],16,530742520),a,t,r[h+2],23,-995338651),i=c(i,a=c(a,t=c(t,f,i,a,r[h+0],6,-198630844),f,i,r[h+7],10,1126891415),t,f,r[h+14],15,-1416354905),a,t,r[h+5],21,-57434055),i=c(i,a=c(a,t=c(t,f,i,a,r[h+12],6,1700485571),f,i,r[h+3],10,-1894986606),t,f,r[h+10],15,-1051523),a,t,r[h+1],21,-2054922799),i=c(i,a=c(a,t=c(t,f,i,a,r[h+8],6,1873313359),f,i,r[h+15],10,-30611744),t,f,r[h+6],15,-1560198380),a,t,r[h+13],21,1309151649),i=c(i,a=c(a,t=c(t,f,i,a,r[h+4],6,-145523070),f,i,r[h+11],10,-1120210379),t,f,r[h+2],15,718787259),a,t,r[h+9],21,-343485551),t=n(t,l),f=n(f,g),i=n(i,v),a=n(a,d)}return[t,f,i,a]}function i(n){for(var r="",t=0;t<4*n.length;t++)r+="0123456789abcdef".charAt(n[t>>2]>>t%4*8+4&15)+"0123456789abcdef".charAt(n[t>>2]>>t%4*8&15);return r}function a(n){for(var r=1+(n.length+8>>6),t=new Array(16*r),e=0;e<16*r;e++)t[e]=0;for(e=0;e<n.length;e++)t[e>>2]|=(255&n.charCodeAt(e))<<e%4*8;return t[e>>2]|=128<<e%4*8,t[16*r-2]=8*n.length,t}module.exports={hexMD5:function(n){return i(f(a(n)))}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(e){var n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),u=e.getHours(),i=e.getMinutes(),a=e.getSeconds();return[n,r,o].map(t).join("/")+" "+[u,i,a].map(t).join(":")}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},a=e(require("utils/base.js")),s=e(require("utils/md5.js"));App({globalData:{baseUrl:"https://qqsg.pc9527.vip:3001",userInfo:null,btnVisible:!1,homeMessage:[],swiperMessage:[],noticeMessage:[],useMessage:[],url:{img:"/qqsg/imgReserve",message:"/qqsg/wxPageMessageReserve",initData:"/qqsg/wxInitListReserve",banner:"/qqsg/bannerReserve",tools:"/qqsg/toolsReserve",initMessage:"/qqsg/wxInitMessageReserve"}},wxRequest:function(e){e.method||(e.method="post");var n=parseInt((new Date).getTime()/1e3),i=a.default.uuid(),l=s.default.hexMD5("clientGuid="+i+"&clientTimestamp="+n+"&key=6JFzFFN5527IYdDf16VlBxErt96NTX18"),o=t({clientTimestamp:n,clientGuid:i,sign:l},e.data);wx.request({url:this.globalData.baseUrl+e.url,method:e.method,header:{type:"weChat"},data:o,success:function(t){e.success&&e.success(t)},fail:function(t){e.fail&&e.fail(res)}})},onLaunch:function(){var e=this;if(wx.canIUse("getUpdateManager")){var t=wx.getUpdateManager();t.onCheckForUpdate(function(e){e.hasUpdate&&(t.onUpdateReady(function(){wx.showModal({title:"更新提示",content:"新版本上线，请进行更新",showCancel:!1,success:function(e){e.confirm&&t.applyUpdate()}})}),t.onUpdateFailed(function(){wx.showModal({title:"已经有新版本了哟~",showCancel:!1,content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})}))})}else wx.showModal({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"});this.wxRequest({url:this.globalData.url.initMessage,success:function(t){"200"==t.data.code?(e.globalData=Object.assign(e.globalData,t.data.data),e.messageCallback&&e.messageCallback()):wx.showModal({content:t.data.msg,showCancel:!1})}})}}); 
 			}); 	require("app.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/action-sheet/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/action-sheet/index.js';	define("miniprogram_npm/@vant/weapp/action-sheet/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),t=require("../mixins/button"),o=require("../mixins/open-type");e.VantComponent({mixins:[t.button,o.openType],props:{show:Boolean,title:String,cancelText:String,description:String,round:{type:Boolean,value:!0},zIndex:{type:Number,value:100},actions:{type:Array,value:[]},overlay:{type:Boolean,value:!0},closeOnClickOverlay:{type:Boolean,value:!0},closeOnClickAction:{type:Boolean,value:!0},safeAreaInsetBottom:{type:Boolean,value:!0}},methods:{onSelect:function(e){var t=e.currentTarget.dataset.index,o=this.data.actions[t];!o||o.disabled||o.loading||(this.$emit("select",o),this.data.closeOnClickAction&&this.onClose())},onCancel:function(){this.$emit("cancel")},onClose:function(){this.$emit("close")},onClickOverlay:function(){this.$emit("click-overlay"),this.onClose()}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/action-sheet/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/area/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/area/index.js';	define("miniprogram_npm/@vant/weapp/area/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),n=require("../picker/shared");t.VantComponent({classes:["active-class","toolbar-class","column-class"],props:e(e({},n.pickerProps),{value:{type:String,observer:function(e){this.code=e,this.setValues()}},areaList:{type:Object,value:{},observer:"setValues"},columnsNum:{type:null,value:3,observer:function(e){this.setData({displayColumns:this.data.columns.slice(0,+e)})}},columnsPlaceholder:{type:Array,observer:function(e){this.setData({typeToColumnsPlaceholder:{province:e[0]||"",city:e[1]||"",county:e[2]||""}})}}}),data:{columns:[{values:[]},{values:[]},{values:[]}],displayColumns:[{values:[]},{values:[]},{values:[]}],typeToColumnsPlaceholder:{}},mounted:function(){var e=this;setTimeout(function(){e.setValues()},0)},methods:{getPicker:function(){return null==this.picker&&(this.picker=this.selectComponent(".van-area__picker")),this.picker},onCancel:function(e){this.emit("cancel",e.detail)},onConfirm:function(e){var t=e.detail.index,n=e.detail.value;n=this.parseOutputValues(n),this.emit("confirm",{value:n,index:t})},emit:function(e,t){t.values=t.value,delete t.value,this.$emit(e,t)},parseOutputValues:function(e){var t=this.data.columnsPlaceholder;return e.map(function(e,n){return e?((e=JSON.parse(JSON.stringify(e))).code&&e.name!==t[n]||(e.code="",e.name=""),e):e})},onChange:function(e){var t=this,n=e.detail,i=n.index,s=n.picker,r=n.value;this.code=r[i].code,this.setValues().then(function(){t.$emit("change",{picker:s,values:t.parseOutputValues(s.getValues()),index:i})})},getConfig:function(e){var t=this.data.areaList;return t&&t[e+"_list"]||{}},getList:function(e,t){var n=this.data.typeToColumnsPlaceholder,i=[];if("province"!==e&&!t)return i;var s=this.getConfig(e);if(i=Object.keys(s).map(function(e){return{code:e,name:s[e]}}),t&&("9"===t[0]&&"city"===e&&(t="9"),i=i.filter(function(e){return 0===e.code.indexOf(t)})),n[e]&&i.length){var r="province"===e?"":"city"===e?"000000".slice(2,4):"000000".slice(4,6);i.unshift({code:""+t+r,name:n[e]})}return i},getIndex:function(e,t){var n="province"===e?2:"city"===e?4:6,i=this.getList(e,t.slice(0,n-2));"9"===t[0]&&"province"===e&&(n=1),t=t.slice(0,n);for(var s=0;s<i.length;s++)if(i[s].code.slice(0,n)===t)return s;return 0},setValues:function(){var e=this,t=this.getConfig("county"),n=this.code;n||(n=this.data.columnsPlaceholder.length?"000000":Object.keys(t)[0]?Object.keys(t)[0]:"");var i=this.getList("province"),s=this.getList("city",n.slice(0,2)),r=this.getPicker();if(r){var c=[];return c.push(r.setColumnValues(0,i,!1)),c.push(r.setColumnValues(1,s,!1)),s.length&&"00"===n.slice(2,4)&&(n=s[0].code),c.push(r.setColumnValues(2,this.getList("county",n.slice(0,4)),!1)),Promise.all(c).catch(function(){}).then(function(){return r.setIndexes([e.getIndex("province",n),e.getIndex("city",n),e.getIndex("county",n)])}).catch(function(){})}},getValues:function(){var e=this.getPicker();return e?e.getValues().filter(function(e){return!!e}):[]},getDetail:function(){var e=this.getValues(),t={code:"",country:"",province:"",city:"",county:""};if(!e.length)return t;var n=e.map(function(e){return e.name});return t.code=e[e.length-1].code,"9"===t.code[0]?(t.country=n[1]||"",t.province=n[2]||""):(t.province=n[0]||"",t.city=n[1]||"",t.county=n[2]||""),t},reset:function(e){return this.code=e||"",this.setValues()}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/area/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/button/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/button/index.js';	define("miniprogram_npm/@vant/weapp/button/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),t=require("../mixins/button"),o=require("../mixins/open-type");e.VantComponent({mixins:[t.button,o.openType],classes:["hover-class","loading-class"],data:{baseStyle:""},props:{icon:String,plain:Boolean,block:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,loadingText:String,customStyle:String,loadingType:{type:String,value:"circular"},type:{type:String,value:"default"},size:{type:String,value:"normal"},loadingSize:{type:String,value:"20px"},color:{type:String,observer:function(e){var t="";e&&(t+="color: "+(this.data.plain?e:"white")+";",this.data.plain||(t+="background: "+e+";"),-1!==e.indexOf("gradient")?t+="border: 0;":t+="border-color: "+e+";"),t!==this.data.baseStyle&&this.setData({baseStyle:t})}}},methods:{onClick:function(){this.data.disabled||this.data.loading||this.$emit("click")}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/button/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/card/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/card/index.js';	define("miniprogram_npm/@vant/weapp/card/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../mixins/link");require("../common/component").VantComponent({classes:["num-class","desc-class","thumb-class","title-class","price-class","origin-price-class"],mixins:[t.link],props:{tag:String,num:String,desc:String,thumb:String,title:String,price:{type:String,observer:"updatePrice"},centered:Boolean,lazyLoad:Boolean,thumbLink:String,originPrice:String,thumbMode:{type:String,value:"aspectFit"},currency:{type:String,value:"¥"}},methods:{updatePrice:function(){var t=this.data.price.toString().split(".");this.setData({integerStr:t[0],decimalStr:t[1]?"."+t[1]:""})},onClickThumb:function(){this.jumpLink("thumbLink")}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/card/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/cell-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/cell-group/index.js';	define("miniprogram_npm/@vant/weapp/cell-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({props:{title:String,border:{type:Boolean,value:!0}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/cell-group/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/cell/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/cell/index.js';	define("miniprogram_npm/@vant/weapp/cell/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../mixins/link");require("../common/component").VantComponent({classes:["title-class","label-class","value-class","right-icon-class","hover-class"],mixins:[e.link],props:{title:null,value:null,icon:String,size:String,label:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleWidth:String,customStyle:String,arrowDirection:String,useLabelSlot:Boolean,border:{type:Boolean,value:!0}},methods:{onClick:function(e){this.$emit("click",e.detail),this.jumpLink()}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/cell/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/checkbox-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/checkbox-group/index.js';	define("miniprogram_npm/@vant/weapp/checkbox-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({field:!0,relation:{name:"checkbox",type:"descendant",current:"checkbox-group",linked:function(e){this.updateChild(e)}},props:{max:Number,value:{type:Array,observer:"updateChildren"},disabled:{type:Boolean,observer:"updateChildren"}},methods:{updateChildren:function(){var e=this;(this.children||[]).forEach(function(t){return e.updateChild(t)})},updateChild:function(e){var t=this.data,a=t.value,n=t.disabled;e.setData({value:-1!==a.indexOf(e.data.name),parentDisabled:n})}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/checkbox-group/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/checkbox/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/checkbox/index.js';	define("miniprogram_npm/@vant/weapp/checkbox/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,a){e.$emit("input",a),e.$emit("change",a)}Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({field:!0,relation:{name:"checkbox-group",type:"ancestor",current:"checkbox"},classes:["icon-class","label-class"],props:{value:Boolean,disabled:Boolean,useIconSlot:Boolean,checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,value:"round"},iconSize:{type:null,value:20}},data:{parentDisabled:!1},methods:{emitChange:function(a){this.parent?this.setParentValue(this.parent,a):e(this,a)},toggle:function(){var e=this.data,a=e.parentDisabled,t=e.disabled,n=e.value;t||a||this.emitChange(!n)},onClickLabel:function(){var e=this.data,a=e.labelDisabled,t=e.parentDisabled,n=e.disabled,i=e.value;n||a||t||this.emitChange(!i)},setParentValue:function(a,t){var n=a.data.value.slice(),i=this.data.name,l=a.data.max;if(t){if(l&&n.length>=l)return;-1===n.indexOf(i)&&(n.push(i),e(a,n))}else{var o=n.indexOf(i);-1!==o&&(n.splice(o,1),e(a,n))}}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/checkbox/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/circle/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/circle/index.js';	define("miniprogram_npm/@vant/weapp/circle/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return Math.min(Math.max(e,0),100)}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),r=require("../common/utils"),a=require("../common/color"),n=2*Math.PI,i=-Math.PI/2;t.VantComponent({props:{text:String,lineCap:{type:String,value:"round"},value:{type:Number,value:0,observer:"reRender"},speed:{type:Number,value:50},size:{type:Number,value:100},fill:String,layerColor:{type:String,value:a.WHITE},color:{type:[String,Object],value:a.BLUE,observer:"setHoverColor"},strokeWidth:{type:Number,value:4},clockwise:{type:Boolean,value:!0}},data:{hoverColor:a.BLUE},methods:{getContext:function(){return this.ctx||(this.ctx=wx.createCanvasContext("van-circle",this)),this.ctx},setHoverColor:function(){var e=this.getContext(),t=this.data,a=t.color,n=t.size,i=a;if(r.isObj(a)){var o=e.createLinearGradient(n,0,0,0);Object.keys(a).sort(function(e,t){return parseFloat(e)-parseFloat(t)}).map(function(e){return o.addColorStop(parseFloat(e)/100,a[e])}),i=o}this.setData({hoverColor:i})},presetCanvas:function(e,t,r,a,n){var i=this.data,o=i.strokeWidth,l=i.lineCap,s=i.clockwise,c=i.size/2,u=c-o/2;e.setStrokeStyle(t),e.setLineWidth(o),e.setLineCap(l),e.beginPath(),e.arc(c,c,u,r,a,!s),e.stroke(),n&&(e.setFillStyle(n),e.fill())},renderLayerCircle:function(e){var t=this.data,r=t.layerColor,a=t.fill;this.presetCanvas(e,r,0,n,a)},renderHoverCircle:function(e,t){var r=this.data,a=r.clockwise,o=r.hoverColor,l=n*(t/100),s=a?i+l:3*Math.PI-(i+l);this.presetCanvas(e,o,i,s)},drawCircle:function(t){var r=this.getContext(),a=this.data.size;r.clearRect(0,0,a,a),this.renderLayerCircle(r);var n=e(t);0!==n&&this.renderHoverCircle(r,n),r.draw()},reRender:function(){var e=this,t=this.data,r=t.value,a=t.speed;a<=0||a>1e3?this.drawCircle(r):(this.clearInterval(),this.currentValue=this.currentValue||0,this.interval=setInterval(function(){e.currentValue!==r?(e.currentValue<r?e.currentValue+=1:e.currentValue-=1,e.drawCircle(e.currentValue)):e.clearInterval()},1e3/a))},clearInterval:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){this.interval&&(clearInterval(this.interval),this.interval=null)})},created:function(){var e=this.data.value;this.currentValue=e,this.drawCircle(e)},destroyed:function(){this.ctx=null,this.clearInterval()}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/circle/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/col/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/col/index.js';	define("miniprogram_npm/@vant/weapp/col/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({relation:{name:"row",type:"ancestor",current:"col"},props:{span:Number,offset:Number},data:{viewStyle:""},methods:{setGutter:function(e){var t=e/2+"px",o=e?"padding-left: "+t+"; padding-right: "+t+";":"";o!==this.data.viewStyle&&this.setData({viewStyle:o})}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/col/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/collapse-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/collapse-item/index.js';	define("miniprogram_npm/@vant/weapp/collapse-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return new Promise(function(t){return setTimeout(t,20)})};require("../common/component").VantComponent({classes:["title-class","content-class"],relation:{name:"collapse",type:"ancestor",current:"collapse-item"},props:{name:null,title:null,value:null,icon:String,label:String,disabled:Boolean,clickable:Boolean,border:{type:Boolean,value:!0},isLink:{type:Boolean,value:!0}},data:{contentHeight:0,expanded:!1,transition:!1},mounted:function(){var e=this;this.updateExpanded().then(t).then(function(){var t={transition:!0};e.data.expanded&&(t.contentHeight="auto"),e.setData(t)})},methods:{updateExpanded:function(){if(!this.parent)return Promise.resolve();var t=this.parent.data,e=t.value,n=t.accordion,a=this.parent.children,i=void 0===a?[]:a,o=this.data.name,s=i.indexOf(this),r=null==o?s:o,l=n?e===r:(e||[]).some(function(t){return t===r}),u=[];return l!==this.data.expanded&&u.push(this.updateStyle(l)),u.push(this.set({index:s,expanded:l})),Promise.all(u)},updateStyle:function(e){var n=this;return this.getRect(".van-collapse-item__content").then(function(t){return t.height}).then(function(a){return e?n.set({contentHeight:a?a+"px":"auto"}):n.set({contentHeight:a+"px"}).then(t).then(function(){return n.set({contentHeight:0})})})},onClick:function(){if(!this.data.disabled){var t=this.data,e=t.name,n=t.expanded,a=this.parent.children.indexOf(this),i=null==e?a:e;this.parent.switch(i,!n)}},onTransitionEnd:function(){this.data.expanded&&this.setData({contentHeight:"auto"})}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/collapse-item/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/collapse/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/collapse/index.js';	define("miniprogram_npm/@vant/weapp/collapse/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({relation:{name:"collapse-item",type:"descendant",current:"collapse"},props:{value:{type:null,observer:"updateExpanded"},accordion:{type:Boolean,observer:"updateExpanded"},border:{type:Boolean,value:!0}},methods:{updateExpanded:function(){this.children.forEach(function(e){e.updateExpanded()})},switch:function(e,t){var n=this.data,o=n.accordion,a=n.value;e=o?t?e:"":t?(a||[]).concat(e):(a||[]).filter(function(t){return t!==e}),this.$emit("change",e),this.$emit("input",e)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/collapse/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/count-down/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/count-down/index.js';	define("miniprogram_npm/@vant/weapp/count-down/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return setTimeout(t,30)}Object.defineProperty(exports,"__esModule",{value:!0});var i=require("../common/component"),e=require("./utils");i.VantComponent({props:{useSlot:Boolean,millisecond:Boolean,time:{type:Number,observer:"reset"},format:{type:String,value:"HH:mm:ss"},autoStart:{type:Boolean,value:!0}},data:{timeData:e.parseTimeData(0),formattedTime:"0"},destroyed:function(){clearTimeout(this.tid),this.tid=null},methods:{start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,clearTimeout(this.tid)},reset:function(){this.pause(),this.remain=this.data.time,this.setRemain(this.remain),this.data.autoStart&&this.start()},tick:function(){this.data.millisecond?this.microTick():this.macroTick()},microTick:function(){var i=this;this.tid=t(function(){i.setRemain(i.getRemain()),0!==i.remain&&i.microTick()})},macroTick:function(){var i=this;this.tid=t(function(){var t=i.getRemain();e.isSameSecond(t,i.remain)&&0!==t||i.setRemain(t),0!==i.remain&&i.macroTick()})},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t;var i=e.parseTimeData(t);this.data.useSlot&&this.$emit("change",i),this.setData({formattedTime:e.parseFormat(this.data.format,i)}),0===t&&(this.pause(),this.$emit("finish"))}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/count-down/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/datetime-picker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/datetime-picker/index.js';	define("miniprogram_npm/@vant/weapp/datetime-picker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return l.isDef(e)&&!isNaN(new Date(e).getTime())}function t(e,t,n){return Math.min(Math.max(e,t),n)}function n(e){return("00"+e).slice(-2)}function a(e,t){for(var n=-1,a=Array(e<0?0:e);++n<e;)a[n]=t(n);return a}function r(e){if(e){for(;isNaN(parseInt(e,10));)e=e.slice(1);return parseInt(e,10)}}function u(e,t){return 32-new Date(e,t-1,32).getDate()}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)},o=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var a=Array(e),r=0,t=0;t<n;t++)for(var u=arguments[t],i=0,o=u.length;i<o;i++,r++)a[r]=u[i];return a};Object.defineProperty(exports,"__esModule",{value:!0});var s=require("../common/component"),l=require("../common/utils"),m=require("../picker/shared"),p=(new Date).getFullYear(),c=function(e,t){return t};s.VantComponent({classes:["active-class","toolbar-class","column-class"],props:i(i({},m.pickerProps),{value:{type:null,observer:"updateValue"},filter:null,type:{type:String,value:"datetime",observer:"updateValue"},showToolbar:{type:Boolean,value:!0},formatter:{type:null,value:c},minDate:{type:Number,value:new Date(p-10,0,1).getTime(),observer:"updateValue"},maxDate:{type:Number,value:new Date(p+10,11,31).getTime(),observer:"updateValue"},minHour:{type:Number,value:0,observer:"updateValue"},maxHour:{type:Number,value:23,observer:"updateValue"},minMinute:{type:Number,value:0,observer:"updateValue"},maxMinute:{type:Number,value:59,observer:"updateValue"}}),data:{innerValue:Date.now(),columns:[]},methods:{updateValue:function(){var e=this,t=this.data,n=this.correctValue(this.data.value);n===t.innerValue?this.updateColumns():this.updateColumnValue(n).then(function(){e.$emit("input",n)})},getPicker:function(){if(null==this.picker){this.picker=this.selectComponent(".van-datetime-picker");var e=this.picker,t=e.setColumnValues;e.setColumnValues=function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];return t.apply(e,o(n,[!1]))}}return this.picker},updateColumns:function(){var e=this.data.formatter,t=void 0===e?c:e,n=this.getOriginColumns().map(function(e){return{values:e.values.map(function(n){return t(e.type,n)})}});return this.set({columns:n})},getOriginColumns:function(){var e=this.data.filter;return this.getRanges().map(function(t){var r=t.type,u=t.range,i=a(u[1]-u[0]+1,function(e){var t=u[0]+e;return t="year"===r?""+t:n(t)});return e&&(i=e(r,i)),{type:r,values:i}})},getRanges:function(){var e=this.data;if("time"===e.type)return[{type:"hour",range:[e.minHour,e.maxHour]},{type:"minute",range:[e.minMinute,e.maxMinute]}];var t=this.getBoundary("max",e.innerValue),n=t.maxYear,a=t.maxDate,r=t.maxMonth,u=t.maxHour,i=t.maxMinute,o=this.getBoundary("min",e.innerValue),s=o.minYear,l=o.minDate,m=[{type:"year",range:[s,n]},{type:"month",range:[o.minMonth,r]},{type:"day",range:[l,a]},{type:"hour",range:[o.minHour,u]},{type:"minute",range:[o.minMinute,i]}];return"date"===e.type&&m.splice(3,2),"year-month"===e.type&&m.splice(2,3),m},correctValue:function(a){var r=this.data,u="time"!==r.type;if(u&&!e(a)?a=r.minDate:u||a||(a=n(r.minHour)+":00"),!u){var i=a.split(":"),o=i[0],s=i[1];return o=n(t(o,r.minHour,r.maxHour)),s=n(t(s,r.minMinute,r.maxMinute)),o+":"+s}return a=Math.max(a,r.minDate),a=Math.min(a,r.maxDate)},getBoundary:function(e,t){var n,a=new Date(t),r=new Date(this.data[e+"Date"]),i=r.getFullYear(),o=1,s=1,l=0,m=0;return"max"===e&&(o=12,s=u(a.getFullYear(),a.getMonth()+1),l=23,m=59),a.getFullYear()===i&&(o=r.getMonth()+1,a.getMonth()+1===o&&(s=r.getDate(),a.getDate()===s&&(l=r.getHours(),a.getHours()===l&&(m=r.getMinutes())))),n={},n[e+"Year"]=i,n[e+"Month"]=o,n[e+"Date"]=s,n[e+"Hour"]=l,n[e+"Minute"]=m,n},onCancel:function(){this.$emit("cancel")},onConfirm:function(){this.$emit("confirm",this.data.innerValue)},onChange:function(){var e,t=this,n=this.data,a=this.getPicker();if("time"===n.type){var i=a.getIndexes();e=+n.columns[0].values[i[0]]+":"+ +n.columns[1].values[i[1]]}else{var o=a.getValues(),s=r(o[0]),l=r(o[1]),m=u(s,l),p=r(o[2]);"year-month"===n.type&&(p=1),p=p>m?m:p;var c=0,h=0;"datetime"===n.type&&(c=r(o[3]),h=r(o[4])),e=new Date(s,l-1,p,c,h)}e=this.correctValue(e),this.updateColumnValue(e).then(function(){t.$emit("input",e),t.$emit("change",a)})},updateColumnValue:function(e){var t=this,a=[],r=this.data,u=r.type,i=r.formatter,o=void 0===i?c:i,s=this.getPicker();if("time"===u){var l=e.split(":");a=[o("hour",l[0]),o("minute",l[1])]}else{var m=new Date(e);a=[o("year",""+m.getFullYear()),o("month",n(m.getMonth()+1))],"date"===u&&a.push(o("day",n(m.getDate()))),"datetime"===u&&a.push(o("day",n(m.getDate())),o("hour",n(m.getHours())),o("minute",n(m.getMinutes())))}return this.set({innerValue:e}).then(function(){return t.updateColumns()}).then(function(){return s.setValues(a)})}},created:function(){var e=this,t=this.correctValue(this.data.value);this.updateColumnValue(t).then(function(){e.$emit("input",t)})}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/datetime-picker/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/dialog/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/dialog/index.js';	define("miniprogram_npm/@vant/weapp/dialog/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../common/component"),o=require("../mixins/button"),t=require("../mixins/open-type"),e=require("../common/color");n.VantComponent({mixins:[o.button,t.openType],props:{show:{type:Boolean,observer:function(n){!n&&this.stopLoading()}},title:String,message:String,useSlot:Boolean,className:String,customStyle:String,asyncClose:Boolean,messageAlign:String,overlayStyle:String,useTitleSlot:Boolean,showCancelButton:Boolean,closeOnClickOverlay:Boolean,confirmButtonOpenType:String,width:null,zIndex:{type:Number,value:2e3},confirmButtonText:{type:String,value:"确认"},cancelButtonText:{type:String,value:"取消"},confirmButtonColor:{type:String,value:e.BLUE},cancelButtonColor:{type:String,value:e.GRAY},showConfirmButton:{type:Boolean,value:!0},overlay:{type:Boolean,value:!0},transition:{type:String,value:"scale"}},data:{loading:{confirm:!1,cancel:!1}},methods:{onConfirm:function(){this.handleAction("confirm")},onCancel:function(){this.handleAction("cancel")},onClickOverlay:function(){this.onClose("overlay")},handleAction:function(n){var o;this.data.asyncClose&&this.setData((o={},o["loading."+n]=!0,o)),this.onClose(n)},close:function(){this.setData({show:!1})},stopLoading:function(){this.setData({loading:{confirm:!1,cancel:!1}})},onClose:function(n){this.data.asyncClose||this.close(),this.$emit("close",n),this.$emit(n,{dialog:this});var o=this.data["confirm"===n?"onConfirm":"onCancel"];o&&o(this)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/dialog/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/divider/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/divider/index.js';	define("miniprogram_npm/@vant/weapp/divider/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({props:{dashed:{type:Boolean,value:!1},hairline:{type:Boolean,value:!1},contentPosition:{type:String,value:""},fontSize:{type:Number,value:""},borderColor:{type:String,value:""},textColor:{type:String,value:""},customStyle:{type:String,value:""}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/divider/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/dropdown-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/dropdown-item/index.js';	define("miniprogram_npm/@vant/weapp/dropdown-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({field:!0,relation:{name:"dropdown-menu",type:"ancestor",current:"dropdown-item",linked:function(){this.updateDataFromParent()}},props:{value:{type:null,observer:"rerender"},title:{type:String,observer:"rerender"},disabled:Boolean,titleClass:{type:String,observer:"rerender"},options:{type:Array,value:[],observer:"rerender"},popupStyle:String},data:{transition:!0,showPopup:!1,showWrapper:!1,displayTitle:""},methods:{rerender:function(){var e=this;wx.nextTick(function(){e.parent&&e.parent.updateItemListData()})},updateDataFromParent:function(){if(this.parent){var e=this.parent.data,t=e.overlay,r=e.duration,n=e.activeColor,o=e.closeOnClickOverlay,a=e.direction;this.setData({overlay:t,duration:r,activeColor:n,closeOnClickOverlay:o,direction:a})}},onOpen:function(){this.$emit("open")},onOpened:function(){this.$emit("opened")},onClose:function(){this.$emit("close")},onClosed:function(){this.$emit("closed"),this.setData({showWrapper:!1})},onOptionTap:function(e){var t=e.currentTarget.dataset.option.value,r=this.data.value!==t;this.setData({showPopup:!1,value:t}),this.$emit("close"),this.rerender(),r&&this.$emit("change",t)},toggle:function(e,t){var r=this;void 0===t&&(t={});var n=this.data.showPopup;"boolean"!=typeof e&&(e=!n),e!==n&&(this.setData({transition:!t.immediate,showPopup:e}),e?this.parent.getChildWrapperStyle().then(function(e){r.setData({wrapperStyle:e,showWrapper:!0}),r.rerender()}):this.rerender())}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/dropdown-item/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/dropdown-menu/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/dropdown-menu/index.js';	define("miniprogram_npm/@vant/weapp/dropdown-menu/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),e=require("../common/utils"),n=[];t.VantComponent({field:!0,relation:{name:"dropdown-item",type:"descendant",current:"dropdown-menu",linked:function(){this.updateItemListData()},unlinked:function(){this.updateItemListData()}},props:{activeColor:{type:String,observer:"updateChildrenData"},overlay:{type:Boolean,value:!0,observer:"updateChildrenData"},zIndex:{type:Number,value:10},duration:{type:Number,value:200,observer:"updateChildrenData"},direction:{type:String,value:"down",observer:"updateChildrenData"},closeOnClickOverlay:{type:Boolean,value:!0,observer:"updateChildrenData"},closeOnClickOutside:{type:Boolean,value:!0}},data:{itemListData:[]},beforeCreate:function(){var t=wx.getSystemInfoSync().windowHeight;this.windowHeight=t,n.push(this)},destroyed:function(){var t=this;n=n.filter(function(e){return e!==t})},methods:{updateItemListData:function(){this.setData({itemListData:this.children.map(function(t){return t.data})})},updateChildrenData:function(){this.children.forEach(function(t){t.updateDataFromParent()})},toggleItem:function(t){this.children.forEach(function(e,n){var i=e.data.showPopup;n===t?e.toggle():i&&e.toggle(!1,{immediate:!0})})},close:function(){this.children.forEach(function(t){t.toggle(!1,{immediate:!0})})},getChildWrapperStyle:function(){var t=this,n=this.data,i=n.zIndex,a=n.direction;return this.getRect(".van-dropdown-menu").then(function(n){var o=n.top,r=void 0===o?0:o,d=n.bottom,u=void 0===d?0:d,l="down"===a?u:t.windowHeight-r,s="z-index: "+i+";";return s+="down"===a?"top: "+e.addUnit(l)+";":"bottom: "+e.addUnit(l)+";"})},onTitleTap:function(t){var e=this,i=t.currentTarget.dataset.index;this.children[i].data.disabled||(n.forEach(function(t){t&&t.data.closeOnClickOutside&&t!==e&&t.close()}),this.toggleItem(i))}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/dropdown-menu/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/field/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/field/index.js';	define("miniprogram_npm/@vant/weapp/field/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),t=require("../common/utils");e.VantComponent({field:!0,classes:["input-class","right-icon-class"],props:{size:String,icon:String,label:String,error:Boolean,fixed:Boolean,focus:Boolean,center:Boolean,isLink:Boolean,leftIcon:String,rightIcon:String,disabled:Boolean,autosize:Boolean,readonly:Boolean,required:Boolean,password:Boolean,iconClass:String,clearable:Boolean,clickable:Boolean,inputAlign:String,placeholder:String,customStyle:String,confirmType:String,confirmHold:Boolean,holdKeyboard:Boolean,errorMessage:String,arrowDirection:String,placeholderStyle:String,errorMessageAlign:String,selectionEnd:{type:Number,value:-1},selectionStart:{type:Number,value:-1},showConfirmBar:{type:Boolean,value:!0},adjustPosition:{type:Boolean,value:!0},cursorSpacing:{type:Number,value:50},maxlength:{type:Number,value:-1},type:{type:String,value:"text"},border:{type:Boolean,value:!0},titleWidth:{type:String,value:"90px"}},data:{focused:!1,system:t.getSystemInfoSync().system.split(" ").shift().toLowerCase()},methods:{onInput:function(e){var t=this,o=(e.detail||{}).value,n=void 0===o?"":o;this.setData({value:n}),wx.nextTick(function(){t.emitChange(n)})},onFocus:function(e){this.setData({focused:!0}),this.$emit("focus",e.detail)},onBlur:function(e){this.setData({focused:!1}),this.$emit("blur",e.detail)},onClickIcon:function(){this.$emit("click-icon")},onClear:function(){var e=this;this.setData({value:""}),wx.nextTick(function(){e.emitChange(""),e.$emit("clear","")})},onConfirm:function(){this.$emit("confirm",this.data.value)},emitChange:function(e){this.$emit("input",e),this.$emit("change",e)},noop:function(){}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/field/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/goods-action-button/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/goods-action-button/index.js';	define("miniprogram_npm/@vant/weapp/goods-action-button/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),e=require("../mixins/link"),n=require("../mixins/button"),i=require("../mixins/open-type");t.VantComponent({mixins:[e.link,n.button,i.openType],relation:{type:"ancestor",name:"goods-action",current:"goods-action-button"},props:{text:String,color:String,loading:Boolean,disabled:Boolean,plain:Boolean,type:{type:String,value:"danger"}},mounted:function(){this.updateStyle()},methods:{onClick:function(t){this.$emit("click",t.detail),this.jumpLink()},updateStyle:function(){var t=this.parent.children,e=void 0===t?[]:t,n=e.length,i=e.indexOf(this);this.setData({isFirst:0===i,isLast:i===n-1})}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/goods-action-button/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/goods-action-icon/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/goods-action-icon/index.js';	define("miniprogram_npm/@vant/weapp/goods-action-icon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),i=require("../mixins/link"),n=require("../mixins/button"),o=require("../mixins/open-type");e.VantComponent({classes:["icon-class","text-class"],mixins:[i.link,n.button,o.openType],props:{text:String,dot:Boolean,info:String,icon:String,disabled:Boolean,loading:Boolean},methods:{onClick:function(e){this.$emit("click",e.detail),this.jumpLink()}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/goods-action-icon/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/goods-action/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/goods-action/index.js';	define("miniprogram_npm/@vant/weapp/goods-action/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({relation:{type:"descendant",name:"goods-action-button",current:"goods-action"},props:{safeAreaInsetBottom:{type:Boolean,value:!0}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/goods-action/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/grid-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/grid-item/index.js';	define("miniprogram_npm/@vant/weapp/grid-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../mixins/link"),e=require("../common/component"),i=require("../common/utils");e.VantComponent({relation:{name:"grid",type:"ancestor",current:"grid-item"},mixins:[t.link],props:{icon:String,dot:Boolean,info:null,text:String,useSlot:Boolean},data:{viewStyle:""},mounted:function(){this.updateStyle()},methods:{updateStyle:function(){if(this.parent){var t=this.parent,e=t.data,n=t.children,r=e.columnNum,o=e.border,a=e.square,u=e.gutter,s=e.clickable,d=e.center,l=100/r+"%",c=[];if(c.push("width: "+l),a&&c.push("padding-top: "+l),u){var p=i.addUnit(u);c.push("padding-right: "+p),n.indexOf(this)>=r&&c.push("margin-top: "+p)}var h="";a&&u&&(h="\n          right: "+(p=i.addUnit(u))+";\n          bottom: "+p+";\n          height: auto;\n        "),this.setData({viewStyle:c.join("; "),contentStyle:h,center:d,border:o,square:a,gutter:u,clickable:s})}},onClick:function(){this.$emit("click"),this.jumpLink()}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/grid-item/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/grid/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/grid/index.js';	define("miniprogram_npm/@vant/weapp/grid/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),t=require("../common/utils");e.VantComponent({relation:{name:"grid-item",type:"descendant",current:"grid"},props:{square:{type:Boolean,observer:"updateChildren"},gutter:{type:[Number,String],value:0,observer:"updateChildren"},clickable:{type:Boolean,observer:"updateChildren"},columnNum:{type:Number,value:4,observer:"updateChildren"},center:{type:Boolean,value:!0,observer:"updateChildren"},border:{type:Boolean,value:!0,observer:"updateChildren"}},data:{viewStyle:""},created:function(){var e=this.data.gutter;e&&this.setData({viewStyle:"padding-left: "+t.addUnit(e)})},methods:{updateChildren:function(){this.children.forEach(function(e){e.updateStyle()})}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/grid/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/icon/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/icon/index.js';	define("miniprogram_npm/@vant/weapp/icon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({props:{dot:Boolean,info:null,size:null,color:String,customStyle:String,classPrefix:{type:String,value:"van-icon"},name:{type:String,observer:function(e){this.setData({isImageName:-1!==e.indexOf("/")})}}},methods:{onClick:function(){this.$emit("click")}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/icon/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/image/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/image/index.js';	define("miniprogram_npm/@vant/weapp/image/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/utils"),t=require("../common/component"),o=require("../mixins/button"),i=require("../mixins/open-type"),s={none:"center",fill:"scaleToFill",cover:"aspectFill",contain:"aspectFit"};t.VantComponent({mixins:[o.button,i.openType],classes:["custom-class","loading-class","error-class","image-class"],props:{src:{type:String,observer:function(){this.setData({error:!1,loading:!0})}},round:Boolean,width:{type:null,observer:"setStyle"},height:{type:null,observer:"setStyle"},radius:null,lazyLoad:Boolean,useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,fit:{type:String,value:"fill",observer:"setMode"},showError:{type:Boolean,value:!0},showLoading:{type:Boolean,value:!0}},data:{error:!1,loading:!0,viewStyle:""},mounted:function(){this.setMode(),this.setStyle()},methods:{setMode:function(){this.setData({mode:s[this.data.fit]})},setStyle:function(){var t=this.data,o=t.width,i=t.height,s=t.radius,n="";e.isDef(o)&&(n+="width: "+e.addUnit(o)+";"),e.isDef(i)&&(n+="height: "+e.addUnit(i)+";"),e.isDef(s)&&(n+="overflow: hidden;",n+="border-radius: "+e.addUnit(s)+";"),this.setData({viewStyle:n})},onLoad:function(e){this.setData({loading:!1}),this.$emit("load",e.detail)},onError:function(e){this.setData({loading:!1,error:!0}),this.$emit("error",e.detail)},onClick:function(e){this.$emit("click",e.detail)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/image/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/index-anchor/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/index-anchor/index.js';	define("miniprogram_npm/@vant/weapp/index-anchor/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({relation:{name:"index-bar",type:"ancestor",current:"index-anchor"},props:{useSlot:Boolean,index:null},data:{active:!1,wrapperStyle:"",anchorStyle:""}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/index-anchor/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/index-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/index-bar/index.js';	define("miniprogram_npm/@vant/weapp/index-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),e=require("../common/color");t.VantComponent({relation:{name:"index-anchor",type:"descendant",current:"index-bar",linked:function(){this.updateData()},linkChanged:function(){this.updateData()},unlinked:function(){this.updateData()}},props:{sticky:{type:Boolean,value:!0},zIndex:{type:Number,value:1},highlightColor:{type:String,value:e.GREEN},scrollTop:{type:Number,value:0,observer:"onScroll"},stickyOffsetTop:{type:Number,value:0},indexList:{type:Array,value:function(){for(var t=[],e="A".charCodeAt(0),n=0;n<26;n++)t.push(String.fromCharCode(e+n));return t}()}},data:{activeAnchorIndex:null,showSidebar:!1},methods:{updateData:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.children=t.getRelationNodes("../index-anchor/index"),t.setData({showSidebar:!!t.children.length}),t.setRect().then(function(){t.onScroll()})},0)},setRect:function(){return Promise.all([this.setAnchorsRect(),this.setListRect(),this.setSiderbarRect()])},setAnchorsRect:function(){var t=this;return Promise.all(this.children.map(function(e){return e.getRect(".van-index-anchor-wrapper").then(function(n){Object.assign(e,{height:n.height,top:n.top+t.data.scrollTop})})}))},setListRect:function(){var t=this;return this.getRect(".van-index-bar").then(function(e){Object.assign(t,{height:e.height,top:e.top+t.data.scrollTop})})},setSiderbarRect:function(){var t=this;return this.getRect(".van-index-bar__sidebar").then(function(e){t.sidebar={height:e.height,top:e.top}})},setDiffData:function(t){var e=t.target,n=t.data,i={};Object.keys(n).forEach(function(t){e.data[t]!==n[t]&&(i[t]=n[t])}),Object.keys(i).length&&e.setData(i)},getAnchorRect:function(t){return t.getRect(".van-index-anchor-wrapper").then(function(t){return{height:t.height,top:t.top}})},getActiveAnchorIndex:function(){for(var t=this.children,e=this.data,n=e.sticky,i=e.scrollTop,o=e.stickyOffsetTop,r=this.children.length-1;r>=0;r--){var a=r>0?t[r-1].height:0;if((n?a+o:0)+i>=t[r].top)return r}return-1},onScroll:function(){var t=this,e=this.children,n=void 0===e?[]:e;if(n.length){var i=this.data,o=i.sticky,r=i.stickyOffsetTop,a=i.zIndex,c=i.highlightColor,h=i.scrollTop,s=this.getActiveAnchorIndex();if(this.setDiffData({target:this,data:{activeAnchorIndex:s}}),o){var l=!1;-1!==s&&(l=n[s].top<=r+h),n.forEach(function(e,i){if(i===s){var o="",h="\n              color: "+c+";\n            ";l&&(o="\n                height: "+n[i].height+"px;\n              ",h="\n                position: fixed;\n                top: "+r+"px;\n                z-index: "+a+";\n                color: "+c+";\n              "),t.setDiffData({target:e,data:{active:!0,anchorStyle:h,wrapperStyle:o}})}else if(i===s-1){var d=n[i],u=d.top,h="\n              position: relative;\n              transform: translate3d(0, "+((i===n.length-1?t.top:n[i+1].top)-u-d.height)+"px, 0);\n              z-index: "+a+";\n              color: "+c+";\n            ";t.setDiffData({target:e,data:{active:!0,anchorStyle:h}})}else t.setDiffData({target:e,data:{active:!1,anchorStyle:"",wrapperStyle:""}})})}}},onClick:function(t){this.scrollToAnchor(t.target.dataset.index)},onTouchMove:function(t){var e=this.children.length,n=t.touches[0],i=this.sidebar.height/e,o=Math.floor((n.clientY-this.sidebar.top)/i);o<0?o=0:o>e-1&&(o=e-1),this.scrollToAnchor(o)},onTouchStop:function(){this.scrollToAnchorIndex=null},scrollToAnchor:function(t){var e=this;if("number"==typeof t&&this.scrollToAnchorIndex!==t){this.scrollToAnchorIndex=t;var n=this.children.find(function(n){return n.data.index===e.data.indexList[t]});n&&(this.$emit("select",n.data.index),wx.pageScrollTo({duration:0,scrollTop:n.top}))}}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/index-bar/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/info/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/info/index.js';	define("miniprogram_npm/@vant/weapp/info/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({props:{dot:Boolean,info:null,customStyle:String}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/info/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/loading/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/loading/index.js';	define("miniprogram_npm/@vant/weapp/loading/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({props:{color:String,vertical:Boolean,type:{type:String,value:"circular"},size:String,textSize:String},data:{array12:Array.from({length:12})}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/loading/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/nav-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/nav-bar/index.js';	define("miniprogram_npm/@vant/weapp/nav-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({classes:["title-class"],props:{title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,value:!0},zIndex:{type:Number,value:1},safeAreaInsetTop:{type:Boolean,value:!0}},data:{statusBarHeight:0},created:function(){var t=wx.getSystemInfoSync().statusBarHeight;this.setData({statusBarHeight:t})},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/nav-bar/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/notice-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/notice-bar/index.js';	define("miniprogram_npm/@vant/weapp/notice-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});require("../common/component").VantComponent({props:{text:{type:String,value:"",observer:function(){var t=this;wx.nextTick(function(){t.init()})}},mode:{type:String,value:""},url:{type:String,value:""},openType:{type:String,value:"navigate"},delay:{type:Number,value:1},speed:{type:Number,value:50,observer:function(){var t=this;wx.nextTick(function(){t.init()})}},scrollable:{type:Boolean,value:!0},leftIcon:{type:String,value:""},color:{type:String,value:"#ed6a0c"},backgroundColor:{type:String,value:"#fffbe8"},wrapable:Boolean},data:{show:!0},created:function(){this.resetAnimation=wx.createAnimation({duration:0,timingFunction:"linear"})},destroyed:function(){this.timer&&clearTimeout(this.timer)},methods:{init:function(){var t=this;Promise.all([this.getRect(".van-notice-bar__content"),this.getRect(".van-notice-bar__wrap")]).then(function(e){var i=e[0],n=e[1];if(null!=i&&null!=n&&i.width&&n.width){var a=t.data,o=a.speed,r=a.scrollable,l=a.delay;if(r&&n.width<i.width){var s=i.width/o*1e3;t.wrapWidth=n.width,t.contentWidth=i.width,t.duration=s,t.animation=wx.createAnimation({duration:s,timingFunction:"linear",delay:l}),t.scroll()}}})},scroll:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=null,this.setData({animationData:this.resetAnimation.translateX(this.wrapWidth).step().export()}),setTimeout(function(){t.setData({animationData:t.animation.translateX(-t.contentWidth).step().export()})},20),this.timer=setTimeout(function(){t.scroll()},this.duration)},onClickIcon:function(){this.timer&&clearTimeout(this.timer),this.timer=null,this.setData({show:!1})},onClick:function(t){this.$emit("click",t)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/notice-bar/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/notify/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/notify/index.js';	define("miniprogram_npm/@vant/weapp/notify/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),e=require("../common/color");t.VantComponent({props:{message:String,background:String,type:{type:String,value:"danger"},color:{type:String,value:e.WHITE},duration:{type:Number,value:3e3},zIndex:{type:Number,value:110},safeAreaInsetTop:{type:Boolean,value:!1}},data:{show:!1},created:function(){var t=wx.getSystemInfoSync().statusBarHeight;this.setData({statusBarHeight:t})},methods:{show:function(){var t=this,e=this.data,a=e.duration,o=e.onOpened;clearTimeout(this.timer),this.setData({show:!0}),wx.nextTick(o),a>0&&a!==1/0&&(this.timer=setTimeout(function(){t.hide()},a))},hide:function(){var t=this.data.onClose;clearTimeout(this.timer),this.setData({show:!1}),wx.nextTick(t)},onTap:function(t){var e=this.data.onClick;e&&e(t.detail)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/notify/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/overlay/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/overlay/index.js';	define("miniprogram_npm/@vant/weapp/overlay/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({props:{show:Boolean,customStyle:String,duration:{type:null,value:300},zIndex:{type:Number,value:1}},methods:{onClick:function(){this.$emit("click")},noop:function(){}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/overlay/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/panel/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/panel/index.js';	define("miniprogram_npm/@vant/weapp/panel/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({classes:["header-class","footer-class"],props:{desc:String,title:String,status:String,useFooterSlot:Boolean}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/panel/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/picker-column/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/picker-column/index.js';	define("miniprogram_npm/@vant/weapp/picker-column/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),e=require("../common/utils");t.VantComponent({classes:["active-class"],props:{valueKey:String,className:String,itemHeight:Number,visibleItemCount:Number,initialOptions:{type:Array,value:[]},defaultIndex:{type:Number,value:0,observer:function(t){this.setIndex(t)}}},data:{startY:0,offset:0,duration:0,startOffset:0,options:[],currentIndex:0},created:function(){var t=this,e=this.data,n=e.defaultIndex,i=e.initialOptions;this.set({currentIndex:n,options:i}).then(function(){t.setIndex(n)})},methods:{getCount:function(){return this.data.options.length},onTouchStart:function(t){this.setData({startY:t.touches[0].clientY,startOffset:this.data.offset,duration:0})},onTouchMove:function(t){var n=this.data,i=t.touches[0].clientY-n.startY;this.setData({offset:e.range(n.startOffset+i,-this.getCount()*n.itemHeight,n.itemHeight)})},onTouchEnd:function(){var t=this.data;if(t.offset!==t.startOffset){this.setData({duration:200});var n=e.range(Math.round(-t.offset/t.itemHeight),0,this.getCount()-1);this.setIndex(n,!0)}},onClickItem:function(t){var e=t.currentTarget.dataset.index;this.setIndex(e,!0)},adjustIndex:function(t){for(var n=this.data,i=this.getCount(),s=t=e.range(t,0,i);s<i;s++)if(!this.isDisabled(n.options[s]))return s;for(s=t-1;s>=0;s--)if(!this.isDisabled(n.options[s]))return s},isDisabled:function(t){return e.isObj(t)&&t.disabled},getOptionText:function(t){var n=this.data;return e.isObj(t)&&n.valueKey in t?t[n.valueKey]:t},setIndex:function(t,e){var n=this,i=this.data,s=-(t=this.adjustIndex(t)||0)*i.itemHeight;return t!==i.currentIndex?this.set({offset:s,currentIndex:t}).then(function(){e&&n.$emit("change",t)}):this.set({offset:s})},setValue:function(t){for(var e=this.data.options,n=0;n<e.length;n++)if(this.getOptionText(e[n])===t)return this.setIndex(n);return Promise.resolve()},getValue:function(){var t=this.data;return t.options[t.currentIndex]}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/picker-column/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/picker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/picker/index.js';	define("miniprogram_npm/@vant/weapp/picker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),n=require("./shared");t.VantComponent({classes:["active-class","toolbar-class","column-class"],props:e(e({},n.pickerProps),{valueKey:{type:String,value:"text"},toolbarPosition:{type:String,value:"top"},defaultIndex:{type:Number,value:0},columns:{type:Array,value:[],observer:function(e){void 0===e&&(e=[]),this.simple=e.length&&!e[0].values,this.children=this.selectAllComponents(".van-picker__column"),Array.isArray(this.children)&&this.children.length&&this.setColumns().catch(function(){})}}}),beforeCreate:function(){this.children=[]},methods:{noop:function(){},setColumns:function(){var e=this,t=this.data,n=(this.simple?[{values:t.columns}]:t.columns).map(function(t,n){return e.setColumnValues(n,t.values)});return Promise.all(n)},emit:function(e){var t=e.currentTarget.dataset.type;this.simple?this.$emit(t,{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit(t,{value:this.getValues(),index:this.getIndexes()})},onChange:function(e){this.simple?this.$emit("change",{picker:this,value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit("change",{picker:this,value:this.getValues(),index:e.currentTarget.dataset.index})},getColumn:function(e){return this.children[e]},getColumnValue:function(e){var t=this.getColumn(e);return t&&t.getValue()},setColumnValue:function(e,t){var n=this.getColumn(e);return null==n?Promise.reject(new Error("setColumnValue: 对应列不存在")):n.setValue(t)},getColumnIndex:function(e){return(this.getColumn(e)||{}).data.currentIndex},setColumnIndex:function(e,t){var n=this.getColumn(e);return null==n?Promise.reject(new Error("setColumnIndex: 对应列不存在")):n.setIndex(t)},getColumnValues:function(e){return(this.children[e]||{}).data.options},setColumnValues:function(e,t,n){void 0===n&&(n=!0);var r=this.children[e];return null==r?Promise.reject(new Error("setColumnValues: 对应列不存在")):JSON.stringify(r.data.options)===JSON.stringify(t)?Promise.resolve():r.set({options:t}).then(function(){n&&r.setIndex(0)})},getValues:function(){return this.children.map(function(e){return e.getValue()})},setValues:function(e){var t=this,n=e.map(function(e,n){return t.setColumnValue(n,e)});return Promise.all(n)},getIndexes:function(){return this.children.map(function(e){return e.data.currentIndex})},setIndexes:function(e){var t=this,n=e.map(function(e,n){return t.setColumnIndex(n,e)});return Promise.all(n)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/picker/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/popup/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/popup/index.js';	define("miniprogram_npm/@vant/weapp/popup/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),t=require("../mixins/transition");e.VantComponent({classes:["enter-class","enter-active-class","enter-to-class","leave-class","leave-active-class","leave-to-class"],mixins:[t.transition(!1)],props:{round:Boolean,closeable:Boolean,customStyle:String,overlayStyle:String,transition:{type:String,observer:"observeClass"},zIndex:{type:Number,value:100},overlay:{type:Boolean,value:!0},closeIcon:{type:String,value:"cross"},closeIconPosition:{type:String,value:"top-right"},closeOnClickOverlay:{type:Boolean,value:!0},position:{type:String,value:"center",observer:"observeClass"},safeAreaInsetBottom:{type:Boolean,value:!0},safeAreaInsetTop:{type:Boolean,value:!1}},created:function(){this.observeClass()},methods:{onClickCloseIcon:function(){this.$emit("close")},onClickOverlay:function(){this.$emit("click-overlay"),this.data.closeOnClickOverlay&&this.$emit("close")},observeClass:function(){var e=this.data,t=e.transition,o=e.position,s={name:t||o};"none"===t&&(s.duration=0),this.setData(s)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/popup/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/progress/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/progress/index.js';	define("miniprogram_npm/@vant/weapp/progress/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),o=require("../common/color");e.VantComponent({props:{inactive:Boolean,percentage:Number,pivotText:String,pivotColor:String,trackColor:String,showPivot:{type:Boolean,value:!0},color:{type:String,value:o.BLUE},textColor:{type:String,value:"#fff"},strokeWidth:{type:null,value:4}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/progress/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/radio-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/radio-group/index.js';	define("miniprogram_npm/@vant/weapp/radio-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({field:!0,relation:{name:"radio",type:"descendant",current:"radio-group",linked:function(e){this.updateChild(e)}},props:{value:{type:null,observer:"updateChildren"},disabled:{type:Boolean,observer:"updateChildren"}},methods:{updateChildren:function(){var e=this;(this.children||[]).forEach(function(t){return e.updateChild(t)})},updateChild:function(e){var t=this.data,d=t.value,a=t.disabled;e.setData({value:d,disabled:a||e.data.disabled})}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/radio-group/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/radio/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/radio/index.js';	define("miniprogram_npm/@vant/weapp/radio/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({field:!0,relation:{name:"radio-group",type:"ancestor",current:"radio"},classes:["icon-class","label-class"],props:{name:null,value:null,disabled:Boolean,useIconSlot:Boolean,checkedColor:String,labelPosition:{type:String,value:"right"},labelDisabled:Boolean,shape:{type:String,value:"round"},iconSize:{type:null,value:20}},methods:{emitChange:function(e){var a=this.parent||this;a.$emit("input",e),a.$emit("change",e)},onChange:function(){this.data.disabled||this.emitChange(this.data.name)},onClickLabel:function(){var e=this.data,a=e.disabled,n=e.labelDisabled,t=e.name;a||n||this.emitChange(t)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/radio/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/rate/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/rate/index.js';	define("miniprogram_npm/@vant/weapp/rate/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({field:!0,classes:["icon-class"],props:{value:{type:Number,observer:function(e){e!==this.data.innerValue&&this.setData({innerValue:e})}},readonly:Boolean,disabled:Boolean,allowHalf:Boolean,size:null,icon:{type:String,value:"star"},voidIcon:{type:String,value:"star-o"},color:{type:String,value:"#ffd21e"},voidColor:{type:String,value:"#c7c7c7"},disabledColor:{type:String,value:"#bdbdbd"},count:{type:Number,value:5,observer:function(e){this.setData({innerCountArray:Array.from({length:e})})}},gutter:null,touchable:{type:Boolean,value:!0}},data:{innerValue:0,innerCountArray:Array.from({length:5})},methods:{onSelect:function(e){var t=this.data,n=e.currentTarget.dataset.score;t.disabled||t.readonly||(this.setData({innerValue:n+1}),this.$emit("input",n+1),this.$emit("change",n+1))},onTouchMove:function(t){var n=this;if(this.data.touchable){var r=t.touches[0].clientX;this.getRect(".van-rate__icon",!0).then(function(a){var o=a.sort(function(e){return e.right-e.left}).find(function(e){return r>=e.left&&r<=e.right});null!=o&&n.onSelect(e(e({},t),{currentTarget:o}))})}}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/rate/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/row/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/row/index.js';	define("miniprogram_npm/@vant/weapp/row/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({relation:{name:"col",type:"descendant",current:"row",linked:function(t){this.data.gutter&&t.setGutter(this.data.gutter)}},props:{gutter:{type:Number,observer:"setGutter"}},data:{viewStyle:""},mounted:function(){this.data.gutter&&this.setGutter()},methods:{setGutter:function(){var t=this,e=this.data.gutter,r="-"+Number(e)/2+"px",n=e?"margin-right: "+r+"; margin-left: "+r+";":"";this.setData({viewStyle:n}),this.getRelationNodes("../col/index").forEach(function(e){e.setGutter(t.data.gutter)})}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/row/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/search/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/search/index.js';	define("miniprogram_npm/@vant/weapp/search/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({field:!0,classes:["field-class","input-class","cancel-class"],props:{label:String,focus:Boolean,error:Boolean,disabled:Boolean,readonly:Boolean,inputAlign:String,showAction:Boolean,useActionSlot:Boolean,useLeftIconSlot:Boolean,useRightIconSlot:Boolean,leftIcon:{type:String,value:"search"},rightIcon:String,placeholder:String,placeholderStyle:String,actionText:{type:String,value:"取消"},background:{type:String,value:"#ffffff"},maxlength:{type:Number,value:-1},shape:{type:String,value:"square"},clearable:{type:Boolean,value:!0}},methods:{onChange:function(e){this.setData({value:e.detail}),this.$emit("change",e.detail)},onCancel:function(){var e=this;setTimeout(function(){e.setData({value:""}),e.$emit("cancel"),e.$emit("change","")},200)},onSearch:function(){this.$emit("search",this.data.value)},onFocus:function(){this.$emit("focus")},onBlur:function(){this.$emit("blur")},onClear:function(){this.$emit("clear")}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/search/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/sidebar-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/sidebar-item/index.js';	define("miniprogram_npm/@vant/weapp/sidebar-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({classes:["active-class","disabled-class"],relation:{type:"ancestor",name:"sidebar",current:"sidebar-item"},props:{dot:Boolean,info:null,title:String,disabled:Boolean},methods:{onClick:function(){var e=this,t=this.parent;if(t&&!this.data.disabled){var i=t.children.indexOf(this);t.setActive(i).then(function(){e.$emit("click",i),t.$emit("change",i)})}},setActive:function(e){return this.setData({selected:e})}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/sidebar-item/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/sidebar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/sidebar/index.js';	define("miniprogram_npm/@vant/weapp/sidebar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({relation:{name:"sidebar-item",type:"descendant",current:"sidebar",linked:function(){this.setActive(this.data.activeKey)},unlinked:function(){this.setActive(this.data.activeKey)}},props:{activeKey:{type:Number,value:0,observer:"setActive"}},beforeCreate:function(){this.currentActive=-1},methods:{setActive:function(e){var t=this,i=t.children,r=t.currentActive;if(!i.length)return Promise.resolve();this.currentActive=e;var n=[];return r!==e&&i[r]&&n.push(i[r].setActive(!1)),i[e]&&n.push(i[e].setActive(!0)),Promise.all(n)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/sidebar/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/skeleton/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/skeleton/index.js';	define("miniprogram_npm/@vant/weapp/skeleton/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({classes:["avatar-class","title-class","row-class"],props:{row:{type:Number,value:0,observer:function(e){this.setData({rowArray:Array.from({length:e})})}},title:Boolean,avatar:Boolean,loading:{type:Boolean,value:!0},animate:{type:Boolean,value:!0},avatarSize:{type:String,value:"32px"},avatarShape:{type:String,value:"round"},titleWidth:{type:String,value:"40%"},rowWidth:{type:null,value:"100%",observer:function(e){this.setData({isArray:e instanceof Array})}}},data:{isArray:!1,rowArray:[]}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/skeleton/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/slider/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/slider/index.js';	define("miniprogram_npm/@vant/weapp/slider/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),a=require("../mixins/touch"),e=require("../common/utils");t.VantComponent({mixins:[a.touch],props:{disabled:Boolean,useButtonSlot:Boolean,activeColor:String,inactiveColor:String,max:{type:Number,value:100},min:{type:Number,value:0},step:{type:Number,value:1},value:{type:Number,value:0,observer:function(t){this.updateValue(t,!1)}},barHeight:{type:null,value:"2px"}},created:function(){this.updateValue(this.data.value)},methods:{onTouchStart:function(t){this.data.disabled||(this.touchStart(t),this.startValue=this.format(this.data.value),this.dragStatus="start")},onTouchMove:function(t){var a=this;this.data.disabled||("start"===this.dragStatus&&this.$emit("drag-start"),this.touchMove(t),this.dragStatus="draging",this.getRect(".van-slider").then(function(t){var e=a.deltaX/t.width*100;a.newValue=a.startValue+e,a.updateValue(a.newValue,!1,!0)}))},onTouchEnd:function(){this.data.disabled||"draging"===this.dragStatus&&(this.updateValue(this.newValue,!0),this.$emit("drag-end"))},onClick:function(t){var a=this;if(!this.data.disabled){var e=this.data.min;this.getRect(".van-slider").then(function(i){var n=(t.detail.x-i.left)/i.width*a.getRange()+e;a.updateValue(n,!0)})}},updateValue:function(t,a,i){t=this.format(t);var n=this.data,u=n.barHeight,s=100*(t-n.min)/this.getRange()+"%";this.setData({value:t,barStyle:"\n          width: "+s+";\n          height: "+e.addUnit(u)+";\n          "+(i?"transition: none;":"")+"\n        "}),i&&this.$emit("drag",{value:t}),a&&this.$emit("change",t)},getRange:function(){var t=this.data;return t.max-t.min},format:function(t){var a=this.data,e=a.max,i=a.min,n=a.step;return Math.round(Math.max(i,Math.min(t,e))/n)*n}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/slider/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/stepper/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/stepper/index.js';	define("miniprogram_npm/@vant/weapp/stepper/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){var a=Math.pow(10,10);return Math.round((t+e)*a)/a}Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),a=require("../common/utils");e.VantComponent({field:!0,classes:["input-class","plus-class","minus-class"],props:{value:{type:null,observer:function(t){if(""!==t){var e=this.range(t);"number"==typeof e&&+this.data.value!==e&&this.setData({value:e})}}},integer:Boolean,disabled:Boolean,inputWidth:{type:null,observer:function(){this.setData({inputStyle:this.computeInputStyle()})}},buttonSize:{type:null,observer:function(){this.setData({inputStyle:this.computeInputStyle(),buttonStyle:this.computeButtonStyle()})}},asyncChange:Boolean,disableInput:Boolean,decimalLength:{type:Number,value:null},min:{type:null,value:1},max:{type:null,value:Number.MAX_SAFE_INTEGER},step:{type:null,value:1},showPlus:{type:Boolean,value:!0},showMinus:{type:Boolean,value:!0},disablePlus:Boolean,disableMinus:Boolean,longPress:{type:Boolean,value:!0}},data:{focus:!1,inputStyle:"",buttonStyle:""},created:function(){this.setData({value:this.range(this.data.value)})},methods:{isDisabled:function(t){return"plus"===t?this.data.disabled||this.data.disablePlus||this.data.value>=this.data.max:this.data.disabled||this.data.disableMinus||this.data.value<=this.data.min},onFocus:function(t){this.$emit("focus",t.detail)},onBlur:function(t){var e=this.range(this.data.value);this.triggerInput(e),this.$emit("blur",t.detail)},range:function(t){return t=String(t).replace(/[^0-9.-]/g,""),t=""===t?0:+t,t=Math.max(Math.min(this.data.max,t),this.data.min),a.isDef(this.data.decimalLength)&&(t=t.toFixed(this.data.decimalLength)),t},onInput:function(t){var e=(t.detail||{}).value,a=void 0===e?"":e;this.triggerInput(a)},onChange:function(){var e=this.type;if(this.isDisabled(e))this.$emit("overlimit",e);else{var a="minus"===e?-this.data.step:+this.data.step,i=t(+this.data.value,a);this.triggerInput(this.range(i)),this.$emit(e)}},longPressStep:function(){var t=this;this.longPressTimer=setTimeout(function(){t.onChange(),t.longPressStep()},200)},onTap:function(t){var e=t.currentTarget.dataset.type;this.type=e,this.onChange()},onTouchStart:function(t){var e=this;if(this.data.longPress){clearTimeout(this.longPressTimer);var a=t.currentTarget.dataset.type;this.type=a,this.isLongPress=!1,this.longPressTimer=setTimeout(function(){e.isLongPress=!0,e.onChange(),e.longPressStep()},600)}},onTouchEnd:function(){this.data.longPress&&clearTimeout(this.longPressTimer)},triggerInput:function(t){this.setData({value:this.data.asyncChange?this.data.value:t}),this.$emit("change",t)},computeInputStyle:function(){var t="";return this.data.inputWidth&&(t="width: "+a.addUnit(this.data.inputWidth)+";"),this.data.buttonSize&&(t+="height: "+a.addUnit(this.data.buttonSize)+";"),t},computeButtonStyle:function(){var t="",e=a.addUnit(this.data.buttonSize);return this.data.buttonSize&&(t="width: "+e+";height: "+e+";"),t}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/stepper/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/steps/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/steps/index.js';	define("miniprogram_npm/@vant/weapp/steps/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),t=require("../common/color");e.VantComponent({classes:["desc-class"],props:{icon:String,steps:Array,active:Number,direction:{type:String,value:"horizontal"},activeColor:{type:String,value:t.GREEN},inactiveColor:{type:String,value:t.GRAY_DARK},activeIcon:{type:String,value:"checked"},inactiveIcon:String}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/steps/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/sticky/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/sticky/index.js';	define("miniprogram_npm/@vant/weapp/sticky/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});require("../common/component").VantComponent({props:{zIndex:{type:Number,value:99},offsetTop:{type:Number,value:0,observer:"observeContent"},disabled:{type:Boolean,observer:function(e){this.mounted&&(e?this.disconnectObserver():this.initObserver())}},container:{type:null,observer:function(e){"function"==typeof e&&this.data.height&&(this.observeContainer(),this.updateFixed())}}},data:{height:0,fixed:!1},methods:{getContainerRect:function(){var e=this.data.container();return new Promise(function(t){return e.boundingClientRect(t).exec()})},initObserver:function(){var e=this;this.disconnectObserver(),this.getRect(".van-sticky").then(function(t){e.setData({height:t.height}),wx.nextTick(function(){e.observeContent(),e.observeContainer()})})},updateFixed:function(){var e=this;Promise.all([this.getRect(".van-sticky"),this.getContainerRect()]).then(function(t){var n=t[0],i=t[1];e.setData({height:n.height}),e.containerHeight=i.height,wx.nextTick(function(){e.setFixed(n.top)})})},disconnectObserver:function(e){if(e){var t=this[e];t&&t.disconnect()}else this.contentObserver&&this.contentObserver.disconnect(),this.containerObserver&&this.containerObserver.disconnect()},observeContent:function(){var e=this,t=this.data.offsetTop;this.disconnectObserver("contentObserver");var n=this.createIntersectionObserver({thresholds:[.9,1]});n.relativeToViewport({top:-t}),n.observe(".van-sticky",function(t){e.data.disabled||e.setFixed(t.boundingClientRect.top)}),this.contentObserver=n},observeContainer:function(){var e=this;if("function"==typeof this.data.container){var t=this.data.height;this.getContainerRect().then(function(n){e.containerHeight=n.height,e.disconnectObserver("containerObserver");var i=e.createIntersectionObserver({thresholds:[.9,1]});e.containerObserver=i,i.relativeToViewport({top:e.containerHeight-t}),i.observe(".van-sticky",function(t){e.data.disabled||e.setFixed(t.boundingClientRect.top)})})}},setFixed:function(e){var t=this.data,n=t.offsetTop,i=t.height,o=this.containerHeight,s=o&&i?e>=i-o&&e<n:e<n;this.$emit("scroll",{scrollTop:e,isFixed:s}),this.setData({fixed:s})}},mounted:function(){this.mounted=!0,this.data.disabled||this.initObserver()},destroyed:function(){this.disconnectObserver()}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/sticky/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/submit-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/submit-bar/index.js';	define("miniprogram_npm/@vant/weapp/submit-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({classes:["bar-class","price-class","button-class"],props:{tip:{type:null,observer:"updateTip"},tipIcon:String,type:Number,price:{type:null,observer:"updatePrice"},label:String,loading:Boolean,disabled:Boolean,buttonText:String,currency:{type:String,value:"¥"},buttonType:{type:String,value:"danger"},decimalLength:{type:Number,value:2,observer:"updatePrice"},suffixLabel:String,safeAreaInsetBottom:{type:Boolean,value:!0}},methods:{updatePrice:function(){var e=this.data,t=e.price,i=e.decimalLength,a="number"==typeof t&&(t/100).toFixed(i).split(".");this.setData({hasPrice:"number"==typeof t,integerStr:a&&a[0],decimalStr:i&&a?"."+a[1]:""})},updateTip:function(){this.setData({hasTip:"string"==typeof this.data.tip})},onSubmit:function(e){this.$emit("submit",e.detail)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/submit-bar/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/swipe-cell/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/swipe-cell/index.js';	define("miniprogram_npm/@vant/weapp/swipe-cell/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),i=require("../mixins/touch"),e=require("../common/utils"),s=[];t.VantComponent({props:{disabled:Boolean,leftWidth:{type:Number,value:0,observer:function(t){void 0===t&&(t=0),this.offset>0&&this.swipeMove(t)}},rightWidth:{type:Number,value:0,observer:function(t){void 0===t&&(t=0),this.offset<0&&this.swipeMove(-t)}},asyncClose:Boolean,name:{type:[Number,String],value:""}},mixins:[i.touch],data:{catchMove:!1},created:function(){this.offset=0,s.push(this)},destroyed:function(){var t=this;s=s.filter(function(i){return i!==t})},methods:{open:function(t){var i=this.data,e=i.leftWidth,s=i.rightWidth,o="left"===t?e:-s;this.swipeMove(o),this.$emit("open",{position:t,name:this.data.name})},close:function(){this.swipeMove(0)},swipeMove:function(t){void 0===t&&(t=0),this.offset=e.range(t,-this.data.rightWidth,this.data.leftWidth);var i="translate3d("+this.offset+"px, 0, 0)",s=this.dragging?"none":"transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)";this.setData({wrapperStyle:"\n        -webkit-transform: "+i+";\n        -webkit-transition: "+s+";\n        transform: "+i+";\n        transition: "+s+";\n      "})},swipeLeaveTransition:function(){var t=this.data,i=t.leftWidth,e=t.rightWidth,s=this.offset;e>0&&-s>.3*e?this.open("right"):i>0&&s>.3*i?this.open("left"):this.swipeMove(0),this.setData({catchMove:!1})},startDrag:function(t){this.data.disabled||(this.startOffset=this.offset,this.touchStart(t))},noop:function(){},onDrag:function(t){var i=this;this.data.disabled||(this.touchMove(t),"horizontal"===this.direction&&(this.dragging=!0,s.filter(function(t){return t!==i}).forEach(function(t){return t.close()}),this.setData({catchMove:!0}),this.swipeMove(this.startOffset+this.deltaX)))},endDrag:function(){this.data.disabled||(this.dragging=!1,this.swipeLeaveTransition())},onClick:function(t){var i=t.currentTarget.dataset.key,e=void 0===i?"outside":i;this.$emit("click",e),this.offset&&(this.data.asyncClose?this.$emit("close",{position:e,instance:this,name:this.data.name}):this.swipeMove(0))}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/swipe-cell/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/switch/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/switch/index.js';	define("miniprogram_npm/@vant/weapp/switch/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),t=require("../common/color");e.VantComponent({field:!0,classes:["node-class"],props:{checked:{type:null,observer:function(e){var t=this.getLoadingColor(e);this.setData({value:e,loadingColor:t})}},loading:Boolean,disabled:Boolean,activeColor:String,inactiveColor:String,size:{type:String,value:"30px"},activeValue:{type:null,value:!0},inactiveValue:{type:null,value:!1}},created:function(){var e=this.data.checked,t=this.getLoadingColor(e);this.setData({value:e,loadingColor:t})},methods:{getLoadingColor:function(e){var a=this.data,i=a.activeColor,o=a.inactiveColor;return e?i||t.BLUE:o||t.GRAY_DARK},onClick:function(){var e=this.data,t=e.activeValue,a=e.inactiveValue;if(!this.data.disabled&&!this.data.loading){var i=this.data.checked===t?a:t;this.$emit("input",i),this.$emit("change",i)}}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/switch/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/tab/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/tab/index.js';	define("miniprogram_npm/@vant/weapp/tab/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({relation:{name:"tabs",type:"ancestor",current:"tab"},props:{dot:{type:Boolean,observer:"update"},info:{type:null,observer:"update"},title:{type:String,observer:"update"},disabled:{type:Boolean,observer:"update"},titleStyle:{type:String,observer:"update"},name:{type:[Number,String],value:""}},data:{active:!1},methods:{getComputedName:function(){return""!==this.data.name?this.data.name:this.index},updateRender:function(e,t){var a=t.data;this.inited=this.inited||e,this.setData({active:e,shouldRender:this.inited||!a.lazyRender,shouldShow:e||a.animated})},update:function(){this.parent&&this.parent.updateTabs()}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/tab/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/tabbar-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/tabbar-item/index.js';	define("miniprogram_npm/@vant/weapp/tabbar-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({props:{info:null,name:null,icon:String,dot:Boolean},relation:{name:"tabbar",type:"ancestor",current:"tabbar-item"},data:{active:!1},methods:{onClick:function(){this.parent&&this.parent.onChange(this),this.$emit("click")},updateFromParent:function(){var t=this.parent;if(t){var e=t.children.indexOf(this),i=t.data,o=this.data,a=(o.name||e)===i.active,n={};return a!==o.active&&(n.active=a),i.activeColor!==o.activeColor&&(n.activeColor=i.activeColor),i.inactiveColor!==o.inactiveColor&&(n.inactiveColor=i.inactiveColor),Object.keys(n).length>0?this.set(n):Promise.resolve()}}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/tabbar-item/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/tabbar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/tabbar/index.js';	define("miniprogram_npm/@vant/weapp/tabbar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({relation:{name:"tabbar-item",type:"descendant",current:"tabbar",linked:function(e){e.parent=this,e.updateFromParent()},unlinked:function(){this.updateChildren()}},props:{active:{type:null,observer:"updateChildren"},activeColor:{type:String,observer:"updateChildren"},inactiveColor:{type:String,observer:"updateChildren"},fixed:{type:Boolean,value:!0},border:{type:Boolean,value:!0},zIndex:{type:Number,value:1},safeAreaInsetBottom:{type:Boolean,value:!0}},methods:{updateChildren:function(){var e=this.children;return Array.isArray(e)&&e.length?Promise.all(e.map(function(e){return e.updateFromParent()})):Promise.resolve()},onChange:function(e){var t=this.children.indexOf(e),n=e.data.name||t;n!==this.data.active&&this.$emit("change",n)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/tabbar/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/tabs/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/tabs/index.js';	define("miniprogram_npm/@vant/weapp/tabs/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),e=require("../mixins/touch"),n=require("../common/utils");t.VantComponent({mixins:[e.touch],classes:["nav-class","tab-class","tab-active-class","line-class"],relation:{name:"tab",type:"descendant",current:"tabs",linked:function(t){t.index=this.children.length-1,this.updateTabs()},unlinked:function(){this.children=this.children.map(function(t,e){return t.index=e,t}),this.updateTabs()}},props:{color:{type:String,observer:"setLine"},sticky:Boolean,animated:{type:Boolean,observer:function(){var t=this;this.children.forEach(function(e,n){return e.updateRender(n===t.data.currentIndex,t)})}},swipeable:Boolean,lineWidth:{type:[String,Number],value:-1,observer:"setLine"},lineHeight:{type:[String,Number],value:-1,observer:"setLine"},titleActiveColor:String,titleInactiveColor:String,active:{type:[String,Number],value:0,observer:function(t){t!==this.getCurrentName()&&this.setCurrentIndexByName(t)}},type:{type:String,value:"line"},border:{type:Boolean,value:!0},ellipsis:{type:Boolean,value:!0},duration:{type:Number,value:.3},zIndex:{type:Number,value:1},swipeThreshold:{type:Number,value:4,observer:function(t){this.setData({scrollable:this.children.length>t||!this.data.ellipsis})}},offsetTop:{type:Number,value:0},lazyRender:{type:Boolean,value:!0}},data:{tabs:[],lineStyle:"",scrollLeft:0,scrollable:!1,trackStyle:"",currentIndex:null,container:null},mounted:function(){var t=this;wx.nextTick(function(){t.setLine(!0),t.scrollIntoView()})},methods:{updateContainer:function(){var t=this;this.setData({container:function(){return t.createSelectorQuery().select(".van-tabs")}})},updateTabs:function(){var t=this,e=t.children,n=void 0===e?[]:e,i=t.data;this.setData({tabs:n.map(function(t){return t.data}),scrollable:this.children.length>i.swipeThreshold||!i.ellipsis}),this.setCurrentIndexByName(this.getCurrentName()||i.active)},trigger:function(t,e){var i=this.data.currentIndex,r=e||this.children[i];n.isDef(r)&&this.$emit(t,{index:r.index,name:r.getComputedName(),title:r.data.title})},onTap:function(t){var e=this,n=t.currentTarget.dataset.index,i=this.children[n];i.data.disabled?this.trigger("disabled",i):(this.setCurrentIndex(n),wx.nextTick(function(){e.trigger("click")}))},setCurrentIndexByName:function(t){var e=this.children,n=(void 0===e?[]:e).filter(function(e){return e.getComputedName()===t});n.length&&this.setCurrentIndex(n[0].index)},setCurrentIndex:function(t){var e=this,i=this,r=i.data,a=i.children,s=void 0===a?[]:a;if(!(!n.isDef(t)||t>=s.length||t<0)&&(s.forEach(function(n,i){var r=i===t;r===n.data.active&&n.inited||n.updateRender(r,e)}),t!==r.currentIndex)){var o=null!==r.currentIndex;this.setData({currentIndex:t}),wx.nextTick(function(){e.setLine(),e.scrollIntoView(),e.updateContainer(),e.trigger("input"),o&&e.trigger("change")})}},getCurrentName:function(){var t=this.children[this.data.currentIndex];if(t)return t.getComputedName()},setLine:function(t){var e=this;if("line"===this.data.type){var i=this.data,r=i.color,a=i.duration,s=i.currentIndex,o=i.lineWidth,l=i.lineHeight;this.getRect(".van-tab",!0).then(function(i){void 0===i&&(i=[]);var u=i[s];if(null!=u){var c=-1!==o?o:u.width/2,d=-1!==l?"height: "+n.addUnit(l)+"; border-radius: "+n.addUnit(l)+";":"",h=i.slice(0,s).reduce(function(t,e){return t+e.width},0);h+=(u.width-c)/2;var v=t?"":"transition-duration: "+a+"s; -webkit-transition-duration: "+a+"s;";e.setData({lineStyle:"\n            "+d+"\n            width: "+n.addUnit(c)+";\n            background-color: "+r+";\n            -webkit-transform: translateX("+h+"px);\n            transform: translateX("+h+"px);\n            "+v+"\n          "})}})}},scrollIntoView:function(){var t=this,e=this.data,n=e.currentIndex;e.scrollable&&Promise.all([this.getRect(".van-tab",!0),this.getRect(".van-tabs__nav")]).then(function(e){var i=e[0],r=e[1],a=i[n],s=i.slice(0,n).reduce(function(t,e){return t+e.width},0);t.setData({scrollLeft:s-(r.width-a.width)/2})})},onTouchScroll:function(t){this.$emit("scroll",t.detail)},onTouchStart:function(t){this.data.swipeable&&this.touchStart(t)},onTouchMove:function(t){this.data.swipeable&&this.touchMove(t)},onTouchEnd:function(){if(this.data.swipeable){var t=this.data,e=t.tabs,n=t.currentIndex,i=this,r=i.direction,a=i.deltaX,s=i.offsetX;"horizontal"===r&&s>=50&&(a>0&&0!==n?this.setCurrentIndex(n-1):a<0&&n!==e.length-1&&this.setCurrentIndex(n+1))}}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/tabs/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/tag/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/tag/index.js';	define("miniprogram_npm/@vant/weapp/tag/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({props:{size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,type:{type:String,value:"default"},closeable:Boolean},methods:{onClose:function(){this.$emit("close")}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/tag/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/toast/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/toast/index.js';	define("miniprogram_npm/@vant/weapp/toast/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({props:{show:Boolean,mask:Boolean,message:String,forbidClick:Boolean,zIndex:{type:Number,value:1e3},type:{type:String,value:"text"},loadingType:{type:String,value:"circular"},position:{type:String,value:"middle"}},methods:{noop:function(){}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/toast/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/transition/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/transition/index.js';	define("miniprogram_npm/@vant/weapp/transition/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),s=require("../mixins/transition");e.VantComponent({classes:["enter-class","enter-active-class","enter-to-class","leave-class","leave-active-class","leave-to-class"],mixins:[s.transition(!0)]}); 
 			}); 	require("miniprogram_npm/@vant/weapp/transition/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/tree-select/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/tree-select/index.js';	define("miniprogram_npm/@vant/weapp/tree-select/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("../common/component").VantComponent({classes:["main-item-class","content-item-class","main-active-class","content-active-class","main-disabled-class","content-disabled-class"],props:{items:{type:Array,observer:"updateSubItems"},activeId:null,mainActiveIndex:{type:Number,value:0,observer:"updateSubItems"},height:{type:[Number,String],value:300},max:{type:Number,value:1/0}},data:{subItems:[]},methods:{onSelectItem:function(e){var t=e.currentTarget.dataset.item,a=Array.isArray(this.data.activeId),i=a&&this.data.activeId.length>=this.data.max,s=a?this.data.activeId.indexOf(t.id)>-1:this.data.activeId===t.id;t.disabled||i&&!s||this.$emit("click-item",t)},onClickNav:function(e){var t=e.detail;this.data.items[t].disabled||this.$emit("click-nav",{index:t})},updateSubItems:function(){var e=this.data,t=(e.items[e.mainActiveIndex]||{}).children,a=void 0===t?[]:t;return this.set({subItems:a})}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/tree-select/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/uploader/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/uploader/index.js';	define("miniprogram_npm/@vant/weapp/uploader/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),a=require("./utils");t.VantComponent({props:{disabled:Boolean,multiple:Boolean,uploadText:String,useBeforeRead:Boolean,previewSize:{type:null,value:90},name:{type:[Number,String],value:""},accept:{type:String,value:"image"},sizeType:{type:Array,value:["original","compressed"]},capture:{type:Array,value:["album","camera"]},fileList:{type:Array,value:[],observer:"formatFileList"},maxSize:{type:Number,value:Number.MAX_VALUE},maxCount:{type:Number,value:100},deletable:{type:Boolean,value:!0},previewImage:{type:Boolean,value:!0},previewFullImage:{type:Boolean,value:!0},imageFit:{type:String,value:"scaleToFill"},camera:{type:String,value:"back"},compressed:{type:Boolean,value:!0},maxDuration:{type:Number,value:60}},data:{lists:[],computedPreviewSize:"",isInCount:!0},methods:{formatFileList:function(){var t=this.data,i=t.fileList,r=void 0===i?[]:i,n=t.maxCount,o=r.map(function(t){return e(e({},t),{isImage:void 0===t.isImage?a.isImageFile(t):t.isImage})});this.setData({lists:o,isInCount:o.length<n})},startUpload:function(){var t=this;if(!this.data.disabled){var i=this.data,r=i.name,n=void 0===r?"":r,o=i.capture,s=i.maxCount,l=i.multiple,u=i.maxSize,m=i.accept,c=i.sizeType,p=i.lists,v=i.camera,d=i.compressed,f=i.maxDuration,y=i.useBeforeRead,g=void 0!==y&&y,h=s-p.length;("image"===m?new Promise(function(e,t){wx.chooseImage({count:l?h>9?9:h:1,sourceType:o,sizeType:c,success:e,fail:t})}):"video"===m?new Promise(function(e,t){wx.chooseVideo({sourceType:o,compressed:d,maxDuration:f,camera:v,success:e,fail:t})}):new Promise(function(e,t){wx.chooseMessageFile({count:l?h:1,type:"file",success:e,fail:t})})).then(function(i){var r=null;if((r=a.isVideo(i,m)?e({path:i.tempFilePath},i):l?i.tempFiles:i.tempFiles[0])instanceof Array){if(!r.every(function(e){return e.size<=u}))return void t.$emit("oversize",{name:n})}else if(r.size>u)return void t.$emit("oversize",{name:n});g?t.$emit("before-read",{file:r,name:n,callback:function(e){e&&t.$emit("after-read",{file:r,name:n})}}):t.$emit("after-read",{file:r,name:n})}).catch(function(e){t.$emit("error",e)})}},deleteItem:function(e){var t=e.currentTarget.dataset.index;this.$emit("delete",{index:t,name:this.data.name})},doPreviewImage:function(e){if(this.data.previewFullImage){var t=e.currentTarget.dataset.url,a=this.data.lists.filter(function(e){return e.isImage}).map(function(e){return e.url||e.path});this.$emit("click-preview",{url:t,name:this.data.name}),wx.previewImage({urls:a,current:t,fail:function(){wx.showToast({title:"预览图片失败",icon:"none"})}})}}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/uploader/index.js");
 		__wxRoute = 'pages/components/aoyiDetail/aoyiDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/aoyiDetail/aoyiDetail.js';	define("pages/components/aoyiDetail/aoyiDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{detail:{type:String,value:"",observer:function(a){if(a){(a=JSON.parse(a.replace(/(\r\n)|(\n)/,""))).aoyiData=[],a.talentData=[];for(var t in a){if(this.data.aoyiData.includes(t)){var e=a[t].split(" ");a.aoyiData.push({quality:"资质"+e[0],percent:e[1],label:t})}this.data.talentData.includes(t)&&a[t]&&a.talentData.push({label:t+"：",value:a[t]})}this.setData({data:a})}}}},data:{aoyiData:["物伤","法伤","物防","法防"],talentData:["剑侍","豪杰","阴阳","仙术","游侠","通用"]},methods:{}}); 
 			}); 	require("pages/components/aoyiDetail/aoyiDetail.js");
 		__wxRoute = 'pages/components/gradientsLabel/gradientsLabel';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/gradientsLabel/gradientsLabel.js';	define("pages/components/gradientsLabel/gradientsLabel.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{label:{type:String,value:""},fontsize:{type:String,value:"28"},lineheight:{type:String,value:"34"}},data:{},methods:{}}); 
 			}); 	require("pages/components/gradientsLabel/gradientsLabel.js");
 		__wxRoute = 'pages/components/initRechargeDialog/initRechargeDialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/initRechargeDialog/initRechargeDialog.js';	define("pages/components/initRechargeDialog/initRechargeDialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var a=e(require("../../../utils/WxValidate.js")),i=e(require("@vant/weapp/notify/notify")),o=e(require("../../../utils/lodash.js")),n=getApp();Component({properties:{},options:{addGlobalClass:!0},data:{dialogVisible:!1,form:{account:"",km:""}},methods:{setFormValidate:function(){var e={account:{required:!0,rangelength:[5,15]},km:{required:!0}},t={account:{required:"请填写账号",rangelength:"账号长度在 5 到 15 个字符"},km:{required:"请填写卡密"}};this.WxValidate=new a.default(e,t)},showDialog:function(){this.setData({dialogVisible:!0})},closeDialog:function(){this.setData({dialogVisible:!1})},account:function(e){var a=this.validateInput(e.detail);this.setData(t({},"form.account",a))},km:function(e){var a=e.detail.replace(/[^a-zA-Z0-9.]/g,"");this.setData(t({},"form.km",a))},validateInput:function(e){return e.replace(/[^a-zA-Z0-9.]/g,"")},showModal:function(e){wx.showModal({content:e.msg,showCancel:!1})},submit:o.default.throttle(function(e){var t=this,a=e.detail.value;if(!this.WxValidate.checkForm(a)){var o=this.WxValidate.errorList[0];return this.showModal(o),!1}n.wxRequest({url:"/qqsg/initRecharge",data:a,success:function(e){200==e.data.code?((0,i.default)({type:"success",message:"充值成功",duration:2e3}),t.closeDialog()):t.showModal(e.data)}})},2e3)},lifetimes:{created:function(){this.setFormValidate()}}}); 
 			}); 	require("pages/components/initRechargeDialog/initRechargeDialog.js");
 		__wxRoute = 'pages/components/noticeDialog/noticeDialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/noticeDialog/noticeDialog.js';	define("pages/components/noticeDialog/noticeDialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{noticeMessage:{type:Array,value:[]}},data:{dialogVisible:!1},methods:{showDialog:function(){this.setData({dialogVisible:!0})},closeDialog:function(){this.setData({dialogVisible:!1})}}}); 
 			}); 	require("pages/components/noticeDialog/noticeDialog.js");
 		__wxRoute = 'pages/components/rechargeDialog/rechargeDialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/rechargeDialog/rechargeDialog.js';	define("pages/components/rechargeDialog/rechargeDialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var a=e(require("../../../utils/WxValidate.js")),s=e(require("@vant/weapp/notify/notify")),i=e(require("../../../utils/lodash.js")),o=getApp();Component({properties:{},options:{addGlobalClass:!0},data:{dialogVisible:!1,form:{km:""}},methods:{setFormValidate:function(){var e={km:{required:!0}},t={km:{required:"请填写卡密"}};this.WxValidate=new a.default(e,t)},showDialog:function(){this.setData({dialogVisible:!0})},closeDialog:function(){this.setData({dialogVisible:!1})},km:function(e){var a=e.detail.replace(/[^a-zA-Z0-9.]/g,"");this.setData(t({},"form.km",a))},showModal:function(e){wx.showModal({content:e.msg,showCancel:!1})},submit:i.default.throttle(function(e){var t=this,a=e.detail.value;if(!this.WxValidate.checkForm(a)){var i=this.WxValidate.errorList[0];return this.showModal(i),!1}var r=wx.getStorageSync("saveData");r?(a.token=r.token,a.userId=r.userId,o.wxRequest({url:"/qqsg/recharge",data:a,success:function(e){if(200==e.data.code){(0,s.default)({type:"success",message:"充值成功",duration:2e3});var a=e.data.data,i=a.date,o=a.svipDate,l=/T/;i=l.test(i)?i:new Date(i.replace(/-/g,"/")).toJSON(),o=l.test(o)?o:new Date(o.replace(/-/g,"/")).toJSON(),r.date=i,r.svipDate=o,wx.setStorageSync("saveData",r),t.closeDialog(),t.triggerEvent("rechargeSuccess")}else t.showModal(e.data)}})):this.showModal({msg:"账号信息过期，请退出登录后重新登录"})},2e3)},lifetimes:{created:function(){this.setFormValidate()}}}); 
 			}); 	require("pages/components/rechargeDialog/rechargeDialog.js");
 		__wxRoute = 'pages/components/yuanshenDetail/yuanshenDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/yuanshenDetail/yuanshenDetail.js';	define("pages/components/yuanshenDetail/yuanshenDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{detail:{type:String,value:"",observer:function(t){if(t){t=JSON.parse(t.replace(/(\r\n)|(\n)/,""));for(var e in t)-1!==e.indexOf("评价")&&(t[e]=this.strToTag(t[e])),-1!==e.indexOf("丸子")&&(t[e]=this.splitGrowData(t[e]));t["融合"]=t["融合"].split("+"),t["技能"]=t["技能"].split(" "),t["特技"]=t["特技"].split(" "),this.setData({data:t})}}}},data:{data:"",yuanshenData:[{title:"物理攻击",key:"物攻",class:"wugong"},{title:"法术攻击",key:"魔攻",class:"mogong"},{title:"物理防御",key:"物防",class:"wufang"},{title:"法术防御",key:"魔防",class:"mofang"},{title:"攻击配合",key:"攻配",class:"gongpei"},{title:"防御配合",key:"防配",class:"fangpei"}]},methods:{strToTag:function(t){var e=t.substr(0,4),s=t.substr(4);return"<span class='"+this.switchColor(e)+"'>"+s+"</span>"},switchColor:function(t){switch(t){case"/C23":return"green";case"/C24":return"blue";case"/C25":return"red";case"/C29":return"green";case"/C30":return"blue";case"/C31":return"purple";default:return"gray"}},splitGrowData:function(t){return{initData:t.substr(0,4),growData:t.substr(4,5)}}}}); 
 			}); 	require("pages/components/yuanshenDetail/yuanshenDetail.js");
 		__wxRoute = 'pages/components/zhuangbeiDetail/zhuangbeiDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/zhuangbeiDetail/zhuangbeiDetail.js';	define("pages/components/zhuangbeiDetail/zhuangbeiDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{detail:{type:String,value:"",observer:function(e){e&&((e=JSON.parse(e=e.replace(/(\r\n)|(\n)|(\r)/g,","))).gaizao={color:this.gaizaoColor(e["改造"]),value:e["改造"]},e.name={color:this.nameColor(e["颜色"]),value:e["物品名"]},e.basicProperty=e["基础属性"].split(","),e.inlayData=e["镶嵌"].split(","),e.gaizaoData=e["改造属性"].split(","),this.setData({data:e}))}}},data:{data:""},methods:{gaizaoColor:function(e){switch(e){case"略微改造的":return"brown";case"坚固的":case"改良的":return"cyan";case"精致的":case"精良的":return"green";case"华丽的":return"blue";case"浑然天成的":return"purple";case"完美的":return"yellow";case"天赐的":return"orange";case"鬼神的":return"red";default:return""}},nameColor:function(e){switch(e){case"绿":return"green";case"蓝":return"blue";case"紫":return"purple";case"黄":return"yellow";case"橙":return"orange";case"红":return"red";default:return"gray"}}}}); 
 			}); 	require("pages/components/zhuangbeiDetail/zhuangbeiDetail.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var a,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},s=(t(require("../../utils/WxValidate.js")),t(require("../../utils/lodash.js")),t(require("../../utils/CryptoJS.js"))),i=t(require("@vant/weapp/notify/notify")),n=t(require("@vant/weapp/toast/toast")),r=t(require("../../utils/keyword")),g=getApp();Page({data:(a={dataListHeight:0,homeMessage:["微信搜索小程序 三国查询，查询群749991972","普通15/月（不能看属性） 高级30/月（可以看属性）"],noticeMessage:[],keyWord:"",shopName:"",order:"asc",attr:""},e(a,"order","asc"),e(a,"iconClass","rotateIcon"),e(a,"index",0),e(a,"clickKeyWord",!1),e(a,"region","得陇"),e(a,"regionOptions",[{index:0,region:"得陇"},{index:1,region:"三足"},{index:2,region:"暗渡"},{index:3,region:"巧借"},{index:4,region:"群雄"},{index:5,region:"一代"},{index:6,region:"单刀"},{index:7,region:"杜康"},{index:8,region:"桃园"},{index:9,region:"抚琴"},{index:10,region:"一生"},{index:11,region:"必争"}]),e(a,"keyWordList",[]),e(a,"dialogVisible",!1),e(a,"keyWordListVisible",!1),e(a,"tabsName","booth"),e(a,"data",[]),e(a,"page",1),e(a,"pageSize",10),e(a,"totalCount",0),e(a,"totalPage",0),e(a,"shopNoMore",!1),e(a,"boothData",[]),e(a,"boothPage",1),e(a,"boothPageSize",10),e(a,"boothTotalCount",0),e(a,"boothTotalPage",0),e(a,"boothNoMore",!1),e(a,"consignmentData",[]),e(a,"consignmentPage",1),e(a,"consignmentPageSize",10),e(a,"consignmentTotalCount",0),e(a,"consignmentTotalPage",0),e(a,"consignmentNoMore",!1),e(a,"isLoad",!1),e(a,"floorstatus",!1),e(a,"searchType","exact"),e(a,"goodsType","4"),e(a,"ronghe",""),e(a,"minLevel",""),e(a,"maxLevel",""),a),onReady:function(){this.loginDialog=this.selectComponent("#loginDialog"),this.historyDialog=this.selectComponent("#historyDialog"),this.shopDetail=this.selectComponent("#shopDetail"),this.popup=this.selectComponent("#popup")},onFocus:function(t){this.setData({keyWordListVisible:!0})},onChange:function(t){""!=t.detail?this.getKeyWord(t):this.setData({keyWordList:[],keyWord:""})},getKeyWord:function(t){var e=(0,r.default)(t.detail);this.setData({keyWordList:e,keyWordListVisible:!0})},bindPickerChange:function(t){this.setData({index:t.detail.value,region:this.data.regionOptions[t.detail.value].region}),wx.setStorageSync("regionObj",this.data.regionOptions[t.detail.value]),this.getKeyWordList()},showHistory:function(){this.historyDialog.showDialog()},saveHistory:function(t,e){var a=wx.getStorageSync("historyData");if(a){var o=a.filter(function(e){return"string"==typeof e?e!==t:e.name!==t});o.unshift({name:t,goodsType:e}),wx.setStorageSync("historyData",o)}else{var s=[{name:t,goodsType:e}];wx.setStorageSync("historyData",s)}},clickTag:function(t){var e=t.detail.name,a=t.detail.goodsType;if(!a){var o=g.globalData.keyWordList.filter(function(t){return t.wpm===e});if(!(a=o[0]?o[0].goodsType:null))return void wx.showModal({content:"列表中没有这个物品，请切换至别区再切回来重试,或者清空搜索历史",showCancel:!1})}this.popup.data.show?this.popup.setKeyWord(e,a):(this.setData({keyWord:e,keyWordListVisible:!1}),this.isLogin(e,{goodsType:a}))},isLogin:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.attr,o=void 0===a?"":a,s=e.shopName,i=void 0===s?"":s,n=e.order,r=void 0===n?"asc":n,g=e.searchType,d=void 0===g?"exact":g,c=e.goodsType,l=void 0===c?"4":c,h=e.ronghe,u=void 0===h?"":h,p=e.minLevel,m=void 0===p?"":p,y=e.maxLevel,D=void 0===y?"":y,f=wx.getStorageSync("saveData");f&&f.isLogin?(this.setData({data:[],page:1,pageSize:10,totalCount:0,totalPage:0,shopNoMore:!1,boothData:[],boothPage:1,boothPageSize:10,boothTotalCount:0,boothTotalPage:0,boothNoMore:!1,consignmentData:[],consignmentPage:1,consignmentPageSize:10,consignmentTotalCount:0,consignmentTotalPage:0,consignmentNoMore:!1,clickKeyWord:!0,keyWord:t,attr:o,shopName:i,order:r,searchType:d,goodsType:l,ronghe:u,minLevel:m,maxLevel:D}),this.boothVipSearch(),t&&"exact"===d&&this.saveHistory(t,l)):this.loginDialog.showDialog()},getKeyWordList:function(){g.wxRequest({url:"/qqsg/allKeyWord",data:{region:this.data.region},success:function(t){"200"==t.data.code?g.globalData.keyWordList=t.data.data:wx.showModal({content:t.data.msg,showCancel:!1})}})},changeTabs:function(t){this.setData({tabsName:t.detail.name})},selectKeyWord:function(t){var e=t.target.dataset.keyWord,a=t.target.dataset.goodsType;this.setData({keyWord:e,goodsType:a,keyWordListVisible:!1}),this.isLogin(e,{goodsType:a})},closeKeyWordList:function(){this.setData({keyWordListVisible:!1})},showPopup:function(){var t=wx.getStorageSync("saveData").svipDate;(t=new Date(t).getTime())?t<(new Date).getTime()?(0,n.default)("此功能仅限高级会员使用"):this.popup.showPopup():(0,n.default)("请先登录")},setSvipParams:function(t){var e=t.detail;this.isLogin(e.keyWord,e)},vipSearch:function(){var t=this;this.setData({isLoad:!1});var e=wx.getStorageSync("saveData"),a=e.token,n=e.userId,r=this.data,d={region:r.region,page:r.page,pageSize:r.pageSize,shopName:r.shopName,order:r.order,attr:r.attr,searchType:r.searchType,goodsType:r.goodsType,ronghe:r.ronghe,minLevel:r.minLevel,maxLevel:r.maxLevel};g.wxRequest({url:"/qqsg/vipList",data:o({token:a,userId:n,keyword:this.data.keyWord},d),success:function(e){if(t.setData({isLoad:!0}),200==e.data.code){t.data.clickKeyWord&&t.consignmentVipSearch();var a=JSON.parse(s.default.decrypt(e.data.data));a.list.forEach(function(e){e.sjsj=t.createDate(e.sjsj),e.showAttr=!1});var o=t.data.data.concat(a.list);t.setData({data:o,page:a.page,totalCount:a.totalCount,totalPage:a.totalPage,pageSize:a.pageSize,shopNoMore:a.page===a.totalPage})}else 500==e.data.code?(wx.removeStorageSync("saveData"),t.showModal({msg:"身份失效，请重新登录"}),t.loginDialog.showDialog()):(0,i.default)({message:e.data.msg,duration:2e3})}})},boothVipSearch:function(){var t=this;this.setData({isLoad:!1});var e=wx.getStorageSync("saveData"),a=e.token,n=e.userId,r=this.data,d={region:r.region,shopName:r.shopName,order:r.order,attr:r.attr,searchType:r.searchType,goodsType:r.goodsType,ronghe:r.ronghe,minLevel:r.minLevel,maxLevel:r.maxLevel};g.wxRequest({url:"/qqsg/boothList",data:o({token:a,userId:n,keyword:this.data.keyWord,page:this.data.boothPage,pageSize:this.data.boothPageSize},d),success:function(e){if(t.setData({isLoad:!0}),200==e.data.code){t.data.clickKeyWord&&t.vipSearch();var a=JSON.parse(s.default.decrypt(e.data.data));a.list.forEach(function(e){e["数据时间"]=t.createDate(e["数据时间"]),e.showAttr=!1});var o=t.data.boothData.concat(a.list);t.setData({boothData:o,boothPage:a.page,boothTotalCount:a.totalCount,boothTotalPage:a.totalPage,boothPageSize:a.pageSize,boothNoMore:a.page===a.totalPage})}else 500==e.data.code?(wx.removeStorageSync("saveData"),t.showModal({msg:"身份失效，请重新登录"}),t.loginDialog.showDialog()):(0,i.default)({message:e.data.msg,duration:2e3})}})},querySameBooth:function(t){var e=this,a=wx.getStorageSync("saveData");if(a&&a.isLogin){if(this.data.isLoad){this.setData({isLoad:!1});var o=t.target.dataset.userName,n=a.token,r=a.userId;g.wxRequest({url:"/qqsg/querySameBooth",data:{region:this.data.region,userName:o,token:n,userId:r},success:function(t){if(e.setData({isLoad:!0}),200==t.data.code){var a=JSON.parse(s.default.decrypt(t.data.data));a.list.forEach(function(t){t["数据时间"]=e.createDate(t["数据时间"]),t.showAttr=!1}),wx.setStorageSync("boothData",a.list),wx.navigateTo({url:"/pages/boothDetail/boothDetail"})}else 500==t.data.code?(wx.removeStorageSync("saveData"),e.showModal({msg:"身份失效，请重新登录"}),e.loginDialog.showDialog()):(0,i.default)({message:t.data.msg,duration:2e3})}})}}else this.loginDialog.showDialog()},consignmentVipSearch:function(){var t=this;this.setData({clickKeyWord:!1,isLoad:!1});var e=wx.getStorageSync("saveData"),a=e.token,n=e.userId,r=this.data,d={region:r.region,order:r.order,attr:r.attr,searchType:r.searchType,goodsType:r.goodsType,ronghe:r.ronghe,minLevel:r.minLevel,maxLevel:r.maxLevel};g.wxRequest({url:"/qqsg/consignmentList",data:o({token:a,userId:n,keyword:this.data.keyWord,page:this.data.consignmentPage,pageSize:this.data.consignmentPageSize},d),success:function(e){if(t.setData({isLoad:!0}),200==e.data.code){var a=JSON.parse(s.default.decrypt(e.data.data));a.list.forEach(function(e){e.sjsj=t.createDate(e.sjsj),e.showAttr=!1,e.type=t.formatType(e.lx)});var o=t.data.consignmentData.concat(a.list);t.setData({consignmentData:o,consignmentPage:a.page,consignmentTotalCount:a.totalCount,consignmentTotalPage:a.totalPage,consignmentPageSize:a.pageSize,consignmentNoMore:a.page===a.totalPage})}else 500==e.data.code?(wx.removeStorageSync("saveData"),t.showModal({msg:"身份失效，请重新登录"}),t.loginDialog.showDialog()):(0,i.default)({message:e.data.msg,duration:2e3})}})},formatType:function(t){switch(t){case"0":return"道具";case"1":return"装备";case"4":return"元神";case"5":return"灵魄";case"6":return"奥义"}},clickShopItem:function(t){var a=t.currentTarget.dataset.index;this.data.data[a].sx&&this.setData(e({},"data["+a+"].showAttr",!this.data.data[a].showAttr))},clickBoothItem:function(t){var a=t.currentTarget.dataset.index;this.data.boothData[a]["属性"]&&this.setData(e({},"boothData["+a+"].showAttr",!this.data.boothData[a].showAttr))},clickConsignmentItem:function(t){var a=t.currentTarget.dataset.index;this.data.consignmentData[a].sx&&this.setData(e({},"consignmentData["+a+"].showAttr",!this.data.consignmentData[a].showAttr))},createDate:function(t){var e=new Date(t).toJSON();return new Date(+new Date(e)+288e5).toISOString().replace(/T/g," ").replace(/\.[\d]{3}Z/,"")},loginSuccess:function(){(0,i.default)({type:"success",message:"登录成功",duration:2e3})},onReachBottom:function(){if(this.data.isLoad){var t=wx.getStorageSync("saveData");if(t&&t.isLogin){var e=this;if("shop"==e.data.tabsName){if((a=e.data.page+1)>e.data.totalPage)return;e.setData({page:a}),e.vipSearch()}else if("booth"==e.data.tabsName){if((a=e.data.boothPage+1)>e.data.boothTotalPage)return;e.setData({boothPage:a}),e.boothVipSearch()}else if("consignment"==e.data.tabsName){var a=e.data.consignmentPage+1;if(a>e.data.consignmentTotalPage)return;e.setData({consignmentPage:a}),e.consignmentVipSearch()}}else this.loginDialog.showDialog()}},initData:function(){var t=this;g.wxRequest({url:g.globalData.url.initData,success:function(e){if(200==e.data.code){var a=e.data.data;t.setData({data:JSON.parse(a.shopList),totalCount:a.count,boothData:JSON.parse(a.boothList),boothTotalCount:a.count})}else(0,i.default)({message:e.data.msg,duration:2e3})}})},getAllRegion:function(){var t=this;g.wxRequest({url:"/qqsg/allRegion",success:function(e){if("200"==e.data.code){var a=e.data.data,o=wx.getStorageSync("regionObj");o||(o=a[0],wx.setStorageSync("regionObj",o)),t.setData({regionOptions:a,index:o.index,region:o.region}),t.getKeyWordList()}else wx.showModal({content:e.data.msg,showCancel:!1})}})},onPageScroll:function(t){t&&t.scrollTop&&t.scrollTop>100?this.setData({floorstatus:!0}):this.setData({floorstatus:!1})},goTop:function(t){wx.pageScrollTo?wx.pageScrollTo({scrollTop:0}):wx.showModal({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"})},onLoad:function(){var t=this;this.getAllRegion(),this.initData(),this.onPageScroll(),g.globalData.homeMessage.length>0?this.getMessage():g.messageCallback=function(){g.globalData.homeMessage.length>0&&t.getMessage()}},getMessage:function(){this.setData({homeMessage:g.globalData.homeMessage,noticeMessage:g.globalData.noticeMessage}),this.data.noticeMessage.length>0&&this.selectComponent("#noticeDialog").showDialog()},getHeight:function(){var t=this;wx.getSystemInfo({success:function(e){t.setData({dataListHeight:e.windowHeight-130})}})},showModal:function(t){wx.showModal({content:t.msg,showCancel:!1})},onShareAppMessage:function(){}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/tools/tools';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/tools/tools.js';	define("pages/tools/tools.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n=function(n){return n&&n.__esModule?n:{default:n}}(require("@vant/weapp/toast/toast")),t=getApp();Page({data:{btnVisible:!1},showToast:function(){(0,n.default)("还未开发完成，暂时不能使用...")},onLoad:function(n){},onReady:function(){},onShow:function(){this.setData({btnVisible:t.globalData.btnVisible})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/tools/tools.js");
 		__wxRoute = 'pages/userInfo/userInfo';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/userInfo/userInfo.js';	define("pages/userInfo/userInfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}t(require("../../utils/WxValidate.js"));var e=t(require("@vant/weapp/notify/notify")),a=getApp();Page({data:{date:"",svipDate:"",account:"",isLogin:!1,problemShow:!1,btnVisible:!1},onReady:function(){this.loginDialog=this.selectComponent("#loginDialog"),this.initRechargeDialog=this.selectComponent("#initRechargeDialog"),this.rechargeDialog=this.selectComponent("#rechargeDialog")},onShow:function(){this.setData({btnVisible:a.globalData.btnVisible});var t=wx.getStorageSync("saveData");t&&t.date?this.saveAccountInfo():this.setData({isLogin:!1})},showloginDialog:function(t){this.loginDialog.showDialog(t.target.dataset.type)},showInitRechargeDialog:function(){this.initRechargeDialog.showDialog()},showRechargeDialog:function(){this.rechargeDialog.showDialog()},showMap:function(){wx.navigateTo({url:"/pages/queryMap/queryMap"})},showApp:function(){wx.navigateTo({url:"/pages/app/app"})},jumpPage:function(t){var e=t.target.dataset.url;wx.navigateTo({url:e})},showProblem:function(){this.setData({problemShow:!0})},closeProblem:function(){this.setData({problemShow:!1})},saveAccountInfo:function(){var t=wx.getStorageSync("saveData");this.setData({isLogin:!0,date:this.createDate(t.date),svipDate:this.createDate(t.svipDate),account:t.account})},clearAccountInfo:function(){wx.removeStorageSync("saveData"),this.setData({date:"",svipDate:"",account:"",isLogin:!1})},showModal:function(t){wx.showModal({content:t.msg,showCancel:!1})},loginSuccess:function(){this.saveAccountInfo(),(0,e.default)({type:"success",message:"登录成功",duration:2e3})},registerSuccess:function(){this.saveAccountInfo(),wx.showModal({content:"注册成功，已可使用",showCancel:!1})},vipUpgradeConfirm:function(){var t=this;wx.showModal({title:"会员升级",content:"vip剩余时长减半变成svip，需vip剩余时长大于30天，此过程不可逆，是否确认升级会员",success:function(e){e.confirm&&t.vipUpgrade()}})},vipUpgrade:function(){var t=this,o=wx.getStorageSync("saveData");if(o){var n=o.token,i=o.userId;a.wxRequest({url:"/qqsg/vipUpgrade",data:{token:n,userId:i},success:function(a){if(200==a.data.code){(0,e.default)({type:"success",message:"会员升级成功",duration:2e3});var n=a.data.data,i=n.date,s=n.svipDate,c=/T/;i=c.test(i)?i:new Date(i.replace(/-/g,"/")).toJSON(),s=c.test(s)?s:new Date(s.replace(/-/g,"/")).toJSON(),o.date=i,o.svipDate=s,wx.setStorageSync("saveData",o),t.saveAccountInfo()}else 500==a.data.code?(t.clearAccountInfo(),t.showModal({msg:"身份失效，请重新登录"}),t.loginDialog.showDialog()):t.showModal({msg:a.data.msg})}})}else this.loginDialog.showDialog()},logout:function(){var t=this;wx.showModal({title:"退出登录",content:"确定退出吗，请记住账号密码",success:function(e){e.confirm&&t.clearAccountInfo()}})},rechargeSuccess:function(){this.saveAccountInfo()},createDate:function(t){var e=new Date(t).toJSON();return new Date(+new Date(e)+288e5).toISOString().replace(/T/g," ").replace(/\.[\d]{3}Z/,"")},onShareAppMessage:function(){}}); 
 			}); 	require("pages/userInfo/userInfo.js");
 		__wxRoute = 'pages/buyCode/buyCode';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/buyCode/buyCode.js';	define("pages/buyCode/buyCode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{imgUrl:"",message:"保存图中二维码，扫码购买"},getImg:function(){var t=this;a.wxRequest({url:a.globalData.url.img,data:{type:1},success:function(a){"200"==a.data.code?t.setData({imgUrl:a.data.data.absUrl}):wx.showModal({content:a.data.msg,showCancel:!1})}})},getMessage:function(){var t=this;a.wxRequest({url:a.globalData.url.message,data:{type:1},success:function(a){"200"==a.data.code?t.setData({message:a.data.data.content}):wx.showModal({content:a.data.msg,showCancel:!1})}})},onLoad:function(){this.getImg(),this.getMessage()},preview:function(a){wx.previewImage({urls:[this.data.imgUrl]})},onShareAppMessage:function(){}}); 
 			}); 	require("pages/buyCode/buyCode.js");
 		__wxRoute = 'pages/app/app';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/app/app.js';	define("pages/app/app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{imgUrl:"",message:"暂时没有app"},getImg:function(){var t=this;a.wxRequest({url:a.globalData.url.img,data:{type:3},success:function(a){"200"==a.data.code?t.setData({imgUrl:a.data.data.absUrl}):wx.showModal({content:a.data.msg,showCancel:!1})}})},getMessage:function(){var t=this;a.wxRequest({url:a.globalData.url.message,data:{type:2},success:function(a){"200"==a.data.code?t.setData({message:a.data.data.content}):wx.showModal({content:a.data.msg,showCancel:!1})}})},onLoad:function(){this.getImg(),this.getMessage()},preview:function(a){wx.previewImage({urls:[this.data.imgUrl]})},onShareAppMessage:function(){}}); 
 			}); 	require("pages/app/app.js");
 		__wxRoute = 'pages/queryMap/queryMap';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/queryMap/queryMap.js';	define("pages/queryMap/queryMap.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{imgUrl:""},getImg:function(){var t=this;a.wxRequest({url:"/qqsg/img",data:{type:2},success:function(a){"200"==a.data.code?t.setData({imgUrl:a.data.data.absUrl}):wx.showModal({content:a.data.msg,showCancel:!1})}})},onLoad:function(){this.getImg()},preview:function(a){wx.previewImage({urls:[this.data.imgUrl]})},onShareAppMessage:function(){}}); 
 			}); 	require("pages/queryMap/queryMap.js");
 		__wxRoute = 'pages/components/buyCode/buyCode';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/buyCode/buyCode.js';	define("pages/components/buyCode/buyCode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{},data:{btnVisible:!1},pageLifetimes:{show:function(){this.getBtnVisible()}},methods:{showPopup:function(){wx.navigateTo({url:"/pages/buyCode/buyCode"})},getBtnVisible:function(){this.setData({btnVisible:t.globalData.btnVisible})}}}); 
 			}); 	require("pages/components/buyCode/buyCode.js");
 		__wxRoute = 'pages/components/loginDialog/loginDialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/loginDialog/loginDialog.js';	define("pages/components/loginDialog/loginDialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var a=e(require("../../../utils/WxValidate.js")),r=(e(require("@vant/weapp/notify/notify")),e(require("../../../utils/lodash.js"))),i=getApp();Component({properties:{},options:{addGlobalClass:!0},data:{dialogVisible:!1,type:"login",loginForm:{account:"",password:""},registerForm:{account:"",password:"",km:"",QQ:"",recommend:""}},methods:{setFormValidate:function(){var e={account:{required:!0,rangelength:[5,15]},password:{required:!0,rangelength:[5,15]}},t={account:{required:"请填写账号",rangelength:"账号长度在 5 到 15 个字符"},password:{required:"请填写密码",rangelength:"密码长度在 5 到 15 个字符"}},r={account:{required:!0,rangelength:[5,15]},password:{required:!0,rangelength:[5,15]},km:{required:!0},QQ:{required:!0,rangelength:[5,10]},recommend:{rangelength:[5,15]}},i={account:{required:"请填写账号",rangelength:"账号长度在 5 到 15 个字符"},password:{required:"请填写密码",rangelength:"密码长度在 5 到 15 个字符"},km:{required:"请填写卡密"},QQ:{required:"请填写QQ",rangelength:"QQ长度在 5 到 10 个字符"},recommend:{rangelength:"推荐人账号长度在 5 到 15 个字符"}};this.WxValidate=new a.default(e,t),this.registerValidate=new a.default(r,i)},showDialog:function(e){this.setData({type:"register"==e?e:"login",dialogVisible:!0})},closeDialog:function(){this.setData({dialogVisible:!1})},toggleType:function(){var e="login"==this.data.type?"register":"login";this.setData({type:e})},account:function(e){var a=this.validateInput(e.detail);"login"==this.data.type?this.setData(t({},"loginForm.account",a)):this.setData(t({},"registerForm.account",a))},password:function(e){var a=this.validateInput(e.detail);"login"==this.data.type?this.setData(t({},"loginForm.password",a)):this.setData(t({},"registerForm.password",a))},km:function(e){var a=e.detail.replace(/[^a-zA-Z0-9.]/g,"");this.setData(t({},"registerForm.km",a))},QQ:function(e){var a=e.detail.replace(/[^0-9]/g,"");this.setData(t({},"registerForm.QQ",a))},validateInput:function(e){return e.replace(/[^a-zA-Z0-9.]/g,"")},recommend:function(e){var a=this.validateInput(e.detail);this.setData(t({},"registerForm.recommend",a))},loginSubmit:r.default.throttle(function(e){var t=this,a=e.detail.value;if(!this.WxValidate.checkForm(a)){var r=this.WxValidate.errorList[0];return this.showModal(r),!1}i.wxRequest({url:"/qqsg/login",data:a,success:function(e){if(200==e.data.code){var a=e.data,r={isLogin:!0,token:a.data.token,userId:a.data.userId,date:a.data.date,svipDate:a.data.svipDate,account:a.data.account};wx.setStorageSync("saveData",r),t.closeDialog(),t.triggerEvent("loginSuccess")}else t.showModal(e.data)}})},2e3),registerSubmit:r.default.throttle(function(e){var t=this,a=e.detail.value;if(!this.registerValidate.checkForm(a)){var r=this.registerValidate.errorList[0];return this.showModal(r),!1}i.wxRequest({url:"/qqsg/newRegister",data:a,success:function(e){if(200==e.data.code){var a=e.data.data,r=a.date,i=a.svipDate,s=/T/;r=s.test(r)?r:new Date(r.replace(/-/g,"/")).toJSON(),i=s.test(i)?i:new Date(i.replace(/-/g,"/")).toJSON();var n={isLogin:!0,token:a.token,userId:a.userId,date:r,svipDate:i,account:a.account};wx.setStorageSync("saveData",n),t.closeDialog(),t.triggerEvent("registerSuccess")}else t.showModal(e.data)}})},2e3),showModal:function(e){wx.showModal({content:e.msg,showCancel:!1})}},lifetimes:{created:function(){this.setFormValidate()}}}); 
 			}); 	require("pages/components/loginDialog/loginDialog.js");
 		__wxRoute = 'pages/components/historyDialog/historyDialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/historyDialog/historyDialog.js';	define("pages/components/historyDialog/historyDialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Component({properties:{},options:{addGlobalClass:!0},data:{dialogVisible:!1,historyData:[]},methods:{showDialog:function(t){var a=wx.getStorageSync("historyData");a&&this.setData({historyData:a}),this.setData({dialogVisible:!0})},closeDialog:function(){this.setData({dialogVisible:!1})},clickTag:function(t){var a=t.target.dataset,i={name:a.name,goodsType:a.goodsType};this.triggerEvent("clickTag",i),this.closeDialog()},clear:function(){wx.removeStorageSync("historyData"),this.setData({historyData:[]})}}}); 
 			}); 	require("pages/components/historyDialog/historyDialog.js");
 		__wxRoute = 'pages/components/noticeSwiper/noticeSwiper';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/noticeSwiper/noticeSwiper.js';	define("pages/components/noticeSwiper/noticeSwiper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Component({properties:{},data:{noticeSwiper:["三国商行摊位查询群: 749991972","遇到充值等问题联系客服:718823681"]},methods:{},pageLifetimes:{show:function(){this.setData({noticeSwiper:e.globalData.swiperMessage})}}}); 
 			}); 	require("pages/components/noticeSwiper/noticeSwiper.js");
 		__wxRoute = 'pages/components/shopDetail/shopDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/shopDetail/shopDetail.js';	define("pages/components/shopDetail/shopDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{detail:{type:String,value:"",observer:function(r){var e=this;"5"===this.data.type&&(r=r?r.replace(/\r\n/,"\n").split("\n"):[])[0]&&(r[0]=this.lingpoName(r[0].split(":")[1]),r.forEach(function(t,o){if(0!==o){var n=t.replace(/(\/.*?\%)/,e.strToTag.bind(e));r[o]=n.replace(/\/C.*?\)/g,e.strToTag.bind(e))}})),this.setData({data:r})}},type:{type:String}},data:{data:""},methods:{strToTag:function(r,e,t){var o=r.substr(0,4),n=r.substr(4);return"<span class='"+this.switchColor(o)+"'>"+n+"</span>"},switchColor:function(r){switch(r){case"/C23":return"green";case"/C24":return"blue";case"/C25":return"red";case"/C29":return"green";case"/C30":return"blue";case"/C31":return"purple";default:return"gray"}},lingpoName:function(r){var e=this.lingpoColor(r);return'颜色:<span class="'+e.color+'">'+e.word+"</span>"},lingpoColor:function(r){switch(r){case"/C29":return{color:"green",word:"绿"};case"/C30":return{color:"blue",word:"蓝"};case"/C31":return{color:"purple",word:"紫"};case"绿":return{color:"green",word:"绿"};case"蓝":return{color:"blue",word:"蓝"};case"紫":return{color:"purple",word:"紫"};default:return{color:"gray",word:"白"}}}}}); 
 			}); 	require("pages/components/shopDetail/shopDetail.js");
 		__wxRoute = 'pages/components/banner/banner';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/banner/banner.js';	define("pages/components/banner/banner.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{},data:{background:[]},methods:{getBanner:function(){var a=this;t.wxRequest({url:t.globalData.url.banner,success:function(t){"200"==t.data.code?a.setData({background:t.data.data}):wx.showModal({content:t.data.msg,showCancel:!1})}})}},lifetimes:{created:function(){this.getBanner()}}}); 
 			}); 	require("pages/components/banner/banner.js");
 		__wxRoute = 'pages/components/popup/popup';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/popup/popup.js';	define("pages/components/popup/popup.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var a=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../utils/keyword"));getApp();Component({properties:{},options:{addGlobalClass:!0},data:{show:!1,keyWord:"",keyWordList:[],keyWordListVisible:!1,attrList:[{placeholder:"属性1：如 物攻 +30(记得输入空格)",value:""},{placeholder:"属性2：如 致命",value:""},{placeholder:"属性3：如 灭器",value:""},{placeholder:"属性4：如 青龙摆尾",value:""},{placeholder:"属性5：如 三板斧",value:""}],shopName:"",order:"asc",orderRadioOptions:[{label:"从低到高",value:"asc"},{label:"从高到低",value:"desc"}],searchType:"exact",searchTypeRadioOptions:[{label:"精准搜索",value:"exact"},{label:"模糊搜索",value:"blur"}],goodsType:"4",goodsTypeRadioOptions:[{label:"元神",value:"4"},{label:"奥义",value:"6"},{label:"装备",value:"1"},{label:"灵魄",value:"5"},{label:"道具",value:"0"}],ronghe:"",minLevel:"",maxLevel:""},methods:{showPopup:function(){this.setData({show:!0,keyWordListVisible:!1})},onClose:function(){this.setData({show:!1})},radioChange:function(e){this.setData(t({},e.detail.valueName,e.detail.value))},changeAttrInput:function(e){this.setData(this.updateAttrValue(e))},updateAttrValue:function(e){var t={},a="",r=e.currentTarget.dataset.index,s=/[`~!@#$%^&*()<>?:"{},.\/;'\-[\]=\\]/im,i=/[！#￥（——）：；“”‘’、，|《。》？、【】[\]]/im;return a=e.detail.value.replace(s,""),a=a.replace(i,""),t["attrList["+r+"].value"]=a,t},changeInput:function(e){this.setData(this.updateValue(e))},updateValue:function(e){var t=e.currentTarget.dataset.type,a={},r="",s=/[`~!@#$%^&*()<>?:"{},.\/;'\-[\]=\\]/im,i=/[·！#￥（——）：；“”‘’、，|《。》？、【】[\]]/im;return r=e.detail.value.replace(s,""),r=r.replace(i,""),a[t]=r,a},changeNumberInput:function(e){this.setData(this.updateNumberValue(e))},updateNumberValue:function(e){var t=e.currentTarget.dataset.type,a={},r=e.detail.value;return""===r?r="":((r=Number(this.validateInput(e.detail.value)))<0&&(r=0),r>999&&(r=999)),a[t]=r,a},validateInput:function(e){return e.replace(/[^0-9]/g,"")},reset:function(){this.setData({keyWord:"",keyWordList:[],keyWordListVisible:!1,shopName:"",order:"asc",searchType:"exact",goodsType:"4",attrList:[{placeholder:"属性1：如 物攻 +30(记得输入空格)",value:""},{placeholder:"属性2：如 致命",value:""},{placeholder:"属性3：如 灭器",value:""},{placeholder:"属性4：如 青龙摆尾",value:""},{placeholder:"属性5：如 三板斧",value:""}],ronghe:"",minLevel:"",maxLevel:""})},onFocus:function(){this.setData({keyWordListVisible:!0})},onChange:function(e){""!=e.detail?this.getKeyWord(e):this.setData({keyWordList:[],keyWord:""})},showHistory:function(){this.triggerEvent("showHistory")},setKeyWord:function(e,t){this.setData({keyWord:e,goodsType:t,keyWordListVisible:!1})},getKeyWord:function(e){var t=(0,a.default)(e.detail);this.setData({keyWordList:t,keyWordListVisible:!0})},selectKeyWord:function(e){var t=e.target.dataset.keyWord,a=e.target.dataset.goodsType;this.setData({keyWord:t,goodsType:a,keyWordListVisible:!1})},addAttr:function(){this.data.attrList.length>=20?wx.showModal({content:"属性不能超过20条",showCancel:!1}):this.setData({attrList:[].concat(e(this.data.attrList),[{placeholder:"属性"+(this.data.attrList.length+1),value:""}])})},queryList:function(){if("exact"!==this.data.searchType||""!=this.data.keyWord){var e="0"===this.data.goodsType?this.data.attrList[0].value.replace(/\s/g,""):this.joinAttrStr();if("blur"!==this.data.searchType||""!=e)if(""!==this.data.maxLevel&&this.data.maxLevel<this.data.minLevel)wx.showModal({content:"元神最大等级不能小于最小等级",showCancel:!1});else{var t={keyWord:this.data.keyWord,shopName:this.data.shopName,order:this.data.order,searchType:this.data.searchType,goodsType:this.data.goodsType,ronghe:this.data.ronghe,minLevel:this.data.minLevel,maxLevel:this.data.maxLevel,attr:e};this.triggerEvent("setSvipParams",t),this.setData({show:!1})}else wx.showModal({content:"请至少输入一条属性",showCancel:!1})}else wx.showModal({content:"请选择物品",showCancel:!1})},joinAttrStr:function(){for(var e="",t=0;t<this.data.attrList.length;t++){var a=this.data.attrList[t].value.replace(/(^\s*)|(\s*$)/g,"");(0===a||a)&&(e+=a+"%")}return e.substr(0,e.length-1).replace(/\s+/g," ").replace(/＋/g,"+")}}}); 
 			}); 	require("pages/components/popup/popup.js");
 		__wxRoute = 'pages/components/radioGroup/radioGroup';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/components/radioGroup/radioGroup.js';	define("pages/components/radioGroup/radioGroup.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{radioOptions:{type:Array,value:[]},radioValue:{type:String,value:""},radioValueName:{type:String,value:""}},options:{addGlobalClass:!0},data:{icon:{normal:"/img/style/normal.png",active:"/img/style/active.png"}},methods:{radioChange:function(a){var e={valueName:this.data.radioValueName,value:a.detail};this.triggerEvent("radioChange",e)}}}); 
 			}); 	require("pages/components/radioGroup/radioGroup.js");
 		__wxRoute = 'pages/toolsPage/type/type';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/type/type.js';	define("pages/toolsPage/type/type.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{typeList:[],kangxing:[{title:"武/智表",url:"/pages/toolsPage/kangxing/wuzhi/wuzhi"},{title:"韧性表",url:"/pages/toolsPage/kangxing/renxing/renxing"},{title:"抗性表",url:"/pages/toolsPage/kangxing/kangxing/kangxing"},{title:"抗性表（抗性丸）",url:"/pages/toolsPage/kangxing/kangxingwan/kangxingwan"}],zhuangbei:[{title:"四象激活",url:"/pages/toolsPage/zhuangbei/sixiang/sixiang"},{title:"品质改造",url:"/pages/toolsPage/zhuangbei/gaizao/gaizao"}],yuanshen:[{title:"精粹计算器",url:"/pages/toolsPage/yuanshen/jingcui/jingcui"},{title:"成长值范围",url:"/pages/toolsPage/yuanshen/chengzhang/chengzhang"},{title:"白菜计算器",url:"/pages/toolsPage/yuanshen/baicai/baicai"}],zinv:[{title:"子女成本计算",url:"/pages/toolsPage/zinv/chengben/chengben"},{title:"子女天分",url:"/pages/toolsPage/zinv/tianfen/tianfen"},{title:"子女性格",url:"/pages/toolsPage/zinv/xingge/xingge"}]},onLoad:function(n){var a=n.type;this.setData({typeList:this.data[a]})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/type/type.js");
 		__wxRoute = 'pages/toolsPage/pianshu/pianshu';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/pianshu/pianshu.js';	define("pages/toolsPage/pianshu/pianshu.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/pianshu/pianshu.js");
 		__wxRoute = 'pages/toolsPage/tiku/tiku';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/tiku/tiku.js';	define("pages/toolsPage/tiku/tiku.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{data:[],initData:[{question:'"建元"是我国哪一个皇帝使用的年号？',answer:"汉武帝"},{question:"1347年，哪个国家的一位商人签发了第一张海运保险单？",answer:"意大利"},{question:"16世纪到18世纪下半期，欧洲工业生产组织的基本形式是",answer:"工场手工业"},{question:"16世纪欧洲哪个国家与中国通商？",answer:"葡萄牙"},{question:"17世纪的西印度公司是哪个国家在对外殖民扩张时建立的?",answer:"荷兰"},{question:"184年，黄巾民变爆发，受到商人张世平、苏双资助，刘备组织起义兵，跟随邹靖讨伐什么军",answer:"黄巾军"},{question:"1855年在鄱阳湖大败湘军的太平军将领是",answer:"石达开"},{question:"1868年明治维新后，明治天皇从京都迁都江户，江户现在是哪个城市？",answer:"东京"},{question:"1885年，台湾正式建立行省，第一任巡抚是",answer:"刘铭传"},{question:"1890-1896年非洲唯一独立的国家是",answer:"利比里亚"},{question:"18世纪初和1861年俄国两次大的改革都是由沙皇推行的，这表明他们",answer:"已意识到使国家摆脱落后追赶先进的必要性"},{question:"1915年12月12日，袁世凯复辟，年号为：",answer:"洪宪元年"},{question:"1916年美洲杯冠军是",answer:"阿根廷"},{question:"1920年，我国第一个共产主义小组成立，小组书记是：",answer:"陈独秀"},{question:"1924年发动北京政变的直系将领是",answer:"冯玉祥"},{question:"1924年奥林匹克运动会的举办地是？",answer:"巴黎"},{question:"1924年，黄埔军校建立，军校的党代表是：",answer:"廖仲恺"},{question:"1925年3月12日，孙中山病逝于：",answer:"北京"},{question:"1927年在北京被军阀张作霖杀害的共产党创始人是",answer:"李大钊"},{question:"1933年2月，德国法西斯制造“国会纵火案”的企图是",answer:"镇压德国共产党"},{question:"1940年春，中国境内并存的政权有几个",answer:"4个"},{question:"1945年8月，与毛泽东一起赴重庆同国民党谈判的有",answer:"周恩来、王若飞"},{question:"1945年日本政府正式宣布无条件投降的时间是？",answer:"8月15日"},{question:"1945年日本正式签署投降书的时间是",answer:"9月2日"},{question:"1946年制定的《中华民国宪法》是伪宪法，因为",answer:"国民党召开“国民大会”是非法的"},{question:"1947年6月，率领晋冀鲁豫解放军主力千里跃进大别山的是",answer:"刘伯承、邓小平"},{question:"1947年国民党反动派残酷镇压国统区“反饥饿、反内战、反迫害”的学生运动，制造的流血惨案是？",answer:"五二Ｏ惨案"},{question:"1953年人类第一次登上喜马拉雅山脉珠穆拉马峰，请问当时登顶的是",answer:"一个英国人和一个尼泊尔人"},{question:"1956年7月13日，长春第一汽车厂生产新中国的第一批汽车。这种汽车的名字是什么？",answer:"解放"},{question:"1970.4.24我国的第一颗人造卫星东方红一号用什么方式送上天的？",answer:"运载火箭"},{question:"1977年恢复高考后的第一次高考是在哪个季节举行的？",answer:"冬"},{question:"1981年，参加祖国大陆第一次“托福”考试的有多少人？",answer:"15"},{question:"1982年中国领导人先后访问了几个国家？",answer:"12"},{question:"1990年第十一届亚运会在何地举行？",answer:"北京"},{question:"1992年由4所大学合并的是：",answer:"浙江大学"},{question:"1994年世界杯决赛巴乔射失点球，请问巴西队谁也同样射失点球？",answer:"桑托斯"},{question:"1997年8月，哪一个国家成为第一个同中国就中国加入世贸组织达成双边协议的国家？",answer:"新西兰"},{question:"1998年中国科学家加入到《人类基因组》计划中，并完成了其中的百分之几？",answer:"0.01"},{question:"1998年欧洲各大联赛豪门俱乐部，为牵制欧足联（UEFA）关于欧洲冠军联赛改革制，于同年在比利时布鲁",answer:"切尔西"},{question:"19世纪80年代开始在俄国传播马克思主义的是",answer:"普列汉诺夫"},{question:"19世纪中叶，德国人自上而下地完成了法国人曾经“自下而上千的事”。这个“事”的实质是",answer:"为近代化扫除障碍"},{question:"19世纪末，取得卢沟桥至汉口铁路代理经营权的是",answer:"比利时"},{question:"1Q币能够兑换多少Q点?",answer:"10个"},{question:"1、2、3、4、5、6、7七个唱名的发明者来自：",answer:"法国"},{question:"2001年全国评选出了多少种名优烟?",answer:"36"},{question:"2002年，我国国内生产总值首次突破10万亿元，经济增长率达",answer:"8%"},{question:"2002年，我国国家外汇储备已达多少亿美元",answer:"2864亿美元"},{question:"2003年7月22日召开的是共青团第几次全国代表大会？",answer:"十五"},{question:"2003年举办的世界小姐大赛是第多少届",answer:"53"},{question:"2003年的中国首富是谁？",answer:"丁磊"},{question:"2003赛季世界一级方程式比赛共有几站?",answer:"17"},{question:"2012年QQ三国名校跨服PK赛，一共会产生多少支参赛队伍？",answer:"64支"},{question:"2012年QQ三国名校跨服PK赛，也就是跨服军团战的报名方式是？",answer:"官网投票"},{question:"2012年QQ三国名校跨服PK赛，也就是跨服军团战，每个服务器最少会有几个军团可以参加跨服赛？",answer:"1"},{question:"2012年QQ三国名校跨服PK赛，冠军奖励内容不包括以下那项？",answer:"经验"},{question:"2012年QQ三国名校跨服PK赛，单场净击杀数最多的玩家将登上哪个排行榜？",answer:"凶神恶煞榜"},{question:"2012年QQ三国名校跨服PK赛，单场赛事助威玩法的助威道具为？",answer:"助威喇叭"},{question:"2012年QQ三国名校跨服PK赛，在比赛中获得胜利的军团将能够在本服开启“跨服狂欢，舞动我服”。参与",answer:"海量经验"},{question:"2012年QQ三国名校跨服PK赛，在比赛中，回复队友血量最多的玩家将登上哪个排行榜？",answer:"妙手回春榜"},{question:"2012年QQ三国名校跨服PK赛，在比赛中，获胜速度最快的军团将登上哪个排行榜？",answer:"攻城略地榜"},{question:"2012年QQ三国名校跨服PK赛，最终拿到冠军的队伍，最多经历多少场比赛？",answer:"8"},{question:"2012年QQ三国名校跨服pk赛，有投票资格的玩家等级是？",answer:"70级以上"},{question:"2012年QQ三国名校跨服PK赛，每支队伍参赛的人数上限是？",answer:"100"},{question:"2012年QQ三国名校跨服PK赛，比赛分为哪两个阶段？",answer:"小组赛和淘汰赛"},{question:"2012年QQ三国名校跨服PK赛，比赛时间是星期几？",answer:"星期一、三、五"},{question:"2012年QQ三国名校跨服PK赛，跨服PK大赢家活动，单场赛事助威每轮可以助威不同结果次数的上限是？",answer:"3"},{question:"2012年QQ三国名校跨服pk赛，跨服PK大赢家活动，在助威和预测活动中没有猜中的玩家，将获得？",answer:"一定额度的经验奖励"},{question:"2012年QQ三国名校跨服PK赛，跨服PK大赢家活动，连胜赛事预测每次更改预测，道具增加的倍数是上一",answer:"2"},{question:"2012年QQ三国名校跨服PK赛，还有场外的助威、预测活动，请问该活动的名字是？",answer:"跨服PK大赢家"},{question:"2012年QQ三国名校跨服PK赛，连胜名校预测奖励内容为以下那项？",answer:"海量经验"},{question:"2012年QQ三国名校跨服PK赛，连胜名校预测玩法的预测道具为？",answer:"纪念册"},{question:"208年曹操在襄阳之战中灭了谁",answer:"刘表"},{question:"20世纪30年代日本制造各种借口挑起侵华战争，其中七七事变利用的是",answer:"借口一个士兵失踪"},{question:"3月23日，在太空工作时间最长的空间站“和平号”坠毁，它是在哪年发射升空的？",answer:"1986"},{question:"4世纪下半期统一黄河流域的政权是哪个少数民族建立的",answer:"氐族"},{question:"60年代哪个国家的宇航员首次登上月球？",answer:"美国"},{question:"755年,安禄山叛乱能够很快攻占洛阳、长安的主要原因是",answer:"唐朝内地兵力空虚"},{question:"88岁有个俗称，请问是什么",answer:"米寿"},{question:"8个体积相同的小球，其中一个比其它七个稍重，用天平最少称（）次就可找出稍重的小球",answer:"2"},{question:"9月28日，谭嗣同等六人被杀害于北京",answer:"菜市口"},{question:"<<中华人民共和国户口登记条例>>是哪一年颁布实施的？",answer:"1978年"},{question:'<出师表>中的"先帝"指刘备,"陛下"指',answer:"刘禅"},{question:"AC米兰是在哪一年首夺联赛冠军?",answer:"1901年"},{question:"AMX-30主战坦克是什么时间生产的？",answer:"60年代"},{question:"ATP(职业男子网球协会)的比赛种类不包括以下哪项？",answer:"国际大奖赛"},{question:"DNA物质主要存在于：",answer:"染色体中"},{question:"F1是什么界面的快捷键?",answer:"状态界面"},{question:"F1美国站在美国的哪个城市举行",answer:"印第安那波利斯"},{question:"F9是什么界面的快捷键?",answer:"商城"},{question:"Internet网在哪一年进入中国？",answer:"94年"},{question:"NBA单场比赛得分最高的是哪个球队？",answer:"活塞"},{question:"NBA单场比赛得分最高的是多少分？",answer:"186"},{question:"NBA历史上加时赛最长的有几场？",answer:"六场"},{question:"NBA历史上最矮的球员是谁？",answer:"蒂尼·博格斯"},{question:"NBA历史上最高的球员是谁？",answer:"曼纽特·博尔"},{question:"NBA历史上获得冠军最多的球队是？",answer:"凯尔特人"},{question:"NBA历史上那位球星获得的总冠军戒指最多？",answer:"比尔·拉赛尔"},{question:"NBA在哪一年创立？",answer:"1946"},{question:"NBA平均助攻最多的球员是谁？",answer:"约翰.斯托克顿"},{question:"NBA平均得分最高的球员是谁？",answer:"迈克尔.乔丹"},{question:"NBA得分最多的后卫是谁？",answer:"奥斯卡·罗伯逊"},{question:"NBA抢断最多的球员是谁？",answer:"斯托克顿"},{question:"NBA抢篮板最多的球员是谁？",answer:"张伯伦"},{question:"NBA的三分球纪录是由哪个球员保持的？",answer:"斯科特"},{question:"NPC的头上顶着一个灰色的感叹号是啥意思呀?",answer:"我再升级就可以接新任务了"},{question:"NPC的头上顶着一个问号是啥意思呀?",answer:"你有任务没做完，需要和他对话"},{question:"QQ三国军团战，一场比赛的比赛时长上限是？",answer:"60分钟"},{question:"QQ三国军团战，什么情况下，参赛队伍会自动获胜？",answer:"没有匹配到对手"},{question:"QQ三国军团战，军团参与玩家的等级要求是？",answer:"50级及以上"},{question:"QQ三国军团战，军团战斗积分是如何计算的？",answer:"击杀数和击破节点数"},{question:"QQ三国军团战，击杀对手可以获得战斗积分，请问击杀和自己级差多大的玩家可以获得积分呢？",answer:"10级以内"},{question:"QQ三国军团战，影响双方匹配的决定性依据是？",answer:"战斗积分"},{question:"QQ三国军团战，最终评定胜负的依据是？",answer:"率先击破对手军团长雕像的队伍"},{question:"QQ三国军团战，每个军团参与玩家数量上限是？",answer:"70人"},{question:"QQ三国军团战，每个星期什么时候进行？",answer:"每周星期六"},{question:"QQ三国军团战，试图参赛的军团长需要在赛前多久进行报名？",answer:"30分钟"},{question:"QQ三国官方网站的网址是:",answer:"sg.qq.com"},{question:"QQ三国是一款什么题材的游戏?",answer:"三国"},{question:"QQ三国有几种副职业?",answer:"五"},{question:"QQ三国的人物总共有几类基本属性?",answer:"五"},{question:"________中美建交，同月我国政府领导人邓小平赴美访问。",answer:"1979年1月1日"},{question:"____时期设立云南行中书省，云南省自此成为省名",answer:"元朝"},{question:"‘桃园三结义’是哪部名著里的故事？",answer:"三国演义"},{question:"“A”是美军哪种飞机的代号？",answer:"攻击机"},{question:"“一”字有几笔画？",answer:"一"},{question:"“一人有难，众人相帮；一方有难，八方支援。”这是人际交往中",answer:"互助原则的要求"},{question:"“一窍通”请填写下一句：",answer:"百窍通"},{question:"“一．二八”事变中率十九路军在上海抗击日军侵略的是",answer:"蔡廷锴、蒋光鼐"},{question:"“丁”字有几笔画？",answer:"二"},{question:"“七”字有几笔画？",answer:"二"},{question:"“三”字有几笔画？",answer:"三"},{question:"“三曹”出现在：",answer:"汉末"},{question:"“三月街”是我国哪个民族的传统节日？",answer:"白族"},{question:"“上”字有几笔画？",answer:"三"},{question:"“下”字有几笔画？",answer:"三"},{question:"“下榻”的最初意思是",answer:"把床放下来"},{question:"“不”字有几笔画？",answer:"四"},{question:"“世界第一墓”指的是那一座陵墓？",answer:"仁德天皇陵"},{question:"“东床快婿”原本是指：",answer:"王曦之"},{question:"“丰”字有几笔画？",answer:"四"},{question:"“乂”字有几笔画？",answer:"二"},{question:"“义”字有几笔画？",answer:"三"},{question:"“乌拉圭回合”是关贸总协定为加强和延伸现行的多边贸易体制，遏制贸易保护主义蔓延而发动的第几轮多边贸易",answer:"第八轮"},{question:"“乌纱帽”始自哪个朝代？",answer:"明朝"},{question:"“乙”字有几笔画？",answer:"一"},{question:"“九”字有几笔画？",answer:"二"},{question:"“也”字有几笔画？",answer:"三"},{question:"“于”字有几笔画？",answer:"三"},{question:"“五四”青年节正式确定于：",answer:"1949年"},{question:"“五四运动”发生在哪一年？",answer:"1919"},{question:"“五更”大约是几点钟？",answer:"5、6点"},{question:"“五经”是五种儒家经学典籍的合称，下列哪一种不在其中？",answer:"论语"},{question:"“井”字有几笔画？",answer:"四"},{question:"“何当共剪西窗烛，却话巴山夜雨时。”语自：",answer:"李商隐"},{question:"“元”字有几笔画？",answer:"四"},{question:"“公车上书”发生在哪一年？",answer:"1895"},{question:"“六艺”不包括",answer:"诗"},{question:"“冬天到了，春天还会远吗”语出",answer:"雪莱"},{question:"“刘三姐”是我国哪个少数民族传说中的人物？",answer:"壮族"},{question:"“初唐四杰”中有：",answer:"王勃"},{question:"“匕”字有几笔画？",answer:"二"},{question:"“北斗七星高，哥舒夜带刀。”出自哪首诗？",answer:"西鄙人《哥舒歌》"},{question:"“十”字有几笔画？",answer:"二"},{question:"“千”字有几笔画？",answer:"三"},{question:"“千锤万击出深山，烈火焚烧若等闲。粉身碎骨全不怕，要留清白在人间。”的作者是谁？",answer:"于谦"},{question:"“升”字有几笔画？",answer:"四"},{question:"“午”字有几笔画？",answer:"四"},{question:"“卜”字有几笔画？",answer:"二"},{question:"“古尔邦节”是一种什么节日？",answer:"宗教节日"},{question:"“司马昭之心，路人皆知”是谁说的话？",answer:"曹髦"},{question:"“名花倾国两相欢，常得君王带笑看。”这句诗出自哪位诗人作品？",answer:"李白"},{question:"“启”传说中夏代的国王，他姓？",answer:"姬"},{question:"“商女不知亡国恨，隔江犹唱后庭花”出自于杜牧的那首诗",answer:"泊秦淮"},{question:"“垂帘听政”始于何时？",answer:"唐朝"},{question:"“壬”字有几笔画？",answer:"四"},{question:"“夏季高温多雨，冬季寒冷干燥”是哪个城市的特点",answer:"长春"},{question:"“大丈夫生于乱世，当带三尺剑立不世之功，今所志未遂，奈何死乎！”为何人所言？",answer:"太史慈"},{question:"“大陆架”是什么？",answer:"大陆在海底的延伸"},{question:"“大陆漂移假说”是谁发现的？",answer:"魏格纳"},{question:"“天”字有几笔画？",answer:"四"},{question:"“天时不如地利，地利不如人和”出自：",answer:"《孟子》"},{question:"“天津三绝”指的是什么？",answer:"十八街麻花、狗不理包子、耳朵眼炸糕"},{question:"“天生我材必有用”出自唐代诗人李白的哪一首诗？",answer:"将进酒"},{question:"“天龙八部”是指佛教中的什么",answer:"八位护法"},{question:"“夫”字有几笔画？",answer:"四"},{question:"“夭”字有几笔画？",answer:"四"},{question:"“姑娘追”是哪个民族的游戏？",answer:"哈萨克族"},{question:"“寒雨连江夜入吴，平明送客楚山孤。”出自哪首诗？",answer:"王昌龄《芙蓉楼送辛渐》"},{question:"“川”字有几笔画？",answer:"三"},{question:"“干”字有几笔画？",answer:"三"},{question:"“建元”是我国那个皇帝使用的年号",answer:"汉武帝"},{question:"“开”字有几笔画？",answer:"四"},{question:"“开元盛世”是由唐朝哪个皇帝开创的：",answer:"唐玄宗"},{question:"“德为先，重教化”是哪个上古先帝的文化精神之魂？",answer:"舜帝"},{question:"“忽如一夜春风来，千树万树梨花开。”请问此诗的作者是谁？",answer:"岑参"},{question:"“戊戌六君子”指的是哪个？",answer:"谭嗣同"},{question:"“扬州八怪”是哪一时期在江苏扬州活动的一批职业画家？",answer:"康熙"},{question:"“拯救地球就是拯救未来”是哪一年世界环境日的主题口号？",answer:"1999"},{question:"“挥剑决浮云，诸侯尽西来”说的是那个皇帝？",answer:"秦始皇"},{question:"“放翁”是下列谁的晚号？",answer:"陆游"},{question:"“敕勒川，阴山下，天似穹庐，笼盖四野。天苍苍，野茫茫，风吹草低见牛羊。”描述的下列哪个民族的场景？",answer:"鲜卑"},{question:"“无”字有几笔画？",answer:"四"},{question:"“日出江花红似火，春来江水绿为蓝”是谁的作品：",answer:"白居易"},{question:"“明修栈道，暗渡陈仓”中的陈仓是指现在的",answer:"陕西宝鸡"},{question:"“星临万户动，月傍九霄多。”出自哪首诗？",answer:"杜甫《春宿左省》"},{question:"“晴川历历汉阳树，芳草萋萋鹦鹉洲。”出自哪首诗？",answer:"崔颢《黄鹤楼》"},{question:"“暹罗”是古代中国对哪个国家的称呼？",answer:"泰国"},{question:"“梁三喜”这一艺术形象是哪一部电影中的人物？",answer:"高山下的花环"},{question:"“毛公鼎”是什么时代的青铜器？",answer:"西周"},{question:"“汝似庙中之神，虽受祭祀，恨无灵验”是谁说谁？",answer:"弥衡说黄祖"},{question:"“沙龙”源于哪国语言？",answer:"法国"},{question:"“法律答问”作为一种法律形式始于",answer:"秦朝"},{question:"“涿鹿大战”是皇帝和谁之间的战争？",answer:"蚩尤"},{question:"“清风两袖朝天去，免得闾阎话短长。”在这里，“闾阎”借指什么？",answer:"百姓"},{question:"“渭城朝雨邑清晨”发生在现在陕西的什么地方?",answer:"灞桥"},{question:"“澶渊之盟”的议定地点澶州是今天的",answer:"河南濮阳"},{question:"“狮城”是哪里？",answer:"新加坡"},{question:"“王牌飞行员”最早授予击落几架飞机的空军战士？",answer:"5架"},{question:"“玫瑰之国”指的是哪个国家？",answer:"保加利亚"},{question:"“生”字有几笔画？",answer:"五"},{question:"“生死一知己，存亡两妇人”用来形容哪个历史人物？",answer:"韩信"},{question:"“百日维新”共持续了多少天",answer:"103"},{question:"“皇帝”作为国家元首的正式称号，始于",answer:"秦始皇"},{question:"“盅碗舞”是哪个民族的舞蹈？",answer:"蒙古族"},{question:"“知识就是力量”是谁的名言？",answer:"培根"},{question:"“绝对零度”是",answer:"摄氏-273.15度"},{question:"“网开一面”的“网”在这个典故里面原本是指什么？",answer:"狩猎"},{question:"“而往来者，乃作歌以长之。”出自哪首诗？",answer:"元结《石鱼湖上醉歌并序》"},{question:"“自在飞花轻若梦，无边似雨细如愁”是哪位词人的名句？",answer:"秦观"},{question:"“荷风送香气，竹露滴清响。”出自哪首诗？",answer:"孟浩然《夏日南亭怀辛大》"},{question:"“萨拉热窝事件”是第一次世界大战的导火线，它发生在",answer:"1914年"},{question:"“葡萄美酒夜光杯”的出处是",answer:"王翰的《凉州词二首》其一"},{question:"“蓝田日暖玉生烟”这句诗的原作者是谁",answer:"李商隐"},{question:"“蜀僧抱绿绮，西下峨眉峰。”出自哪首诗？",answer:"李白《听蜀僧浚弹琴》"},{question:"“读书破万卷，下笔如有神”，这是谁的诗句？",answer:"杜甫"},{question:"“谬种流传”最早是宋朝人批评当时的：",answer:"科举制度"},{question:"“赔了夫人又折兵”中的“夫人”指的是：",answer:"孙权的妹妹"},{question:"“走后门”一词的由来与历史上哪位人有关？",answer:"蔡京"},{question:"“遥看一处攒云树，近入千家散花竹。”出自哪首诗？",answer:"王维《桃源行》"},{question:"“醉月频中圣，迷花不事君”出自哪首诗？",answer:"李白《赠孟浩然》"},{question:"“镭射”指的是",answer:"激光"},{question:"“长”字有几笔画？",answer:"四"},{question:"“阿拉”属于下列那一宗教",answer:"伊斯兰教"},{question:"“陈桥兵变”是由谁发动的：",answer:"赵匡胤"},{question:"“马中赤兔，人中？”其中?号是什么",answer:"吕布"},{question:"“驸马”最初是指：",answer:"官名"},{question:"“鲁大海”这个艺术形象出自哪部作品？",answer:"雷雨"},{question:"“黄金燃桂尽，壮志逐年衰。”出自哪首诗？",answer:"孟浩然《秦中感秋寄远上人》"},{question:"“黔驴技穷”这一寓言故事的作者是谁？",answer:"柳宗元"},{question:"《七步诗》的作者是：",answer:"曹植"},{question:"《三国演义》中,赔了夫人又折兵的是谁?",answer:"孙权"},{question:"《三国演义》中主要人物中被称“三绝”：“奸绝”、“智绝”、“义绝”依次是",answer:"曹操、诸葛亮、关羽"},{question:"《三国演义》中哪两位人物青梅煮酒论英雄？",answer:"刘备和曹操"},{question:"《三国演义》中桃园三结义的三弟兄分别是双股剑的某某，使丈八蛇矛枪的某某和使青龙偃月刀的某人，这三人依",answer:"刘备、张飞、关羽"},{question:"《三国演义》写了三个国家的兴衰史,从桃园三结义至三国归晋共经历了五大时期,便是黄巾之乱,董卓之乱,群",answer:"天下归晋"},{question:"《中华人民共和国人口与计划生育法》于什么时候开始施行？",answer:"2002年9月1日"},{question:"《中华人民共和国老年人权益保障法》于何年何月何日开始施行？",answer:"1996年10月1日"},{question:"《义勇军进行曲》是由谁谱的曲？",answer:"聂耳"},{question:"《人民日报》创刊于",answer:"解放战争时期"},{question:"《儒林外史》的作者是",answer:"吴敬梓"},{question:"《全球通史》是当代哪位著名历史学家的著作？",answer:"斯塔夫里阿诺斯"},{question:"《列仙全传》记载了财神爷赵公明的事迹，赵公明乃元明八部鬼帅之一，请问下列哪位不是八部鬼帅之一？",answer:"李伯年"},{question:"《十面埋伏》是",answer:"琵琶曲"},{question:"《十面埋伏》是一部什么曲目？",answer:"琵琶曲"},{question:"《史记》中的“世家”是给什么人作的传",answer:"诸侯王"},{question:"《史记》的五种体例中，“世家”这种体例是",answer:"记述重要人物的家庭兴衰"},{question:"《史记》记载的历史大约有多少年？",answer:"3000"},{question:"《周易》中解释经的传有七种，也称为大传。下列哪项不属于大传之列？",answer:"《水经注》"},{question:"《四库全书》全书缮写七部分别藏于文渊、文源、文津、文宗、文汇、文溯、文澜七阁中，被英法联军焚毁的是",answer:"文源阁"},{question:"《天朝田亩制度》具有绝对平均主义性质，因为它规定",answer:"通过圣库制度平均分配所有农副产品"},{question:"《存在与时间》是谁的作品？",answer:"海德格尔"},{question:"《孙膑兵法》中有八种阵法，下列哪一项不属于八阵法？",answer:"密阵"},{question:"《官场现形记》的作者是",answer:"李宝嘉"},{question:"《宪法》规定我国享有选举权和被选举权的人是()",answer:"18周岁以上有政治权利的公民"},{question:"《容斋随笔》是谁的著作？",answer:"洪迈"},{question:"《富春山居图》是谁的名作？",answer:"黄公望"},{question:"《左传·定公四年》中说鲁公将殷民分为六族，下列哪族不是六族之一？",answer:"短勺氏"},{question:"《广陵散》是谁的作品：",answer:"稽康"},{question:"《强制戒毒办法》规定，强制戒毒期限为多长时间？",answer:"3-6个月"},{question:"《当家主母》是哪位言情小说家的作品？",answer:"席娟"},{question:"《悲惨世界》是下面哪个人物的代表作：",answer:"雨果"},{question:"《悲惨世界》是谁的作品？",answer:"雨果"},{question:"《成实论》属于哪个宗教的论书？",answer:"佛教"},{question:"《春秋》分成几个部分？",answer:"3"},{question:"《本草纲目》的作者为？",answer:"李时珍"},{question:"《梅溪词》是下列哪位词人的作品？",answer:"史达祖"},{question:"《梦溪笔谈》的作者沈括是：",answer:"宋朝人"},{question:"《楚辞》收录了以屈原为首几位诗人的作品，下列哪位诗人的作品未收录在《楚辞》中？",answer:"左丘明"},{question:"《正气歌》是哪位民族英雄在狱中写的不朽爱国诗篇？",answer:"文天祥"},{question:"《汉书》所属的历史编纂体例是",answer:"断代史"},{question:"《洛神赋图》是谁的作品？",answer:"顾恺之"},{question:"《清明上河图》中的人物共有多少位女性？",answer:"20"},{question:"《牡丹亭》是什么时候的戏剧？",answer:"明"},{question:"《皇帝的新装》的作者是：",answer:"丹麦的安徒生"},{question:"《短歌行》是谁的诗作呢?",answer:"曹操"},{question:"《福尔摩斯探案全集》的作者阿.柯南道尔是哪一个国家的人？",answer:"英国"},{question:"《第二十二条军规》的作者是：",answer:"约瑟夫·海勒"},{question:"《考工记》记载周王城街宽以车轨数计,干道宽几轨？",answer:"九"},{question:"《自政新篇》规定外国人“准其为国献策，但不得诽谤国法”，体现的外交思想是",answer:"自主开放外交"},{question:"《花间集》是我国最早的一部词集，《花间集》共有几部？",answer:"十"},{question:"《落花生》是哪位作家的代表作？",answer:"许地山"},{question:"《行路难》是唐代诗人李白的代表作，下列哪句诗不是出自《行路难》？",answer:"沅有芷兮澧有兰"},{question:"《西厢记》是元杂剧的四大爱情剧之一，它的作者是",answer:"王实甫"},{question:"《西游记》中王母娘娘的原型是西王母，那么西王母在我国的神话传说中最早是掌管什么的神的？",answer:"刑狱"},{question:"《记念刘和珍君》中的“刘和珍”是哪次惨案中的遇害者？",answer:"“一二九”"},{question:"《诗经》作品收集了哪一历史时期的诗歌",answer:"西周到春秋"},{question:"《诗经》又称为《诗三百》那么《诗经》收录的诗歌共有多少篇？",answer:"305"},{question:"《诗经》的传统分类是",answer:"风、雅、颂"},{question:"《费加罗的婚礼》是谁作曲？",answer:"莫扎特"},{question:"《辛丑条约》是中国历史上经过了哪次战争后签订的？",answer:"八国联军侵华战争"},{question:"《迟到的青年》是以下哪位作家的作品？",answer:"大江健三郎"},{question:"《送子天王图》是我国哪位著名画家的作品？",answer:"吴道子"},{question:"《阳关三叠》是什么时候的琴曲？",answer:"唐代"},{question:"《题昭君》是谁写的？",answer:"翦伯赞"},{question:"「乐不思蜀」是指以下那一个人?",answer:"刘禅"},{question:"「九品官人制」是谁提出来的?",answer:"陈群"},{question:"「洛神赋」其中洛神是意指谁的妻子?",answer:"曹丕"},{question:"一个天文单位是指：",answer:"地球到太阳的距离"},{question:"一个正常的成年人身上，大约有多少个细胞？",answer:"1800亿个"},{question:"一个角色的邮箱最多能容纳多少封邮件？",answer:"50"},{question:"一个队伍里最多可以有多少人?",answer:"5"},{question:"一人一盒酥讲的是谁与曹操斗智的故事",answer:"杨修"},{question:'一周基本只能使用多少个"双倍经验丸"?',answer:"十二个"},{question:"一品文官的衣服上绣着一只什么鸟?",answer:"仙鹤"},{question:"一次大战是贝尔格莱德是哪国的首都？",answer:"波斯尼亚"},{question:"七千人大会的召开是在那一年",answer:"1962年"},{question:"七步成诗的是?",answer:"曹植"},{question:"万里长城在哪一个时期开始兴建的？",answer:"秦代"},{question:"三北防护林体系不包括的省区是：",answer:"河南"},{question:"三十而立，四十不惑。六十是什么？",answer:"耳顺"},{question:"三叶虫灭绝于地质年代中的：",answer:"二叠纪"},{question:"三国中用计火烧连营把刘备打得大败的是谁？",answer:"陆逊"},{question:"三国中的名将“吕布”手下有著名的八位将军被称为“八健将”，其中不属于“八健将”之中的是？",answer:"郭汜"},{question:"三国中被誉为“八健将”的八位将军是谁的手下？",answer:"吕布"},{question:"三国中被诸葛亮称赞「真将军也」的是?",answer:"赵云"},{question:"三国名将马超的父亲乃汉末西凉太守，下列哪位不是西凉人物？",answer:"罗宪"},{question:"三国时代关羽曾有过五关斩六将的闻名事迹，下列谁不是关羽所斩六将？",answer:"文丑"},{question:"三国时期建国最早的是?",answer:"魏"},{question:"三国时期有闻名的五虎将，蜀汉后期也有蜀汉后五虎上将，下列哪位不属于蜀汉后五虎上将？",answer:"关平"},{question:"三国时期的周瑜官至大都督，请问我国历史上的都督制度源于哪朝？",answer:"三国"},{question:"三国时期虽然战事纷乱，但文人辈出，其中最著名的是“建安七子”，下列哪位不属于“建安七子”？",answer:"杨修"},{question:"三国时期，从未得到过汉玉玺的是谁?",answer:"刘备"},{question:"三国时期，很多人结拜为义子、义父，下列哪一对不是义子、义父关系？",answer:"马腾与马超"},{question:"三国时，刘备为了对抗曹军，派诸葛亮在哪儿与孙权结盟？",answer:"柴桑"},{question:"三国时，孙权假意与关羽交好，用以收回荆州的计策是：",answer:"笑里藏刀"},{question:"三国时，魏国的最后一个皇帝是：",answer:"曹奂"},{question:"三国有出名的“八献”，下列哪项不属于八献之一？",answer:"董仲舒献天人三策"},{question:"三国歇后语，「关公前面耍大刀」后面是?",answer:"不自量力"},{question:"三国演义中吕布死于何人之手",answer:"曹操"},{question:"三国演义中的五虎上将指的是",answer:"关羽"},{question:"三国演义中的周瑜死于巴丘，是现在的",answer:"岳阳"},{question:"三国演义中诸葛亮六出祁山，其中失街亭，斩马谡是在第几次出祁山的时候",answer:"5"},{question:"三国演义中，曹仁的八门金锁阵被哪位军师所破?",answer:"徐庶"},{question:"三国演义中，第一个死在张飞丈八蛇矛之下的是?",answer:"邓茂"},{question:"三国演义是谁的著作",answer:"罗贯中"},{question:"三国演义的作者罗贯中，是元末明初的",answer:"小说家和戏曲家"},{question:"三国演义第一回讲的就是什么故事",answer:"桃园结义"},{question:"三国演义讲的是什么时期的事情",answer:"东汉末年"},{question:"三国猛将张飞，字益德，是什么出身",answer:"屠户"},{question:"三国的最后胜利国是：",answer:"晋"},{question:"三曹出现在：",answer:"汉末"},{question:"上海市的电话区号是多少？",answer:"21"},{question:"上海市闸北区的闸北公园内，有一座宋教仁先生的墓，请问该墓建于什么年代？",answer:"1914"},{question:"上海的市花是什么?",answer:"白玉兰"},{question:"上海金茂大厦高420.5米,居本世纪中国第一高建筑,问有几层?",answer:"88层"},{question:"上消化道出血最常见的原因是什么？",answer:"胃、十二指肠溃疡"},{question:"上网时会发现很多网站都有自己的“镜像网站”，在这里“镜像”是指什么意思",answer:"原物的一份拷贝"},{question:"下列不属于“唐宋八大家”之一的是：",answer:"李白"},{question:"下列不属于《马关条约》内容的是",answer:"允许日本在中国投资建筑铁路"},{question:"下列不属于上古神话？",answer:"黄帝战蚩尤"},{question:"下列不属于战国时期的史事是哪项？",answer:"横扫六合"},{question:"下列不属于莎士比亚的五大悲剧的是？",answer:"《罗密欧与茱丽叶》"},{question:"下列不属于计算机网络功能的是",answer:"数据存储与数据备份"},{question:"下列不属于黄历中术语的是哪项？",answer:"动工"},{question:"下列不是汉代的骑兵主要武器的是哪项？",answer:"剑"},{question:"下列乐器中不属于民族乐器的是",answer:"长笛"},{question:"下列五虎将中那个最早死?",answer:"关羽"},{question:"下列人物中不属于“竹林七贤”的是",answer:"袁枢"},{question:"下列人物中谁是清代的皇帝？",answer:"顺治"},{question:"下列人物中，开辟了通往美洲的新航路的是",answer:"哥伦布"},{question:"下列什么植物生长速度最快?",answer:"竹子"},{question:"下列何书为诸葛亮所著？",answer:"兵书二十四篇"},{question:"下列何者不属于三原色",answer:"黄色"},{question:"下列作品和作者对应正确的选项是？",answer:"曹操《燕歌行》"},{question:"下列关于三国人物姓名表字错误的是哪项？",answer:"吕布字奉阳"},{question:"下列关于历届世界杯主题曲的描述正确的是哪项？",answer:"1994年美国世界杯主题曲－：“辉煌之地”"},{question:"下列关于历届国际足联主席的描述错误的是?",answer:"阿瑟-德鲁利德国1955-1961"},{question:"下列关于古人的爵名表述错误的是？",answer:"北宋王安石封爵王国公"},{question:"下列关于古人的谥号表述错误的是？",answer:"左光斗为左毅公"},{question:"下列关于古代词人的别号表述错误的是？",answer:"文天祥号文山居士"},{question:"下列关于古代诗人的别号表述错误的是？",answer:"文天祥号文山居士"},{question:"下列关于夺冠时间描述正确的是？",answer:"1986墨西哥"},{question:"下列关于建安诗人及其作品的错误描述是哪项？",answer:"曹植《蒿里行》"},{question:"下列关于河北秦皇岛境内长城的统计中哪项是错误的？",answer:"要塞3座"},{question:"下列关于皇帝们爱好的描述错误的是哪项？",answer:"唐庄宗喜欢蹴鞠"},{question:"下列关于诗人及其作品的介绍错误的是哪项？",answer:"李颀《燕歌行》"},{question:"下列动物哪一个属于昆虫?",answer:"蝴蝶"},{question:"下列历史事件中，发生得最早的是：",answer:"玄奘西游取经"},{question:"下列可以开平方根的是哪一个？",answer:"4"},{question:"下列合同中不适用合同法的是",answer:"收养合同"},{question:"下列哪一个不属于软体动物？",answer:"蛇"},{question:"下列哪一个不是其他人的兄弟？",answer:"诸葛尚"},{question:"下列哪一个不是夏朝的皇帝？",answer:"后羿"},{question:"下列哪一个不是骚扰人类安宁,吮吸疾病和病原体的昆虫?",answer:"蜻蜓"},{question:"下列哪一个事件与军阀段祺瑞无关?",answer:"一·三惨案"},{question:"下列哪一个人物的名字在西游记中是以动物命名的？",answer:"猪八戒"},{question:"下列哪一个动物属于素食动物?",answer:"驼"},{question:"下列哪一个单位属于体积单位？",answer:"立方米"},{question:"下列哪一个单位属于力的单位？",answer:"达因"},{question:"下列哪一个单位属于功率的单位？",answer:"马力"},{question:"下列哪一个单位属于压力的单位？",answer:"大气压"},{question:"下列哪一个单位属于密度单位？",answer:"千克/米3"},{question:"下列哪一个单位属于市制的容量计量单位？",answer:"勺"},{question:"下列哪一个单位属于市制的质量单位？",answer:"担"},{question:"下列哪一个单位属于市制的长度单位？",answer:"里"},{question:"下列哪一个单位属于平面角单位？",answer:"度"},{question:"下列哪一个单位属于时间单位？",answer:"年"},{question:"下列哪一个单位属于电感的单位？",answer:"电磁亨利"},{question:"下列哪一个单位属于电磁量的单位？",answer:"安培"},{question:"下列哪一个单位属于能量的单位？",answer:"焦耳"},{question:"下列哪一个单位属于质量单位？",answer:"吨"},{question:"下列哪一个单位属于速度单位？",answer:"千米/小时"},{question:"下列哪一个单位属于面积单位？",answer:"平方米"},{question:"下列哪一个单位属于音响单位？",answer:"分贝"},{question:"下列哪一个单位是度量长度的单位？",answer:"米"},{question:"下列哪一个字开头第一笔是折？",answer:"书"},{question:"下列哪一个字开头第一笔是捺？",answer:"安"},{question:"下列哪一个字开头第一笔是撇？",answer:"心"},{question:"下列哪一个字开头第一笔是横？",answer:"横"},{question:"下列哪一个字开头第一笔是竖？",answer:"昆"},{question:"下列哪一个字开头第二笔是横？",answer:"王"},{question:"下列哪一个字开头第二笔是竖？",answer:"横"},{question:"下列哪一个属于两翅目昆虫?",answer:"蚊"},{question:"下列哪一个属于中经纬气候？",answer:"副热带干旱与半干旱气候"},{question:"下列哪一个属于亚洲动物？",answer:"东北虎"},{question:"下列哪一个属于低经纬气候？",answer:"赤道多雨气候"},{question:"下列哪一个属于医学昆虫的天敌？",answer:"赤眼蜂"},{question:"下列哪一个属于医学昆虫？",answer:"马陆"},{question:"下列哪一个属于可以飞的鸟？",answer:"黄莺"},{question:"下列哪一个属于同翅目昆虫?",answer:"蝉"},{question:"下列哪一个属于国家一级保护的海洋动物？",answer:"红珊瑚"},{question:"下列哪一个属于我国的昆虫学家?",answer:"陶家驹"},{question:"下列哪一个属于无脊椎动物？",answer:"水母"},{question:"下列哪一个属于昆虫的各目分类?",answer:"门"},{question:"下列哪一个属于昆虫？",answer:"蝴蝶"},{question:"下列哪一个属于猫科动物？",answer:"猎豹"},{question:"下列哪一个属于珍稀动物？",answer:"大熊猫"},{question:"下列哪一个属于非洲的动物？",answer:"鸵鸟"},{question:"下列哪一个属于非洲的肉食动物?",answer:"非洲狮"},{question:"下列哪一个属于非洲草食动物？",answer:"牛羚"},{question:"下列哪一个属于鞘翅目的昆虫?",answer:"萤火虫"},{question:"下列哪一个属于食肉动物?",answer:"狮子"},{question:"下列哪一个属于食肉恐龙？",answer:"霸王龙"},{question:"下列哪一个属于食草动物？",answer:"羊"},{question:"下列哪一个属于鱼类？",answer:"金鱼"},{question:"下列哪一个属于鸟类？",answer:"金丝雀"},{question:"下列哪一个年份所属的生肖是兔？",answer:"1951"},{question:"下列哪一个年份所属的生肖是牛？",answer:"1949"},{question:"下列哪一个年份所属的生肖是狗？",answer:"1934"},{question:"下列哪一个年份所属的生肖是猪？",answer:"1947"},{question:"下列哪一个年份所属的生肖是猴？",answer:"1944"},{question:"下列哪一个年份所属的生肖是羊？",answer:"1943"},{question:"下列哪一个年份所属的生肖是虎？",answer:"1950"},{question:"下列哪一个年份所属的生肖是蛇？",answer:"1941"},{question:"下列哪一个年份所属的生肖是马？",answer:"1942"},{question:"下列哪一个年份所属的生肖是鸡？",answer:"1945"},{question:"下列哪一个年份所属的生肖是鼠？",answer:"1948"},{question:"下列哪一个年份所属的生肖是龙？",answer:"1940"},{question:"下列哪一个数不是实数？",answer:"2的平方根"},{question:"下列哪一个数是20以内的质数？",answer:"2"},{question:"下列哪一个数是2和3的公倍数？",answer:"36"},{question:"下列哪一个数是2的多次乘方数值？",answer:"32"},{question:"下列哪一个数是偶数？",answer:"2"},{question:"下列哪一个数是大于10小于50的质数？",answer:"11"},{question:"下列哪一个数是大于50小于100的质数？",answer:"61"},{question:"下列哪一个数是奇数？",answer:"1"},{question:"下列哪一个数是无理数？",answer:"12.561279…"},{question:"下列哪一个数是有理数？",answer:"35"},{question:"下列哪一个数能被五整除？",answer:"230"},{question:"下列哪一个是8大板块之一？",answer:"北美洲板块"},{question:"下列哪一个是中国近代史的人物?",answer:"秋瑾"},{question:"下列哪一个是偶数？",answer:"10"},{question:"下列哪一个是儒家思想的经典著作《五经》中的内容？",answer:"诗"},{question:"下列哪一个是十二属相?",answer:"狗"},{question:"下列哪一个是奇数？",answer:"9"},{question:"下列哪一个是属于我国公元前的人物?",answer:"刘邦"},{question:"下列哪一个是已经灭绝的动物？",answer:"渡渡鸟"},{question:"下列哪一个是数学家？",answer:"高斯"},{question:"下列哪一个是数学运算符号？",answer:"加号"},{question:"下列哪一个是昆虫生活场所之一?",answer:"空中生活"},{question:"下列哪一个是直角三角形？",answer:"有一个角是直角的三角形"},{question:"下列哪一个是空中生活的昆虫？",answer:"蜜蜂"},{question:"下列哪一个是立体几何图形？",answer:"圆柱体"},{question:"下列哪一个是药用昆虫?",answer:"冬虫夏草"},{question:"下列哪一个是质数？",answer:"2"},{question:"下列哪一个景观不属于北京？",answer:"金字塔"},{question:"下列哪一个角是钝角？",answer:"91度角"},{question:"下列哪一个角是锐角？",answer:"30度角"},{question:"下列哪一事件具有政变性质：",answer:"陈桥兵变"},{question:"下列哪一件事是真实的？",answer:"诸葛亮布“八卦阵”"},{question:"下列哪一位不属于北宋有臭名昭著的“六贼”？",answer:"杨戬"},{question:"下列哪一位不是纵横家的代表人物？",answer:"韩非"},{question:"下列哪一位是中国数学家？",answer:"祖冲之"},{question:"下列哪一位是俄国的文学家?",answer:"契诃夫"},{question:"下列哪一位是唐宋八大家?",answer:"韩愈"},{question:"下列哪一位是意大利文世复兴时期的人物?",answer:"但西"},{question:"下列哪一位是我国古代的军事家?",answer:"孙武"},{question:"下列哪一位是我国的哲学家?",answer:"张岱年"},{question:"下列哪一位是数学家？",answer:"钱学森"},{question:"下列哪一位是春秋战国时期的思想家?",answer:"老子"},{question:"下列哪一位是法国的文学家?",answer:"雨果"},{question:"下列哪一位是法家的代表人物？",answer:"韩非"},{question:"下列哪一位是清朝戊戌变法的六君子?",answer:"谭嗣同"},{question:"下列哪一位是神话中的人物?",answer:"孙悟空"},{question:"下列哪一座是我国南方的城市?",answer:"杭州"},{question:"下列哪一种不属于灵长类动物？",answer:"长爪沙鼠"},{question:"下列哪一种不属于热带鱼？",answer:"半月神仙"},{question:"下列哪一种不属于爬行动物？",answer:"大鳗螈"},{question:"下列哪一种属于偶蹄类动物？",answer:"猪"},{question:"下列哪一种属于古北界的动物？",answer:"驼鹿"},{question:"下列哪一种昆虫是益虫?",answer:"蜻蜓"},{question:"下列哪一种昆虫有毒?",answer:"蜜蜂"},{question:"下列哪一种昆虫生活在地表?",answer:"蚂蚁"},{question:"下列哪一种是飞行类昆虫?",answer:"蜜蜂"},{question:"下列哪一种武器是国际法明确规定禁止在战争中使用的？",answer:"芥子气炮弹"},{question:"下列哪一种灭火设备对环境有损害？",answer:"卤代烷"},{question:"下列哪一称谓与雅典的梭伦不相符",answer:"哲学家"},{question:"下列哪一节气与其它三个不在同一季度？",answer:"处暑"},{question:"下列哪一部是莎士比亚的作品?",answer:"哈姆莱特"},{question:"下列哪一部电影讲述的是动物的故事？",answer:"猫狗大战"},{question:"下列哪一项不属于古“九州”之一？",answer:"随州"},{question:"下列哪一项不是唐诗的基本形式？",answer:"六言律诗"},{question:"下列哪一项不是足球术语?",answer:"弧圈球"},{question:"下列哪个不属于四大文学体裁的？",answer:"童话"},{question:"下列哪个不属于建安文学的作品？",answer:"《上林赋》"},{question:"下列哪个不是三国的典故？",answer:"闻鸡起舞"},{question:"下列哪个不是上古魔神？",answer:"托塔天王李靖"},{question:"下列哪个不是中兴四大诗人的代表作？",answer:"《江湖集》"},{question:"下列哪个不是中国历史上的皇宫？",answer:"雍布拉康"},{question:"下列哪个不是元曲中的曲牌？",answer:"《水调歌头》"},{question:"下列哪个不是元杂剧中的主要角色？",answer:"生"},{question:"下列哪个不是初唐四杰之一？",answer:"王维"},{question:"下列哪个不是北京八大楼之一？",answer:"黎昌楼"},{question:"下列哪个不是南京历史上的称谓？",answer:"“江京”"},{question:"下列哪个不是南京的古称或别名",answer:"江都"},{question:"下列哪个不是夏朝的人物？",answer:"汤"},{question:"下列哪个不是我国历史上山西省内有名的瓷器窑口？",answer:"南丰窑"},{question:"下列哪个不是我国历史上江西省内有名的瓷器窑口？",answer:"闽清窑"},{question:"下列哪个不是我国历史上河北省内有名的瓷器窑口？",answer:"耀州窑"},{question:"下列哪个不是我国历史上河南省内有名的瓷器窑口？",answer:"慈溪窑"},{question:"下列哪个不是我国历史上浙江省内有名的瓷器窑口？",answer:"扒村窑"},{question:"下列哪个不是我国历史上福建省内有名的瓷器窑口？",answer:"洪州窑"},{question:"下列哪个不是我国四大名楼？",answer:"鹤雀楼"},{question:"下列哪个世界近现代著名的数学家？",answer:"伊藤清"},{question:"下列哪个为正确的0的发音？",answer:"脖"},{question:"下列哪个为正确的ai的发音？",answer:"才"},{question:"下列哪个为正确的chi的发音？",answer:"吃"},{question:"下列哪个为正确的ci的发音？",answer:"次"},{question:"下列哪个为正确的ei的发音？",answer:"被"},{question:"下列哪个为正确的eng的发音？",answer:"曾"},{question:"下列哪个为正确的en的发音？",answer:"真"},{question:"下列哪个为正确的ing的发音？",answer:"应"},{question:"下列哪个为正确的in的发音？",answer:"因"},{question:"下列哪个为正确的i的发音？",answer:"继"},{question:"下列哪个为正确的shi的发音？",answer:"是"},{question:"下列哪个为正确的si的发音？",answer:"丝"},{question:"下列哪个为正确的zhi的发音？",answer:"制"},{question:"下列哪个为正确的zi的发音？",answer:"自"},{question:"下列哪个事件不是发生在20世纪50年代",answer:"四清"},{question:"下列哪个事件不是发生在三国时期？",answer:"胯下之辱"},{question:"下列哪个人不是从袁绍处投到曹操的？",answer:"文聘"},{question:"下列哪个人是中国著名文学家",answer:"鲁迅"},{question:"下列哪个佛堂不是紫禁城的藏传佛堂？",answer:"佛香阁"},{question:"下列哪个军队不是贞观时期的十六卫之一？",answer:"豹扑"},{question:"下列哪个区域不是夺荆州中需要争夺的区域",answer:"麒麟区"},{question:"下列哪个历史上的国家没有定都汴京？",answer:"陈"},{question:"下列哪个史书属于古代著名史书作？",answer:"《春秋》"},{question:"下列哪个名族不是古代中国的民族？",answer:"大食"},{question:"下列哪个国家不是春秋时期的国家？",answer:"韩"},{question:"下列哪个国家不是联合国常任理事国？",answer:"德国"},{question:"下列哪个国家以白种人为主？",answer:"印度"},{question:"下列哪个国家参加过八国联军，火烧圆明园？",answer:"美"},{question:"下列哪个国家属于欧洲",answer:"芬兰"},{question:"下列哪个国家属于美洲",answer:"巴西"},{question:"下列哪个国家没有获得过欧洲杯冠军？",answer:"葡萄牙"},{question:"下列哪个地方不是汉朝时期的乌恒驻地？",answer:"西凉"},{question:"下列哪个地方属于汉朝时期的乌恒驻地？",answer:"广阳"},{question:"下列哪个城市不是六大古都之一？",answer:"苏州"},{question:"下列哪个官职不属于秦朝的九卿之列？",answer:"御史大夫"},{question:"下列哪个官职不是唐朝的武职？",answer:"都护使"},{question:"下列哪个属于世界五大宫",answer:"北京故宫"},{question:"下列哪个成语不是出自于《项羽本纪》？",answer:"亡羊补牢"},{question:"下列哪个战事不是发生在魏晋南北朝时期？",answer:"八王之乱"},{question:"下列哪个才是我国历史上江西省内有名的瓷器窑口？",answer:"南丰窑"},{question:"下列哪个才是晋代的典故？",answer:"闻鸡起舞"},{question:"下列哪个政权不属于和北宋并存的割据政权？",answer:"西夏"},{question:"下列哪个是中国古代著名的数学家？",answer:"祖冲之"},{question:"下列哪个是中国近现代著名的数学家？",answer:"华罗庚"},{question:"下列哪个是云南省的地名?",answer:"昆明"},{question:"下列哪个是伯拉姆斯的作品",answer:"摇篮曲"},{question:"下列哪个是内蒙古自治区的地名?",answer:"包头"},{question:"下列哪个是北京北海中的古建筑?",answer:"永安寺"},{question:"下列哪个是北京天坛中的古建筑?",answer:"西天门"},{question:"下列哪个是北京市的地名?",answer:"海淀"},{question:"下列哪个是北京故宫中的古建筑?",answer:"太和门"},{question:"下列哪个是台湾的地名?",answer:"台北"},{question:"下列哪个是四川省的地名?",answer:"成都"},{question:"下列哪个是夏代的爵命等级？",answer:"勋"},{question:"下列哪个是宁夏回族自治区的地名?",answer:"银川"},{question:"下列哪个是安徽的旅游景区",answer:"九华山"},{question:"下列哪个是安徽省的地名?",answer:"马鞍山"},{question:"下列哪个是山东省的地名?",answer:"济南"},{question:"下列哪个是山西省的地名?",answer:"太原"},{question:"下列哪个是广东省的地名?",answer:"南海"},{question:"下列哪个是广西的旅游景区",answer:"漓江"},{question:"下列哪个是广西省的地名?",answer:"桂林"},{question:"下列哪个是新疆的旅游景区",answer:"天山天池"},{question:"下列哪个是新疆省的地名?",answer:"哈密"},{question:"下列哪个是江苏省的地名?",answer:"南京"},{question:"下列哪个是江西省的地名?",answer:"南昌"},{question:"下列哪个是河北省的地名?",answer:"承德"},{question:"下列哪个是河南省的地名?",answer:"洛阳"},{question:"下列哪个是浙江省的地名?",answer:"杭州"},{question:"下列哪个是湖北的旅游景区",answer:"武汉东湖"},{question:"下列哪个是湖北省的地名?",answer:"均县"},{question:"下列哪个是湖南省的地名?",answer:"桃源"},{question:"下列哪个是甘肃省的地名?",answer:"兰州"},{question:"下列哪个是福建省的地名?",answer:"开元"},{question:"下列哪个是西藏自治区的地名?",answer:"拉萨"},{question:"下列哪个是辽宁省的地名?",answer:"易县"},{question:"下列哪个是针对人物外貌的描写？",answer:"服装"},{question:"下列哪个是陕西省的地名?",answer:"西安"},{question:"下列哪个机构不是元代宣慰司下辖？",answer:"镇抚使"},{question:"下列哪个民族不是唐朝时期的异族？",answer:"羌"},{question:"下列哪个汉朝的帝王属于东汉帝王？",answer:"汉光武帝"},{question:"下列哪个派系不是禅宗的分支？",answer:"慧心宗"},{question:"下列哪个皇帝迁都北京？",answer:"朱隶"},{question:"下列哪个职务是南宋初期才出现的？",answer:"镇抚使"},{question:"下列哪个节气属于24节气？",answer:"雨水"},{question:"下列哪个词语应读成xiě（三声）",answer:"血脓"},{question:"下列哪个词语应读成xùe（四声）",answer:"血液"},{question:"下列哪个诗集不是三国时期的诗集？",answer:"向宠诗集"},{question:"下列哪个运动会没将铁人三项列入比赛项目？",answer:"世界警察运动会"},{question:"下列哪个部门不属于唐朝的中央事务机关九寺？",answer:"甘露寺"},{question:"下列哪个项目不是奥运会比赛项目？",answer:"武术"},{question:"下列哪些不属于曹氏父子的作品？",answer:"《西北有高楼》"},{question:"下列哪些不是《诗经》中的章节？",answer:"《湘夫人》"},{question:"下列哪些运动员的名字被国际体操联合会用来命名技术动作？",answer:"桑兰"},{question:"下列哪位“神”不是出自三国时期？",answer:"赵云神枪"},{question:"下列哪位三国人物不是东吴五君之列？",answer:"锺繇"},{question:"下列哪位三国人物不是曹魏五君之列？",answer:"华歆"},{question:"下列哪位不属于世界拳坛的传奇人物？",answer:"麦克·约翰逊"},{question:"下列哪位不属于唐代有名的十八学士？",answer:"刘政会"},{question:"下列哪位不属于唐朝凌烟阁二十四功臣？",answer:"李密"},{question:"下列哪位不属于明朝人物？",answer:"朱熹"},{question:"下列哪位不属于秦国的臣子？",answer:"蒙毅"},{question:"下列哪位不属于秦朝的臣子？",answer:"商鞅"},{question:"下列哪位不属于花间词人？",answer:"韩愈"},{question:"下列哪位不属于西晋时期“八王之乱”中的八王之列？",answer:"汝阳王"},{question:"下列哪位不属于西汉十八侯？",answer:"淮阴侯韩信"},{question:"下列哪位不是“永贞革新”中的“二王八司马”？",answer:"欧阳修"},{question:"下列哪位不是三国人物？",answer:"李陵"},{question:"下列哪位不是元朝时期的人物？",answer:"阿史那思摩"},{question:"下列哪位不是关羽过五关斩杀的武将？",answer:"文丑"},{question:"下列哪位不是北宋时期有名的北宋五子？",answer:"沈括"},{question:"下列哪位不是南北朝的出名世族？",answer:"太原王濬"},{question:"下列哪位不是商朝的国王？",answer:"仲康"},{question:"下列哪位不是商朝的王？",answer:"太康"},{question:"下列哪位不是战国时期的纵横家？",answer:"孙武"},{question:"下列哪位不是斯洛克著名选手？",answer:"泰格·伍兹"},{question:"下列哪位不是旧上海十大名媛？",answer:"王美人"},{question:"下列哪位不是汉光武帝所封云台二十八将？",answer:"藏霸"},{question:"下列哪位不是汉族名将？",answer:"郭子仪"},{question:"下列哪位不是汉朝名将？",answer:"郭子仪"},{question:"下列哪位不是秦国时期的人物？",answer:"刘向"},{question:"下列哪位不是西汉开国功臣？",answer:"潞国公侯君集"},{question:"下列哪位不是西藏黄教领袖？",answer:"提婆"},{question:"下列哪位不是魏晋南北朝时期的人物？",answer:"司马昭"},{question:"下列哪位人物不是夏朝的皇帝？",answer:"后羿"},{question:"下列哪位做过翰林院编修？",answer:"朱右"},{question:"下列哪位射箭运动员没有打破世界纪录？",answer:"王丽萍"},{question:"下列哪位属于不属于金元时期的“北七真？",answer:"王重阳"},{question:"下列哪位属于不属于金元时期的“南七真？",answer:"刘海蟾"},{question:"下列哪位属于中国十大元帅",answer:"朱德"},{question:"下列哪位属于汉朝时期的人物？",answer:"王昭君"},{question:"下列哪位思想家被判死刑",answer:"苏格拉底"},{question:"下列哪位才是西□体诗歌主要作家？",answer:"杨亿"},{question:"下列哪位是三国时魏书法家？",answer:"锺繇"},{question:"下列哪位是世界著名的科学家",answer:"哥白尼"},{question:"下列哪位是世界著名的音乐家",answer:"贝多芬"},{question:"下列哪位是唐朝时期的人物？",answer:"阿史那思摩"},{question:"下列哪位是明朝皇帝？",answer:"朱元璋"},{question:"下列哪位是民国六君子之一？",answer:"李燮"},{question:"下列哪位是汉朝人物？",answer:"李陵"},{question:"下列哪位是苏门四学士之一？",answer:"张耒"},{question:"下列哪位是西欧文艺复兴时期的代表艺术家？",answer:"达芬奇"},{question:"下列哪位没有入选1974年世界杯最佳阵容？",answer:"霍尔岑贝"},{question:"下列哪位没有担任过国际奥委会主席？",answer:"伊菲图斯"},{question:"下列哪位没有获得过欧洲杯决赛阶段最佳射手的称号？",answer:"基冈"},{question:"下列哪位美女不属于三国时期？",answer:"王昭君"},{question:"下列哪位老革命家被错误开除党籍，成为中共党史上最大的冤案？",answer:"刘少奇"},{question:"下列哪位著名科学家为真理献身，被烧死在鲜花广场的？",answer:"布鲁诺"},{question:"下列哪位被称为“岭南近代四家”之一？",answer:"梁鼎芬"},{question:"下列哪位词人属于豪放派词人？",answer:"辛弃疾"},{question:"下列哪位词人属于闲逸派词人？",answer:"史达祖"},{question:"下列哪位诗人不属于唐宋八大家？",answer:"辛弃疾"},{question:"下列哪位诗人不属于宋代婉约派词人？",answer:"姜夔"},{question:"下列哪位诗人不属于明代十才子？",answer:"唐顺之"},{question:"下列哪位诗人不属于明代后七子？",answer:"元宗道"},{question:"下列哪位诗人不属于晚唐五代时期？",answer:"韩愈"},{question:"下列哪位诗人不属于韩孟诗派？",answer:"韦庄"},{question:"下列哪位诗人号香山居士？",answer:"白居易"},{question:"下列哪句不是出元稹《遣悲怀三首之一》？",answer:"估客昼眠知浪静"},{question:"下列哪句不是出元稹《遣悲怀三首之三》？",answer:"针线犹存未忍开"},{question:"下列哪句不是出元稹《遣悲怀三首之二》？",answer:"野蔬充膳甘长藿"},{question:"下列哪句不是出刘禹锡《西塞山怀古》？",answer:"三年谪宦此栖迟"},{question:"下列哪句不是出刘长卿《江州重别薛六柳八二员外》？",answer:"三分割据纡筹策"},{question:"下列哪句不是出刘长卿《长沙过贾谊宅》？",answer:"顾影无如白发何"},{question:"下列哪句不是出卢纶《晚次鄂州》？",answer:"家住层城邻汉苑"},{question:"下列哪句不是出崔颢《行经华阴》？",answer:"鸿雁不堪愁里听"},{question:"下列哪句不是出李商隐《无题》？",answer:"管乐有才原不忝"},{question:"下列哪句不是出李商隐《无题二首之一》？",answer:"锦帆应是到天涯"},{question:"下列哪句不是出李商隐《无题二首之二》？",answer:"月斜楼上五更钟"},{question:"下列哪句不是出李商隐《春雨》？",answer:"蜡炬成灰泪始干"},{question:"下列哪句不是出李商隐《筹笔驿》？",answer:"春心莫共花争发"},{question:"下列哪句不是出李商隐《锦瑟》？",answer:"闲坐悲君亦自悲"},{question:"下列哪句不是出李商隐《隋宫》？",answer:"心有灵犀一点通"},{question:"下列哪句不是出李颀《送魏万之京》？",answer:"日暮乡关何处是"},{question:"下列哪句不是出杜甫《咏怀古迹五首之一》？",answer:"三峡星河影动摇"},{question:"下列哪句不是出杜甫《咏怀古迹五首之三》？",answer:"萧条异代不同时"},{question:"下列哪句不是出杜甫《咏怀古迹五首之二》？",answer:"三峡楼台淹日月"},{question:"下列哪句不是出杜甫《咏怀古迹五首之五》？",answer:"岁时伏腊走村翁"},{question:"下列哪句不是出杜甫《咏怀古迹五首之四》？",answer:"环佩空归月下魂"},{question:"下列哪句不是出杜甫《客至》？",answer:"隔叶黄鹂空好音"},{question:"下列哪句不是出杜甫《宿府》？",answer:"西山寇盗莫相侵"},{question:"下列哪句不是出杜甫《登楼》？",answer:"百年多病独登台"},{question:"下列哪句不是出杜甫《登高》？",answer:"初闻涕泪满衣裳"},{question:"下列哪句不是出杜甫《蜀相》？",answer:"夕奉天书拜琐闱"},{question:"下列哪句不是出杜甫《野望》？",answer:"舍南舍北皆春水"},{question:"下列哪句不是出杜甫《闻官军收河南河北》？",answer:"南浦清江万里桥"},{question:"下列哪句不是出杜甫《阁夜》？",answer:"永夜角声悲自语"},{question:"下列哪句不是出沈全期《古意呈补阙乔知之》？",answer:"水滴铜龙昼漏长"},{question:"下列哪句不是出温庭筠《利洲南渡》？",answer:"珠箔飘灯独自归"},{question:"下列哪句不是出温庭筠《苏武庙》？",answer:"数丛沙草群鸥散"},{question:"下列哪句不是出王维《积雨辋川庄作》？",answer:"燕台一去客心惊"},{question:"下列哪句不是出王维《酬郭给事》？",answer:"野老与人争席罢"},{question:"下列哪句不是出皇甫冉《春思》？",answer:"风物凄凄宿雨收"},{question:"下列哪句不是出祖咏《望蓟门》？",answer:"武帝祠前云欲散"},{question:"下列哪句不是出秦韬玉《贫女》？",answer:"卢家少妇郁金香"},{question:"下列哪句不是出自《史记》？",answer:"前事不忘，后事之师"},{question:"下列哪句不是出自僧皎然《寻陆鸿渐不遇》？",answer:"青楼自管弦"},{question:"下列哪句不是出自元结《石鱼湖上醉歌并序》？",answer:"半夜军行戈相拨"},{question:"下列哪句不是出自元结的《贼退示官吏并序》？",answer:"千里其如何"},{question:"下列哪句不是出自刘常卿《送李中丞归汉阳别业》？",answer:"复值接舆醉"},{question:"下列哪句不是出自刘禹锡《蜀先主庙》？",answer:"孤独异乡春"},{question:"下列哪句不是出自刘脊虚《阙题》？",answer:"晓月过残垒"},{question:"下列哪句不是出自刘长卿《新年作》？",answer:"称名忆旧容"},{question:"下列哪句不是出自刘长卿《送李中丞归汉阳别业》？",answer:"流水十年间"},{question:"下列哪句不是出自司空曙《喜外弟卢纶见宿》？",answer:"茫茫江汉上"},{question:"下列哪句不是出自司空曙《贼平后送人北归》？",answer:"初日郢门山"},{question:"下列哪句不是出自唐玄宗《经邹鲁祭孔子而叹之》？",answer:"是以陷邻境"},{question:"下列哪句不是出自孟浩然《与诸子登岘山》？",answer:"随意春芳歇"},{question:"下列哪句不是出自孟浩然《夜归鹿门山歌》？",answer:"万里浮云阴且晴"},{question:"下列哪句不是出自孟浩然《宿业师山房待丁大不至》？",answer:"真源了无取"},{question:"下列哪句不是出自孟浩然《清明日宴梅道士房》？",answer:"业复五铢钱"},{question:"下列哪句不是出自孟浩然《留别王侍御维》？",answer:"已似长沙傅"},{question:"下列哪句不是出自孟浩然《秦中感秋寄远上人》？",answer:"寒灯独夜人"},{question:"下列哪句不是出自孟浩然的《宿业师山房待丁大不至》？",answer:"赤丸夜语飞电光"},{question:"下列哪句不是出自孟郊《游子吟》？",answer:"胡窥青海湾"},{question:"下列哪句不是出自孟郊《烈女操》？",answer:"莫学游侠儿"},{question:"下列哪句不是出自宋之问《题大庾岭北驿》？",answer:"那堪玄鬓影"},{question:"下列哪句不是出自岑参《寄左省杜拾遗》？",answer:"梅柳渡江春"},{question:"下列哪句不是出自岑参《走马川行奉送封大夫出师西》？",answer:"变调如闻杨柳春"},{question:"下列哪句不是出自岑参的《与高适薛据登慈恩寺浮图》？",answer:"烟鸟栖初定"},{question:"下列哪句不是出自崔涂《孤雁》？",answer:"以我独沉久"},{question:"下列哪句不是出自崔涂《巴山道中除夜有怀》？",answer:"江柳共风烟"},{question:"下列哪句不是出自崔颢《黄鹤楼》？",answer:"空令岁月易蹉跎"},{question:"下列哪句不是出自张乔《书边事》？",answer:"秋来未著花"},{question:"下列哪句不是出自张九龄《感遇四首之三》？",answer:"远慰风雨夕"},{question:"下列哪句不是出自张九龄《望月怀远》？",answer:"栖栖一代中"},{question:"下列哪句不是出自张九龄的《湖口望庐山瀑布泉》？",answer:"忽念山中客"},{question:"下列哪句不是出自张籍《没蕃故人》？",answer:"独敲初夜磬"},{question:"下列哪句不是出自李商隐《北青萝》？",answer:"人在木兰舟"},{question:"下列哪句不是出自李商隐《落花》？",answer:"孤灯闻楚角"},{question:"下列哪句不是出自李商隐《韩碑》？",answer:"上林繁花照眼新"},{question:"下列哪句不是出自李商隐《风雨》？",answer:"归马识残旗"},{question:"下列哪句不是出自李白《关山月》？",answer:"持此谢高鸟"},{question:"下列哪句不是出自李白《夜泊牛渚怀古》？",answer:"空忆谢将军"},{question:"下列哪句不是出自李白《子夜四时歌：春歌》？",answer:"樵人归欲尽"},{question:"下列哪句不是出自李白《将进酒》？",answer:"不据山河据平地"},{question:"下列哪句不是出自李白《渡荆门送别》？",answer:"明朝有封事"},{question:"下列哪句不是出自李白《长干行》？",answer:"不见有人还"},{question:"下列哪句不是出自李白的《春思》？",answer:"落叶满空山"},{question:"下列哪句不是出自李益《喜见外弟又言别》？",answer:"春风吹又生"},{question:"下列哪句不是出自李颀《古意》？",answer:"由来征战地"},{question:"下列哪句不是出自李颀《听安万善吹筚篥歌》？",answer:"虬须虎眉仍大颡"},{question:"下列哪句不是出自李颀《听董大弹胡笳声兼寄语弄房给事》？",answer:"青山朝别暮还见"},{question:"下列哪句不是出自李颀《送陈章甫》？",answer:"十四为君妇"},{question:"下列哪句不是出自杜审言《和晋陵路丞早春游望》？",answer:"披衣觉露滋"},{question:"下列哪句不是出自杜牧《旅宿》？",answer:"知音世所稀"},{question:"下列哪句不是出自杜甫《兵车行》？",answer:"帝得圣相相曰度"},{question:"下列哪句不是出自杜甫《哀江头》？",answer:"戏罢曾无理曲时"},{question:"下列哪句不是出自杜甫《奉济驿重送严公四韵》？",answer:"偶然值林叟"},{question:"下列哪句不是出自杜甫《寄韩谏议》？",answer:"马毛带雪汗气蒸"},{question:"下列哪句不是出自杜甫《春宿左省》？",answer:"薄暮空潭曲"},{question:"下列哪句不是出自杜甫《月夜》？",answer:"月下飞天镜"},{question:"下列哪句不是出自杜甫《韦讽录事宅观曹将军画马图》？",answer:"岩扉松径长寂寥"},{question:"下列哪句不是出自柳宗元《渔翁》？",answer:"或骑麒麟翳凤凰"},{question:"下列哪句不是出自柳宗元的《古东门行》？",answer:"伫俟明年桂"},{question:"下列哪句不是出自柳宗元的《晨诣超师院读禅经》？",answer:"风泉满清听"},{question:"下列哪句不是出自温庭筠《送人东游》？",answer:"芳草已云暮"},{question:"下列哪句不是出自王勃《送杜少府之任蜀州》？",answer:"夫子何为者"},{question:"下列哪句不是出自王昌龄《塞上曲》？",answer:"步出东斋读"},{question:"下列哪句不是出自王昌龄的《同从弟南斋玩月忆山阴崔少府》？",answer:"松声晚窗里"},{question:"下列哪句不是出自王昌龄的《灞上闲居》？",answer:"淡扫荆门烟"},{question:"下列哪句不是出自王湾《次北固山下》？",answer:"梅柳渡江春"},{question:"下列哪句不是出自王维《山居秋暝》？",answer:"暮雨相呼失"},{question:"下列哪句不是出自王维《汉江临眺》？",answer:"报到山中去"},{question:"下列哪句不是出自王维《洛阳女儿行》？",answer:"酌饮四座以散愁"},{question:"下列哪句不是出自王维《终南别业》？",answer:"壮志逐年衰"},{question:"下列哪句不是出自王维《辋川闲居赠裴秀才迪》？",answer:"清辉玉臂寒"},{question:"下列哪句不是出自王维《过香积寺》？",answer:"坐看云起时"},{question:"下列哪句不是出自王维《青溪》？",answer:"日夕怀空意"},{question:"下列哪句不是出自王维的《渭川田家》？",answer:"风泉满清听"},{question:"下列哪句不是出自白居易《赋得古原草送别》？",answer:"芳心向春尽"},{question:"下列哪句不是出自白居易《长恨歌》？",answer:"我持长瓢坐巴丘"},{question:"下列哪句不是出自綦毋潜的《春泛若耶溪》？",answer:"使臣将王命"},{question:"下列哪句不是出自许浑《早秋》？",answer:"白日落梁州"},{question:"下列哪句不是出自邱为的《寻西山隐者不遇》？",answer:"当君怀归日"},{question:"下列哪句不是出自钱起《送僧归日本》？",answer:"天寒梦泽深"},{question:"下列哪句不是出自陈子昂的《白帝城怀古》？",answer:"安期始遗舄"},{question:"下列哪句不是出自韦庄《章台夜思》？",answer:"近种篱边菊"},{question:"下列哪句不是出自韦应物《淮上喜会梁川故人》？",answer:"别来沧海事"},{question:"下列哪句不是出自韦应物的《寄全椒山中道士》？",answer:"樵人归欲尽"},{question:"下列哪句不是出自韩愈《山石》？",answer:"贵戚权门得笔迹"},{question:"下列哪句不是出自韩翃《酬程延秋夜即事见赠》？",answer:"水月通禅寂"},{question:"下列哪句不是出自颜真卿的《赠裴将军》？",answer:"胡宁事渔钓"},{question:"下列哪句不是出自马戴《楚江怀古》？",answer:"近种篱边菊"},{question:"下列哪句不是出自马戴《灞上秋居》？",answer:"轻生一剑知"},{question:"下列哪句不是出自骆宾王《在狱咏蝉并序》？",answer:"风烟望五津"},{question:"下列哪句不是出自骆宾王的《咏怀》？",answer:"独往岂殊调"},{question:"下列哪句不是出自高适《燕歌行并序》？",answer:"烟销日出不见人"},{question:"下列哪句不是出薛逢《宫词》？",answer:"陇上羊归塞草烟"},{question:"下列哪句不是出钱起《赠阙下裴舍人》？",answer:"故垒萧萧芦荻秋"},{question:"下列哪句不是出韦应物《寄李儋元锡》？",answer:"阳和不散穷途恨"},{question:"下列哪句不是出韩翃《同题仙游观》？",answer:"今日花开又一年"},{question:"下列哪句出自于《春望》？",answer:"国破山河在"},{question:"下列哪句出自于《木兰辞》？",answer:"爷娘闻女来"},{question:"下列哪句出自于《游子吟》？",answer:"慈母手中线"},{question:"下列哪句出自于《蜀道难》？",answer:"使人听此凋朱颜"},{question:"下列哪句是出自乔知之《下山逢故夫》？",answer:"零露湿罗襦"},{question:"下列哪句是出自乔知之《从军》？",answer:"平砧捣文练"},{question:"下列哪句是出自乔知之《巫山高》？",answer:"摘芳共珍荐"},{question:"下列哪句是出自乔知之《拟古赠陈子昂》？",answer:"征战二庭深"},{question:"下列哪句是出自乔知之《苦寒行》？",answer:"幽都无多阳"},{question:"下列哪句是出自乔知之《长信宫中树》？",answer:"新叶虫书遍"},{question:"下列哪句是出自任希古《和李公七夕》？",answer:"延首晞云路"},{question:"下列哪句是出自元万顷《奉和太子纳妃太平公主出降》？",answer:"冠玉丽秾姿"},{question:"下列哪句是出自元万顷《奉和春日池台》？",answer:"凤楼通夜敞"},{question:"下列哪句是出自元稹《行宫》？",answer:"寥落古行宫"},{question:"下列哪句是出自刘宪《侍宴长宁公主东庄》？",answer:"夏早摘芙蕖"},{question:"下列哪句是出自刘宪《折杨柳》？",answer:"风花思舞巾"},{question:"下列哪句是出自刘希夷《孤松篇》？",answer:"零落从此始"},{question:"下列哪句是出自刘希夷《将军行》？",answer:"鼓声振原隰"},{question:"下列哪句是出自刘希夷《嵩岳闻笙》？",answer:"独夜草虫鸣"},{question:"下列哪句是出自刘希夷《巫山怀古》？",answer:"金釭焰青烟"},{question:"下列哪句是出自刘希夷《归山》？",answer:"空歌思杀人"},{question:"下列哪句是出自刘希夷《春女行》？",answer:"妆成独见时"},{question:"下列哪句是出自刘希夷《秋日题汝阳潭壁》？",answer:"风吹何历历"},{question:"下列哪句是出自刘希夷《谒汉世祖庙》？",answer:"道合赤符先"},{question:"下列哪句是出自刘希夷《采桑》？",answer:"步步春芳绿"},{question:"下列哪句是出自刘方平《春怨》？",answer:"寂寞空庭春欲晚"},{question:"下列哪句是出自刘方平《月夜》？",answer:"今夜偏知春气暖"},{question:"下列哪句是出自刘祎之《九成宫秋初应诏》？",answer:"山宫四序寒"},{question:"下列哪句是出自刘祎之《奉和别越王》？",answer:"周屏辞金殿"},{question:"下列哪句是出自刘祎之《奉和太子纳妃太平公主出降》？",answer:"万户声明发"},{question:"下列哪句是出自刘祎之《孝敬皇帝挽歌》？",answer:"晨飙断曙声"},{question:"下列哪句是出自刘祎之《酬郑沁州》？",answer:"伫兼司隶局"},{question:"下列哪句是出自刘禹锡《乌衣巷》？",answer:"旧时王谢堂前燕"},{question:"下列哪句是出自刘禹锡《春词》？",answer:"行到中庭数花朵"},{question:"下列哪句是出自刘长卿《弹琴》？",answer:"今人多不弹"},{question:"下列哪句是出自刘长卿《送上人》？",answer:"孤云将野鹤"},{question:"下列哪句是出自刘长卿《送灵澈》？",answer:"荷笠带斜阳"},{question:"下列哪句是出自卢照邻《三月曲水宴得尊字》？",answer:"公子黄金勒"},{question:"下列哪句是出自卢照邻《上之回》？",answer:"天子按雕戈"},{question:"下列哪句是出自卢照邻《入秦川界》？",answer:"苍山望不穷"},{question:"下列哪句是出自卢照邻《关山月》？",answer:"虏障抵祁连"},{question:"下列哪句是出自卢照邻《十五夜观灯》？",answer:"接汉疑星落"},{question:"下列哪句是出自卢照邻《咏史四首》？",answer:"髡钳为台隶"},{question:"下列哪句是出自卢照邻《奉使益州至长安发钟阳驿》？",answer:"晨登每惆怅"},{question:"下列哪句是出自卢照邻《巫山高》？",answer:"沾裳即此地"},{question:"下列哪句是出自卢照邻《折杨柳》？",answer:"风花乱舞衣"},{question:"下列哪句是出自卢照邻《文翁讲堂》？",answer:"苔深不辨铭"},{question:"下列哪句是出自卢照邻《早度分水岭》？",answer:"班鬓向长安"},{question:"下列哪句是出自卢照邻《昭君怨》？",answer:"胡庭沙正飞"},{question:"下列哪句是出自卢照邻《梅花落》？",answer:"雪处疑花满"},{question:"下列哪句是出自卢照邻《江中望月》？",answer:"沉钩摇兔影"},{question:"下列哪句是出自卢照邻《相如琴台》？",answer:"云疑作赋客"},{question:"下列哪句是出自卢照邻《石镜寺》？",answer:"隐隐香台夜"},{question:"下列哪句是出自卢照邻《紫骝马》？",answer:"转战入皋兰"},{question:"下列哪句是出自卢照邻《结客少年场行》？",answer:"负羽远从戎"},{question:"下列哪句是出自卢照邻《芳树》？",answer:"容色朝朝落"},{question:"下列哪句是出自卢照邻《赠李荣道士》？",answer:"敷诚归上帝"},{question:"下列哪句是出自卢照邻《辛法司宅观妓》？",answer:"不怪玉山颓"},{question:"下列哪句是出自卢照邻《还京赠别》？",answer:"戏凫分断岸"},{question:"下列哪句是出自卢照邻《陇头水》？",answer:"旌悬九月霜"},{question:"下列哪句是出自卢照邻《雨雪曲》？",answer:"节旄零落尽"},{question:"下列哪句是出自姚崇《夜渡江》？",answer:"闻香暗识莲"},{question:"下列哪句是出自姚崇《故洛阳城侍宴应制》？",answer:"山居云作缨"},{question:"下列哪句是出自姚崇《春日洛阳城侍宴》？",answer:"舜乐下前溪"},{question:"下列哪句是出自姚崇《秋夜望月》？",answer:"光光草露团"},{question:"下列哪句是出自孟浩然《宿建德江》？",answer:"日暮客愁新"},{question:"下列哪句是出自孟浩然《春晓》？",answer:"春眠不觉晓"},{question:"下列哪句是出自宋之问《入崖口五渡寄李適》？",answer:"山深云景鲜"},{question:"下列哪句是出自宋之问《初到陆浑山庄》？",answer:"夕阳破东山"},{question:"下列哪句是出自宋之问《初至崖口》？",answer:"丹青画松石"},{question:"下列哪句是出自宋之问《别之望后独宿蓝田山庄》？",answer:"予卧南山阿"},{question:"下列哪句是出自宋之问《夜饮东亭》？",answer:"惊栖多众音"},{question:"下列哪句是出自宋之问《宿云门寺》？",answer:"夜梵前山空"},{question:"下列哪句是出自宋之问《息夫人》？",answer:"息君情更亲"},{question:"下列哪句是出自宋之问《景龙四年春祠海》？",answer:"天回百川澍"},{question:"下列哪句是出自宋之问《洞庭湖》？",answer:"滢荧心欲无"},{question:"下列哪句是出自宋之问《浣纱篇赠陆上人》？",answer:"苎萝更蒙遮"},{question:"下列哪句是出自宋之问《温泉庄卧病寄杨七炯》？",answer:"朝夜翳云族"},{question:"下列哪句是出自宋之问《游法华寺》？",answer:"象筵敷念诚"},{question:"下列哪句是出自宋之问《自湘源至潭州衡山县》？",answer:"绿竹缘溪涧"},{question:"下列哪句是出自宋之问《自衡阳至韶州谒能禅师》？",answer:"虹饮江皋霁"},{question:"下列哪句是出自宋之问《见南山夕阳召监师不至》？",answer:"讵回道林辙"},{question:"下列哪句是出自宋之问《送赵六贞固》？",answer:"尽此盈樽酒"},{question:"下列哪句是出自宋之问《雨从箕山来》？",answer:"幸蒙真僧顾"},{question:"下列哪句是出自宋之问《题张老松树》？",answer:"使我长叹息"},{question:"下列哪句是出自宋璟《蒲津迎驾》？",answer:"月晓听鸡鸣"},{question:"下列哪句是出自宋璟《送苏尚书赴益州》？",answer:"君行霰雪飞"},{question:"下列哪句是出自岑参《逢入京使》？",answer:"马上相逢无纸笔"},{question:"下列哪句是出自崔日用《夜宴安乐公主宅》？",answer:"才子能歌夜未央"},{question:"下列哪句是出自崔日用《奉和九月九日登慈恩寺浮图应制》？",answer:"香梵遍秋空"},{question:"下列哪句是出自崔日用《奉和圣制春日幸望春宫应制》？",answer:"淑气依迟柳色青"},{question:"下列哪句是出自崔日用《奉和圣制送张说巡边》？",answer:"宣王六月兵"},{question:"下列哪句是出自崔日用《奉和圣制龙池篇》？",answer:"发匣先来瑞有虞"},{question:"下列哪句是出自崔日用《奉和立春游苑迎春应制》？",answer:"金缕晨鸡未学鸣"},{question:"下列哪句是出自崔日用《奉和送金城公主适西蕃》？",answer:"春生积石河"},{question:"下列哪句是出自崔日用《饯唐永昌》？",answer:"春来花鸟若为情"},{question:"下列哪句是出自崔湜《侍宴长宁公主东庄应制》？",answer:"杯接近臣欢"},{question:"下列哪句是出自崔湜《冀北春望》？",answer:"烟空绿野闲"},{question:"下列哪句是出自崔湜《唐都尉山池》？",answer:"珠房折海榴"},{question:"下列哪句是出自崔湜《塞垣行》？",answer:"东拒复西敌"},{question:"下列哪句是出自崔湜《大漠行》？",answer:"万里相驰逐"},{question:"下列哪句是出自崔湜《奉和登骊山高顶寓目应制》？",answer:"河塞掌中来"},{question:"下列哪句是出自崔湜《奉和送金城公主适西蕃应制》？",answer:"方远御慈留"},{question:"下列哪句是出自崔湜《婕妤怨》？",answer:"帷屏向月空"},{question:"下列哪句是出自崔湜《寄天台司马先生》？",answer:"仍攀琪树荣"},{question:"下列哪句是出自崔湜《幸梨园亭观打球应制》？",answer:"仙管杂风流"},{question:"下列哪句是出自崔湜《幸白鹿观应制》？",answer:"鹤语记春秋"},{question:"下列哪句是出自崔湜《慈恩寺九日应制》？",answer:"门疑待佛开"},{question:"下列哪句是出自崔湜《折杨柳》？",answer:"垂条拂髻鬟"},{question:"下列哪句是出自崔湜《边愁》？",answer:"边书驿骑归"},{question:"下列哪句是出自崔湜《送梁卿王郎中使东蕃吊册》？",answer:"南陌轩车别"},{question:"下列哪句是出自崔湜《酬杜麟台春思》？",answer:"离魂暗马惊"},{question:"下列哪句是出自崔湜《饯唐州高使君赴任》？",answer:"宿昔梦见之"},{question:"下列哪句是出自崔知贤《上元夜效小庾体》？",answer:"灯前饶看人"},{question:"下列哪句是出自崔颢《长干行二首之一》？",answer:"君家何处住"},{question:"下列哪句是出自张九龄《剪彩》？",answer:"枝从点缀新"},{question:"下列哪句是出自张九龄《和崔黄门寓直夜听蝉之作》？",answer:"声静夜相宜"},{question:"下列哪句是出自张九龄《天津桥东旬宴得歌字韵》？",answer:"林莺醉里歌"},{question:"下列哪句是出自张九龄《奉和圣制初出洛城》？",answer:"千官捧日车"},{question:"下列哪句是出自张九龄《奉和圣制幸晋阳宫》？",answer:"王业成艰难"},{question:"下列哪句是出自张九龄《奉和圣制次成皋先圣擒建德之所》？",answer:"河临饮马间"},{question:"下列哪句是出自张九龄《奉和圣制次琼岳韵》？",answer:"情渭日边临"},{question:"下列哪句是出自张九龄《奉和圣制经孔子旧宅》？",answer:"礼致一牢祠"},{question:"下列哪句是出自张九龄《奉和圣制送李尚书入蜀》？",answer:"德泽委昭宣"},{question:"下列哪句是出自张九龄《奉和圣制途次陕州作》？",answer:"前旌阙塞通"},{question:"下列哪句是出自张九龄《折杨柳》？",answer:"芳菲不及新"},{question:"下列哪句是出自张九龄《敕赐宁王池宴》？",answer:"终谢巨川舟"},{question:"下列哪句是出自张旭《桃花溪》？",answer:"石矶西畔问渔船"},{question:"下列哪句是出自张泌《寄人》？",answer:"犹为离人照落花"},{question:"下列哪句是出自张祜《何满子》？",answer:"故国三千里"},{question:"下列哪句是出自张祜《赠内人》？",answer:"斜拔玉钗灯影畔"},{question:"下列哪句是出自张祜《集灵台二首之一》？",answer:"昨夜上皇新授□"},{question:"下列哪句是出自张祜《题金陵渡》？",answer:"潮落夜江斜月里"},{question:"下列哪句是出自张继《枫桥夜泊》？",answer:"夜半钟声到客船"},{question:"下列哪句是出自张鷟《咏燕》？",answer:"衔泥力尚微"},{question:"下列哪句是出自徐彦伯《婕妤》？",answer:"阶秋苔藓黄"},{question:"下列哪句是出自徐彦伯《胡无人行》？",answer:"冲飙卷塞蓬"},{question:"下列哪句是出自徐彦伯《芳树》？",answer:"晓月怜筝柱"},{question:"下列哪句是出自朱庆馀《宫词》？",answer:"鹦鹉前头不敢言"},{question:"下列哪句是出自权德舆《玉台体》？",answer:"昨夜裙带解"},{question:"下列哪句是出自李世民《幸武功庆善宫》？",answer:"指麾八荒定"},{question:"下列哪句是出自李世民《执契静三边》？",answer:"持衡临万姓"},{question:"下列哪句是出自李世民《正日临朝》？",answer:"钟鼓震岩廊"},{question:"下列哪句是出自李世民《经破薛举战地》？",answer:"峰雾抱莲昏"},{question:"下列哪句是出自李世民《过旧宅二首》？",answer:"架海波澄镜"},{question:"下列哪句是出自李世民《重幸武功》？",answer:"丹陵幸旧宫"},{question:"下列哪句是出自李世民《饮马长城窟行》？",answer:"塞外悲风切"},{question:"下列哪句是出自李亨《赐梨李泌与诸王联句》？",answer:"夜抱九仙骨"},{question:"下列哪句是出自李商隐《为有》？",answer:"无端嫁得金龟婿"},{question:"下列哪句是出自李商隐《夜雨寄北》？",answer:"何当共剪西窗烛"},{question:"下列哪句是出自李商隐《嫦娥》？",answer:"碧海青天夜夜心"},{question:"下列哪句是出自李商隐《寄令狐郎中》？",answer:"双鲤迢迢一纸笔"},{question:"下列哪句是出自李商隐《瑶池》？",answer:"八骏日行三万里"},{question:"下列哪句是出自李商隐《登乐游原》？",answer:"夕阳无限好"},{question:"下列哪句是出自李商隐《贾生》？",answer:"可怜夜半虚前席"},{question:"下列哪句是出自李商隐《隋宫》？",answer:"半作障泥半作帆"},{question:"下列哪句是出自李夔《使至汴州喜逢宋之问》？",answer:"相命且衔杯"},{question:"下列哪句是出自李峤《和同府李祭酒休沐田居》？",answer:"率性夷荣辱"},{question:"下列哪句是出自李峤《奉使筑朔方六州城率尔而作》？",answer:"王事宁怠遑"},{question:"下列哪句是出自李峤《奉教追赴九成宫途中口号》？",answer:"迥眺穷原泽"},{question:"下列哪句是出自李峤《扈从还洛呈侍从群官》？",answer:"天行万乘出"},{question:"下列哪句是出自李峤《秋山望月酬李骑曹》？",answer:"皎皎映层台"},{question:"下列哪句是出自李怀远《凝碧池侍宴看竞渡应制》？",answer:"波似洞庭秋"},{question:"下列哪句是出自李昪《咏灯》？",answer:"主人若也勤挑拨"},{question:"下列哪句是出自李显《九月九日幸临渭亭登高得秋字》？",answer:"彭泽菊初收"},{question:"下列哪句是出自李显《幸秦始皇陵》？",answer:"阁道遂成墟"},{question:"下列哪句是出自李显《登骊山高顶寓目》？",answer:"金门披玉馆"},{question:"下列哪句是出自李显《石淙》？",answer:"水炫珠光遇泉客"},{question:"下列哪句是出自李显《立春日游苑迎春》？",answer:"暂嘱曦轮勿遽斜"},{question:"下列哪句是出自李治《九月九日》？",answer:"满盖荷凋翠"},{question:"下列哪句是出自李治《咸亨殿宴近臣诸亲柏梁体》？",answer:"屏欲除奢政返淳"},{question:"下列哪句是出自李治《守岁》？",answer:"冰□已镂津"},{question:"下列哪句是出自李治《谒大慈恩寺》？",answer:"寥廓烟云表"},{question:"下列哪句是出自李治《谒慈恩寺题奘法师房》？",answer:"游目眺皇畿"},{question:"下列哪句是出自李治《过温汤》？",answer:"烟霞断续生"},{question:"下列哪句是出自李煜《九月十日偶书》？",answer:"感时心绪杳难平"},{question:"下列哪句是出自李煜《渡中江望石城泣下》？",answer:"不堪闲坐细思量"},{question:"下列哪句是出自李煜《病起题山舍壁》？",answer:"贪合鱼龙构强名"},{question:"下列哪句是出自李煜《秋莺》？",answer:"浏亮如笙碎在缑"},{question:"下列哪句是出自李煜《赐宫人庆奴》？",answer:"多谢长条似相识"},{question:"下列哪句是出自李煜《送邓王二十弟从益牧宣城》？",answer:"不须怀抱重凄凄"},{question:"下列哪句是出自李煜《题金楼子后》？",answer:"不于祖龙留面目"},{question:"下列哪句是出自李璟《游后湖赏莲花》？",answer:"红碧相杂敷清流"},{question:"下列哪句是出自李白《下江陵》？",answer:"两岸猿声啼不住"},{question:"下列哪句是出自李白《夜思》？",answer:"举头望明月"},{question:"下列哪句是出自李白《怨情》？",answer:"但见泪痕湿"},{question:"下列哪句是出自李白《清平调三首之一》？",answer:"春风拂槛露华浓"},{question:"下列哪句是出自李白《玉阶怨》？",answer:"夜久侵罗袜"},{question:"下列哪句是出自李百药《和许侍郎游昆明池》？",answer:"道泰偃戈船"},{question:"下列哪句是出自李百药《奉和初春出游应令》？",answer:"鸣笳出望苑"},{question:"下列哪句是出自李百药《奉和正日临朝应诏》？",answer:"高宴齿簪缨"},{question:"下列哪句是出自李百药《妾薄命》？",answer:"团扇秋风起"},{question:"下列哪句是出自李百药《寄杨公》？",answer:"光华早著名"},{question:"下列哪句是出自李百药《少年行》？",answer:"少年飞翠盖"},{question:"下列哪句是出自李百药《戏赠潘徐城门迎两新妇》？",answer:"月影扇中新"},{question:"下列哪句是出自李百药《晚渡江津》？",answer:"离离早鸿度"},{question:"下列哪句是出自李百药《渡汉江》？",answer:"浮盖下奔涛"},{question:"下列哪句是出自李百药《王师渡汉水经襄阳》？",answer:"曲溆丽珠光"},{question:"下列哪句是出自李百药《登叶县故城谒沈诸梁庙》？",answer:"吴山高渐出"},{question:"下列哪句是出自李百药《秋晚登古城》？",answer:"日落征途远"},{question:"下列哪句是出自李百药《谒汉高庙》？",answer:"祥符夜告丰"},{question:"下列哪句是出自李百药《赋得魏都》？",answer:"金凤上层台"},{question:"下列哪句是出自李百药《赋礼记》？",answer:"玉帛资王会"},{question:"下列哪句是出自李百药《送别》？",answer:"明日河梁上"},{question:"下列哪句是出自李百药《途中述怀》？",answer:"伯喈迁塞北"},{question:"下列哪句是出自李百药《郢城怀古》？",answer:"客心悲暮序"},{question:"下列哪句是出自李益《夜上受降城闻笛》？",answer:"受降城外月如霜"},{question:"下列哪句是出自李端《听筝》？",answer:"鸣筝金粟柱"},{question:"下列哪句是出自李适《中和节日宴百僚赐诗》？",answer:"惭非熏风唱"},{question:"下列哪句是出自李适《中和节赐百官燕集因示所怀》？",answer:"庶洽朝野意"},{question:"下列哪句是出自李适《九月十八赐百僚追赏因书所怀》？",answer:"庶敦朝野意"},{question:"下列哪句是出自李适《送徐州张建封还镇》？",answer:"恤人予是资"},{question:"下列哪句是出自李适《重阳日赐宴曲江亭，赋六韵诗用清字》？",answer:"高会多欢声"},{question:"下列哪句是出自李适《麟德殿宴百僚》？",answer:"千秋乐未央"},{question:"下列哪句是出自李適《汾阴后土祠作》？",answer:"旧经备阙文"},{question:"下列哪句是出自李適《答宋十一崖口五渡见赠》？",answer:"孤舟事沿越"},{question:"下列哪句是出自李適《饯许州宋司马赴任》？",answer:"临风怅怀此"},{question:"下列哪句是出自李隆基《校猎义成喜逢大雪率题九韵以示群官》？",answer:"东日华组练"},{question:"下列哪句是出自李隆基《温汤对雪》？",answer:"表瑞良在兹"},{question:"下列哪句是出自李隆基《端午三殿宴群臣探得神字》？",answer:"进对一言重"},{question:"下列哪句是出自李隆基《行次成皋途经先圣擒建德之所缅思功业感而赋》？",answer:"擒俘帝道亨"},{question:"下列哪句是出自李隆基《赐诸州刺史以题座右》？",answer:"猗欤此推择"},{question:"下列哪句是出自李隆基《过晋阳宫》？",answer:"缅想封唐处"},{question:"下列哪句是出自李隆基《送忠州太守康昭远等》？",answer:"时雨侔昔贤"},{question:"下列哪句是出自李隆基《送李邕之任滑台》？",answer:"课成应第一"},{question:"下列哪句是出自李频《渡汉江》？",answer:"近乡情更怯"},{question:"下列哪句是出自杜审言《代张侍御伤美人》？",answer:"新妆曲未终"},{question:"下列哪句是出自杜审言《南海乱石山作》？",answer:"相传称乱石"},{question:"下列哪句是出自杜审言《和康五庭芝望月有怀》？",answer:"风飘素影寒"},{question:"下列哪句是出自杜审言《夏日过郑七山斋》？",answer:"云阴送晚雷"},{question:"下列哪句是出自杜审言《大酺》？",answer:"金钱赠下人"},{question:"下列哪句是出自杜审言《奉和七夕侍宴两仪殿应制》？",answer:"河旷鹊停飞"},{question:"下列哪句是出自杜审言《宿羽亭侍宴应制》？",answer:"青山绕吹台"},{question:"下列哪句是出自杜审言《岁夜安乐公主满月侍宴应制》？",answer:"孙谋梁国珍"},{question:"下列哪句是出自杜审言《旅寓安南》？",answer:"轻霜下震雷"},{question:"下列哪句是出自杜审言《春日怀归》？",answer:"风和绿野烟"},{question:"下列哪句是出自杜审言《望春亭侍游应诏》？",answer:"三春景物滋"},{question:"下列哪句是出自杜审言《登襄阳城》？",answer:"章华即旧台"},{question:"下列哪句是出自杜审言《秋夜宴临津郑明府宅》？",answer:"风清晓漏闻"},{question:"下列哪句是出自杜审言《蓬莱三殿侍宴奉敕咏终南山应制》？",answer:"中峰绕瑞烟"},{question:"下列哪句是出自杜审言《赋得妾薄命》？",answer:"飞花搅独愁"},{question:"下列哪句是出自杜审言《送和西蕃使》？",answer:"送和西蕃使"},{question:"下列哪句是出自杜审言《送高郎中北使》？",answer:"恩荣变苦辛"},{question:"下列哪句是出自杜审言《都尉山亭》？",answer:"枝亚果新肥"},{question:"下列哪句是出自杜牧《寄扬州韩绰判官》？",answer:"二十四桥明月夜"},{question:"下列哪句是出自杜牧《将赴吴兴登乐游原》？",answer:"欲把一麾江海去"},{question:"下列哪句是出自杜牧《泊秦淮》？",answer:"烟笼寒水月笼沙"},{question:"下列哪句是出自杜牧《秋夕》？",answer:"天阶夜色凉如水"},{question:"下列哪句是出自杜牧《赠别二首之一》？",answer:"春风十里扬州路"},{question:"下列哪句是出自杜牧《赤壁》？",answer:"折戟沈沙铁未销"},{question:"下列哪句是出自杜牧《遣怀》？",answer:"十年一觉扬州梦"},{question:"下列哪句是出自杜牧《金谷园》？",answer:"落花犹似坠楼人"},{question:"下列哪句是出自杜甫《八阵图》？",answer:"功盖三分国"},{question:"下列哪句是出自杜甫《江南逢李龟年》？",answer:"落花时节又逢君"},{question:"下列哪句是出自杜秋娘《金缕衣》？",answer:"莫待无花空折枝"},{question:"下列哪句是出自杨炯《从军行》？",answer:"风多杂鼓声"},{question:"下列哪句是出自杨炯《出塞》？",answer:"三千太乙军"},{question:"下列哪句是出自杨炯《刘生》？",answer:"马足起红尘"},{question:"下列哪句是出自杨炯《奉和上元酺宴应诏》？",answer:"苍生欲问天"},{question:"下列哪句是出自杨炯《巫峡》？",answer:"莓苔烂锦章"},{question:"下列哪句是出自杨炯《广溪峡》？",answer:"飞水千寻瀑"},{question:"下列哪句是出自杨炯《战城南》？",answer:"悲风愁杀人"},{question:"下列哪句是出自杨炯《折杨柳》？",answer:"心驰明月关"},{question:"下列哪句是出自杨炯《有所思》？",answer:"无论数绿钱"},{question:"下列哪句是出自杨炯《梅花落》？",answer:"愁看玉镜台"},{question:"下列哪句是出自杨炯《紫骝马》？",answer:"长鸣向北州"},{question:"下列哪句是出自杨炯《西陵峡》？",answer:"高丘烜望祀"},{question:"下列哪句是出自杨炯《送丰城王少府》？",answer:"东关望渐赊"},{question:"下列哪句是出自杨炯《送临津房少府》？",answer:"池风泛早凉"},{question:"下列哪句是出自杨炯《送梓州周司功》？",answer:"破涕暂为欢"},{question:"下列哪句是出自杨炯《送郑州周司空》？",answer:"秋深烟雾多"},{question:"下列哪句是出自杨炯《骢马》？",answer:"秋金铸马鞭"},{question:"下列哪句是出自柳中庸《征人怨》？",answer:"万里黄河绕黑山"},{question:"下列哪句是出自柳宗元《江雪》？",answer:"千山鸟飞绝"},{question:"下列哪句是出自温庭筠《瑶瑟怨》？",answer:"雁声远过潇湘去"},{question:"下列哪句是出自狄仁杰《奉和圣制夏日游石淙山》？",answer:"飞泉洒液恒疑雨"},{question:"下列哪句是出自王之涣《出塞》？",answer:"羌笛何须怨杨柳"},{question:"下列哪句是出自王之涣《登鹳雀楼》？",answer:"欲穷千里目"},{question:"下列哪句是出自王勃《上巳浮江宴韵得址字》？",answer:"桂馥青溪里"},{question:"下列哪句是出自王勃《临高台》？",answer:"苍苍茂陵树"},{question:"下列哪句是出自王勃《咏风》？",answer:"动息如有情"},{question:"下列哪句是出自王勃《山亭夜宴》？",answer:"荷翻北潭影"},{question:"下列哪句是出自王勃《忽梦游仙》？",answer:"依然蹑云背"},{question:"下列哪句是出自王勃《怀仙》？",answer:"眇然登云车"},{question:"下列哪句是出自王勃《春日宴乐游园赋韵得接字》？",answer:"崩云洒芳牒"},{question:"下列哪句是出自王勃《江南弄》？",answer:"巫山连楚梦"},{question:"下列哪句是出自王勃《滕王阁》？",answer:"槛外长江空自流"},{question:"下列哪句是出自王勃《秋夜长》？",answer:"丹绮双鸳鸯"},{question:"下列哪句是出自王勃《采莲曲》？",answer:"佳期不可驻"},{question:"下列哪句是出自王建《新嫁娘》？",answer:"未谙姑食性"},{question:"下列哪句是出自王无竞《凤台曲》？",answer:"世人多学吹"},{question:"下列哪句是出自王无竞《北使长城》？",answer:"白骨相撑委"},{question:"下列哪句是出自王无竞《巫山》？",answer:"雷声峡外长"},{question:"下列哪句是出自王无竞《铜雀台》？",answer:"歌吹宛犹昨"},{question:"下列哪句是出自王昌龄《春宫曲》？",answer:"帘外春寒赐锦袍"},{question:"下列哪句是出自王昌龄《玉阶怨》？",answer:"忽见陌头杨柳色"},{question:"下列哪句是出自王昌龄《芙蓉楼送辛渐》？",answer:"平明送客楚山孤"},{question:"下列哪句是出自王昌龄《长信怨》？",answer:"且将团扇共徘徊"},{question:"下列哪句是出自王昌龄《闺怨》？",answer:"闺中少妇不知愁"},{question:"下列哪句是出自王维《杂诗》？",answer:"君自故乡来"},{question:"下列哪句是出自王维《渭城曲》？",answer:"客舍青青柳色新"},{question:"下列哪句是出自王维《相思》？",answer:"愿君多采撷"},{question:"下列哪句是出自王维《秋夜曲》？",answer:"银筝夜久殷勤弄"},{question:"下列哪句是出自王维《竹里馆》？",answer:"深林人不知"},{question:"下列哪句是出自王维《送别》？",answer:"王孙归不归"},{question:"下列哪句是出自王维《鹿柴》？",answer:"复照青苔上"},{question:"下列哪句是出自白居易《后宫词》？",answer:"红颜未老恩先断"},{question:"下列哪句是出自白居易《问刘十九》？",answer:"绿蚁新醅酒"},{question:"下列哪句是出自祖咏《终南望馀雪》？",answer:"终南阴岭秀"},{question:"下列哪句是出自苏颋《和杜主簿春日有所思》？",answer:"芳好空所惜"},{question:"下列哪句是出自苏颋《夜发三泉即事》？",answer:"讵知南土热"},{question:"下列哪句是出自苏颋《昆明池晏坐答王兵部珣三韵见示》？",answer:"明珠在钓矶"},{question:"下列哪句是出自苏颋《晓济胶川南入密界》？",answer:"秋原被花实"},{question:"下列哪句是出自苏颋《蜀城哭台州乐安少府》？",answer:"梦寐殊悠哉"},{question:"下列哪句是出自苏颋《饯郢州李使君》？",answer:"能声寄侯伯"},{question:"下列哪句是出自裴迪《送崔九》？",answer:"归山深浅去"},{question:"下列哪句是出自西鄙人《哥舒歌》？",answer:"至今窥牧马"},{question:"下列哪句是出自许圉师《咏牛应制》？",answer:"奇毛自偶麟"},{question:"下列哪句是出自许天正《和陈元光平潮寇诗》？",answer:"余氛向日镕"},{question:"下列哪句是出自贺知章《回乡偶书》？",answer:"儿童相见不相识"},{question:"下列哪句是出自贾岛《寻隐者不遇》？",answer:"言师采药去"},{question:"下列哪句是出自贾曾《孝和皇帝挽歌》？",answer:"功疑复夏初"},{question:"下列哪句是出自赵谦光《答户部员外贺遂涉戏赠》？",answer:"金炉任意熏"},{question:"下列哪句是出自郑惟忠《送苏尚书赴益州》？",answer:"归望逐春来"},{question:"下列哪句是出自郑畋《马嵬坡》？",answer:"终是圣明天子事"},{question:"下列哪句是出自郭震《同徐员外除太子舍人寓直之作》？",answer:"风吹便坐桑"},{question:"下列哪句是出自郭震《塞上》？",answer:"长征马不肥"},{question:"下列哪句是出自郭震《春江曲》？",answer:"上有双竹林"},{question:"下列哪句是出自金昌绪《春怨》？",answer:"啼时惊妾梦"},{question:"下列哪句是出自阎朝隐《三日曲水侍宴应制》？",answer:"莲花宝盖新"},{question:"下列哪句是出自阎朝隐《侍从途中口号应制》？",answer:"再顾给事中"},{question:"下列哪句是出自阎朝隐《采莲女》？",answer:"莲衣承玉钏"},{question:"下列哪句是出自阎朝隐《鹦鹉猫儿篇》？",answer:"趋趋兮跄跄"},{question:"下列哪句是出自陈元光《太母魏氏半径题石》？",answer:"悬弧将相儿"},{question:"下列哪句是出自陈元光《示珦》？",answer:"溥德翊飞龙"},{question:"下列哪句是出自陈子昂《东征答朝臣相送》？",answer:"单马岂邀功"},{question:"下列哪句是出自陈子昂《度荆门望楚》？",answer:"望望下章台"},{question:"下列哪句是出自陈子昂《感遇诗三十八首》？",answer:"三元更废兴"},{question:"下列哪句是出自陈子昂《晚次乐乡县》？",answer:"晚次乐乡县"},{question:"下列哪句是出自陈子昂《答洛阳主人》？",answer:"旅客非悠悠"},{question:"下列哪句是出自陈子昂《答韩使同在边》？",answer:"负剑许良图"},{question:"下列哪句是出自陈子昂《西还至散关答乔补阙知之》？",answer:"余得奉戎旃"},{question:"下列哪句是出自陈子昂《观荆玉篇》？",answer:"轻重有殊伦"},{question:"下列哪句是出自陈子昂《鸳鸯篇》？",answer:"羽翮两逶迤"},{question:"下列哪句是出自陈陶《陇西行》？",answer:"可怜无定河边骨"},{question:"下列哪句是出自韦庄《金陵图》？",answer:"依旧烟笼十里堤"},{question:"下列哪句是出自韦应物《滁州西涧》？",answer:"春潮带雨晚来急"},{question:"下列哪句是出自韦应物《秋夜寄邱员外》？",answer:"怀君属秋夜"},{question:"下列哪句是出自韦承庆《南行别弟》？",answer:"悠悠远客情"},{question:"下列哪句是出自韦承庆《寒食应制》？",answer:"鸡斗始开笼"},{question:"下列哪句是出自韦承庆《折杨柳》？",answer:"倡妇高楼别"},{question:"下列哪句是出自韦承庆《江楼》？",answer:"登楼已半曛"},{question:"下列哪句是出自韦承庆《直中书省》？",answer:"深恩雨露垂"},{question:"下列哪句是出自韩仲宣《晦日宴高氏林亭》？",answer:"梅间雪似花"},{question:"下列哪句是出自韩翃《寒食》？",answer:"轻烟散入五侯家"},{question:"下列哪句是出自韩翃《已凉》？",answer:"八尺龙须方锦褥"},{question:"下列哪句是出自骆宾王《久客临海有怀》？",answer:"久客临海有怀"},{question:"下列哪句是出自骆宾王《于紫云观赠道士》？",answer:"云车未可攀"},{question:"下列哪句是出自骆宾王《从军行》？",answer:"马足践胡尘"},{question:"下列哪句是出自骆宾王《出石门》？",answer:"苔分似列钱"},{question:"下列哪句是出自骆宾王《别李峤得胜字》？",answer:"凉景向秋澄"},{question:"下列哪句是出自骆宾王《北眺舂陵》？",answer:"谿宿密云蒸"},{question:"下列哪句是出自骆宾王《叙寄员半千》？",answer:"吁嗟陵谷迁"},{question:"下列哪句是出自骆宾王《同崔驸马晓初登楼思京》？",answer:"黄图归路难"},{question:"下列哪句是出自骆宾王《咏怀古意上裴侍郎》？",answer:"坎壈倦游秦"},{question:"下列哪句是出自骆宾王《在江南赠宋五之问》？",answer:"连洲拥夕涨"},{question:"下列哪句是出自骆宾王《夏日游德州赠高四》？",answer:"青山孕宝符"},{question:"下列哪句是出自骆宾王《夏日游目聊作》？",answer:"田秋麦气清"},{question:"下列哪句是出自骆宾王《晚憩田家》？",answer:"涩路拥崩查"},{question:"下列哪句是出自骆宾王《月夜有怀简诸同病》？",answer:"遵渚未来鸿"},{question:"下列哪句是出自骆宾王《望乡夕泛》？",answer:"忧从望里宽"},{question:"下列哪句是出自骆宾王《渡瓜步江》？",answer:"风急夜江秋"},{question:"下列哪句是出自骆宾王《秋夜送阎五还润州》？",answer:"惊月绕疏枝"},{question:"下列哪句是出自骆宾王《秋日送侯四得弹字》？",answer:"秋山落日寒"},{question:"下列哪句是出自骆宾王《秋日送别》？",answer:"哀命返穷愁"},{question:"下列哪句是出自骆宾王《秋日送尹大赴京》？",answer:"落月抱寒光"},{question:"下列哪句是出自骆宾王《秋日饯陆道士陈文林》？",answer:"尘起洛阳风"},{question:"下列哪句是出自骆宾王《至分水戍》？",answer:"宿莽竞含秋"},{question:"下列哪句是出自骆宾王《至分陕》？",answer:"曳葛似攀樛"},{question:"下列哪句是出自骆宾王《西京守岁》？",answer:"年共晓光新"},{question:"下列哪句是出自骆宾王《送王明府参选赋得鹤》？",answer:"别操绕繁弦"},{question:"下列哪句是出自骆宾王《送费六还蜀》？",answer:"云阴带叶昏"},{question:"下列哪句是出自骆宾王《送郑少府入辽共赋侠客远从戎》？",answer:"连星入剑端"},{question:"下列哪句是出自骆宾王《途中有怀》？",answer:"乌裘十上还"},{question:"下列哪句是出自高正臣《晦日置酒林亭》？",answer:"梅芳带雪花"},{question:"下列哪句是出自高瑾《上元夜效小庾体》？",answer:"人面并如春"},{question:"下列哪句是出自魏元忠《修书院学士奉敕宴梁王宅》？",answer:"佳气满旌门"},{question:"下列哪句歇后语和三国无关？",answer:"自卖自夸"},{question:"下列哪句诗不是出自于先秦散文？",answer:"勿以恶小而为之"},{question:"下列哪句诗不是出自于杜甫的《梦李白》？",answer:"是妾断肠时"},{question:"下列哪句诗不是出自孟浩然的《秋登兰山寄张五》？",answer:"闻风坐相悦"},{question:"下列哪句诗不是出自杜甫的《望岳》？",answer:"世情恶衰歇"},{question:"下列哪句诗不是出自王维的《宿王昌龄隐居》？",answer:"登临出世界"},{question:"下列哪句诗不是出自王维的《渭川田家》？",answer:"邀人傅粉粉"},{question:"下列哪句诗不是出自王维的《西施咏》？",answer:"白云无尽时"},{question:"下列哪句诗与“小荷才露尖尖角，早有蜻蜓立上头”出自同一作者？",answer:"接天莲叶无穷碧，映日荷花别样红"},{question:"下列哪幅作品是由大画家--'八大山人'所作？",answer:"荷花水鸟"},{question:"下列哪幅作品是由画家马远所作？",answer:"雪景图"},{question:"下列哪幅作品被认为是“画笑最出色的一幅”？",answer:"吉普赛女郎"},{question:"下列哪把剑不属于中国古代名剑？",answer:"岳王剑"},{question:"下列哪条河为内流河（指不流入海洋的河）？",answer:"伏尔加河"},{question:"下列哪条河流被称作“德意志之母”？",answer:"摩泽尔河"},{question:"下列哪次起义不是元灭宋时期的人民起义？",answer:"李顺起义"},{question:"下列哪次起义是宋朝时期的人民起义？",answer:"李顺起义"},{question:"下列哪种乐器不是远古时期的乐器？",answer:"笛"},{question:"下列哪种书体在唐代时发展到鼎盛？",answer:"楷书"},{question:"下列哪种动物属于两栖动物",answer:"青蛙"},{question:"下列哪种动物属于灵长类动物",answer:"熊猴"},{question:"下列哪种动物用舌头捕捉猎物",answer:"食蚁兽"},{question:"下列哪种动物的基因与人类的基因最相似：",answer:"猪"},{question:"下列哪种哪篇文章不是出自《史记》？",answer:"武帝纪"},{question:"下列哪种字体不是宋太宗擅长的字体？",answer:"飞体"},{question:"下列哪种属于寄生类昆虫?",answer:"跳蚤"},{question:"下列哪种属于膜翅目的昆虫?",answer:"蚂蚁"},{question:"下列哪种技艺不属于《张衡传》所指的六艺？",answer:"骑"},{question:"下列哪种文体不是《史记》中的文体？",answer:"传记"},{question:"下列哪种方法不是王安石变法时推行的新法？",answer:"保长"},{question:"下列哪种是会随着周围的环境改变身体的颜色的",answer:"乌贼"},{question:"下列哪种是古老的昆虫之一?",answer:"蜻蜓"},{question:"下列哪种是腔肠动物",answer:"珊瑚"},{question:"下列哪种树的叶是针形的？",answer:"松树"},{question:"下列哪种植物不能在一块地连续种植？",answer:"西瓜"},{question:"下列哪种狗不属于大型犬？",answer:"爱慕斯成犬"},{question:"下列哪种狗属于大型犬",answer:"杜宾犬"},{question:"下列哪种诗体不属于全唐诗？",answer:"杂曲歌词"},{question:"下列哪种酒不属于古代中国名酒？",answer:"烧刀子"},{question:"下列哪种酒不是古代节日庆酒？",answer:"高粱酒"},{question:"下列哪种鸟类只会生蛋不会孵蛋：",answer:"杜鹃"},{question:"下列哪篇游记不属于柳宗元的永州八记？",answer:"钻鉧潭东小丘记"},{question:"下列哪类产品属于《产品质量法》调整的范围？",answer:"建筑材料质量；"},{question:"下列哪组人物不是父子关系",answer:"汉文帝、汉武帝"},{question:"下列哪部不是唐朝张九龄的作品？",answer:"江南逢李龟年"},{question:"下列哪部不是孟浩然的作品？",answer:"登总持寺阁"},{question:"下列哪部不是岑参的作品？",answer:"贵游行"},{question:"下列哪部不是张九龄的作品？",answer:"十五夜观灯"},{question:"下列哪部不是明清的章回小说？",answer:"《三国志平话》"},{question:"下列哪部不是李世民的作品？",answer:"幸秦始皇陵"},{question:"下列哪部不是李治的作品？",answer:"过晋阳宫"},{question:"下列哪部不是李白的作品？",answer:"侍宴应诏赋韵得前字"},{question:"下列哪部不是杜甫的作品？",answer:"赠王八衢"},{question:"下列哪部不是王昌龄的作品？",answer:"晓发"},{question:"下列哪部不是虞世南的作品？",answer:"晚年叙志示翟处士"},{question:"下列哪部不是贺知章的作品？",answer:"和燕公岳州山城"},{question:"下列哪部不是陈子昂的作品？",answer:"夏日游德州赠高四"},{question:"下列哪部不是韦应物的作品？",answer:"对酒醉题屈突明府厅"},{question:"下列哪部不是颜真卿的作品？",answer:"晚憩王少府东阁"},{question:"下列哪部不是骆宾王的作品？",answer:"闲园即事寄韦侍郎"},{question:"下列哪部作品不是先秦诸子散文？",answer:"《逍遥子》"},{question:"下列哪部作品不是南宋时期诗人的诗集？",answer:"《揽辔录》"},{question:"下列哪部作品不是李商隐的？",answer:"山居秋暝"},{question:"下列哪部作品不是杜甫的？",answer:"望蓟门"},{question:"下列哪部作品不是西汉著名的赋家杨雄的代表作？",answer:"《答客难》"},{question:"下列哪部经典不是《师说》中的六艺？",answer:"《国风》"},{question:"下列哪项不属于'小说三要素'之一？",answer:"时间"},{question:"下列哪项不属于“二十四史”的范畴？",answer:"清史"},{question:"下列哪项不属于七言律诗？",answer:"《观猎》"},{question:"下列哪项不属于七言绝句？",answer:"《西塞山怀古》"},{question:"下列哪项不属于中国八大吉祥文化？",answer:"建筑吉祥"},{question:"下列哪项不属于中国古代著名的九大毒药？",answer:"土鳖"},{question:"下列哪项不属于中国女排的“五连冠”殊荣？",answer:"1980年第八届世界锦标赛"},{question:"下列哪项不属于乐府旧题？",answer:"《从军行》"},{question:"下列哪项不属于乒乓球的推攻战术?",answer:"横拍直打"},{question:"下列哪项不属于五言律诗？",answer:"《咏怀五百字》"},{question:"下列哪项不属于划船的项目？",answer:"三人"},{question:"下列哪项不属于叙事诗？",answer:"《泊秦淮》"},{question:"下列哪项不属于后世的酒礼？",answer:"送客"},{question:"下列哪项不属于唐朝的地方官制中的六曹？",answer:"司马"},{question:"下列哪项不属于大禹陵祭典的制度和礼仪？",answer:"祭祀"},{question:"下列哪项不属于汉赋？",answer:"《吕览》"},{question:"下列哪项不属于清代六部给事中的职责？",answer:"抉择"},{question:"下列哪项不属于清朝王爷的称号？",answer:"铁帽子王"},{question:"下列哪项不属于田园诗？",answer:"《陌上桑》"},{question:"下列哪项不属于自创乐府体诗？",answer:"《春江花月夜》"},{question:"下列哪项不属于骈文？",answer:"《陈情表》"},{question:"下列哪项不才是官职名称？",answer:"太常监"},{question:"下列哪项不是F1大奖赛站点?",answer:"巴黎"},{question:"下列哪项不是三国的武将官职？",answer:"车骑将军"},{question:"下列哪项不是儒家“五常”？",answer:"孝"},{question:"下列哪项不是先秦时期的经典作品？",answer:"《史记》"},{question:"下列哪项不是冠军的称号的来源？",answer:"来源于勇冠三军"},{question:"下列哪项不是制陶器的传统工艺？",answer:"熏制"},{question:"下列哪项不是历史中记载我们的太祖？",answer:"燧人氏"},{question:"下列哪项不是发生在三国时期？",answer:"五别徐庶"},{question:"下列哪项不是古代中秋节的风俗？",answer:"喝米酒"},{question:"下列哪项不是夏历的别称？",answer:"皇历"},{question:"下列哪项不是大觉寺八景？",answer:"元代古碑"},{question:"下列哪项不是嬉皮士的典型装扮",answer:"松糕鞋"},{question:"下列哪项不是宋元时期对中原汉地的法律制度中的刑罚？",answer:"斩"},{question:"下列哪项不是宋朝著名娱乐组织？",answer:"德云社"},{question:"下列哪项不是宋词的词牌名？",answer:"天门阵"},{question:"下列哪项不是岳飞抗金十八营所属？",answer:"飞虎营"},{question:"下列哪项不是我国教育法规定国家必须要在受教育者中开展的教育？",answer:"共产主义教育"},{question:"下列哪项不是极限运动？",answer:"摩托艇"},{question:"下列哪项不是武术套路运动的动作?",answer:"出拳"},{question:"下列哪项不是水浒108将？",answer:"小养由基庞万春"},{question:"下列哪项不是汉朝的大将军军职？",answer:"威武大将军"},{question:"下列哪项不是清朝的从一品文职京官？",answer:"内大臣"},{question:"下列哪项不是清朝的正三品武职京官？",answer:"指挥使"},{question:"下列哪项不是清朝的正二品文职京官？",answer:"銮仪使"},{question:"下列哪项不是现代体育中的“七项全能”中的项目？",answer:"1000米长跑"},{question:"下列哪项不是跳水运动的种类？",answer:"烟花跳水"},{question:"下列哪项不是闻名的《九朝律考》之一？",answer:"《北魏律考》"},{question:"下列哪项中名言名句的出处错误的？",answer:"“黯然销魂者，惟别而已矣”--王勃(膝王阁序》"},{question:"下列哪项举措不是王安石变法的内容？",answer:"井田"},{question:"下列哪项关于排球运动数据描述错误的是？",answer:"女于网高2.4米"},{question:"下列哪项关于文学作品的描述是错误的？",answer:"《尔雅》是我国第一部诗集"},{question:"下列哪项关于河北秦皇岛境内长城的统计是错误的？",answer:"卫城8座"},{question:"下列哪项关于足球场的数据是错误的?",answer:"小禁区长18米"},{question:"下列哪项关于鲁迅的描述是错误的？",answer:"《彷徨》收入1925年的《祝福》"},{question:"下列哪项刑罚不属于满清十大酷刑之列？",answer:"千刀万剐"},{question:"下列哪项动作不是滑板的动作内容？",answer:"旋转"},{question:"下列哪项对于三国时期的“神”描述错误的？",answer:"赵云神枪"},{question:"下列哪项对宋朝著名娱乐组织描述错误的是？",answer:"绿华社（口技）"},{question:"下列哪项技术不属于水球运动员必备的专项技术？",answer:"扣杀"},{question:"下列哪项数学成就不是发生在宋朝时期？",answer:"“等幂等积”"},{question:"下列哪项是商朝法律制度中的刑罚？",answer:"炮烙"},{question:"下列哪项第27届奥运会上取得的冠军？",answer:"110米栏冠军（刘翔）"},{question:"下列哪项著名的土地政策不是出自清朝以前？",answer:"摊丁入亩"},{question:"下列哪首歌是奥地利的第二国歌？",answer:"《蓝色多瑙河》"},{question:"下列哪首词不是宋朝女词人李清照的作品？",answer:"蝶恋花（花褪残红青杏小）"},{question:"下列哪首诗不属于田园诗派诗人的作品？",answer:"《书王知载朐山杂咏后》"},{question:"下列哪首诗不是七言乐府？",answer:"李商隐《韩碑》"},{question:"下列哪首诗不是七言古诗？",answer:"高适《燕歌行并序》"},{question:"下列哪首诗不是七言律诗？",answer:"韦庄《章台夜思》"},{question:"下列哪首诗不是七言绝句？",answer:"李益《江南曲》"},{question:"下列哪首诗不是五言乐府？",answer:"李颀《古意》"},{question:"下列哪首诗不是五言古诗？",answer:"王昌龄《塞上曲》"},{question:"下列哪首诗不是五言律诗？",answer:"杜甫《哀王孙》"},{question:"下列哪首诗不是五言绝句？",answer:"秦韬玉《贫女》"},{question:"下列四人中，谁不是“北洋三杰”",answer:"曹锟"},{question:"下列国家军队中，在第二次世界大战初期抗击德国入侵时间最长的是",answer:"挪威军队"},{question:"下列对于每届奥运会承办地描述错误的是？",answer:"第三届：在美国普林斯顿大学"},{question:"下列对我国历史六圣的描述错误的是哪项？",answer:"书圣：东晋王献之"},{question:"下列对水浒108将的描述错误的是哪项？",answer:"插翅虎朱仝"},{question:"下列对清明两代“乡试”考试地点解释正确的是：",answer:"在各省省城"},{question:"下列将我国古代年龄称谓按小到大顺序排列正确的是：",answer:"耆，古稀，耋，耄，期颐"},{question:"下列属于互为余角的是哪一对？",answer:"54°和36°"},{question:"下列属于互为补角的是哪一对？",answer:"45°和135°"},{question:"下列属于互质数的是哪一组？",answer:"6和35"},{question:"下列属于假分数的是哪一个？",answer:"四分之五"},{question:"下列属于偶数的是哪一个？",answer:"2"},{question:"下列属于关系符号的是哪一个？",answer:"等于号"},{question:"下列属于可以化成整数的分数是哪一个？",answer:"三分之十二"},{question:"下列属于合数的是哪一个？",answer:"4"},{question:"下列属于多位数的是哪一个？",answer:"123"},{question:"下列属于奇数的是哪一个？",answer:"1"},{question:"下列属于带小数的是哪一个？",answer:"3.4"},{question:"下列属于循环小数的是哪一个？",answer:"mx0.333……"},{question:"下列属于我国内海的是",answer:"渤海"},{question:"下列属于我国的大写数字的是哪一个？",answer:"贰"},{question:"下列属于时间单位的是哪一个？",answer:"年"},{question:"下列属于最简分数的是哪一个？",answer:"九分之四"},{question:"下列属于电脑的输入输出设备的是",answer:"软驱"},{question:"下列属于真分数的是哪一个？",answer:"五分之二"},{question:"下列属于第一象限的角的是哪一个？",answer:"35°"},{question:"下列属于纯小数的是哪一个？",answer:"mx0.1"},{question:"下列属于纯循环小数的是哪一个？",answer:"mx0.333……"},{question:"下列属于罗马数字的是哪一个？",answer:"Ⅰ"},{question:"下列属于自然数的是哪一个？",answer:"1"},{question:"下列属于质数的是哪一个？",answer:"2"},{question:"下列属于钝角的是哪一个？",answer:"120度角"},{question:"下列属于长度单位的是哪一个？",answer:"公里"},{question:"下列我国古代四大发明中，用水较多且目前该工业生产极易造成污染的是",answer:"造纸"},{question:"下列战国城市中，哪一组是当时著名的冶铁中心？",answer:"宛，邯郸"},{question:"下列措施中为争取抗日战争的胜利奠定了物质基础的是",answer:"抗日根据地大生产运动"},{question:"下列政权灭亡的先后顺序是",answer:"西夏、金、南宋"},{question:"下列故事中不是三国演义中的一项是:",answer:"三打祝家庄"},{question:"下列文人，哪一个不是袁绍的部下？",answer:"辛眦"},{question:"下列曾用名中，哪个不是周恩来的：",answer:"周道"},{question:"下列水产品中，哪种鱼又称“净海龙”？",answer:"带鱼"},{question:"下列物质中，提供热量最多的是：",answer:"脂肪"},{question:"下列球员中哪位转会频率最高?",answer:"维埃里"},{question:"下列科学家同时得到过图灵奖和诺贝尔奖的是？",answer:"西蒙"},{question:"下列能被3整除的数是哪一个？",answer:"33"},{question:"下列著名画家中，以山水画和研究画论画史闻名的是",answer:"黄宾虹"},{question:"下列诗篇不具有托物寓意特色的是哪项？",answer:"《小石潭记》"},{question:"下列谁不是“竹林七贤”之一？",answer:"严畯"},{question:"下列谁是五虎将后裔？",answer:"关平"},{question:"下列选项中,哪一项不属于宪法所规定的公民的文化权利?",answer:"出版自由"},{question:"下列那一个战役不是发生在汉朝？",answer:"长平之战"},{question:"下列那个体育用词不是起源于古代？",answer:"垫底"},{question:"下列那个名族不属于匈奴的范畴？",answer:"乌桓"},{question:"下列那个国家不是中国历史上的附属国？",answer:"印度"},{question:"下列那个国家在历届欧洲杯决赛阶段的成绩最好？",answer:"德国"},{question:"下列那个年号不是唐朝的年号？",answer:"证圣"},{question:"下列那个成语不是出自《陈情表》？",answer:"从壁上观"},{question:"下列那个条约是清朝打赢仗后签订的条约？",answer:"中俄尼布楚条约"},{question:"下列那个民族不属于中国古代民族？",answer:"夜叉"},{question:"下列那个诗人才是晚唐时期的代表？",answer:"李商隐"},{question:"下列那种茶不是古代名茶之一？",answer:"雨前茶"},{question:"下列那部作品不是贾谊的代表作？",answer:"《新书》"},{question:"下品强化石有啥用?",answer:"将0~3级别装备强化"},{question:"下述哪场战役发生的时间最早",answer:"巨鹿之战"},{question:"下述哪种武器不属中世纪骑士的必需装备",answer:"弓箭"},{question:"下面不属于八卦的是",answer:"云"},{question:"下面不是我国古代的四大美女的是:",answer:"卢海怡"},{question:"下面哪一个时代不是恐龙生活的时代",answer:"寒武纪"},{question:"下面哪一个是恒星：",answer:"太阳"},{question:"下面哪一位不是意大利文艺复兴时期的“三杰”：",answer:"乔托"},{question:"下面哪一首诗的题目是李白的?",answer:"望庐山瀑布"},{question:"下面哪一首诗的题目是杜甫的?",answer:"望岳"},{question:"下面哪个人不宜喝牛奶",answer:"腹部手术后的患者"},{question:"下面哪个城市在德国？",answer:"法兰克福"},{question:"下面哪个城市在日本？",answer:"东京"},{question:"下面哪个字不是多音字？",answer:"大"},{question:"下面哪个情节不是《项羽本纪》的主要情节？",answer:"左丘失明"},{question:"下面哪个是上下结构的?",answer:"香"},{question:"下面哪个是主谓短语?",answer:"我爱你"},{question:"下面哪个是动宾短语?",answer:"打人"},{question:"下面哪个是左右结构的?",answer:"到"},{question:"下面哪个是巴金的小说?",answer:"家"},{question:"下面哪个是成语?",answer:"拨云见日"},{question:"下面哪个是正确的en的发音?",answer:"人"},{question:"下面哪个是正确的in的发音?",answer:"音"},{question:"下面哪个是正确的un的发音?",answer:"准"},{question:"下面哪句歇后语不正确",answer:"项羽射箭－百发百中"},{question:"下面哪条不属于“牛顿三定律”？",answer:"万有引力"},{question:"下面哪种动物南极和北极都有？",answer:"海豹"},{question:"下面哪种水是不能够喝的？",answer:"生水"},{question:"下面哪种饮料有一定的催眠作用？",answer:"汽水"},{question:"下面哪部作品不属于杜甫？",answer:"《江边别》"},{question:"下面哪部作品不是任华的？",answer:"九日送人"},{question:"下面哪部作品不是刘禹锡的？",answer:"寄韦珩"},{question:"下面哪部作品不是卢纶的？",answer:"青弋江"},{question:"下面哪部作品不是柳宗元的？",answer:"春游曲二首"},{question:"下面哪部作品是黄甫冉的？",answer:"巫山峡"},{question:"下面哪部电影不是卓别林自编自导自演的",answer:"谋生"},{question:"下面属于亚洲山脉的是",answer:"喜马拉雅山脉"},{question:"下面属于褒义词的是：",answer:"英勇"},{question:"下面的女演员中哪位是京剧演员",answer:"关肃霜"},{question:"下面的戏剧中，不是莎士比亚的“四大悲剧”之一的是：",answer:"《暴风雨》"},{question:"下面谁不是《水浒传》中的人物？",answer:"吕不韦"},{question:"下面那位名人不是新文化运动的先驱?",answer:"康有为"},{question:"不属血液检查的项目：",answer:"血液粘稠"},{question:"不是三大无字碑中提到的人物是",answer:"魏忠贤"},{question:"不灭金身是哪个职业的技能?",answer:"豪杰"},{question:"不能成为商标权主体的是：",answer:"自然人"},{question:"不退出游戏，可以换到同一区的另一条线吗？",answer:"可以"},{question:"与凹字笔画数相同的字是哪一个？",answer:"鸟"},{question:"与最近的NPC对话的快捷键是什么?",answer:"G"},{question:"与类人猿比较，人类有许多不同的特点，生物学家把下列哪一项作为人猿分界的最重要标准",answer:"制造和使用工具"},{question:"世人称白居易等九人为“香山九老”，请问下列哪位不属于九老之列？",answer:"刘禹锡"},{question:"世界60亿人口日是",answer:"1999年10月12日"},{question:"世界“时区”的起点格林尼治原是",answer:"一座小山峰"},{question:"世界七大奇迹建造时间最晚的是",answer:"亚历山大灯塔"},{question:"世界上出产黄金最多的国家是：",answer:"南非"},{question:"世界上哪个国家国旗上有本国地图？",answer:"塞浦路斯"},{question:"世界上哪个国家国旗为三角形？",answer:"尼泊尔"},{question:"世界上妇女最早取得选举权的国家是芬兰，始于_________年。",answer:"1906"},{question:"世界上数学文明出现最早的地区是：",answer:"埃及"},{question:"世界上最古老的足球赛奖杯",answer:"优胜杯"},{question:"世界上最大的内陆湖是什么湖？",answer:"里海"},{question:"世界上最大的哺乳类动物是:",answer:"蓝鲸"},{question:"世界上最大的洋为",answer:"太平洋"},{question:"世界上最大的洲为",answer:"亚洲"},{question:"世界上最大的火电站",answer:"日本"},{question:"世界上最大的陨石坑位于?",answer:"美国"},{question:"世界上最早产生基督的国家是",answer:"巴勒斯坦"},{question:"世界上最早使用导尿法的名医是谁？",answer:"华佗"},{question:"世界上最早发明火药的国家是哪一个？",answer:"中国"},{question:"世界上最早爆发的大规模奴隶起义发生在：",answer:"埃及"},{question:"世界上最早用鲜花报时的城市是？",answer:"瑞士的日内瓦"},{question:"世界上最早的图书分类法，见之于哪本书？",answer:"《七略》"},{question:"世界上最早的纸币产生在哪里",answer:"中国"},{question:"世界上最早的纸币出现在哪个国家.",answer:"中国"},{question:"世界上最早的纸币出现在我国宋朝，其名称是",answer:"交子"},{question:"世界上最早的风力等级是出现在哪个国家？",answer:"中国"},{question:"世界上最早记录哈雷彗星是在哪个时期？",answer:"春秋"},{question:"世界上最重的“猛犸”相机有多重？",answer:"635千克"},{question:"世界上最高的岛屿",answer:"新几内亚岛"},{question:"世界上盐度最低的海是下列哪一个？",answer:"波罗的海"},{question:"世界上第2大河是下列哪一条？",answer:"刚果河"},{question:"世界上第一个出现在电视荧屏上的形象是：",answer:"一个木偶头"},{question:"世界上第一个国家颁布的药典出现在：",answer:"中国唐朝"},{question:"世界上第一个无产阶级政党是：",answer:"德国社会民主工党"},{question:"世界上第一个星球协会成立于何国？",answer:"英国"},{question:"世界上第一个股票交易所诞生在哪个国家？",answer:"荷兰"},{question:"世界上第一只高压锅是哪一年发明的？",answer:"1681"},{question:"世界上第一张照片出现在哪个世纪?",answer:"19"},{question:"世界上第一枚邮票诞生在",answer:"英国"},{question:"世界上第一次使用纸币和银行信用是在我国哪个朝代？",answer:"宋朝"},{question:"世界上第一次实测子午线长度的我国古代科学家是",answer:"僧一行"},{question:"世界上第一次由广播公司正式播送电视节目是哪年？",answer:"1936"},{question:"世界上第一辆摩托车的主要材料是：",answer:"木头"},{question:"世界上第一部《有限责任公司法》是由哪个国家制定的？",answer:"德国"},{question:"世界上第一部成文宪法是：",answer:"美国宪法"},{question:"世界上羽翼最大的鸟是哪一种鸟？",answer:"信天翁"},{question:"世界上花卉消费最多的国家是？",answer:"德国"},{question:"世界上被称为“三大球”运动的是哪三种运动？",answer:"足球篮球排球"},{question:"世界上迁徙路程最远的动物是",answer:"北极燕鸥"},{question:"世界人口日是哪一天？",answer:"7月11日"},{question:"世界历史上第一次成功的资产阶级革命是",answer:"尼德兰革命"},{question:"世界名车雪铁龙是哪国生产的？",answer:"法国"},{question:"世界围棋史上第一位获得大满贯的棋手是？",answer:"李昌赫"},{question:"世界文化景观在中国的",answer:"庐山"},{question:"世界文学画廊中唯一的国文学形象是?",answer:"阿Q"},{question:"世界最大的海港为：",answer:"鹿特丹"},{question:"世界最大的湖中之湖位于哪个国家",answer:"加拿大"},{question:"世界最大的高原是以下哪一个？",answer:"巴西高原"},{question:"世界最早的公用电话亭是在：",answer:"电话公司内"},{question:"世界最早的校园歌曲出现在",answer:"日本"},{question:"世界最重要的IT高科技产业基地硅谷位于美国的那个州",answer:"加利弗尼亚州"},{question:"世界杯上被犯规次数最多选手是谁？",answer:"马拉多纳"},{question:"世界杯比赛结果最悬殊的比分是多少？",answer:"0.417361111111111"},{question:"世界杯进球最多球员是谁？",answer:"罗纳尔多"},{question:"世界淡水资源的65％集中在10个国家,我国：",answer:"第4"},{question:"世界第一个试管婴儿在哪一国诞生",answer:"英国"},{question:"世界艺术之都是：",answer:"法国"},{question:"世界著名的发明家爱迪生诞生于那一年？",answer:"1847"},{question:"世界语由哪国人发明",answer:"波兰"},{question:"世界贸易组织(WTO)是在哪界会议上正式成立的？",answer:"“乌拉圭回合”谈判"},{question:"世界野生生物基金会的会徽是",answer:"大熊猫"},{question:"世纪之交，湖南的第二大城市是：",answer:"衡阳"},{question:"世纪坛造型是个大日晷它上面的指针指向：",answer:"南"},{question:"业火焚心是哪个职业的技能?",answer:"阴阳士"},{question:"东巴经书记录了古代纳西族先民的哪个内容？",answer:"语言"},{question:"东帝汶的首都：",answer:"帝力"},{question:"东欧剧变从哪个国家最先爆发？",answer:"波兰"},{question:"东欧地区的商队直接来中国贸易的最活跃时期是",answer:"元朝"},{question:"东汉时期在生产上使用“水排”的进步意义在于",answer:"提高了冶铁的质量"},{question:"东汉末年宫廷内乱时，董卓的谋士谁，力劝董卓以“奉诏救驾”为名，趁机进京夺取政权。",answer:"李儒"},{question:"东汉末年，「曹操挟持天子以令诸侯」，句中的「天子」是指?",answer:"汉献帝"},{question:"东汉末年，外戚与宦官争斗，引起宫廷内乱。西凉的董卓收到谁命其进京救驾的密令，犹豫不决",answer:"何进"},{question:"丝绸之路沿线面积最大的气候类型是",answer:"温带大陆性气候"},{question:"个人存款整存整取最低限度为几个月？",answer:"3"},{question:"个人计算机(PC)属于()类型",answer:"微型计算机"},{question:"中世纪最后一位诗人，新时代最初一位诗人指的是",answer:"但丁"},{question:"中俄达成的第一个边界条约是：",answer:"《尼布楚条约》"},{question:"中共“一大”确定党成立后的中心任务是",answer:"领导工人运动"},{question:"中共八大的主要贡献是",answer:"正确指出了国内的主要矛盾"},{question:"中华人民共和国在联合国的合法席位得到恢复是在",answer:"1971"},{question:"中华人民共和国户口登记条例是哪一年颁布实施的？",answer:"1978年"},{question:"中华民国正式宣告成立是在",answer:"1912年1月"},{question:"中华民国第一任教育总长是",answer:"蔡元培"},{question:"中国乒乓球队在哪一次奥运会上实现了第一次“大满贯”？",answer:"亚特亚大奥运会"},{question:"中国二十世纪有“四大名旦”和“四小名旦”，请问下列哪位不是名旦之一？",answer:"周信芳"},{question:"中国于哪一年完成社会主义改造：",answer:"1956年"},{question:"中国产生了四大发明,下面哪个不是四大发明之一？",answer:"研药术"},{question:"中国人最早发现磁石是在公元前几世纪？",answer:"3"},{question:"中国人民解放军从1955年实行军衔制，1966年被取消。我军现又开始实行新的军衔制度是什么时候？",answer:"1988年7月1日"},{question:"中国人民解放军空军领导机构是何时成立?",answer:"1949年11月11日"},{question:"中国人民解放军诞生于1927年8月1日，其称呼也几经变更，其在哪一年改称中国人民解放军的？",answer:"1946年"},{question:"中国人民银行于2002年11月18日起在全国发行的第五套人民币5角硬币色泽为金黄色，其金属材质：",answer:"钢芯镀铜合金"},{question:"中国人民银行成立是哪一年成立的？",answer:"1948年12月1日"},{question:"中国人第一次拍摄影片是在什么时候？",answer:"1905"},{question:"中国人自称为“炎黄子孙”中的“黄”是指：",answer:"黄帝"},{question:"中国从何时起开始开洞造像（石窟雕像）？",answer:"魏晋"},{question:"中国佛教影响深远，甚至影响到一国之君，古代有很多帝王信奉佛教，被冠以佛门皇帝的称号，请问下列哪位皇帝",answer:"唐太宗"},{question:"中国六大古都：北京,西安,南京,洛阳,开封,杭州。有几个位于黄河流域",answer:"3个"},{question:"中国共产党纠正陈独秀右倾投降主义错误的会议是",answer:"“八七”会议"},{question:"中国十大大将是哪位？",answer:"粟裕"},{question:"中国历史上宦官干预国政，始于",answer:"东汉"},{question:"中国历史上最早将礼和法结合起来，以“法治”充实“礼治”的思想家是：",answer:"荀子"},{question:"中国历史上有一段五胡称霸的历史，简称五胡十六国，下列那个民族不是五胡之列？",answer:"袒鞑"},{question:"中国历史上活过70岁的皇帝有几位？",answer:"7"},{question:"中国历史上的汉奸是哪个？",answer:"秦桧"},{question:"中国历史上的皇帝谁的寿命最长?",answer:"乾隆"},{question:"中国历史上的皇帝谁的执政时间最长?",answer:"康熙"},{question:"中国历史上第一个少数民族统治全国的王朝是哪一个：",answer:"元"},{question:"中国历史上第一位获得体育世界冠军的是:",answer:"容国团"},{question:"中国历史上第一家证券交易所成立在",answer:"北京"},{question:"中国历史曾有“九州”之称，下面哪项不是九州之列？",answer:"幽州"},{question:"中国古代伶人指的是",answer:"以唱戏为职业的人"},{question:"中国古代兵法“六韬”中，不含下面哪一韬",answer:"凤韬"},{question:"中国古代北方的“丝绸之路”有几条？",answer:"3条"},{question:"中国古代哪个学派的主张，与绿色和平组织的思想相近？",answer:"道家"},{question:"中国古代四大美人中“沉鱼”是用来形容哪一位？",answer:"西施"},{question:"中国古代四大美女中，被称作“羞花”的是哪一个？",answer:"杨贵妃"},{question:"中国古代婚姻法最重要的渊源是什么？",answer:"礼"},{question:"中国古代就有足球运动，下列选项哪个不是足球的古称？",answer:"筑鞠"},{question:"中国古代就有足球运动，古代称为“蹴鞠”，下列选项哪个不是“蹴鞠”的别名？",answer:"筑鞠"},{question:"中国古代建筑中数量极大、形式最为多样的一种建筑类型是：",answer:"塔"},{question:"中国古代文化中，儒家是最为主流的文化，下列哪项不是儒家经典？",answer:"《韩非子》"},{question:"中国古代文化博大精深，其中很多古籍都已绝版或者其他原因失传，但很多的古籍作伪手法让很多不传世的经典再",answer:"新藉做旧"},{question:"中国古代最早的一部比较完整的行政法典是：",answer:"《唐六典》"},{question:"中国古代最通行的结婚方式是以下哪一种？",answer:"聘娶婚"},{question:"中国古代有四大美女，但人无完人，他们都有各自的缺陷，请问王昭君的缺点是什么？",answer:"大脚"},{question:"中国古代的罪名“贼”相当于现代的",answer:"伤害罪"},{question:"中国古代神话中下列哪位神仙不是门神？",answer:"赵公明"},{question:"中国古代神话中下列哪位神仙是财神？",answer:"赵公明"},{question:"中国古代科举形成于哪个朝代？",answer:"隋朝"},{question:"中国古代航海家郑和曾几下西洋？",answer:"7"},{question:"中国古代著名的九大毒药不包括下列哪项？",answer:"土鳖"},{question:"中国古代计量容量的单位是升、斗、石，其中1石＝10斗；1斗＝10升；那1升＝10？",answer:"合"},{question:"中国古代象征吉祥的四灵：",answer:"龙、凤、龟、麒麟"},{question:"中国古建筑学科的开拓者是：",answer:"梁思成"},{question:"中国古称“九州”，九州指哪九州？",answer:"冀兖青徐荆阳豫梁雍"},{question:"中国史上被称为“诗界之哥伦布”“一代霸才”的爱国诗人是：",answer:"黄遵宪"},{question:"中国同盟会政治纲领中“驱除鞑虏，恢复中华”的实质意义是",answer:"反对封建统治"},{question:"中国哪个民族的舞蹈表现骏马奔驰的形象特别多？",answer:"蒙古族"},{question:"中国唯一的将两个皇帝合葬的陵墓在",answer:"西安"},{question:"中国境内最大的外流盆地是：",answer:"四川盆地"},{question:"中国境内迄今所知年代最早的直立人是那种人?",answer:"元谋人"},{question:"中国奥运史上获得金牌数最多的是哪项运动？",answer:"游泳"},{question:"中国女性画眉开始于什么时候",answer:"秦朝"},{question:"中国奴隶制瓦解，新兴地主阶级要求公布成文法始于",answer:"春秋"},{question:"中国对外国派遣维和人员是从哪一年起？",answer:"1990年"},{question:"中国封建君主称“皇帝”始于哪个朝代？",answer:"秦朝"},{question:"中国建都历史最长的城市是",answer:"西安"},{question:"中国建都最早，历时最长，朝代最多的古城是",answer:"洛阳"},{question:"中国抗日战争胜利纪念日是：",answer:"9月3日"},{question:"中国文字的演变，大体经历了哪个阶段？",answer:"甲骨文"},{question:"中国文学大师老舍曾写过一部科幻小说，它的名字是：",answer:"《猫城记》"},{question:"中国最早的历史地图集是谁主编的？",answer:"裴秀"},{question:"中国最早的教育专业刊物是：",answer:"《教育界》"},{question:"中国最早纸记档案始于：",answer:"唐"},{question:"中国最热的地方在哪?",answer:"吐鲁番盆地"},{question:"中国民族主义的初步发展是在",answer:"甲午中日战争以后"},{question:"中国民间为什么要吃腊八粥",answer:"纪念释迦牟尼"},{question:"中国民间的“冬九九”是从哪一天开始的",answer:"冬至"},{question:"中国洋务派产生于",answer:"第二次鸦片战争后"},{question:"中国清末最早的海军学堂是",answer:"船政学堂"},{question:"中国电影金鸡奖奖品是高达35公分的一座造型优美的鸡形雕像，这座雕像是",answer:"铸铜镀金"},{question:"中国的“雾都”在哪里？",answer:"重庆"},{question:"中国的六大古都是哪个",answer:"北京、西安、南京、杭州、洛阳、开封"},{question:"中国的北洋军阀在一战中何时向德奥宣战？",answer:"1918年"},{question:"中国的古塔的层数不可能是下列哪项？",answer:"八"},{question:"中国的哪个朝代曾建立横跨欧亚两洲的大帝国：",answer:"元朝"},{question:"中国的尼姑最早是何时出现的？",answer:"南北朝"},{question:"中国的私学即民办教育开始于",answer:"春秋"},{question:"中国的第一部模拟移动电话开通于哪一年？",answer:"1987年"},{question:"中国秦代唯一的作家是谁？",answer:"李斯"},{question:"中国第一个女市长是",answer:"范瑾"},{question:"中国第一个女飞行员是",answer:"王灿芝"},{question:"中国第一个小说批评家是谁？",answer:"金圣叹"},{question:"中国第一个朝代是那个朝？",answer:"夏"},{question:"中国第一个民族资本经营的机器缫丝厂是",answer:"“继昌隆”"},{question:"中国第一个田径世界冠军是谁？",answer:"黄志红"},{question:"中国第一枚邮票是什么时期发行的",answer:"清朝"},{question:"中国第一枚邮票是以什么图案为主图",answer:"龙"},{question:"中国第一次提出申办奥运会是哪年哪月？",answer:"1991年2月"},{question:"中国第一次派遣工兵部队参加维和行动是从哪一年起？",answer:"1992年"},{question:"中国第一颗原子弹是在哪一年研制成功的",answer:"1964"},{question:"中国第一颗原子弹爆炸的日期是1964年的：",answer:"10月16日"},{question:"中国至今为止拿了多少个世乒赛冠军?",answer:"109.5个"},{question:"中国西晋时统治集团内部历时16年（291～306）之久的战乱，史称“八王之乱”，下列哪位不属于八王之",answer:"汝阳王"},{question:"中国象棋的棋盘中，上方和下方划有交叉线的地方叫什么？",answer:"九宫"},{question:"中国起草和颁布的第一部刑法典是",answer:"《大清新刑律》"},{question:"中国足球协会成立于哪一年？",answer:"1955"},{question:"中国足球甲A联赛开始于哪一年？",answer:"1994"},{question:"中国跳水在奥运会上获得第一枚金牌的运动员是",answer:"周继红"},{question:"中国运动员谁单届奥运会获得的金牌最多？",answer:"李宁"},{question:"中国近代史上睁眼看世界的第一人是？",answer:"林则徐"},{question:"中国近现代著名画家是",answer:"齐白石"},{question:"中央政府管辖玉门关和阳关以西、天山南北地区最早的行政、军事机构是",answer:"西域都护府"},{question:"中日甲午战争是1894～1895年中国军民抗击日本侵略的战争。1894年干支为甲午，是清光绪几年：",answer:"光绪二十年"},{question:"中法战争中，指挥取得镇南关大捷的中国将领是：",answer:"冯子才"},{question:"中法战争爆发的标志是",answer:"法军进攻驻越中国军队"},{question:"中级血气之玉有啥用?",answer:"提高最大生命的"},{question:"中英〈南京条约〉是中国近代史上第一个不平等条约，哪一年签定的",answer:"1842年"},{question:"为了使水尽快结冰，你应该放入",answer:"雪"},{question:"为了健康，应避免食入以下哪种果蔬皮？",answer:"柿子"},{question:"为了牙齿的健康，采用正确的刷牙方法是相当重要的，下列哪一种说法是错误的？",answer:"采用横刷法"},{question:"为了眼睛的健康，看电视时应做到离电视几米以上？",answer:"2米"},{question:"为了纪念三国，民间有很多三国民俗活动，下列哪个活动不是三国民俗活动？",answer:"徐州云龙山庙会"},{question:"为什么庞统不被孙权重用?",answer:"太丑"},{question:"为什么有些人的仓库比我的容量大？",answer:"他使用了私人仓库道具"},{question:"为什么有些副职业的书在古书商人那里买不到?",answer:"其他答案都是"},{question:"为什么有时候我打怪第一下后我不按键盘我都可以继续打这个怪？",answer:"你在系统设置了自动攻击"},{question:"为何许褚叫虎痴?",answer:"徒手搏虎"},{question:"为平定南中地区的叛乱，被孔明「七擒七纵」的是?",answer:"孟获"},{question:"为徐敬业讨伐武则天的义兵起草了讨武氏檄的诗人是……",answer:"骆宾王"},{question:"为汤姆·汉克斯第二次赢得奥斯卡最佳男主角奖的影片是……",answer:"《阿甘正传》"},{question:"为粉碎四人帮奠定了群众基础的历史事件是",answer:"四五运动"},{question:"为自己立了一块《无字碑》以供后人评说的我国古代政治家是？",answer:"武则天"},{question:"为避免风化而需要密闭保存的药品是",answer:"奎宁丁"},{question:"主动攻击的怪物和被动攻击的怪物有啥不同？",answer:"其他答案都是"},{question:"举世闻名的《孙子兵法》诞生时，不可能书写在",answer:"纸张上"},{question:"久为簪组累，幸此南夷谪。这句诗是出自哪个诗人的哪部作品？",answer:"柳宗元《溪居》"},{question:"乌鸦被一个农民用石子打了，当乌鸦再次遇到这个农民时，便去啄他的眼睛，这是因为：",answer:"自卫的表现"},{question:"乐器中的圆号又称：",answer:"法国号"},{question:"乐山大佛在：",answer:"四川省"},{question:"乐山大佛耳朵长",answer:"7米"},{question:"乒乓球始于19世纪的哪个国家？",answer:"英国"},{question:"乔知之《巫山高》有下列哪一句？",answer:"摘芳共珍荐"},{question:"九一八事变始于",answer:"1931年"},{question:"九州风雷动是哪个职业的技能?",answer:"豪杰"},{question:"九歌是谁的作品",answer:"屈原"},{question:"乾隆皇帝把“天下第一泉”美名给了哪个泉",answer:"趵突泉"},{question:"二十四史中篇幅最长的是哪部？",answer:"宋史"},{question:"二战中决定在战后成立联合国的国际会议是",answer:"雅尔塔会议"},{question:"二战中有多少个国家参战？",answer:"60多个"},{question:"二战期间，那种不是德国投入战斗的坦克型号？",answer:"牛式"},{question:"二级嵌器之石",answer:"给20级以前的装备打孔的"},{question:"五代十国时期开始于",answer:"907年"},{question:"五四运动后新思潮主流是",answer:"马克思主义"},{question:"五四运动爆发于哪一年的五月四日",answer:"1919"},{question:"五四运动爆发于哪一年的五月四日：",answer:"1919年"},{question:"五星红旗第一次在奥运村上空高高飘扬是哪一年？",answer:"1952年"},{question:"五笔字型输入法是谁首创的？",answer:"王永民"},{question:"五胡十六国开创了少数民族入主中原的先例，主要的五个名族被成为五胡，下列哪个民族不属于五胡之列？",answer:"巴氐"},{question:"五虎将之一的黄忠原是谁的手下",answer:"韩玄"},{question:"亚洲第一个提出申办奥运会的城市是哪个？",answer:"东京"},{question:"亚洲第一个申办奥运会的城市是哪个？",answer:"东京"},{question:"产品生命周期理论是以下哪个经济学者提出的？",answer:"维农"},{question:"京剧中花旦是指",answer:"年轻女子"},{question:"京张铁路的总设计师是谁？",answer:"詹天佑"},{question:"人中暑死亡的体温临界线是",answer:"43.1℃"},{question:"人们常说的迭戈是哪一位伟大的球星？",answer:"马拉多纳"},{question:"人们惯用的芭蕉扇是用什么植物的叶子做的？",answer:"棕榈叶"},{question:"人们戏称什么人是“王老五”？",answer:"大龄未婚者"},{question:"人体内含有的染色体数为",answer:"23对"},{question:"人体分解和代谢酒精的器官是：",answer:"肝"},{question:"人体可以导电是因为人体中含有：",answer:"水"},{question:"人体哪处的皮肤对外来刺激最敏感？",answer:"手指尖"},{question:"人体最大的细胞是什么？",answer:"卵细胞"},{question:"人体最大的解毒器官是：",answer:"肝脏"},{question:"人体最小的肌肉是什么？",answer:"镫骨肌"},{question:"人体最重要的器官是什么？",answer:"肝"},{question:"人体最长的器官是什么？",answer:"小肠"},{question:"人体汗腺分布最多的部位是什么地方。",answer:"手掌和脚底"},{question:"人体的肉体骨养份由炭与水构成,其比例是:",answer:"3:07"},{question:"人在运动时要流汗的原因是（）",answer:"使体温保持正常"},{question:"人在黑夜里看不见东西，猫在黑夜里为什么能看见老鼠？",answer:"猫的瞳孔放大缩小能力强"},{question:"人工降雨是在冷云中播撒何种物质？",answer:"干冰"},{question:"人有几块骨头？",answer:"206块"},{question:"人民代表大会是我国的：",answer:"国家权利机关"},{question:"人民币的面值有哪些？",answer:"1元"},{question:"人民法院收到起诉状后，应当在多长时间内立案或者作出不予受理的裁定？",answer:"7日"},{question:"人民英雄纪念碑高多少米",answer:"37"},{question:"人民解放战争战略反攻开始于",answer:"刘邓大军挺进大别山"},{question:"人的一生有多少个乳牙？",answer:"20"},{question:"人的乳牙有多少颗",answer:"20颗"},{question:"人的味蕾能辨别的味道有：",answer:"甜酸咸苦"},{question:"人称「马氏五常，白眉最良」所指的是?",answer:"马良"},{question:"人类历史上，第一次掀起大规模的以保护地球为宗旨的群众性运动，并从此产生了地球日，是哪一年？",answer:"1973"},{question:"人类最先使用的制造器具的金属是",answer:"铜"},{question:"人类有史以来第一次登月是在哪年？",answer:"1969年"},{question:"人类的皮肤总在不断地脱去和生长。一位正常成年人的皮肤全部更新一次需要将近多长时间？",answer:"一个月"},{question:"人类的第一张照片是什么时候诞生的？",answer:"1827年"},{question:"人类第一次登月是在哪年？",answer:"1969"},{question:"人类诞生于多少年前？",answer:"500万年前"},{question:"人类首例心脏移植手术是哪年施行的",answer:"1967"},{question:"人脑控制人平衡力的是：",answer:"小脑"},{question:"人身上共有多少块骨头?",answer:"206"},{question:"什么之后，德川家康控制了天下大势？",answer:"关原合战"},{question:"什么宗教在俄罗斯是主要的宗教：",answer:"东正教"},{question:"什么是第一生产力",answer:"科学技术"},{question:"仅用一百个兵劫掉曹操大营的人是谁？",answer:"甘宁"},{question:"从1901年到1973年的72年中共有多少名犹太人获得诺贝尔奖？",answer:"65"},{question:"从事有害工种不能超过：",answer:"8年"},{question:"从什么时候开始，中国开始履行入世的各项承诺？",answer:"2002年1月1日"},{question:"从何时起，对最高统治者称“王”？",answer:"商"},{question:"从古至今，我国有29位娃娃皇帝，其中最小的是：",answer:"东汉殇帝"},{question:"从哪一年起，我国开始实施新的国家强制性产品认证制度？",answer:"2002年5月1日"},{question:"仙术士是什么类型的职业?",answer:"恢复型"},{question:"仙术士装备什么类型的武器?",answer:"扇子"},{question:"以下不属于周星驰参与过的电影是？",answer:"少林功夫"},{question:"以下不属于戊戌变法“六君子”的是",answer:"林觉民"},{question:"以下不属于敬称的是什么？",answer:"臣"},{question:"以下不属于鸟类的是：",answer:"蝙蝠"},{question:"以下不是中国传统节日的是",answer:"复活节"},{question:"以下不是文艺复兴时期画家的是",answer:"列宾"},{question:"以下什么物品可以永久提高你的体力最大值？",answer:"玄力水晶"},{question:"以下什么物品可以永久提高你的生命最大值？",answer:"次级血气之玉"},{question:"以下关于清前期新疆地区状况的表述，错误的是",answer:"平定大小和卓叛乱后清朝首次统一新疆"},{question:"以下军队中，与李兆麟有关的是",answer:"东北抗联"},{question:"以下几位民族英雄哪位是女性？",answer:"赵一曼"},{question:"以下动物中春季最佳的水温测试员是",answer:"鸭子"},{question:"以下哪一个不是文学上的三曹之一？",answer:"曹爽"},{question:"以下哪一个属于会“叫“的虫子?",answer:"蝉"},{question:"以下哪一个是消灭蟑螂的方法?",answer:"消灭虫源"},{question:"以下哪一处名胜被列入“世界文化景观遗产”？",answer:"庐山"},{question:"以下哪一种昆虫会对青菜生长产生危害？",answer:"蜗牛"},{question:"以下哪一种虫子可以变化自己的身体?",answer:"变色龙"},{question:'以下哪一项,你在"修炼"中是无法改变的?',answer:"经验"},{question:"以下哪两个是与三国故事有关的成语或俗语",answer:"言过其实，期期艾艾"},{question:"以下哪个不属于二十四节气？",answer:"中秋"},{question:"以下哪个不属于使馆馆长的级别？",answer:"临时代办"},{question:"以下哪个不属于自然现象？",answer:"播放电影"},{question:"以下哪个不属于蔬菜？",answer:"人参"},{question:"以下哪个不是光驱的内部结构?",answer:"滚轮"},{question:"以下哪个不是刘备的称谓",answer:"五虎将"},{question:"以下哪个不是川菜？",answer:"脆皮乳猪"},{question:"以下哪个不是常用的护发化妆品？",answer:"肥皂"},{question:"以下哪个不是我国所拥有的民族？",answer:"阿拉伯"},{question:"以下哪个不是淡水鱼？",answer:"鲨鱼"},{question:"以下哪个人获得过诺贝尔物理学奖",answer:"杨振宁"},{question:"以下哪个体例属于史书里的？",answer:"编年体"},{question:"以下哪个动物不是鸟类？",answer:"鸡"},{question:"以下哪个动物会游泳？",answer:"海豚"},{question:"以下哪个动物是哺乳动物？",answer:"熊猫"},{question:"以下哪个动物是家畜？",answer:"猪"},{question:"以下哪个动物有触须",answer:"中华鲟"},{question:"以下哪个可以用书名号？",answer:"报刊名"},{question:"以下哪个啤酒不是国有品牌？",answer:"嘉士伯"},{question:"以下哪个器官制造了血液？",answer:"骨髓"},{question:"以下哪个国家不属于QQ三国?",answer:"美国"},{question:"以下哪个城市不属于中国？",answer:"新加坡"},{question:"以下哪个城市不是省会城市",answer:"宝鸡"},{question:"以下哪个城市是用花取名的？",answer:"朝阳"},{question:"以下哪个大学的地址在北京？",answer:"清华大学"},{question:"以下哪个姓曾经成为历史朝代的国姓？",answer:"李"},{question:"以下哪个小吃具有西北风味？",answer:"羊肉串"},{question:"以下哪个小说不是中国作家的著作",answer:"达芬奇密码"},{question:"以下哪个属于中医中的五脏",answer:"心"},{question:"以下哪个属于五谷？",answer:"粳米"},{question:"以下哪个属于天然调味品",answer:"桂皮"},{question:"以下哪个属于水果",answer:"苹果"},{question:"以下哪个山是五岳之一？",answer:"华山"},{question:'以下哪个快捷键可以前翻"自定义快捷键组"?',answer:","},{question:'以下哪个快捷键可以后翻"自定义快捷键组"?',answer:"."},{question:"以下哪个快捷键可以快速选择自己的队友?",answer:"数字键1至5"},{question:"以下哪个成年人的日常行为必须使用身份证？",answer:"乘坐飞机"},{question:"以下哪个战役使用了草船借箭、连环计、苦肉计、借东风、离间计等多个计策",answer:"赤壁之战"},{question:"以下哪个是中国传统的五谷",answer:"黍"},{question:"以下哪个是人的感觉器官？",answer:"眼睛"},{question:"以下哪个是凉性食物？",answer:"荞麦"},{question:"以下哪个是国有制银行？",answer:"工商银行"},{question:"以下哪个是孕妇不宜吃的食物",answer:"螃蟹"},{question:"以下哪个是我国的淡水湖",answer:"太湖"},{question:"以下哪个是我国陆上邻国？",answer:"尼泊尔"},{question:"以下哪个是目前中央电视台的栏目",answer:"非常6+1"},{question:"以下哪个是目前中央电视台的栏目主持人",answer:"李咏"},{question:"以下哪个是美容化妆品？",answer:"粉底"},{question:"以下哪个是腊月初八的传统食物?",answer:"八宝粥"},{question:"以下哪个是贬义词？",answer:"歇斯底里"},{question:"以下哪个是贵重金属？",answer:"金"},{question:"以下哪个是酸味食物？",answer:"乌梅"},{question:"以下哪个机构是合营企业的最高权利机构",answer:"董事会"},{question:"以下哪个植物属于灌木？",answer:"玫瑰"},{question:"以下哪个歌曲是四川民歌",answer:"太阳出来喜洋洋"},{question:"以下哪个水果指的是传统的五果？",answer:"桃"},{question:"以下哪个电子元件可以装在电脑的主机里？",answer:"主板"},{question:"以下哪个职业是不属于QQ三国的?",answer:"骑士"},{question:"以下哪个职业是属于QQ三国的?",answer:"豪杰/仙术士/剑侍/阴阳士"},{question:"以下哪个花卉适合水插繁殖",answer:"玻璃翠"},{question:"以下哪个茶是不发酵茶？",answer:"龙井"},{question:"以下哪个菜肴属于鲁菜",answer:"糖醋黄河鲤鱼"},{question:"以下哪个道具,在千货商处是购买不到的?",answer:"活力丸"},{question:"以下哪个道具,是可以在商城内购买到的?",answer:"活力丸"},{question:"以下哪个道具是QQ三国内的?",answer:"三锅头"},{question:"以下哪个酒产地在四川？",answer:"五粮液"},{question:"以下哪个面值不是目前正在流通的人民币面值？",answer:"1分"},{question:"以下哪个频率范围属于正常人每分钟心跳频率范围？",answer:"60-100次"},{question:"以下哪个食物生长在地下？",answer:"马铃薯"},{question:"以下哪些人是五虎上将",answer:"关羽、赵云、张飞、马超、黄忠"},{question:"以下哪些作品是宫崎骏的作品？",answer:"千与千寻的神隐"},{question:"以下哪些物品使用后会增加回避?",answer:"牙签滑鱼和闪避之石"},{question:"以下哪些物品使用后可以在一段时间内增加移动的速度?",answer:"可乐鸡翅和一飞冲天"},{question:"以下哪些物品使用后可以在一段时间内提高体力的恢复速度?",answer:"其他答案都是"},{question:"以下哪些物品使用后可以在一段时间内提高生命的恢复速度?",answer:"其他答案都是"},{question:"以下哪些物品可以将受到的伤害反弹给攻击者？",answer:"荆棘石"},{question:"以下哪些物品可以将受到的伤害转化为体力？",answer:"弱效化伤为体玉"},{question:"以下哪些物品可以提供回避率？",answer:"其他答案都是"},{question:"以下哪些物品可以提高移动速度？",answer:"其他答案都是"},{question:"以下哪位不属于唐宋八大家？",answer:"杜牧"},{question:"以下哪位不是罗马历史上有名的第一次“三头执政”中的成员？",answer:"奥古斯丁"},{question:"以下哪位是清朝皇帝？",answer:"顺治"},{question:"以下哪位画家发表了“现实主义宣言”？",answer:"库尔贝"},{question:"以下哪座山不属于“五岳”？",answer:"黄山"},{question:"以下哪种不属于中华民族乐器",answer:"吉他"},{question:"以下哪种不属于比喻形式？",answer:"超喻"},{question:"以下哪种人，不属于古代日耳曼民族？",answer:"希洛人"},{question:"以下哪种动物是肉食动物？",answer:"老虎"},{question:"以下哪种室内盆栽植物是常年开花的？",answer:"非洲紫罗兰"},{question:"以下哪种干果中的脂肪含量最高",answer:"核桃"},{question:"以下哪种方式不能获得三国点？",answer:"贩卖商城道具"},{question:"以下哪种方式可以实现你和另一个玩家一对一地聊天？",answer:"私聊"},{question:"以下哪种是有鳞的哺乳类动物?",answer:"穿山甲"},{question:"以下哪种被称九月的诞生石？",answer:"蓝宝石"},{question:"以下哪种音乐类型不是来源于美洲？",answer:"古典音乐"},{question:"以下哪类副职属于QQ三国?",answer:"工匠"},{question:"以下对元杂剧的叙述中错误的是",answer:"元杂剧中的一种歌词称为元曲"},{question:"以下属于哺乳动物的是：",answer:"猪"},{question:"以下属于金属的是：",answer:"铁"},{question:"以下常用救助电话，哪一个是故障电话：",answer:"112"},{question:"以下指的不是关羽的是",answer:"关云"},{question:"以下指的不是诸葛亮的是",answer:"孟德"},{question:"以下方法哪种可以快速回复体力？",answer:"清心露和男儿黑都可以"},{question:"以下方法哪种可以快速回复生命？",answer:"金创药和双黄蛋都可以"},{question:"以下是《吕氏春秋》中的一些篇章，哪一篇是讲农业政策的？",answer:"《上农》"},{question:"以下没有细胞结构的是",answer:"噬菌体"},{question:"以下谁不是扬州八怪？",answer:"朱耷"},{question:"以下谁不是诸葛亮封的“五虎上将”",answer:"魏延"},{question:"以下谁背叛了刘备？",answer:"魏延"},{question:"以杰出的运动才能和辉煌成就粉碎了纳粹分子的优等种族美梦的是？",answer:"欧文斯"},{question:"以色列占领耶路撒冷是通过",answer:"第三次中东战争"},{question:"以逸待劳计是蜀军攻打定军山时，谁提出的计谋",answer:"法正"},{question:"以麻辣辛香调料而闻名的菜系是",answer:"川菜"},{question:"仰韶文化是我国历史上哪个时代中期的文化？",answer:"新石器"},{question:"企鹅产卵的季节一般是：",answer:"秋季"},{question:"伊拉克位于什么地区",answer:"中东地区"},{question:"伊拉克共和国成立于哪一年？",answer:"1958年7月"},{question:"伊拉克共和国的石油储量居世界第几位？",answer:"第二位"},{question:"伊拉克这个国家在哪个洲？",answer:"亚洲"},{question:"会计业务最早出现于：",answer:"古代中国"},{question:"会试，殿试每几年一次",answer:"3"},{question:"传奇剧本《牡丹亭》的作者是：",answer:"汤显祖"},{question:"传真技术来源于下列哪个物品的启示？",answer:"钟摆"},{question:"传统上中国人讲究在正式宴席上要吃“七荤八素”,这是对“七素、八荤”这一中华传统饮食规矩的颠覆，下列哪",answer:"土豆"},{question:"传统上中国人讲究在正式宴席上要吃“七荤八素”,这是对“七素、八荤”这一中华传统饮食规矩的颠覆，下列哪",answer:"炖猪头"},{question:"传说中“西施”在吴国兵败后的命运如何？",answer:"跟范蠡远走高飞"},{question:"传说中武则天下令焚烧的花是什么花",answer:"牡丹花"},{question:"传说龙生九子个个不同，根据它们不同的性质特征，所用之处也各有不同，其中的“飸餮”经常被应用在广告等媒",answer:"鼎的盖子上"},{question:"伽利略用他的望远镜首先来观察：",answer:"月亮"},{question:"位于百家姓中前五个姓氏中的是那个?",answer:"赵"},{question:"何人建议袁绍「挟天子以令诸侯」但被拒绝?",answer:"沮授"},{question:"何进备，蜀汉的开国皇帝，相传是汉景帝之子中山靖王谁的后代。",answer:"刘胜"},{question:"佛教中所指人生的九品不包括下列哪项？",answer:"淫"},{question:"佛教四大名山中，相传为观音菩萨所居之处的是",answer:"普陀山"},{question:"佛教是从（）传入我国的？",answer:"印度"},{question:"佛跳墙是哪个菜系的代表菜",answer:"福建菜系"},{question:"作者罗贯中是什么朝代的人",answer:"元末明初"},{question:"你去黄巾副本是为了啥?",answer:"其他答案都是"},{question:"你知道“睡莲”是哪个国家的国花吗？",answer:"泰国"},{question:"你知道三国时期吴国的首都建业是现在哪一个城市吗？",answer:"南京"},{question:"你知道世界上第一辆汽车是哪国人制造的吗？",answer:"德国人"},{question:"你说的话如果想要全服务器的三个国家都能听到，应该使用？",answer:"小喇叭"},{question:"使张辽成名的战役各是什么?",answer:"逍遥津之战"},{question:"使用以下哪个道具,可以让所有的人都看见你说的话?",answer:"小喇叭"},{question:"使用国家频道发言,需要多少三国币?",answer:"5000"},{question:"使用过期、失效许可证或转让许可证，由烟草专卖行政主管部门处以多少元以下的罚款？",answer:"１０００元"},{question:"使赵云成名的战役各是什么?",answer:"长板桥之战"},{question:"侏罗纪大约从公元前2.05亿年到公前元前多少年?",answer:"1.45亿年"},{question:"依照宪法规定由谁发布法律：",answer:"国家主席"},{question:"俄国布尔什维主义的出现，标志着",answer:"列宁主义诞生"},{question:"俄罗斯最后一位沙皇是谁：",answer:"尼古拉二世"},{question:"保险丝常采用什么材料？",answer:"铝锑合金"},{question:"保险责任开始后，投保人要求解除合同的，保险人可以：",answer:"收取部分保险费"},{question:"信息论的奠基人是谁",answer:"申农"},{question:"借刀杀人计是曹操让袁氏与谁火拼，他坐收渔翁之利",answer:"公孙康"},{question:"做国家任务可能会得到什么奖励?",answer:"金钱和副职业材料"},{question:"傣族过泼水节是因为：",answer:"民族传说"},{question:"傲断苍穹是哪个职业的技能?",answer:"剑侍"},{question:"元宝始创于我国哪个朝代？",answer:"元朝"},{question:"元朝划分的四等人中，契丹、女真族属于",answer:"第三等人"},{question:"元朝开凿疏通大运河的直接目的是",answer:"南粮北调供应大都"},{question:"元朝时，台湾岛隶属于",answer:"江浙省管辖"},{question:"元朝漕运路线最北的一段河道是",answer:"通惠河"},{question:"元朝的元曲是继唐诗、宋词又一文学表现形式，下列哪位不属于元剧五大家？",answer:"刘因"},{question:"元末明初罗贯中综合民间传说和戏曲、话本，以及结合谁的《三国志》和裴松之注的史料完成了三国演义",answer:"陈寿"},{question:"元灵归心术是哪个职业的技能?",answer:"仙术士"},{question:"元稹《遣悲怀三首之三》没有下列哪一句？",answer:"针线犹存未忍开"},{question:"元稹《遣悲怀三首之二》没有下列哪一句？",answer:"野蔬充膳甘长藿"},{question:"光绪年间，画师沈蓉圃以彩色绘制同治、光绪时期的十三名昆曲、京剧著名演员的剧装画像，传世以后，称为“同",answer:"徐小香饰《雁门关》之萧太后"},{question:"兔子的眼睛为什么是红色的？",answer:"兔子的虹膜是无色的"},{question:"全国性抗日战争爆发的标志是？",answer:"七七事件"},{question:"全国每年跑、冒、滴、漏的淡水是",answer:"20亿立方米"},{question:"全球著名的芭蕾舞剧是",answer:"天鹅湖"},{question:"全面内战爆发后，国民党反动派在昆明杀害的民盟中央委员是：",answer:"李公朴"},{question:"全面抗战爆发后，中国军队首次取得胜利的战役是",answer:"平型关战役"},{question:"八仙过海中的八仙有哪一个？",answer:"铁拐李"},{question:"八仙过海闹罗汉是哪个菜系的著名菜肴?",answer:"孔府菜"},{question:"八大山人有几个人？",answer:"1个"},{question:"八股取士始于何时？",answer:"明朝"},{question:"公元1368年，朱元璋称帝，建立明朝，定都在（）",answer:"南京"},{question:"公元1890年，是谁在湖北汉阳创办了汉阳铁厂？",answer:"张之洞"},{question:"公元201年，曹操于官渡大战中大败谁，进而南攻汝南",answer:"袁绍"},{question:"公元230年，（）将军卫温等带领一万人的船队达到台湾。",answer:"吴国"},{question:"公元618—907年，是我国古代的哪个朝代？",answer:"唐"},{question:"公元618－907年是我国古代哪个朝代",answer:"唐"},{question:"公元690，武则天称帝，改国号为：",answer:"周"},{question:"公元前594年，实行“初税亩”，按亩收税的国家是：",answer:"鲁国"},{question:"公元前二千年代中期雅利安人进入印度后，形成了",answer:"农村公社"},{question:"六国中，哪国最先被秦所灭",answer:"韩"},{question:"六国中，哪国最先被秦所灭？",answer:"韩"},{question:"共产国际成立的时间是",answer:"1919年3月"},{question:"共青团中央于哪一年决定5月4日为共青团成立纪念日",answer:"1950年4月"},{question:"关于两河流域的叙述正确的是",answer:"两河指幼发拉底河和底格里斯河"},{question:"关于经济法与民法，下列说法正确的是",answer:"以上都正确"},{question:"关于马草的描述，哪些是正确的：",answer:"其他答案都是"},{question:"关公的坐骑赤兔马原本是属于谁的?",answer:"吕布"},{question:"关羽千里走单骑中杀的第一个将领是谁？",answer:"孔秀"},{question:"关羽在华容道放走了谁",answer:"曹操"},{question:"关羽在曹军时先斩杀了哪一位袁军大将?",answer:"颜良"},{question:"关羽对曹操说何人的勇猛更胜于他?",answer:"张飞"},{question:"关羽最喜欢哪一种职业?",answer:"刽子手"},{question:"关羽水淹七军擒获的将领是谁？",answer:"于禁、庞德"},{question:"关羽父子在哪里被擒？",answer:"临沮"},{question:"关羽的养子是谁?",answer:"关平"},{question:"关羽离曹操时带走何物?",answer:"赤兔马"},{question:"兴中会成立的地点是",answer:"檀香山"},{question:"典韦是谁介绍给曹操的?",answer:"夏侯惇"},{question:"写人的文章，应注意下列哪个方面？",answer:"年龄"},{question:"军团成员组队打怪得到的经验会比非军团成员打怪得到的经验多吗？",answer:"是的"},{question:"农历中“清明”的意思是",answer:"天气晴朗，万物滋生"},{question:"冰淇淋是哪个国家发明的？",answer:"希腊"},{question:"决定曹操和袁绍争霸胜负的关键战役是?",answer:"官渡之战"},{question:"决定电脑运行时钟频率的是以下哪个部件？",answer:"CPU"},{question:"凝神静心是哪个职业的技能?",answer:"仙术士"},{question:"凡尔登战役双方共损失了多少军队？",answer:"120万"},{question:"出<<春水>>的诗句是哪一句?",answer:"三月桃花浪"},{question:"出云幻星剑是哪个职业的技能?",answer:"剑侍"},{question:"出自<<一室>>的诗句是哪一句?",answer:"一室他乡远"},{question:"出自<<一百五日夜对月>>的诗句是哪一句?",answer:"无家对寒食"},{question:"出自<<丈人山>>的诗句是哪一句?",answer:"自为青城客"},{question:"出自<<三川观水涨二十韵>>的诗句是哪一句?",answer:"我经华原来"},{question:"出自<<上元夫人>>的诗句是哪一句?",answer:"上元谁夫人"},{question:"出自<<与夏十二登岳阳楼>>的诗句是哪一句?",answer:"楼观岳阳尽"},{question:"出自<<与李十二白同寻范十隐居>>的诗句是哪一句?",answer:"李侯有佳句"},{question:"出自<<东鲁门泛舟二首>>的诗句是哪一句?",answer:"日落沙明天倒开"},{question:"出自<<九日杨奉先会白水崔明府>>的诗句是哪一句?",answer:"今日潘怀县"},{question:"出自<<侠客行>>的诗句是哪一句?",answer:"赵客缦胡缨"},{question:"出自<<元日寄韦氏妹>>的诗句是哪一句?",answer:"近闻韦氏妹"},{question:"出自<<冬日有怀李白>>的诗句是哪一句?",answer:"寂寞书斋里"},{question:"出自<<北风行>>的诗句是哪一句?",answer:"烛龙栖寒门"},{question:"出自<<友人会宿>>的诗句是哪一句?",answer:"涤荡千古愁"},{question:"出自<<可惜>>的诗句是哪一句?",answer:"花飞有底急"},{question:"出自<<同友人舟行游台越作>>的诗句是哪一句?",answer:"楚臣伤江枫"},{question:"出自<<和裴迪登蜀州东亭送客逢早梅相忆见寄>>的诗句是哪一句?",answer:"东阁官梅动诗兴"},{question:"出自<<哀江头>>的诗句是哪一句?",answer:"少陵野老吞声哭"},{question:"出自<<哀王孙>>的诗句是哪一句?",answer:"长安城头头白乌"},{question:"出自<<商山四皓>>的诗句是哪一句?",answer:"白发四老人"},{question:"出自<<喜晴>>的诗句是哪一句?",answer:"皇天久不雨"},{question:"出自<<塞芦子>>下的诗句是哪一句?",answer:"五城何迢迢"},{question:"出自<<夜宴左氏庄>>的诗句是哪一句?",answer:"风林纤月落"},{question:"出自<<天台晓望>>的诗句是哪一句?",answer:"天台邻四明"},{question:"出自<<奉先刘少府新画山水障歌>>的诗句是哪一句?",answer:"堂上不合生枫树"},{question:"出自<<奉同郭给事汤东灵湫作>>的诗句是哪一句?",answer:"东山气鸿蒙"},{question:"出自<<奉赠严八阁老>>的诗句是哪一句?",answer:"扈圣登黄阁"},{question:"出自<<奉酬李都督表丈早春作>>的诗句是哪一句?",answer:"力疾坐清晓"},{question:"出自<<官定後戏赠>>的诗句是哪一句?",answer:"不作河西尉"},{question:"出自<<客至>>的诗句是哪一句?",answer:"舍南舍北皆春水"},{question:"出自<<宿巫山下>>的诗句是哪一句?",answer:"昨夜巫山下"},{question:"出自<<宿虾湖>>的诗句是哪一句?",answer:"鸡鸣发黄山"},{question:"出自<<寄杜位>>的诗句是哪一句?",answer:"近闻宽法离新州"},{question:"出自<<寄杨五桂州谭>>的诗句是哪一句?",answer:"五岭皆炎热"},{question:"出自<<寄赠王十将军承俊>>的诗句是哪一句?",answer:"将军胆气雄"},{question:"出自<<寒食>>的诗句是哪一句?",answer:"寒食江村路"},{question:"出自<<对酒>>的诗句是哪一句?",answer:"劝君莫拒杯"},{question:"出自<<对雪>>的诗句是哪一句?",answer:"战哭多新鬼"},{question:"出自<<岘山怀古>>的诗句是哪一句?",answer:"访古登岘首"},{question:"出自<<建都十二韵>>的诗句是哪一句?",answer:"苍生未苏息"},{question:"出自<<待酒不至>>的诗句是哪一句?",answer:"玉壶系青丝"},{question:"出自<<徐卿二子歌>>的诗句是哪一句?",answer:"君不见徐卿二子生绝奇"},{question:"出自<<徐步>>的诗句是哪一句?",answer:"整履步青芜"},{question:"出自<<忆东山二首>>的诗句是哪一句?",answer:"不向东山久"},{question:"出自<<忆幼子>>的诗句是哪一句?",answer:"骥子春犹隔"},{question:"出自<<恶树>>的诗句是哪一句?",answer:"独绕虚斋里"},{question:"出自<<悲陈陶>>的诗句是哪一句?",answer:"孟冬十郡良家子"},{question:"出自<<悲青阪>>的诗句是哪一句?",answer:"我军青阪在东门"},{question:"出自<<戏作花卿歌>>的诗句是哪一句?",answer:"成都猛将有花卿"},{question:"出自<<房兵曹胡马>>的诗句是哪一句?",answer:"胡马大宛名"},{question:"出自<<挂席江上待月有怀>>的诗句是哪一句?",answer:"待月月未出"},{question:"出自<<敬简王明府>>的诗句是哪一句?",answer:"叶县郎官宰"},{question:"出自<<早望海霞边>>的诗句是哪一句?",answer:"四明三千里"},{question:"出自<<早起>>的诗句是哪一句?",answer:"春来常早起"},{question:"出自<<明月度关山>>的诗句是哪一句?",answer:"明月出天山"},{question:"出自<<春夜喜雨>>的诗句是哪一句?",answer:"好雨知时节"},{question:"出自<<春思>>的诗句是哪一句?",answer:"燕草如碧丝"},{question:"出自<<春日游罗敷潭>>的诗句是哪一句?",answer:"行歌入谷口"},{question:"出自<<春望>>的诗句是哪一句?",answer:"国破山河在"},{question:"出自<<晚晴>>的诗句是哪一句?",answer:"村晚惊风度"},{question:"出自<<晚行口号>>的诗句是哪一句?",answer:"三川不可到"},{question:"出自<<晦日寻崔戢李封>>的诗句是哪一句?",answer:"朝光入瓮牖"},{question:"出自<<暮登四安寺钟楼寄裴十迪>>的诗句是哪一句?",answer:"僧来不语自鸣钟"},{question:"出自<<月>>的诗句是哪一句?",answer:"天上秋期近"},{question:"出自<<月夜>>的诗句是哪一句?",answer:"闺中只独看"},{question:"出自<<望岳>>的诗句是哪一句?",answer:"岱宗夫如何"},{question:"出自<<望庐山瀑布>>的诗句是哪一句?",answer:"飞珠散轻霞"},{question:"出自<<望月有怀>>的诗句是哪一句?",answer:"清泉映疏松"},{question:"出自<<望黄鹤楼>>的诗句是哪一句?",answer:"东望黄鹤山"},{question:"出自<<朝雨>>的诗句是哪一句?",answer:"凉气晓萧萧"},{question:"出自<<村夜>>的诗句是哪一句?",answer:"风色萧萧暮"},{question:"出自<<楠树为风雨所拔叹>>的诗句是哪一句?",answer:"倚江楠树草堂前"},{question:"出自<<樊二十三寺御赴汉中判官>>的诗句是哪一句?",answer:"威弧不能弦"},{question:"出自<<江上值水如海势聊短述>>的诗句是哪一句?",answer:"为人性僻耽佳句"},{question:"出自<<江亭>>的诗句是哪一句?",answer:"坦腹江亭卧"},{question:"出自<<游修觉寺>>的诗句是哪一句?",answer:"野寺江天豁"},{question:"出自<<游南阳清泠泉>>的诗句是哪一句?",answer:"惜彼落日暮"},{question:"出自<<游水西简郑明府>>的诗句是哪一句?",answer:"天宫水西寺"},{question:"出自<<游谢氏山亭>>的诗句是哪一句?",answer:"沦老卧江海"},{question:"出自<<游龙门奉先寺>>的诗句是哪一句?",answer:"已从招提游"},{question:"出自<<独酌>>的诗句是哪一句?",answer:"春草如有意"},{question:"出自<<独酌成诗>>的诗句是哪一句?",answer:"灯花何太喜"},{question:"出自<<琴台>>的诗句是哪一句?",answer:"茂陵多病後"},{question:"出自<<画鹰>>的诗句是哪一句?",answer:"素练风霜起"},{question:"出自<<病柏>>的诗句是哪一句?",answer:"有柏生崇冈"},{question:"出自<<登太白峰>>的诗句是哪一句?",answer:"西上太白峰"},{question:"出自<<登峨嵋山>>的诗句是哪一句?",answer:"蜀国多仙山"},{question:"出自<<登广武古战场怀古>>的诗句是哪一句?",answer:"秦鹿奔野草"},{question:"出自<<登衮州城楼>>的诗句是哪一句?",answer:"东郡趋庭日"},{question:"出自<<白水县崔少府十九翁高斋三十韵>>的诗句是哪一句?",answer:"客从南县来"},{question:"出自<<白水明府舅宅喜雨，得过字>>的诗句是哪一句?",answer:"吾舅政如此"},{question:"出自<<百忧集行>>的诗句是哪一句?",answer:"忆年十五心尚孩"},{question:"出自<<石镜>>的诗句是哪一句?",answer:"蜀王将此镜"},{question:"出自<<秋夜与刘砀山泛宴喜亭池>>的诗句是哪一句?",answer:"明宰试舟楫"},{question:"出自<<纪南陵题五松山>>的诗句是哪一句?",answer:"圣达有去就"},{question:"出自<<自京赴奉先县咏怀五百字>>的诗句是哪一句?",answer:"杜陵有布衣"},{question:"出自<<茅屋为秋风所破歌>>的诗句是哪一句?",answer:"八月秋高风怒号"},{question:"出自<<落日>>的诗句是哪一句?",answer:"落日在帘钩"},{question:"出自<<落日忆山中>>的诗句是哪一句?",answer:"雨後烟景绿"},{question:"出自<<薛端薛复筵简薛华醉歌>>的诗句是哪一句?",answer:"文章有神交有道"},{question:"出自<<西郊>>的诗句是哪一句?",answer:"时出碧鸡坊"},{question:"出自<<赠虞十五司马>>的诗句是哪一句?",answer:"远师虞秘监"},{question:"出自<<赴青城县出成都寄陶王二少>>的诗句是哪一句?",answer:"贫嗟出入劳"},{question:"出自<<过四皓墓>>的诗句是哪一句?",answer:"我行至商洛"},{question:"出自<<过崔八丈水亭>>的诗句是哪一句?",answer:"高阁横秀气"},{question:"出自<<进艇>>的诗句是哪一句?",answer:"南京久客耕南亩"},{question:"出自<<述怀>>的诗句是哪一句?",answer:"去年潼关破"},{question:"出自<<送从弟亚赴河西判官>>的诗句是哪一句?",answer:"南风作秋声"},{question:"出自<<送杨六判官使西蕃>>的诗句是哪一句?",answer:"送远秋风落"},{question:"出自<<送灵州李判官>>的诗句是哪一句?",answer:"羯胡腥四海"},{question:"出自<<送裴五赴东川>>的诗句是哪一句?",answer:"故人亦流落"},{question:"出自<<送长孙九侍御赴武威判官>>的诗句是哪一句?",answer:"骢马新凿蹄"},{question:"出自<<送韦十六评事充同谷郡防御判官>>的诗句是哪一句?",answer:"昔没贼中时"},{question:"出自<<送韩十四江东省觐>>的诗句是哪一句?",answer:"兵戈不见老莱衣"},{question:"出自<<逢唐兴刘主簿弟>>的诗句是哪一句?",answer:"分手开元末"},{question:"出自<<遣兴>>的诗句是哪一句?",answer:"骥子好男儿"},{question:"出自<<避地下>>的诗句是哪一句?",answer:"避地岁时晚"},{question:"出自<<邯郸南亭观妓>>的诗句是哪一句?",answer:"歌鼓燕赵儿"},{question:"出自<<郑附马池台喜遇郑广文同饮>>的诗句是哪一句?",answer:"不谓生戎马"},{question:"出自<<重简王明府>>的诗句是哪一句?",answer:"甲子西南异"},{question:"出自<<野望因过常少仙>>的诗句是哪一句?",answer:"野桥齐渡马"},{question:"出自<<金陵凤凰台置酒>>的诗句是哪一句?",answer:"置酒延落景"},{question:"出自<<金陵望汉江>>的诗句是哪一句?",answer:"汉江回万里"},{question:"出自<<闻斛斯六官未归>>的诗句是哪一句?",answer:"故人南郡去"},{question:"出自<<陆游>>的诗句是哪一句?",answer:"寺忆曾游处"},{question:"出自<<陪李北海宴历下亭>>的诗句是哪一句?",answer:"东藩住皂盖"},{question:"出自<<雨过苏端>>的诗句是哪一句?",answer:"鸡鸣风雨交"},{question:"出自<<题新津北桥楼得郊字>>的诗句是哪一句?",answer:"望极春城上"},{question:"出自<<高楠>>的诗句是哪一句?",answer:"楠树色冥冥"},{question:"出自于<<孟浩然>>的诗是哪一首?",answer:"秋登兰山寄张五"},{question:"出自于<<李清照>>的诗是哪一首?",answer:"如梦令"},{question:"出自于<<王安石>>的诗是哪一首?",answer:"书湖阴先生壁"},{question:"出自于<<苏轼>>的诗是哪一首?",answer:"水调歌头"},{question:"出自于“李商隐“的诗是哪一首?",answer:"无题"},{question:"出自于“李白“的诗是哪一首?",answer:"春思"},{question:"出自于“杜牧“的诗是哪一首?",answer:"江南春"},{question:"出自于“杜甫“的诗是哪一首?",answer:"春夜喜雨"},{question:"出自于“柳宗元“的诗是哪一首?",answer:"江雪"},{question:"出自于“欧阳修“的诗是哪一首?",answer:"蝶恋花"},{question:"出自于“王唯“的诗是哪一首?",answer:"送别"},{question:"出自于“王昌龄“的诗是哪一首?",answer:"闺怨"},{question:"出自于“白居易“的诗是哪一首?",answer:"琵琶行"},{question:"出自去<<矣行>>的诗句是哪一句?",answer:"君不见鞲上鹰"},{question:"出自得家书的诗句是哪一句?",answer:"去凭游客寄"},{question:"出自赠李白的诗句是哪一句?",answer:"二年客东都"},{question:"出自送<<率府程录还乡>>的诗句是哪一句?",answer:"鄙夫行衰谢"},{question:"击败拿破仑的滑铁卢战役的反法联军指挥官是",answer:"威灵顿将军"},{question:"分光斩影是哪个职业的技能?",answer:"剑侍"},{question:"切尔诺贝利核污染发生在：",answer:"1986年"},{question:"切断电源后，计算机所有信息丢失的存储器是什么？",answer:"RAM存储器"},{question:"列宁逝世于哪一年？",answer:"1924"},{question:"刘备三顾茅庐时，诸葛亮多少岁",answer:"27岁"},{question:"刘备三顾茅庐请得诸葛亮加入，得出隆中对的战略方针，大概是在公元多少年",answer:"207年"},{question:"刘备冒着隆冬的严寒和大雪，三往隆中，向年方二十七岁的诸葛亮请教统一天下的大计时，刘备多大",answer:"四十七岁"},{question:"刘备到吴国「娶新娘」时诸葛亮给他什么东西?",answer:"三个锦囊"},{question:"刘备在哪建立了蜀汉政权",answer:"成都"},{question:"刘备字什么",answer:"玄德"},{question:"刘备曾经作过什么职业?",answer:"卖草鞋"},{question:"刘备最先派给庞统的职位是?",answer:"县令"},{question:"刘备被曹操打败后，关羽被俘。关羽受到曹操封号为“汉寿亭侯”。“汉寿亭侯”正确的解释为？",answer:"汉寿为地名，亭侯为官名"},{question:"刘禹锡在《酬乐天扬州初逢席上见赠》中写到“沉舟侧畔千帆过，病树前头万木春”，这首诗是一首",answer:"咏史诗"},{question:"创建角色的时候设置密码是干嘛用的？",answer:"减少QQ号被盗后你的角色的损失"},{question:"初级修理宝石是哪个副职业生产的?",answer:"工匠"},{question:"初级酒壶是哪个副职业生产的?",answer:"镶工"},{question:"初级酒壶有啥用?",answer:"辅助批量生产男儿黑的"},{question:"初级锅是哪个副职业生产的?",answer:"工匠"},{question:"初级锅有啥用?",answer:"辅助批量生产煮鸡蛋的"},{question:"利用水力来舂米碾谷子的水碓磨是谁发明的",answer:"祖冲之"},{question:"到21世纪中叶，中国人口总量在达到峰值后将缓慢下降，这一峰值是：",answer:"16亿"},{question:"到卫国战争打响前,苏联有几位元帅",answer:"2"},{question:"到哪里接国家任务？",answer:"中书丞"},{question:"到目前为止，我们所发现的最大的恐龙是",answer:"震龙"},{question:"制作景泰蓝先要以何种材料制胎？",answer:"紫铜"},{question:"刺杀奥匈帝国皇储菲迪男大公是哪一个国家的青年:",answer:"塞尔维亚"},{question:"刺绣是我国著名的传统工艺之一，约有多少年的历史了？",answer:"3000"},{question:"前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。出自何人之手？",answer:"陈子昂"},{question:"剑侍是什么类型的职业?",answer:"平均型"},{question:"剑侍装备什么类型的武器?",answer:"剑"},{question:"剑刃噬心是哪个职业的技能?",answer:"剑侍"},{question:"剑气冲九霄是哪个职业的技能?",answer:"剑侍"},{question:"剑荡八荒是哪个职业的技能?",answer:"剑侍"},{question:"副职所需要的材料,一般都可以在哪里购买到?",answer:"千货商"},{question:"力斩千钧是哪个职业的技能?",answer:"豪杰"},{question:"办理烟草专卖许可证的变更和注销手续，应在原批准机关批准之日起多少日内，到发证机关办理变更、注销手续？",answer:"３０日"},{question:"动物学家把哪些动物称作厚皮动物：",answer:"野牛、犀牛"},{question:"助消化的药物应在什么时候服用？",answer:"饭后"},{question:"勉从虎穴暂栖身,说破英雄惊煞人.巧将闻雷来掩饰,随机应变信如神>这首诗说的是<三国演义>中刘备和曹操",answer:"煮酒论英雄"},{question:"勺在中国古代是舀什么的器具？",answer:"酒"},{question:"北京不是以下哪个朝代的都城？",answer:"宋朝"},{question:"北京从2002年11月_____日开始执行医保药品限定最高价",answer:"10"},{question:"北京发行了新版发票，因公消费开据的发票，如果中了奖，奖金则归谁所有？",answer:"个人"},{question:"北京属于世界文化遗产的景点是哪个？",answer:"颐和园"},{question:"北京故宫历时多少年建成?",answer:"18年"},{question:"北京最早建成是什么朝代？",answer:"西周"},{question:"北半球太阳直射地球距离最远的一天是？",answer:"12月1日"},{question:"北宋哪位诗人曾隐居在孤山，以梅为妻，以鹤为子？",answer:"林和靖"},{question:"北宋年间奸邪众多，其中臭名昭著的当属“五鬼”，下列哪位不是“五鬼”之列？",answer:"杨亿"},{question:"北宋年间的科举设礼部贡举，所考书目甚多，下列哪部书不属于必考书目？",answer:"《四书》"},{question:"北宋建立后，中国并没有统一，在南北还有不少的割据政权，下列哪个政权不属于北宋时期的割据政权？",answer:"西夏"},{question:"北宋时官员的官帽都是左右两边伸出很长的“耳朵”，其原因是：",answer:"防止交头接耳"},{question:"北宋时期在科学方面的发展有着辉煌的成就，下列哪项数学成就不是发生在宋朝时期？",answer:"“等幂等积”"},{question:"北宋时期的诗人黄庭坚是我国哪个省的人？",answer:"江西"},{question:"北宋时的《百家姓》以“赵”居首，清康熙时的《御制百家姓》以何姓居首？",answer:"孔"},{question:"北宋画家张择端《清明上河图》中有500余人，其中共有多少位女性？",answer:"20"},{question:"北朝的四个朝代中哪个朝代统治时间最短？",answer:"齐"},{question:"北洋军阀实力派人物“辫帅”张勋和其手下十二个健将，被誉为复辟党“十三太保”，下列哪位不是“十三太保”",answer:"孙毓筠"},{question:"北洋军阀政权建立的标志是",answer:"临时政府迁都北京"},{question:"北约（北大西洋公约组织），成立于_________年4月4日。",answer:"1949"},{question:"北美的最高峰是",answer:"麦金利山"},{question:"北魏末年北方六镇大起义的六大重镇不包括下列哪项？",answer:"府户"},{question:"医学上将儿童1～3岁的阶段称为",answer:"稚龄期"},{question:"医用酒精是多少度",answer:"75"},{question:"医疗体育是一种医疗性的体育锻炼，它是预防和治疗疾病的一种有效方法。请问，世界上最早应用医疗体育的国家",answer:"中国"},{question:"十一届三中全会以后，我国最早建立的四个经济特区是哪几个？",answer:"深圳、珠海、汕头、厦门"},{question:"十字军东征对穆斯林控制下的圣地了几次主要东征行动？",answer:"8"},{question:"十字军东征时，于什么时候第一次攻陷了耶路撒冷？",answer:"1099年7月"},{question:"十岁以下的小娃娃就当了皇帝的，在中国历史上共有几个？",answer:"29位"},{question:"千字文的第一句是：",answer:"天地玄黄"},{question:"千里送鹅毛,礼轻情意重.这鹅毛是送给谁的",answer:"李世民"},{question:"半坡人和河姆渡人生活的共同点是",answer:"制造陶器"},{question:"华佗给关羽刮骨疗毒时关羽是何形态？",answer:"饮酒食肉，谈笑弈棋"},{question:"华佗被谁所杀？",answer:"曹操"},{question:"卓文君与司马相如私奔后在哪里卖酒",answer:"今成都"},{question:"单场得分最多的球员是谁？",answer:"张伯伦"},{question:"单场比赛抢到篮板球最多的球员是谁？",answer:"杰里·卢卡斯"},{question:"南北朝时期的优美民歌《敕勒歌》出自",answer:"鲜卑族"},{question:"南北朝称面条为什么？",answer:"水引"},{question:"南北朝称面条是什么?",answer:"引"},{question:"南宋出现了一个诗派“江湖派”，下列哪位对江湖派的影响最大？",answer:"戴复古"},{question:"南宋豪放词派的主要代表人物是",answer:"辛弃疾"},{question:"南社是清朝末年受同盟会影响而成立的著名进步文学团体，下列哪位是南社的代表人物？",answer:"柳亚子"},{question:"南陈王朝的陈后主在隋军攻入皇宫时与两宠妃藏在哪里",answer:"水井"},{question:"卡拉OK兴起于哪国？",answer:"日本"},{question:"印度非暴力不合作运动的领导人是",answer:"甘地"},{question:"卸甲冥焰是哪个职业的技能?",answer:"阴阳士"},{question:"卿为官名，始于:",answer:"周"},{question:"卿大夫分为“九命”，下列哪项不属于九命的是？",answer:"大夫四命"},{question:"历史上哪位皇帝被吐蕃逼得离开长安？",answer:"唐代宗"},{question:"历史上清政府在台湾设立行省始于：",answer:"中法战争结束后"},{question:"历史上的“宁汉合流”是指",answer:"武汉和南京国民政府合并"},{question:"历史上的“紫外灾难”是：",answer:"经典理论遇到困难"},{question:"历史上的第一份足球“首发名单”《武林旧事》曾列出了“筑球三十二人”竞赛时两队的名单与位置,其中不包括",answer:"中立"},{question:"历史上罗马教廷组织过几次十字军东征",answer:"4"},{question:"历史上著名的土地政策井田制是产生在哪个朝代？",answer:"商朝"},{question:"历史上著名的土地政策均田制是产生在哪个朝代？",answer:"唐朝"},{question:"历史上著名的土地政策屯田制是产生在哪个朝代？",answer:"汉朝"},{question:"历史上，以宗教名义发动的十字军东征，前后进行了几次？",answer:"八次"},{question:"历史中真正草船借箭的人是谁",answer:"孙权"},{question:"历史之父指的是",answer:"希罗多德"},{question:"历届世界杯进球最多的射手是谁？",answer:"方丹"},{question:"历来用“三公九卿”来归纳哪一代的中央官制？",answer:"秦代"},{question:"原始人在我国境内的分布曾经十分广阔，其中活动范围最为接近的是",answer:"北京人、山顶洞人"},{question:"参与评定“安史之乱”的唐代大将李光弼并非汉人，它是哪各民族人？",answer:"契丹"},{question:"参加世界杯次数最多的国家队是哪个？",answer:"巴西"},{question:"参加共济会酒馆会议成立英格兰足总的俱乐部不包括下列哪个?",answer:"战争俱乐部"},{question:"发动安史之乱的安禄山的身份是?",answer:"节度使"},{question:"发明活字印刷术的毕升是现在哪个省的人？",answer:"湖北省"},{question:"发源于我国唯一注入北冰洋的河流是：",answer:"额尔齐斯河"},{question:"发现古埃及绝代美女王后诺弗雷托托木乃伊的女考古学家乔安-弗雷彻是哪个国家的人？",answer:"英国"},{question:"发现电磁感应现象的物理学家是：",answer:"法拉第"},{question:"发生在北京卢沟桥的历史事变名叫？",answer:"七七事变"},{question:"发芽的土豆中含有一种毒素，如果摄入过多，可因呼吸麻痹而导致死亡。这种毒素是什么？",answer:"龙葵素"},{question:"口服维生素C剂量每日超过1克可导致：",answer:"腹泻"},{question:"口琴这一乐器诞生于哪个国家",answer:"德国"},{question:"口腔炎可能因为缺乏什么引起？",answer:"维生素B2"},{question:"古人所谓黄道是哪种天体运行周年的轨道？",answer:"太阳"},{question:"古人用十二地支表示一天的十二个时辰，每个时辰两个小进，申时指的是什么时间？",answer:"15点-17点"},{question:"古人称的鱼雁是什么",answer:"书信"},{question:"古人说的酢指的是今天的：",answer:"醋"},{question:"古代为了体现官吏的官位高低而在胸前、背后各缀一块方形补子，根据官品的等级，“补子”上的图案也各有不同",answer:"鹤"},{question:"古代人们用来当酒杯的青铜器叫：",answer:"爵"},{question:"古代人称的“大虫”是什么",answer:"老虎"},{question:"古代体操五禽戏为谁所创？",answer:"华佗"},{question:"古代印度的“种姓制度”分为几级？",answer:"4"},{question:"古代名医孙思邈创造了“以痛取穴”的针灸法，他把这个穴叫做“阿是穴”，这个名字源于：",answer:"病人的话"},{question:"古代大臣上朝时手上拿着的狭长笏(hǜ)板，最初的用途是：",answer:"用来记事"},{question:"古代奥运会创始人是谁？",answer:"伊菲图斯"},{question:"古代对儿童教育和童子科的发展产生较大影响的几种教学类型中不包括下列哪项？",answer:"道学"},{question:"古代屋顶中等级最高的是:",answer:"重檐庑殿顶"},{question:"古代所说的促织是指现在的：",answer:"蟋蟀"},{question:"古代政府设立“义仓”是做什么用的？",answer:"赈灾"},{question:"古代有很多帝王信奉道教，请问下列哪位皇帝信道？",answer:"唐太宗"},{question:"古代的人均GDP峰值是哪个朝代达到的？",answer:"宋朝"},{question:"古代的国子监是",answer:"高等学府"},{question:"古代的日本人生活清苦，只有达到武士级别的人进餐的时候才能佐以小菜，武士以什么小菜下饭？",answer:"酸梅"},{question:"古代的铜壶滴漏用于：",answer:"计算时间"},{question:"古代称能以财救人的人为厨，东汉时期有著名的“八厨”，下列谁不属于“八厨”？",answer:"李燮"},{question:"古代第一届奥林匹克运动会是哪一年举行的？",answer:"公元前776年"},{question:"古代铸剑天王欧冶子承天命铸了一把剑，剑成后欧冶子也力尽神竭而亡，请问这把剑叫什么？",answer:"纯钧"},{question:"古代驻军只住两夜叫什么？",answer:"信"},{question:"古印度的种姓制度中哪一个地位最低",answer:"首陀罗"},{question:"古埃及各王朝修建的大大小小的金字塔共有",answer:"70多座"},{question:"古奥林匹克竞赛优胜者要戴上用什么编成的王冠",answer:"月桂"},{question:"古巴导弹危机是谁造成的",answer:"赫鲁晓夫"},{question:"古希腊神话中被称作智慧女神的是哪一位？",answer:"雅典娜"},{question:"古文中关于年龄的称谓错误的是？",answer:"知命是男子六十岁"},{question:"古文中关于百姓的称呼错误的是？",answer:"庶黎"},{question:"古文中骈指的是几匹马拉车？",answer:"2"},{question:"古时戒指用来表示？",answer:"禁戒"},{question:"古言所谓:吃在广州,玩在杭州....哪死在什么州?",answer:"柳州"},{question:"只有成为你的好友，你才能发信件给他，对吗？",answer:"对"},{question:"可以使自己获得双倍经验的道具是?",answer:"双倍经验丸"},{question:"可以免除死亡惩罚的道具是?",answer:"小强丸"},{question:"可以同时接多个任务吗?",answer:"可以"},{question:"可以生产回复体力和生命的副职是?",answer:"庖丁"},{question:"可以瞬间提高自己一定活力的道具是?",answer:"活力丸"},{question:"可以瞬间提高自己的移动和跳跃的道具是?",answer:"神行之卷"},{question:"可撤消合同的变更或撤消须由哪个机构作出。",answer:"人民法院和仲裁机构"},{question:"号“易安居士”的是？",answer:"李清照"},{question:"号称“上帝之鞭”的阿提拉是古代哪个民族的首领？",answer:"匈奴"},{question:"司徒王允看到董卓、吕布皆是好色之徒，于是巧使什么计，让貂蝉离间董卓吕布，从而让其父子两人火并",answer:"美人计"},{question:"司法官的祖师是",answer:"皋陶"},{question:"司马光，司马迁，司马昭，司马懿，哪位司马先生出生最早",answer:"司马迁"},{question:"司马懿父子在哪次战役中几乎丧命？",answer:"上方谷"},{question:"司马相如是汉朝的大文人，被称为“赋圣”，下列那部作品不是“赋圣”代表作？",answer:"《登楼赋》"},{question:"吃了煮鸡蛋的后果是？",answer:"即时回复300生命"},{question:"吃了红红肉有啥用?",answer:"一段时间内回复生命的"},{question:"吃了饺子后会发生什么事情?",answer:"即时回复500生命"},{question:"吃元宵始于哪个朝代",answer:"宋朝"},{question:"合伙企业新入伙必须经过：",answer:"全部同意"},{question:"合伙企业申请营业执照时下列哪项不是必须提交的？",answer:"合伙人出资证明"},{question:"名画《伏尔加河上的纤夫》的作者是谁？",answer:"列宾"},{question:"名画《夜巡》是谁的作品？",answer:"伦勃朗"},{question:"名画《清明上河图》描写哪个城市的世俗生活与节日景象？",answer:"开封"},{question:"名画《清明上河图》的规格是多少？（单位厘米）",answer:"528.7*24.8"},{question:"名画《自由引导人民》表现了哪国人民的反封建斗争情景？",answer:"法国"},{question:"名画家董源是哪个朝代的人物？",answer:"五代"},{question:'名落孙山中的"孙山"是一个',answer:"人名"},{question:"吕布为了美色，听信了王允的话杀了谁",answer:"董卓"},{question:"吕布为了谁杀董卓",answer:"貂婵"},{question:"吕布的赤兔马最后成了谁的座骑",answer:"关羽"},{question:"吴道子有一幅名画，它描写了释迦牟尼降生后，他的父亲净饭王抱着他拜谒天神的情景，这幅名画是",answer:"《天王送子图》"},{question:"周朝专门掌管元宵节燃灯、观灯的官吏叫：",answer:"司烜"},{question:"周瑜与谁合演了一场苦肉计来，让曹操中计，为后来的火烧曹船立下汗马功劳。",answer:"黄盖"},{question:"周瑜为谋害诸葛亮，要求其在几天内造出十万支箭？",answer:"十天"},{question:"周瑜娶的小乔是谁的女儿?",answer:"乔国公"},{question:"周瑜的妻子是",answer:"小乔"},{question:"周长一定的三角形中，怎样的三角形面积最大？",answer:"等边三角形"},{question:"命名“好望角”的人是：",answer:"麦哲伦"},{question:"和玩家差不多的怪物:",answer:"怪物名为黄色"},{question:"哥伦布发现新大陆是在",answer:"十五世纪九十年代"},{question:"哪一个不是中国的少数民族?",answer:"日尔曼,闪米特族,盎格鲁-撒克逊族,凯尔特族,和族"},{question:"哪一个地区不是北京的地名?",answer:"滨江道"},{question:"哪一个城市不是我国的?",answer:"巴黎"},{question:"哪一个属于<<四书>><<五经>>?",answer:"尚书"},{question:"哪一个昆虫是害虫?",answer:"棉铃虫"},{question:"哪一个昆虫是益虫?",answer:"蜜蜂"},{question:"哪一个是三国演义里面的事件?",answer:"赤壁之战"},{question:"哪一个是中国的首都?",answer:"北京"},{question:"哪一个是儒家学派的人物?",answer:"孔子"},{question:"哪一个是先秦时代的学术流派?",answer:"儒"},{question:"哪一个是我国古代农民起义的领袖?",answer:"陈胜"},{question:"哪一个是联合国安理会常任理事国之一：",answer:"法国"},{question:"哪一个是著明的星体?",answer:"地球"},{question:"哪一个词是褒义词?",answer:"和蔼可亲"},{question:"哪一个词是贬义词?",answer:"出尔反尔"},{question:"哪一位人物属于中国文坛的第一",answer:"李清照"},{question:"哪一位人物是卖国贼?",answer:"曹汝霖"},{question:"哪一位人物是小说中虚构的人物?",answer:"祥林嫂"},{question:"哪一位是《三国演义》中的人物?",answer:"孙权"},{question:"哪一位是《水浒》中的人物?",answer:"阮小二"},{question:"哪一位是开国皇帝?",answer:"赢政"},{question:"哪一位是清朝的皇帝?",answer:"顺治"},{question:"哪一位是清朝的诗人?",answer:"曹雪芹"},{question:"哪一位皇帝派张骞出使西域",answer:"汉武帝"},{question:"哪一年天安门城楼对外开放",answer:"1988"},{question:"哪一年，刘伯承留学于苏联伏龙芝军事学院：",answer:"1928"},{question:"哪一朝废除丞相制度",answer:"明朝"},{question:"哪一种动物是昆虫的天敌?",answer:"山雀"},{question:"哪一种昆虫是在土壤中生存的?",answer:"蝉的幼虫"},{question:"哪一种是两栖爬行动物?",answer:"鳄蜥"},{question:"哪一种是修辞方法?",answer:"比喻"},{question:"哪一种是兽类?",answer:"熊猴"},{question:"哪一种是国家一级保护动物?",answer:"扬子鳄?"},{question:"哪一种是国家二级保护动物?",answer:"猕猴?"},{question:"哪一种是有害的昆虫?",answer:"跳蚤"},{question:"哪一种是鸟类?",answer:"彩鹳?"},{question:"哪一种植物是昆虫的天敌?",answer:"捕蝇草"},{question:"哪一种鸟是益鸟?",answer:"啄木鸟"},{question:"哪一部作品不属于中国文坛的第一",answer:"乔家大院"},{question:"哪一部小说是鲁迅写的?",answer:"孔乙己"},{question:"哪一部是元曲?",answer:"天净沙秋思"},{question:"哪一部是有关抗日战争的人物故事或影片?",answer:"王二小的故事"},{question:"哪个不平等条约是英国逼中国签定的?",answer:"《南京条约》"},{question:"哪个不是《水浒》中的人物？",answer:"牛小二"},{question:"哪个不是中国的思想家？",answer:"马克思"},{question:"哪个不是澳大利亚特有的动物？",answer:"大食蚁兽"},{question:"哪个不是金庸的小说？",answer:"书剑恩仇录"},{question:"哪个不是鲁迅的作品？",answer:"茶馆"},{question:"哪个可以词语后加“儿”话音？",answer:"鲜花儿"},{question:"哪个国家处于亚洲?",answer:"中国"},{question:"哪个国家处于大洋洲?",answer:"澳大利亚"},{question:"哪个国家处于欧洲?",answer:"荷兰"},{question:"哪个国家处于美洲?",answer:"巴西"},{question:"哪个国家处于非洲?",answer:"南非"},{question:"哪个国家属于战国七雄之一？",answer:"齐国"},{question:"哪个地区有梅雨季节？",answer:"江苏"},{question:"哪个城市曾经是古代皇帝的都城？",answer:"洛阳"},{question:"哪个字属于上下形结构的？",answer:"思"},{question:"哪个字属于上中下形结构的？",answer:"意"},{question:"哪个字属于人字头？",answer:"仓"},{question:"哪个字属于全包围形结构的？",answer:"圆"},{question:"哪个字属于八字旁？",answer:"谷"},{question:"哪个字属于力字旁？",answer:"劳"},{question:"哪个字属于半包围形结构的？",answer:"医"},{question:"哪个字属于厂字旁？",answer:"原"},{question:"哪个字属于又字旁?",answer:"艰"},{question:"哪个字属于品字形结构的？",answer:"品"},{question:"哪个字属于左中右形结构的？",answer:"街"},{question:"哪个字属于左右形结构的？",answer:"村"},{question:"哪个字是多音字？",answer:"给"},{question:"哪个字是象形字？",answer:"山"},{question:"哪个对厄尔尼诺的解释正确？",answer:"原意为圣婴"},{question:"哪个属于《国语》史书里的？",answer:"《周语》"},{question:"哪个属于专用书信？",answer:"感谢信"},{question:"哪个属于九大行星？",answer:"水星"},{question:"哪个属于修辞格？",answer:"比喻"},{question:"哪个属于偏旁部首是亻的？",answer:"份"},{question:"哪个属于偏旁部首是冂的？",answer:"冈"},{question:"哪个属于偏旁部首是冖的？",answer:"军"},{question:"哪个属于偏旁部首是冫的？",answer:"冰"},{question:"哪个属于偏旁部首是刂的？",answer:"制"},{question:"哪个属于偏旁部首是勹的？",answer:"句"},{question:"哪个属于偏旁部首是匚的？",answer:"匡"},{question:"哪个属于偏旁部首是卩的？",answer:"却"},{question:"哪个属于偏旁部首是厶的？",answer:"私"},{question:"哪个属于偏旁部首是夕的？",answer:"梦"},{question:"哪个属于偏旁部首是女的？",answer:"她"},{question:"哪个属于偏旁部首是宀？",answer:"宝"},{question:"哪个属于偏旁部首是寸的？",answer:"封"},{question:"哪个属于偏旁部首是广的？",answer:"底"},{question:"哪个属于偏旁部首是彡的？",answer:"影"},{question:"哪个属于偏旁部首是忄的？",answer:"悄"},{question:"哪个属于偏旁部首是扌的？",answer:"打"},{question:"哪个属于偏旁部首是氵的？",answer:"滩"},{question:"哪个属于偏旁部首是示的？",answer:"社"},{question:"哪个属于偏旁部首是衣的？",answer:"袄"},{question:"哪个属于偏旁部首是讠的？",answer:"讨"},{question:"哪个属于偏旁部首是辶的？",answer:"邀"},{question:"哪个属于偏旁部首是阝（在右）的？",answer:"邓"},{question:"哪个属于偏旁部首是阝（在左）的？",answer:"队"},{question:"哪个属于公文类？",answer:"通知"},{question:"哪个属于写景物作文的基本方面？",answer:"景物的形状"},{question:"哪个属于叙事最基本的“要素”？",answer:"时间"},{question:"哪个属于叠字动词？",answer:"听听"},{question:"哪个属于叠字名词？",answer:"哥哥"},{question:"哪个属于四言诗体裁？",answer:"《八伯之歌》"},{question:"哪个属于契据类的？",answer:"收条"},{question:"哪个属于宣传类？",answer:"广告稿"},{question:"哪个属于旅游资源的价值",answer:"美学价值"},{question:"哪个属于是中国书法的字体？",answer:"篆"},{question:"哪个属于楚歌体裁？",answer:"《汉广》"},{question:"哪个属于气候造成的自然灾害？",answer:"台风"},{question:"哪个属于热带低压台风的级别？",answer:"1级"},{question:"哪个属于礼仪类的？",answer:"请柬"},{question:"哪个属于联合国语言？",answer:"汉语"},{question:"哪个属于诸子分类中的？",answer:"儒"},{question:"哪个平原位于中国？",answer:"东北平原"},{question:"哪个成语是三十六计之一？",answer:"借尸还魂"},{question:"哪个昆虫不会飞？",answer:"蝗虫"},{question:"哪个昆虫会飞？",answer:"蜻蜓"},{question:"哪个昆虫是害虫?",answer:"苍蝇"},{question:"哪个昆虫是益虫?",answer:"蜜蜂"},{question:"哪个是24节气之一？",answer:"立春"},{question:"哪个是IT企业之一？",answer:"微软"},{question:"哪个是IT前沿技术之一？",answer:"海量内存"},{question:"哪个是世界五大信用卡之一？",answer:"VISA"},{question:"哪个是世界五大经济强国之一？",answer:"美国"},{question:"哪个是世界十大沙漠之一？",answer:"撒哈拉沙漠"},{question:"哪个是中国“十大名茶”之一？",answer:"西湖龙井"},{question:"哪个是中国七大方言之一？",answer:"北方话"},{question:"哪个是中国主要商品粮基地之一？",answer:"松嫩平原"},{question:"哪个是中国五大经济特区之一？",answer:"海南"},{question:"哪个是中国八大菜系之一？",answer:"川"},{question:"哪个是中国的传统节日？",answer:"端午节"},{question:"哪个是中国省区简称之一？",answer:"京"},{question:"哪个是中国银行之一？",answer:"商业银行"},{question:"哪个是二战反法西斯同盟国之一？",answer:"英国"},{question:"哪个是二战同盟国之一？",answer:"英国"},{question:"哪个是二战轴心国之一？",answer:"德国"},{question:"哪个是五代之一？",answer:"后唐"},{question:"哪个是五十六少数民族之一？",answer:"满族"},{question:"哪个是五大物质生产部门？",answer:"农业"},{question:"哪个是五大门派之一？",answer:"少林"},{question:"哪个是五形拳之一？",answer:"龙"},{question:"哪个是人体最适宜的外界温度？",answer:"20℃"},{question:"哪个是人类肉眼可以看到的七彩光？",answer:"赤"},{question:"哪个是会计的五大分类之一？",answer:"资产"},{question:"哪个是修辞方法？",answer:"比喻"},{question:"哪个是借代的种类之一？",answer:"用事物特征代本体事物"},{question:"哪个是八女投江人物之一？",answer:"胡秀兰"},{question:"哪个是公司企业类型？",answer:"有限责任公司"},{question:"哪个是六朝古都之一？",answer:"北京"},{question:"哪个是助词？",answer:"的"},{question:"哪个是北京古建筑？",answer:"故宫"},{question:"哪个是北京的报刊之一？",answer:"北京晚报"},{question:"哪个是北京的景点之一？",answer:"天坛"},{question:"哪个是十国之一？",answer:"吴"},{question:"哪个是十大元帅之一？",answer:"陈毅"},{question:"哪个是卖电器的商店？",answer:"大钟"},{question:"哪个是参与第31届台风委员会台风命名活动的国家和地区？",answer:"中国"},{question:"哪个是古代表敬称的词语之一？",answer:"王"},{question:"哪个是国家？",answer:"韩国"},{question:"哪个是国徽的内容？",answer:"齿轮"},{question:"哪个是国旗上五角星的含义？",answer:"工人"},{question:"哪个是国有五大银行之一？",answer:"中国工商银行"},{question:"哪个是地震前的预警？",answer:"地面初期震动"},{question:"哪个是多音字？",answer:"熬"},{question:"哪个是天干的名称之一？",answer:"甲"},{question:"哪个是宋朝的古都：",answer:"开封"},{question:"哪个是对农业能产生危害的气候现象？",answer:"冰雹"},{question:"哪个是对我国影响最大的气象灾害？",answer:"干旱"},{question:"哪个是属于容易读错的汉字？",answer:"弋"},{question:"哪个是常见快餐店之一？",answer:"麦当劳"},{question:"哪个是建安七子之一？",answer:"孔融"},{question:"哪个是彩虹的颜色之一？",answer:"红"},{question:"哪个是成语？",answer:"知书达礼"},{question:"哪个是我国古老的姓氏，证明曾经有过以女性为中心的社会？",answer:"姬"},{question:"哪个是手指称呼？",answer:"大拇指"},{question:"哪个是救国会“七君子“之一？",answer:"沈钧儒"},{question:"哪个是文人？",answer:"李白"},{question:"哪个是春秋战国诸子百家之一？",answer:"孔子"},{question:"哪个是清政府同侵略者签订的不平等条约？",answer:"南京条约"},{question:"哪个是爵位之一？",answer:"公"},{question:"哪个是电脑硬件之一？",answer:"键盘"},{question:"哪个是相学中人体五官之一？",answer:"口"},{question:"哪个是省略号的用法？",answer:"表示引文的省略"},{question:"哪个是竹林七贤之一？",answer:"嵇康"},{question:"哪个是竹溪六逸之一？",answer:"李白"},{question:"哪个是第31届台风委员会中中国所命名的台风名字有？",answer:"悟空"},{question:"哪个是第31届台风委员会中所命名的台风名字？",answer:"玉兔"},{question:"哪个是蜀国五虎上将？",answer:"关羽"},{question:"哪个是褒义词？",answer:"美丽"},{question:"哪个是贬义词？",answer:"愚蠢"},{question:"哪个是轻生词？",answer:"啦"},{question:"哪个是金陵五老之一？",answer:"华金昆"},{question:"哪个是黄花岗72烈士之一？",answer:"庞雄"},{question:"哪个洲的原始森林面积最大：",answer:"南美洲"},{question:"哪个省是中国自治区之一？",answer:"广西"},{question:"哪个节日是中国传统节日？",answer:"春节"},{question:"哪个花卉不宜放入房间？",answer:"兰花"},{question:"哪个词是动词？",answer:"跑步"},{question:"哪个词是名词？",answer:"台灯"},{question:"哪个词是形容词？",answer:"清澈"},{question:"哪个词语的意思，是做为“原来的”“旧有的”的意思？",answer:"故乡"},{question:"哪个词语的意思，是做为“死亡的，已经不在的”的意思？",answer:"故去"},{question:"哪个词里面有错别字？",answer:"按步就班"},{question:"哪个说法是正确的？",answer:"解释事物的状态"},{question:"哪个食物不宜生吃？",answer:"鸡蛋"},{question:"哪个高原位于亚洲？",answer:"青藏高原"},{question:"哪些人犯罪可以从轻、减轻或者免除处罚？",answer:"盲人"},{question:"哪位是中国十大元帅之一？",answer:"朱德"},{question:"哪位是戊戌六君子之一？",answer:"谭嗣同"},{question:"哪位是晚清与侵略者斗争中牺牲的英雄？",answer:"关天培"},{question:"哪位是杨家将中的人物？",answer:"杨宗宝"},{question:"哪位是梁山好汉？",answer:"武松"},{question:"哪位是民族英雄？",answer:"文天祥"},{question:"哪位是爱国文人？",answer:"屈原"},{question:"哪位烈士是抗日战争中牺牲的？",answer:"杨靖宇"},{question:"哪位烈士是抗美援朝战场上牺牲的？",answer:"毛岸英"},{question:"哪位烈士是解放战争中牺牲的？",answer:"董存瑞"},{question:"哪位著名音乐家被称为'交响乐之父'？",answer:"海顿"},{question:"哪位豪杰曾与吕布交手过呢?",answer:"张飞"},{question:"哪只动物是老鼠的天敌？",answer:"猫头鹰"},{question:"哪吒的故乡陈塘关是现在的：",answer:"宜宾"},{question:"哪国人最先制作出了牛奶巧克力？",answer:"瑞士"},{question:"哪座是皇城城门？",answer:"天安门"},{question:"哪条是中国产的毒蛇？",answer:"眼睛王蛇"},{question:"哪种乐曲形式是富于戏剧性的大型管弦乐套曲？",answer:"交响乐"},{question:"哪种动物冬眠？",answer:"熊"},{question:"哪种动物喜欢群居?",answer:"狼"},{question:"哪种动物容易得禽流感?",answer:"鸡"},{question:"哪种动物属于爬行类？",answer:"蜥蜴"},{question:"哪种动物属于猫科动物？",answer:"非洲狮"},{question:"哪种动物属于鱼类？",answer:"带鱼"},{question:"哪种动物有袋？",answer:"袋鼠"},{question:"哪种动物生活在北极？",answer:"北极熊"},{question:"哪种动物生活在澳大利亚？",answer:"袋鼠"},{question:"哪种动物站着睡觉?",answer:"马"},{question:"哪种动物鱼类？",answer:"带鱼"},{question:"哪种哺乳动物生活在海里？",answer:"海豚"},{question:"哪种属于棘皮动物?",answer:"海星"},{question:"哪种属于水栖鸟类?",answer:"大雁"},{question:"哪种属于海鸟？",answer:"海鸥"},{question:"哪种属于珍稀鸟类？",answer:"朱鹮"},{question:"哪种属于腔肠动物?",answer:"海葵"},{question:"哪种属于节肢动物？",answer:"虾"},{question:"哪种属于软体动物?",answer:"牡蛎"},{question:"哪种方法可以提高作文水平？",answer:"细观察"},{question:"哪种昆虫属于害虫？",answer:"苍蝇"},{question:"哪种是真正的鱼？",answer:"鳝鱼"},{question:"哪种是酒的经营分类之一？",answer:"白酒"},{question:"哪种海洋动物会像鸟儿一样唱歌?",answer:"白鲸"},{question:"哪种维生素可促进钙的吸收？",answer:"维生素B2"},{question:"哪种舞蹈被称为“跳跃和旋转的艺术”？",answer:"芭蕾"},{question:"哪种虫子属于昆虫？",answer:"苍蝇"},{question:"哪种蜘蛛有毒?",answer:"夏力曼黑寡妇"},{question:"哪种金属能杀菌？",answer:"银"},{question:"哪种鱼生活在海里?",answer:"珊瑚鱼"},{question:"哪种鱼生活在淡水里?",answer:"中华鲟"},{question:"哪种鸟不会飞?",answer:"鸵鸟"},{question:"哪种鸟属于候鸟？",answer:"大雁"},{question:"哪种鸟属于益鸟？",answer:"灰喜鹊"},{question:"哪部小说是老舍的名著？",answer:"茶馆"},{question:"哪里是室内避震较安全的地方？",answer:"床下"},{question:"哪项是对寒露风的正确解释？",answer:"又叫社风"},{question:"唐代印制的世界上现存最早标有确切日期的雕版印刷品是？",answer:"金刚经"},{question:"唐代开创了中国政区史上道和府的建制，下面哪项不属于唐朝十道之一？",answer:"陇西"},{question:"唐代开创了中国政区史上道和府的建制，唐太宗把天下分为十道，下面那个不是十道之一？",answer:"陇西"},{question:"唐代的乐队，使用的主要乐器是",answer:"琵琶"},{question:"唐代的吐蕃是今天哪个族的祖先：",answer:"藏族"},{question:"唐代著名文学家刘禹锡字",answer:"梦得"},{question:"唐代设十道作为监察区是始于什么时期？",answer:"开元时期"},{question:"唐代诗人杜牧的七绝《江南春》，一开头就是“千里莺啼绿映红，水村山郭酒旗风”。酒旗就是酒店的招牌，下列",answer:"酒布"},{question:"唐代诗人陈子昂的名句“念天地之悠悠，独××而涕下”",answer:"怆然"},{question:"唐初沿用的均田制始创于",answer:"北魏"},{question:"唐君臣清平茶程序繁多，下列不属于其中之一的是？",answer:"倒汤"},{question:"唐太宗为了表彰自己大臣的功劳，封二十四名大臣为凌烟阁开国二十四功臣，下列哪位不属于二十四功臣？",answer:"李密"},{question:"唐太宗把全国分为十道，下列哪项不属于十道？",answer:"陇西"},{question:"唐太宗李世民除了治国平天下的本事外，还是一个优秀的诗人，下列哪部不是李世民的作品？",answer:"过温汤"},{question:"唐太宗的“太宗”指的是他的：",answer:"庙号"},{question:"唐宋八大家是唐宋时期八大散文代表作家的合称，下列哪位属于唐宋八大家？",answer:"朱右"},{question:"唐山大地震使多少人死亡：",answer:"24万以上"},{question:"唐文宗时在国子学立石将儒家的十二部经书刻下，史称“十二经”，下列哪项不属于“十二经”",answer:"《国风》"},{question:"唐朝与阿拉伯人（即大食）有过几次交锋？",answer:"六次"},{question:"唐朝为了有效管理异族，设立了六大都护府。下列哪个不是都护府？",answer:"匈奴"},{question:"唐朝农民改进犁的构造，制造了",answer:"曲辕犁"},{question:"唐朝在中央设有九寺，下列哪个部门不属于九寺？",answer:"甘露寺"},{question:"唐朝建立者是",answer:"李渊"},{question:"唐朝的中央官制中设有五署，下列哪项不属于五署？",answer:"太常监"},{question:"唐朝的地方官制中设有六曹，下列哪项不属于六曹？",answer:"司马"},{question:"唐朝的帝王中有不少都善于诗词歌赋，请问下列哪位唐朝的皇帝不是诗人？",answer:"李贤"},{question:"唐朝的第一个皇帝是谁",answer:"李渊"},{question:"唐朝的都城长安是今天的哪里？",answer:"西安"},{question:"唐朝造纸术经下列哪一国家传到欧洲",answer:"大食"},{question:"唐朝长期处于藩镇割据的局面，共有十个藩镇，每个藩镇设有节度使，下列哪位不属于藩镇节度使？",answer:"剑南五府经略使"},{question:"唯一能够前后左右飞行的鸟是",answer:"蜂鸟"},{question:"唯一获得奥林匹克金质勋章的中国人是？",answer:"万里"},{question:"商业银行的工作人员不得：",answer:"在其他经济组织兼职"},{question:"商代名将妇好是下列哪位商代君王的妻子？",answer:"武丁"},{question:"商代已有成组的乐器，下列哪项不是商代的乐器？",answer:"罄"},{question:"商城的快捷键是什么?",answer:"F9"},{question:"商朝屡次迁都，曾经前后迁过五次，下列哪个地方是商朝的第一个都城？",answer:"亳（今河南商丘市）"},{question:"商汤至太甲统治时期出现大好局面，得益于哪位政坛元老的辅佐？",answer:"伊尹"},{question:"商鞅为什么被处死?",answer:"因为变法触动了贵族利益"},{question:"喝了美髯温酒会发生什么事情?",answer:"即时回复200体力"},{question:"嗜血破天是哪个职业的技能?",answer:"豪杰"},{question:"四大名楼不包括",answer:"雨夜楼"},{question:"四大名著里有两位行者，它们分别是《西游记》中的孙悟空和《水浒传》中的",answer:"武松"},{question:"四大名镇不包括",answer:"汉阳镇"},{question:"四羊方尊是:____青铜器中的精品",answer:"商朝"},{question:"回春丹在哪个NPC处可以购买到?",answer:"千货商"},{question:"回春术是哪个职业的技能?",answer:"仙术士"},{question:"回风拂柳是哪个职业的技能?",answer:"剑侍"},{question:"因为各国习俗不同，所以各国的花卉消费也不尽相同，世界上花卉消费最多的国家是德国，你知道其年消费量达到",answer:"30"},{question:"因暗杀未遂，被曹操断九指，割舌，分肢体而死的是谁？",answer:"吉平"},{question:"因某种原因未能按时吃饭叫“扛刀”，那么是谁扛的刀？",answer:"关羽"},{question:"因梳头技艺高超而深得主子欢心的太监是",answer:"李莲英"},{question:"因环境污染损害赔偿提起公诉的时效期间为几年？",answer:"3年"},{question:"团旗的标准尺寸有多少种",answer:"三种"},{question:"围棋中依国际标准规何者先落子？",answer:"黑子"},{question:"国企工人忘某于1998年8月下岗，那么其基本医疗保险费由谁负责？",answer:"再就业服务中心缴纳"},{question:"国共两党第一次合作实现的标志是",answer:"国民党“一大”召开"},{question:"国共两党第二次合作实现，抗日民族统一战线正式形成是在：",answer:"“七七”事变后"},{question:"国内大城市电话区号搭配正确地是:",answer:"北京-010"},{question:"国学四大师中哪一位是戊戌变法领袖之一",answer:"梁启超"},{question:"国家任务一般有多少步？",answer:"5"},{question:"国家任务可以多次重复做吗?",answer:"可以"},{question:"国家公务员制度起源于？",answer:"英国文官制"},{question:"国家病毒命名委员会正式命名了冠状病毒科是在哪一年？",answer:"2003年"},{question:"国家自然科学一等奖自1977年创立以来最多有过连续几年空缺",answer:"4年"},{question:"国家规定人体允许通过的工频电流为多少毫安？",answer:"30毫安"},{question:"国家赔偿的主要方式是：",answer:"支付赔偿金"},{question:"国民政府所采取的稳定财政的措施中，成效较为明显的是",answer:"改革币制"},{question:"国民革命军第八路军成立时共有多少人。",answer:"4.6万人"},{question:"国际共产主义运动的第一个战斗纲领是",answer:"《共产党宣言》"},{question:"国际分工产生和发展的基础是",answer:"自然条件"},{question:"国际名为“维纳斯”的九大行星之一是",answer:"金星"},{question:"国际外汇市场上的汇率有几种表示方式方法？",answer:"2种"},{question:"国际奥委会会旗是哪个国家于1920年赠送的？",answer:"挪威"},{question:"国际奥委会成立于",answer:"1894年"},{question:"国际奥委会是哪一年成立的？",answer:"1894"},{question:"国际奥委会的第一位中国委员是谁？",answer:"王正廷"},{question:"国际奥委会第一任主席是谁？",answer:"维凯拉斯"},{question:"国际开发协会和国际金融公司属于以下哪一国际金融机构？",answer:"世界银行集团"},{question:"国际米原器是由铂和下面哪一种金属的合金制成？",answer:"铱"},{question:"国际象棋的棋子和中国象棋不一样，下列哪项不是国际象棋的棋子？",answer:"炮"},{question:"国际足联总部在哪？",answer:"苏黎世"},{question:"圆周率最早出现在哪里？",answer:"阿拉伯"},{question:"圆明园大水法遗址是在哪一年被英军焚毁的？",answer:"1860年"},{question:"土地改革基本完成是在",answer:"1952年底"},{question:"在1956——1966年的建设中，我国石油全部自给是在什么时间",answer:"1965年"},{question:"在1994年到2003年十年的甲A联赛历史中，大连实德队共获得几次联赛冠军？",answer:"7"},{question:"在1998年的“陆俊风波”中，哪家报纸被推上法庭？",answer:"《羊城体育报》"},{question:"在2000年第27届悉尼奥林匹克运动会上，中国代表队获得了多少块金牌？",answer:"28块"},{question:"在QQ三国中,一个QQ号下面所有角色的仓库是共用的吗?",answer:"是"},{question:"在QQ三国中,几级可以接副职业的就职任务?",answer:"12"},{question:"在QQ三国中,副职业庖丁的作用是什么?",answer:"即能做蓝药也能做红药"},{question:"在QQ三国中,有多少个副职业?",answer:"5"},{question:"在WTO中，哪一种方式是唯一合法的保护方式？",answer:"关税"},{question:"在《三国演义中》诸葛亮病逝于何处？",answer:"五丈原"},{question:"在下列历史事件中，导致王朝更替的是",answer:"牧野之战"},{question:"在世界上首创用汤药治病的是：",answer:"伊尹"},{question:"在世界历史上最早统计人口的国家是",answer:"中国"},{question:"在个人状态中,哪一项代表武器的物理攻击力?",answer:"物攻"},{question:"在个人状态中,哪一项影响角色的回避能力?",answer:"灵活"},{question:"在中国共产党领导下，上海总工会成立于",answer:"“五卅”运动期间"},{question:"在中国北部沿海地区的土壤改良是以改良什么土壤为主",answer:"盐碱土"},{question:"在中国古代传说中，伏羲和女娲是什么关系？",answer:"兄妹关系"},{question:"在中国哲学中，“机锋”和“棒喝”是谁的术语",answer:"禅宗"},{question:"在中国，重庆市巫山县发现的巫山人化石，距今有多少万年？",answer:"204"},{question:"在中日甲午战争中，邓世昌驾驶哪艘战舰冲向敌舰，不幸触雷，为国捐躯？",answer:"致远"},{question:"在争夺北美殖民地中，西班牙英国法国都曾占领过的同一地区是",answer:"密西西比河"},{question:"在二十四节气中，立秋的下一个节气是什么？",answer:"处暑"},{question:"在亚洲第一个建立社会主义国家的是",answer:"蒙古"},{question:"在什么时间，中华人民共和国民政部追认张自忠为革命烈士？",answer:"1982年"},{question:"在位时间最短的皇帝是东汉的刘贺，他只当了多久的皇帝就被废除了？",answer:"27天"},{question:"在作战中眼睛被流箭射中，说：「父精母血不可弃」而把眼睛吃掉的是?",answer:"夏侯惇"},{question:"在俄罗斯总共进行过几次车臣战争：",answer:"2"},{question:"在保护贸易理论中，保护幼稚工业理论的提出者是",answer:"李斯特"},{question:"在北京人之后、山顶洞人之前，生活在长江流域的原始人群是",answer:"长阳人"},{question:"在北美印第安人的神话中是哪种动物创造了世界，创造了人类？",answer:"乌鸦"},{question:"在古代历法中，“申”代表的是哪个月份？",answer:"7月"},{question:"在古代，谁采取“明修栈道，暗渡陈仓”的计策，平定三秦？",answer:"韩信"},{question:"在古希腊,人们购买奴隶是用：",answer:"盐"},{question:"在古希腊被成为是“太阳神”的是：",answer:"阿波罗"},{question:"在哪一年铁木真在斡难河（今蒙古鄂嫩河）源召开忽里台大会，即蒙古国大汗位，号成吉思汗：",answer:"1206"},{question:"在哪一年，叶剑英被授予元帅军衔：",answer:"1955"},{question:"在哪一年，毛泽东曾加入湖南起义的新军：",answer:"1911"},{question:"在哪个世纪欧洲盛行华贵绮丽的绘画艺术风格？",answer:"17"},{question:"在国际关系的表述中有一个常用的词汇叫“西方国家”，关于这个概念，正确的理解应该是：",answer:"发达资本主义国家"},{question:"在多媒体计算机系统中，不能用以存储多媒体信息的是什么？",answer:"光缆"},{question:"在学术研究时常见的搜虫方式是哪一个?",answer:"紫光灯"},{question:"在宋代西河南府指的是现在的",answer:"洛阳"},{question:"在市场经济中，企业进行生产经营活动的直接目的是",answer:"追求利润"},{question:"在常温状态下唯一呈现液态的金属是哪种？",answer:"汞"},{question:"在想回到最近的一个城市，以下方法可行？",answer:"其他答案都是"},{question:"在我国古代哪位名医活到101岁",answer:"孙思邈"},{question:"在我国古代曾有一次人口普查，它是在哪个朝代进行的？",answer:"明朝"},{question:"在我国古代有位名医活到101岁，被称为“百岁神医”，他是",answer:"孙思邈"},{question:"在我国最早介绍俄国十月革命，宣传马克思主义的是：",answer:"李大钊"},{question:"在我国最早提倡学分制的是：",answer:"蔡元培"},{question:"在我国的农历节气中，“惊蛰”象征着什么？",answer:"冬眠动物出土活动"},{question:"在我国，刑法规定行为人负刑事责任的最小年龄是",answer:"14岁"},{question:"在战国之前“百姓”是对什么人的总称？",answer:"贵族"},{question:"在抗战的相持阶段，坚定了全国人民抗战胜利信心的战役是",answer:"百团大战"},{question:"在抗日战争中国民党牺牲的最高将领是：",answer:"张自忠"},{question:"在故宫中，皇后的居所是",answer:"坤宁宫"},{question:"在文革中，严辞批评文革的种种倒行逆施的老同志不包括",answer:"周恩来"},{question:"在新年钟声敲响之际，以每小时1700公里的速度向西飞行，绕地球一周，能迎接多少个新年：",answer:"24个"},{question:"在新手城的哪个NPC可以接副职业的就职任务？",answer:"千货商"},{question:"在新文化运动中，中坚力量主要有陈独秀，李大钊，鲁迅，钱玄同和：",answer:"胡适"},{question:"在明代生前没有当过皇帝死后被追封为皇帝建造陵园的是哪位？",answer:"朱元璋的父亲"},{question:"在春秋争霸中，晋文公曾在外出逃多少年？",answer:"19年"},{question:"在欧洲探索新航路过程中，实现环球航行的是",answer:"麦哲伦"},{question:"在民航飞机都要安装“黑匣子”的原因是（）",answer:"飞机失事记录资料调查原因"},{question:"在气温很高时，人主要通过哪种方式散热以保持正常体温。",answer:"出汗"},{question:"在游戏里可以看到世界地图吗？",answer:"按M键就可以"},{question:"在第一张报纸出现之前是哪个国家的人最先在大字报纸上读新闻？",answer:"德国"},{question:"在第一次鸦片战争中,英军到达的最北端是:",answer:"天津白河口"},{question:"在美国北部联邦政府和南部邦联州之间进行的美国内战起始于那一年？",answer:"1861年"},{question:"在英国，资本主义生产方式最终战胜封建生产方式的标志是",answer:"工业革命完成"},{question:"在荷马史诗当中，特洛伊战争持续了：",answer:"11年"},{question:"在计算机中信息存储的最小单位是什么？",answer:"字节"},{question:"在赤壁之战前，曹操曾与孙权打了一仗，结果曹军大败，两员大将被杀，他们是谁？",answer:"焦触、张南"},{question:"在远古神话中追逐太阳的是",answer:"夸父"},{question:"在远古跳远是为了：",answer:"逃避猛兽"},{question:"在长坂坡，单枪匹马独闯曹军重围的三国名将是：",answer:"赵云"},{question:"在魏国使用国家频道说话，吴国可以看见吗？",answer:"不可以"},{question:"地球形成了多少年",answer:"45亿"},{question:"地球的重力为月球上的",answer:"6倍"},{question:"坦克除顶上的出口外，另一个出口在哪？",answer:"底部"},{question:"垂帘听政始于何时？",answer:"唐朝"},{question:"埃及的狮身人面像建于何时？",answer:"公元前2500年"},{question:"城市规划师霍华德是哪个国家的人？",answer:"德国"},{question:"基督教、伊斯兰教、犹太教都看作圣城的是",answer:"耶路撒冷"},{question:"堪称中国足球悲剧的“恐韩症”，开始于何时？",answer:"1978"},{question:"堪称当时世界之最，却加速民不聊生、王朝倾覆的宏大工程，除隋朝的大运河外，最为典型的是",answer:"秦长城"},{question:"墨鱼在水中游动时，其方向是：",answer:"倒退着游"},{question:"士多啤梨是什么水果？",answer:"草莓"},{question:"夏侯惇被何人射去一眼?",answer:"曹性"},{question:"夏侯惇被曹性射去了几支眼?",answer:"一只"},{question:"夏商周的青铜乐器不包括下列哪项？",answer:"磬"},{question:"夏天大象不停地摇动耳朵主要是为了",answer:"降低体温"},{question:"夏朝暴君夏桀宠幸的美女妹喜的妹字读音为？",answer:"mò"},{question:"夏朝的都城在哪？",answer:"河南邓州"},{question:"外科手术按手术难度分为大中小三类，肝叶切除手术属于",answer:"大手术"},{question:"多少级别以上可以收徒弟?",answer:"20"},{question:"多少级别以下才能拜师?",answer:"15"},{question:"多少级别可以创建军团?",answer:"30"},{question:"多少级别可以加入军团?",answer:"15"},{question:"多少级可以使用职业频道说话？",answer:"10"},{question:"多瑙河注入哪个海？",answer:"黑海"},{question:"大乔嫁给了?",answer:"孙策"},{question:"大历十才子是唐代宗大历年间10位诗人所代表的一个诗歌流派，下列哪位不属于大历十才子？",answer:"张羽"},{question:"大月氏王国在5世纪后半叶亡于谁之手",answer:"厳哒"},{question:"大禹的父亲是谁？",answer:"鲧"},{question:"大运河开凿于?",answer:"隋炀帝时期"},{question:"大部分人的心脏是偏向哪一边？",answer:"左"},{question:"大革命失败后，哪次起义为毛泽东亲自领导？",answer:"秋收起义"},{question:"天下三分是指天下分裂为哪几国",answer:"魏、蜀、吴"},{question:"天下第一松：九华山凤凰松位于",answer:"安徽"},{question:"天安门前人民英雄纪念碑背面的碑文是谁题写的",answer:"周恩来"},{question:"天安门城楼第一次正式向中国和世界所有人开放开始于哪一年元旦",answer:"1988"},{question:"天安门广场中心的人民英雄纪念碑建成于何时？",answer:"1958"},{question:"天怒人怨是哪个职业的技能?",answer:"豪杰"},{question:"天知、神知、我知、子知，最早是汉代人杨震说的，他说这句话的目的是：",answer:"拒绝收礼"},{question:"太宗的禁军中，北衙七营又分为七部，下列哪项不属于北衙七营之列？",answer:"左千骑"},{question:"太宗的禁军中，北衙六军又分为六部，下列哪项不属于北衙六军之列？",answer:"天威军"},{question:"太平天国定都南京时，当时将南京改名为",answer:"天京"},{question:"太平天国运动失败的标志是",answer:"天京陷落"},{question:"太极清灵术是哪个职业的技能?",answer:"仙术士"},{question:"太湖县位于我国哪个省？",answer:"安徽省"},{question:"太湖大桥（江苏吴县市）有什么称号？",answer:"中国内湖第一桥"},{question:"太真是谁出家时的道号",answer:"杨玉环"},{question:"太阳在什么时候距我们最近？",answer:"夏天"},{question:"太阳生命的终点是什么？",answer:"白矮星"},{question:"太阳直射北回归线时，应是北半球的：",answer:"夏至日"},{question:"太阳系中哪颗行星的表面温度最高?",answer:"金星"},{question:"太阳系中自转最慢的行星是",answer:"金星"},{question:"太阳系行星中在地球上看起来最明亮的是",answer:"金星"},{question:"太阳耀斑位于太阳大气的",answer:"色球层"},{question:"夫妻离异后对未成年人子女的教育谁负有责任？",answer:"离异双方都有责任"},{question:"头盔产生于",answer:"1914年，最早装备法军"},{question:"夺席谈经与谁有关：",answer:"刘秀"},{question:"契丹族起源的地区是",answer:"辽河上游"},{question:"奥林匹克会旗-五环旗的设计者是？",answer:"顾拜旦"},{question:"奥运村是哪年开始建的？",answer:"1924"},{question:"奥运火炬的起源和谁有关？",answer:"普罗米修斯"},{question:"奥黛丽·赫本没有主演过：",answer:"冬之狮"},{question:"奴隶贸易泛滥最早开始于",answer:"16世纪早期"},{question:"奸臣一直是中国历史上混乱的不安因素，北宋有臭名昭著的“六贼”，下列哪一位不属于“六贼”？",answer:"杨戬"},{question:"如何修理损坏的道具？",answer:"修复水晶和修复石都可以"},{question:"如果你加入了一个军团，将拥有：",answer:"其他答案都是"},{question:"如果你在移动中快速双击鼠标的左键，会出现什么现象？",answer:"其他答案都是"},{question:"如果你的好友不在线,你可以通过什么方式给他留言?",answer:"邮件"},{question:"如果在玩家头像上点击鼠标右键，会出现什么现象？",answer:"出现命令选单"},{question:"如果大家都不偷懒，级别差不多的人组队一起练级有什么好处？",answer:"相同时间内获得更多的经验值"},{question:"如果怪物的名字是绿色的，说明你和他的等级",answer:"你比它高"},{question:"如果我要将A键设置为其它的技能攻击，可以吗？",answer:"可以"},{question:"如果要从一个城市到另一个城市，最快的方法是？",answer:"坐马车"},{question:"姚明的身高是？",answer:"2.26"},{question:"威慑天下是哪个职业的技能?",answer:"阴阳士"},{question:'娃娃鱼因其形像娃娃，叫声又类似小儿啼哭，故而得名"娃娃鱼"。您知道"娃娃鱼"的学名是什么吗？',answer:"大鲵"},{question:"婚龄50年是：",answer:"金婚"},{question:"孔子在家里的排名：",answer:"老二"},{question:"孔子的学生中最著名的当属十二哲，下列不属于十二哲？",answer:"季孙（伯颜）"},{question:"孔明几擒几纵孟获?",answer:"七擒七纵"},{question:"孔明征南蛮时曾七擒七纵孟获，孟获的夫人叫？",answer:"祝融"},{question:"孔明是怎么死的",answer:"北伐时病死在五丈原"},{question:"孔明是指",answer:"诸葛亮"},{question:"孔明最后一次北伐时病死在哪里?",answer:"五丈原"},{question:"孔明气死吴国的军师是谁?",answer:"周瑜"},{question:"孔泰发明的现在通用的铅笔是由石墨和什么混合制成的？",answer:"粘土"},{question:"孔融因何理由被曹操杀了？",answer:"说了曹操的坏话"},{question:"孙悟空原型石磐陀是哪里人？",answer:"甘肃"},{question:"孙权称帝后，下列何者被任命丞相?",answer:"顾雍"},{question:"孙膑的老师叫什么",answer:"鬼谷子"},{question:"孟尝君招收到门下的人才称为",answer:"食客"},{question:"孟尝君的名字是",answer:"田文"},{question:"孟浩然《夜归鹿门山歌》没有下列哪句？",answer:"万里浮云阴且晴"},{question:"宁静致远是哪个职业的技能?",answer:"仙术士"},{question:"安禄山、史思明之乱是唐朝最大的一次叛乱，其历时多久：",answer:"14年多"},{question:"安禄山、史思明之乱是唐朝最大的一次叛乱，其历时多久？",answer:"14年多"},{question:"宋朝的政治机构中设有寺监，共有九寺，各专其职。请问下列哪个不属于九寺之一？",answer:"饱卿"},{question:"宋朝的政治机构中设有寺监，其中共有六监，各专其职。请问下列哪个不属于六监之一？",answer:"钦天"},{question:"宋江领导的梁山起义在历史上是有记载的，但是其手下108好汉所述非实，据记载宋江的手下只有多少位好汉？",answer:"36"},{question:"宗法等级制的核心内容是",answer:"嫡长继承制"},{question:"官渡之战中，被袁绍军围困的将领是？",answer:"曹操"},{question:"宙斯为了惩罚傲慢的维纳斯，强迫她嫁给天神中的：",answer:"火神"},{question:"定军山战役的蜀军主将是谁？",answer:"黄忠"},{question:"定军山战役黄忠是哪国的主将",answer:"蜀国"},{question:"密特朗取消死刑前，法国主要采用何种方式行刑",answer:"上断头台"},{question:"寒冰刺是哪个职业的技能?",answer:"仙术士"},{question:"对下列文学作品集描述不正确的是？",answer:"《聊斋志异》是我国第一部优秀的白话短篇小说集"},{question:"对下列音乐家的评述不正确的是",answer:"被称为“交响乐之父”的是巴赫"},{question:"对丝绸之路影响比较大的几个地方其中不包括下列哪项？",answer:"哈密"},{question:"对于下列作品的描述，哪个是错误的？",answer:"《韩非子》纵横家重要著作。反映韩非思想"},{question:"对北魏实行均田制的后果，表述不正确的是",answer:"抑制了土地兼并现象"},{question:"对联“贵有恒何必三更起五更睡，最无益只怕一日曝十日寒”的作者是",answer:"毛泽东"},{question:"导致列强瓜分中国的事件是",answer:"《马关条约》的签订"},{question:"将于2008年在我国北京举办的奥运会是第几届？",answer:"二十九"},{question:"小偷被打死后,会掉什么物品?",answer:"副职业材料和高级合成书"},{question:"小孩乘坐火车身高达到多少时必须购买小孩票？",answer:"1.1--1.4米"},{question:"小荷才露尖尖角，早有蜻蜓立上头的作者所处的朝代是",answer:"宋朝"},{question:"小说《老残游记》反映的是什么时期的社会现实",answer:"清朝末期"},{question:"少量饮酒对身体有好处，请问下列哪种酒对心血管疾病有预防作用",answer:"葡萄酒"},{question:"尧帝陵在现今中国哪个地方？",answer:"山西临汾市"},{question:"就职时最年轻的美国总统是：",answer:"西奥多·罗斯福"},{question:"屈原是春秋时代哪国人",answer:"楚国"},{question:"屈原被楚王流放的主要原因是",answer:"要求革新图强"},{question:"属于<<永州八记>>中的是哪种?",answer:"石渠记"},{question:"属于《红楼梦》中金陵十二叉的是哪位？",answer:"林黛玉"},{question:"属于《西游记》中去取经人是哪一位？",answer:"孙悟空"},{question:"属于三十六记的是哪个?",answer:"笑里藏刀"},{question:"属于世界人民的节日的是哪个？",answer:"世界节俭日"},{question:"属于中国七大古都的是哪一个？",answer:"西安"},{question:"属于中国人民的节日的是哪个？",answer:"腊八"},{question:"属于亚洲的国家是哪个？",answer:"马来西亚"},{question:"属于亡国皇帝的是哪位？",answer:"胡亥"},{question:"属于北京的特产是哪一种？",answer:"京西稻"},{question:"属于北美洲的国家是哪个？",answer:"马提尼克"},{question:"属于南美洲的国家是哪个？",answer:"智利"},{question:"属于句子结构的是哪种?",answer:"主语"},{question:"属于哺乳动物的是哪个？",answer:"蓝鲸"},{question:"属于大洋洲的国家是哪个？",answer:"汤加"},{question:"属于开国皇帝的是哪位？",answer:"刘邦"},{question:"属于我国特产的是",answer:"柿子"},{question:"属于春秋五霸的是哪位？",answer:"秦穆公"},{question:"属于最初诺贝尔奖的种类的是哪个？",answer:"文学"},{question:"属于欧洲的国家是哪个？",answer:"芬兰"},{question:"属于燕京八景的是哪个？",answer:"蓟门烟树"},{question:"属于软骨鱼类的是哪个？",answer:"鲨鱼"},{question:"属于非洲的国家是哪个？",answer:"坦桑尼亚"},{question:"山顶洞人未掌握的劳动技能是",answer:"使用和制造陶器"},{question:"岑参《走马川行奉送封大夫出师西》没有下列哪句？",answer:"变调如闻杨柳春"},{question:"岳飞是南宋名将抗金英雄，岳飞旗下精兵如林，特别是旗下著名的十八营，下列哪项不是十八营所属？",answer:"飞虎营"},{question:"崔湜《幸白鹿观应制》有下列哪一句？",answer:"鹤语记春秋"},{question:"嵇康是哪一时期的琴家",answer:"三国"},{question:"工匠传统和哲学传统合流的迹象被称为近代科学大发展的先声，我国历史上第一次出现工匠传统和哲学传统合流的",answer:"宋朝"},{question:"已知的最大恐龙是什么？",answer:"震龙"},{question:"已知的最重的恐龙是什么？",answer:"腕龙"},{question:"巴林在东半球的哪个地区？",answer:"波斯湾"},{question:"巴顿是第二次世界大战中美军最有作为的高级将领之一，他在二战中取得了惊人的战绩，请问巴顿取得的最高的军",answer:"四星"},{question:"巴黎和会的结果导致了",answer:"五四运动"},{question:"布达拉宫最初是为谁建造的?",answer:"文成公主"},{question:"师徒一起组队练级,有啥好处?",answer:"其他答案都是"},{question:"希腊神话中智慧女神是",answer:"雅典娜"},{question:"希腊神话中波赛顿是宙斯的：",answer:"兄弟"},{question:"帝喾姓什么？",answer:"姬"},{question:"帝国主义国家开始在中国大规模投资设厂是在哪次战争之后？",answer:"甲午中日战争"},{question:"常山真定人，字子龙的是以下哪位？",answer:"赵云"},{question:"平衡木'运动中用到的平衡木，有多少长？（厘米）",answer:"500"},{question:"年轮并非树木独有，人类和许多动物也有年轮，只是表现的形式不同罢了。人的年轮在：",answer:"头颅"},{question:"幻剑离火是哪个职业的技能?",answer:"阴阳士"},{question:"广东是处于哪一种气候区域？",answer:"亚热带"},{question:"广东省第二大江是什么",answer:"韩江"},{question:"广为流传的《苏三起解》是发生在哪个朝代?",answer:"明代"},{question:"广岛原子弹是哪一年爆炸的",answer:"1945"},{question:"庞统有心让东吴与刘备取胜，献计曹操，让曹军将每只船用环连上，这样曹兵如履平地，此计是",answer:"连环计"},{question:"康熙6岁继位皇帝，是因为当时的外国人南怀仁提出了什么建议？",answer:"康熙出过天花"},{question:"康熙皇帝的庙号是：",answer:"圣祖"},{question:"建安七子中文学成就最高的是谁？",answer:"王粲"},{question:"建安七子的原著都已失传，明代张溥有几部作品都是为建安七子做集，下列哪部不是张溥关于建安七子的作品？",answer:"《移豫州檄》"},{question:"建安诗人的时代是？",answer:"三国时期"},{question:"开封古称：",answer:"汴梁"},{question:"开山斧是哪个职业的技能?",answer:"豪杰"},{question:"张家口位于",answer:"河北"},{question:"张泌《寄人》有下列哪一句？",answer:"犹为离人照落花"},{question:"张飞于长坂坡吼死了哪位曹军大将？",answer:"夏侯杰"},{question:"张飞的爸爸姓什么",answer:"张"},{question:"弱冠指的是：",answer:"二十岁"},{question:"强光下，瞳孔会有什么变化？",answer:"变小"},{question:"当事人委托诉讼代理人进行诉讼时，最多可以委托多少人？",answer:"2"},{question:"当人体血液中的酒精浓度达到多少，人会失去知觉？",answer:"mx0.4%"},{question:"当代作家王小波的小说《万寿寺》内容取材于以下哪部作品？",answer:"《甘泽谣》"},{question:"当我们用100瓦的电灯照明时，经()小时它将消耗一度电。",answer:"10"},{question:"当时是谁邀请各镇诸侯会师讨伐董卓",answer:"曹操"},{question:"当时蒋干在东吴遇上庞统，并极力推荐庞统去见谁",answer:"曹操"},{question:"当曹操擒得吕布想收为义子时，刘备建了什么言使吕布被杀?",answer:"他专杀义父"},{question:"当肌肉收缩，肌肉会有什么变化？",answer:"变短"},{question:"形容美女的词中，闭月羞花算是最顶级的赞美了，那么羞花是指谁？",answer:"杨玉环"},{question:"彩票在我国发行历史悠久，那么最早的彩票是",answer:"猜科举张榜"},{question:"影片《红高粱》是由谁执导的？",answer:"张艺谋"},{question:"彼得宫始建于什么世纪：",answer:"十八"},{question:"徒弟出师后，和师傅一起组队练级有好处吗?",answer:"其他答案都是"},{question:"徒弟多少级别出师?",answer:"15"},{question:"徒弟没出师，和师傅一起组队练级，以下哪些是对的?",answer:"其他答案都是"},{question:"德兰大海战是哪两国交战？",answer:"法英"},{question:"德国入侵波兰是在哪一年：",answer:"1934年"},{question:"德国在二战中，主要依靠狼群战术，请问德军在二战中群狼指什么？",answer:"潜水艇"},{question:"德国心理学家冯特于哪一年建立了世界上第一个心理实验室？",answer:"1879"},{question:"德国的宇航，飞机制造，微电子中心在哪？",answer:"慕尼黑"},{question:"德国首相俾斯麦推行反社会主义“非常法”的主要目的是",answer:"巩固和加强刚刚统一的德意志帝国"},{question:"心脏中哪个壁最厚？",answer:"左心室"},{question:"快速点选身边怪物的快捷键是什么?",answer:"Tab"},{question:"快速点选身边玩家角色的快捷键是什么?",answer:"~"},{question:"忽必烈是谁的儿子？",answer:"拖雷"},{question:"怎么和另一个玩家私聊？",answer:"其他答案都是"},{question:"怎么坐马车呀？",answer:"找城市里的驿站马夫和他对话"},{question:"怎样和NPC对话？",answer:"其他答案都是"},{question:"怎样将自己多余的物品道具卖出去赚钱？",answer:"其他答案都可以"},{question:"怒海狂涛是哪个职业的技能?",answer:"豪杰"},{question:"恐龙世界的短跑冠军是什么龙？",answer:"鸵鸟龙"},{question:"恺撒大帝被谁刺死的",answer:"布鲁图"},{question:"悉尼大学始建于：",answer:"1850"},{question:"您知道下面哪一项不在被称为当时思想文化领域里的三大变革里吗？",answer:"基因学说的诞生"},{question:"您知道中国是从什么时候起开始在农业生产种使用铁器的吗？",answer:"春秋时期"},{question:"惊涛穿云术是哪个职业的技能?",answer:"仙术士"},{question:"惊雷裂地是哪个职业的技能?",answer:"豪杰"},{question:"惊鸿幻剑是哪个职业的技能?",answer:"剑侍"},{question:"想修炼自己,应该找哪个NPC?",answer:"奋威中郎将"},{question:"想减少自己受到的物理攻击伤害,应该修炼哪一项?",answer:"禁卫"},{question:"想减少自己受到的魔法攻击伤害,应该修炼哪一项?",answer:"仙法"},{question:"想在游戏中摆个摊位,应该通过哪个界面操作?",answer:"物品界面"},{question:"想快速到达另外的城池,应该找哪个NPC?",answer:"马车夫"},{question:"想提高自己的物理攻击伤害,应该修炼哪一项?",answer:"奋迅"},{question:"想提高自己的魔法攻击伤害,应该修炼哪一项?",answer:"妖法"},{question:"想要一直获得金钱任务,可以找哪个NPC接受任务?",answer:"本国书丞"},{question:"想设置自己的个性签名,应该使用哪个快捷键呼叫状态界面?",answer:"F1"},{question:"意大利在地图上像",answer:"靴子"},{question:"意大利文艺复兴中被尊为“画圣”的画家是",answer:"拉斐尔"},{question:"慈禧发动政变是在哪一个帝王期间：",answer:"同治"},{question:"慑魂一式是哪个职业的技能?",answer:"剑侍"},{question:"戊戌变法中创办的中国近代最早的一所体制完备的高等学府是",answer:"京师大学堂"},{question:"戊戌变法发生在清朝哪个皇帝时期：",answer:"光绪"},{question:"成为好友后有什么好处？",answer:"其他答案都是"},{question:"成为我国上世纪30年代文化革命的主将的是：",answer:"鲁迅"},{question:"成人共有骨多少块？",answer:"206"},{question:"成人呼吸窘迫综合征的英文简称为：",answer:"ARDS"},{question:"成吉思汗病逝于哪一年：",answer:"1227年"},{question:"成吉思汗的长子是谁？",answer:"术赤"},{question:"成年人的鼻子一天要处理大约多少立方米的空气",answer:"14立方米"},{question:'成语"万事俱备, 只欠东风"是根据<三国演义>的什么战役中"周瑜定计火攻曹操, 一切都准备好了, 只缺能把',answer:"赤壁之战"},{question:"成语“中流击楫”与下列哪一事件有关？",answer:"祖逖北伐"},{question:"成语“赤膊上阵”是指那位将领的事迹？",answer:"许褚"},{question:"成语“鸡鸣狗盗”跟下面的哪个人物有关：",answer:"孟尝君"},{question:"成都的市花?",answer:"芙蓉花"},{question:"我们常吃的辣椒属于什么类蔬菜",answer:"茄果类"},{question:"我们平常吃的海带属于",answer:"褐藻"},{question:"我们把古埃及法老坟墓叫做“金字塔”的原因是",answer:"它的轮廓有点象汉字“金”字"},{question:"我们日常使用的硬币的分币石铝和什么的合金？",answer:"镁"},{question:"我们熟悉的母亲节是源自与哪个国家？",answer:"英国"},{question:"我们现在用的“星期”由哪种人最先使用的？",answer:"古罗马人"},{question:"我国《宪法》规定：中华人民共和国在()情况下，有从国家和社会获得物质帮助的权利。",answer:"年老、疾病或丧失劳动能力"},{question:"我国中央最早在什麽时候对台湾进行管辖",answer:"元"},{question:"我国于哪一年收回香港主权？",answer:"1997年"},{question:"我国从什么时候起就有了历法",answer:"夏"},{question:"我国以煤为燃料冶铁始于",answer:"西汉"},{question:"我国入世共谈了几年？",answer:"15"},{question:"我国兴办经济特区完成立法程序是在什么时间？",answer:"1980.8"},{question:"我国农村开始推行家庭联产承包责任制是",answer:"1980年"},{question:"我国历史上最高寿的皇帝：",answer:"爱新觉罗·弘历"},{question:"我国历史上的六圣不包括下列谁？",answer:"书圣：东晋王献之"},{question:"我国古代军事家孙膑是在“膑刑”后被称为孙膑的，“膑”是指：",answer:"膝盖骨"},{question:"我国古代数学家祖冲之的字是什么？",answer:"文远"},{question:"我国古代有一种井田制，问它是哪个朝代出现的。",answer:"西周"},{question:"我国古代海运、陆路对外贸易最活跃的时期是",answer:"元朝"},{question:"我国古代画家吴道子生活在哪个朝代？",answer:"唐"},{question:"我国古代的“寅”时指现代的什么时间？",answer:"3-5点"},{question:"我国古代的四大发明中最早出现的是：",answer:"造纸术"},{question:"我国古代称山之北，水之南为什么？",answer:"阴"},{question:"我国古代认为世界是物质构成，不依赖人的主观意识而独立存在的思想家是：",answer:"王夫之"},{question:"我国古典文学名著<三国演义>中塑造了一个过五关斩六将,千里走单骑的英雄形象,这个英雄是谁",answer:"关羽"},{question:"我国名城昆明被人们称什么？",answer:"春城"},{question:"我国哪个城市以冰雕著名？",answer:"哈尔滨"},{question:"我国哪个城市的雨花石最有名",answer:"南京"},{question:"我国唐代学者一行和尚，他制订了什么历法？",answer:"大衍历"},{question:"我国商标权的保护期为",answer:"10年"},{question:"我国四大藏书阁之一的文朔阁坐落于",answer:"沈阳"},{question:"我国实行外汇管制，出口产品报关后多少天必须进行核销？",answer:"180"},{question:"我国宪法的监督权属于：",answer:"全国人大常委会"},{question:"我国对彗星的观测和研究有最早最完整的记录。当时是哪一个朝代",answer:"春秋"},{question:"我国少数民族中人口最多的是（）",answer:"壮族"},{question:"我国建成的第一座长江大桥是：",answer:"武汉长江大桥"},{question:"我国开始进入社会主义初级阶段的标志是",answer:"社会主义改造的完成"},{question:"我国提供的邮政编码查询特服电话号码是？",answer:"184"},{question:"我国政府全面禁止使用氟里昂（CFC-113）和三氯乙烷（TCA）的时间是？",answer:"2006.1.1"},{question:"我国文学史上第一个大量写田园诗的诗人是：",answer:"陶渊明"},{question:"我国是世界上具有悠久历史的国家，我国古代劳动人民开始炼铁的历史时期是",answer:"春秋时期"},{question:"我国是在第几年研制出第一台计算机的？",answer:"1958"},{question:"我国最早人工取火的是：",answer:"山顶洞人"},{question:"我国最早出现纸币是在：",answer:"宋代"},{question:"我国最早创办海军学校的人是",answer:"左宗堂"},{question:"我国最早发行国际信用卡的银行是：",answer:"中国银行"},{question:"我国最早的军事院校是哪个朝代：",answer:"前秦"},{question:"我国最早的银币（银布币）出现于什么时候？",answer:"春秋"},{question:"我国最早迎接新年的省份是",answer:"黑龙江"},{question:"我国有文字可考的信史是从商朝开始的，是因为",answer:"甲骨文记载的内容有些与《史记》相印证"},{question:"我国有文字可考的历史是从何时开始的？",answer:"商朝"},{question:"我国有确切纪年开始是哪年?",answer:"841年"},{question:"我国末代皇帝的年号是",answer:"宣统"},{question:"我国棉花的种植从广东、福建扩展到淮河流域是在",answer:"南宋"},{question:"我国测量海拔是以什么海的平均海拔平面作为零点",answer:"黄海"},{question:"我国海拔最低的地方是：",answer:"土鲁番盆地"},{question:"我国牛耕的使用最初是在什么时候？",answer:"东周"},{question:"我国现行宪法规定，全国人大常委会的组成人员中，应当有适当名额的为：",answer:"少数民族代表"},{question:"我国现行宪法颁布于哪一年？",answer:"1984年"},{question:"我国瓷器的发明大约有多少年的历史了？",answer:"3000"},{question:"我国的“天府之国”指的是哪里？",answer:"四川盆地"},{question:"我国的京杭大运河全长多少？",answer:"1794"},{question:"我国的地势是什么样的？",answer:"西高东低"},{question:"我国的奴隶社会开始于",answer:"夏"},{question:"我国的教师节是：",answer:"9月10日"},{question:"我国的晶体管计算机是哪一年研制成功的？",answer:"1965年"},{question:"我国的最高国家权利机关是：",answer:"全国人民代表大会"},{question:"我国的科举制度始于那个朝代？",answer:"隋朝"},{question:"我国目前发现的最早的首饰是距今多少年前的原始项链？",answer:"18000"},{question:"我国第一个五年计划从哪一年开始？",answer:"1953"},{question:"我国第一个发现和研究甲骨文的学者是谁？",answer:"清代王懿荣"},{question:"我国第一枚普通邮票----大龙票何时发行的?",answer:"1878年"},{question:"我国第一颗人造卫星发射成功是什么时候？",answer:"1970年"},{question:"我国第一颗人造地球卫星叫",answer:"东方红1号"},{question:"我国自行设计和修建的第一条铁路是哪条铁路？",answer:"京张"},{question:"我国著名女画家张玉良出生于以下哪个地方:",answer:"扬州"},{question:"我国著名画家顾恺之是哪个朝代的人物？",answer:"魏晋"},{question:"我国著名的赵州桥建于哪个朝代？",answer:"隋"},{question:"我国行政领导体现哪年前，一直是委员制。",answer:"1982"},{question:"我国西晋的第一代皇帝名叫：",answer:"司马炎"},{question:"我国足球甲级联赛始于哪一年?",answer:"1957年"},{question:"我国铁路第一次提速是在哪一年？",answer:"1997年4月1日"},{question:"我国风能总储量约为16亿千瓦，其中可利用为十分之一。我国的风库在",answer:"吐鲁番"},{question:"战国七雄不包括下列哪个国家？",answer:"陈"},{question:"战国七雄中，在春秋时期称过霸的是（）",answer:"齐、楚、秦"},{question:"战国古文字，内容比较丰富的是哪种文字？",answer:"金文"},{question:'战国时提出"民为贵","君为轻"的思想家是',answer:"孟子"},{question:"战国时期名将辈出，下列哪一位不是战国名将？",answer:"恬蒙"},{question:"战国时期曾经下令坑杀（即活埋）四十万赵军的秦国将领是谁？",answer:"白起"},{question:"战国时期还没有出现的手工行业是",answer:"制瓷业"},{question:"战国时，“纸上谈兵”招致兵败的赵国将领是：",answer:"赵括"},{question:"战国是我国历史上很重要的一段历史，七个诸侯国混战一时。下列那个国家不是战国七雄之一？",answer:"陈"},{question:"战斗机飞行员在紧急情况下如何迅速脱离飞机？",answer:"依靠火箭弹射出座舱"},{question:"戚继光驱逐的是哪国侵略者：",answer:"日本"},{question:"房地产投资不具有的特点是",answer:"流动性强"},{question:"所谓“吃茶”是将哪几种材料熬成粥？",answer:"枸杞"},{question:'所谓的"33211"环境工程中的一海是指什么海',answer:"渤海"},{question:"所谓红木家具主要是指用紫檀木、酸枝木、乌木，瘿木、花梨木、鸡翅木制成的家具，除此之外的木材制作家具都",answer:"紫檀木"},{question:"扁鹊原名是？",answer:"秦越人"},{question:"扑克牌上的Q代表什么:",answer:"皇后"},{question:"打开地图的快捷键是什么?",answer:"M"},{question:"扬州作为名城，最多时包括目前华东地区几省：",answer:"5"},{question:"扬州八怪一共有几个人？",answer:"很多"},{question:"扬州八怪值得是趣味相投画风相似的一批人，下列哪位不属于扬州八怪之一？",answer:"海岩"},{question:"扬琴在何时传入我国？",answer:"明末"},{question:"找哪个NPC可以创建军团?",answer:"军团管理专员"},{question:"找哪些NPC可以接新任务?",answer:"头上有黄色的感叹号在闪烁的"},{question:"把某些道具卖给行脚商人，得到报酬会比你卖给其它NPC多很多，对吗？",answer:"骗人的"},{question:"把电阻值不相同的两段电热丝串联起来通电时间相等流过它的电量和产生的热量的关系是",answer:"电量相等、热量不等"},{question:"投笔从戎的是",answer:"班超"},{question:"抗战开始后中国西北主力红军改编为八路军，任总指挥是：",answer:"朱德"},{question:"抗战时期，“八路军”下辖3个师和一个直属队，刘伯承在：",answer:"129师"},{question:"抗日战争中，第一位为抗击日寇牺牲的中国高级将领是：",answer:"佟麟阁"},{question:"抗日战争时期，在冀中平原上，坚持敌后抗战的人民群众发明了：",answer:"地道战"},{question:"抗日战争时期，广大的爱国华侨对祖国的抗战作出了卓越的贡献。请问南洋华侨的领袖是谁？",answer:"陈嘉庚"},{question:"抗日战争时期，新四军的第一任军长是：",answer:"叶挺"},{question:"抗日战争期间，指挥三次长沙会战的中国国民党将领是",answer:"薛岳"},{question:"抗日战争期间，狼牙山五壮士的故事家喻户晓，请问跳崖的勇士中除副班长葛振林外谁也幸运脱险？",answer:"宋学义"},{question:"抗日战争相持阶段，在华北进行的一场大规模对日作战是",answer:"百团大战"},{question:"抗日歌曲“大刀进行曲”是哪位作曲家的作品？",answer:"麦新"},{question:"护国运动中，最先独立的省份是：",answer:"云南"},{question:"报考机动车驾驶员要求每只眼睛的视力不低于：",answer:"mx0.7"},{question:"报考机动车驾驶职照规定的视力规定在多少以上",answer:"mx0.7"},{question:"担任中途岛海战日方航空母舰主攻舰队指挥的是",answer:"南云忠一"},{question:"担担面是哪里的特色食品？",answer:"四川"},{question:"拉丁美洲第一个独立的国家是",answer:"海地"},{question:"拾取落在地上的道具的快捷键是什么?",answer:"C"},{question:"拿破仑兵败滑铁卢，从而导致他政治生命的结束。滑铁卢位于哪个国家？",answer:"比利时"},{question:"拿破仑是哪个国家的人？",answer:"法国"},{question:"指出谁不属于三皇五帝。",answer:"大禹"},{question:"指南针最早的形式叫什么？",answer:"司南"},{question:"指甲苍白最多见于什么病？",answer:"贫血症"},{question:"按《产品质量法》规定销售者的下列行为可以减轻或从轻处罚的是哪种情况",answer:"有证据证明其不知道该产品为禁止销售的产品，并如实说明其进货渠道"},{question:"按发音方法分类声母可分为哪种？",answer:"塞音"},{question:"按发音部位给声母分类，哪个是正确的？",answer:"双唇音"},{question:"按当前国际通用标准，纸张白度不应高于多少度？",answer:"84"},{question:"按我国现行的邮资标准，寄一封外埠平信的邮资是：",answer:"80分"},{question:"按时间顺序排列以下历史事件：1中华苏维埃第一次全国代表大会；2伪满洲国建立；3国民党第四次围剿被打破",answer:"1234"},{question:"按照公司法规定，股份有限公司发起人的股份在公司设立几年内不能转让？",answer:"3年"},{question:"按照蒙古的风俗，杀羊必须是：",answer:"剖开羊肚"},{question:"按装机容量百分比计算，下列地区中可开发水能资源比重最大的是：",answer:"西南地区"},{question:"挑衅四方是哪个职业的技能?",answer:"豪杰"},{question:"挥泪斩马SU，SU字怎么写",answer:"谡"},{question:"挪威货币是：",answer:"克朗"},{question:"据史料记载孙悟空的原型为一猴形人，其真名叫做什么？",answer:"石磐陀"},{question:"据考古研究发现，目前世界上最早的瓷器出现在哪里？",answer:"石家庄"},{question:"探戈起源于：",answer:"非洲"},{question:"提出大陆漂移说的人是谁？",answer:"魏格纳"},{question:"揠苗助长的故事是谁讲的？",answer:"孟子"},{question:"揭开全国抗日战争序幕的标志是",answer:"“七·七”事变"},{question:"摆摊的人可以：",answer:"出去打怪"},{question:"摆摊的摊位有多少格？",answer:"其他答案都是"},{question:"摩罗氏苹果疗法是哪国人发明的：",answer:"德国"},{question:"撇刀敬礼时，刀刃像哪一边",answer:"左边"},{question:"撑竿跳高所用“竿”的质地是：",answer:"玻璃纤维"},{question:"撒尿小孩铜像坐落于：",answer:"布鲁塞尔"},{question:"政府机构和国家权利机构的关系是",answer:"从属关系"},{question:"敦煌藏经洞是道士王圆箓发现的，藏有从晋到宋600多年间的近6万件珍贵文物。它发现于",answer:"1900年5月26日"},{question:"数字“一”与下列哪个选项表示的意思一样？",answer:"1"},{question:"数字“七”与下列哪个选项表示的意思一样？",answer:"7"},{question:"数字“三”与下列哪个选项表示的意思一样？",answer:"3"},{question:"数字“九”与下列哪个选项表示的意思一样？",answer:"9"},{question:"数字“二”与下列哪个选项表示的意思一样？",answer:"2"},{question:"数字“五”与下列哪个选项表示的意思一样？",answer:"5"},{question:"数字“八”与下列哪个选项表示的意思一样？",answer:"8"},{question:"数字“六”与下列哪个选项表示的意思一样？",answer:"6"},{question:"数字“四”与下列哪个选项表示的意思一样？",answer:"4"},{question:"文学巨匠巴尔扎克是哪国人？",answer:"法国"},{question:"文常有“弹指一挥间”一说，那么关于时间的错误说话是？",answer:"二十须臾为一整天"},{question:"文章西汉两司马，经世南北一卧龙是指()。",answer:"左宗棠"},{question:"文艺复兴时期主要的社会思潮是",answer:"人文主义"},{question:"文艺复兴运动发源于",answer:"意大利"},{question:"新中国十大元帅中，没有参加长征的是",answer:"陈毅"},{question:"新中国外交政策成熟的标志是",answer:"和平共处五项原则的提出"},{question:"新中国成立后，我国共发行过几套人民币？",answer:"5套"},{question:"新中国成立后，我国共颁布了几部宪法：",answer:"4"},{question:"新中国成立后，我国首次发行纪念钞是在哪年？",answer:"1999年"},{question:"新中国第一任交通部部长是谁？",answer:"章伯钧"},{question:"新中国第一任文化部部长是谁？",answer:"沈雁冰"},{question:"新中国第一次以世界五大国的地位出席的国际会议是",answer:"莫斯科会议"},{question:"新加坡的得名与一动物有关，这个动物是",answer:"狮子"},{question:"新慕尼黑机场启用时间是：",answer:"1992.5.17"},{question:"新手城旁边的小BOSS多长时间刷新一次？",answer:"20分钟"},{question:"新手指导证书在新手城哪里兑换物品？",answer:"师缘隐士"},{question:"新手指导证有什么用？",answer:"杀神和如意都能换到"},{question:"新文化运动中，在教育思想上采取“兼容并包”方针的北大校长是",answer:"蔡元培"},{question:"新春燃放爆竹的风俗始于",answer:"汉代"},{question:"新民主主义社会属于以下哪一社会范畴？",answer:"民主主义范畴"},{question:"新版20元的人民币是哪一年发行的？",answer:"2000"},{question:"新生代距今有多少年？",answer:"3000万年"},{question:"新西兰卫生部时常告诫游人小心“黑寡妇”的伤害，“黑寡妇”是指：",answer:"一种蜘蛛"},{question:"方田均税是改革土地征税制度的一项重要措施，它最早出现于",answer:"北宋"},{question:"旁边人太多了，我想屏蔽他们，怎么办？",answer:"按F11"},{question:"无产阶级推翻资产阶级统治，建立无产阶级专政的第一次尝试是",answer:"巴黎公社革命"},{question:"无期徒刑的假释考验期限为？",answer:"10年"},{question:"既属于哺乳动物，又要靠生蛋来繁殖后代的是：",answer:"鸭嘴兽"},{question:"日伪时期亚洲最大的电厂在哪里？",answer:"中国"},{question:"日本侵略者企图在中国建立第二个伪满洲国的地区是",answer:"华中"},{question:"日本历史上的平城京指的是现在的：",answer:"奈良"},{question:"日本发明在米饭中放红梅的是",answer:"上杉谦信"},{question:"日本是哪年偷袭美国的珍珠港",answer:"1941"},{question:"日本武装倒幕的主要力量是",answer:"中下级武士"},{question:"日本的茶道起源于？",answer:"中国"},{question:"日食一定发生在哪一天",answer:"农历初一"},{question:"早期人类家庭的进步，与哪种事业关系最密切？",answer:"造房"},{question:"昆曲起源于",answer:"江苏"},{question:"明代以后廷试的前三名依次是？",answer:"状元榜眼探花"},{question:"明代徐霞客完成《徐霞客游记》大约用了多少年？",answer:"30"},{question:"明代的东厂和西厂是：",answer:"特务机关"},{question:"明代科举制度考试等级不包括：",answer:"院试"},{question:"明初加强专制统治的措施中，与后来宦官专权有直接关系的是",answer:"设立厂卫特务机构"},{question:"明孝陵位于哪个地方：",answer:"南京"},{question:"明月几时有，把酒问青天。是谁的词？",answer:"苏轼"},{question:"明朝北京城由里到外的顺序是",answer:"宫城、皇城、京城"},{question:"明朝在西藏分封的三大法王和五大地方之王，统称西藏八王，下列哪位不属于八王之列？",answer:"金轮法王"},{question:"明朝开国皇帝朱元璋曾做过什么？",answer:"和尚"},{question:"明朝晚期的东林党是以江南士大夫为主的政治集团，其中最著名的当属“东林八才子”，下列哪位属于东林八才子",answer:"邹元标"},{question:"明朝最初定都于:",answer:"南京"},{question:"明朝最后一个皇帝崇祯皇帝的号是什么？",answer:"明思宗"},{question:"明朝最早的国都应天是今天的：",answer:"南京"},{question:"明朝的国姓是？",answer:"朱"},{question:"明朝第十七任皇帝朱由检在位18年，实际当权17年的宦官是哪一个？",answer:"曹化淳"},{question:"明朝郑和一共下了几次西洋",answer:"7"},{question:"明清两代科举考试的最高级别“殿试”的第一名叫状元,第二名叫：",answer:"榜眼"},{question:"明清时期称镌刻约束学生员条规的碑石为卧碑，它一般树于明伦堂的：",answer:"左边"},{question:"星星一闪一闪的原因跟下列哪个原因有关？",answer:"大气密度改变"},{question:"星条旗是哪国国旗：",answer:"美国"},{question:"星火坠是哪个职业的技能?",answer:"阴阳士"},{question:"春秋战国时期的四大死士不包括哪一个",answer:"盗拓"},{question:"春秋时期同晋国争霸中原的诸侯国是？",answer:"楚"},{question:"春秋时期，最早的封建地主是哪些人转化而来的?",answer:"奴隶主贵族"},{question:"春秋时的齐国和鲁国，在现在的哪个省？",answer:"山东"},{question:"春节是中国最重要的传统节日，在农历新年这几天中国人都会有一些忌讳，下列哪项不是中国人过年的忌讳？",answer:"请人吃饭"},{question:"春风拂体是哪个职业的技能?",answer:"仙术士"},{question:"是谁向刘备的推荐了诸葛亮",answer:"徐庶"},{question:"是谁向曹操报告孙策袭取许都之心，后被孙策所杀?",answer:"许贡"},{question:"是谁在1926年7月22日为处理英国退还部分庚子赔款而奔波？",answer:"胡适"},{question:"是谁替刘备说降了马超?",answer:"李恢"},{question:"普鲁士在19世纪六七十年代的统一战争中先后和哪几个国家发生战争？",answer:"丹麦奥地利法国"},{question:"景德镇瓷窑始烧于：",answer:"南朝"},{question:"智利球星萨拉斯出生在哪一年？",answer:"1974"},{question:"智者千虑，必有一失语出",answer:"《晏子春秋》"},{question:"智谋术是哪个职业的技能?",answer:"仙术士"},{question:"暗喻常用的比喻词，是哪个？",answer:"是"},{question:"暗炎凋残星是哪个职业的技能?",answer:"阴阳士"},{question:"曹仁布的“八门金锁阵”被谁破了？",answer:"徐庶"},{question:'曹操为了选拔更多的人才,打破了依据封建德行和门弟高低任用官吏的标准,提出了"唯才是举"的用人方针,于',answer:"《求贤令》"},{question:"曹操兴兵讨伐张绣，久攻南阳城不下。于是曹操命士兵做好继续攻城准备，自己却假装从西北角入城。这一切贾诩",answer:"声东击西计"},{question:"曹操和谁许昌狩猎时，用他曾用的弓射杀了一只鹿，这人是",answer:"献帝"},{question:"曹操因人进献一吉祥物，劳师动众的搭建了一座巨台，其名为?",answer:"铜雀台"},{question:"曹操打败张绣后，矛头指向徐州吕布，如果正面与吕布交手即使取胜也会损失惨重。这时早已投降曹操的陈登成功",answer:"调虎离山"},{question:"曹操抓了徐庶的哪个亲人要挟归依？",answer:"母亲"},{question:"曹操据兖州组什么兵?",answer:"青州兵"},{question:"曹操曾经命谁出兵截击袁术?",answer:"刘备"},{question:"曹操曾经封谁为汉寿亭候?",answer:"关羽"},{question:"曹操死后由何人继承?",answer:"曹丕"},{question:"曹操煮酒论英雄时指的英雄是谁?",answer:"刘备"},{question:"曹操的父亲名字是?",answer:"曹嵩"},{question:"曹操缴榜文以擒董卓，十八路诸侯来会盟，谁为盟主？",answer:"袁绍"},{question:"曹操谓曰「将军在匆忙之中，能整兵坚垒，任谤任劳，使之反败为胜虽古之名将，何以加兹者!」为何人?",answer:"于禁"},{question:"曹雪芹是哪朝的人？",answer:"清"},{question:"曾与张飞，许褚大战而不分胜负的西凉猛将是?",answer:"马超"},{question:"曾在家门帖上画不买给官家的画家是：",answer:"齐白石"},{question:"曾经和关羽，张飞兄弟两人打的不分上下的第一武将为?",answer:"吕布"},{question:"曾经替袁绍起草檄文,骂了曹操的祖宗三代.袁绍失败后归降曹操的是",answer:"陈琳"},{question:"曾经获得诺贝尔文学奖的是哪位？",answer:"海明威"},{question:"曾经连续两次举办世界杯的国家是？",answer:"墨西哥"},{question:"曾被宋朝统治者封为“昌黎伯”的是：",answer:"韩愈"},{question:"最冷月均温在15℃以上的属于哪种气候？",answer:"热带雨林气候"},{question:"最初作为诺贝尔奖金基金的诺贝尔遗产有多少钱？",answer:"200万英镑"},{question:"最初成立国际足联的国家不包括下列哪个国家？",answer:"苏联"},{question:"最初的风筝是用来做什么的：",answer:"军事目的"},{question:"最古老的医院是设在：",answer:"教堂里"},{question:"最后统一三国的人是谁？",answer:"司马炎"},{question:"最多功用的器官是什么？",answer:"肝"},{question:"最大的木结构大殿建于",answer:"明"},{question:"最早侵占中国领土的西方殖民者是（）",answer:"葡萄牙"},{question:"最早的家用电冰箱产于哪个国家？",answer:"美国"},{question:"最早的春联是",answer:"刻在木上"},{question:"最早的楔形文字使用者是：",answer:"苏美尔人"},{question:"最早的温度计里面用的是哪种溶液？",answer:"水"},{question:"最早的血压计是用于测量哪种动物的",answer:"马"},{question:"最早的血压计用于测量谁的血压？",answer:"马"},{question:"最早的风筝用于战争是在哪个朝代？",answer:"楚汉争霸时期"},{question:"最早确立十恶罪名的封建法典是",answer:"《开皇律》"},{question:"最早芭蕾舞出现于：",answer:"宫廷"},{question:"最有可能掉中级工匠书的怪物是？",answer:"江陵附近的小偷"},{question:"最有可能掉中级镶工书的怪物是？",answer:"江陵附近的小偷"},{question:"最长的国歌“自由颂”是哪个国家的国歌？",answer:"希腊"},{question:"最长的海峡",answer:"莫桑比克海峡"},{question:"有一种角象鹿、头象马、身象驴、蹄象牛的动物俗称“四不像”它的学名叫什么？",answer:"麋鹿"},{question:'有些人的头上顶着一个"中华食神"的称号,怎么来的呀?',answer:"他经常生产补蓝/红的药"},{question:'有些人的头上顶着一个"制器大师"的称号,怎么来的呀?',answer:"镶嵌做多了"},{question:'有些人的头上顶着一个"灌水先锋"的称号,怎么来的呀?',answer:"经常在国家频道说话"},{question:'有些人的头上顶着一个"铸造大师"的称号,怎么来的呀?',answer:"工匠做多了"},{question:"有的鸟长大后会找食物喂母亲，被称为“反哺”。下列哪种鸟会“反哺”？",answer:"乌鸦"},{question:"有记录的世界上飞翔距离最远的是什么鸟？",answer:"北极燕鸥"},{question:"有迁徙习性的候鸟一般：",answer:"越重越能飞"},{question:"木筏发源于",answer:"6000年前"},{question:"本欲夺去关羽的赤兔马，但在知道是关羽后即归顺的是?",answer:"裴元绍"},{question:"朱允文丧父时",answer:"十九岁"},{question:"朱允文作于黄果树瀑布的红崖天书第四句第四字是",answer:"门"},{question:"朱允文是他爹的",answer:"次子"},{question:"朱允文登基于公元几年？",answer:"1399"},{question:"朱允文的庙号是？",answer:"惠帝"},{question:"朱允文的所谓的尸体被朱棣晾了几天之后埋的？",answer:"九天"},{question:"朱允文的父亲是？",answer:"朱标"},{question:"朱允文的都城时称",answer:"应天府"},{question:"杀了董卓的凶手是谁?",answer:"吕布"},{question:"李、王、张三个姓氏占总人口的百分之多少？",answer:"22.40%"},{question:"李商隐《无题二首之二》没有下列哪句？",answer:"月斜楼上五更钟"},{question:"李大钊被张作霖杀害是在",answer:"1927年"},{question:"李煜《题金楼子后》有下列哪句？",answer:"不于祖龙留面目"},{question:"李煜词中最感人的作品是",answer:"写亡国剧痛的词"},{question:"李白《下江陵》有下列哪一句？",answer:"两岸猿声啼不住"},{question:"李白《渡荆门送别》没有下列哪一句？",answer:"海日生残夜"},{question:"李白在《上安州裴长史书》中“见张人相如大夸云梦之事，云有七泽，遂来观焉。”把谁称为自己的同乡？",answer:"司马相如"},{question:"李白的《春思》没有下列哪一句？",answer:"落叶满空山"},{question:"李白的诗句“疑是银河落九天”描绘的是中国哪座名山的瀑布。",answer:"庐山"},{question:"李白诗作《送孟浩然之广陵》中的广陵指的是：",answer:"扬州"},{question:"李百药《奉和正日临朝应诏》没有下列哪一句？",answer:"高宴齿簪缨"},{question:"李百药《登叶县故城谒沈诸梁庙》没有下列哪一句？",answer:"吴山高渐出"},{question:"李自成建立的大顺政权控制的南部地区最远到达",answer:"淮河以北"},{question:"李颀《听董大弹胡笳声兼寄语弄房给事》没有下列哪一句？",answer:"青山朝别暮还见"},{question:"杜审言《旅寓安南》有下列哪句？",answer:"轻霜下震雷"},{question:'杜牧<赤壁>诗中"东风不与周郎便, 铜雀春深锁二乔"的句子写的是什么战役',answer:"赤壁之战"},{question:"杜牧<赤壁>诗中东风不与周郎便,铜雀春深锁二乔的句子写的是什么战役;.",answer:"赤壁之战"},{question:"杜甫《咏怀古迹五首之二》没有下列哪一句？",answer:"三峡楼台淹日月"},{question:"杜甫《奉济驿重送严公四韵》没有下列哪一句？",answer:"偶然值林叟"},{question:"杜甫《江南逢李龟年》有下列哪句？",answer:"落花时节又逢君"},{question:"杜甫《饮中八仙歌》中将八位诗人称为“八仙”，下列哪位不是“八仙”之一？",answer:"韩愈"},{question:"杜甫下列哪部作品属于七言乐府？",answer:"丽人行"},{question:"杜甫漂泊在湖南湖北境内时，作了很多失意的作品，下列哪部不是这一期间的作品？",answer:"《石壕吏》"},{question:"条件反射学说的创立者是谁？",answer:"巴甫洛夫"},{question:"杨修为何把曹操的一盒酥与众将士分吃了",answer:"因为他认为曹操示意“一人一口酥”"},{question:"杨雄是西汉著名的赋家，下列哪部作品不是杨雄的代表作？",answer:"《答客难》"},{question:"杰出女词人李清照生活在哪个时期？",answer:"两宋之交"},{question:"林则徐在广东哪处销毁鸦片？",answer:"虎门"},{question:"林徽因和梁启超是什么关系？",answer:"公媳"},{question:"枣宜会战中，为抗日而牺牲的第33集团军总司令是",answer:"张自忠"},{question:"查询各职业主等级排行榜,你需要找哪位NPC?",answer:"四方巡查使"},{question:"柳宗元《捕蛇者说》中“以俟夫观人风者得焉”一句中的“人风”实为“民风”，这是为了避谁的讳而改称的？",answer:"唐太宗"},{question:"柳宗元的《古东门行》没有下列哪句？",answer:"伫俟明年桂"},{question:"柳宗元的《晨诣超师院读禅经》没有下列哪一句？",answer:"风泉满清听"},{question:"标志18世纪末法国资产阶级革命结束的事件是",answer:"热月政变"},{question:"标志北宋灭亡的历史事件是",answer:"靖康之变"},{question:"标志北宋诗文运动的最高成就的作家是",answer:"苏轼"},{question:"标题修辞手法，有哪个？",answer:"比喻"},{question:"根据公司法，有限公司的股东最高人数为：",answer:"50人"},{question:"根据我国《环保法》的规定，向应缴单位征得的超标准排污费，应当用于：",answer:"防治污染"},{question:"根据我国宪法规定，下列选项中哪一种情况不是公民获得物质帮助权的条件?",answer:"公民在遭受自然灾害"},{question:"根椐1931年毛泽东确定的土地改革路线分析，当时农村革命的敌人是",answer:"地主"},{question:"格律词派是以谁为代表？",answer:"姜夔"},{question:"桂林位于我国的哪个省？",answer:"广西"},{question:"桃园三结义在谁的家里进行的",answer:"张飞"},{question:"梁启超和梁思成是什么关系？",answer:"父子"},{question:"棒棰”可用来婉指：",answer:"人参"},{question:"棒球的基本防守技术不包括下列哪项？",answer:"跑垒"},{question:"楔形文字是古代哪一地区的文字？",answer:"古巴比伦"},{question:"横剑击是哪个职业的技能?",answer:"剑侍"},{question:"欧元于何时正式诞生",answer:"1999年1月1日"},{question:"欧冶子和干将都是古代的名铸剑师，传说中有一把剑为两大铸剑师联手所铸，请问这把剑叫什么？",answer:"龙渊"},{question:"欧洲中世纪什么样的人不能佩带钻石",answer:"商人"},{question:"欧洲中世纪流行的“黑死病”实际是",answer:"鼠疫"},{question:"欧洲出现巴罗克、洛可可艺术是在",answer:"17、18世纪"},{question:"欧洲最长的河流是",answer:"伏尔加河"},{question:"欧洲资本主义萌芽最先产生于",answer:"意大利"},{question:"欲将守寡多年的嫂子樊氏嫁与赵云，但却惹得赵云大怒的是?",answer:"赵范"},{question:"歇后语--刘备的江山是?",answer:"哭出来的"},{question:"歌德是哪一时期德国的伟大诗人、思想家",answer:"18世纪末"},{question:"正常人体体细胞有多少条染色体",answer:"46条"},{question:"正常情况下，人的心跳在一分钟内约跳多少次？",answer:"70"},{question:"正式的接力赛，每队有几名运动员？",answer:"4名"},{question:"正月初一吃饺子这一习俗从哪个朝代开始？",answer:"明代"},{question:"正月初一吃饺子这一习惯是从什么朝代开始",answer:"明"},{question:"武则天于公元655年被高宗立为皇后，开始参与朝政，公元690年自立为帝，国号为:",answer:"周"},{question:"武则天是下面哪个皇帝的母亲？",answer:"唐中宗"},{question:"武则天登基后，改国号为",answer:"周"},{question:"武当山上的“金顶”是由什么材质制成？",answer:"铜"},{question:"武昌起义敲响了清皇朝的丧钟，具体组织和发动这次起义的团体是",answer:"文学社、共进会"},{question:"武昌起义的主要力量是",answer:"新军"},{question:"武神之祝福是哪个副职使用的合成书籍?",answer:"镶工"},{question:"死刑只适用于（）犯罪分子",answer:"罪行极其严重的"},{question:"残影蚀心剑是哪个职业的技能?",answer:"剑侍"},{question:"残阳炙是哪个职业的技能?",answer:"阴阳士"},{question:"殷墟出土的带有文字的甲骨有十多万片，从甲骨文上反应出汉字的基本结构，下列哪个不属于汉字的基本结构？",answer:"会色"},{question:"母狼与一对孪生子的雕塑存在于哪里",answer:"罗马"},{question:"每一个少数民族都有自己喜爱的颜色，生长在大草原的蒙古族喜爱:",answer:"白色"},{question:"每个朝代在统治末期都会发生大规模的农民起义，汉朝也不例外，最终也被农民起义催得土崩瓦解，请问汉朝一共",answer:"三次"},{question:"每个职业天生就拥有几类心法?",answer:"三"},{question:"每年的教师节是哪一天？",answer:"9月10日"},{question:"比玩家弱很多的怪物:",answer:"怪物名为灰色"},{question:"比玩家强很多的怪物:",answer:"怪物名为红色"},{question:"比玩家稍弱的怪物:",answer:"怪物名为绿色"},{question:"比玩家稍强的怪物:",answer:"怪物名为橙色"},{question:"比萨斜塔是用什么石头砌成？",answer:"大理石"},{question:"毛主席曾挥毫“九疑山上白云飞，帝子乘风下翠微”赞美一位上古帝王的英名，请问这是哪位帝王？",answer:"舜帝"},{question:"毛泽东同志在哪篇文章中对古语“实事求是”给予新的科学的解释？",answer:"《改造我们的学习》"},{question:"毛泽东提出“一切反动派都是纸老虎”的著名论断是在",answer:"解放战争初期"},{question:"民航喷气飞机使用燃料为：",answer:"煤油"},{question:"民间所说的鬼火其实是哪种化学元素的作用",answer:"磷"},{question:"民间通常所说的鬼火是化学中的什么现象",answer:"自燃"},{question:"水利工程奇迹都江堰是在哪一时期建造的？",answer:"战国"},{question:"水在多少度沸腾关键取决于哪种因素？",answer:"大气压"},{question:"水浒中号称智多星的是",answer:"吴用"},{question:"水淹七军讲的是谁的英雄故事？",answer:"关羽"},{question:"水瀑是哪个职业的技能?",answer:"仙术士"},{question:"永乐大典是在哪里编成的？",answer:"南京"},{question:"汉中一役赵子龙单枪匹马挑了曹操几座大营?",answer:"七座"},{question:"汉代称城市干道为：",answer:"街"},{question:"汉代，凡面制的食品统称之为什么？",answer:"饼"},{question:"汉光武帝封二十八位将军为云台二十八将，下列哪位不是云台二十八将？",answer:"藏霸"},{question:"汉大将军卫青是骠骑将军霍去病的什么人？",answer:"舅舅"},{question:"汉寿亭候是谁的爵位？",answer:"关羽"},{question:"汉朝实行三公九卿制，下列哪项不属于九卿？",answer:"太尉"},{question:"汉朝时期，南匈奴归附西汉，下列哪个地方不是南匈奴的驻地？",answer:"幽州"},{question:"汉朝最先下诏废除肉刑的皇帝是：",answer:"汉文帝"},{question:"汉朝的淮南王刘安有八个有名的门客，下列哪位不属于八门客之一？",answer:"继昌"},{question:"汉武帝于元封五年将全国分为几个州？",answer:"二十三"},{question:"汉语拼音方案结束了汉语拼音史上的紊乱局面，请问汉语拼音方案诞生于哪一年。",answer:"1958"},{question:"汉长安城的大街分三条道，中央御路宽约",answer:"20米"},{question:"汉长安城的大街分三条道，中央御路宽约：",answer:"20米"},{question:"汉高祖是：",answer:"刘邦"},{question:"汝南有个善于评论人物的名士，评论曹操为：“治世之能臣，乱世之奸雄”，此名士是",answer:"许劭"},{question:"江山烽火啸是哪个职业的技能?",answer:"阴阳士"},{question:"汤姆-汉克斯主演过：",answer:"《费城故事》"},{question:"汪精卫成立南京伪国民政府的时间是",answer:"1940年春"},{question:"汪精卫是有名的大汉奸，最后的下场是",answer:"病死在日本"},{question:"汽车大修送修标准：货车以发动机为主，结合车架总成或其它（）总成符合大修条件。",answer:"三个"},{question:"没有用在QQ三国中,如果鞋子镶嵌上以下哪个石头,移动速度会快一些?",answer:"风行石"},{question:"沧海怒潮是哪个职业的技能?",answer:"仙术士"},{question:"河马为什么总在水里躲着不上岸？下列哪一个原因不正确：",answer:"不适应外界温度变化"},{question:"河马常常潜伏在水中，每隔3—5分钟到水面呼吸一次，最长能潜伏",answer:"半小时"},{question:"沿海国最多的洲是：",answer:"非洲"},{question:"法国人忌讳什么颜色？",answer:"灰绿色"},{question:"法国启蒙运动中最富民主倾向的作家是",answer:"卢梭"},{question:"法国日本海军在8·13抗战时停泊在上海的舰队旗舰是：",answer:"出云号"},{question:"法西斯的称谓是如何由来的？",answer:"刑具名"},{question:"波斯湾战争中，美国的军事代号是什么？",answer:"沙漠风暴"},{question:"泣血斧是哪个职业的技能?",answer:"豪杰"},{question:"注册商标的期限为几年？",answer:"10"},{question:"泰戈尔获哪年的诺贝尔文学奖",answer:"1913"},{question:"洋务运动失败的根本原因在于？",answer:"封建制度的腐朽"},{question:"洋葱是哪一个部分？",answer:"茎"},{question:"洪秀全创立拜上帝会的目的是",answer:"反清统治"},{question:"洪秀全发动金田起义，建国号太平天国，自称天王。咸丰三年定都天京，天京是现在的什么地方？",answer:"南京"},{question:"海军礼炮每响隔几秒钟？",answer:"5"},{question:"海参逃避危险时候要抛掉身上的哪个器官？",answer:"肚肠"},{question:"海啸一般是由什么引起的？",answer:"地震"},{question:"海洋的平均深度为多少米",answer:"3800"},{question:"海湾战争中多国部队的最高司令是谁？",answer:"施瓦茨科夫"},{question:"清代的官服饰品中常有“顶戴花翎”一说，是官位的象征标志，“花翎”是取自什么动物的毛？",answer:"孔雀"},{question:"清华大学建于哪一年？",answer:"1911"},{question:"清嘉庆年间的八位才子被世人称为“嘉庆八才子”，下列谁不是八才子之列？",answer:"欧大任"},{question:"清宣宗在位时的年号为",answer:"道光"},{question:"清政府下诏向法国正式宣战是在",answer:"马尾海战后"},{question:"清政府和美国签定的第一个不平等条约是",answer:"望厦条约"},{question:"清明时节人们会进行哪项活动？",answer:"吃寒食"},{question:"清朝国势衰落开始于",answer:"嘉庆时"},{question:"清朝在什么时候被推翻?",answer:"1911年"},{question:"清朝官员的礼帽上嵌一个顶珠，颜色各不相同它的作用是：",answer:"官阶大小的区别"},{question:"清朝封爵的方式分为军功封和恩封，下列哪位铁帽子王属于恩封？",answer:"恭亲王"},{question:"清朝将全蒙古部众悉数纳入盟旗体制，当时清朝共有多少旗？",answer:"61"},{question:"清朝把全国划分为多少个省？",answer:"18"},{question:"清朝掌握外交事务的机构，依次序正确的一组为",answer:"礼部→总理衙门→外交部"},{question:"清朝文官朝服上的补子都是以动物为图案，下列那种动物不是朝服补子上的图案？",answer:"喜鹊"},{question:"清朝时期，文、武一品官的朝冠顶镶嵌有：",answer:"红宝石"},{question:"清朝时，北京城的西直门是由满族哪一旗驻守的？",answer:"正红旗"},{question:"清朝最后一个皇帝是：",answer:"宣统"},{question:"清朝的哪位皇帝与沙俄签订了《尼布楚条约》？",answer:"康熙皇帝"},{question:"清朝的王爷和以往历朝的王爷不一样，而是分了很多的等级，请问清朝的王爷分了几个等级？",answer:"十四"},{question:"清朝的第一座陵是哪座",answer:"永陵"},{question:"清朝的金圣叹曾将六位古人的名著评为“六才子书”，下列哪项不是“六才子书”？",answer:"《老子》"},{question:"清朝皇帝中最勤奋好学的是",answer:"康熙"},{question:"清朝设有“六部”，下列不属于六部的是？",answer:"外务部"},{question:"清洁的空气中含有多少氩?",answer:"mx0.93%"},{question:"温度有上下限吗？",answer:"只有下限没有上限"},{question:"游戏中的道具来源有：",answer:"其他答案都是"},{question:"游戏里的道具有几种？",answer:"其他答案都是"},{question:"滑冰是人们利用冰刀在冰上滑行的冬季运动项目。起源于10世纪的：",answer:"荷兰"},{question:"滚滚长江东逝水,浪花淘尽英雄.是非成败转头空.青山依旧在,几度夕阳红...这是我国哪部文学古典名著的",answer:"三国演义"},{question:"满清十大酷刑不包括下列哪项？",answer:"千刀万剐"},{question:"漫画七龙珠的作者是哪国的?",answer:"日本"},{question:"潮州的简称是什么",answer:"凤城"},{question:"澳门大学以前叫什么大学？",answer:"东亚大学"},{question:"激将计是哪个职业的技能?",answer:"剑侍"},{question:"火凤附体是哪个职业的技能?",answer:"阴阳士"},{question:"火炎是哪个职业的技能?",answer:"阴阳士"},{question:"灭亡宋朝的势力是：",answer:"蒙古"},{question:"灭南宋统一全国的元朝皇帝是谁？",answer:"忽必烈"},{question:"炫灵流火咒是哪个职业的技能?",answer:"阴阳士"},{question:"炼狱阴魔咒是哪个职业的技能?",answer:"阴阳士"},{question:"炽炎袭是哪个职业的技能?",answer:"阴阳士"},{question:"烟草专卖品准运证的规格、式样和签发准运证专用印章的印章式样由谁统一制定？",answer:"国家烟草专卖局"},{question:"烟草专卖行政主管部门依法收购违法收购的烟叶，收购价格按照该烟草专卖品市场批发价格的多少计算？",answer:"70%"},{question:"烤乳猪是哪个菜系的代表菜",answer:"粤菜"},{question:"热带季风海洋性气候有哪个特征？",answer:"四季不分明"},{question:"焚风会出现在什么地方？",answer:"阿尔卑斯山"},{question:"煤是由什么代的厥类植物变成的？",answer:"古生代的厥类植物"},{question:"煤气炉最早出现出什么时候？",answer:"19世纪50年代"},{question:"照顾幼蜂是哪一种蜜蜂的责任？",answer:"工蜂"},{question:"煮茶用的水，以什么水为上？",answer:"山水"},{question:"熊猫是我国的国宝，那么熊猫属于哪一科？",answer:"猫熊科"},{question:"燕京八景是谁题写的",answer:"乾隆"},{question:"燕行术是哪个职业的技能?",answer:"仙术士"},{question:"爱滋病最早发现在哪一年？",answer:"1959"},{question:"爵位是我国历史上出现与官制并行的象征地位的一种制度，请问下列哪个爵位在商朝是没有的？",answer:"子"},{question:"牙膏里面有的加了珍珠粉，起的作用是",answer:"摩擦剂"},{question:"牙龈常出血的人，一般体内缺乏",answer:"维生素C"},{question:"牡丹之乡是山东省的",answer:"菏泽"},{question:"狂斧冲霄是哪个职业的技能?",answer:"豪杰"},{question:"狂沙百战是哪个职业的技能?",answer:"豪杰"},{question:"狂炎涌是哪个职业的技能?",answer:"阴阳士"},{question:"狂雷七星剑是哪个职业的技能?",answer:"剑侍"},{question:"狗不理包子的原产地是哪里:",answer:"天津"},{question:"独联体由多少个国家组成？",answer:"11"},{question:"独角戏约产生于哪一年代？",answer:"20世纪20年代"},{question:"猪心情很好时尾巴会呈什么形状？",answer:"水平摆动"},{question:"猫无论以什么姿势从空中落下，总是：",answer:"四脚先着地"},{question:"献帝在许昌狩猎时，曹操曾用献帝的弓射杀了一只动物，那只动物是什么?",answer:"鹿"},{question:"玄冰护盾是哪个职业的技能?",answer:"仙术士"},{question:"率先使用毒气攻击的是：",answer:"德国"},{question:"率军盗取东陵的东陵大盗是",answer:"孙殿英"},{question:"玉石俱焚是哪个职业的技能?",answer:"剑侍"},{question:"玉米的原产地在",answer:"美洲"},{question:"玉米茎基部产生的根属于",answer:"支持根"},{question:"玉阶生白露，夜久侵罗袜（作者李白玉阶怨）的后两句是？",answer:"却下水精帘，玲珑望秋月。"},{question:"王国维自沉于",answer:"昆明湖"},{question:"王安石变法发生在宋朝哪个皇帝在位期间？",answer:"神宗"},{question:"王安石变法的内容中不包括下列哪项？",answer:"井田"},{question:"王安石变法的直接目的是",answer:"增加财政收入"},{question:"王昌龄的《同从弟南斋玩月忆山阴崔少府》没有下列哪一句？",answer:"松声晚窗里"},{question:"王维是唐朝有名的诗人，下列哪部不是王维的作品？",answer:"祭汾阴乐章"},{question:"玫琳凯公司是一家经营何种商品的公司？",answer:"化妆品"},{question:"现今,函谷关属于我国那一个省?",answer:"河南省"},{question:"现今存诗最多的诗人是",answer:"陆游"},{question:"现代五项指得不是下列哪项？",answer:"越野车"},{question:"现代奥林匹克创始人是谁？",answer:"顾拜旦"},{question:"现代奥林匹克运动创始人皮埃尔·德·顾拜旦是",answer:"法国人"},{question:"现代篮球运动是哪一年由（美国）传入中国的?",answer:"1895年"},{question:"现发行的属相邮票中哪种价值最高",answer:"猴票"},{question:"现在庙中神像，居中者为关公，右边白脸捧印的就是关平；左边黑脸持刀的，则是关公部将谁?",answer:"周仓"},{question:"现在知道的我国境内的较早古人类有",answer:"元谋人"},{question:"现存关于遗嘱继承的最早的法规产生于：",answer:"唐代"},{question:"现存的黄鹤楼是哪一年建成的？",answer:"1985年"},{question:"现存的黄鹤楼首次进行整修是在哪一年？",answer:"2003年2月"},{question:"现存鸟类中的最大的鸟蛋是：",answer:"鸵鸟"},{question:"现效力于曼联的范尼是哪国人？",answer:"荷兰"},{question:"现时陆地界上最巨大的食肉动物是什么?",answer:"大棕熊"},{question:"珠穆朗马峰位于（）",answer:"中、尼过境"},{question:"甘罗多大年纪成为相国",answer:"十二岁"},{question:"生活在沙漠里的生物？",answer:"骆驼"},{question:"生活在热带的植物？",answer:"棕榈树"},{question:"生物体内最多的有机物是",answer:"蛋白质"},{question:"生物进化的方向决定于：",answer:"自然选择"},{question:"生物进行一切生命活动的基础是：",answer:"新陈代谢"},{question:"用5个鸡蛋可以生产出10个煮鸡蛋吗？",answer:"幸运合成或者使用初级锅"},{question:"用什么帐号就可以直接登陆QQ三国?",answer:"QQ号码"},{question:"用以下哪种方式可以用单独的窗口和别人交流?",answer:"私聊"},{question:"用焦炭作燃料冶炼金属始于：",answer:"明朝"},{question:"用盐腌的鳟鱼卵叫什么？",answer:"黑鱼子"},{question:"由成语“墙头马上”的原意可知，元朝白朴所著的《墙头马上》属于什么类型的杂剧？",answer:"言情"},{question:"甲午战争是中国和哪一个国家交战？",answer:"日本"},{question:"甲午战争爆发的标志是",answer:"丰岛海战"},{question:"甲骨文是写在哪上面的？",answer:"龟骨"},{question:"电影“一江春水向东流”的片名，摘自我国古代谁的词作？",answer:"李煜"},{question:"电影最基本的单位是什么？",answer:"镜头"},{question:"电影（刘三姐）是反映什么民族的故事",answer:"壮族"},{question:"电流的单位的什么？",answer:"安培"},{question:"电脑运算和控制的核心是什么？",answer:"CPU"},{question:"电视的发明者是谁？",answer:"贝尔德"},{question:"男儿黑是啥?",answer:"回体力的蓝药"},{question:"男子吊环比赛至少倒立：",answer:"2次"},{question:"疾风术是哪个职业的技能?",answer:"仙术士"},{question:"白居易在香山与八位耆老集会、燕乐，为了纪念这次集会，世人称之为“香山九老”，请问下列哪位不属于九老之",answer:"刘禹锡"},{question:"白暨豚在水中靠什么探测和识别物体？",answer:"听觉（声纳）"},{question:"白熊生长在什么地方？",answer:"北极"},{question:"白银在明代成为普遍流通的货币，其主要原因是",answer:"商品经济的发展"},{question:"白马非马出自谁口?",answer:"公孙龙"},{question:"白鳍豚是哪国特有的一种极为罕见的珍贵动物？",answer:"中国"},{question:"白鳍豚有什么美誉？",answer:"长江女神"},{question:"百团大战作战区域涉及的主要抗日根据地是",answer:"晋冀豫、晋绥、晋察冀"},{question:"皇太极是哪朝太祖",answer:"清朝"},{question:"皇帝作为国家元首的正式称号，始于：",answer:"秦始皇"},{question:"皇甫冉《春思》没有下列哪句？",answer:"风物凄凄宿雨收"},{question:"皮影的原型是用什么材料：",answer:"纸"},{question:"目前世界纪元(公元前后的划分)的方法是以什么为标准：",answer:"耶稣基督教"},{question:"目前我国商业、旅游、娱乐用地的土地使用权出让的最高年限是：",answer:"40年"},{question:"目前我国存本取息定期储蓄的起存金额为",answer:"5000元"},{question:"目前我国符合条件的失业人员领取失业保险金的最长期限为",answer:"24个月"},{question:"目前我国透支额最高的信用卡是什么卡？",answer:"金穗卡"},{question:"目前流行的E-mail的中文含义是",answer:"电子邮件"},{question:"目前，我国年器官移植数量位居世界第几名，其种类和成功率也达到或接近世界先进水平？",answer:"第二"},{question:"相传我国古代能作“掌上舞”的美女是：",answer:"赵飞燕"},{question:"相传豆腐是谁发明的？",answer:"淮南王刘安"},{question:"相传黄帝有几个儿子",answer:"25个"},{question:"相对论是谁提出的？",answer:"爱因斯坦"},{question:"眉毛的生长周期有多久？",answer:"2个月"},{question:"真元入体是哪个职业的技能?",answer:"仙术士"},{question:"真气护体是哪个职业的技能?",answer:"阴阳士"},{question:"真腊占婆碑名kmir，为中南半岛古国，下列哪项读音不是对真腊的对音？",answer:"“暹粒”"},{question:"眼球是什么形状的？",answer:"圆球体"},{question:"石山本愿寺投降后，信长开始多线作战，奉命对付毛利家是哪位家臣？",answer:"丰臣秀吉"},{question:"石油中碳和氢的含量占：",answer:"96－99％"},{question:"石达开担任的是：",answer:"翼王"},{question:"石达开最后兵败于：",answer:"四川省"},{question:'矾山镇，有"世界矾都"之称。明洪武年间，便有人在此挖矿炼矾。目前，这里矾矿储量占世界６０％，年产量占',answer:"浙江"},{question:"破釜沉舟这个成语出于哪次战争？",answer:"巨鹿之战"},{question:"破除满汉不通婚这个祖训的是：",answer:"乾隆"},{question:"确定如何保护战争受难者的协定是",answer:"日内瓦公约"},{question:"碧海潮生是哪个职业的技能?",answer:"仙术士"},{question:"磅礴战意是哪个职业的技能?",answer:"豪杰"},{question:"社会主义的第一次尝试是在哪个国家？",answer:"法国"},{question:"祖咏《终南望馀雪》有下列哪一句？",answer:"终南阴岭秀"},{question:"神工鬼斧是哪个职业的技能?",answer:"豪杰"},{question:"神父是基督教哪个教派的神职？",answer:"天主教"},{question:"神龙探海是哪个职业的技能?",answer:"豪杰"},{question:"祭血连环斧是哪个职业的技能?",answer:"豪杰"},{question:"禁止在烟草制品商标上标注的字样或图形是：",answer:"纪念性的文字和图形"},{question:"离太阳最近的行星是什么星?",answer:"水星"},{question:"离间计是曹操用来离间马超与谁的",answer:"韩遂"},{question:"秋收起义爆发于1927年：",answer:"9月9日"},{question:"科举制度始创于何时？",answer:"隋朝"},{question:"秦分天下为三十六郡，今天的江苏属于",answer:"会稽郡"},{question:"秦始皇兵马俑于哪年被发现",answer:"1974"},{question:"秦始皇第一个灭掉的诸侯国是：",answer:"韩"},{question:"秦始皇统一中国后，在全国设立郡县以治理国家，他把天下分成了多少个郡？",answer:"36"},{question:"秦始皇陵建造在何处?",answer:"骊山"},{question:"秦朝商鞅最后是怎么死的？",answer:"车裂"},{question:"秦朝开始推行郡县制度在全国设",answer:"36郡"},{question:"称蜀中有断头将军，无降将军，但是到最后还是投降张飞的将领是?",answer:"严颜"},{question:"空城计是诸葛亮与谁摆出的虚招",answer:"司马懿"},{question:"空城计是诸葛亮在什么地方实施的一招缓兵之计",answer:"四川西城"},{question:"空手道原称",answer:"唐手"},{question:"竞技体操男子项目不包括下列哪项？",answer:"碰床"},{question:"章鱼的眼睛长在身体的哪个部位？",answer:"后面"},{question:"童子科是科举制下常科科目中的一个小科目，请问童子科出现在哪个朝代？",answer:"唐朝"},{question:"笞、杖、徒、流、死五刑制度最早规定在",answer:"开皇律"},{question:"第18界世界杯将在哪个国家举行？",answer:"德国"},{question:'第一个册封"达赖喇嘛"的皇帝是',answer:"顺治"},{question:"第一个到达南极的人是哪国人？",answer:"挪威人"},{question:"第一个成为NBA状元秀的中国球员是谁？",answer:"姚明"},{question:"第一个打破世界纪录的中国人是",answer:"陈镜开"},{question:"第一个测出子午线长度的人是？",answer:"中国人"},{question:"第一个获欧文斯奖的中国人是谁？",answer:"王军霞"},{question:"第一个资本主义国家是：",answer:"荷兰"},{question:"第一个进入太空的是哪国人？",answer:"苏联"},{question:"第一个采用邮政编码的国家是哪个？",answer:"德国"},{question:"第一位任国际足联副主席的华人是",answer:"李惠堂"},{question:"第一位培养育出没有外祖父的癞蛤蟆的科学家朱洗是哪个省的人？",answer:"浙江"},{question:"第一台计算机是在什么时候研制出现的？",answer:"1946"},{question:"第一块敌后抗日根据地的开辟者是",answer:"贺龙"},{question:"第一宇宙速度为：",answer:"79公里每秒"},{question:"第一届冬奥会于哪年举行即夏蒙尼冬奥会",answer:"1924"},{question:"第一届奥斯卡最佳影片的名称为",answer:"《翼》"},{question:"第一届室内足球比赛是在哪一年举行的？",answer:"1978"},{question:"第一届现代奥运会于哪年举行？",answer:"1896"},{question:"第一届现代奥运会在何地举行的？",answer:"雅典"},{question:"第一次世界大战前帝国主义国家间的主要矛盾是",answer:"英德矛盾"},{question:"第一次世界大战是一场",answer:"帝国主义战争"},{question:"第一次世界大战的始末时间是？",answer:"１９１４－１９１８"},{question:"第一次参加奥运会的旧中国运动员是谁？",answer:"刘长春"},{question:"第一次发现月外卫星是哪年",answer:"1961"},{question:"第一次诺贝尔奖是哪一年颁发的",answer:"1901"},{question:"第一艘飞往月球的载人“阿波罗11号”飞船，是在哪一年发射升空的？",answer:"25385"},{question:"第一部被介绍到欧洲去的中国古典戏曲是哪部？",answer:"《赵氏孤儿》"},{question:"第九交响曲（即合唱交响曲）的作者是：",answer:"贝多芬"},{question:"第二次世界大战中，国际反法西斯统一战线形成的标志是？",answer:"《联合国家共同宣言》"},{question:"第二次世界大战中，意大利法西斯头目是：",answer:"墨索里尼"},{question:"第二次世界大战后期，使德军陷入苏军和英美盟军夹击中的军事行动是",answer:"诺曼底登陆"},{question:"第二次世界大战期间最大的一次战役--斯大林格勒大会战中，德军共损失了多少人员？",answer:"150万"},{question:"第二次世界大战的转折点是:",answer:"斯大林格勒保卫战"},{question:"第二次世界大战的重大转折点是",answer:"斯大林格勒战役"},{question:"第二次鸦片战争时期,侵占我国领土最多的国家是？",answer:"俄国"},{question:"第十届奥运会中国代表团共6人参加，但运动员仅一人，这个人是：",answer:"刘长春"},{question:"等质量的镁、碳、硫在足量的氧气中完全燃烧时，消耗氧气的质量比是：",answer:"2:08:03"},{question:"签定《尼布楚条约》是在哪个皇帝时期：",answer:"康熙"},{question:"篡夺辛亥革命胜利果实的野心家是",answer:"袁世凯"},{question:"篮球巨星乔丹第一次复出后所穿的球衣是多少号？",answer:"45号"},{question:"篮球是由哪国人发明得？",answer:"美国"},{question:"米是植物中的哪一部分？",answer:"种子"},{question:"紫菜长在浅海的",answer:"岩石上"},{question:"红军长征跨越了多少个省？",answer:"11"},{question:"红名的人可以坐马车吗？",answer:"不可以"},{question:"红木家具的原料是？",answer:"紫檀"},{question:"纪晓岚是我国哪个朝代上的才子",answer:"清朝"},{question:"纵横家出现于战国至秦汉之际，多为策辩之士，可称为中国五千年中最早也最特殊的外交政治家。下列哪位不是纵",answer:"孙武"},{question:"组队后队长可以改变吗？",answer:"可以"},{question:"组队的人是否在同一张地图才能分享经验？",answer:"是"},{question:"织一条普通成人穿的毛裤大概需用毛线",answer:"1斤2两"},{question:"经济学中的“资本资产定价模型”是由哪一位提出的？",answer:"夏普"},{question:"绝大部分的鱼是用什么器官呼吸的？",answer:"鳃"},{question:"统一公司大陆总部设在哪？",answer:"上海"},{question:"续命诀是哪个职业的技能?",answer:"仙术士"},{question:"绯闻最多的美国总统是",answer:"肯尼迪"},{question:"维生素B2又叫什么？",answer:"核黄素"},{question:"缓兵之计是哪个职业的技能?",answer:"仙术士"},{question:"网球运动可以追溯到13世纪的哪个国家？",answer:"法国"},{question:"网球运动起源于哪个国家？",answer:"法国"},{question:"网络按覆盖的地理范围分类，主要分为",answer:"局域网和广域网"},{question:"罗大佑的作品有：",answer:"恋曲1990"},{question:"罗贯中除著有《三国演义》外还著有",answer:"《隋唐志传》"},{question:"罗马对外扩张第一个目标就是迦太基占领的：",answer:"西西里岛"},{question:"美人树的学名是？",answer:"白桦"},{question:"美国1787年宪法规定，解释宪法的权力在：",answer:"最高法院"},{question:"美国中央情报局的英文简写是",answer:"CIA"},{question:"美国于２０００年举行过“世纪之字”评选活动，获得提名的是？",answer:"“自由”"},{question:"美国前任总统肯尼迪生在",answer:"1917年"},{question:"美国历史上第一所高等学府是：",answer:"哈佛大学"},{question:"美国国旗上有（）条纹？",answer:"13"},{question:"美国心理学家马斯洛把人的需要分为几个层次",answer:"5个"},{question:"美国总统尼克松哪一年访华？",answer:"1972年"},{question:"美国现有多少个州？",answer:"50个"},{question:"美国电子工程师何时制成世界上第一块集成电路?",answer:"1938"},{question:"美国的F－22猛禽战斗机属于第几代战斗机？",answer:"第四代战斗机"},{question:"美国的第一任总统是谁？",answer:"华盛顿"},{question:"美国第一位被享有国际名誉的科学家是谁？",answer:"富兰克林"},{question:"群雄讨伐董卓，在泗水关迎战联军的大将是谁?",answer:"华雄"},{question:"羽毛球发球时，球不能超过：",answer:"腰部"},{question:"老子是骑着什么出函谷关后再无踪影的",answer:"牛"},{question:"老年人吃菜应多加些：",answer:"醋"},{question:"老年人每日的正常睡眠时间应是多少小时：",answer:"5～6"},{question:"老舍创作于40年代的作品是：",answer:"四世同堂"},{question:"老舍的《骆驼祥子》连载于下列哪一刊物？",answer:"《宇宙风》"},{question:"联合国常任理事国是哪个？",answer:"英国"},{question:"联合国教科文组学织总部设在哪里？",answer:"巴黎"},{question:"联合国教育、科学及文化组织是联合国专门机构之一。1946年11月4日成立，总部设在：",answer:"巴黎"},{question:"联合国日为哪一天？",answer:"10月24日"},{question:"联合国秘书处总部设在",answer:"纽约"},{question:"联绵词第二个音节不读轻声的是哪个？",answer:"玲珑"},{question:"联绵词第二个音节读轻声的是哪个？",answer:"妯娌"},{question:"肯德基的英文缩写是什么？",answer:"KFC"},{question:"胆汁由什么器官分泌：",answer:"肝细胞"},{question:"背包里的物品，我可以：",answer:"其他答案都是"},{question:"背跃式跳高发明者福斯伯利是哪国人",answer:"美国"},{question:"自然界中已知的最硬的物质是：",answer:"金钢石"},{question:"自由女神像是由哪个国家送给美国的?",answer:"法国"},{question:"自行车的发明者德莱斯原本是从事什么工作的？",answer:"看林人"},{question:"至今还保留着以母系氏族为中心的“阿夏”婚姻的是",answer:"马里人"},{question:"舌战群儒、三顾茅庐和七擒孟获讲的谁的故事",answer:"诸葛亮"},{question:"舜帝姓什么？",answer:"姚"},{question:"舜陵是中国五大古帝陵之一，舜帝葬于九嶷山，下列哪个地名不是九嶷山附近的景点？",answer:"韶女峰"},{question:"艾滋病的主要传播途径是：",answer:"血液"},{question:"艾菲尔出生于?",answer:"1832年"},{question:"芦笙舞是哪一少数民族的舞蹈",answer:"苗"},{question:"芭蕾起源于哪个国家？",answer:"意大利"},{question:"苏秦用什么办法防止读书时打瞌睡?",answer:"把头发栓在房粱上"},{question:"苏维埃社会主义共和国联盟解体是在哪一年？",answer:"１９９１年底"},{question:"苏轼“三贬”之地是？",answer:"黄州、惠州、儋州"},{question:"苏轼门下学生众多，其中著名的乃“苏门六君子”，下列哪位不是“苏门六君子”之一？",answer:"高若讷"},{question:"苏轼除了字子瞻之外，还字什么？",answer:"和仲"},{question:"若想新春佳节水仙花香溢满厅堂，首先，要了解水仙花生长的适宜温度。科学试验证明对水仙的生长最适宜的室温",answer:"8-12°C"},{question:"英国打败殖民帝国西班牙成为海上强国是在()",answer:"16世纪末"},{question:"英国王妃戴安娜是在哪一年去世",answer:"1997"},{question:"英国的面积相当于我国的哪个省?",answer:"江苏"},{question:"英国资产阶级革命开始的标志是",answer:"1640年新议会的召开"},{question:"英国资产阶级革命结束的标志是",answer:"“光荣革命”"},{question:"英法发动第二次鸦片战争时，法国的统治者是",answer:"路易·波拿巴"},{question:"英法联军曾于哪年火烧圆明园？",answer:"1860年"},{question:"英语中“文化”一词原意是指：",answer:"耕作"},{question:"英语属于哪一语族：",answer:"日耳曼语族"},{question:"茶之中含有什么物质可以减少吸收食物中的铁质",answer:"单宁酸"},{question:"茶神陆羽的《茶经》复原了“大唐茶韵”，下列哪项在《茶经》中未记录的？",answer:"“大唐宫廷茶”"},{question:"草船借箭时，周瑜派谁去打探诸葛亮的虚实",answer:"鲁肃"},{question:"草船借箭时，每支草船有军士多少人？",answer:"三十人"},{question:"莫高窟现存的彩塑像有多少尊？",answer:"2000余"},{question:"莲华出水术是哪个职业的技能?",answer:"仙术士"},{question:"获得2002年诺贝尔文学奖的伊姆雷.凯尔泰兹是哪国人",answer:"匈牙利"},{question:"获得总冠军最多的F1选手是谁?",answer:"舒马赫"},{question:"获得总冠军最多的环法自行车选手是谁?",answer:"阿姆斯特朗"},{question:"营养物质大部分在哪一器官吸收：",answer:"小肠"},{question:"萧何月下追谁",answer:"韩信"},{question:"萨克斯的发明者是法国人：",answer:"阿道尔夫·萨克斯"},{question:"著名历史学家黄仁宇出生于哪一年",answer:"1918年"},{question:"著名小说家、剧作家罗曼.罗兰是哪国人？",answer:"法国"},{question:"著名小说家金庸是哪次国际中文辩论赛的评委",answer:"狮城中文国际辩论赛"},{question:"著名影片《魂断蓝桥》的桥是哪座桥？",answer:"滑铁卢桥"},{question:"著名画家黄胄最擅长画什么动物？",answer:"驴"},{question:"著名的“关东大地震”发生在",answer:"1923年"},{question:"著名的“户撒刀”是哪个少数民族的特色手工制品？",answer:"阿昌族"},{question:"著名的《观沧海》是曹操攻打什么地方时写的？",answer:"乌桓"},{question:"著名的资产阶级启蒙思想家孟德斯鸠提倡",answer:"三权分立学说"},{question:"著名的赵州桥是在哪一时期造建的？",answer:"隋朝"},{question:"著名词句两情若是久长时,又岂在、朝朝暮暮。的作者是：",answer:"秦观"},{question:"董卓入京后收买了猛将谁,又废少帝,立献帝,大权独揽,实施暴政。",answer:"吕布"},{question:"董卓因何当上相国？",answer:"护驾有功"},{question:"蒋介石手下也有“十三太保”，下列哪位不是蒋介石“十三太保”？",answer:"酆悌"},{question:"蒙古第一次西征是",answer:"1217年至1223年"},{question:"蓝牙技术是一项无线电技术其传输范围在：",answer:"10米左右"},{question:"蔡伦一生在内廷为官，先后侍奉几个幼帝？",answer:"4"},{question:"蕨类植物的输导组织中，运送水和无机盐的结构和运送有机物的结构分别是",answer:"管胞、筛细胞"},{question:"薰衣草是原产于地中海一带的一种植物，请问它是下面哪个国家的国花？",answer:"葡萄牙"},{question:"藏传佛教有哪几大分支：",answer:"白教、红教、黄教"},{question:"蚯蚓在土壤中吃食时",answer:"头朝下"},{question:"蜀国新手城旁边的怪物小蛮猪为什么经常找不到?",answer:"BOSS来的，刷新时间有点长"},{question:"蜈蚣又名什么?",answer:"百足"},{question:"蜻蜓点水是为了",answer:"产卵"},{question:"蝴蝶为什么总在花丛里飞来飞去？以下哪一个答案是正确的：",answer:"喜欢吃花蕊里的蜜汁"},{question:"蝴蝶翅膀上的粉末有什么作用：",answer:"防水"},{question:"蝴蝶翅膀上的粉末有什么作用？",answer:"防水"},{question:"螃蟹吐出的白沫有什么作用？",answer:"呼吸"},{question:"蟋蟀是靠什么发出鸣叫声的？",answer:"翅膀"},{question:"蟋蟀，金钟儿的“耳朵”长在哪里？",answer:"腿部"},{question:"血管破裂时，血液中的什么物质会凝结成块，堵住破裂部分以止血？",answer:"血小板"},{question:"行政赔偿的请求时效为",answer:"2年"},{question:"袁世凯当上“中华帝国”的皇帝是在",answer:"1915"},{question:"袁绍手下哪位谋士倒投曹操并献计火烧乌巢粮仓?",answer:"许攸"},{question:"袁绍的三弟是谁?",answer:"袁術"},{question:"被人誉为活维生素丸的是：",answer:"红枣"},{question:"被取名为“世界的中心”的是：",answer:"库斯特"},{question:"被后世尊为武神的关羽是出生哪里人?",answer:"河东解人"},{question:"被后人称为陶朱公的是谁",answer:"范蠡"},{question:"被吐蕃逼得离开长安的是历史上哪位皇帝？",answer:"唐代宗"},{question:"被尊为南派山水画创始人的是那位著名画家？",answer:"董源"},{question:"被当时的国际舆论界赞誉为东方的隆美尔的抗日名将是：",answer:"孙立人"},{question:"被授予人民艺术家荣誉奖状的是：",answer:"老舍"},{question:"被瓦刺兵俘去，后又复辟的皇帝是",answer:"明英宗朱祁镇"},{question:"被祢衡讥为「完体将军」的是?",answer:"夏侯惇"},{question:'被称为"伊凡雷帝"是',answer:"伊凡四世"},{question:"被称为“世界第八奇观”的是：",answer:"秦始皇兵马俑"},{question:"被称为“天下齐秀”的山峰是（）。",answer:"雁荡山"},{question:"被称为“容克资产阶级帝国主义”的国家是",answer:"德国"},{question:"被称为“死亡音乐”的乐曲名字叫什么？",answer:"黑色星期天"},{question:"被称为“活化石”的爬行动物？",answer:"扬子鳄"},{question:"被称为中国古代第一个监狱的羑里城位于现在的：",answer:"安阳"},{question:"被称为中国近代第一城的是",answer:"南通"},{question:"被称为命运交响曲的是贝多芬的",answer:"第五交响曲"},{question:"被称为太阳王的国王是谁？",answer:"路易十四"},{question:"被称为曼哈顿桂冠诗人的是谁？",answer:"欧.享利"},{question:"被称为活化石的植物是",answer:"水杉"},{question:"被称为西汉两司马的除了司马迁还有谁？",answer:"司马相如"},{question:"被腰斩而亡的是",answer:"李斯"},{question:"被视为全人类的珍贵文化遗产，目前世界上唯一还活着的象形文字是：",answer:"东巴文"},{question:"被誉为'浙大保姆'的是哪一位科学家？",answer:"竺可桢"},{question:"被誉为“白金之国”的是",answer:"乌兹别克斯坦"},{question:"装备以下哪个道具就可以自动给自己加血?",answer:"自动补给"},{question:"装备强化有什么效果？",answer:"其他答案都是"},{question:"西亚和北非同为灌溉农业，其主要农业区分布在",answer:"河谷平原和绿洲"},{question:"西域三绝独特风光.“西域三绝”，是在中国乃至全世界都有名的独特风光。它们就是：吐鲁番的热、巴里坤的凉",answer:"风"},{question:"西夏的都城在",answer:"兴庆"},{question:"西安不是下列哪朝的古都？",answer:"清朝"},{question:"西斯廷教堂屋顶的壁画是由哪位大画家所画的？",answer:"米开朗奇罗"},{question:"西方侦探小说的鼻祖是谁？",answer:"爱伦.坡"},{question:"西方殖民者是从什么时候开始在非洲进行掠夺性的“奴隶贸易”的？",answer:"15世纪"},{question:"西方现代派文学指的是",answer:"一种文学思潮"},{question:"西晋的创建者：",answer:"司马炎"},{question:"西晋的士风和诗歌闻名于世，其中的代表为“二十四友”，下列哪位不属于“二十四友”？",answer:"潘岳"},{question:"西欧的宗教改革开始于",answer:"德意志"},{question:"西汉初统治者实行宽舒政策的根本原因是",answer:"经济极端贫困的状况"},{question:"西迁节是我国哪个民族的节日？",answer:"锡伯族"},{question:"要想成为大话王,你需要在哪里大量发言?",answer:"国家频道"},{question:"规定割让台湾和澎湖列岛的不平等条约是",answer:"《马关条约》"},{question:"解决了中国有新民主主义革命向社会主义革命转变的重大问题的会议是",answer:"中共七届二中全会"},{question:"解放战争初期山东战场的领导人是谁?",answer:"刘伯承"},{question:"计算机图片中，可使用动画形式的图片格式是哪个？",answer:"GIF"},{question:"计算机能直接执行的程序是",answer:"机器语言程序"},{question:"讨袁护国军首先由谁组织发起",answer:"蔡锷"},{question:"让关羽大意失荆州的东吴将领为?",answer:"吕蒙"},{question:"许多动物都拥有带电或发光的器官，对这些器官用途说法不正确的是：",answer:"可以用来照明"},{question:"许攸献计曹操，将袁绍军囤积粮草之处一举烧尽，请问袁绍的粮仓是在?",answer:"乌巢"},{question:"词产生于什么时候？",answer:"隋"},{question:"诗“汉末才无敌，云长独出群，神威能奋武，儒雅更知文，天日心如镜，《春秋》义薄云，昭然千古，不止冠三分",answer:"关云长"},{question:"诗句“不惜千金买宝刀，貂裘换酒也堪豪”是何人所写？",answer:"秋瑾"},{question:"诗句“每逢佳节倍思亲”中的“佳节”原意",answer:"重阳节"},{question:"说动刘备，让他下定决心夺取益州的是?",answer:"庞统"},{question:"请你说出晴朗的天空里，天上能看到星星大约个数",answer:"3000"},{question:"请指出下列中哪一位是我国的数学家?",answer:"华罗庚"},{question:"请指出下列中哪一种不是昆虫?",answer:"蜘蛛"},{question:"请指出下列哪一个动物是家禽类?",answer:"鸡"},{question:"请指出下列哪一个是不是雨果的作品?",answer:"安娜·卡列尼娜"},{question:"请指出下列哪一个是侵略我国的<<八国联军<<的国家?",answer:"美国"},{question:"请指出下列哪一个是列夫·尼古拉耶维奇·托尔斯泰的作品?",answer:"安娜·卡列尼娜"},{question:"请指出下列哪一个是已经灭绝的动物?",answer:"蓝马羚"},{question:"请指出下列哪一个是我国古代朝代的首都?",answer:"南京"},{question:"请指出下列哪一个是我国春秋时期的霸主?",answer:"楚"},{question:"请指出下列哪一个是清朝的年号?",answer:"顺治"},{question:"请指出下列哪一个是红军长征时期所经过的地方?",answer:"江西"},{question:"请指出下列哪一位是<<红岩>>小说中的人物?",answer:"江姐"},{question:"请指出下列哪一位是外国的画家?",answer:"凡.高"},{question:"请指出下列哪一位是太平天国时期的将领?",answer:"洪秀全"},{question:"请指出下列哪一位是我国三国时期的历史人物?",answer:"刘备"},{question:"请指出下列哪一位是我国古代的书法家?",answer:"王羲之"},{question:"请指出下列哪一位是我国古代的医学家",answer:"扁鹊"},{question:"请指出下列哪一位是我国古代的战役?",answer:"赤壁之战"},{question:"请指出下列哪一位是我国古代的文臣?",answer:"诸葛亮"},{question:"请指出下列哪一位是我国古代的武将?",answer:"关羽"},{question:"请指出下列哪一位是我国古代的画家?",answer:"吴道子"},{question:"请指出下列哪一位是我国古代的著作?",answer:"西游记"},{question:"请指出下列哪一位是我国古代的诗人?",answer:"李白"},{question:"请指出下列哪一位是我国唐朝时期的历史人物?",answer:"李世民"},{question:"请指出下列哪一位是我国宋朝的文学家?",answer:"苏轼"},{question:"请指出下列哪一位是我国民国时期的军阀?",answer:"吴佩孚"},{question:"请指出下列哪一位是我国汉朝的历史人物?",answer:"刘邦"},{question:"请指出下列哪一位是我国清朝的皇帝?",answer:"弘历"},{question:"请指出下列哪一位是我国现代的作家?",answer:"鲁迅"},{question:"请指出下列哪一位是我国现代的画家?",answer:"徐悲鸿"},{question:"请指出下列哪一位是我国解放战争时期的共产党将领?",answer:"陈毅"},{question:"请指出下列哪一位是文学家?",answer:"朱自清"},{question:"请指出下列哪一位是新中国时期的十大元帅?",answer:"彭德怀"},{question:"请指出下列哪一位是科学家?",answer:"牛顿"},{question:"请指出下列哪一位是美国的总统?",answer:"罗斯福"},{question:"请指出下列哪一位是鲁迅小说中的人物?",answer:"阿Q"},{question:"请指出下列哪一句不是成语?",answer:"遇事不慌"},{question:"请指出下列哪一座是美国的城市?",answer:"纽约"},{question:"请指出下列哪一种动物是食草动物?",answer:"牛"},{question:"请指出下列哪一部是巴金的作品?",answer:"家"},{question:"请指出下列哪一部是我国现代的著作?",answer:"红旗渠"},{question:"请指出下列哪一部是老舍的作品?",answer:"骆驼祥子"},{question:"请指出下更哪一位是我国建国初期的国家领导人?",answer:"毛泽东"},{question:"请指出下更哪一位是第二次世界大战中的人物?",answer:"巴顿"},{question:"请指出下更哪一座是日本的城市?",answer:"大阪"},{question:"请指出下更哪一部是鲁迅的作品?",answer:"社戏"},{question:"请指出哪一个不属于冰心的作品?",answer:"骆驼祥子"},{question:"请指出哪一个不属于梵高作品?",answer:"安娜·卡列尼娜"},{question:"请指出哪一个不是梁羽生的作品?",answer:"鹿鼎记"},{question:"请指出哪一个属于冰心的作品?",answer:"闲情"},{question:"请指出哪一个属于梵高作品?",answer:"两棵丝柏树"},{question:"请指出哪一个是古龙的作品?",answer:"风铃中的刀声"},{question:"请指出哪一个是我国的古代朝代?",answer:"唐朝"},{question:"请指出哪一位是唐朝的皇帝？",answer:"武则天"},{question:"请指出哪一位是唐朝的诗人?",answer:"李白"},{question:"请指出哪一位是宋朝的诗人?",answer:"欧阳修"},{question:"请指出哪一位是我国的民族英雄?",answer:"岳飞"},{question:"请指出哪一位是非西游记里的人物?",answer:"关羽"},{question:"请指出哪一首诗句不是出自李白的诗？",answer:"两岸猿声啼不住"},{question:"请指出我国的城市是哪一个?",answer:"北京"},{question:"请指出金庸作品的是哪一个?",answer:"鹿鼎记"},{question:"请挑出组成中国国旗的一部分？",answer:"红色旗面"},{question:"请说出哪一个人物为我国抗战时期的人物?",answer:"黄继光"},{question:"请问“对酒当歌，人生几何？”是谁的诗句？",answer:"曹操"},{question:"请问下列哪个不属于宋朝的政治机构中的九寺之一？",answer:"饱卿"},{question:"请问下列哪个不属于宋朝的政治机构中的六监之一？",answer:"钦天"},{question:"请问下列小说中哪个不是凡尔纳的作品",answer:"《火星公主》"},{question:"请问下列那场战役不是发生在战国时期？",answer:"河西之役"},{question:"请问下列那场战役不是发生在汉朝时期？",answer:"白登之战"},{question:"请问下面事件中与赤壁之战无关的事件有？",answer:"火烧连营"},{question:"请问关羽败走的地方叫？",answer:"麦城"},{question:"请问刘备托孤的地点是？",answer:"白帝城"},{question:"请问只身陷入敌阵救阿斗的是谁?",answer:"赵云"},{question:"请问周瑜利用何人使曹操杀了蔡瑁，张允二人?",answer:"蒋干"},{question:"请问四大古典名著中的《红楼梦》是谁的作品？",answer:"曹雪芹"},{question:"请问孔明借完东风后由何人接应，而避过周瑜派人追杀?",answer:"赵云"},{question:"请问成吉思汗姓什么？",answer:"孛儿只斤"},{question:"请问成语“浑身是胆”将的是下面哪位将领?",answer:"赵云"},{question:"请问拿破仑在1794年被热月党人监禁了多少天？",answer:"14"},{question:"请问曾经当过刘备军师的「单福」其实是何人?",answer:"徐庶"},{question:"请问电脑配件中CPU是什么？",answer:"中央处理器"},{question:"请问苏联什么时候解体的",answer:"1991.12"},{question:"请问苏联是在什么时候解体的？",answer:"1991.12"},{question:"请问蜀吴两方作战中，决胜的战役是？",answer:"宜陵之战"},{question:"请问黄巾贼的老大是谁?",answer:"张角"},{question:"诸侯争霸是发生在春秋时期的一起重大的政治事件。古代曾有“春秋五霸”之说，下列谁不是五霸之一？",answer:"齐威王"},{question:"诸葛亮“躬耕陇亩”于湖北襄阳以西二十里的古隆中，度过了几个寒暑春秋。",answer:"十个"},{question:"诸葛亮与周瑜联手指挥的一场以少胜多的战例",answer:"赤壁之战"},{question:"诸葛亮临终时传授姜维的兵法是？",answer:"兵法二十四篇"},{question:"诸葛亮人称?",answer:"卧龙先生"},{question:"诸葛亮出山时多大年纪？",answer:"27"},{question:"诸葛亮初次打胜仗是在哪里？",answer:"博望坡"},{question:"诸葛亮发明的运输工具叫作?",answer:"木牛流马"},{question:"诸葛亮取了西川，论功行赏时，将有功之臣封为",answer:"五虎上将"},{question:"诸葛亮在五丈原交代后事时，托付谁主持全局工作",answer:"杨仪"},{question:"诸葛亮在五丈原交代后事时，把兵权交给了谁",answer:"姜维"},{question:"诸葛亮常自比管仲和谁?",answer:"乐毅"},{question:"诸葛亮挥泪斩马谡是因为何事.",answer:"街亭失守"},{question:"诸葛亮是哪个国家的?",answer:"中国"},{question:"诸葛亮死后蜀中的支柱是?",answer:"姜维"},{question:"诸葛亮死后，蜀国内政由何人代之?",answer:"蒋琬"},{question:"诸葛亮火烧新野时，命关公领兵多少人去白河上流头埋伏",answer:"一千人"},{question:"诸葛亮火烧新野派谁前去诱敌？",answer:"赵云"},{question:"诸葛亮的“八阵图”被谁破了？",answer:"黄承彦"},{question:"诸葛亮的父亲叫",answer:"诸葛圭"},{question:"诸葛亮的老师是？",answer:"水镜先生"},{question:"诸葛亮第六次伐魏时谁曾到营中诈降？",answer:"郑文"},{question:"诸葛亮认为某人：食其禄而杀其主，是不忠；居其土而献其地，是不义，认为其脑后有反骨，此人是",answer:"魏延"},{question:"诸葛亮隐居时常把自己比作?",answer:"管仲"},{question:"诺曼底登陆发生于1944年：",answer:"6月6日"},{question:"诺曼底登陆时，盟军的最高司令是谁：",answer:"艾森豪威尔"},{question:"诺贝尔哪一年发明雷管？",answer:"1867"},{question:"诺贝尔奖共分设多少项？",answer:"6"},{question:"谁不属于初唐四杰：",answer:"陈子昂"},{question:"谁创办了环法自行车赛?",answer:"亨利·德斯格朗吉"},{question:"谁到东吴游说周瑜，被周瑜将计就计，使曹操杀死蔡瑁张允水军两都督，",answer:"蒋干"},{question:"谁在1608年制造了世界上第一个望远镜？",answer:"伽利略"},{question:"谁娶亲路人皆知",answer:"刘备"},{question:"谁字汉升，先事刘表，后事韩玄。虽两鬓霜色，仍能抡刀斩将，引弓射贼，相传臂力惊人，箭无虚发，非廉颇之辈",answer:"黄忠"},{question:"谁收服了黄忠？",answer:"关羽"},{question:"谁是“中山装”的创始人？",answer:"孙中山"},{question:"谁是世界杯年龄最大的参赛球员？",answer:"罗杰·米拉"},{question:"谁是中国古代著名的旅行家？",answer:"徐霞客"},{question:"谁是从曹操处投到刘备处的？",answer:"王平"},{question:"谁是年龄最小的世界杯冠军？",answer:"贝利"},{question:"谁是建安文学新局面的开创者？",answer:"曹操"},{question:"谁是武圣？",answer:"关羽"},{question:"谁最先测出引力常量G",answer:"卡文迪许"},{question:"谁没有参加密杀曹操的活动？",answer:"秦庆童"},{question:"谁率领中国队第一次打入世界杯决赛阶段",answer:"米卢"},{question:"谁的心跳最快？",answer:"狗"},{question:"谁被称为“小霸王”？",answer:"孙策"},{question:"谁被誉为中国的“莎士比亚”？",answer:"关汉卿"},{question:"谁说服马超投降刘备？",answer:"李恢"},{question:'谁首创了大写金额字"壹, 贰...."',answer:"朱元璋"},{question:"豪杰是什么类型的职业?",answer:"高防型"},{question:"豪杰装备什么类型的武器?",answer:"斧头"},{question:"豹2主战坦克是西方最早装多少mm滑膛炮的坦克：",answer:"120"},{question:"貂婵的义父是谁？",answer:"王允"},{question:"贝多芬在耳聋前本希望成为：",answer:"演奏家"},{question:"贝多芬是哪国人？",answer:"德国人"},{question:"贝尔福宣言是哪个国家发表的？",answer:"英国"},{question:"财神的起源颇为难考，但财神不止一位，而且所祭祀的神明也因时因地而有所不同，有所谓“正财神”、“文财神",answer:"赵公明"},{question:'购买了"自动补给"如何才能自动给自己的角色补给?',answer:'装备"自动补给"后设置默认使用的药物'},{question:"资产阶级革命派迈出的中国民主革命的第一步是?",answer:"发动武装起义"},{question:"资本主义工场手工业时期在欧洲持续的时间是从",answer:"16世纪—18世纪下半期"},{question:"资本主义早期比较盛行的经济思想是",answer:"重商主义"},{question:"赤兔马最早主人是谁?",answer:"董卓"},{question:"赤壁之战中，假装投降以接近曹军的吴国将领是：",answer:"黄盖"},{question:"赤壁之战中，谁献策诈降曹操?",answer:"黄盖"},{question:"赤壁之战后，刘备征荆南四郡。长沙太守韩玄、桂阳太守赵范及零陵太守，以及何处太守金旋一块投降",answer:"武陵"},{question:"赤壁之战后，曹操一直在寻找机会消灭孙刘，只是怕马腾偷袭许都。于是荀攸献上什么计",answer:"翁中捉鳖计"},{question:"赤壁之战始于西元几年?",answer:"208"},{question:"赤壁之战的大功臣，有「美周郎」之称的是?",answer:"周瑜"},{question:"赴西安和平解决事变的中共领导人是：",answer:"周恩来"},{question:"赵子龙在长坂坡杀了曹操几员大将?",answer:"九个"},{question:"起源最早的保险是：",answer:"海上保险"},{question:"起诉离婚，法院判决不准离婚的，多长时间后才能再次起诉？",answer:"六个月"},{question:"足球运动在哪一年被列为奥运会比赛项目？",answer:"1900"},{question:"身上的物品已经装满了,应该找哪个NPC?",answer:"寄管小妖"},{question:"轻灵术是哪个职业的技能?",answer:"剑侍"},{question:"较早使用的活字是：",answer:"陶活字"},{question:"辛亥革命发生在哪一年：",answer:"1911年"},{question:"辽沈战役中最先解放的城市是?",answer:"锦州"},{question:"达·芬奇用了几年时间完成了《蒙娜丽莎》这幅画?",answer:"4年"},{question:"迄今为止规模最大的奥运会是哪一届？",answer:"1988年在韩国举办的第二十四届奥运会"},{question:"近代中国“开眼看世界”的第一人是",answer:"林则徐"},{question:"近代中国中央机构半殖民地化开始的标志是：",answer:"总理衙门的建立"},{question:"近代史上，出现“中国不败而败”结局的战争是",answer:"中法战争"},{question:"近代史上，最早提出在中国发展资本主义方案的是",answer:"农民革命领袖"},{question:"近代国际法诞生的标志是",answer:"威斯特法利亚和约"},{question:"近代文学作家鲁迅在中国哪个城市逝世?",answer:"上海"},{question:"近代科学形成的标志是",answer:"牛顿力学体系的建立"},{question:"近几年提出的白色农业是指：",answer:"微生物工业型农业"},{question:"进一步打开中国西南门户不平等条约是",answer:"《中法新约》"},{question:"远古时期的乐器中没有下列哪项？",answer:"笛"},{question:"连续7个月最多有多少天？",answer:"215"},{question:"连续获得三届奥运会冠军的中国运动员是哪一位？",answer:"邓亚萍"},{question:"适量补充下列哪种元素可防止粉刺？",answer:"锌"},{question:"通常情况下，下面哪一根是导体？",answer:"碳棒"},{question:"通心粉是哪国的名点",answer:"意大利"},{question:"通用公司主要制造生产哪个产品？",answer:"柴油机车"},{question:"造纸术是哪个朝代发明的？",answer:"西汉"},{question:"遇敌时，鳄鱼会用身体的哪个部分进行攻击：",answer:"尾巴"},{question:"道教是由谁创立的？",answer:"张道陵"},{question:"遭受西欧殖民者摧残和屠杀的美洲土著居民是",answer:"印第安人"},{question:"遵义会议批评揭发了第几次反围剿的错误？",answer:"第五次"},{question:"邓小平理论形成的时代要求是：",answer:"时代主题的转换和新技术革命浪潮的兴起"},{question:"邓茂死在谁的丈八蛇矛之下",answer:"张飞"},{question:"那一位君主，刘备没有去投靠?",answer:"孙坚"},{question:"那一部是三毛作品？",answer:"送你一匹马"},{question:"那一部是余秋雨作品？",answer:"道士塔"},{question:"那一部是契诃夫作品？",answer:"伊凡诺夫"},{question:"那一部是张爱玲作品？",answer:"红楼梦魇"},{question:"那一部是朱自清作品？",answer:"荷塘月色"},{question:"那一部是查尔斯·狄更斯作品？",answer:"双城记"},{question:"那一部是海岩作品？",answer:"平淡生活"},{question:"那一部是老舍作品？",answer:"骆驼祥子"},{question:"那一部是莎士比亚作品？",answer:"皆大欢喜"},{question:"那一部是金庸作品？",answer:"连城决"},{question:"那一部是高尔基作品？",answer:"童年"},{question:"那一部是鲁迅作品？",answer:"呐喊"},{question:"那个动物能轻松制服刺猬？",answer:"黄鼠狼"},{question:"那五位作曲家的《安魂曲》最著名，俗称五大安魂曲？",answer:"莫扎特、凯鲁比尼、柏辽兹、威尔第、福莱"},{question:"郑和共几次下西洋？",answer:"7"},{question:"都江堰工程的修建时期为（）时期。",answer:"战国"},{question:"酒肉无忌是哪个副职使用的合成书籍?",answer:"庖丁"},{question:"重铸之书是哪个副职使用的合成书籍?",answer:"工匠"},{question:"重阳节是缘于下列哪个历史人物",answer:"老子"},{question:"野火燎原是哪个职业的技能?",answer:"阴阳士"},{question:"金国的律典《咸雍重修条制》共有多少条文？",answer:"789"},{question:"金字塔建在尼罗河的：",answer:"西岸"},{question:"金庸小说《天龙八部》的书名有什么含义",answer:"佛教名词"},{question:"金庸小说《鸳鸯刀》中的鸳鸯双刀，一刀上刻着“无敌”，另一刀上刻着什么",answer:"仁者"},{question:"金庸小说中，被誉为武侠散文诗的是",answer:"白马啸西风"},{question:"金庸武侠中著名的“全真七子”是以现实中金朝的“北七真为原型，下列哪位属于北七真？",answer:"清净散人郝大通"},{question:"金庸的小说《射雕英雄传》中欧阳锋和欧阳克是什么关系？",answer:"父子"},{question:"金瓶梅出自哪个朝代？",answer:"明代"},{question:"金蛇狂舞是哪个职业的技能?",answer:"阴阳士"},{question:"金融业（不包括典当业、保险业）的营业税纳税期限为",answer:"1个季度"},{question:"金错刀是古代的一种：",answer:"钱币名"},{question:"钱塘江铁路公路两用桥是谁设计的？",answer:"茅以升"},{question:"铁达尼号游轮是因为遭遇了什么事件沉没的？",answer:"撞击冰山"},{question:"铅酸蓄电池单体的额定电压是：",answer:"2.0V"},{question:"铅酸蓄电池的主要原材料是：",answer:"铅"},{question:"铜雀台之名为何人所取？",answer:"曹植"},{question:"银杏属于什么种类水果？",answer:"坚果类"},{question:"银杏的叶子除了有黄绿的颜色之外，还有什么色？",answer:"墨绿色"},{question:"长庚是中国古代对哪一颗行星的称呼?",answer:"金星"},{question:"长江全长多少公里？",answer:"6300"},{question:"长篇小说〈鲁滨逊漂流记〉的作者是",answer:"笛福"},{question:"闪电是什么颜色？",answer:"白色"},{question:"问下面哪一次中东战争是由阿拉伯国家首先进攻的？",answer:"第四次"},{question:"闻名的《九朝律考》不包括下列哪项？",answer:"《北魏律考》"},{question:"闻鸡起舞的是谁",answer:"祖逖"},{question:"闽中十才子是指元代闽派诗人中的杰出代表，下列谁不属于闽中十才子？",answer:"夏侯审"},{question:"阴阳士是什么类型的职业?",answer:"高攻型"},{question:"阴阳士装备什么类型的武器?",answer:"杖"},{question:"阿司匹林最初提取于：",answer:"杨柳树皮"},{question:"阿姆斯特朗是乘哪个飞船成功登月的：",answer:"阿波罗11号"},{question:"阿姆斯特朗是乘哪个飞船成功登月的？",answer:"阿波罗11号"},{question:"阿纳姆战役是二战中美军实施的最大的一次什么战役？",answer:"空降作战"},{question:"阿诗玛是那个民族的故事？",answer:"彝族"},{question:"阿里山的姑娘是哪族民歌：",answer:"高山族"},{question:"阿里巴巴和四十大盗的故事中打开石门的咒语是",answer:"芝麻开门"},{question:"陆地上最重的哺乳类动物是什么?",answer:"大象"},{question:"陆地上最高的哺乳动物是什么?",answer:"长颈鹿"},{question:"陆游与唐婉分离后数年又在哪里重逢过",answer:"沈园"},{question:"陈桥兵变是谁发动的",answer:"赵匡胤"},{question:"降半旗是把旗子下降到距离杆顶",answer:"1/3处"},{question:"除汉字外，哪个民族有自己的文字？",answer:"蒙古族"},{question:"隋唐时期,推崇佛教广建庙宇的统治者是",answer:"隋文帝与武则天"},{question:"隋朝经历了多少年:",answer:"37年"},{question:"雕像作品《卡拉卡拉》是何种雕像？",answer:"古罗马雕像"},{question:"雷克亚未克是哪个国家首都？",answer:"冰岛"},{question:"雷电形成的瞬间电流可达：",answer:"25-50万安培"},{question:"雷达的发明是模仿：",answer:"蝙蝠"},{question:"霸王斧是哪个职业的技能?",answer:"豪杰"},{question:"霸王龙生活在哪个时期？",answer:"白垩纪"},{question:"青岛方言中的“马虎”是什么动物？",answer:"狼"},{question:"青梅煮酒时，曹操说何人色厉胆薄，好谋无断；干大事而惜身，见小利而亡命？",answer:"袁绍"},{question:"青藏公路通车时间",answer:"1954年"},{question:"青蛙的呼吸器官是？",answer:"肺和皮肤"},{question:"青铜是铜和哪种金属的合金？",answer:"锡"},{question:"鞋子除臭应在里面放些什么",answer:"醋"},{question:"韦庄《金陵图》有下列哪句？",answer:"依旧烟笼十里堤"},{question:"韩信的老家在哪里",answer:"淮阴"},{question:"韩愈《山石》没有下列哪一句？",answer:"贵戚权门得笔迹"},{question:"韩非子“法治”思想的实质是",answer:"法律是君主治理天下的工具"},{question:"音乐中能独立存在，能表达完整意思的最小单位是什么？",answer:"乐段"},{question:"音速是每秒多少米？",answer:"360"},{question:"韵文可分为哪种？",answer:"歌谣"},{question:"项羽临死诗中提到的一个女人是谁？",answer:"虞姬"},{question:"项羽在哪里自杀？",answer:"乌江"},{question:"项羽在巨鹿大败秦后，坑杀了30万秦军降卒，当时率秦军投降的主将是：",answer:"章邯"},{question:"食糖过多会导致体内哪种微量元素的缺乏？",answer:"维生素B1"},{question:"饮茶之风在全国广泛流行是在",answer:"唐朝"},{question:"饮血剑舞是哪个职业的技能?",answer:"剑侍"},{question:"馒头是何人发明的?",answer:"诸葛亮"},{question:"首届禁烟奥运会是哪届？",answer:"25届"},{question:"首次世界举重比赛举行的地点是：",answer:"咖啡馆"},{question:"首次将刑法铸在鼎上，公布成文法的人是",answer:"子产"},{question:"香港初期的死刑是用什么形式执行的？",answer:"电椅"},{question:"香港西区海底隧道在哪一年正式通车？",answer:"1997"},{question:"香蕉是几倍体",answer:"三倍体"},{question:"马戴《楚江怀古》没有下列哪一句？",answer:"近种篱边菊"},{question:"马拉多纳是在对哪支球队用上帝之手打进一球的？",answer:"英格兰"},{question:"马拉松赛跑是为纪念谁而设立的？",answer:"裴里匹底斯"},{question:"马王堆一号古墓是哪个朝代",answer:"汉"},{question:"马远是哪个朝代的画家？",answer:"宋"},{question:"骆宾王《至分陕》有下列哪句？",answer:"曳葛似攀樛"},{question:"高尔夫球起源于",answer:"英国"},{question:"高祖将三万太原亲兵作为宫城宿卫，称元从禁军。元从禁军分为五个系统，下列哪项不属于元从禁军的？",answer:"御林军"},{question:"高等教育自学考试制度是从哪一年开始在全国推广施行的？",answer:"1983年"},{question:"魏孝文帝死后，政治日益黑暗，阶级矛盾尖锐化，终于引发了各族人民大起义，下列哪个起义是发生北魏时期的？",answer:"六镇起义"},{question:"魏延放火烧了蜀军回撤的栈道，扬言要擒杀杨仪，最后还是杨仪和谁合力斩了魏延",answer:"马岱"},{question:"魏延造反结果死于何人手上?",answer:"马岱"},{question:"魏晋南北朝时期，士族享受政治特权的依据是",answer:"门第"},{question:"魏晋时期的人好吃辛辣，下列哪个不属于五辛？",answer:"胡椒"},{question:"魏晋时期的胡人有一部分是金发碧眼，下列那个民族不属于这类？",answer:"羌"},{question:"魔方是由几个小方块组成的？",answer:"26块"},{question:"鲁迅于哪一年逝世？",answer:"1936"},{question:"鲁迅发表的第一篇白话小说是",answer:"《狂人日记》"},{question:"鲁迅的早期杂文集是",answer:"《且介亭杂文》"},{question:"鲁迅逝世于?",answer:"1936.10.19"},{question:"鲁迅逝世于：",answer:"1936年10月19日"},{question:"鸡鸣狗盗是出自哪位战国公子门下",answer:"孟尝君"},{question:"鸦片战争发生在哪一年？",answer:"1840"},{question:"黄埔军校成立时，担任党代表的是？",answer:"廖仲恺"},{question:"黄巾副本多少级以上可以进？",answer:"15"},{question:"黄巾副本第一关的BOSS叫啥名字?",answer:"何曼"},{question:"黄巾副本通过哪个NPC可以进?",answer:"其他答案都是"},{question:"黄巾贼程志远为何人所杀?",answer:"关羽"},{question:"黄帝部落的图腾是什么？",answer:"熊"},{question:"黄忠原为刘表手下时和谁一同镇守长沙",answer:"刘磐"},{question:"黄忠原在荆州军阀刘表麾下任职中郎将，与刘表从子刘磐共守何地",answer:"长沙攸县"},{question:"黄河流经以下哪个省份？",answer:"青海"},{question:"黄河的源头在哪一个省？",answer:"青海"},{question:"黑色的对比色是白色,绿色的对比色是红色,那黄色的对比色是什么?",answer:"紫色"},{question:"鼎有几个“耳朵”？",answer:"2个"},{question:"龙涎香出自什么鲸？",answer:"抹香鲸"},{question:"龟的感觉中最差的是",answer:"听觉"},{question:"＂一代枭雄，宽厚仁爱，求贤若渴＂指的是谁",answer:"刘备"},{question:"＂智者和智慧的象征，清忠耿直，用人唯贤，谦虚、谨慎、认真又尽职、鞠躬尽瘁＂，指的是",answer:"诸葛亮"},{question:"＂自由女神像＂是哪个国家送给美国的礼物？",answer:"法国"}]},onChange:function(n){var e=n.detail,s=this.data.initData.filter(function(n){if(-1!==n.question.indexOf(e))return n});this.setData({data:s})},onLoad:function(n){this.setData({data:this.data.initData})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/tiku/tiku.js");
 		__wxRoute = 'pages/toolsPage/kangxing/wuzhi/wuzhi';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/kangxing/wuzhi/wuzhi.js';	define("pages/toolsPage/kangxing/wuzhi/wuzhi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("@vant/weapp/toast/toast"));Page({data:{data:[{level:1,count:1,vitality:.5,price:3},{level:2,count:1,vitality:1,price:12},{level:3,count:1,vitality:1.5,price:27},{level:4,count:1,vitality:2,price:48},{level:5,count:1,vitality:2.5,price:75},{level:6,count:1,vitality:3,price:108},{level:7,count:1,vitality:3.5,price:147},{level:8,count:1,vitality:4,price:192},{level:9,count:2,vitality:4.5,price:243},{level:10,count:2,vitality:5,price:300},{level:11,count:2,vitality:5.5,price:363},{level:12,count:2,vitality:6,price:432},{level:13,count:3,vitality:6.5,price:507},{level:14,count:3,vitality:7,price:588},{level:15,count:3,vitality:7.5,price:675},{level:16,count:3,vitality:8,price:768},{level:17,count:3,vitality:8.5,price:867},{level:18,count:5,vitality:9,price:972},{level:19,count:5,vitality:9.5,price:1083},{level:20,count:5,vitality:10,price:1200},{level:21,count:5,vitality:10.5,price:1323},{level:22,count:5,vitality:11,price:1452},{level:23,count:5,vitality:11.5,price:1587},{level:24,count:5,vitality:12,price:1728},{level:25,count:5,vitality:12.5,price:1875},{level:26,count:10,vitality:13,price:2028},{level:27,count:10,vitality:13.5,price:2187},{level:28,count:10,vitality:14,price:2352},{level:29,count:10,vitality:14.5,price:2523},{level:30,count:10,vitality:15,price:2700},{level:31,count:10,vitality:15.5,price:2883},{level:32,count:10,vitality:16,price:3072},{level:33,count:10,vitality:16.5,price:3267},{level:34,count:10,vitality:17,price:3468},{level:35,count:10,vitality:17.5,price:3675},{level:36,count:10,vitality:18,price:3888},{level:37,count:10,vitality:18.5,price:4107},{level:38,count:10,vitality:19,price:4332},{level:39,count:10,vitality:19.5,price:4563},{level:40,count:20,vitality:20,price:4800},{level:41,count:20,vitality:20.5,price:5043},{level:42,count:20,vitality:21,price:5292},{level:43,count:20,vitality:21.5,price:5547},{level:44,count:20,vitality:22,price:5808},{level:45,count:40,vitality:22.5,price:6075},{level:46,count:40,vitality:23,price:6348},{level:47,count:40,vitality:23.5,price:6627},{level:48,count:40,vitality:24,price:6912},{level:49,count:40,vitality:24.5,price:7203},{level:50,count:40,vitality:25,price:7500}],start:"",end:"",show:!1,count:"",vitality:"",price:""},start:function(t){var e=Number(this.validateInput(t.detail.value));e<0&&(e=0),e>50&&(e=50),this.setData({start:e})},end:function(t){var e=Number(this.validateInput(t.detail.value));e<0&&(e=0),e>50&&(e=50),this.setData({end:e})},validateInput:function(t){return t.replace(/[^0-9]/g,"")},calculate:function(){if(""!==this.data.start)if(""!==this.data.end)if(this.data.end<this.data.start)(0,t.default)("起始值大于结束值");else{for(var e=this.data.start,i=this.data.end,l=0,a=0,c=0,v=e;v<i;v++)l+=this.data.data[v].count,a+=this.data.data[v].vitality,c+=this.data.data[v].price;this.setData({show:!0,count:l,vitality:a,price:c})}else(0,t.default)("未填写结束值");else(0,t.default)("未填写起始值")},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/kangxing/wuzhi/wuzhi.js");
 		__wxRoute = 'pages/toolsPage/kangxing/renxing/renxing';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/kangxing/renxing/renxing.js';	define("pages/toolsPage/kangxing/renxing/renxing.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("@vant/weapp/toast/toast"));Page({data:{data:[{level:1,count:1,price:3,vitality:.5,desc:"体质增加1点，降低1.0%破甲和反击忽略护甲效果，提升1%基础生命上限，减少受到的怪物伤害1.0%"},{level:2,count:1,price:12,vitality:1,desc:"体质增加1点，降低1.1%破甲和反击忽略护甲效果，提升2%基础生命上限，减少受到的怪物伤害2.0%"},{level:3,count:1,price:27,vitality:1.5,desc:"体质增加1点，降低1.2%破甲和反击忽略护甲效果，提升3%基础生命上限，减少受到的怪物伤害3.0%"},{level:4,count:1,price:48,vitality:2,desc:"体质增加1点，降低1.3%破甲和反击忽略护甲效果，提升4%基础生命上限，减少受到的怪物伤害4.0%"},{level:5,count:1,price:50,vitality:2.5,desc:"体质增加1点，降低1.4%破甲和反击忽略护甲效果，提升5%基础生命上限，减少受到的怪物伤害5.0%"},{level:6,count:2,price:56,vitality:3,desc:"体质增加2点，降低1.5%破甲和反击忽略护甲效果，提升6%基础生命上限，减少受到的怪物伤害5.5%"},{level:7,count:2,price:63,vitality:3.5,desc:"体质增加2点，降低1.6%破甲和反击忽略护甲效果，提升7%基础生命上限，减少受到的怪物伤害6.0%"},{level:8,count:2,price:71,vitality:4,desc:"体质增加2点，降低1.7%破甲和反击忽略护甲效果，提升8%基础生命上限，减少受到的怪物伤害6.5%"},{level:9,count:2,price:108,vitality:4.5,desc:"体质增加2点，降低1.8%破甲和反击忽略护甲效果，提升9%基础生命上限，减少受到的怪物伤害7.0%"},{level:10,count:2,price:117,vitality:5,desc:"体质增加2点，降低1.9%破甲和反击忽略护甲效果，提升10%基础生命上限，减少受到的怪物伤害7.5%"},{level:11,count:3,price:127,vitality:5.5,desc:"体质增加2点，降低2.0%破甲和反击忽略护甲效果，提升11%基础生命上限，减少受到的怪物伤害7.9%"},{level:12,count:3,price:137,vitality:6,desc:"体质增加3点，降低2.1%破甲和反击忽略护甲效果，提升12%基础生命上限，减少受到的怪物伤害8.3%"},{level:13,count:3,price:177,vitality:6.5,desc:"体质增加3点，降低2.2%破甲和反击忽略护甲效果，提升13%基础生命上限，减少受到的怪物伤害8.7%"},{level:14,count:3,price:188,vitality:7,desc:"体质增加3点，降低2.3%破甲和反击忽略护甲效果，提升14%基础生命上限，减少受到的怪物伤害9.1%"},{level:15,count:5,price:200,vitality:7.5,desc:"体质增加3点，降低2.4%破甲和反击忽略护甲效果，提升15%基础生命上限，减少受到的怪物伤害9.5%"},{level:16,count:5,price:213,vitality:8,desc:"体质增加3点，降低2.5%破甲和反击忽略护甲效果，提升16%基础生命上限，减少受到的怪物伤害9.9%"},{level:17,count:5,price:227,vitality:8.5,desc:"体质增加4点，降低2.6%破甲和反击忽略护甲效果，提升17%基础生命上限，减少受到的怪物伤害10.3%"},{level:18,count:5,price:300,vitality:9,desc:"体质增加4点，降低2.7%破甲和反击忽略护甲效果，提升18%基础生命上限，减少受到的怪物伤害10.7%"},{level:19,count:5,price:315,vitality:9.5,desc:"体质增加4点，降低2.8%破甲和反击忽略护甲效果，提升19%基础生命上限，减少受到的怪物伤害11.1%"},{level:20,count:10,price:330,vitality:10,desc:"体质增加4点，降低2.9%破甲和反击忽略护甲效果，提升20%基础生命上限，减少受到的怪物伤害11.5%"},{level:21,count:10,price:346,vitality:10.5,desc:"体质增加4点，降低3.0%破甲和反击忽略护甲效果，提升21%基础生命上限，减少受到的怪物伤害11.8%"},{level:22,count:10,price:363,vitality:11,desc:"体质增加4点，降低3.1%破甲和反击忽略护甲效果，提升22%基础生命上限，减少受到的怪物伤害12.1%"},{level:23,count:10,price:380,vitality:11.5,desc:"体质增加5点，降低3.2%破甲和反击忽略护甲效果，提升23%基础生命上限，减少受到的怪物伤害12.4%"},{level:24,count:10,price:398,vitality:12,desc:"体质增加5点，降低3.3%破甲和反击忽略护甲效果，提升24%基础生命上限，减少受到的怪物伤害12.7%"},{level:25,count:10,price:417,vitality:12.5,desc:"体质增加5点，降低3.4%破甲和反击忽略护甲效果，提升25%基础生命上限，减少受到的怪物伤害13.0%"},{level:26,count:10,price:584,vitality:13,desc:"体质增加5点，降低3.5%破甲和反击忽略护甲效果，提升26%基础生命上限，减少受到的怪物伤害13.3%"},{level:27,count:20,price:604,vitality:13.5,desc:"体质增加5点，降低3.6%破甲和反击忽略护甲效果，提升27%基础生命上限，减少受到的怪物伤害13.6%"},{level:28,count:20,price:625,vitality:14,desc:"体质增加6点，降低3.7%破甲和反击忽略护甲效果，提升28%基础生命上限，减少受到的怪物伤害13.9%"},{level:29,count:20,price:646,vitality:14.5,desc:"体质增加6点，降低3.8%破甲和反击忽略护甲效果，提升29%基础生命上限，减少受到的怪物伤害14.2%"},{level:30,count:20,price:668,vitality:15,desc:"体质增加6点，降低3.9%破甲和反击忽略护甲效果，提升30%基础生命上限，减少受到的怪物伤害14.5%"},{level:31,count:20,price:691,vitality:15.5,desc:"体质增加6点，降低4.0%破甲和反击忽略护甲效果，提升31%基础生命上限，减少受到的怪物伤害14.8%"},{level:32,count:20,price:714,vitality:16,desc:"体质增加6点，降低4.1%破甲和反击忽略护甲效果，提升32%基础生命上限，减少受到的怪物伤害15.1%"},{level:33,count:20,price:738,vitality:16.5,desc:"体质增加6点，降低4.2%破甲和反击忽略护甲效果，提升33%基础生命上限，减少受到的怪物伤害15.4%"},{level:34,count:20,price:763,vitality:17,desc:"体质增加7点，降低4.3%破甲和反击忽略护甲效果，提升34%基础生命上限，减少受到的怪物伤害15.7%"},{level:35,count:20,price:788,vitality:17.5,desc:"体质增加7点，降低4.4%破甲和反击忽略护甲效果，提升35%基础生命上限，减少受到的怪物伤害16.0%"},{level:36,count:20,price:814,vitality:18,desc:"体质增加7点，降低4.5%破甲和反击忽略护甲效果，提升36%基础生命上限，减少受到的怪物伤害16.3%"},{level:37,count:20,price:840,vitality:18.5,desc:"体质增加7点，降低4.6%破甲和反击忽略护甲效果，提升37%基础生命上限，减少受到的怪物伤害16.6%"},{level:38,count:20,price:868,vitality:19,desc:"体质增加7点，降低4.7%破甲和反击忽略护甲效果，提升38%基础生命上限，减少受到的怪物伤害16.9%"},{level:39,count:20,price:895,vitality:19.5,desc:"体质增加8点，降低4.8%破甲和反击忽略护甲效果，提升39%基础生命上限，减少受到的怪物伤害17.2%"},{level:40,count:40,price:1221,vitality:20,desc:"体质增加8点，降低4.9%破甲和反击忽略护甲效果，提升40%基础生命上限，减少受到的怪物伤害17.5%"},{level:41,count:40,price:1250,vitality:20.5,desc:"体质增加8点，降低5.0%破甲和反击忽略护甲效果，提升41%基础生命上限，减少受到的怪物伤害17.7%"},{level:42,count:40,price:1280,vitality:21,desc:"体质增加8点，降低5.1%破甲和反击忽略护甲效果，提升42%基础生命上限，减少受到的怪物伤害17.9%"},{level:43,count:40,price:1311,vitality:21.5,desc:"体质增加8点，降低5.2%破甲和反击忽略护甲效果，提升43%基础生命上限，减少受到的怪物伤害18.1%"},{level:44,count:40,price:1342,vitality:22,desc:"体质增加8点，降低5.3%破甲和反击忽略护甲效果，提升44%基础生命上限，减少受到的怪物伤害18.3%"},{level:45,count:50,price:1968,vitality:22.5,desc:"体质增加9点，降低5.4%破甲和反击忽略护甲效果，提升45%基础生命上限，减少受到的怪物伤害18.5%"},{level:46,count:50,price:2e3,vitality:23,desc:"体质增加9点，降低5.5%破甲和反击忽略护甲效果，提升46%基础生命上限，减少受到的怪物伤害18.7%"},{level:47,count:50,price:2033,vitality:23.5,desc:"体质增加9点，降低5.6%破甲和反击忽略护甲效果，提升47%基础生命上限，减少受到的怪物伤害18.9%"},{level:48,count:50,price:2067,vitality:24,desc:"体质增加9点，降低5.7%破甲和反击忽略护甲效果，提升48%基础生命上限，减少受到的怪物伤害19.1%"},{level:49,count:50,price:2102,vitality:24.5,desc:"体质增加9点，降低5.8%破甲和反击忽略护甲效果，提升49%基础生命上限，减少受到的怪物伤害19.3%"},{level:50,count:50,price:2137,vitality:25,desc:"体质增加10点，降低6.0%破甲和反击忽略护甲效果，提升50%基础生命上限，减少受到的怪物伤害19.5%"}],start:"",end:"",show:!1,count:"",vitality:"",price:""},start:function(e){var t=Number(this.validateInput(e.detail.value));t<0&&(t=0),t>50&&(t=50),this.setData({start:t})},end:function(e){var t=Number(this.validateInput(e.detail.value));t<0&&(t=0),t>50&&(t=50),this.setData({end:t})},validateInput:function(e){return e.replace(/[^0-9]/g,"")},calculate:function(){if(""!==this.data.start)if(""!==this.data.end)if(this.data.end<this.data.start)(0,e.default)("起始值大于结束值");else{for(var t=this.data.start,i=this.data.end,l=0,c=0,a=0,v=t;v<i;v++)l+=this.data.data[v].count,c+=this.data.data[v].vitality,a+=this.data.data[v].price;this.setData({show:!0,count:l,vitality:c,price:a})}else(0,e.default)("未填写结束值");else(0,e.default)("未填写起始值")},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/kangxing/renxing/renxing.js");
 		__wxRoute = 'pages/toolsPage/kangxing/kangxing/kangxing';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/kangxing/kangxing/kangxing.js';	define("pages/toolsPage/kangxing/kangxing/kangxing.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("@vant/weapp/toast/toast"));Page({data:{data:[{level:1,vitality:.05,price:1},{level:2,vitality:.1,price:2},{level:3,vitality:.15,price:3},{level:4,vitality:.3,price:6},{level:5,vitality:.6,price:12},{level:6,vitality:1,price:20},{level:7,vitality:1.5,price:30},{level:8,vitality:2.3,price:46},{level:9,vitality:3.2,price:64},{level:10,vitality:4.3,price:86},{level:11,vitality:5.6,price:112},{level:12,vitality:7.2,price:144},{level:13,vitality:8.45,price:169},{level:14,vitality:9.8,price:196},{level:15,vitality:11.25,price:225},{level:16,vitality:12.8,price:256},{level:17,vitality:14.45,price:289},{level:18,vitality:16.2,price:324},{level:19,vitality:18.05,price:361},{level:20,vitality:20,price:400},{level:21,vitality:22.05,price:441},{level:22,vitality:24.2,price:484},{level:23,vitality:26.45,price:529},{level:24,vitality:28.8,price:576},{level:25,vitality:31.25,price:625},{level:26,vitality:33.8,price:676},{level:27,vitality:36.45,price:729},{level:28,vitality:39.2,price:784},{level:29,vitality:42.05,price:841},{level:30,vitality:45,price:900},{level:31,vitality:48.05,price:961},{level:32,vitality:51.2,price:1024},{level:33,vitality:54.45,price:1089},{level:34,vitality:57.8,price:1156},{level:35,vitality:61.25,price:1225},{level:36,vitality:64.8,price:1296},{level:37,vitality:68.45,price:1369},{level:38,vitality:72.2,price:1444},{level:39,vitality:76.05,price:1521},{level:40,vitality:80,price:1600},{level:41,vitality:84,price:8400},{level:42,vitality:88,price:8800},{level:43,vitality:92,price:9200},{level:44,vitality:96,price:9600},{level:45,vitality:106,price:10600},{level:46,vitality:111,price:11100},{level:47,vitality:116,price:11600},{level:48,vitality:121,price:12100},{level:49,vitality:126,price:12600},{level:50,vitality:146,price:14600}],start:"",end:"",show:!1,vitality:"",price:""},start:function(e){var i=Number(this.validateInput(e.detail.value));i<0&&(i=0),i>50&&(i=50),this.setData({start:i})},end:function(e){var i=Number(this.validateInput(e.detail.value));i<0&&(i=0),i>50&&(i=50),this.setData({end:i})},validateInput:function(e){return e.replace(/[^0-9]/g,"")},calculate:function(){if(""!==this.data.start)if(""!==this.data.end)if(this.data.end<this.data.start)(0,e.default)("起始值大于结束值");else{for(var i=this.data.start,t=this.data.end,l=0,a=0,v=i;v<t;v++)l+=this.data.data[v].vitality,a+=this.data.data[v].price;this.setData({show:!0,vitality:l,price:a})}else(0,e.default)("未填写结束值");else(0,e.default)("未填写起始值")},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/kangxing/kangxing/kangxing.js");
 		__wxRoute = 'pages/toolsPage/kangxing/kangxingwan/kangxingwan';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/kangxing/kangxingwan/kangxingwan.js';	define("pages/toolsPage/kangxing/kangxingwan/kangxingwan.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("@vant/weapp/toast/toast"));Page({data:{data:[{level:1,count:1},{level:2,count:4},{level:3,count:9},{level:4,count:16},{level:5,count:25},{level:6,count:36},{level:7,count:49},{level:8,count:64},{level:9,count:81},{level:10,count:100},{level:11,count:121},{level:12,count:144},{level:13,count:169},{level:14,count:196},{level:15,count:225},{level:16,count:256},{level:17,count:289},{level:18,count:324},{level:19,count:361},{level:20,count:400},{level:21,count:441},{level:22,count:484},{level:23,count:529},{level:24,count:576},{level:25,count:625},{level:26,count:676},{level:27,count:729},{level:28,count:784},{level:29,count:841},{level:30,count:900},{level:31,count:961},{level:32,count:1024},{level:33,count:1089},{level:34,count:1156},{level:35,count:1225},{level:36,count:1296},{level:37,count:1369},{level:38,count:1444},{level:39,count:1521},{level:40,count:1600},{level:41,count:2800},{level:42,count:2934},{level:43,count:3067},{level:44,count:3200},{level:45,count:3534},{level:46,count:3700},{level:47,count:3867},{level:48,count:4034},{level:49,count:4200},{level:50,count:4867}],start:"",end:"",show:!1,count:""},start:function(e){var t=Number(this.validateInput(e.detail.value));t<0&&(t=0),t>50&&(t=50),this.setData({start:t})},end:function(e){var t=Number(this.validateInput(e.detail.value));t<0&&(t=0),t>50&&(t=50),this.setData({end:t})},validateInput:function(e){return e.replace(/[^0-9]/g,"")},calculate:function(){if(""!==this.data.start)if(""!==this.data.end)if(this.data.end<this.data.start)(0,e.default)("起始值大于结束值");else{for(var t=this.data.start,l=this.data.end,n=0,u=t;u<l;u++)n+=this.data.data[u].count;this.setData({show:!0,count:n})}else(0,e.default)("未填写结束值");else(0,e.default)("未填写起始值")},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/kangxing/kangxingwan/kangxingwan.js");
 		__wxRoute = 'pages/toolsPage/zhuangbei/sixiang/sixiang';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/zhuangbei/sixiang/sixiang.js';	define("pages/toolsPage/zhuangbei/sixiang/sixiang.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/zhuangbei/sixiang/sixiang.js");
 		__wxRoute = 'pages/toolsPage/zhuangbei/gaizao/gaizao';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/zhuangbei/gaizao/gaizao.js';	define("pages/toolsPage/zhuangbei/gaizao/gaizao.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{data:[{title:"略微改造",limit:"无",requirement:"五个破裂之魂"},{title:"坚固",limit:"无",requirement:"五个劣质之魂"},{title:"改良",limit:"50",requirement:"五个普通之魂"},{title:"精良",limit:"50",requirement:"二普通三精致"},{title:"小精致",limit:"200",requirement:"一普通四精致"},{title:"大精致",limit:"1000",requirement:"五精致"},{title:"华丽",limit:"1000",requirement:"四精致一无暇"},{title:"小浑然天成",limit:"1W",requirement:"三精致二无暇或二精致三无暇"},{title:"大浑然天成",limit:"5W",requirement:"五无暇"},{title:"完美",limit:"5W",requirement:"四无暇一完美"},{title:"天赐",limit:"10W",requirement:"三无暇二完美"},{title:"小鬼神",limit:"20W",requirement:"二无暇三完美或一无暇四完美"},{title:"大鬼神",limit:"50W",requirement:"五完美"}]},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/zhuangbei/gaizao/gaizao.js");
 		__wxRoute = 'pages/toolsPage/yuanshen/jingcui/jingcui';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/yuanshen/jingcui/jingcui.js';	define("pages/toolsPage/yuanshen/jingcui/jingcui.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("@vant/weapp/toast/toast"));Page({data:{data:[{level:1,count:0},{level:2,count:10},{level:3,count:20},{level:4,count:30},{level:5,count:60},{level:6,count:80},{level:7,count:100},{level:8,count:140},{level:9,count:180},{level:10,count:300},{level:11,count:350},{level:12,count:400},{level:13,count:460},{level:14,count:520},{level:15,count:800},{level:16,count:880},{level:17,count:960},{level:18,count:1050},{level:19,count:2140},{level:20,count:2500}],start:"",end:"",show:!1,count:""},start:function(t){var e=Number(this.validateInput(t.detail.value));e<0&&(e=0),e>20&&(e=20),this.setData({start:e})},end:function(t){var e=Number(this.validateInput(t.detail.value));e<0&&(e=0),e>20&&(e=20),this.setData({end:e})},validateInput:function(t){return t.replace(/[^0-9]/g,"")},calculate:function(){if(""!==this.data.start)if(""!==this.data.end)if(this.data.end<this.data.start)(0,t.default)("起始值大于结束值");else{for(var e=this.data.start,a=this.data.end,l=0,n=e;n<a;n++)l+=this.data.data[n].count;this.setData({show:!0,count:l})}else(0,t.default)("未填写结束值");else(0,t.default)("未填写起始值")},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/yuanshen/jingcui/jingcui.js");
 		__wxRoute = 'pages/toolsPage/yuanshen/chengzhang/chengzhang';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/yuanshen/chengzhang/chengzhang.js';	define("pages/toolsPage/yuanshen/chengzhang/chengzhang.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{data:[[{title:"白平庸",range:"0.0000-1.1249",class:"white"},{title:"绿平庸",range:"1.1250-1.2499",class:"green"},{title:"蓝平庸",range:"1.2500-1.3749",class:"blue"},{title:"紫平庸",range:"1.3750-1.4999",class:"purple"}],[{title:"白尚可",range:"1.5000-1.6249",class:"white"},{title:"绿尚可",range:"1.6250-1.7499",class:"green"},{title:"蓝尚可",range:"1.7500-1.8749",class:"blue"},{title:"紫尚可",range:"1.8750-1.9999",class:"purple"}],[{title:"白良好",range:"2.0000-2.1249",class:"white"},{title:"绿良好",range:"2.1250-2.2499",class:"green"},{title:"蓝良好",range:"2.2500-2.3749",class:"blue"},{title:"紫良好",range:"2.3750-2.4999",class:"purple"}],[{title:"白优秀",range:"2.5000-2.6249",class:"white"},{title:"绿优秀",range:"2.6250-2.7499",class:"green"},{title:"蓝优秀",range:"2.7500-2.8749",class:"blue"},{title:"紫优秀",range:"2.8750-2.9999",class:"purple"}],[{title:"白卓越",range:"3.0000-3.1249",class:"white"},{title:"绿卓越",range:"3.1250-3.2499",class:"green"},{title:"蓝卓越",range:"3.2500-3.3749",class:"blue"},{title:"紫卓越",range:"3.3750-3.4999",class:"purple"}],[{title:"白至尊",range:"3.5000-3.6249",class:"white"},{title:"绿至尊",range:"3.6250-3.7499",class:"green"},{title:"蓝至尊",range:"3.7500-3.8749",class:"blue"},{title:"紫至尊",range:"3.8750-3.9999",class:"purple"}],[{title:"白天人",range:"4.0000-4.1249",class:"white"},{title:"绿天人",range:"4.1250-4.2499",class:"green"},{title:"蓝天人",range:"4.2500-4.3749",class:"blue"},{title:"紫天人",range:"4.3750-4.4999",class:"purple"}],[{title:"白无双",range:"4.5000-4.6249",class:"white"},{title:"绿无双",range:"4.6250-4.7499",class:"green"},{title:"蓝无双",range:"4.7500-4.8749",class:"blue"},{title:"紫无双",range:"4.8750-4.9999",class:"purple"}],[{title:"白修罗",range:"5.0000-5.1875",class:"white"},{title:"绿修罗",range:"5.1875-5.3125",class:"green"},{title:"蓝修罗",range:"5.3125-5.4375",class:"blue"},{title:"紫修罗",range:"5.4375-5.5625",class:"purple"}]]},onLoad:function(e){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/yuanshen/chengzhang/chengzhang.js");
 		__wxRoute = 'pages/toolsPage/yuanshen/baicai/baicai';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/yuanshen/baicai/baicai.js';	define("pages/toolsPage/yuanshen/baicai/baicai.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("@vant/weapp/toast/toast"));Page({data:{data:[{level:40,count:1},{level:41,count:1},{level:42,count:1},{level:43,count:1},{level:44,count:1},{level:45,count:1},{level:46,count:1},{level:47,count:1},{level:48,count:2},{level:49,count:2},{level:50,count:2},{level:51,count:2},{level:52,count:2},{level:53,count:2},{level:54,count:2},{level:55,count:2},{level:56,count:2},{level:57,count:2},{level:58,count:2},{level:59,count:2},{level:60,count:2},{level:61,count:2},{level:62,count:2},{level:63,count:2},{level:64,count:3},{level:65,count:3},{level:66,count:3},{level:67,count:3},{level:68,count:3},{level:69,count:3},{level:70,count:3},{level:71,count:3},{level:72,count:3},{level:73,count:4},{level:74,count:4},{level:75,count:4},{level:76,count:5},{level:77,count:5},{level:78,count:6},{level:79,count:6},{level:80,count:7},{level:81,count:8},{level:82,count:8},{level:83,count:9},{level:84,count:10},{level:85,count:12},{level:86,count:13},{level:87,count:14},{level:88,count:16},{level:89,count:17},{level:90,count:19},{level:91,count:24},{level:92,count:28},{level:93,count:32},{level:94,count:38},{level:95,count:44},{level:96,count:52},{level:97,count:70},{level:98,count:91},{level:99,count:118},{level:100,count:153},{level:101,count:199},{level:102,count:218},{level:103,count:236},{level:104,count:248},{level:105,count:260},{level:106,count:299},{level:107,count:323},{level:108,count:339},{level:109,count:373},{level:110,count:395},{level:111,count:419},{level:112,count:665},{level:113,count:704},{level:114,count:754},{level:115,count:788},{level:116,count:912},{level:117,count:1229},{level:118,count:1318},{level:119,count:1385},{level:120,count:1474},{level:121,count:1530},{level:122,count:1716},{level:123,count:1732},{level:124,count:1748},{level:125,count:1764},{level:126,count:1781},{level:127,count:1997},{level:128,count:2016},{level:129,count:2035},{level:130,count:2054},{level:131,count:2111},{level:132,count:2353},{level:133,count:2375},{level:134,count:2398},{level:135,count:2420},{level:136,count:2443},{level:137,count:2945},{level:138,count:3056},{level:139,count:3170},{level:140,count:3288},{level:141,count:3411}],start:"",end:"",show:!1,count:""},start:function(e){var l=Number(this.validateInput(e.detail.value));l<0&&(l=0),l>141&&(l=141),this.setData({start:l})},end:function(e){var l=Number(this.validateInput(e.detail.value));l<0&&(l=0),l>141&&(l=141),this.setData({end:l})},validateInput:function(e){return e.replace(/[^0-9]/g,"")},calculate:function(){if(""!==this.data.start)if(""!==this.data.end)if(this.data.end<this.data.start)(0,e.default)("起始值大于结束值");else{for(var l=this.data.start<40?-1:this.data.start-40,t=this.data.end<40?0:this.data.end-40,n=0,u=l+1;u<=t;u++)n+=this.data.data[u].count;this.setData({show:!0,count:n})}else(0,e.default)("未填写结束值");else(0,e.default)("未填写起始值")},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/yuanshen/baicai/baicai.js");
 		__wxRoute = 'pages/toolsPage/zinv/tianfen/tianfen';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/zinv/tianfen/tianfen.js';	define("pages/toolsPage/zinv/tianfen/tianfen.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/zinv/tianfen/tianfen.js");
 		__wxRoute = 'pages/toolsPage/zinv/xingge/xingge';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/zinv/xingge/xingge.js';	define("pages/toolsPage/zinv/xingge/xingge.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/zinv/xingge/xingge.js");
 		__wxRoute = 'pages/toolsPage/zinv/chengben/chengben';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/toolsPage/zinv/chengben/chengben.js';	define("pages/toolsPage/zinv/chengben/chengben.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}Page({data:{beidong:[],zhudong:[],levelOptions:[1,2,3,4,5,6,7,8,9,10],yixingLevel:[1,3,5,7,10,2,5,8,12,16],erxingLevel:[1,3,5,7,10,3,7,12,18,25],sanxingLevel:[2,5,9,14,20,5,11,19,30,46],zhudongYixingLevel:[3,6,15,33,72],zhudongErxingLevel:[6,24,60,120,264],zhudongSanxingLevel:[28,112,280,560,1232],zhudongLevelOptions:[1,2,3,4,5],zinvLevel:[{level:16,count:1.5},{level:17,count:3.25},{level:18,count:5.25},{level:19,count:7.5},{level:20,count:10},{level:21,count:12.75},{level:22,count:15.75},{level:23,count:19.05},{level:24,count:22.65},{level:25,count:26.55},{level:26,count:30.75},{level:27,count:35.25},{level:28,count:40.05},{level:29,count:45.15},{level:30,count:50.55},{level:31,count:56.25},{level:32,count:62.25},{level:33,count:68.55},{level:34,count:75.15},{level:35,count:82.05},{level:36,count:89.25},{level:37,count:96.75},{level:38,count:104.55},{level:39,count:112.65},{level:40,count:121.05},{level:41,count:129.75},{level:42,count:138.75},{level:43,count:148.05},{level:44,count:157.65},{level:45,count:167.55},{level:46,count:5.1},{level:47,count:10.35},{level:48,count:15.85},{level:49,count:21.6},{level:50,count:27.6},{level:51,count:33.85},{level:52,count:40.35},{level:53,count:47.1},{level:54,count:54.1},{level:55,count:61.35},{level:56,count:68.85},{level:57,count:76.6},{level:58,count:84.6},{level:59,count:92.85},{level:60,count:101.35},{level:61,count:110.1},{level:62,count:119.1},{level:63,count:128.35},{level:64,count:137.85},{level:65,count:147.6},{level:66,count:157.6},{level:67,count:168.1},{level:68,count:179.1},{level:69,count:190.6},{level:70,count:202.6},{level:71,count:215.1},{level:72,count:228.1},{level:73,count:241.6},{level:74,count:255.6},{level:75,count:270.1},{level:76,count:285.1},{level:77,count:300.6},{level:78,count:316.6},{level:79,count:333.1},{level:80,count:350.1},{level:81,count:367.6},{level:82,count:385.6},{level:83,count:404.1},{level:84,count:423.1},{level:85,count:442.6},{level:86,count:462.6},{level:87,count:483.35},{level:88,count:504.85},{level:89,count:527.1},{level:90,count:550.1},{level:91,count:573.85},{level:92,count:598.35},{level:93,count:623.6},{level:94,count:649.6},{level:95,count:676.35},{level:96,count:703.85},{level:97,count:732.35},{level:98,count:761.85},{level:99,count:792.35},{level:100,count:823.85},{level:101,count:856.35},{level:102,count:889.85},{level:103,count:924.35},{level:104,count:959.85},{level:105,count:996.35},{level:106,count:1033.85},{level:107,count:1072.35},{level:108,count:1111.85},{level:109,count:1152.35},{level:110,count:1193.85},{level:111,count:1236.35},{level:112,count:1280.1},{level:113,count:1325.1},{level:114,count:1371.35},{level:115,count:1418.85},{level:116,count:1467.6},{level:117,count:1517.6},{level:118,count:1569.1},{level:119,count:1622.1},{level:120,count:1676.6},{level:121,count:1732.6},{level:122,count:1790.1},{level:123,count:1850.1},{level:124,count:1912.6},{level:125,count:1977.6},{level:126,count:2045.1},{level:127,count:2115.1},{level:128,count:2187.6},{level:129,count:2262.6},{level:130,count:2340.1}],zinvdengji:"",bobantang:"",xisuijinduIndex:"",xisuijinduOptions:[8e3,1e4,12e3,14e3,16e3,18e3,2e4,22e3,24e3,26e3,28e3,3e4,32e3,34e3,36e3,38e3,4e4,"42000以上或满"],xisuidanCount:[5,20,40,60,80,100,125,155,185,215,245,275,305,335,365,395,435,460],xisuidan:"",xiangmo:"",jingmo:"",tongzi:"",dialogVisible:!1,beidongres:0,kaikeres:0,zhudongres:0,dengjires:0,mianhuatangres:0,bobantangres:0,xisuires:0,hejires:0},bindMultiPickerChange:function(n){"number"!=typeof n.detail.value[1]&&(n.detail.value[1]=0);var l=n.target.dataset.index,t="beidong"==n.target.dataset.type?"beidong["+l+"].multiIndex":"zhudong["+l+"].multiIndex";this.setData(e({},t,n.detail.value))},bindMultiPickerColumnChange:function(n){var l=n.target.dataset.index,t={beidongOptions:this.data.beidong[l].beidongOptions};if(0==n.detail.column){var i;switch(n.detail.value){case 0:t.beidongOptions[1]=["蛊虫","震心","强体","附骨","炉鼎","良方","敢战","破军","速判"];break;case 1:t.beidongOptions[1]=["齐心","坚志","明光","不染","舌辩","七宝","击破","苦修","亢龙","八卦","聚念","乘胜","龟甲","借势"];break;case 2:t.beidongOptions[1]=["同心","协力","五鬼","锋刃","金蚕","奔雷","雏凤","复用","勘破","奇门","翔龙","藤甲","蛮勇","再造","蓄谋","立言","连营","结丹"]}var o="beidong["+l+"].beidongOptions",u="beidong["+l+"].multiIndex";this.setData((i={},e(i,o,t.beidongOptions),e(i,u,[n.detail.value,0]),i))}},zhudongMultiPickerChange:function(n){var l="zhudong["+n.target.dataset.index+"].multiIndex";this.setData(e({},l,n.detail.value))},zhudongMultiPickerColumnChange:function(n){var l=n.target.dataset.index,t={zhudongOptions:this.data.zhudong[l].zhudongOptions};if(0==n.detail.column){var i;switch(n.detail.value){case 0:t.zhudongOptions[1]=["雷光刃","裂地击","幻痛矢","冰柱震","紫电落","玄黄胄","清晖洒","缚灵吼","冰魄盾"];break;case 1:t.zhudongOptions[1]=["御剑落","三昧甲","绿沼陷","地裂突","雷箭落","桂魄泉","润物灵","火山裂"];break;case 2:t.zhudongOptions[1]=["破阵斩","燃魂吼","虎幻破","浑天牢","艮灵","噤声破","噬神箭","解束咒","夺魂狱","软节拂","广寒力","乾魄","惊惧","地裂突·坤","雷箭落·震","火山裂·离"]}var o="zhudong["+l+"].zhudongOptions",u="zhudong["+l+"].multiIndex";this.setData((i={},e(i,o,t.zhudongOptions),e(i,u,[n.detail.value,0]),i))}},levelPickerChange:function(n){var l=n.target.dataset.index,t="beidong"==n.target.dataset.type?"beidong["+l+"].levelIndex":"zhudong["+l+"].levelIndex";this.setData(e({},t,n.detail.value))},addBeidong:function(){var e={levelIndex:0,multiIndex:"",beidongOptions:[["一星","二星","三星"],["蛊虫","震心","强体","附骨","炉鼎","良方","敢战","破军","速判"]]},n=this.data.beidong;n.push(e),this.setData({beidong:n})},addZhudong:function(){var e={levelIndex:0,multiIndex:"",zhudongOptions:[["一星","二星","三星"],["雷光刃","裂地击","幻痛矢","冰柱震","紫电落","玄黄胄","清晖洒","缚灵吼","冰魄盾"]]},n=this.data.zhudong;n.push(e),this.setData({zhudong:n})},changeXisuijindu:function(e){this.setData({xisuijinduIndex:e.detail.value})},calculate:function(){var e=0,n=0,l=0,t=0,i=0,o=this.data.xiangmo,u=this.data.mianhuatangres,a=this.data.bobantangres,v=this.data.bobantang,d=this.data.xisuijinduIndex,c=this.data.xisuidan,s=this.data.jingmo,g=this.data.tongzi,h=this.data.yixingLevel,r=this.data.erxingLevel,x=this.data.sanxingLevel,b=this.data.zhudongYixingLevel,z=this.data.zhudongErxingLevel,I=this.data.zhudongSanxingLevel;this.data.beidong.forEach(function(n){if(n.multiIndex){var t=n.multiIndex[0];if(0==t)if(n.levelIndex<5)e+=(57+o)*h[n.levelIndex];else{var i=10*(57+o);e+=(57+3*o)*h[n.levelIndex]+i}else if(1==t){var u=0==n.multiIndex[1]?0:500+6*g;if(l+=u,n.levelIndex<5)e+=(95+3*o)*r[n.levelIndex];else{var a=10*(95+3*o);e+=(95+2*s)*r[n.levelIndex]+a}}else if(2==t){var v=0==n.multiIndex[1]?0:1e3+20*g;if(l+=v,n.levelIndex<5)e+=(190+3*s)*x[n.levelIndex];else{var d=20*(190+3*s);e+=(190+7*s)*x[n.levelIndex]+d}}}}),this.data.zhudong.forEach(function(e){if(e.multiIndex){var l=e.multiIndex[0];0==l?n+=g*b[e.levelIndex]:1==l?n+=g*z[e.levelIndex]:2==l&&(n+=g*I[e.levelIndex])}});var f=this.data.zinvdengji,p=f<=45&&f>=16?v/2:v;f<=45&&f>=16?t+=(u=this.data.zinvLevel[f-16].count)*p+300:f>45&&(t+=(u=this.data.zinvLevel[29].count)*p/2,t+=(a=this.data.zinvLevel[f-16].count)*p+300),d&&(i+=this.data.xisuidanCount[d]*(c+30)),this.setData({dialogVisible:!0,beidongres:e,kaikeres:l,zhudongres:n,dengjires:t,mianhuatangres:u,bobantangres:a,xisuires:i})},zinvdengji:function(e){var n=Number(this.validateInput(e.detail.value));n<0&&(n=0),n>130&&(n=130),this.setData({zinvdengji:n})},changeInput:function(n){var l=n.target.dataset.type,t=Number(this.validateInput(n.detail.value));t<0&&(t=0),this.setData(e({},l,t))},validateInput:function(e){return e.replace(/[^0-9]/g,"")},onLoad:function(e){for(var n=0;n<12;n++)this.addBeidong();for(var l=0;l<4;l++)this.addZhudong()},onShareAppMessage:function(){}}); 
 			}); 	require("pages/toolsPage/zinv/chengben/chengben.js");
 		__wxRoute = 'pages/instructions/instructions';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/instructions/instructions.js';	define("pages/instructions/instructions.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n=getApp();Page({data:{data:[]},onLoad:function(n){},onReady:function(){},onShow:function(){this.setData({data:n.globalData.useMessage})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/instructions/instructions.js");
 		__wxRoute = 'pages/boothDetail/boothDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/boothDetail/boothDetail.js';	define("pages/boothDetail/boothDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}getApp();Page({data:{boothData:[]},onLoad:function(){var t=wx.getStorageSync("boothData");this.setData({boothData:t})},clickBoothItem:function(a){var e=a.currentTarget.dataset.index;this.data.boothData[e]["属性"]&&this.setData(t({},"boothData["+e+"].showAttr",!this.data.boothData[e].showAttr))},onShareAppMessage:function(){}}); 
 			}); 	require("pages/boothDetail/boothDetail.js");
 	