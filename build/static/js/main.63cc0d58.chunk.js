(this.webpackJsonpgeography_app=this.webpackJsonpgeography_app||[]).push([[0],{154:function(e,t){},244:function(e,t){},245:function(e,t){},269:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(28),a=n.n(o),s=n(3),c=n(2),i=n(20),u=n(14),d=n(13),l=n(30),b=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"validateSession",value:function(t,n){var r=e._getReducer(t).usuarioLog;return r||(n||s.k.replace("carga"),null)}},{key:"login",value:function(e){var t={service:_.ServiceName,component:"usuario",version:"2.0",type:"login",estado:"cargando",data:e};l.a.send(t)}}]),e}();b._getReducer=function(e){return e.state[L.component+"Reducer"]},b.getError=function(e,t){return"error"==t.state.usuarioReducer.estado&&t.state.usuarioReducer.type==e?(t.state.usuarioReducer.estado="",t.state.usuarioReducer.error):null},b.getAll=function(e){var t=b._getReducer(e),n=t.data;return n||("cargando"==t.estado||l.a.send({service:_.ServiceName,component:L.component,version:L.version,type:"getAll",estado:"cargando",key_usuario:"",cabecera:"usuario_app"}),null)},b.getByKey=function(e,t){var n=b.getAll(t);return n?n[e]:null},b.registro=function(e,t){l.a.send({service:_.ServiceName,component:L.component,version:L.version,type:"registro",estado:"cargando",key_rol:"1c09542d-4146-4d2e-9f88-48b093c74216",key_usuario:"",cabecera:"usuario_app",data:e})},b.editar=function(e,t){l.a.send({service:_.ServiceName,component:L.component,version:L.version,type:"editar",estado:"cargando",key_usuario:"",cabecera:"usuario_app",data:e})},b.eliminar=function(e,t){l.a.send({service:_.ServiceName,component:L.component,version:L.version,type:"editar",estado:"cargando",key_usuario:"",cabecera:"usuario_app",data:Object(c.a)(Object(c.a)({},e),{},{estado:0})})},b.recuperarPass=function(e,t){l.a.send({service:_.ServiceName,component:L.component,type:"recuperarPass",estado:"cargando",data:e.Correo})},b.verificarCodigoPass=function(e,t){l.a.send({service:_.ServiceName,component:L.component,type:"verificarCodigoPass",estado:"cargando",data:e.Codigo})},b.cambiarPassByCodigo=function(e,t){l.a.send({service:_.ServiceName,component:L.component,type:"cambiarPassByCodigo",estado:"cargando",data:e.Password,usuario_recuperado:t.state.usuarioReducer.usuarioRecuperado})};var j,p=function(e,t){switch(t.type){case"getAll":return h(e,t);case"registro":return f(e,t);case"editar":return g(e,t);case"getById":return m(e,t);case"login":return O(e,t);case"recuperarPass":return y(e,t);case"verificarCodigoPass":return x(e,t)}},h=function(e,t){"exito"==t.estado&&(e.data=t.data)},f=function(e,t){"exito"==t.estado&&e.data&&(e.data[t.data.key]=t.data)},g=function(e,t){"exito"==t.estado&&e.data&&(e.data[t.data.key]=t.data)},m=function(e,t){"exito"==t.estado&&(e.data[t.data.key]=t.data)},O=function(e,t){"exito"===t.estado&&(e.usuarioLog=t.data,s.r.setItem("usr_log",JSON.stringify(t.data)),e.login=t.data)},y=function(e,t){"exito"==t.estado&&e.data&&(e.data[t.data.key]=t.data)},x=function(e,t){"exito"===t.estado&&(e.usuarioRecuperado=t.data)},v=n(18),k=n(17),w=n(24),A=n(4),C=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(d.a)(n,[{key:"getContent",value:function(){var e=L.Actions.getAll(this.props);return e?Object(A.jsx)(s.s,{header:[{key:"index",label:"#",width:50},{key:"CI",label:"CI",width:150},{key:"Nombres",label:"Nombres",width:150},{key:"Apellidos",label:"Apellidos",width:150},{key:"Correo",label:"Correo",width:150,order:"asc"},{key:"Telefono",label:"Telefono",width:150},{key:"key-editar",label:"Editar",width:50,center:!0,component:function(e){return Object(A.jsxs)(s.w,{onPress:function(){s.k.navigate(L.component+"/registro",{key:e})},children:[" ",Object(A.jsx)(s.f,{name:"Edit",width:35})]})}},{key:"key",label:"Roles",width:50,center:!0,component:function(e){return Object(A.jsxs)(s.w,{onPress:function(){s.k.navigate("")},children:[" ",Object(A.jsx)(s.f,{name:"Ajustes",width:35})]})}}],data:e,limit:50}):Object(A.jsx)(s.i,{})}},{key:"render",value:function(){return Object(A.jsxs)(s.m,{title:"Lista de "+L.component,disableScroll:!0,center:!0,children:[this.getContent(),Object(A.jsx)(s.a,{type:"float",onPress:function(){s.k.navigate(L.component+"/registro")},children:Object(A.jsx)(s.f,{name:"Add",height:50})})]})}}]),n}(r.Component),R=Object(w.b)((function(e){return{state:e}}))(C),P=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r.key=s.k.getParam("key"),r}return Object(d.a)(n,[{key:"getContent",value:function(){var e=this;return this.usr={},this.key&&(this.usr=L.Actions.getByKey(this.key,this.props),!this.usr)?Object(A.jsx)(s.i,{}):Object(A.jsx)(s.c,{ref:function(t){e.form=t},col:"xs-11 sm-9 md-7 lg-5 xl-4",inputProps:{customStyle:"calistenia"},inputs:{Nombres:{label:"Nombres",isRequired:!0,defaultValue:this.usr.Nombres},Apellidos:{label:"Apellidos",isRequired:!0,defaultValue:this.usr.Apellidos},Correo:{label:"Correo",isRequired:!0,defaultValue:this.usr.Correo},Telefono:{label:"Telefono",defaultValue:this.usr.Telefono?this.usr.Telefono:" ",type:"phone"},Password:{label:"Password",isRequired:!0,type:"password",defaultValue:this.usr.Password}},onSubmit:function(t){e.key?L.Actions.editar(Object(c.a)(Object(c.a)({},e.usr),t),e.props):L.Actions.registro(t,e.props)}})}},{key:"render",value:function(){var e=this,t=this.props.state.usuarioReducer;return"registro"==t.type&&"exito"==t.estado&&s.n.alert("exito"),"editar"==t.type&&"exito"==t.estado&&s.n.alert("exito"),"registro"==t.type&&"error"==t.estado&&(t.estado="",s.n.alert(JSON.stringify(t.error))),Object(A.jsxs)(s.m,{title:"Registro de "+L.component,center:!0,children:[Object(A.jsx)(s.w,{height:30}),this.getContent(),Object(A.jsx)(s.e,{height:25}),Object(A.jsx)(s.a,{style:{color:"#fff"},props:{type:"outline"},onPress:function(){e.form.submit()},children:this.key?"Editar":"Registrar"})]})}}]),n}(r.Component),S=Object(w.b)((function(e){return{state:e}}))(P),B=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r.key=s.k.getParam("key"),r}return Object(d.a)(n,[{key:"getForm",value:function(){var e=this;return Object(A.jsx)(s.c,{ref:function(t){e.form=t},row:!0,style:{justifyContent:"space-between"},inputProps:{col:"xs-12",customStyle:"calistenia"},inputs:{Correo:{placeholder:"Ingrese su correo electr\xf3nico",type:"email",isRequired:!0}},onSubmit:function(t){L.Actions.recuperarPass(t,e.props)}})}},{key:"render",value:function(){var e=this;return L.Actions.getError("recuperarPass",this.props)&&s.n.alert("Usuario no encontrado, Verifique sus datos."),"exito"==this.props.state.usuarioReducer.estado&&"recuperarPass"==this.props.state.usuarioReducer.type&&(this.props.state.usuarioReducer.estado="",s.k.navigate(L.component+"/codigoRecuperarContrasena")),Object(A.jsx)(s.m,{title:"Recuperar Contrase\xf1a",children:Object(A.jsx)(s.w,{center:!0,children:Object(A.jsxs)(s.w,{col:"xs-11 md-6 xl-4",center:!0,children:[Object(A.jsx)(s.w,{height:40}),Object(A.jsx)(s.t,{fontSize:16,center:!0,children:"Le enviaremos un mensaje para configurar o restablecer su nueva contrase\xf1a. "}),Object(A.jsx)(s.w,{height:40}),this.getForm(),Object(A.jsx)(s.w,{height:16}),Object(A.jsx)(s.w,{col:"xs-11",row:!0,center:!0,children:Object(A.jsx)(s.a,{type:"outline",center:!0,props:{},onPress:function(){e.form.submit()},children:"ENVIAR"})}),Object(A.jsx)(s.w,{height:36})]})})})}}]),n}(r.Component),E=Object(w.b)((function(e){return{state:e}}))(B),I=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(d.a)(n,[{key:"getForm",value:function(){var e=this;return Object(A.jsx)(s.c,{ref:function(t){e.form=t},props:{col:"xs-12"},inputProps:{customStyle:"calistenia",separation:16},inputs:{usuario:{placeholder:"E-mail",isRequired:!0,keyboardType:"email-address",autoCapitalize:"none",type:"email",autoFocus:!0,onKeyPress:function(t){"Enter"===t.key&&e.form.focus("password")}},password:{placeholder:"Contrase\xf1a",type:"password",isRequired:!0,onKeyPress:function(t){"Enter"===t.key&&e.form.submit()}}},onSubmit:function(t){t&&L.Actions.login(t,e.props)}})}},{key:"render",value:function(){var e=this,t=this.props.state[L.component+"Reducer"];return t.usuarioLog&&s.k.replace("carga"),"login"==t.type&&"error"==t.estado&&(t.estado="",s.n.alert("Error")),Object(A.jsx)(s.m,{title:"Login "+L.component,center:!0,hidden:!0,children:Object(A.jsx)(s.w,{center:!0,col:"xs-12",children:Object(A.jsxs)(s.w,{col:"xs-11 md-6 xl-4",center:!0,children:[Object(A.jsx)(s.e,{height:32}),Object(A.jsx)(s.w,{col:"xs-11",height:140,children:Object(A.jsx)(s.f,{name:"Logo",fill:s.u.color.lightBlack,stroke:s.u.color.lightBlack})}),Object(A.jsx)(s.w,{height:32}),this.getForm(),Object(A.jsx)(s.w,{height:16}),Object(A.jsx)(s.w,{col:"xs-12",flex:!0,height:!0,style:{alignItems:"flex-end"},children:Object(A.jsx)(s.t,{style:{textDecoration:"underline"},fontSize:14,color:s.u.color.secondary,onPress:function(){s.k.navigate(L.component+"/recuperarContrasena")},children:"\xbfOlvidaste tu email o contrase\xf1a?"})}),Object(A.jsx)(s.w,{height:30}),Object(A.jsx)(s.w,{col:"xs-11",row:!0,center:!0,children:Object(A.jsx)(s.a,{type:"outline",onPress:function(){e.form.submit()},children:"INICIAR"})}),Object(A.jsx)(s.w,{col:"xs-11",height:50,row:!0,center:!0,children:Object(A.jsxs)(s.w,{flex:!0,center:!0,height:20,row:!0,children:[Object(A.jsx)(s.t,{fontSize:14,color:s.u.color.lightBlack,children:"\xbfNo tienes una cuenta?  "}),Object(A.jsx)(s.t,{fontSize:14,style:{textDecorationLine:"underline"},color:s.u.color.secondary,onPress:function(){s.k.navigate(L.component+"/registro")},children:"REGISTRATE"})]})}),Object(A.jsx)(s.w,{height:30})]})})})}}]),n}(r.Component),N=Object(w.b)((function(e){return{state:e}}))(I),T=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(d.a)(n,[{key:"getForm",value:function(){var e=this;return Object(A.jsx)(s.c,{ref:function(t){e.form=t},row:!0,style:{justifyContent:"space-between"},inputProps:{col:"xs-12",customStyle:"calistenia"},inputs:{Codigo:{label:"Ingrese el c\xf3digo recibido",type:"text",isRequired:!0}},onSubmit:function(t){L.Actions.verificarCodigoPass(t,e.key_rol,e.props)}})}},{key:"render",value:function(){var e=this;return L.Actions.getError("verificarCodigoPass",this.props)&&s.n.alert("\xa1C\xf3digo incorrecto!"),"exito"==this.props.state.usuarioReducer.estado&&"verificarCodigoPass"==this.props.state.usuarioReducer.type&&(this.props.state.usuarioReducer.estado="",s.k.navigate(L.component+"/nuevaContrasena")),Object(A.jsx)(s.m,{title:"C\xf3digo de Recuperaci\xf3n",children:Object(A.jsx)(s.w,{center:!0,children:Object(A.jsxs)(s.w,{col:"xs-11 md-6 xl-4",center:!0,children:[Object(A.jsx)(s.w,{height:40}),Object(A.jsx)(s.t,{fontSize:24,center:!0,children:"\xa1Mensaje Enviado!"}),Object(A.jsx)(s.w,{height:10}),Object(A.jsx)(s.t,{fontSize:16,center:!0,children:"Revise su bandeja de entrada e introduzca el c\xf3digo recibido. "}),Object(A.jsx)(s.w,{height:40}),this.getForm(),Object(A.jsx)(s.w,{height:16}),Object(A.jsx)(s.w,{col:"xs-11",row:!0,center:!0,children:Object(A.jsx)(s.a,{type:"outline",onPress:function(){e.form.submit()},children:"VERIFICAR"})}),Object(A.jsx)(s.w,{height:36})]})})})}}]),n}(r.Component),M=Object(w.b)((function(e){return{state:e}}))(T),V=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(d.a)(n,[{key:"getForm",value:function(){var e=this;return Object(A.jsx)(s.c,{ref:function(t){e.form=t},row:!0,style:{justifyContent:"space-between"},inputProps:{col:"xs-12",customStyle:"calistenia"},inputs:{Password:{label:"Introduce tu nueva contrase\xf1a",isRequired:!0,type:"password"},RepPassword:{label:"Confirma tu nueva contrase\xf1a",type:"password",isRequired:!0}},onSubmit:function(t){L.Actions.cambiarPassByCodigo(t,e.props)}})}},{key:"render",value:function(){var e=this;return this.props.state.usuarioReducer.usuarioRecuperado||s.k.goBack(),"exito"==this.props.state.usuarioReducer.estado&&"cambiarPassByCodigo"==this.props.state.usuarioReducer.type&&(this.props.state.usuarioReducer.estado="",s.k.navigate("login")),Object(A.jsx)(s.m,{title:"Registrar nueva contrase\xf1a",children:Object(A.jsx)(s.w,{center:!0,children:Object(A.jsxs)(s.w,{col:"xs-11 md-6 xl-4",center:!0,children:[Object(A.jsx)(s.w,{height:40}),Object(A.jsx)(s.t,{fontSize:24,font:"LondonTwo",center:!0,children:"\xa1Restablece tu contrase\xf1a!"}),Object(A.jsx)(s.w,{height:30}),Object(A.jsx)(s.t,{fontSize:18,children:this.props.state.usuarioReducer.usuarioRecuperado.correo}),Object(A.jsx)(s.w,{height:30}),this.getForm(),Object(A.jsx)(s.w,{height:30}),Object(A.jsx)(s.w,{col:"xs-11",row:!0,center:!0,children:Object(A.jsx)(s.a,{type:"outline",props:{},onPress:function(){e.form.submit()},children:"RESTABLECER"})}),Object(A.jsx)(s.w,{height:36})]})})})}}]),n}(r.Component),z=Object(w.b)((function(e){return{state:e}}))(V),D=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(d.a)(n,[{key:"getContent",value:function(){var e=L.Actions.getAll(this.props);return e?Object(A.jsx)(s.s,{header:[{key:"index",label:"#",width:50},{key:"CI",label:"CI",width:150},{key:"Nombres",label:"Nombres",width:150},{key:"Apellidos",label:"Apellidos",width:150},{key:"Correo",label:"Correo",width:150,order:"asc"},{key:"Telefono",label:"Telefono",width:150},{key:"key-select",label:"Seleccionar",width:50,center:!0,component:function(e){return Object(A.jsxs)(s.w,{onPress:function(){var t=s.k.getParam("onSelect");t&&t(e),s.k.goBack()},children:[" ",Object(A.jsx)(s.f,{name:"Add",width:35})]})}}],data:e,limit:20}):Object(A.jsx)(s.i,{})}},{key:"render",value:function(){return Object(A.jsxs)(s.m,{title:"Selecciona el "+L.component,disableScroll:!0,center:!0,children:[this.getContent(),Object(A.jsx)(s.a,{type:"float",onPress:function(){s.k.navigate(L.component+"/registro")},children:Object(A.jsx)(s.f,{name:"Add",height:50})})]})}}]),n}(r.Component),F=Object(w.b)((function(e){return{state:e}}))(D),Y="usuario",L={component:Y,version:"2.0",Actions:b,Reducers:Object(i.a)({},Y+"Reducer",(function(e,t){return e?t.component!=L.component?e:(p(e,t),e.type=t.type,e.estado=t.estado,e.error=t.error,e.lastSend=new Date,e=Object(c.a)({},e)):function(){var e={component:L.component,version:L.version};return s.r.getItem("usr_log",(function(t){e.usuarioLog=JSON.parse(t)})),e}()})),Pages:(j={},Object(i.a)(j,Y,R),Object(i.a)(j,Y+"/registro",S),Object(i.a)(j,Y+"/recuperarContrasena",E),Object(i.a)(j,Y+"/codigoRecuperarContrasena",M),Object(i.a)(j,Y+"/nuevaContrasena",z),Object(i.a)(j,Y+"/select",F),Object(i.a)(j,"login",N),j)},Q=Object(d.a)((function e(){Object(u.a)(this,e)}));Q.getAll=function(){};var q=function(){action.type},J="datoCabecera",G={component:J,version:"1.0",Actions:Q,Reducers:Object(i.a)({},J+"Reducer",(function(e,t){return e?t.component!=G.component||t.version!=G.version?e:(q(e,t),e.type=t.type,e.estado=t.estado,e.error=t.error,e.lastSend=new Date,e=Object(c.a)({},e)):{component:G.component,version:G.version}}))},_={ServiceName:"usuario",Pages:Object(c.a)({},L.Pages),Reducers:Object(c.a)(Object(c.a)({},L.Reducers),G.Reducers)},U={Pages:Object(c.a)({},_.Pages),Reducers:Object(c.a)({},_.Reducers)},Z=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"eliminar",value:function(e,t){t.state[ue.component+"Reducer"];var n={component:ue.component,version:ue.version,type:"editar",estado:"cargando",key_usuario:"admin",data:Object(c.a)(Object(c.a)({},e),{},{estado:0})};l.a.send(n)}}]),e}();Z.getAll=function(e){var t,n=e.state[ue.component+"Reducer"],r=n.data;return r||("cargando"==n.estado||l.a.send((t={component:ue.component,version:ue.version},Object(i.a)(t,"component","habitacion"),Object(i.a)(t,"type","getAll"),Object(i.a)(t,"estado","cargando"),t)),null)},Z.getByKey=function(e,t){var n=Z.getAll(t);return n?n[e]:null},Z.registro=function(e,t){l.a.send({component:ue.component,version:ue.version,type:"registro",estado:"cargando",key_usuario:"",data:e})},Z.editar=function(e,t){l.a.send({component:ue.component,version:ue.version,type:"editar",estado:"cargando",key_usuario:"admin",data:e})};var W,H=function(e,t){switch(t.type){case"getAll":return K(e,t);case"registro":return X(e,t);case"editar":return $(e,t);case"getById":return ee(e,t)}},K=function(e,t){"exito"==t.estado&&(e.data=t.data)},X=function(e,t){"exito"==t.estado&&e.data&&(e.data[t.data.key]=t.data)},$=function(e,t){"exito"==t.estado&&e.data&&(e.data[t.data.key]=t.data)},ee=function(e,t){"exito"==t.estado&&(e.data[t.data.key]=t.data)},te=n(6),ne=n(98),re=function(e){return e.esconder?Object(A.jsx)(te.a,{}):Object(A.jsx)(ne.a,{onPress:function(){e.onPress()},style:Object(c.a)({position:"absolute",right:10,bottom:40,width:50,height:50,justifyContent:"center",alignItems:"center"},e.style),children:Object(A.jsx)(s.f,{name:"Add"})})},oe=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(d.a)(n,[{key:"getContent",value:function(){var e=ue.Actions.getAll(this.props);return e?Object(A.jsx)(s.s,{header:[{key:"index",label:"#",width:50},{key:"empresa",label:"nombre",width:150},{key:"nombre_habitacion",label:"nombre",width:150},{key:"estado_habitacion",label:"nombre",width:150}],filter:function(e){return 1==e.estado},data:e}):Object(A.jsx)(s.i,{})}},{key:"render",value:function(){return Object(A.jsxs)(s.m,{title:"Lista de "+ue.component,disableScroll:!0,center:!0,children:[this.getContent(),Object(A.jsx)(re,{onPress:function(){s.k.navigate(ue.component+"/registro")}})]})}}]),n}(r.Component),ae=Object(w.b)((function(e){return{state:e}}))(oe),se=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r.key=s.k.getParam("key"),r}return Object(d.a)(n,[{key:"getContent",value:function(){var e=this;if(this.key){if(this.data=ue.Actions.getByKey(this.key,this.props),!this.data)return Object(A.jsx)(s.i,{})}else this.data={};return Object(A.jsx)(s.c,{ref:function(t){e.form=t},col:"xs-11 sm-9 md-7 lg-5 xl-4",inputProps:{customStyle:"calistenia"},inputs:{nombre:{label:"nombre",isRequired:!0,defaultValue:this.data.nombre,icon:Object(A.jsx)(s.f,{name:"InputUser",width:40,height:30})},acronimo:{label:"acronimo",isRequired:!0,defaultValue:this.data.acronimo,icon:Object(A.jsx)(s.f,{name:"InputUser",width:40,height:30})}},onSubmitName:"Aceptar",onSubmit:function(t){e.key?ue.Actions.editar(Object(c.a)(Object(c.a)({},e.data),t),e.props):ue.Actions.registro(t,e.props)}})}},{key:"render",value:function(){var e=this.props.state[ue.component+"Reducer"];return"registro"!=e.type&&"editar"!=e.type||"exito"==e.estado&&(this.key||(this.key=e.lastRegister.key),e.estado="",s.k.goBack()),Object(A.jsxs)(s.m,{title:"Registro de "+ue.component,center:!0,children:[Object(A.jsx)(s.w,{height:30}),this.getContent(),Object(A.jsx)(s.e,{})]})}}]),n}(r.Component),ce=Object(w.b)((function(e){return{state:e}}))(se),ie="habitacion",ue={component:ie,version:"1.0",Actions:Z,Reducers:Object(i.a)({},ie+"Reducer",(function(e,t){return e?t.component!=ue.component?e:(H(e,t),e.type=t.type,e.estado=t.estado,e.error=t.error,e.lastSend=new Date,e=Object(c.a)({},e)):{component:ue.component,version:ue.version}})),Pages:(W={},Object(i.a)(W,ie,ae),Object(i.a)(W,ie+"/registro",ce),W)},de=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getButtom=function(e){var t=e.url,n=e.label,r=e.icon,o=e.params,a=e.onPress;return"string"==typeof r&&(r=Object(A.jsx)(s.f,{name:r})),Object(A.jsx)(s.w,{center:!0,col:"xs-3 sm-2.5 md-2",style:{paddingTop:16,padding:8},children:Object(A.jsxs)(s.w,{center:!0,col:"xs-12",colSquare:!0,onPress:function(){a?a():s.k.navigate(t,o)},children:[Object(A.jsx)(s.w,{col:"xs-10",colSquare:!0,center:!0,style:{borderRadius:8,overflow:"hidden"},children:r}),Object(A.jsx)(s.t,{style:{color:s.u.color.secondary,textAlign:"center",height:24,fontSize:12},children:n})]})})},r.state={},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(A.jsx)(s.w,{col:"xs-12 md-10 xl-8",center:!0,row:!0,children:this.props.data.map((function(t){return e.getButtom(t)}))})}}]),n}(r.Component),le=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(d.a)(n,[{key:"render",value:function(){return Object(A.jsx)(s.m,{title:"InicioPage",children:Object(A.jsx)(de,{data:[{label:"Pais",url:"pais",icon:"Ajustes"}]})})}}]),n}(r.Component),be=Object(w.b)((function(e){return{state:e}}))(le),je=Object(c.a)(Object(c.a)({"/":ae,"/ass":be},U.Pages),ue.Pages),pe=Object(c.a)(Object(c.a)({},U.Reducers),ue.Reducers),he=je,fe={svg:{}},ge=n(93),me=Object(ge.b)(Object(c.a)({},pe)),Oe=n(202),ye={SocketProps:{name:"yoalquilo",host:"192.168.3.4",ssl:!1,port:{native:10022,web:20022,http:30022},cert:"MIID2DCCAsCgAwIBAgIEY5PQVTANBgkqhkiG9w0BAQsFADCBrTELMAkGA1UEBhMCQk8xEjAQBgNVBAgMCUF2IEJhbnplcjETMBEGA1UEBwwKU2FudGEgQ3J1ejEXMBUGA1UECgwOU2Vydmlzb2Z0cyBTUkwxEjAQBgNVBAsMCXlvYWxxdWlsbzEhMB8GA1UEAwwYeW9hbHF1aWxvLnNlcnZpc29mdHMuY29tMSUwIwYJKoZIhvcNAQkBFhZhbHZhcm9zaWxlczFAZ21haWwuY29tMB4XDTIyMTIxMDAwMTgyOVoXDTIyMTIxMTAwMTgyOVowga0xCzAJBgNVBAYTAkJPMRIwEAYDVQQIDAlBdiBCYW56ZXIxEzARBgNVBAcMClNhbnRhIENydXoxFzAVBgNVBAoMDlNlcnZpc29mdHMgU1JMMRIwEAYDVQQLDAl5b2FscXVpbG8xITAfBgNVBAMMGHlvYWxxdWlsby5zZXJ2aXNvZnRzLmNvbTElMCMGCSqGSIb3DQEJARYWYWx2YXJvc2lsZXMxQGdtYWlsLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAPNVPsgdxdTTjknPhd/098IFYYZfBfJSDkDQCjoDhzK6gbzD+EfZL0zYajdwBAL8SNg+7pJkcw6/wdiDq6H1H0sneT+aSOeKZdiSTM+BdGbcAserVVEnon5AG6nYTlRJHYSru26k8SQrBn0wqog2AXH9wcwOp16KsVTTyRfndtZ7HY8nBihpIMN4n2hVgCTlQxW/6ZzCKvLJuTHoECo/kZJnJs6lH4Q2jxMeKOpcfvCKud3hhGf1FVLy4Y0BRXWJtGO/W87F4wSbq2lWFn0wOnadDkf7u0oL2X5EVxMwEpEpORvmhCgn9PrclbmEECl/hqniCYQnMxAifsnQwWH+Yz8CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAiCxZm83vZCB5Fg7tMTbTHmlj5WzvcperIWja04Nb5IN6TAl/3uqOmB2O4AeyOcz+Uu/AymxFBtEuG3IHeqm0cYkEDK4y7AR7zSgI/Q/0FxFDIC77yP/hqCFUkExvXQIIkTifS02rt0F3a5Pj+7iwy69/Bx34PNVVEO09QdvYatDsHsC+qCDNGAv/EQ/UcRcpe4ilm0yJOTz7bI/1HogPuOCmVm99fsJkjCBTrIRRLss0nxgUUjFfJCiEZPP9BE38GEdGqsUsaVYxoC+Ola6SbeHG9ddNbJLLrSZLhYXACDuIrk9EraXO5GL2CShyNrI9JmCikdBY61zzZCcbL7N3aw==",apis:{servicio:"http://servicio.ss.lo/http/"}},SThemeProps:{default:{barStyle:"dark-content",barColor:"#ffffff",primary:"#ffffff",secondary:"#000000",background:"#cccccc",card:"#00000066"},dark:{barStyle:"light-content",barColor:"#000000",primary:"#000000",secondary:"#ffffff",background:"#222222",card:"#00000066"}}};Object(l.c)(ye.SocketProps);var xe=Object(ge.c)((function(e,t){if("USUARIO_LOGOUT"===t.type)e=void 0;return me(e,t)}),{},Object(ge.a)(Oe.a)),ve=function(e){return Object(A.jsx)(w.a,{store:xe,children:Object(A.jsxs)(s.b,{debug:!0,socket:l.a,assets:fe,theme:{initialTheme:"dark",themes:ye.SThemeProps},children:[Object(A.jsx)(s.k,{props:{prefixes:["https://component.servisofts.com","component.servisofts://"],pages:he}}),Object(A.jsx)(l.a,{identificarse:function(e){return{data:{},deviceKey:"as-asa-as"}}})]})})};a.a.render(Object(A.jsx)(ve,{}),document.getElementById("root"))}},[[269,1,2]]]);
//# sourceMappingURL=main.63cc0d58.chunk.js.map