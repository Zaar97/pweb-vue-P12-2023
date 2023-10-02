import{_ as y,r as k,o as i,c as l,a as s,t as c,F as g,b as p,h as u,v as T,i as m,j as w,d as S,w as _,e as b,k as f,p as x,f as C}from"./index-c94ed6ac.js";const D={data(){return{newTodo:"",todos:[],category:"all",showEditModal:!1,editedTodoId:null,editedTodoText:""}},computed:{filteredTodos(){return this.category==="pending"?this.todos.filter(e=>!e.completed):this.category==="completed"?this.todos.filter(e=>e.completed):this.todos}},methods:{loadTodosFromLocalStorage(){const e=localStorage.getItem(`todos-${this.$route.params.username}`);e&&(this.todos=JSON.parse(e))},saveTodosToLocalStorage(){localStorage.setItem(`todos-${this.$route.params.username}`,JSON.stringify(this.todos))},addTodo(){this.newTodo.trim()!==""&&(this.todos.push({id:Date.now(),text:this.newTodo,completed:!1,deadline:this.newTodoDeadline}),this.newTodo="",this.newTodoDeadline="",this.saveTodosToLocalStorage())},formatDeadline(e){if(!e)return"";const t=new Date,a=new Date(e);if(a.getFullYear()===t.getFullYear()){const r=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${r}-${n}`}else{const r=a.getFullYear(),n=String(a.getMonth()+1).padStart(2,"0"),d=String(a.getDate()).padStart(2,"0");return`${r}-${n}-${d}`}},deleteTodo(e){const t=this.todos.findIndex(a=>a.id===e);t!==-1&&(this.todos.splice(t,1),this.saveTodosToLocalStorage())},toggleTodoStatus(e){const t=this.todos.find(a=>a.id===e);t&&(t.completed=!t.completed,this.saveTodosToLocalStorage())},editTodo(e){this.showEditModal=!0,this.editedTodoId=e;const t=this.todos.find(a=>a.id===e);t&&(this.editedTodoText=t.text)},saveEditedTodo(){const e=this.todos.find(t=>t.id===this.editedTodoId);e&&(e.text=this.editedTodoText,this.showEditModal=!1,this.saveTodosToLocalStorage())},cancelEdit(){this.showEditModal=!1,this.editedTodoId=null,this.editedTodoText=""},setCategory(e){this.category=e},goToAboutPage(){this.$router.push("/about/")}},created(){this.loadTodosFromLocalStorage()}},E=e=>(x("data-v-c9606fac"),e=e(),C(),e),I={class:"todo-app"},M={class:"py-2 px-0"},L={class:"user-list"},F={class:"flex justify-center items-center"},A={class:"todo-list"},B=["checked","onChange"],P=["onClick"],V={class:"deadline"},N=["onClick"],U={key:0,class:"modal"},K={class:"modal-content"},Y=E(()=>s("h2",null,"Edit Tugas",-1)),j={class:"modal-buttons"};function J(e,t,a,r,n,d){const v=k("router-link");return i(),l("div",I,[s("h1",M,"Todo App - "+c(e.$route.params.username),1),s("div",L,[(i(!0),l(g,null,p(e.usernames,o=>(i(),S(v,{to:"/about/"+o,key:o},{default:_(()=>[b(c(o),1)]),_:2},1032,["to"]))),128))]),u(s("input",{class:"todo-input w-80","onUpdate:modelValue":t[0]||(t[0]=o=>n.newTodo=o),onKeydown:t[1]||(t[1]=m(f((...o)=>d.addTodo&&d.addTodo(...o),["prevent"]),["enter"])),placeholder:"Add Tasks"},null,544),[[T,n.newTodo]]),u(s("input",{class:"deadline-input","onUpdate:modelValue":t[2]||(t[2]=o=>e.newTodoDeadline=o),type:"date",onKeydown:t[3]||(t[3]=m(f((...o)=>d.addTodo&&d.addTodo(...o),["prevent"]),["enter"])),placeholder:"Deadline"},null,544),[[T,e.newTodoDeadline]]),s("div",F,[s("button",{onClick:t[4]||(t[4]=o=>d.setCategory("all")),class:"category-button"},"All Tasks"),s("button",{onClick:t[5]||(t[5]=o=>d.setCategory("pending")),class:"category-button"},"In Progress"),s("button",{onClick:t[6]||(t[6]=o=>d.setCategory("completed")),class:"category-button"},"Completed")]),s("ul",A,[(i(!0),l(g,null,p(d.filteredTodos,o=>(i(),l("li",{key:o.id,class:"todo-item"},[s("input",{type:"checkbox",checked:o.completed,class:"todo-checkbox",onChange:h=>d.toggleTodoStatus(o.id)},null,40,B),s("span",{onClick:h=>d.editTodo(o.id)},c(o.text),9,P),s("span",V,"_"+c(d.formatDeadline(o.deadline)),1),s("button",{onClick:h=>d.deleteTodo(o.id),class:"delete-button ml-3"},"Hapus",8,N)]))),128))]),n.showEditModal?(i(),l("div",U,[s("div",K,[Y,u(s("textarea",{"onUpdate:modelValue":t[7]||(t[7]=o=>n.editedTodoText=o)},null,512),[[T,n.editedTodoText]]),s("div",j,[s("button",{onClick:t[8]||(t[8]=(...o)=>d.saveEditedTodo&&d.saveEditedTodo(...o))},"Simpan"),s("button",{onClick:t[9]||(t[9]=(...o)=>d.cancelEdit&&d.cancelEdit(...o))},"Batal")])])])):w("",!0),s("button",{onClick:t[10]||(t[10]=(...o)=>d.goToAboutPage&&d.goToAboutPage(...o)),class:"back-button"},"Back")])}const H=y(D,[["render",J],["__scopeId","data-v-c9606fac"]]);export{H as default};