import{g as r,a as c}from"./auth-c725161d.js";import{$ as o,D as l,o as f,s as n,g as u,c as d,e as b,a as m,b as h,d as g,i as T}from"./trimestres-c6043886.js";window.$=o;window.DataTable=l;r().find(t=>t==c().id)||(window.location.href="index.html");const i=document.getElementById("formulario"),w=document.getElementById("guardar");document.addEventListener("DOMContentLoaded",async()=>{await f(t=>{let e=[];t.forEach(a=>{e.push([a.nombre,a.fecha_inicio,a.fecha_fin,` <div class="tareas">
                                <button data-id='${a.id}' class='editar'>Editar</button>
                                <button data-id='${a.id}' class='eliminar'>Eliminar</button>
                            </div>`])}),o.fn.DataTable.isDataTable("#lista")?(o("#lista").DataTable().destroy(),d(e)):d(e)})});w.addEventListener("click",()=>{const t=i.nombre.value,e=i.fecha_inicio.value,a=i.fecha_fin.value;if(t===""||e===""||a===""){n({title:"Error!",text:"Todos los campos son obligatorios!",icon:"warning",button:"Ok!"});return}const s={nombre:t,fecha_inicio:e,fecha_fin:a};b?(m(T,s),h(!1),g("")):u(s),n("Bien hecho!","Sus datos se han registrado!","success"),i.reset()});
