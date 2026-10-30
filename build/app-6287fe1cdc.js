/* Arena Duel — palazondev. Incluye Three.js (MIT). */
var t0=Object.defineProperty;var li=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var e0=(i,t)=>{for(var e in t)t0(i,e,{get:t[e],enumerable:!0})};function As(i){return!Array.isArray(i)||i.length!==ku?!1:new Set(i).size===ku&&i.every(e=>Number.isInteger(e)&&e>=0&&e<Ht.length)}var dn,Ln,n0,Re,Ou,Bu,zu,Bo,xc,Es,yc,ku,os,i0,Fo,$n,Oo,gc,zo,Xe,ki,_c,Ht,vc,Dn,Fi,xn,Dr,Vu,Fu,bc,Oi=li(()=>{dn=[3.5,14.5],Ln=1,n0=20,Re=1/n0,Ou=180,Bu=60,zu=60,Bo=10,xc=5,Es=1/2.8,yc=1,ku=8,os="ad2",i0={slow:.8,med:1.15,fast:1.6,vfast:2.1},{slow:Fo,med:$n,fast:Oo,vfast:gc}=i0,zo={comun:{name:"Com\xFAn",color:"#8fb4d9",dark:"#3c5a7a"},especial:{name:"Especial",color:"#ff9f3a",dark:"#8a4a0c"},epica:{name:"\xC9pica",color:"#c46bff",dark:"#5b1d8a"},legendaria:{name:"Legendaria",color:"#5ff0d6",dark:"#0f6e60"}},Xe={knight:{name:"Caballero",icon:"\u{1F93A}",hp:1450,dmg:170,hitSpeed:1.2,range:.7,speed:$n,radius:.5,mass:6,targets:"ground"},archer:{name:"Arquera",icon:"\u{1F3F9}",hp:260,dmg:90,hitSpeed:1,range:5,speed:$n,radius:.4,mass:3,targets:"both",proj:"arrow",projSpeed:14},goblin:{name:"Duende",icon:"\u{1F47A}",hp:185,dmg:105,hitSpeed:1,range:.5,speed:gc,radius:.35,mass:2,targets:"ground"},skeleton:{name:"Esqueleto",icon:"\u{1F480}",hp:85,dmg:75,hitSpeed:1,range:.5,speed:Oo,radius:.3,mass:1,targets:"ground"},bat:{name:"Murci\xE9lago",icon:"\u{1F987}",hp:80,dmg:70,hitSpeed:1.1,range:.6,speed:gc,radius:.3,mass:1,targets:"both",air:!0},grenadier:{name:"Granadero",icon:"\u{1F4A3}",hp:420,dmg:180,hitSpeed:1.8,range:4.5,speed:$n,radius:.45,mass:4,targets:"ground",splash:1.4,proj:"bomb",projSpeed:8},barbarian:{name:"B\xE1rbaro",icon:"\u{1FA93}",hp:680,dmg:145,hitSpeed:1.4,range:.7,speed:$n,radius:.5,mass:5,targets:"ground"},giant:{name:"Gigante",icon:"\u{1F9D4}",hp:3800,dmg:210,hitSpeed:1.5,range:.9,speed:Fo,radius:.75,mass:18,targets:"buildings",sight:7},pyromancer:{name:"Piromante",icon:"\u{1F525}",hp:600,dmg:200,hitSpeed:1.4,range:5.5,speed:$n,radius:.45,mass:4,targets:"both",splash:1.5,proj:"fire",projSpeed:11},draco:{name:"Draco",icon:"\u{1F409}",hp:900,dmg:125,hitSpeed:1.5,range:3.5,speed:Oo,radius:.55,mass:5,targets:"both",air:!0,splash:1.2,proj:"breath",projSpeed:10},arquebusier:{name:"Arcabucero",icon:"\u{1F52B}",hp:560,dmg:165,hitSpeed:1.1,range:6,speed:$n,radius:.45,mass:4,targets:"both",proj:"bullet",projSpeed:20},berserker:{name:"Berserker",icon:"\u{1FA93}",hp:1250,dmg:220,hitSpeed:1.5,range:.9,speed:$n,radius:.5,mass:6,targets:"ground",spin:2},lancer:{name:"Lancero",icon:"\u{1F434}",hp:1550,dmg:320,hitSpeed:1.4,range:1,speed:$n,radius:.7,mass:10,targets:"ground",charge:{dist:2.5,speed:2,dmg:2}},wolfrider:{name:"Lobo Asaltante",icon:"\u{1F43A}",hp:1800,dmg:300,hitSpeed:1.6,range:.8,speed:gc,radius:.65,mass:8,targets:"buildings",jump:!0,sight:6},automaton:{name:"Aut\xF3mata",icon:"\u{1F916}",hp:1200,dmg:560,hitSpeed:1.8,range:.8,speed:Oo,radius:.5,mass:6,targets:"ground"},necromancer:{name:"Nigromante",icon:"\u{1F9DF}",hp:650,dmg:110,hitSpeed:1.1,range:5,speed:$n,radius:.45,mass:4,targets:"both",splash:.8,proj:"necro",projSpeed:10,spawn:{unit:"skeleton",count:3,every:9,first:1}},golem:{name:"G\xF3lem",icon:"\u{1F5FF}",hp:4800,dmg:260,hitSpeed:2.5,range:.9,speed:Fo,radius:.85,mass:25,targets:"buildings",sight:7,deathSpawn:{unit:"golemite",count:2},deathDamage:{dmg:260,radius:2}},golemite:{name:"Guijarro",icon:"\u{1FAA8}",hp:900,dmg:60,hitSpeed:2.5,range:.8,speed:Fo,radius:.55,mass:10,targets:"buildings",sight:7,deathDamage:{dmg:60,radius:1.5}},frost:{name:"G\xE9lida",icon:"\u2744\uFE0F",hp:520,dmg:100,hitSpeed:1,range:5,speed:$n,radius:.45,mass:4,targets:"both",proj:"ice",projSpeed:12,slow:2.5},ballista:{name:"Ballesta",icon:"\u{1F3AF}",building:!0,hp:1050,dmg:175,hitSpeed:.9,range:5.5,speed:0,radius:.85,mass:999,targets:"ground",lifetime:30,proj:"bolt",projSpeed:16},crypt:{name:"Cripta",icon:"\u26B0\uFE0F",building:!0,hp:520,dmg:0,hitSpeed:1,range:0,speed:0,radius:.85,mass:999,targets:"none",lifetime:35,spawn:{unit:"skeleton",count:1,every:3.2,first:1},deathSpawn:{unit:"skeleton",count:4}},arcane:{name:"Torre Arcana",icon:"\u{1F52E}",building:!0,hp:1300,dmg:40,hitSpeed:.4,range:6,speed:0,radius:.85,mass:999,targets:"both",lifetime:35,ramp:[1,4,12],rampEvery:2}},ki=Object.keys(Xe),_c=Object.fromEntries(ki.map((i,t)=>[i,t]));for(let i of ki){let t=Xe[i];t.key=i,t.sight=t.sight||Math.max(5.5,(t.range||0)+.5)}Ht=[{id:"knight",name:"Caballero",cost:3,type:"troop",rarity:"comun",unit:"knight",count:1,desc:"Armadura gruesa y espada firme. Aguanta golpes mientras los de atr\xE1s hacen da\xF1o."},{id:"archers",name:"Arqueras",cost:3,type:"troop",rarity:"comun",unit:"archer",count:2,desc:"Dos tiradoras certeras. Alcanzan a los que vuelan."},{id:"goblins",name:"Duendes",cost:2,type:"troop",rarity:"comun",unit:"goblin",count:3,desc:"Tres pillos con pu\xF1al que corren much\xEDsimo. Baratos y molestos."},{id:"skeletons",name:"Esqueletos",cost:1,type:"troop",rarity:"comun",unit:"skeleton",count:3,desc:"Tres huesudos por un elixir. Perfectos para distraer."},{id:"bats",name:"Murci\xE9lagos",cost:2,type:"troop",rarity:"comun",unit:"bat",count:5,desc:"Cinco murci\xE9lagos voladores que muerden r\xE1pido. Mueren de un soplo."},{id:"grenadier",name:"Granadero",cost:3,type:"troop",rarity:"comun",unit:"grenadier",count:1,desc:"Lanza bombas que revientan grupos de tropas de tierra."},{id:"barbarians",name:"B\xE1rbaros",cost:5,type:"troop",rarity:"comun",unit:"barbarian",count:4,desc:"Cuatro brutos con hacha. Arrasan lo que pillan por delante."},{id:"arrows",name:"Lluvia de Flechas",cost:3,type:"spell",rarity:"comun",spell:{kind:"arrows",radius:4,dmg:240,towerMult:.35,speed:15},desc:"Una nube de flechas en una zona grande. Limpia enjambres."},{id:"ballista",name:"Ballesta",cost:3,type:"building",rarity:"comun",unit:"ballista",count:1,desc:"Defensa fija durante 30 s. Atrae y frena a las tropas de tierra."},{id:"giant",name:"Gigante",cost:5,type:"troop",rarity:"especial",unit:"giant",count:1,desc:"Una mole que solo va a por torres y edificios. Esc\xFAdate detr\xE1s de \xE9l."},{id:"pyromancer",name:"Piromante",cost:5,type:"troop",rarity:"especial",unit:"pyromancer",count:1,desc:"Lanza bolas de fuego que queman a todo un grupo, en tierra o en el aire."},{id:"arquebusier",name:"Arcabucero",cost:4,type:"troop",rarity:"especial",unit:"arquebusier",count:1,desc:"Dispara desde muy lejos con su arcabuz. Ideal contra voladores."},{id:"berserker",name:"Berserker",cost:4,type:"troop",rarity:"especial",unit:"berserker",count:1,desc:"Gira con su hacha doble y golpea a todos los que le rodean."},{id:"wolfrider",name:"Lobo Asaltante",cost:4,type:"troop",rarity:"especial",unit:"wolfrider",count:1,desc:"Salta el r\xEDo y corre directo a las torres. Solo ataca edificios."},{id:"automaton",name:"Aut\xF3mata",cost:4,type:"troop",rarity:"especial",unit:"automaton",count:1,desc:"M\xE1quina de relojer\xEDa con espada. Pocos golpes, pero cada uno destroza."},{id:"fireball",name:"Bola de Fuego",cost:4,type:"spell",rarity:"especial",spell:{kind:"fireball",radius:2.5,dmg:600,towerMult:.35,knockback:1.6,speed:13},desc:"Cae donde quieras, quema todo en la zona y empuja a las tropas."},{id:"crypt",name:"Cripta",cost:3,type:"building",rarity:"especial",unit:"crypt",count:1,desc:"Saca un esqueleto cada pocos segundos. Al romperse suelta cuatro m\xE1s."},{id:"arcane",name:"Torre Arcana",cost:5,type:"building",rarity:"especial",unit:"arcane",count:1,desc:"Un rayo que quema cada vez m\xE1s fuerte cuanto m\xE1s tiempo apunta al mismo objetivo."},{id:"draco",name:"Draco",cost:4,type:"troop",rarity:"epica",unit:"draco",count:1,desc:"Drag\xF3n volador que escupe fuego en \xE1rea. Solo lo alcanzan tiradores."},{id:"lancer",name:"Lancero",cost:5,type:"troop",rarity:"epica",unit:"lancer",count:1,desc:"Tras galopar un poco carga a doble velocidad y su primer lanzazo hace doble da\xF1o."},{id:"legion",name:"Legi\xF3n de Huesos",cost:3,type:"troop",rarity:"epica",unit:"skeleton",count:12,desc:"Doce esqueletos a la vez. Rodean y tumban a cualquier gigante."},{id:"lightning",name:"Rel\xE1mpago",cost:6,type:"spell",rarity:"epica",spell:{kind:"lightning",radius:3.5,dmg:900,towerMult:.3,hits:3,stun:.5,delay:.3},desc:"Tres rayos caen sobre los tres objetivos con m\xE1s vida de la zona."},{id:"freeze",name:"Ventisca",cost:4,type:"spell",rarity:"epica",spell:{kind:"freeze",radius:3,dmg:90,towerMult:.3,freeze:4,delay:.15},desc:"Congela tropas y torres durante 4 segundos."},{id:"rage",name:"Grito de Guerra",cost:2,type:"spell",rarity:"epica",spell:{kind:"rage",radius:4,duration:6,boost:1.4,delay:.1},desc:"Tus tropas en la zona se mueven y atacan un 40 % m\xE1s r\xE1pido."},{id:"golem",name:"G\xF3lem",cost:7,type:"troop",rarity:"legendaria",unit:"golem",count:1,desc:"Coloso de roca que va a por torres. Al caer explota y se parte en dos guijarros."},{id:"necromancer",name:"Nigromante",cost:5,type:"troop",rarity:"legendaria",unit:"necromancer",count:1,desc:"Lanza magia oscura y levanta tres esqueletos cada pocos segundos."},{id:"frost",name:"G\xE9lida",cost:3,type:"troop",rarity:"legendaria",unit:"frost",count:1,desc:"Sus car\xE1mbanos ralentizan el paso y los golpes de quien toquen."}],vc=Object.fromEntries(Ht.map((i,t)=>[i.id,t]));Ht.forEach((i,t)=>{i.idx=t,i.unit&&(i.unitIdx=_c[i.unit])});Dn=["knight","archers","goblins","giant","pyromancer","fireball","arrows","ballista"].map(i=>vc[i]);Fi={princess:{hp:1900,dmg:75,hitSpeed:.8,range:7,radius:1.45,proj:"tower",projSpeed:16},king:{hp:3200,dmg:95,hitSpeed:1,range:7,radius:1.9,proj:"cannon",projSpeed:13}},xn=[{kind:"princess",x:3.5,y:25.5,lane:0},{kind:"princess",x:14.5,y:25.5,lane:1},{kind:"king",x:9,y:29,lane:-1}],Dr=["\u{1F602}","\u{1F621}","\u{1F44D}","\u{1F62D}","\u{1F631}","\u{1F92B}"],Vu=i=>i===0?"\u2014":i<=Fo?"Lenta":i<=$n?"Media":i<=Oo?"R\xE1pida":"Muy r\xE1pida",Fu=[{min:0,name:"Aldeano"},{min:100,name:"Escudero"},{min:250,name:"Soldado"},{min:450,name:"Caballero"},{min:700,name:"Capit\xE1n"},{min:1e3,name:"Bar\xF3n"},{min:1400,name:"Conde"},{min:1900,name:"Duque"},{min:2500,name:"Rey"},{min:3200,name:"Leyenda"}],bc=i=>Fu.reduce((t,e)=>i>=e.min?e:t,Fu[0])});function r0(i){for(let t=i.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}function bi(i,t,e){return i===0?[t,e]:[18-t,32-e]}function Ho(i,t){let e=Math.min(18-.5,Math.max(.5,Math.floor(i)+.5)),n=Math.min(32-.5,Math.max(.5,Math.floor(t)+.5));return[e,n]}function Cs(i){if(i<=1)return[[0,0]];let t=[];if(i<=5){let s=i===2?.55:i<=4?.62:.72,r=i===2?0:i===3?-Math.PI/2:i===4?Math.PI/4:-Math.PI/2;for(let o=0;o<i;o++){let a=r+o/i*Math.PI*2;t.push([Math.cos(a)*s,Math.sin(a)*s])}return t}let e=Math.max(3,Math.floor(i/3));for(let s=0;s<e;s++){let r=s/e*Math.PI*2;t.push([Math.cos(r)*.55,Math.sin(r)*.55])}let n=i-e;for(let s=0;s<n;s++){let r=s/n*Math.PI*2+.3;t.push([Math.cos(r)*1.3,Math.sin(r)*1.3])}return t}function Sc(i,t,e,n,s,r){let o=Ht[t];if(!o||e<0||e>18||n<0||n>32)return!1;if(o.type==="spell")return!0;if(n>15&&n<17)return!1;if(!(i===0?n>17:n<15)){if(o.type==="building")return!1;let l=e<18/2?0:1,c=s.find(h=>h.owner===1-i&&h.tkind==="princess"&&h.lane===l);if(c&&c.hp>0||(i===0?n<11:n>21))return!1}for(let l of r)if(l.kind==="tower"&&ci(e,n,l.x,l.y)<l.radius+.35||l.kind==="building"&&o.type==="building"&&ci(e,n,l.x,l.y)<l.radius+.6)return!1;return!0}function Ur(i,t){return t.owner===i.owner||t.hp<=0||i.targets==="none"?!1:i.targets==="buildings"?t.kind!=="unit":i.targets==="ground"?!t.air:!0}var Mc,Zn,s0,ci,Nr,Go,kr=li(()=>{Oi();Mc={normal:0,double:1,overtime:2,over:3},Zn={frozen:1,slowed:2,raged:4,charging:8,stunned:16},s0=70;ci=(i,t,e,n)=>Math.hypot(i-e,t-n);Nr=(i,t)=>ci(i.x,i.y,t.x,t.y)-i.radius-t.radius;Go=class{constructor(t={}){this.tick=0,this.time=Ou,this.phase="normal",this.crowns=[0,0],this.elixir=[xc,xc];let e=t.decks||[Dn,Dn];this.decks=e.map(s=>As(s)?s.slice():Dn.slice()),this.players=this.decks.map(s=>{let r=r0(s.slice());return{hand:r.slice(0,4),queue:r.slice(4)}}),this.entities=[],this.byId=new Map,this.projectiles=[],this.spells=[],this.zones=[],this.events=[],this.nextId=10,this.nextProj=1,this.winner=-1,this.lastSeq=[0,0],this.towers=[[],[]],this.unitCount=[0,0],this.stats=[0,1].map(()=>({played:0,elixirSpent:0,towerDmg:0,kills:0}));let n=1;for(let s of[0,1])xn.forEach((r,o)=>{let a=Fi[r.kind],[l,c]=bi(s,r.x,r.y),h=this.add({id:n++,owner:s,kind:"tower",tkind:r.kind,tidx:o,u:-1,x:l,y:c,hp:a.hp,maxHp:a.hp,radius:a.radius,mass:9999,air:!1,targets:"both",range:a.range,sight:a.range,dmg:a.dmg,hitSpeed:a.hitSpeed,proj:a.proj,projSpeed:a.projSpeed,speed:0,lane:r.lane<0?-1:l<18/2?0:1,active:r.kind!=="king"});this.towers[s].push(h)})}add(t){return t.cd=t.cd??0,t.targetId=0,t.atkT=9,t.deploy=t.deploy??0,t.inRange=!1,t.locked=!1,t.slowT=0,t.freezeT=0,t.rageT=0,t.stunT=0,t.rageBoost=1,this.entities.push(t),this.byId.set(t.id,t),t}get(t){return t?this.byId.get(t):void 0}emit(t){t.k=this.tick,this.events.push(t)}hand(t){return this.players[t].hand}next(t){return this.players[t].queue[0]}canPlace(t,e,n,s){let r=this.entities.filter(o=>o.kind!=="unit"&&o.hp>0);return Sc(t,e,n,s,this.towers.flat(),r)}play(t,e,n,s,r,o=0){if(this.phase==="over")return!1;let a=this.players[t];if(e<0||e>3||a.hand[e]!==n)return!1;let l=Ht[n];if(!l||this.elixir[t]<l.cost-1e-6||!Number.isFinite(s)||!Number.isFinite(r)||([s,r]=l.type==="spell"?[Math.min(18,Math.max(0,s)),Math.min(32,Math.max(0,r))]:Ho(s,r),!this.canPlace(t,n,s,r)))return!1;if(this.elixir[t]-=l.cost,a.queue.push(n),a.hand[e]=a.queue.shift(),o&&(this.lastSeq[t]=Math.max(this.lastSeq[t],o)),this.stats[t].played++,this.stats[t].elixirSpent+=l.cost,this.emit({t:"deploy",o:t,c:n,x:s,y:r}),l.type==="spell")this.castSpell(t,n,s,r);else{let c=t===0?1:-1;for(let[h,u]of Cs(l.count||1))this.spawnUnit(t,l.unit,s+h*c,r+u*c,yc)}return!0}spawnUnit(t,e,n,s,r=yc){let o=Xe[e];if(!o.building&&this.unitCount[t]>=s0)return null;o.building||this.unitCount[t]++;let a=o.radius,l=this.add({id:this.nextId++,owner:t,kind:o.building?"building":"unit",u:_c[e],def:o,x:Math.min(18-a*.6,Math.max(a*.6,n)),y:Math.min(32-a*.6,Math.max(a*.6,s)),hp:o.hp,maxHp:o.hp,radius:a,mass:o.mass,air:!!o.air,targets:o.targets,range:o.range,sight:o.sight,dmg:o.dmg,hitSpeed:o.hitSpeed,splash:o.splash||0,proj:o.proj,projSpeed:o.projSpeed,speed:o.speed,lifetime:o.lifetime||0,deploy:r,lane:n<18/2?0:1});return!l.air&&l.y>15&&l.y<17&&!o.jump&&(l.y=l.y<16?15-.05:17+.05),o.spawn&&(l.spawnT=o.spawn.first??o.spawn.every),o.charge&&(l.run=0,l.charging=!1),o.ramp&&(l.rampT=0,l.rampTarget=0,l.stage=0),l}castSpell(t,e,n,s){let r=Ht[e].spell,o=this.towers[t][2],a=r.delay??.2,l=n,c=s;r.speed&&(l=o.x,c=o.y,a=Math.max(.45,ci(l,c,n,s)/r.speed)),this.spells.push({owner:t,card:e,sp:r,x:n,y:s,t:0,dur:a}),this.emit({t:"spell",o:t,c:e,fx:l,fy:c,x:n,y:s,dur:a})}resolveSpell(t){let e=t.sp,n=t.owner,s=(o,a=.6)=>o.hp>0&&o.owner!==n&&ci(t.x,t.y,o.x,o.y)<=e.radius+o.radius*a,r=(o,a)=>this.damage(o,o.kind==="tower"?Math.round(a*e.towerMult):a,n);switch(e.kind){case"fireball":case"arrows":{for(let o of this.entities)if(s(o)&&(r(o,e.dmg),e.knockback&&o.kind==="unit"&&o.mass<10)){let a=ci(t.x,t.y,o.x,o.y),l=e.knockback*(1-Math.min(1,a/(e.radius+1))*.5);a>.01?(o.x+=(o.x-t.x)/a*l,o.y+=(o.y-t.y)/a*l):o.y+=n===0?-l:l,o.locked=!1,o.charging&&(o.charging=!1,o.run=0)}this.emit({t:e.kind==="fireball"?"boom":"volley",x:t.x,y:t.y,r:e.radius});break}case"lightning":{let o=this.entities.filter(l=>s(l,.3)).sort((l,c)=>c.hp-l.hp).slice(0,e.hits),a=[];for(let l of o)r(l,e.dmg),this.stun(l,e.stun),a.push([Math.round(l.x*10)/10,Math.round(l.y*10)/10,l.air?1:0,l.kind==="tower"?1:0]);this.emit({t:"zap",x:t.x,y:t.y,r:e.radius,hits:a});break}case"freeze":{for(let o of this.entities)s(o)&&(r(o,e.dmg),o.freezeT=Math.max(o.freezeT,e.freeze),o.charging&&(o.charging=!1,o.run=0),o.rampTarget&&(o.rampT=0,o.stage=0));this.emit({t:"freeze",x:t.x,y:t.y,r:e.radius,d:e.freeze});break}case"rage":{this.zones.push({owner:n,x:t.x,y:t.y,r:e.radius,t:e.duration,boost:e.boost}),this.emit({t:"rage",o:n,x:t.x,y:t.y,r:e.radius,d:e.duration});break}}}stun(t,e){t.stunT=Math.max(t.stunT,e),t.cd=Math.max(t.cd,t.hitSpeed*.5),t.locked=!1,t.charging&&(t.charging=!1,t.run=0),t.rampTarget&&(t.rampT=0,t.stage=0)}mult(t){if(t.freezeT>0||t.stunT>0)return 0;let e=1;return t.slowT>0&&(e*=.65),t.rageT>0&&(e*=t.rageBoost),e}step(){if(this.phase==="over")return;this.tick++;let t=this.phase==="normal"?1:this.phase==="double"?2:3;for(let e of[0,1])this.elixir[e]=Math.min(Bo,this.elixir[e]+Es*t*Re);if(this.zones.length){for(let e of this.zones){e.t-=Re;for(let n of this.entities)n.owner!==e.owner||n.hp<=0||n.kind==="tower"||ci(e.x,e.y,n.x,n.y)<=e.r+n.radius*.5&&(n.rageT=2,n.rageBoost=e.boost)}this.zones=this.zones.filter(e=>e.t>0)}for(let e of this.entities){if(e.hp<=0)continue;if(e.deploy>0){e.deploy=Math.max(0,e.deploy-Re);continue}if(e.slowT>0&&(e.slowT-=Re),e.rageT>0&&(e.rageT-=Re),e.stunT>0&&(e.stunT-=Re),e.kind==="building"&&e.lifetime&&(e.hp-=e.maxHp/e.lifetime*Re),e.freezeT>0){e.freezeT-=Re;continue}let n=this.mult(e);e.atkT+=Re,e.cd>0&&(e.cd-=Re*n),!(e.kind==="tower"&&!e.active)&&(e.def&&e.def.spawn&&this.spawner(e,n),n!==0&&e.targets!=="none"&&this.think(e,n))}this.updateProjectiles(),this.updateSpells(),this.resolveCollisions(),this.cleanup(),this.updateClock()}spawner(t,e){if(e===0||(t.spawnT-=Re*e,t.spawnT>0))return;let n=t.def.spawn;t.spawnT=n.every;let s=t.owner===0?-1:1,r=n.count===1?[[0,1.1]]:Cs(n.count).map(([o,a])=>[o*1.3,a*1.3+.2]);for(let[o,a]of r){let l=this.spawnUnit(t.owner,n.unit,t.x+o*s,t.y+a*s,.35);l&&this.emit({t:"spawn",o:t.owner,u:l.u,x:l.x,y:l.y})}}defaultTarget(t){let e=this.towers[1-t.owner];if(t.targets==="buildings"){let r=null,o=1/0;for(let a of this.entities)if(!(a.kind==="unit"||!Ur(t,a))&&(a.kind==="building"||a.tkind==="princess"&&a.lane===t.lane||a.tkind==="king")){let l=Nr(t,a)+(a.tkind==="king"?6:0);l<o&&(o=l,r=a)}if(r)return r}let n=e.find(r=>r.tkind==="princess"&&r.lane===t.lane&&r.hp>0);if(n)return n;let s=e[2];return s.hp>0?s:e.find(r=>r.hp>0)||null}acquire(t){let e=null,n=1/0;for(let s of this.entities){if(!Ur(t,s))continue;let r=Nr(t,s);r<=t.sight&&r<n&&(n=r,e=s)}return e}think(t,e){t.kind==="unit"&&Math.abs(t.x-18/2)>1.5&&(t.lane=t.x<18/2?0:1);let n=this.get(t.targetId);if(!(n&&n.hp>0&&Ur(t,n)&&t.locked&&Nr(t,n)<=t.range+.35)){t.locked=!1;let o=this.acquire(t);if(!o&&t.kind==="unit"&&(o=this.defaultTarget(t)),!o){t.targetId=0,t.inRange=!1;return}n=o,t.targetId!==n.id&&t.rampTarget&&(t.rampT=0,t.stage=0,t.rampTarget=0),t.targetId=n.id}Nr(t,n)<=t.range?(t.inRange||(t.inRange=!0,t.cd=Math.max(t.cd,t.hitSpeed*(t.charging?.15:.45))),t.locked=!0,t.cd<=0&&this.attack(t,n)):(t.inRange=!1,t.speed>0&&this.move(t,n,e))}attack(t,e){t.cd=t.hitSpeed,t.atkT=0;let n=t.dmg;if(t.charging?(n*=t.def.charge.dmg,t.charging=!1,t.run=0,this.emit({t:"lance",x:e.x,y:e.y})):t.def&&t.def.charge&&(t.run=0),t.def&&t.def.ramp){t.rampTarget!==e.id?(t.rampTarget=e.id,t.rampT=0):t.rampT+=t.hitSpeed,t.stage=Math.min(t.def.ramp.length-1,Math.floor(t.rampT/t.def.rampEvery)),this.damage(e,n*t.def.ramp[t.stage],t.owner);return}if(t.def&&t.def.spin){for(let l of this.entities)Ur(t,l)&&Nr(t,l)<=t.def.spin-t.radius&&this.damage(l,n,t.owner);this.emit({t:"spin",x:t.x,y:t.y,r:t.def.spin});return}if(!t.proj){this.damage(e,n,t.owner),this.emit({t:"hit",x:e.x,y:e.y,a:e.air?1:0,u:t.u,tw:e.kind==="tower"?1:0});return}let s=t.x,r=t.y,o=Math.max(.12,ci(s,r,e.x,e.y)/t.projSpeed),a={id:this.nextProj++,owner:t.owner,kind:t.proj,tid:e.id,x0:s,y0:r,tx:e.x,ty:e.y,t:0,dur:o,dmg:n,splash:t.splash||0,targets:t.targets,slow:t.def&&t.def.slow||0};this.projectiles.push(a),this.emit({t:"proj",p:a.kind,fx:s,fy:r,fa:t.air?1:0,ft:t.kind==="tower"?t.id:0,tid:e.id,tx:e.x,ty:e.y,dur:o,o:t.owner})}damage(t,e,n=-1){if(t.hp<=0)return;let s=t.hp;t.hp-=e,t.kind==="tower"&&n>=0&&(this.stats[n].towerDmg+=Math.min(s,e)),t.kind==="tower"&&t.tkind==="king"&&!t.active&&(t.active=!0,this.emit({t:"king",o:t.owner}))}waypoint(t,e,n){let s=c=>c>15-.45&&c<17+.45,r=t.y<16,o=n<16;if(!s(t.y)&&r===o)return[e,n];let a=dn[0],l=1/0;for(let c of dn){let h=Math.abs(t.x-c)+Math.abs(c-e)*.6;h<l&&(l=h,a=c)}return s(t.y)?s(n)&&Math.abs(e-t.x)<2?[e,n]:[a,o?15-.6:17+.6]:r?Math.abs(t.x-a)<.6&&t.y>15-1.4?[a,17+.6]:[a,15-.55]:Math.abs(t.x-a)<.6&&t.y<17+1.4?[a,15-.6]:[a,17+.55]}move(t,e,n){let s=e.x,r=e.y,o=t.def&&t.def.jump;!t.air&&!o&&([s,r]=this.waypoint(t,e.x,e.y));let a=s-t.x,l=r-t.y,c=Math.hypot(a,l);if(c<1e-4)return;a/=c,l/=c,t.air||([a,l]=this.avoid(t,e,a,l,c));let h=t.speed*n;t.def&&t.def.charge&&(t.charging?h*=t.def.charge.speed:(t.run+=t.speed*n*Re,t.run>=t.def.charge.dist&&(t.charging=!0,this.emit({t:"charge",x:t.x,y:t.y}))));let u=Math.min(c,h*Re);t.x+=a*u,t.y+=l*u}avoid(t,e,n,s,r){let o=null,a=1/0;for(let M of this.entities){if(M.kind==="unit"||M.hp<=0||M===e)continue;let T=M.x-t.x,C=M.y-t.y,y=T*n+C*s;if(y<=0||y>Math.min(r,3.2)+M.radius)continue;let A=T*s-C*n,L=M.radius*.9+t.radius+.15;Math.abs(A)<L&&y<a&&(a=y,o={s:M,perp:A})}if(!o)return[n,s];let{s:l}=o,c=t.x-l.x,h=t.y-l.y,u=Math.hypot(c,h)||1,f=c*n+h*s,d=c-f*n,p=h-f*s,x=Math.hypot(d,p);x<.08&&(d=-s,p=n,d*(18/2-l.x||1)<0&&(d=-d,p=-p),x=1),d/=x,p/=x;let g=-h/u,m=c/u;g*d+m*p+g*n+m*s<0&&(g=-g,m=-m);let _=g*.85+n*.15,w=m*.85+s*.15,v=Math.hypot(_,w)||1;return[_/v,w/v]}updateProjectiles(){let t=[];for(let e of this.projectiles){e.t+=Re;let n=this.get(e.tid);if(n&&n.hp>0&&(e.tx=n.x,e.ty=n.y),e.t<e.dur){t.push(e);continue}if(e.splash>0){for(let s of this.entities)s.hp<=0||s.owner===e.owner||Ur({owner:e.owner,targets:e.targets},s)&&ci(e.tx,e.ty,s.x,s.y)<=e.splash+s.radius*.5&&(this.damage(s,e.dmg,e.owner),e.slow&&(s.slowT=Math.max(s.slowT,e.slow)));this.emit({t:"splash",x:e.tx,y:e.ty,r:e.splash,p:e.kind})}else n&&n.hp>0&&(this.damage(n,e.dmg,e.owner),e.slow&&n.kind!=="tower"&&(n.slowT=Math.max(n.slowT,e.slow)))}this.projectiles=t}updateSpells(){if(!this.spells.length)return;let t=[];for(let e of this.spells){if(e.t+=Re,e.t<e.dur){t.push(e);continue}this.resolveSpell(e)}this.spells=t}resolveCollisions(){let t=this.entities.filter(s=>s.kind==="unit"&&s.hp>0),e=this.entities.filter(s=>s.kind!=="unit"&&s.hp>0),n=t.length;for(let s=0;s<2;s++)for(let r=0;r<n;r++){let o=t[r];for(let a=r+1;a<n;a++){let l=t[a];if(o.air!==l.air)continue;let c=l.x-o.x,h=l.y-o.y,u=(o.radius+l.radius)*.92;if(c>u||c<-u||h>u||h<-u)continue;let f=Math.hypot(c,h);if(f>=u)continue;f<1e-4&&(c=(o.id%2?1:-1)*.01,h=.01,f=Math.hypot(c,h));let d=u-f,p=o.deploy>0||o.freezeT>0?o.mass*3:o.mass,x=l.deploy>0||l.freezeT>0?l.mass*3:l.mass,g=x/(p+x),m=p/(p+x),_=c/f,w=h/f;o.x-=_*d*g,o.y-=w*d*g,l.x+=_*d*m,l.y+=w*d*m}}for(let s of t){if(!s.air){for(let r of e){let o=s.x-r.x,a=s.y-r.y,l=s.radius+r.radius*.9;if(o>l||o<-l||a>l||a<-l)continue;let c=Math.hypot(o,a);if(c<l){let h=c>1e-4?o/c:0,u=c>1e-4?a/c:s.owner===0?1:-1;s.x=r.x+h*l,s.y=r.y+u*l}}if(s.y>15&&s.y<17&&!(s.def&&s.def.jump)){let r=dn[0];for(let o of dn)Math.abs(s.x-o)<Math.abs(s.x-r)&&(r=o);if(Math.abs(s.x-r)<Ln+.25){let o=Ln-.15;s.x=Math.min(r+o,Math.max(r-o,s.x))}else s.y=s.y<16?15-.02:17+.02}}s.x=Math.min(18-s.radius*.6,Math.max(s.radius*.6,s.x)),s.y=Math.min(32-s.radius*.6,Math.max(s.radius*.6,s.y))}}cleanup(){let t=!1,e=[];for(let n of this.entities)n.hp>0||n.gone||(n.gone=!0,n.hp=0,t=!0,this.byId.delete(n.id),e.push(n));if(t){this.entities=this.entities.filter(n=>n.hp>0||n.kind==="tower");for(let n of e){if(n.kind==="tower"){this.emit({t:"tower",o:n.owner,i:n.tidx,x:n.x,y:n.y,king:n.tkind==="king"?1:0});let r=1-n.owner;if(n.tkind==="king")this.crowns[r]=3,this.finish(r);else{this.crowns[r]=Math.min(3,this.crowns[r]+1);let o=this.towers[n.owner][2];!o.active&&o.hp>0&&(o.active=!0,this.emit({t:"king",o:n.owner})),this.phase==="overtime"&&this.finish(r)}continue}n.kind==="unit"&&(this.unitCount[n.owner]=Math.max(0,this.unitCount[n.owner]-1)),this.stats[1-n.owner].kills++,this.emit({t:"death",x:n.x,y:n.y,u:n.u,a:n.air?1:0,o:n.owner});let s=n.def;if(s){if(s.deathDamage){for(let r of this.entities)r.hp<=0||r.owner===n.owner||r.air||ci(n.x,n.y,r.x,r.y)<=s.deathDamage.radius+r.radius*.5&&this.damage(r,s.deathDamage.dmg,n.owner);this.emit({t:"quake",x:n.x,y:n.y,r:s.deathDamage.radius})}if(s.deathSpawn){let r=n.owner===0?1:-1;for(let[o,a]of Cs(s.deathSpawn.count)){let l=this.spawnUnit(n.owner,s.deathSpawn.unit,n.x+o*r*1.2,n.y+a*r*1.2,.3);l&&this.emit({t:"spawn",o:n.owner,u:l.u,x:l.x,y:l.y})}}}}}}updateClock(){if(this.phase!=="over"&&(this.time-=Re,this.phase==="normal"&&this.time<=Bu&&(this.phase="double",this.emit({t:"phase",ph:Mc.double})),this.time<=0))if(this.phase!=="overtime"){if(this.crowns[0]!==this.crowns[1])return this.finish(this.crowns[0]>this.crowns[1]?0:1,"time");this.phase="overtime",this.time=zu,this.emit({t:"phase",ph:Mc.overtime})}else{let t=s=>Math.min(...this.towers[s].map(r=>Math.max(0,r.hp)/r.maxHp).filter(r=>r>0),1),e=t(0),n=t(1);this.finish(Math.abs(e-n)<1e-6?2:e>n?0:1,"tiebreak")}}finish(t,e=""){this.phase!=="over"&&(this.phase="over",this.winner=t,this.emit({t:"end",w:t,r:e}))}drainEvents(){let t=this.events;return this.events=[],t}snapshot(t){let e=[];for(let o of this.entities){if(o.kind==="tower"||o.hp<=0)continue;let a=0;o.freezeT>0&&(a|=Zn.frozen),o.slowT>0&&(a|=Zn.slowed),o.rageT>0&&(a|=Zn.raged),o.charging&&(a|=Zn.charging),o.stunT>0&&(a|=Zn.stunned),e.push([o.id,o.u,o.owner,Math.round(o.x*20),Math.round(o.y*20),Math.ceil(o.hp),Math.max(0,Math.round(o.deploy*10)),Math.min(30,Math.round(o.atkT*10)),o.targetId||0,a,o.stage||0])}let n=[],s=[],r=[];for(let o of[0,1])for(let a of this.towers[o])n.push(Math.max(0,Math.ceil(a.hp))),r.push(a.freezeT>0?1:0);for(let o of[0,1])s.push(this.towers[o][2].active?1:0);return{t:"s",k:this.tick,tm:Math.max(0,Math.round(this.time*10)),ph:Mc[this.phase],c:this.crowns.slice(),el:Math.round(this.elixir[t]*100),h:this.players[t].hand.slice(),n:this.players[t].queue[0],ack:this.lastSeq[t],e,tw:n,ka:s,tf:r,w:this.winner}}}});function f0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function d0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gd(){let i=Kr("canvas");return i.style.display="block",i}function Fh(...i){let t="THREE."+i.shift();Js?Js("log",t,...i):console.log(t,...i)}function xd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Yt(...i){i=xd(i);let t="THREE."+i.shift();if(Js)Js("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=xd(i);let t="THREE."+i.shift();if(Js)Js("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ds(...i){let t=i.join(" ");t in nf||(nf[t]=!0,Yt(...i))}function yd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function p0(i,t){return(i%t+t)%t}function Dc(i,t,e){return(1-e)*i+e*t}function Br(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function m0(){let i={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ee&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ee&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jr]:{primaries:t,whitePoint:n,transfer:jr,toXYZ:rf,fromXYZ:of,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:rf,fromXYZ:of,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}function Bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Yc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cs.fromArray(i,r);let a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=t.dot(cs),c=e.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function P0(i,t,e,n,s,r,o,a){let l;if(t.side===gn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ki,a),l===null)return null;ua.copy(a),ua.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:i}}function fa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,aa),i.getVertexPosition(l,la),i.getVertexPosition(c,ca);let h=P0(i,t,e,n,aa,la,ca,xf);if(h){let u=new D;Xi.getBarycoord(xf,aa,la,ca,u),s&&(h.uv=Xi.getInterpolatedAttribute(s,a,l,c,u,new ft)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,a,l,c,u,new ft)),o&&(h.normal=Xi.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new D,materialIndex:0};Xi.getNormal(aa,la,ca,f.normal),h.face=f,h.barycoord=u}return h}function bf(i,t,e,n,s,r,o){let a=lh.distanceSqToPoint(i);if(a<e){let l=new D;lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function Oh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function wf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function N0(i,t){let e=1-i;return e*e*t}function U0(i,t){return 2*(1-i)*i*t}function k0(i,t){return i*i*t}function Yr(i,t,e,n){return N0(i,t)+U0(i,e)+k0(i,n)}function F0(i,t){let e=1-i;return e*e*e*t}function O0(i,t){let e=1-i;return 3*e*e*i*t}function B0(i,t){return 3*(1-i)*i*i*t}function z0(i,t){return i*i*i*t}function $r(i,t,e,n,s){return F0(i,t)+O0(i,e)+B0(i,n)+z0(i,s)}function V0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=bd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=q0(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ho(r,o,e,a,l,c,0),o}function bd(i,t,e,n,s){let r;if(s===im(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Tf(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Tf(o/n|0,i[o],i[o+1],r);return r&&cr(r,r.next)&&(fo(r),r=r.next),r}function ms(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(cr(e,e.next)||Ve(e.prev,e,e.next)===0)){if(fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ho(i,t,e,n,s,r,o){if(!i)return;!o&&r&&j0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?H0(i,n,s,r):G0(i)){t.push(l.i,i.i,c.i),fo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=W0(ms(i),t),ho(i,t,e,n,s,r,2)):o===2&&X0(i,t,e,n,s,r):ho(ms(i),t,e,n,s,r,1);break}}}function G0(i){let t=i.prev,e=i,n=i.next;if(Ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&qr(s,a,r,l,o,c,p.x,p.y)&&Ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function H0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ve(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),m=hh(d,p,t,e,n),_=hh(x,g,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=m&&v&&v.z<=_;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&qr(a,h,l,u,c,f,w.x,w.y)&&Ve(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&qr(a,h,l,u,c,f,v.x,v.y)&&Ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==o&&qr(a,h,l,u,c,f,w.x,w.y)&&Ve(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&qr(a,h,l,u,c,f,v.x,v.y)&&Ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function W0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!cr(n,s)&&Sd(n,e,e.next,s)&&uo(n,s)&&uo(s,n)&&(t.push(n.i,e.i,s.i),fo(e),fo(e.next),e=i=s),e=e.next}while(e!==i);return ms(e)}function X0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tm(o,a)){let l=wd(o,a);o=ms(o,o.next),l=ms(l,l.next),ho(o,t,e,n,s,r,0),ho(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function q0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=bd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Q0(c))}s.sort(Y0);for(let r=0;r<s.length;r++)e=$0(s[r],e);return e}function Y0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function $0(i,t){let e=Z0(i,t);if(!e)return t;let n=wd(e,i);return ms(n,n.next),ms(e,e.next)}function Z0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(cr(i,e))return e;do{if(cr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Md(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);uo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&J0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function J0(i,t){return Ve(i.prev,i,t.prev)<0&&Ve(t.next,i,i.next)<0}function j0(i,t,e,n){let s=i;do s.z===0&&(s.z=hh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,K0(s)}function K0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function hh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Q0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Md(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function qr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Md(i,t,e,n,s,r,o,a)}function tm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!em(i,t)&&(uo(i,t)&&uo(t,i)&&nm(i,t)&&(Ve(i.prev,i,t.prev)||Ve(i,t.prev,t))||cr(i,t)&&Ve(i.prev,i,i.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function cr(i,t){return i.x===t.x&&i.y===t.y}function Sd(i,t,e,n){let s=ya(Ve(i,t,e)),r=ya(Ve(i,t,n)),o=ya(Ve(e,n,i)),a=ya(Ve(e,n,t));return!!(s!==r&&o!==a||s===0&&xa(i,e,t)||r===0&&xa(i,n,t)||o===0&&xa(e,i,n)||a===0&&xa(e,t,n))}function xa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ya(i){return i>0?1:i<0?-1:0}function em(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function uo(i,t){return Ve(i.prev,i,i.next)<0?Ve(i,t,i.next)>=0&&Ve(i,i.prev,t)>=0:Ve(i,t,i.prev)<0||Ve(i,i.next,t)<0}function nm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wd(i,t){let e=uh(i.i,i.x,i.y),n=uh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Tf(i,t,e,n){let s=uh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function im(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Ef(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Af(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function rm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Cf(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Cf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=vs(i[e]);for(let s in n)t[s]=n[s]}return t}function Cf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function om(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}function Ws(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Ed(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function cm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function hm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Ed(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=cm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function Rf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}function Uf(i,t){return i.distance-t.distance}function mh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)mh(r[o],t,e,!0)}}function Gh(i,t,e,n){let s=_m(n);switch(e){case Nh:return i*t;case pl:return i*t/s.components*s.byteLength;case ml:return i*t/s.components*s.byteLength;case ns:return i*t*2/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case Uh:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case vo:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:case bl:return Math.max(i,16)*Math.max(t,8)/4;case yl:case vl:return Math.max(i,8)*Math.max(t,8)/2;case Ml:case Sl:case Tl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wl:case wo:case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Hl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case To:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _m(i){switch(i){case wn:case Ih:return{byteLength:1,components:1};case vr:case Ph:case ri:return{byteLength:2,components:1};case fl:case dl:return{byteLength:2,components:4};case si:case ul:case Bn:return{byteLength:4,components:1};case Lh:case Dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var kf,xh,Ff,xo,Of,yr,Ki,gn,mi,gi,_r,xs,yh,_h,Bf,ys,zf,Vf,Gf,Hf,Wf,Xf,qf,Yf,vh,bh,$f,Zf,Jf,jf,Kf,Qf,td,ed,nd,Sa,wa,Ta,$s,Ea,Aa,Ca,Ra,al,id,sd,ii,Mh,Sh,wh,Th,Eh,Ah,Ch,Rh,Qi,_s,ll,cl,yo,ps,ui,Ia,tn,rd,_o,sn,hl,ts,wn,Ih,Ph,vr,ul,si,Bn,ri,fl,dl,br,Lh,Dh,Nh,Uh,zn,fi,es,pl,ml,ns,gl,xl,vo,bo,Mo,So,yl,_l,vl,bl,Ml,Sl,wl,Tl,El,wo,Al,Cl,Rl,Il,Pl,Ll,Dl,Nl,Ul,kl,Fl,Ol,Bl,zl,Vl,Gl,Hl,Wl,Xl,ql,To,Yl,Zr,Pa,ba,sh,rh,oh,ah,od,$l,ad,Pi,en,Jr,jr,Ee,Ma,ld,cd,hd,ud,Zl,fd,dd,Jl,pd,md,xi,kh,Qn,Zs,nf,Js,_d,di,ln,Lc,La,Hh,ft,Mn,Wh,D,Nc,sf,Xh,ee,Uc,rf,of,ge,Ds,Da,g0,js,x0,Fc,pn,qh,ze,Na,Sn,Qr,Ua,ol,me,Ns,Jn,y0,_0,zi,jo,En,af,lf,Fn,Ks,v0,cf,Us,Mi,Ko,zr,b0,M0,hf,uf,ff,df,S0,ks,Oc,Ge,be,w0,Qs,vd,Vi,Qo,Vt,cn,tr,er,jn,Si,zc,wi,Fs,Os,pf,Vc,Gc,Hc,Wc,Xc,qc,Xi,ti,Ti,Kn,ta,Bs,zs,Vs,Gi,Hi,ls,Vr,ea,na,cs,$e,ia,T0,Be,to,eo,ce,E0,Gr,$c,Ci,A0,kn,Zc,Gs,An,Hr,Qe,Oe,Jc,C0,R0,bn,I0,Ri,Ei,jc,sa,ra,nr,He,mf,hs,oa,gf,aa,la,ca,Kc,ha,xf,ua,ie,no,pi,Hs,yf,da,_f,L0,Wr,Xr,ei,us,D0,pa,ir,ka,vf,lh,ma,ga,sr,io,rr,qi,Fa,so,Me,or,Yi,mn,ni,ar,Ii,Cn,lr,Oa,Mf,Sf,Qc,th,eh,Ba,ro,za,oo,Va,ao,Ga,lo,ch,Ha,co,rn,fh,fs,hr,sm,ur,fr,dr,on,$i,On,pr,Td,am,lm,hn,Wa,Ae,Xa,qa,Zi,Ya,$a,Za,Ja,Rn,Ji,ja,Ka,Qa,po,ji,tl,el,Ad,nl,mo,mr,ih,If,Pf,il,_a,va,hi,go,Wi,Lf,Df,nn,gr,dh,gs,Xs,qs,sl,rl,zh,um,Vh,fm,dm,pm,mm,gm,xm,ym,ph,Fe,c1,Nf,xr,Yh,gh,$h=li(()=>{kf=0,xh=1,Ff=2,xo=1,Of=2,yr=3,Ki=0,gn=1,mi=2,gi=0,_r=1,xs=2,yh=3,_h=4,Bf=5,ys=100,zf=101,Vf=102,Gf=103,Hf=104,Wf=200,Xf=201,qf=202,Yf=203,vh=204,bh=205,$f=206,Zf=207,Jf=208,jf=209,Kf=210,Qf=211,td=212,ed=213,nd=214,Sa=0,wa=1,Ta=2,$s=3,Ea=4,Aa=5,Ca=6,Ra=7,al=0,id=1,sd=2,ii=0,Mh=1,Sh=2,wh=3,Th=4,Eh=5,Ah=6,Ch=7,Rh=300,Qi=301,_s=302,ll=303,cl=304,yo=306,ps=1e3,ui=1001,Ia=1002,tn=1003,rd=1004,_o=1005,sn=1006,hl=1007,ts=1008,wn=1009,Ih=1010,Ph=1011,vr=1012,ul=1013,si=1014,Bn=1015,ri=1016,fl=1017,dl=1018,br=1020,Lh=35902,Dh=35899,Nh=1021,Uh=1022,zn=1023,fi=1026,es=1027,pl=1028,ml=1029,ns=1030,gl=1031,xl=1033,vo=33776,bo=33777,Mo=33778,So=33779,yl=35840,_l=35841,vl=35842,bl=35843,Ml=36196,Sl=37492,wl=37496,Tl=37488,El=37489,wo=37490,Al=37491,Cl=37808,Rl=37809,Il=37810,Pl=37811,Ll=37812,Dl=37813,Nl=37814,Ul=37815,kl=37816,Fl=37817,Ol=37818,Bl=37819,zl=37820,Vl=37821,Gl=36492,Hl=36494,Wl=36495,Xl=36283,ql=36284,To=36285,Yl=36286,Zr=2300,Pa=2301,ba=2302,sh=2303,rh=2400,oh=2401,ah=2402,od=3200,$l=0,ad=1,Pi="",en="srgb",Jr="srgb-linear",jr="linear",Ee="srgb",Ma=7680,ld=519,cd=512,hd=513,ud=514,Zl=515,fd=516,dd=517,Jl=518,pd=519,md=35044,xi=35048,kh="300 es",Qn=2e3,Zs=2001;nf={},Js=null;_d={[Sa]:wa,[Ta]:Ca,[Ea]:Ra,[$s]:Aa,[wa]:Sa,[Ca]:Ta,[Ra]:Ea,[Aa]:$s},di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,La=180/Math.PI;Hh=class Hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;ft=Hh,Mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*x;g<0&&(f=-f,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let _=Math.acos(g),w=Math.sin(_);m=Math.sin(m*_)/w,a=Math.sin(a*_)/w,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+x*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wh=class Wh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nc.copy(this).projectOnVector(t),this.sub(Nc)}reflect(t){return this.sub(Nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wh.prototype.isVector3=!0;D=Wh,Nc=new D,sf=new Mn,Xh=class Xh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],g=s[3],m=s[6],_=s[1],w=s[4],v=s[7],M=s[2],T=s[5],C=s[8];return r[0]=o*x+a*_+l*M,r[3]=o*g+a*w+l*T,r[6]=o*m+a*v+l*C,r[1]=c*x+h*_+u*M,r[4]=c*g+h*w+u*T,r[7]=c*m+h*v+u*C,r[2]=f*x+d*_+p*M,r[5]=f*g+d*w+p*T,r[8]=f*m+d*v+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(t,e)),this}rotate(t){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-t)),this}translate(t,e){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xh.prototype.isMatrix3=!0;ee=Xh,Uc=new ee,rf=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ge=m0();Da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=Kr("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},g0=0,js=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Mr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kc(s[o].image)):r.push(kc(s[o]))}else r=kc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};x0=0,Fc=new D,pn=class i extends di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ui,s=ui,r=sn,o=ts,a=zn,l=wn,c=i.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Mr(),this.name="",this.source=new js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ps:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ps:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Rh;pn.DEFAULT_ANISOTROPY=1;qh=class qh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(d+1)/2,M=(m+1)/2,T=(h+f)/4,C=(u+x)/4,y=(p+g)/4;return w>v&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=C/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qh.prototype.isVector4=!0;ze=qh,Na=class extends di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new pn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new js(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends Na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qr=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Ua=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},ol=class ol{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ol().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),o=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(y0,t,_0)}lookAt(t,e,n){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),zi.crossVectors(n,En),zi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),zi.crossVectors(n,En)),zi.normalize(),jo.crossVectors(En,zi),s[0]=zi.x,s[4]=jo.x,s[8]=En.x,s[1]=zi.y,s[5]=jo.y,s[9]=En.y,s[2]=zi.z,s[6]=jo.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],w=n[7],v=n[11],M=n[15],T=s[0],C=s[4],y=s[8],A=s[12],L=s[1],U=s[5],z=s[9],X=s[13],F=s[2],O=s[6],H=s[10],G=s[14],nt=s[3],J=s[7],Q=s[11],st=s[15];return r[0]=o*T+a*L+l*F+c*nt,r[4]=o*C+a*U+l*O+c*J,r[8]=o*y+a*z+l*H+c*Q,r[12]=o*A+a*X+l*G+c*st,r[1]=h*T+u*L+f*F+d*nt,r[5]=h*C+u*U+f*O+d*J,r[9]=h*y+u*z+f*H+d*Q,r[13]=h*A+u*X+f*G+d*st,r[2]=p*T+x*L+g*F+m*nt,r[6]=p*C+x*U+g*O+m*J,r[10]=p*y+x*z+g*H+m*Q,r[14]=p*A+x*X+g*G+m*st,r[3]=_*T+w*L+v*F+M*nt,r[7]=_*C+w*U+v*O+M*J,r[11]=_*y+w*z+v*H+M*Q,r[15]=_*A+w*X+v*G+M*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],_=l*d-c*f,w=a*d-c*u,v=a*f-l*u,M=o*d-c*h,T=o*f-l*h,C=o*u-a*h;return e*(x*_-g*w+m*v)-n*(p*_-g*M+m*T)+s*(p*w-x*M+m*C)-r*(p*v-x*T+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=e*a-n*o,w=e*l-s*o,v=e*c-r*o,M=n*l-s*a,T=n*c-r*a,C=s*c-r*l,y=h*x-u*p,A=h*g-f*p,L=h*m-d*p,U=u*g-f*x,z=u*m-d*x,X=f*m-d*g,F=_*X-w*z+v*U+M*L-T*A+C*y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/F;return t[0]=(a*X-l*z+c*U)*O,t[1]=(s*z-n*X-r*U)*O,t[2]=(x*C-g*T+m*M)*O,t[3]=(f*T-u*C-d*M)*O,t[4]=(l*L-o*X-c*A)*O,t[5]=(e*X-s*L+r*A)*O,t[6]=(g*v-p*C-m*w)*O,t[7]=(h*C-f*v+d*w)*O,t[8]=(o*z-a*L+c*y)*O,t[9]=(n*L-e*z-r*y)*O,t[10]=(p*T-x*v+m*_)*O,t[11]=(u*v-h*T-d*_)*O,t[12]=(a*A-o*U-l*y)*O,t[13]=(e*U-n*A+s*y)*O,t[14]=(x*w-p*M-g*_)*O,t[15]=(h*M-u*w+f*_)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,_=l*c,w=l*h,v=l*u,M=n.x,T=n.y,C=n.z;return s[0]=(1-(x+m))*M,s[1]=(d+v)*M,s[2]=(p-w)*M,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(f+m))*T,s[6]=(g+_)*T,s[7]=0,s[8]=(p+w)*C,s[9]=(g-_)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Jn.copy(this);let c=1/o,h=1/a,u=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Qn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Zs)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Qn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Zs)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ol.prototype.isMatrix4=!0;me=ol,Ns=new D,Jn=new me,y0=new D(0,0,0),_0=new D(1,1,1),zi=new D,jo=new D,En=new D,af=new me,lf=new Mn,Fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return af.makeRotationFromQuaternion(t),this.setFromRotationMatrix(af,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lf.setFromEuler(this),this.setFromQuaternion(lf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";Ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},v0=0,cf=new D,Us=new Mn,Mi=new me,Ko=new D,zr=new D,b0=new D,M0=new Mn,hf=new D(1,0,0),uf=new D(0,1,0),ff=new D(0,0,1),df={type:"added"},S0={type:"removed"},ks={type:"childadded",child:null},Oc={type:"childremoved",child:null},Ge=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Fn,n=new Mn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new ee}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(hf,t)}rotateY(t){return this.rotateOnAxis(uf,t)}rotateZ(t){return this.rotateOnAxis(ff,t)}translateOnAxis(t,e){return cf.copy(t).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hf,t)}translateY(t){return this.translateOnAxis(uf,t)}translateZ(t){return this.translateOnAxis(ff,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ko.copy(t):Ko.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(zr,Ko,this.up):Mi.lookAt(Ko,zr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(Mi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(df),ks.child=t,this.dispatchEvent(ks),ks.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(S0),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(df),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,b0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,M0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new D(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;be=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},w0={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=p0(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Bc(o,r,t+1/3),this.g=Bc(o,r,t),this.b=Bc(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let n=vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ge.workingToColorSpace(cn.copy(this),t),Math.round(he(cn.r*255,0,255))*65536+Math.round(he(cn.g*255,0,255))*256+Math.round(he(cn.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(cn.copy(this),e);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=en){ge.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,s=cn.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Qo);let n=Dc(Vi.h,Qo.h,e),s=Dc(Vi.s,Qo.s,e),r=Dc(Vi.l,Qo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Vt;Vt.NAMES=vd;tr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new D,Si=new D,zc=new D,wi=new D,Fs=new D,Os=new D,pf=new D,Vc=new D,Gc=new D,Hc=new D,Wc=new ze,Xc=new ze,qc=new ze,Xi=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),jn.subVectors(t,e),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){jn.subVectors(s,e),Si.subVectors(n,e),zc.subVectors(t,e);let o=jn.dot(jn),a=jn.dot(Si),l=jn.dot(zc),c=Si.dot(Si),h=Si.dot(zc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Wc.setScalar(0),Xc.setScalar(0),qc.setScalar(0),Wc.fromBufferAttribute(t,e),Xc.fromBufferAttribute(t,n),qc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Wc,r.x),o.addScaledVector(Xc,r.y),o.addScaledVector(qc,r.z),o}static isFrontFacing(t,e,n,s){return jn.subVectors(n,e),Si.subVectors(t,e),jn.cross(Si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),jn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Fs.subVectors(s,n),Os.subVectors(r,n),Vc.subVectors(t,n);let l=Fs.dot(Vc),c=Os.dot(Vc);if(l<=0&&c<=0)return e.copy(n);Gc.subVectors(t,s);let h=Fs.dot(Gc),u=Os.dot(Gc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fs,o);Hc.subVectors(t,r);let d=Fs.dot(Hc),p=Os.dot(Hc);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Os,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return pf.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(pf,a);let m=1/(g+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(Fs,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ti=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vr),ea.subVectors(this.max,Vr),Bs.subVectors(t.a,Vr),zs.subVectors(t.b,Vr),Vs.subVectors(t.c,Vr),Gi.subVectors(zs,Bs),Hi.subVectors(Vs,zs),ls.subVectors(Bs,Vs);let e=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-ls.z,ls.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,ls.z,0,-ls.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-ls.y,ls.x,0];return!Yc(e,Bs,zs,Vs,ea)||(e=[1,0,0,0,1,0,0,0,1],!Yc(e,Bs,zs,Vs,ea))?!1:(na.crossVectors(Gi,Hi),e=[na.x,na.y,na.z],Yc(e,Bs,zs,Vs,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,ta=new ti,Bs=new D,zs=new D,Vs=new D,Gi=new D,Hi=new D,ls=new D,Vr=new D,ea=new D,na=new D,cs=new D;$e=new D,ia=new ft,T0=0,Be=class extends di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=md,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Br(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=vn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Br(e,this.array)),e}setX(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Br(e,this.array)),e}setY(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Br(e,this.array)),e}setZ(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Br(e,this.array)),e}setW(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array),s=vn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),n=vn(n,this.array),s=vn(s,this.array),r=vn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},to=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}},eo=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}},ce=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},E0=new ti,Gr=new D,$c=new D,Ci=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):E0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);let e=Gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add($c)),this.expandByPoint(Gr.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},A0=0,kn=new me,Zc=new Ge,Gs=new D,An=new ti,Hr=new ti,Qe=new D,Oe=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(f0(t)?eo:to)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return Zc.lookAt(t),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(An.min,Hr.min),An.expandByPoint(Qe),Qe.addVectors(An.max,Hr.max),An.expandByPoint(Qe)):(An.expandByPoint(Hr.min),An.expandByPoint(Hr.max))}An.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(t,c),Qe.add(Gs)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new D,l[y]=new D;let c=new D,h=new D,u=new D,f=new ft,d=new ft,p=new ft,x=new D,g=new D;function m(y,A,L){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,L),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let U=1/(d.x*p.y-p.x*d.y);isFinite(U)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(U),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(U),a[y].add(x),a[A].add(x),a[L].add(x),l[y].add(g),l[A].add(g),l[L].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,A=_.length;y<A;++y){let L=_[y],U=L.start,z=L.count;for(let X=U,F=U+z;X<F;X+=3)m(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let w=new D,v=new D,M=new D,T=new D;function C(y){M.fromBufferAttribute(s,y),T.copy(M);let A=a[y];w.copy(A),w.sub(M.multiplyScalar(M.dot(A))).normalize(),v.crossVectors(T,A);let U=v.dot(l[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,U)}for(let y=0,A=_.length;y<A;++y){let L=_[y],U=L.start,z=L.count;for(let X=U,F=U+z;X<F;X+=3)C(t.getX(X+0)),C(t.getX(X+1)),C(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Be(f,h,u)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jc=new D,C0=new D,R0=new ee,bn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Jc.subVectors(n,e).cross(C0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Jc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||R0.getNormalMatrix(t),s=this.coplanarPoint(Jc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},I0=0,Ri=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=_r,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=bh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ei=new D,jc=new D,sa=new D,ra=new D,nr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jc.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),ra.copy(this.origin).sub(jc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(sa),a=ra.dot(this.direction),l=-ra.dot(sa),c=ra.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jc).addScaledVector(sa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ei.subVectors(t.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,_=n.y-o.y,w=n.z-o.z,v=Math.abs(l),M=Math.abs(c),T=Math.abs(h),C,y,A,L,U,z,X,F,O,H,G,nt;if(v>=M&&v>=T?(A=l,z=u,O=p,nt=m,l>=0?(C=c,y=h,L=f,U=d,X=x,F=g,H=_,G=w):(C=h,y=c,L=d,U=f,X=g,F=x,H=w,G=_)):M>=T?(A=c,z=f,O=x,nt=_,c>=0?(C=h,y=l,L=d,U=u,X=g,F=p,H=w,G=m):(C=l,y=h,L=u,U=d,X=p,F=g,H=m,G=w)):(A=h,z=d,O=g,nt=w,h>=0?(C=l,y=c,L=u,U=f,X=p,F=x,H=m,G=_):(C=c,y=l,L=f,U=u,X=x,F=p,H=_,G=m)),A===0)return null;let J=C/A,Q=y/A,st=1/A,Dt=L-J*z,Pt=U-Q*z,xe=X-J*O,ue=F-Q*O,_e=H-J*nt,it=G-Q*nt,at=_e*ue-it*xe,St=Dt*it-Pt*_e,$t=xe*Pt-ue*Dt;if(s){if(at<0||St<0||$t<0)return null}else if((at<0||St<0||$t<0)&&(at>0||St>0||$t>0))return null;let Ct=at+St+$t;if(Ct===0)return null;let Jt=st*(at*z+St*O+$t*nt);return(Ct>0?Jt<0:Jt>0)?null:this.at(Jt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mf=new me,hs=new nr,oa=new Ci,gf=new D,aa=new D,la=new D,ca=new D,Kc=new D,ha=new D,xf=new D,ua=new D,ie=class extends Ge{constructor(t=new Oe,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Kc.fromBufferAttribute(u,t),o?ha.addScaledVector(Kc,h):ha.addScaledVector(Kc.sub(e),h))}e.add(ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(oa.containsPoint(hs.origin)===!1&&(hs.intersectSphere(oa,gf)===null||hs.origin.distanceToSquared(gf)>(t.far-t.near)**2))&&(mf.copy(r).invert(),hs.copy(t.ray).applyMatrix4(mf),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),w=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,M=w;v<M;v+=3){let T=a.getX(v),C=a.getX(v+1),y=a.getX(v+2);s=fa(this,m,t,n,c,h,u,T,C,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),w=a.getX(g+1),v=a.getX(g+2);s=fa(this,o,t,n,c,h,u,_,w,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],_=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,M=w;v<M;v+=3){let T=v,C=v+1,y=v+2;s=fa(this,m,t,n,c,h,u,T,C,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,w=g+1,v=g+2;s=fa(this,o,t,n,c,h,u,_,w,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};no=class extends pn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=tn,h=tn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pi=class extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hs=new me,yf=new me,da=[],_f=new ti,L0=new me,Wr=new ie,Xr=new Ci,ei=class extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,L0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),_f.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(_f)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Xr.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),t.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),yf.multiplyMatrices(n,Hs),Wr.matrixWorld=yf,Wr.raycast(t,da);for(let o=0,a=da.length;o<a;o++){let l=da[o];l.instanceId=r,l.object=this,e.push(l)}da.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new no(new Float32Array(s*this.count),s,this.count,pl,Bn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new Ci,D0=new ft(.5,.5),pa=new D,ir=class{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,o=new bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],w=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-o,d-h,m-p,M-_).normalize(),s[1].setComponents(c+o,d+h,m+p,M+_).normalize(),s[2].setComponents(c+a,d+u,m+x,M+w).normalize(),s[3].setComponents(c-a,d-u,m-x,M-w).normalize(),n)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,d-f,m-g,M-v).normalize();else if(s[4].setComponents(c-l,d-f,m-g,M-v).normalize(),e===Qn)s[5].setComponents(c+l,d+f,m+g,M+v).normalize();else if(e===Zs)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);let e=D0.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pa.x=s.normal.x>0?t.max.x:t.min.x,pa.y=s.normal.y>0?t.max.y:t.min.y,pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ka=class extends Ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vf=new me,lh=new nr,ma=new Ci,ga=new D,sr=class extends Ge{constructor(t=new Oe,e=new ka){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;vf.copy(s).invert(),lh.copy(t.ray).applyMatrix4(vf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);ga.fromBufferAttribute(u,g),bf(ga,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)ga.fromBufferAttribute(u,p),bf(ga,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};io=class extends pn{constructor(t=[],e=Qi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rr=class extends pn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qi=class extends pn{constructor(t,e,n=si,s,r,o,a=tn,l=tn,c,h=fi,u=1){if(h!==fi&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fa=class extends qi{constructor(t,e=si,n=Qi,s,r,o=tn,a=tn,l,c=fi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},so=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Me=class i extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function p(x,g,m,_,w,v,M,T,C,y,A){let L=v/C,U=M/y,z=v/2,X=M/2,F=T/2,O=C+1,H=y+1,G=0,nt=0,J=new D;for(let Q=0;Q<H;Q++){let st=Q*U-X;for(let Dt=0;Dt<O;Dt++){let Pt=Dt*L-z;J[x]=Pt*_,J[g]=st*w,J[m]=F,c.push(J.x,J.y,J.z),J[x]=0,J[g]=0,J[m]=T>0?1:-1,h.push(J.x,J.y,J.z),u.push(Dt/C),u.push(1-Q/y),G+=1}}for(let Q=0;Q<y;Q++)for(let st=0;st<C;st++){let Dt=f+st+O*Q,Pt=f+st+O*(Q+1),xe=f+(st+1)+O*(Q+1),ue=f+(st+1)+O*Q;l.push(Dt,Pt,ue),l.push(Pt,xe,ue),nt+=6}a.addGroup(d,nt,A),d+=nt,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},or=class i extends Oe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=n*2+r,x=s+1,g=new D,m=new D;for(let _=0;_<=p;_++){let w=0,v=0,M=0,T=0;if(_<=n){let A=_/n,L=A*Math.PI/2;v=-h-t*Math.cos(L),M=t*Math.sin(L),T=-t*Math.cos(L),w=A*u}else if(_<=n+r){let A=(_-n)/r;v=-h+A*e,M=t,T=0,w=u+A*f}else{let A=(_-n-r)/n,L=A*Math.PI/2;v=h+t*Math.sin(L),M=t*Math.cos(L),T=t*Math.sin(L),w=u+f+A*u}let C=Math.max(0,Math.min(1,w/d)),y=0;_===0?y=.5/s:_===p&&(y=-.5/s);for(let A=0;A<=s;A++){let L=A/s,U=L*Math.PI*2,z=Math.sin(U),X=Math.cos(U);m.x=-M*X,m.y=v,m.z=M*z,a.push(m.x,m.y,m.z),g.set(-M*X,T,M*z),g.normalize(),l.push(g.x,g.y,g.z),c.push(L+y,C)}if(_>0){let A=(_-1)*x;for(let L=0;L<s;L++){let U=A+L,z=A+L+1,X=_*x+L,F=_*x+L+1;o.push(U,z,X),o.push(z,F,X)}}}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Yi=class i extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,h=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mn=class i extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=n/2,m=0;_(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(d,2));function _(){let v=new D,M=new D,T=0,C=(e-t)/n;for(let y=0;y<=r;y++){let A=[],L=y/r,U=L*(e-t)+t;for(let z=0;z<=s;z++){let X=z/s,F=X*l+a,O=Math.sin(F),H=Math.cos(F);M.x=U*O,M.y=-L*n+g,M.z=U*H,u.push(M.x,M.y,M.z),v.set(O,C,H).normalize(),f.push(v.x,v.y,v.z),d.push(X,1-L),A.push(p++)}x.push(A)}for(let y=0;y<s;y++)for(let A=0;A<r;A++){let L=x[A][y],U=x[A+1][y],z=x[A+1][y+1],X=x[A][y+1];(t>0||A!==0)&&(h.push(L,U,X),T+=3),(e>0||A!==r-1)&&(h.push(U,z,X),T+=3)}c.addGroup(m,T,0),m+=T}function w(v){let M=p,T=new ft,C=new D,y=0,A=v===!0?t:e,L=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*L,0),f.push(0,L,0),d.push(.5,.5),p++;let U=p;for(let z=0;z<=s;z++){let F=z/s*l+a,O=Math.cos(F),H=Math.sin(F);C.x=A*H,C.y=g*L,C.z=A*O,u.push(C.x,C.y,C.z),f.push(0,L,0),T.x=O*.5+.5,T.y=H*.5*L+.5,d.push(T.x,T.y),p++}for(let z=0;z<s;z++){let X=M+z,F=U+z;v===!0?h.push(F,F+1,X):h.push(F+1,F,X),y+=3}c.addGroup(m,y,v===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ni=class i extends mn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ar=class i extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let w=new D,v=new D,M=new D;for(let T=0;T<e.length;T+=3)d(e[T+0],w),d(e[T+1],v),d(e[T+2],M),l(w,v,M,_)}function l(_,w,v,M){let T=M+1,C=[];for(let y=0;y<=T;y++){C[y]=[];let A=_.clone().lerp(v,y/T),L=w.clone().lerp(v,y/T),U=T-y;for(let z=0;z<=U;z++)z===0&&y===T?C[y][z]=A:C[y][z]=A.clone().lerp(L,z/U)}for(let y=0;y<T;y++)for(let A=0;A<2*(T-y)-1;A++){let L=Math.floor(A/2);A%2===0?(f(C[y][L+1]),f(C[y+1][L]),f(C[y][L])):(f(C[y][L+1]),f(C[y+1][L+1]),f(C[y+1][L]))}}function c(_){let w=new D;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(_),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let _=new D;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];let v=g(_)/2/Math.PI+.5,M=m(_)/Math.PI+.5;o.push(v,1-M)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let w=o[_+0],v=o[_+2],M=o[_+4],T=Math.max(w,v,M),C=Math.min(w,v,M);T>.9&&C<.1&&(w<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),M<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,w){let v=_*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function p(){let _=new D,w=new D,v=new D,M=new D,T=new ft,C=new ft,y=new ft;for(let A=0,L=0;A<r.length;A+=9,L+=6){_.set(r[A+0],r[A+1],r[A+2]),w.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),T.set(o[L+0],o[L+1]),C.set(o[L+2],o[L+3]),y.set(o[L+4],o[L+5]),M.copy(_).add(w).add(v).divideScalar(3);let U=g(M);x(T,L+0,_,U),x(C,L+2,w,U),x(y,L+4,v,U)}}function x(_,w,v,M){M<0&&_.x===1&&(o[w]=_.x-1),v.x===0&&v.z===0&&(o[w]=M/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Ii=class i extends ar{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ft:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],o=[],a=new D,l=new me;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(he(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(he(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lr=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends lr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Mf=new D,Sf=new D,Qc=new Oh,th=new Oh,eh=new Oh,Ba=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Sf.subVectors(s[0],s[1]).add(s[0]),c=Sf);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Mf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Qc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),th.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),eh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),th.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),eh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Qc.calc(l),th.calc(l),eh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};ro=class extends Cn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($r(t,s.x,r.x,o.x,a.x),$r(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends Cn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($r(t,s.x,r.x,o.x,a.x),$r(t,s.y,r.y,o.y,a.y),$r(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oo=class extends Cn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends Cn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends Cn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Yr(t,s.x,r.x,o.x),Yr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends Cn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Yr(t,s.x,r.x,o.x),Yr(t,s.y,r.y,o.y),Yr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(wf(a,l.x,c.x,h.x,u.x),wf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},ch=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Ba,CubicBezierCurve:ro,CubicBezierCurve3:za,EllipseCurve:lr,LineCurve:oo,LineCurve3:Va,QuadraticBezierCurve:ao,QuadraticBezierCurve3:Ga,SplineCurve:lo}),Ha=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ch[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ch[s.type]().fromJSON(s))}return this}},co=class extends Ha{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new oo(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ao(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ro(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new lr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rn=class extends co{constructor(t){super(t),this.uuid=Mr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new co().fromJSON(s))}return this}};fh=class{static triangulate(t,e,n=2){return V0(t,e,n)}},fs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ef(t),Af(n,t);let o=t.length;e.forEach(Ef);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Af(n,e[l]);let a=fh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};hr=class i extends Oe{constructor(t=new rn([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:sm,w,v=!1,M,T,C,y;if(m){w=m.getSpacedPoints(h),v=!0,f=!1;let lt=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,lt),T=new D,C=new D,y=new D}f||(g=0,d=0,p=0,x=0);let A=a.extractPoints(c),L=A.shape,U=A.holes;if(!fs.isClockWise(L)){L=L.reverse();for(let lt=0,ht=U.length;lt<ht;lt++){let ut=U[lt];fs.isClockWise(ut)&&(U[lt]=ut.reverse())}}function X(lt){let ut=10000000000000001e-36,dt=lt[0];for(let gt=1;gt<=lt.length;gt++){let Wt=gt%lt.length,Gt=lt[Wt],jt=Gt.x-dt.x,ne=Gt.y-dt.y,k=jt*jt+ne*ne,Se=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(dt.x),Math.abs(dt.y)),fe=ut*Se*Se;if(k<=fe){lt.splice(Wt,1),gt--;continue}dt=Gt}}X(L),U.forEach(X);let F=U.length,O=L;for(let lt=0;lt<F;lt++){let ht=U[lt];L=L.concat(ht)}function H(lt,ht,ut){return ht||qt("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(ht,ut)}let G=L.length;function nt(lt,ht,ut){let dt,gt,Wt,Gt=lt.x-ht.x,jt=lt.y-ht.y,ne=ut.x-lt.x,k=ut.y-lt.y,Se=Gt*Gt+jt*jt,fe=Gt*k-jt*ne;if(Math.abs(fe)>Number.EPSILON){let P=Math.sqrt(Se),b=Math.sqrt(ne*ne+k*k),W=ht.x-jt/P,$=ht.y+Gt/P,tt=ut.x-k/b,pt=ut.y+ne/b,mt=((tt-W)*k-(pt-$)*ne)/(Gt*k-jt*ne);dt=W+Gt*mt-lt.x,gt=$+jt*mt-lt.y;let et=dt*dt+gt*gt;if(et<=2)return new ft(dt,gt);Wt=Math.sqrt(et/2)}else{let P=!1;Gt>Number.EPSILON?ne>Number.EPSILON&&(P=!0):Gt<-Number.EPSILON?ne<-Number.EPSILON&&(P=!0):Math.sign(jt)===Math.sign(k)&&(P=!0),P?(dt=-jt,gt=Gt,Wt=Math.sqrt(Se)):(dt=Gt,gt=jt,Wt=Math.sqrt(Se/2))}return new ft(dt/Wt,gt/Wt)}let J=[];for(let lt=0,ht=O.length,ut=ht-1,dt=lt+1;lt<ht;lt++,ut++,dt++)ut===ht&&(ut=0),dt===ht&&(dt=0),J[lt]=nt(O[lt],O[ut],O[dt]);let Q=[],st,Dt=J.concat();for(let lt=0,ht=F;lt<ht;lt++){let ut=U[lt];st=[];for(let dt=0,gt=ut.length,Wt=gt-1,Gt=dt+1;dt<gt;dt++,Wt++,Gt++)Wt===gt&&(Wt=0),Gt===gt&&(Gt=0),st[dt]=nt(ut[dt],ut[Wt],ut[Gt]);Q.push(st),Dt=Dt.concat(st)}let Pt;if(g===0)Pt=fs.triangulateShape(O,U);else{let lt=[],ht=[];for(let ut=0;ut<g;ut++){let dt=ut/g,gt=d*Math.cos(dt*Math.PI/2),Wt=p*Math.sin(dt*Math.PI/2)+x;for(let Gt=0,jt=O.length;Gt<jt;Gt++){let ne=H(O[Gt],J[Gt],Wt);St(ne.x,ne.y,-gt),dt===0&&lt.push(ne)}for(let Gt=0,jt=F;Gt<jt;Gt++){let ne=U[Gt];st=Q[Gt];let k=[];for(let Se=0,fe=ne.length;Se<fe;Se++){let P=H(ne[Se],st[Se],Wt);St(P.x,P.y,-gt),dt===0&&k.push(P)}dt===0&&ht.push(k)}}Pt=fs.triangulateShape(lt,ht)}let xe=Pt.length,ue=p+x;for(let lt=0;lt<G;lt++){let ht=f?H(L[lt],Dt[lt],ue):L[lt];v?(C.copy(M.normals[0]).multiplyScalar(ht.x),T.copy(M.binormals[0]).multiplyScalar(ht.y),y.copy(w[0]).add(C).add(T),St(y.x,y.y,y.z)):St(ht.x,ht.y,0)}for(let lt=1;lt<=h;lt++)for(let ht=0;ht<G;ht++){let ut=f?H(L[ht],Dt[ht],ue):L[ht];v?(C.copy(M.normals[lt]).multiplyScalar(ut.x),T.copy(M.binormals[lt]).multiplyScalar(ut.y),y.copy(w[lt]).add(C).add(T),St(y.x,y.y,y.z)):St(ut.x,ut.y,u/h*lt)}for(let lt=g-1;lt>=0;lt--){let ht=lt/g,ut=d*Math.cos(ht*Math.PI/2),dt=p*Math.sin(ht*Math.PI/2)+x;for(let gt=0,Wt=O.length;gt<Wt;gt++){let Gt=H(O[gt],J[gt],dt);St(Gt.x,Gt.y,u+ut)}for(let gt=0,Wt=U.length;gt<Wt;gt++){let Gt=U[gt];st=Q[gt];for(let jt=0,ne=Gt.length;jt<ne;jt++){let k=H(Gt[jt],st[jt],dt);v?St(k.x,k.y+w[h-1].y,w[h-1].x+ut):St(k.x,k.y,u+ut)}}}_e(),it();function _e(){let lt=s.length/3;if(f){let ht=0,ut=G*ht;for(let dt=0;dt<xe;dt++){let gt=Pt[dt];$t(gt[2]+ut,gt[1]+ut,gt[0]+ut)}ht=h+g*2,ut=G*ht;for(let dt=0;dt<xe;dt++){let gt=Pt[dt];$t(gt[0]+ut,gt[1]+ut,gt[2]+ut)}}else{for(let ht=0;ht<xe;ht++){let ut=Pt[ht];$t(ut[2],ut[1],ut[0])}for(let ht=0;ht<xe;ht++){let ut=Pt[ht];$t(ut[0]+G*h,ut[1]+G*h,ut[2]+G*h)}}n.addGroup(lt,s.length/3-lt,0)}function it(){let lt=s.length/3,ht=0;at(O,ht),ht+=O.length;for(let ut=0,dt=U.length;ut<dt;ut++){let gt=U[ut];at(gt,ht),ht+=gt.length}n.addGroup(lt,s.length/3-lt,1)}function at(lt,ht){let ut=lt.length;for(;--ut>=0;){let dt=ut,gt=ut-1;gt<0&&(gt=lt.length-1);for(let Wt=0,Gt=h+g*2;Wt<Gt;Wt++){let jt=G*Wt,ne=G*(Wt+1),k=ht+dt+jt,Se=ht+gt+jt,fe=ht+gt+ne,P=ht+dt+ne;Ct(k,Se,fe,P)}}}function St(lt,ht,ut){l.push(lt),l.push(ht),l.push(ut)}function $t(lt,ht,ut){Jt(lt),Jt(ht),Jt(ut);let dt=s.length/3,gt=_.generateTopUV(n,s,dt-3,dt-2,dt-1);Ce(gt[0]),Ce(gt[1]),Ce(gt[2])}function Ct(lt,ht,ut,dt){Jt(lt),Jt(ht),Jt(dt),Jt(ht),Jt(ut),Jt(dt);let gt=s.length/3,Wt=_.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);Ce(Wt[0]),Ce(Wt[1]),Ce(Wt[3]),Ce(Wt[1]),Ce(Wt[2]),Ce(Wt[3])}function Jt(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function Ce(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ch[s.type]().fromJSON(s)),new i(n,t.options)}},sm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ft(r,o),new ft(a,l),new ft(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-u),new ft(f,1-p),new ft(x,1-m)]:[new ft(a,1-l),new ft(h,1-u),new ft(d,1-p),new ft(g,1-m)]}};ur=class i extends ar{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},fr=class i extends Oe{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=he(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new D,f=new ft,d=new D,p=new D,x=new D,g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=e;_++){let w=n+_*h*s,v=Math.sin(w),M=Math.cos(w);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*M,o.push(u.x,u.y,u.z),f.x=_/e,f.y=T/(t.length-1),a.push(f.x,f.y);let C=l[3*T+0]*v,y=l[3*T+1],A=l[3*T+0]*M;c.push(C,y,A)}}for(let _=0;_<e;_++)for(let w=0;w<t.length-1;w++){let v=w+_*t.length,M=v,T=v+t.length,C=v+t.length+1,y=v+1;r.push(M,T,y),r.push(C,y,T)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},dr=class i extends ar{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},on=class i extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*f-o;for(let w=0;w<c;w++){let v=w*u-r;p.push(v,-_,0),x.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let w=_+c*m,v=_+c*(m+1),M=_+1+c*(m+1),T=_+1+c*m;d.push(w,v,T),d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$i=class i extends Oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new D,p=new ft;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let _=m+g,w=_,v=_+n+1,M=_+n+2,T=_+1;a.push(w,v,T),a.push(v,M,T)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},On=class i extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new D,f=new D,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],w=m/n,v=o+w*a,M=t*Math.cos(v),T=Math.sqrt(t*t-M*M),C=0;m===0&&o===0?C=.5/e:m===n&&l===Math.PI&&(C=-.5/e);for(let y=0;y<=e;y++){let A=y/e,L=s+A*r;u.x=-T*Math.cos(L),u.y=M,u.z=T*Math.sin(L),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+C,1-w),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let w=h[m][_+1],v=h[m][_],M=h[m+1][_],T=h[m+1][_+1];(m!==0||o>0)&&d.push(w,v,T),(m!==n-1||l<Math.PI)&&d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},pr=class i extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new D,d=new D,p=new D;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let m=0;m<=s;m++){let _=m/s*r;d.x=(t+e*Math.cos(g))*Math.cos(_),d.y=(t+e*Math.cos(g))*Math.sin(_),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,_=(s+1)*(x-1)+g-1,w=(s+1)*(x-1)+g,v=(s+1)*x+g;l.push(m,_,v),l.push(_,w,v)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};Td={clone:vs,merge:un},am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=om(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wa=class extends hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ae=class extends Ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=al,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xa=class extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};Zi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends Zi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rh,endingEnd:rh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case oh:r=t,a=2*e-n;break;case ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oh:o=t,l=2*n-e;break;case ah:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-d)*g+(1.5+d)*x+.5*p,v=d*g-d*x;for(let M=0;M!==a;++M)r[M]=m*o[h+M]+_*o[c+M]+w*o[l+M]+v*o[u+M];return r}},$a=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Za=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ja=class extends Zi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=d*f+p*2,_=u[m],w=u[m+1],v=t*f+p*2,M=h[v],T=h[v+1],C=hm(n,e,_,M,s);r[p]=Ed(C,x,w,T,g)}return r}};Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ws(e,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ws(t.times,Array),values:Ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nh(t.settings)&&(n.settings={inTangents:Ws(t.settings.inTangents,Array),outTangents:Ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zr:e=this.InterpolantFactoryMethodDiscrete;break;case Pa:e=this.InterpolantFactoryMethodLinear;break;case ba:e=this.InterpolantFactoryMethodSmooth;break;case sh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return ba;case this.InterpolantFactoryMethodBezier:return sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nh(this.settings)&&(Rf(this.settings.inTangents,t),Rf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&d0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ba,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Pa;Ji=class extends Rn{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Zr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;ja=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="color";Ka=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="number";Qa=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},po=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;ji=class extends Rn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Zr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;tl=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};tl.prototype.ValueTypeName="vector";el=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ad=new el,nl=class{constructor(t){this.manager=t!==void 0?t:Ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";mo=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},mr=class extends mo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ih=new me,If=new D,Pf=new D,il=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Pf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ih,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Zs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ih)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_a=new D,va=new Mn,hi=new D,go=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_a,va,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,va,hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_a,va,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,va,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new D,Lf=new ft,Df=new ft,nn=class extends go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=La*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,Lf,Df),e.subVectors(Df,Lf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gr=class extends go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},dh=class extends il{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new dh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Xs=-90,qs=1,sl=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(Xs,qs,t,e);s.layers=this.layers,this.add(s);let r=new nn(Xs,qs,t,e);r.layers=this.layers,this.add(r);let o=new nn(Xs,qs,t,e);o.layers=this.layers,this.add(o);let a=new nn(Xs,qs,t,e);a.layers=this.layers,this.add(a);let l=new nn(Xs,qs,t,e);l.layers=this.layers,this.add(l);let c=new nn(Xs,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},rl=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},zh="\\[\\]\\.:\\/",um=new RegExp("["+zh+"]","g"),Vh="[^"+zh+"]",fm="[^"+zh.replace("\\.","")+"]",dm=/((?:WC+[\/:])*)/.source.replace("WC",Vh),pm=/(WCOD+)?/.source.replace("WCOD",fm),mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),xm=new RegExp("^"+dm+pm+mm+gm+"$"),ym=["material","materials","bones","map"],ph=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(um,"")}static parseTrackName(t){let e=xm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ym.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=ph;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];c1=new Float32Array(1),Nf=new me,xr=class{constructor(t,e,n=0,s=1/0){this.ray=new nr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(t,e=!0,n=[]){return mh(t,this,n,e),n.sort(Uf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)mh(t[s],this,n,e);return n.sort(Uf),n}};Yh=class Yh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Yh.prototype.isMatrix2=!0;gh=Yh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Zd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Em(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function ly(i,t,e,n,s,r){let o=new Vt(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){let v=_.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(_){let w=!1,v=d(_);v===null?g(o,a):v&&v.isColor&&(g(v,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,w){let v=d(w);v&&(v.isCubeTexture||v.mapping===yo)?(c===void 0&&(c=new ie(new Me(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:vs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ay.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jd),c.material.toneMapped=ge.getTransfer(v.colorSpace)!==Ee,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ie(new on(2,2),new hn({name:"BackgroundMaterial",uniforms:vs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ge.getTransfer(v.colorSpace)!==Ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,w){_.getRGB(jl,Bh(i)),e.buffers.color.setClear(jl.r,jl.g,jl.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),a=w,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:x,dispose:m}}function cy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(U,z,X,F,O){let H=!1,G=u(U,F,X,z);r!==G&&(r=G,c(r.object)),H=d(U,F,X,O),H&&p(U,F,X,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(U,z,X,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function u(U,z,X,F){let O=F.wireframe===!0,H=n[z.id];H===void 0&&(H={},n[z.id]=H);let G=U.isInstancedMesh===!0?U.id:0,nt=H[G];nt===void 0&&(nt={},H[G]=nt);let J=nt[X.id];J===void 0&&(J={},nt[X.id]=J);let Q=J[O];return Q===void 0&&(Q=f(l()),J[O]=Q),Q}function f(U){let z=[],X=[],F=[];for(let O=0;O<e;O++)z[O]=0,X[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:F,object:U,attributes:{},index:null}}function d(U,z,X,F){let O=r.attributes,H=z.attributes,G=0,nt=X.getAttributes();for(let J in nt)if(nt[J].location>=0){let st=O[J],Dt=H[J];if(Dt===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(Dt=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(Dt=U.instanceColor)),st===void 0||st.attribute!==Dt||Dt&&st.data!==Dt.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function p(U,z,X,F){let O={},H=z.attributes,G=0,nt=X.getAttributes();for(let J in nt)if(nt[J].location>=0){let st=H[J];st===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(st=U.instanceColor));let Dt={};Dt.attribute=st,st&&st.data&&(Dt.data=st.data),O[J]=Dt,G++}r.attributes=O,r.attributesNum=G,r.index=F}function x(){let U=r.newAttributes;for(let z=0,X=U.length;z<X;z++)U[z]=0}function g(U){m(U,0)}function m(U,z){let X=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;X[U]=1,F[U]===0&&(i.enableVertexAttribArray(U),F[U]=1),O[U]!==z&&(i.vertexAttribDivisor(U,z),O[U]=z)}function _(){let U=r.newAttributes,z=r.enabledAttributes;for(let X=0,F=z.length;X<F;X++)z[X]!==U[X]&&(i.disableVertexAttribArray(X),z[X]=0)}function w(U,z,X,F,O,H,G){G===!0?i.vertexAttribIPointer(U,z,X,O,H):i.vertexAttribPointer(U,z,X,F,O,H)}function v(U,z,X,F){x();let O=F.attributes,H=X.getAttributes(),G=z.defaultAttributeValues;for(let nt in H){let J=H[nt];if(J.location>=0){let Q=O[nt];if(Q===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let st=Q.normalized,Dt=Q.itemSize,Pt=t.get(Q);if(Pt===void 0)continue;let xe=Pt.buffer,ue=Pt.type,_e=Pt.bytesPerElement,it=ue===i.INT||ue===i.UNSIGNED_INT||Q.gpuType===ul;if(Q.isInterleavedBufferAttribute){let at=Q.data,St=at.stride,$t=Q.offset;if(at.isInstancedInterleavedBuffer){for(let Ct=0;Ct<J.locationSize;Ct++)m(J.location+Ct,at.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ct=0;Ct<J.locationSize;Ct++)g(J.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Ct=0;Ct<J.locationSize;Ct++)w(J.location+Ct,Dt/J.locationSize,ue,st,St*_e,($t+Dt/J.locationSize*Ct)*_e,it)}else{if(Q.isInstancedBufferAttribute){for(let at=0;at<J.locationSize;at++)m(J.location+at,Q.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let at=0;at<J.locationSize;at++)g(J.location+at);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let at=0;at<J.locationSize;at++)w(J.location+at,Dt/J.locationSize,ue,st,Dt*_e,Dt/J.locationSize*at*_e,it)}}else if(G!==void 0){let st=G[nt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(J.location,st);break;case 3:i.vertexAttrib3fv(J.location,st);break;case 4:i.vertexAttrib4fv(J.location,st);break;default:i.vertexAttrib1fv(J.location,st)}}}}_()}function M(){A();for(let U in n){let z=n[U];for(let X in z){let F=z[X];for(let O in F){let H=F[O];for(let G in H)h(H[G].object),delete H[G];delete F[O]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let z=n[U.id];for(let X in z){let F=z[X];for(let O in F){let H=F[O];for(let G in H)h(H[G].object),delete H[G];delete F[O]}}delete n[U.id]}function C(U){for(let z in n){let X=n[z];for(let F in X){let O=X[F];if(O[U.id]===void 0)continue;let H=O[U.id];for(let G in H)h(H[G].object),delete H[G];delete O[U.id]}}}function y(U){for(let z in n){let X=n[z],F=U.isInstancedMesh===!0?U.id:0,O=X[F];if(O!==void 0){for(let H in O){let G=O[H];for(let nt in G)h(G[nt].object),delete G[nt];delete O[H]}delete X[F],Object.keys(X).length===0&&delete n[z]}}}function A(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function hy(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function uy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let y=C===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==wn&&C!==Bn&&!y&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:v,maxSamples:M,samples:T}}function fy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new bn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,w=_*4,v=m.clippingState||null;l.value=v,v=h(p,f,w,d);for(let M=0;M!==w;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=d;w!==x;++w,v+=4)o.copy(u[w]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function xy(i){let t=[],e=[],n=i,s=i-wr+1+dy;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let m=0;m<u;m++){let _=m%3*2/3-1,w=m>2?0:-1,v=[_,w,0,_+2/3,w,0,_+2/3,w+1,0,_,w,0,_+2/3,w+1,0,_,w+1,0];p.set(v,d*f*m);for(let M=0;M<f;M++){let T=h[M*2]*2-1,C=h[M*2+1]*2-1;m===0?bs.set(1,C,T):m===1?bs.set(-T,1,-C):m===2?bs.set(-T,C,1):m===3?bs.set(-1,C,-T):m===4?bs.set(-T,-1,C):bs.set(T,C,-1),bs.toArray(x,(m*f+M)*d)}}let g=new Oe;g.setAttribute("position",new Be(p,d)),g.setAttribute("outputDirection",new Be(x,d)),e.push(new ie(g,null)),n>wr&&n--}return{lodMeshes:e,sizeLods:t}}function Rd(i,t,e){let n=new Sn(i,t,e);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yy(i,t,e){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:my,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function _y(i,t,e){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:py,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Id(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Pd(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function vy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ll||d===cl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new tc(p.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===ll||d===cl,x=d===Qi||d===_s;if(p||x){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Ql(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Ql(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===ll?f.mapping=Qi:d===cl&&(f.mapping=_s),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function by(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ds("WebGLRenderer: "+n+" extension not supported."),s}}}function My(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let w=0,v=_.length;w<v;w+=3){let M=_[w+0],T=_[w+1],C=_[w+2];f.push(M,T,T,C,C,M)}}else{let _=p.array;x=p.version;for(let w=0,v=_.length/3-1;w<v;w+=3){let M=w+0,T=w+1,C=w+2;f.push(M,T,T,C,C,M)}}let g=new(p.count>=65535?eo:to)(f,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Sy(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function wy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ty(i,t,e){let n=new WeakMap,s=new ze;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let A=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*M*4*u),C=new Qr(T,v,M,u);C.type=Bn,C.needsUpdate=!0;let y=w*4;for(let L=0;L<u;L++){let U=g[L],z=m[L],X=_[L],F=v*M*4*L;for(let O=0;O<U.count;O++){let H=O*y;d===!0&&(s.fromBufferAttribute(U,O),T[F+H+0]=s.x,T[F+H+1]=s.y,T[F+H+2]=s.z,T[F+H+3]=0),p===!0&&(s.fromBufferAttribute(z,O),T[F+H+4]=s.x,T[F+H+5]=s.y,T[F+H+6]=s.z,T[F+H+7]=0),x===!0&&(s.fromBufferAttribute(X,O),T[F+H+8]=s.x,T[F+H+9]=s.y,T[F+H+10]=s.z,T[F+H+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ft(v,M)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ey(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}function Cy(i,t,e,n,s,r){let o=new Sn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Oe;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let h=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ie(c,h),f=new gr(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,_=[],w=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let T=0;T<_.length;T++){let C=_[T];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){_=v,w=_.length>0&&_[0].isRenderPass===!0;let M=o.width,T=o.height;_.length>0&&a===null&&(a=new Sn(M,T,{type:ri,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(M,T,{type:ri,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let y=_[C];y.setSize&&y.setSize(M,T)}},this.begin=function(v,M){if(x||v.toneMapping===ii&&_.length===0)return!1;if(m=M,M!==null){let T=M.width,C=M.height;(o.width!==T||o.height!==C)&&this.setSize(T,C)}return w===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=ii,!0},this.hasRenderPass=function(){return w},this.end=function(v,M){v.toneMapping=g,x=!0;let T=o,C=a;for(let y=0;y<_.length;y++){let A=_[y];A.enabled!==!1&&(A.render(v,C,T,M),A.needsSwap!==!1&&(T=C,C=C===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},ge.getTransfer(d)===Ee&&(h.defines.SRGB_TRANSFER="");let y=Ay[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(u,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function Er(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nc(i,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ry(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Dy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;kd.set(n),i.uniformMatrix2fv(this.addr,!1,kd),Ke(e,n)}}function Ny(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;Ud.set(n),i.uniformMatrix3fv(this.addr,!1,Ud),Ke(e,n)}}function Uy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;Nd.set(n),i.uniformMatrix4fv(this.addr,!1,Nd),Ke(e,n)}}function ky(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function Oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function By(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function zy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function Hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function Wy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eu.compareFunction=e.isReversedDepthBuffer()?Jl:Zl,r=eu):r=jd,e.setTexture2D(t||r,s)}function Xy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qd,s)}function qy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tp,s)}function Yy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kd,s)}function $y(i){switch(i){case 5126:return Ry;case 35664:return Iy;case 35665:return Py;case 35666:return Ly;case 35674:return Dy;case 35675:return Ny;case 35676:return Uy;case 5124:case 35670:return ky;case 35667:case 35671:return Fy;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return zy;case 36294:return Vy;case 36295:return Gy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}function Zy(i,t){i.uniform1fv(this.addr,t)}function Jy(i,t){let e=Er(t,this.size,2);i.uniform2fv(this.addr,e)}function jy(i,t){let e=Er(t,this.size,3);i.uniform3fv(this.addr,e)}function Ky(i,t){let e=Er(t,this.size,4);i.uniform4fv(this.addr,e)}function Qy(i,t){let e=Er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t_(i,t){let e=Er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e_(i,t){let e=Er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function n_(i,t){i.uniform1iv(this.addr,t)}function i_(i,t){i.uniform2iv(this.addr,t)}function s_(i,t){i.uniform3iv(this.addr,t)}function r_(i,t){i.uniform4iv(this.addr,t)}function o_(i,t){i.uniform1uiv(this.addr,t)}function a_(i,t){i.uniform2uiv(this.addr,t)}function l_(i,t){i.uniform3uiv(this.addr,t)}function c_(i,t){i.uniform4uiv(this.addr,t)}function h_(i,t,e){let n=this.cache,s=t.length,r=nc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=eu:o=jd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function u_(i,t,e){let n=this.cache,s=t.length,r=nc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qd,r[o])}function f_(i,t,e){let n=this.cache,s=t.length,r=nc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||tp,r[o])}function d_(i,t,e){let n=this.cache,s=t.length,r=nc(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kd,r[o])}function p_(i){switch(i){case 5126:return Zy;case 35664:return Jy;case 35665:return jy;case 35666:return Ky;case 35674:return Qy;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return d_}}function Fd(i,t){i.seq.push(t),i.map[t.id]=t}function m_(i,t,e){let n=i.name,s=n.length;for(Qh.lastIndex=0;;){let r=Qh.exec(n),o=Qh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fd(e,c===void 0?new nu(a,i,t):new iu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new su(a),Fd(e,u)),e=u}}}function Od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function y_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function __(i){ge._getMatrix(Bd,ge.workingColorSpace,i);let t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case jr:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+y_(i.getShaderSource(t),a)}else return r}function v_(i,t){let e=__(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function M_(i,t){let e=b_[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function S_(){ge.getLuminanceCoefficients(Kl);let i=Kl.x.toFixed(4),t=Kl.y.toFixed(4),e=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function T_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function E_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Co(i){return i!==""}function Vd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function ru(i){return i.replace(A_,R_)}function R_(i,t){let e=ae[t];if(e===void 0){let n=C_.get(t);if(n!==void 0)e=ae[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ru(e)}function Hd(i){return i.replace(I_,P_)}function P_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D_(i){return L_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function U_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":N_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function F_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":k_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function B_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":O_[i.combine]||"ENVMAP_BLENDING_NONE"}function z_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function V_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=D_(e),c=U_(e),h=F_(e),u=B_(e),f=z_(e),d=w_(e),p=T_(r),x=s.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Co).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Co).join(`
`),m.length>0&&(m+=`
`)):(g=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),m=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?ae.tonemapping_pars_fragment:"",e.toneMapping!==ii?M_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,v_("linearToOutputTexel",e.outputColorSpace),S_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Co).join(`
`)),o=ru(o),o=Vd(o,e),o=Gd(o,e),a=ru(a),a=Vd(a,e),a=Gd(a,e),o=Hd(o),a=Hd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=_+g+o,v=_+m+a,M=Od(s,s.VERTEX_SHADER,w),T=Od(s,s.FRAGMENT_SHADER,v);s.attachShader(x,M),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(U){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(M)||"",F=s.getShaderInfoLog(T)||"",O=z.trim(),H=X.trim(),G=F.trim(),nt=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,T);else{let Q=zd(s,M,"vertex"),st=zd(s,T,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+Q+`
`+st)}else O!==""?Yt("WebGLProgram: Program Info Log:",O):(H===""||G==="")&&(J=!1);J&&(U.diagnostics={runnable:nt,programLog:O,vertexShader:{log:H,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(M),s.deleteShader(T),y=new Tr(s,x),A=E_(s,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,g_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=T,this}function H_(i){return i===ns||i===wo||i===To}function W_(i,t,e,n,s,r){let o=new Ks,a=new ou,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,A,L,U,z,X){let F=U.fog,O=z.geometry,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,nt=t.get(y.envMap||H,G),J=nt&&nt.mapping===yo?nt.image.height:null,Q=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Yt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Dt=st!==void 0?st.length:0,Pt=0;O.morphAttributes.position!==void 0&&(Pt=1),O.morphAttributes.normal!==void 0&&(Pt=2),O.morphAttributes.color!==void 0&&(Pt=3);let xe,ue,_e,it;if(Q){let Ne=_i[Q];xe=Ne.vertexShader,ue=Ne.fragmentShader}else{xe=y.vertexShader,ue=y.fragmentShader;let Ne=a.getVertexShaderStage(y),we=a.getFragmentShaderStage(y);a.update(y,Ne,we),_e=Ne.id,it=we.id}let at=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),$t=z.isInstancedMesh===!0,Ct=z.isBatchedMesh===!0,Jt=!!y.map,Ce=!!y.matcap,lt=!!nt,ht=!!y.aoMap,ut=!!y.lightMap,dt=!!y.bumpMap&&y.wireframe===!1,gt=!!y.normalMap,Wt=!!y.displacementMap,Gt=!!y.emissiveMap,jt=!!y.metalnessMap,ne=!!y.roughnessMap,k=y.anisotropy>0,Se=y.clearcoat>0,fe=y.dispersion>0,P=y.retroreflectivity>0,b=y.iridescence>0,W=y.sheen>0,$=y.transmission>0,tt=k&&!!y.anisotropyMap,pt=Se&&!!y.clearcoatMap,mt=Se&&!!y.clearcoatNormalMap,et=Se&&!!y.clearcoatRoughnessMap,ot=b&&!!y.iridescenceMap,xt=b&&!!y.iridescenceThicknessMap,Ot=W&&!!y.sheenColorMap,bt=W&&!!y.sheenRoughnessMap,yt=!!y.specularMap,Bt=!!y.specularColorMap,Xt=!!y.specularIntensityMap,se=$&&!!y.transmissionMap,V=$&&!!y.thicknessMap,_t=!!y.gradientMap,rt=!!y.alphaMap,vt=y.alphaTest>0,Et=!!y.alphaHash,ct=!!y.extensions,zt=ii;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(zt=i.toneMapping);let kt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:xe,fragmentShader:ue,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&z._colorsTexture!==null,instancing:$t,instancingColor:$t&&z.instanceColor!==null,instancingMorph:$t&&z.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Jt,matcap:Ce,envMap:lt,envMapMode:lt&&nt.mapping,envMapCubeUVHeight:J,aoMap:ht,lightMap:ut,bumpMap:dt,normalMap:gt,displacementMap:Wt,emissiveMap:Gt,normalMapObjectSpace:gt&&y.normalMapType===ad,normalMapTangentSpace:gt&&y.normalMapType===$l,packedNormalMap:gt&&y.normalMapType===$l&&H_(y.normalMap.format),metalnessMap:jt,roughnessMap:ne,anisotropy:k,anisotropyMap:tt,clearcoat:Se,clearcoatMap:pt,clearcoatNormalMap:mt,clearcoatRoughnessMap:et,dispersion:fe,retroreflection:P,iridescence:b,iridescenceMap:ot,iridescenceThicknessMap:xt,sheen:W,sheenColorMap:Ot,sheenRoughnessMap:bt,specularMap:yt,specularColorMap:Bt,specularIntensityMap:Xt,transmission:$,transmissionMap:se,thicknessMap:V,gradientMap:_t,opaque:y.transparent===!1&&y.blending===_r&&y.alphaToCoverage===!1,alphaMap:rt,alphaTest:vt,alphaHash:Et,combine:y.combine,mapUv:Jt&&p(y.map.channel),aoMapUv:ht&&p(y.aoMap.channel),lightMapUv:ut&&p(y.lightMap.channel),bumpMapUv:dt&&p(y.bumpMap.channel),normalMapUv:gt&&p(y.normalMap.channel),displacementMapUv:Wt&&p(y.displacementMap.channel),emissiveMapUv:Gt&&p(y.emissiveMap.channel),metalnessMapUv:jt&&p(y.metalnessMap.channel),roughnessMapUv:ne&&p(y.roughnessMap.channel),anisotropyMapUv:tt&&p(y.anisotropyMap.channel),clearcoatMapUv:pt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:mt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(y.sheenRoughnessMap.channel),specularMapUv:yt&&p(y.specularMap.channel),specularColorMapUv:Bt&&p(y.specularColorMap.channel),specularIntensityMapUv:Xt&&p(y.specularIntensityMap.channel),transmissionMapUv:se&&p(y.transmissionMap.channel),thicknessMapUv:V&&p(y.thicknessMap.channel),alphaMapUv:rt&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(gt||k),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!O.attributes.uv&&(Jt||rt),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:St,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Pt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Jt&&y.map.isVideoTexture===!0&&ge.getTransfer(y.map.colorSpace)===Ee,decodeVideoTextureEmissive:Gt&&y.emissiveMap.isVideoTexture===!0&&ge.getTransfer(y.emissiveMap.colorSpace)===Ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mi,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)A.push(L),A.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(m(A,y),_(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function _(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){let A=d[y.type],L;if(A){let U=_i[A];L=Td.clone(U.uniforms)}else L=y.uniforms;return L}function v(y,A){let L=h.get(A);return L!==void 0?++L.usedTimes:(L=new V_(i,A,y,s),c.push(L),h.set(A,L)),L}function M(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:C}}function X_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function q_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,g,m){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},i[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=p,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=g,_.group=m),t++,_}function l(f,d,p,x,g,m,_){_.reversedDepth===!0&&(g=-g);let w=a(f,d,p,x,g,m);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(f,d,p,x,g,m){let _=a(f,d,p,x,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,d){e.length>1&&e.sort(f||q_),n.length>1&&n.sort(d||Xd),s.length>1&&s.sort(d||Xd)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Y_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new qd,i.set(n,[o])):s>=r.length?(o=new qd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Vt};break;case"SpotLight":e={position:new D,direction:new D,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function j_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K_(i){let t=new $_,e=Z_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new me,o=new me;function a(c){let h=0,u=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,_=0,w=0,v=0,M=0,T=0,C=0,y=0,A=0,L=0;c.sort(j_);for(let z=0,X=c.length;z<X;z++){let F=c[z],O=F.color,H=F.intensity,G=F.distance,nt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ns?nt=F.shadow.map.texture:nt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=O.r*H,u+=O.g*H,f+=O.b*H;else if(F.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(F.sh.coefficients[J],H);L++}else if(F.isSunLight){let J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let Q=F.shadow,st=e.get(F);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=st,n.sunShadowMap[p]=nt;let Dt=Q.getViewportCount();for(let Pt=0;Pt<Dt;Pt++)n.sunShadowMatrix[x+Pt]=Q.getMatrix(Pt),n.sunShadowCascade[x+Pt]=Q._cascadeData[Pt];x+=Dt,p++}n.sun[d]=J,d++}else if(F.isDirectionalLight){let J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let Q=F.shadow,st=e.get(F);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize=Q.mapSize,n.directionalShadow[g]=st,n.directionalShadowMap[g]=nt,n.directionalShadowMatrix[g]=F.shadow.matrix,M++}n.directional[g]=J,g++}else if(F.isSpotLight){let J=t.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(O).multiplyScalar(H),J.distance=G,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,n.spot[_]=J;let Q=F.shadow;if(F.map&&(n.spotLightMap[y]=F.map,y++,Q.updateMatrices(F),F.castShadow&&A++),n.spotLightMatrix[_]=Q.matrix,F.castShadow){let st=e.get(F);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize=Q.mapSize,n.spotShadow[_]=st,n.spotShadowMap[_]=nt,C++}_++}else if(F.isRectAreaLight){let J=t.get(F);J.color.copy(O).multiplyScalar(H),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=J,w++}else if(F.isPointLight){let J=t.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){let Q=F.shadow,st=e.get(F);st.shadowIntensity=Q.intensity,st.shadowBias=Q.bias,st.shadowNormalBias=Q.normalBias,st.shadowRadius=Q.radius,st.shadowMapSize=Q.mapSize,st.shadowCameraNear=Q.camera.near,st.shadowCameraFar=Q.camera.far,n.pointShadow[m]=st,n.pointShadowMap[m]=nt,n.pointShadowMatrix[m]=F.shadow.matrix,T++}n.point[m]=J,m++}else if(F.isHemisphereLight){let J=t.get(F);J.skyColor.copy(F.color).multiplyScalar(H),J.groundColor.copy(F.groundColor).multiplyScalar(H),n.hemi[v]=J,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==_||U.rectAreaLength!==w||U.hemiLength!==v||U.numSunShadows!==p||U.numDirectionalShadows!==M||U.numPointShadows!==T||U.numSpotShadows!==C||U.numSpotMaps!==y||U.numLightProbes!==L)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,U.sunLength=d,U.directionalLength=g,U.pointLength=m,U.spotLength=_,U.rectAreaLength=w,U.hemiLength=v,U.numSunShadows=p,U.numDirectionalShadows=M,U.numPointShadows=T,U.numSpotShadows=C,U.numSpotMaps=y,U.numLightProbes=L,n.version=J_++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let _=0,w=c.length;_<w;_++){let v=c[_];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Yd(i){let t=new K_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Q_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Yd(i),t.set(s,[a])):r>=o.length?(a=new Yd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function sv(i,t,e){let n=new ir,s=new ft,r=new ft,o=new ze,a=new Xa,l=new qa,c={},h=e.maxTextureSize,u={[Ki]:gn,[gn]:Ki,[mi]:mi},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:tv,fragmentShader:ev}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Oe;p.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ie(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let m=this.type;this.render=function(T,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Of&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xo);let A=i.getRenderTarget(),L=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(gi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=m!==this.type;X&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(O=>O.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,O=T.length;F<O;F++){let H=T[F],G=H.shadow;if(G===void 0){Yt("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let nt=G.getFrameExtents();s.multiply(nt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=J,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===yr){if(H.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Sn(s.x,s.y,{format:ns,type:ri,minFilter:sn,magFilter:sn,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new qi(s.x,s.y,Bn),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=fi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=tn,G.map.depthTexture.magFilter=tn}else H.isPointLight?(G.map=new tc(s.x),G.map.depthTexture=new Fa(s.x,si)):(G.map=new Sn(s.x,s.y),G.map.depthTexture=new qi(s.x,s.y,si)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=fi,this.type===xo?(G.map.depthTexture.compareFunction=J?Jl:Zl,G.map.depthTexture.minFilter=sn,G.map.depthTexture.magFilter=sn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=tn,G.map.depthTexture.magFilter=tn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();H.isPointLight!==!0&&G.updateMatrices(H,y);for(let st=0;st<Q;st++){let Dt=G.getCamera(st);if(H.isPointLight){let Pt=G.camera,xe=G.matrix,ue=H.distance||Pt.far;ue!==Pt.far&&(Pt.far=ue,Pt.updateProjectionMatrix()),Ao.setFromMatrixPosition(H.matrixWorld),Pt.position.copy(Ao),tu.copy(Pt.position),tu.add(nv[st]),Pt.up.copy(iv[st]),Pt.lookAt(tu),Pt.updateMatrixWorld(),xe.makeTranslation(-Ao.x,-Ao.y,-Ao.z),$d.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),G._frustum.setFromProjectionMatrix($d,Pt.coordinateSystem,Pt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,st),i.clear();else{st===0&&(i.setRenderTarget(G.map),i.clear());let Pt=G.getViewport(st);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),z.viewport(o)}n=G.getFrustum(st),v(C,y,Dt,H,this.type)}G.isPointLightShadow!==!0&&this.type===yr&&_(G,y),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(A,L,U)};function _(T,C){let y=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Sn(s.x,s.y,{format:ns,type:ri}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,y,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,y,d,x,null)}function w(T,C,y,A){let L=null,U=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)L=U;else if(L=y.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=L.uuid,X=C.uuid,F=c[z];F===void 0&&(F={},c[z]=F);let O=F[X];O===void 0&&(O=L.clone(),F[X]=O,C.addEventListener("dispose",M)),L=O}if(L.visible=C.visible,L.wireframe=C.wireframe,A===yr?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:u[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let z=i.properties.get(L);z.light=y}return L}function v(T,C,y,A,L){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===yr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let X=t.update(T),F=T.material;if(Array.isArray(F)){let O=X.groups;for(let H=0,G=O.length;H<G;H++){let nt=O[H],J=F[nt.materialIndex];if(J&&J.visible){let Q=w(T,J,A,L);T.onBeforeShadow(i,T,C,y,X,Q,nt),i.renderBufferDirect(y,null,X,Q,T,nt),T.onAfterShadow(i,T,C,y,X,Q,nt)}}}else if(F.visible){let O=w(T,F,A,L);T.onBeforeShadow(i,T,C,y,X,O,null),i.renderBufferDirect(y,null,X,O,T,null),T.onAfterShadow(i,T,C,y,X,O,null)}}let z=T.children;for(let X=0,F=z.length;X<F;X++)v(z[X],C,y,A,L)}function M(T){T.target.removeEventListener("dispose",M);for(let y in c){let A=c[y],L=T.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function rv(i,t){function e(){let V=!1,_t=new ze,rt=null,vt=new ze(0,0,0,0);return{setMask:function(Et){rt!==Et&&!V&&(i.colorMask(Et,Et,Et,Et),rt=Et)},setLocked:function(Et){V=Et},setClear:function(Et,ct,zt,kt,Ne){Ne===!0&&(Et*=kt,ct*=kt,zt*=kt),_t.set(Et,ct,zt,kt),vt.equals(_t)===!1&&(i.clearColor(Et,ct,zt,kt),vt.copy(_t))},reset:function(){V=!1,rt=null,vt.set(-1,0,0,0)}}}function n(){let V=!1,_t=!1,rt=null,vt=null,Et=null;return{setReversed:function(ct){if(_t!==ct){let zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),_t=ct;let kt=Et;Et=null,this.setClear(kt)}},getReversed:function(){return _t},setTest:function(ct){ct?at(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(ct){rt!==ct&&!V&&(i.depthMask(ct),rt=ct)},setFunc:function(ct){if(_t&&(ct=_d[ct]),vt!==ct){switch(ct){case Sa:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=ct}},setLocked:function(ct){V=ct},setClear:function(ct){Et!==ct&&(Et=ct,_t&&(ct=1-ct),i.clearDepth(ct))},reset:function(){V=!1,rt=null,vt=null,Et=null,_t=!1}}}function s(){let V=!1,_t=null,rt=null,vt=null,Et=null,ct=null,zt=null,kt=null,Ne=null;return{setTest:function(we){V||(we?at(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(we){_t!==we&&!V&&(i.stencilMask(we),_t=we)},setFunc:function(we,Yn,oi){(rt!==we||vt!==Yn||Et!==oi)&&(i.stencilFunc(we,Yn,oi),rt=we,vt=Yn,Et=oi)},setOp:function(we,Yn,oi){(ct!==we||zt!==Yn||kt!==oi)&&(i.stencilOp(we,Yn,oi),ct=we,zt=Yn,kt=oi)},setLocked:function(we){V=we},setClear:function(we){Ne!==we&&(i.clearStencil(we),Ne=we)},reset:function(){V=!1,_t=null,rt=null,vt=null,Et=null,ct=null,zt=null,kt=null,Ne=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,_=null,w=null,v=null,M=null,T=null,C=null,y=new Vt(0,0,0),A=0,L=!1,U=null,z=null,X=null,F=null,O=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=nt>=1):J.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=nt>=2);let Q=null,st={},Dt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),xe=new ze().fromArray(Dt),ue=new ze().fromArray(Pt);function _e(V,_t,rt,vt){let Et=new Uint8Array(4),ct=i.createTexture();i.bindTexture(V,ct),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<rt;zt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(_t+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ct}let it={};it[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc($s),dt(!1),gt(xh),at(i.CULL_FACE),ht(gi);function at(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function St(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function $t(V,_t){return f[V]!==_t?(i.bindFramebuffer(V,_t),f[V]=_t,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_t),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Ct(V,_t){let rt=p,vt=!1;if(V){rt=d.get(_t),rt===void 0&&(rt=[],d.set(_t,rt));let Et=V.textures;if(rt.length!==Et.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,zt=Et.length;ct<zt;ct++)rt[ct]=i.COLOR_ATTACHMENT0+ct;rt.length=Et.length,vt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(rt)}function Jt(V){return x!==V?(i.useProgram(V),x=V,!0):!1}let Ce={[ys]:i.FUNC_ADD,[zf]:i.FUNC_SUBTRACT,[Vf]:i.FUNC_REVERSE_SUBTRACT};Ce[Gf]=i.MIN,Ce[Hf]=i.MAX;let lt={[Wf]:i.ZERO,[Xf]:i.ONE,[qf]:i.SRC_COLOR,[vh]:i.SRC_ALPHA,[Kf]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[$f]:i.DST_ALPHA,[Yf]:i.ONE_MINUS_SRC_COLOR,[bh]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Zf]:i.ONE_MINUS_DST_ALPHA,[Qf]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[ed]:i.CONSTANT_ALPHA,[nd]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(V,_t,rt,vt,Et,ct,zt,kt,Ne,we){if(V===gi){g===!0&&(St(i.BLEND),g=!1);return}if(g===!1&&(at(i.BLEND),g=!0),V!==Bf){if(V!==m||we!==L){if((_!==ys||M!==ys)&&(i.blendEquation(i.FUNC_ADD),_=ys,M=ys),we)switch(V){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _h:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",V);break}else switch(V){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yh:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _h:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",V);break}w=null,v=null,T=null,C=null,y.set(0,0,0),A=0,m=V,L=we}return}Et=Et||_t,ct=ct||rt,zt=zt||vt,(_t!==_||Et!==M)&&(i.blendEquationSeparate(Ce[_t],Ce[Et]),_=_t,M=Et),(rt!==w||vt!==v||ct!==T||zt!==C)&&(i.blendFuncSeparate(lt[rt],lt[vt],lt[ct],lt[zt]),w=rt,v=vt,T=ct,C=zt),(kt.equals(y)===!1||Ne!==A)&&(i.blendColor(kt.r,kt.g,kt.b,Ne),y.copy(kt),A=Ne),m=V,L=!1}function ut(V,_t){V.side===mi?St(i.CULL_FACE):at(i.CULL_FACE);let rt=V.side===gn;_t&&(rt=!rt),dt(rt),V.blending===_r&&V.transparent===!1?ht(gi):ht(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let vt=V.stencilWrite;a.setTest(vt),vt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(V){U!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),U=V)}function gt(V){V!==kf?(at(i.CULL_FACE),V!==z&&(V===xh?i.cullFace(i.BACK):V===Ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),z=V}function Wt(V){V!==X&&(G&&i.lineWidth(V),X=V)}function Gt(V,_t,rt){V?(at(i.POLYGON_OFFSET_FILL),(F!==_t||O!==rt)&&(F=_t,O=rt,o.getReversed()&&(_t=-_t),i.polygonOffset(_t,rt))):St(i.POLYGON_OFFSET_FILL)}function jt(V){V?at(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function ne(V){V===void 0&&(V=i.TEXTURE0+H-1),Q!==V&&(i.activeTexture(V),Q=V)}function k(V,_t,rt){rt===void 0&&(Q===null?rt=i.TEXTURE0+H-1:rt=Q);let vt=st[rt];vt===void 0&&(vt={type:void 0,texture:void 0},st[rt]=vt),(vt.type!==V||vt.texture!==_t)&&(Q!==rt&&(i.activeTexture(rt),Q=rt),i.bindTexture(V,_t||it[V]),vt.type=V,vt.texture=_t)}function Se(){let V=st[Q];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(V){qt("WebGLState:",V)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(V){qt("WebGLState:",V)}}function b(){try{i.texSubImage2D(...arguments)}catch(V){qt("WebGLState:",V)}}function W(){try{i.texSubImage3D(...arguments)}catch(V){qt("WebGLState:",V)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(V){qt("WebGLState:",V)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){qt("WebGLState:",V)}}function pt(){try{i.texStorage2D(...arguments)}catch(V){qt("WebGLState:",V)}}function mt(){try{i.texStorage3D(...arguments)}catch(V){qt("WebGLState:",V)}}function et(){try{i.texImage2D(...arguments)}catch(V){qt("WebGLState:",V)}}function ot(){try{i.texImage3D(...arguments)}catch(V){qt("WebGLState:",V)}}function xt(V){return u[V]!==void 0?u[V]:i.getParameter(V)}function Ot(V,_t){u[V]!==_t&&(i.pixelStorei(V,_t),u[V]=_t)}function bt(V){xe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),xe.copy(V))}function yt(V){ue.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ue.copy(V))}function Bt(V,_t){let rt=c.get(_t);rt===void 0&&(rt=new WeakMap,c.set(_t,rt));let vt=rt.get(V);vt===void 0&&(vt=i.getUniformBlockIndex(_t,V.name),rt.set(V,vt))}function Xt(V,_t){let vt=c.get(_t).get(V);l.get(_t)!==vt&&(i.uniformBlockBinding(_t,vt,V.__bindingPointIndex),l.set(_t,vt))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,st={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,_=null,w=null,v=null,M=null,T=null,C=null,y=new Vt(0,0,0),A=0,L=!1,U=null,z=null,X=null,F=null,O=null,xe.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:St,bindFramebuffer:$t,drawBuffers:Ct,useProgram:Jt,setBlending:ht,setMaterial:ut,setFlipSided:dt,setCullFace:gt,setLineWidth:Wt,setPolygonOffset:Gt,setScissorTest:jt,activeTexture:ne,bindTexture:k,unbindTexture:Se,compressedTexImage2D:fe,compressedTexImage3D:P,texImage2D:et,texImage3D:ot,pixelStorei:Ot,getParameter:xt,updateUBOMapping:Bt,uniformBlockBinding:Xt,texStorage2D:pt,texStorage3D:mt,texSubImage2D:b,texSubImage3D:W,compressedTexSubImage2D:$,compressedTexSubImage3D:tt,scissor:bt,viewport:yt,reset:se}}function ov(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return p?new OffscreenCanvas(P,b):Kr("canvas")}function g(P,b,W){let $=1,tt=fe(P);if((tt.width>W||tt.height>W)&&($=W/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let pt=Math.floor($*tt.width),mt=Math.floor($*tt.height);f===void 0&&(f=x(pt,mt));let et=b?x(pt,mt):f;return et.width=pt,et.height=mt,et.getContext("2d").drawImage(P,0,0,pt,mt),Yt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+pt+"x"+mt+")."),et}else return"data"in P&&Yt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),P;return P}function m(P){return P.generateMipmaps}function _(P){i.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,b,W,$,tt,pt=!1){if(P!==null){if(i[P]!==void 0)return i[P];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt;$&&(mt=t.get("EXT_texture_norm16"),mt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=b;if(b===i.RED&&(W===i.FLOAT&&(et=i.R32F),W===i.HALF_FLOAT&&(et=i.R16F),W===i.UNSIGNED_BYTE&&(et=i.R8),W===i.UNSIGNED_SHORT&&mt&&(et=mt.R16_EXT),W===i.SHORT&&mt&&(et=mt.R16_SNORM_EXT)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.R8UI),W===i.UNSIGNED_SHORT&&(et=i.R16UI),W===i.UNSIGNED_INT&&(et=i.R32UI),W===i.BYTE&&(et=i.R8I),W===i.SHORT&&(et=i.R16I),W===i.INT&&(et=i.R32I)),b===i.RG&&(W===i.FLOAT&&(et=i.RG32F),W===i.HALF_FLOAT&&(et=i.RG16F),W===i.UNSIGNED_BYTE&&(et=i.RG8),W===i.UNSIGNED_SHORT&&mt&&(et=mt.RG16_EXT),W===i.SHORT&&mt&&(et=mt.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RG8UI),W===i.UNSIGNED_SHORT&&(et=i.RG16UI),W===i.UNSIGNED_INT&&(et=i.RG32UI),W===i.BYTE&&(et=i.RG8I),W===i.SHORT&&(et=i.RG16I),W===i.INT&&(et=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGB8UI),W===i.UNSIGNED_SHORT&&(et=i.RGB16UI),W===i.UNSIGNED_INT&&(et=i.RGB32UI),W===i.BYTE&&(et=i.RGB8I),W===i.SHORT&&(et=i.RGB16I),W===i.INT&&(et=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),W===i.UNSIGNED_INT&&(et=i.RGBA32UI),W===i.BYTE&&(et=i.RGBA8I),W===i.SHORT&&(et=i.RGBA16I),W===i.INT&&(et=i.RGBA32I)),b===i.RGB&&(W===i.UNSIGNED_SHORT&&mt&&(et=mt.RGB16_EXT),W===i.SHORT&&mt&&(et=mt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),b===i.RGBA){let ot=pt?jr:ge.getTransfer(tt);W===i.FLOAT&&(et=i.RGBA32F),W===i.HALF_FLOAT&&(et=i.RGBA16F),W===i.UNSIGNED_BYTE&&(et=ot===Ee?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&mt&&(et=mt.RGBA16_EXT),W===i.SHORT&&mt&&(et=mt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(P,b){let W;return P?b===null||b===si||b===br?W=i.DEPTH24_STENCIL8:b===Bn?W=i.DEPTH32F_STENCIL8:b===vr&&(W=i.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===si||b===br?W=i.DEPTH_COMPONENT24:b===Bn?W=i.DEPTH_COMPONENT32F:b===vr&&(W=i.DEPTH_COMPONENT16),W}function T(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==sn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function C(P){let b=P.target;b.removeEventListener("dispose",C),A(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function y(P){let b=P.target;b.removeEventListener("dispose",y),U(b)}function A(P){let b=n.get(P);if(b.__webglInit===void 0)return;let W=P.source,$=d.get(W);if($){let tt=$[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(P),Object.keys($).length===0&&d.delete(W)}n.remove(P)}function L(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let W=P.source,$=d.get(W);delete $[b.__cacheKey],o.memory.textures--}function U(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let tt=0;tt<b.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let W=P.textures;for(let $=0,tt=W.length;$<tt;$++){let pt=n.get(W[$]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(W[$])}n.remove(P)}let z=0;function X(){z=0}function F(){return z}function O(P){z=P}function H(){let P=z;return P>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function G(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function nt(P,b){let W=n.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let $=P.image;if($===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(W,P,b);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function J(P,b){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){St(W,P,b);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function Q(P,b){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){St(W,P,b);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function st(P,b){let W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){$t(W,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}let Dt={[ps]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},Pt={[tn]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[_o]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[hl]:i.LINEAR_MIPMAP_NEAREST,[ts]:i.LINEAR_MIPMAP_LINEAR},xe={[cd]:i.NEVER,[pd]:i.ALWAYS,[hd]:i.LESS,[Zl]:i.LEQUAL,[ud]:i.EQUAL,[Jl]:i.GEQUAL,[fd]:i.GREATER,[dd]:i.NOTEQUAL};function ue(P,b){if(b.type===Bn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===sn||b.magFilter===hl||b.magFilter===_o||b.magFilter===ts||b.minFilter===sn||b.minFilter===hl||b.minFilter===_o||b.minFilter===ts)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Dt[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Dt[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Dt[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Pt[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Pt[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,xe[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==_o&&b.minFilter!==ts||b.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function _e(P,b){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",C));let $=b.source,tt=d.get($);tt===void 0&&(tt={},d.set($,tt));let pt=G(b);if(pt!==P.__cacheKey){tt[pt]===void 0&&(tt[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),tt[pt].usedTimes++;let mt=tt[P.__cacheKey];mt!==void 0&&(tt[P.__cacheKey].usedTimes--,mt.usedTimes===0&&L(b)),P.__cacheKey=pt,P.__webglTexture=tt[pt].texture}return W}function it(P,b,W){return Math.floor(Math.floor(P/W)/b)}function at(P,b,W,$){let pt=P.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,W,$,b.data);else{pt.sort((Ot,bt)=>Ot.start-bt.start);let mt=0;for(let Ot=1;Ot<pt.length;Ot++){let bt=pt[mt],yt=pt[Ot],Bt=bt.start+bt.count,Xt=it(yt.start,b.width,4),se=it(bt.start,b.width,4);yt.start<=Bt+1&&Xt===se&&it(yt.start+yt.count-1,b.width,4)===Xt?bt.count=Math.max(bt.count,yt.start+yt.count-bt.start):(++mt,pt[mt]=yt)}pt.length=mt+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Ot=0,bt=pt.length;Ot<bt;Ot++){let yt=pt[Ot],Bt=Math.floor(yt.start/4),Xt=Math.ceil(yt.count/4),se=Bt%b.width,V=Math.floor(Bt/b.width),_t=Xt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,se),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,se,V,_t,rt,W,$,b.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function St(P,b,W){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);let tt=_e(P,b),pt=b.source;e.bindTexture($,P.__webglTexture,i.TEXTURE0+W);let mt=n.get(pt);if(pt.version!==mt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let rt=ge.getPrimaries(ge.workingColorSpace),vt=b.colorSpace===Pi?null:ge.getPrimaries(b.colorSpace),Et=b.colorSpace===Pi||rt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ot=g(b.image,!1,s.maxTextureSize);ot=Se(b,ot);let xt=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type),bt=v(b.internalFormat,xt,Ot,b.normalized,b.colorSpace,b.isVideoTexture);ue($,b);let yt,Bt=b.mipmaps,Xt=b.isVideoTexture!==!0,se=mt.__version===void 0||tt===!0,V=pt.dataReady,_t=T(b,ot);if(b.isDepthTexture)bt=M(b.format===es,b.type),se&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,bt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,bt,ot.width,ot.height,0,xt,Ot,null));else if(b.isDataTexture)if(Bt.length>0){Xt&&se&&e.texStorage2D(i.TEXTURE_2D,_t,bt,Bt[0].width,Bt[0].height);for(let rt=0,vt=Bt.length;rt<vt;rt++)yt=Bt[rt],Xt?V&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,yt.width,yt.height,xt,Ot,yt.data):e.texImage2D(i.TEXTURE_2D,rt,bt,yt.width,yt.height,0,xt,Ot,yt.data);b.generateMipmaps=!1}else Xt?(se&&e.texStorage2D(i.TEXTURE_2D,_t,bt,ot.width,ot.height),V&&at(b,ot,xt,Ot)):e.texImage2D(i.TEXTURE_2D,0,bt,ot.width,ot.height,0,xt,Ot,ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,bt,Bt[0].width,Bt[0].height,ot.depth);for(let rt=0,vt=Bt.length;rt<vt;rt++)if(yt=Bt[rt],b.format!==zn)if(xt!==null)if(Xt){if(V)if(b.layerUpdates.size>0){let Et=Gh(yt.width,yt.height,b.format,b.type);for(let ct of b.layerUpdates){let zt=yt.data.subarray(ct*Et/yt.data.BYTES_PER_ELEMENT,(ct+1)*Et/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,ct,yt.width,yt.height,1,xt,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,yt.width,yt.height,ot.depth,xt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,bt,yt.width,yt.height,ot.depth,0,yt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,yt.width,yt.height,ot.depth,xt,Ot,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,bt,yt.width,yt.height,ot.depth,0,xt,Ot,yt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Xt&&se&&e.texStorage2D(i.TEXTURE_2D,_t,bt,Bt[0].width,Bt[0].height);for(let rt=0,vt=Bt.length;rt<vt;rt++)yt=Bt[rt],b.format!==zn?xt!==null?Xt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,bt,yt.width,yt.height,0,yt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?V&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,yt.width,yt.height,xt,Ot,yt.data):e.texImage2D(i.TEXTURE_2D,rt,bt,yt.width,yt.height,0,xt,Ot,yt.data)}else if(b.isDataArrayTexture)if(Xt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,bt,ot.width,ot.height,ot.depth),V)if(b.layerUpdates.size>0){let rt=Gh(ot.width,ot.height,b.format,b.type);for(let vt of b.layerUpdates){let Et=ot.data.subarray(vt*rt/ot.data.BYTES_PER_ELEMENT,(vt+1)*rt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,ot.width,ot.height,1,xt,Ot,Et)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,xt,Ot,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,ot.width,ot.height,ot.depth,0,xt,Ot,ot.data);else if(b.isData3DTexture)Xt?(se&&e.texStorage3D(i.TEXTURE_3D,_t,bt,ot.width,ot.height,ot.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,xt,Ot,ot.data)):e.texImage3D(i.TEXTURE_3D,0,bt,ot.width,ot.height,ot.depth,0,xt,Ot,ot.data);else if(b.isFramebufferTexture){if(se)if(Xt)e.texStorage2D(i.TEXTURE_2D,_t,bt,ot.width,ot.height);else{let rt=ot.width,vt=ot.height;for(let Et=0;Et<_t;Et++)e.texImage2D(i.TEXTURE_2D,Et,bt,rt,vt,0,xt,Ot,null),rt>>=1,vt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),ot.parentNode!==rt){rt.appendChild(ot),u.add(b),rt.onpaint=vt=>{let Et=vt.changedElements;for(let ct of u)Et.includes(ct.image)&&(ct.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{let Et=i.RGBA,ct=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,ct,zt,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Xt&&se){let rt=fe(Bt[0]);e.texStorage2D(i.TEXTURE_2D,_t,bt,rt.width,rt.height)}for(let rt=0,vt=Bt.length;rt<vt;rt++)yt=Bt[rt],Xt?V&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt,Ot,yt):e.texImage2D(i.TEXTURE_2D,rt,bt,xt,Ot,yt);b.generateMipmaps=!1}else if(Xt){if(se){let rt=fe(ot);e.texStorage2D(i.TEXTURE_2D,_t,bt,rt.width,rt.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ot,ot)}else e.texImage2D(i.TEXTURE_2D,0,bt,xt,Ot,ot);m(b)&&_($),mt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function $t(P,b,W){if(b.image.length!==6)return;let $=_e(P,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let pt=n.get(tt);if(tt.version!==pt.__version||$===!0){e.activeTexture(i.TEXTURE0+W);let mt=ge.getPrimaries(ge.workingColorSpace),et=b.colorSpace===Pi?null:ge.getPrimaries(b.colorSpace),ot=b.colorSpace===Pi||mt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let xt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ot=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let ct=0;ct<6;ct++)!xt&&!Ot?bt[ct]=g(b.image[ct],!0,s.maxCubemapSize):bt[ct]=Ot?b.image[ct].image:b.image[ct],bt[ct]=Se(b,bt[ct]);let yt=bt[0],Bt=r.convert(b.format,b.colorSpace),Xt=r.convert(b.type),se=v(b.internalFormat,Bt,Xt,b.normalized,b.colorSpace),V=b.isVideoTexture!==!0,_t=pt.__version===void 0||$===!0,rt=tt.dataReady,vt=T(b,yt);ue(i.TEXTURE_CUBE_MAP,b);let Et;if(xt){V&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,se,yt.width,yt.height);for(let ct=0;ct<6;ct++){Et=bt[ct].mipmaps;for(let zt=0;zt<Et.length;zt++){let kt=Et[zt];b.format!==zn?Bt!==null?V?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,kt.width,kt.height,Bt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,se,kt.width,kt.height,0,kt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,0,0,kt.width,kt.height,Bt,Xt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt,se,kt.width,kt.height,0,Bt,Xt,kt.data)}}}else{if(Et=b.mipmaps,V&&_t){Et.length>0&&vt++;let ct=fe(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,se,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Ot){V?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,bt[ct].width,bt[ct].height,Bt,Xt,bt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,se,bt[ct].width,bt[ct].height,0,Bt,Xt,bt[ct].data);for(let zt=0;zt<Et.length;zt++){let Ne=Et[zt].image[ct].image;V?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Ne.width,Ne.height,Bt,Xt,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,se,Ne.width,Ne.height,0,Bt,Xt,Ne.data)}}else{V?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Bt,Xt,bt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,se,Bt,Xt,bt[ct]);for(let zt=0;zt<Et.length;zt++){let kt=Et[zt];V?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,0,0,Bt,Xt,kt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,zt+1,se,Bt,Xt,kt.image[ct])}}}m(b)&&_(i.TEXTURE_CUBE_MAP),pt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ct(P,b,W,$,tt,pt){let mt=r.convert(W.format,W.colorSpace),et=r.convert(W.type),ot=v(W.internalFormat,mt,et,W.normalized,W.colorSpace),xt=n.get(b),Ot=n.get(W);if(Ot.__renderTarget=b,!xt.__hasExternalTextures){let bt=Math.max(1,b.width>>pt),yt=Math.max(1,b.height>>pt);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,pt,ot,bt,yt,b.depth,0,mt,et,null):e.texImage2D(tt,pt,ot,bt,yt,0,mt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ne(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,Ot.__webglTexture,0,jt(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,Ot.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(P,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let $=b.depthTexture,tt=$&&$.isDepthTexture?$.type:null,pt=M(b.stencilBuffer,tt),mt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt(b),pt,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt(b),pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,pt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,P)}else{let $=b.textures;for(let tt=0;tt<$.length;tt++){let pt=$[tt],mt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),ot=v(pt.internalFormat,mt,et,pt.normalized,pt.colorSpace);ne(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt(b),ot,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt(b),ot,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ot,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(P,b,W){let $=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(b.depthTexture);if(tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ue(i.TEXTURE_CUBE_MAP,b.depthTexture);let xt=r.convert(b.depthTexture.format),Ot=r.convert(b.depthTexture.type),bt;b.depthTexture.format===fi?bt=i.DEPTH_COMPONENT24:b.depthTexture.format===es&&(bt=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,bt,b.width,b.height,0,xt,Ot,null)}}else nt(b.depthTexture,0);let pt=tt.__webglTexture,mt=jt(b),et=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ot=b.depthTexture.format===es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===fi)ne(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,et,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,et,pt,0);else if(b.depthTexture.format===es)ne(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,et,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,et,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(P){let b=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=$}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let $=0;$<6;$++)Ce(b.__webglFramebuffer[$],P,$);else{let $=P.texture.mipmaps;$&&$.length>0?Ce(b.__webglFramebuffer[0],P,0):Ce(b.__webglFramebuffer,P,0)}else if(W){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),Jt(b.__webglDepthbuffer[$],P,!1);else{let tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,pt)}}else{let $=P.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Jt(b.__webglDepthbuffer,P,!1);else{let tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(P,b,W){let $=n.get(P);b!==void 0&&Ct($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&lt(P)}function ut(P){let b=P.texture,W=n.get(P),$=n.get(b);P.addEventListener("dispose",y);let tt=P.textures,pt=P.isWebGLCubeRenderTarget===!0,mt=tt.length>1;if(mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,o.memory.textures++),pt){W.__webglFramebuffer=[];for(let et=0;et<6;et++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[et]=[];for(let ot=0;ot<b.mipmaps.length;ot++)W.__webglFramebuffer[et][ot]=i.createFramebuffer()}else W.__webglFramebuffer[et]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let et=0;et<b.mipmaps.length;et++)W.__webglFramebuffer[et]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(mt)for(let et=0,ot=tt.length;et<ot;et++){let xt=n.get(tt[et]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ne(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let et=0;et<tt.length;et++){let ot=tt[et];W.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[et]);let xt=r.convert(ot.format,ot.colorSpace),Ot=r.convert(ot.type),bt=v(ot.internalFormat,xt,Ot,ot.normalized,ot.colorSpace,P.isXRRenderTarget===!0),yt=jt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,bt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,W.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Jt(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ue(i.TEXTURE_CUBE_MAP,b);for(let et=0;et<6;et++)if(b.mipmaps&&b.mipmaps.length>0)for(let ot=0;ot<b.mipmaps.length;ot++)Ct(W.__webglFramebuffer[et][ot],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot);else Ct(W.__webglFramebuffer[et],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(b)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let et=0,ot=tt.length;et<ot;et++){let xt=tt[et],Ot=n.get(xt),bt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,Ot.__webglTexture),ue(bt,xt),Ct(W.__webglFramebuffer,P,xt,i.COLOR_ATTACHMENT0+et,bt,0),m(xt)&&_(bt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(et=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,$.__webglTexture),ue(et,b),b.mipmaps&&b.mipmaps.length>0)for(let ot=0;ot<b.mipmaps.length;ot++)Ct(W.__webglFramebuffer[ot],P,b,i.COLOR_ATTACHMENT0,et,ot);else Ct(W.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,et,0);m(b)&&_(et),e.unbindTexture()}P.depthBuffer&&lt(P)}function dt(P){let b=P.textures;for(let W=0,$=b.length;W<$;W++){let tt=b[W];if(m(tt)){let pt=w(P),mt=n.get(tt).__webglTexture;e.bindTexture(pt,mt),_(pt),e.unbindTexture()}}}let gt=[],Wt=[];function Gt(P){if(P.samples>0){if(ne(P)===!1){let b=P.textures,W=P.width,$=P.height,tt=i.COLOR_BUFFER_BIT,pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(P),et=b.length>1;if(et)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let ot=P.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);let Ot=n.get(b[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,tt,i.NEAREST),l===!0&&(gt.length=0,Wt.length=0,gt.push(i.COLOR_ATTACHMENT0+xt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(gt.push(pt),Wt.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);let Ot=n.get(b[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function jt(P){return Math.min(s.maxSamples,P.samples)}function ne(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function k(P){let b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Se(P,b){let W=P.colorSpace,$=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Jr&&W!==Pi&&(ge.getTransfer(W)===Ee?($!==zn||tt!==wn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",W)),b}function fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.getTextureUnits=F,this.setTextureUnits=O,this.setTexture2D=nt,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=st,this.rebindTextures=ht,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function av(i,t){function e(n,s=Pi){let r,o=ge.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ih)return i.BYTE;if(n===Ph)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===Nh)return i.ALPHA;if(n===Uh)return i.RGB;if(n===zn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===vo||n===bo||n===Mo||n===So)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===_l||n===vl||n===bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===Sl||n===wl||n===Tl||n===El||n===wo||n===Al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===Sl)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tl)return r.COMPRESSED_R11_EAC;if(n===El)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wo)return r.COMPRESSED_RG11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cl||n===Rl||n===Il||n===Pl||n===Ll||n===Dl||n===Nl||n===Ul||n===kl||n===Fl||n===Ol||n===Bl||n===zl||n===Vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Hl||n===Wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===To||n===Yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function uv(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Bh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===gn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===gn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),w=_.envMap,v=_.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(hv.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ep),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let T=M.program;n.uniformBlockBinding(v,T)}function c(v,M){let T=s[v.id];T===void 0&&(g(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",_));let C=M.program;n.updateUBOMapping(v,C);let y=t.render.frame;r[v.id]!==y&&(f(v),r[v.id]=y)}function h(v){let M=u();v.__bindingPointIndex=M;let T=i.createBuffer(),C=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=s[v.id],T=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,A=T.length;y<A;y++){let L=T[y];if(Array.isArray(L))for(let U=0,z=L.length;U<z;U++)d(L[U],y,U,C);else d(L,y,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,T,C){if(x(v,M,T,C)===!0){let y=v.__offset,A=v.value;if(Array.isArray(A)){let L=0;for(let U=0;U<A.length;U++){let z=A[U],X=m(z);p(z,v.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function p(v,M,T){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,T)}function x(v,M,T,C){let y=v.value,A=M+"_"+T;if(C[A]===void 0)return typeof y=="number"||typeof y=="boolean"?C[A]=y:ArrayBuffer.isView(y)?C[A]=y.slice():C[A]=y.clone(),!0;{let L=C[A];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return C[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function g(v){let M=v.uniforms,T=0,C=16;for(let A=0,L=M.length;A<L;A++){let U=Array.isArray(M[A])?M[A]:[M[A]];for(let z=0,X=U.length;z<X;z++){let F=U[z],O=Array.isArray(F.value)?F.value:[F.value];for(let H=0,G=O.length;H<G;H++){let nt=O[H],J=m(nt),Q=T%C,st=Q%J.boundary,Dt=Q+st;T+=st,Dt!==0&&C-Dt<J.storage&&(T+=C-Dt),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=J.storage}}}let y=T%C;return y>0&&(T+=C-y),v.__size=T,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",v),M}function _(v){let M=v.target;M.removeEventListener("dispose",_);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}function pv(){return yi===null&&(yi=new no(dv,16,16,ns,ri),yi.name="DFG_LUT",yi.minFilter=sn,yi.magFilter=sn,yi.wrapS=ui,yi.wrapT=ui,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var Am,Cm,Rm,Im,Pm,Lm,Dm,Nm,Um,km,Fm,Om,Bm,zm,Vm,Gm,Hm,Wm,Xm,qm,Ym,$m,Zm,Jm,jm,Km,Qm,tg,eg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,fg,dg,pg,mg,gg,xg,yg,_g,vg,bg,Mg,Sg,wg,Tg,Eg,Ag,Cg,Rg,Ig,Pg,Lg,Dg,Ng,Ug,kg,Fg,Og,Bg,zg,Vg,Gg,Hg,Wg,Xg,qg,Yg,$g,Zg,Jg,jg,Kg,Qg,tx,ex,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,fx,dx,px,mx,gx,xx,yx,_x,vx,bx,Mx,Sx,wx,Tx,Ex,Ax,Cx,Rx,Ix,Px,Lx,Dx,Nx,Ux,kx,Fx,Ox,Bx,zx,Vx,Gx,Hx,Wx,Xx,qx,Yx,$x,Zx,Jx,jx,Kx,Qx,ty,ey,ny,iy,sy,ry,oy,ae,Mt,_i,jl,ay,Jd,wr,dy,py,my,Eo,Cd,Zh,Jh,jh,Kh,gy,bs,Ql,tc,Ay,jd,eu,Kd,Qd,tp,Ld,Dd,Nd,Ud,kd,nu,iu,su,Qh,Tr,g_,x_,Bd,b_,Kl,A_,C_,I_,L_,N_,k_,O_,G_,ou,au,J_,tv,ev,nv,iv,$d,Ao,tu,lv,cv,lu,cu,hv,ep,dv,yi,Ro,ic=li(()=>{$h();$h();Am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Km=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ux=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$x=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ry=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:Am,alphahash_pars_fragment:Cm,alphamap_fragment:Rm,alphamap_pars_fragment:Im,alphatest_fragment:Pm,alphatest_pars_fragment:Lm,aomap_fragment:Dm,aomap_pars_fragment:Nm,batching_pars_vertex:Um,batching_vertex:km,begin_vertex:Fm,beginnormal_vertex:Om,bsdfs:Bm,iridescence_fragment:zm,bumpmap_pars_fragment:Vm,clipping_planes_fragment:Gm,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Wm,clipping_planes_vertex:Xm,color_fragment:qm,color_pars_fragment:Ym,color_pars_vertex:$m,color_vertex:Zm,common:Jm,cube_uv_reflection_fragment:jm,defaultnormal_vertex:Km,displacementmap_pars_vertex:Qm,displacementmap_vertex:tg,emissivemap_fragment:eg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:sg,envmap_fragment:rg,envmap_common_pars_fragment:og,envmap_pars_fragment:ag,envmap_pars_vertex:lg,envmap_physical_pars_fragment:_g,envmap_vertex:cg,fog_vertex:hg,fog_pars_vertex:ug,fog_fragment:fg,fog_pars_fragment:dg,gradientmap_pars_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:xg,lights_pars_begin:yg,lights_toon_fragment:vg,lights_toon_pars_fragment:bg,lights_phong_fragment:Mg,lights_phong_pars_fragment:Sg,lights_physical_fragment:wg,lights_physical_pars_fragment:Tg,lights_fragment_begin:Eg,lights_fragment_maps:Ag,lights_fragment_end:Cg,lightprobes_pars_fragment:Rg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Dg,map_fragment:Ng,map_pars_fragment:Ug,map_particle_fragment:kg,map_particle_pars_fragment:Fg,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Bg,morphinstance_vertex:zg,morphcolor_vertex:Vg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:qg,normal_pars_fragment:Yg,normal_pars_vertex:$g,normal_vertex:Zg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:tx,opaque_fragment:ex,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:sx,dithering_fragment:rx,dithering_pars_fragment:ox,roughnessmap_fragment:ax,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:hx,shadowmap_vertex:ux,shadowmask_pars_fragment:fx,skinbase_vertex:dx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:xx,specularmap_pars_fragment:yx,tonemapping_fragment:_x,tonemapping_pars_fragment:vx,transmission_fragment:bx,transmission_pars_fragment:Mx,uv_pars_fragment:Sx,uv_pars_vertex:wx,uv_vertex:Tx,worldpos_vertex:Ex,background_vert:Ax,background_frag:Cx,backgroundCube_vert:Rx,backgroundCube_frag:Ix,cube_vert:Px,cube_frag:Lx,depth_vert:Dx,depth_frag:Nx,distance_vert:Ux,distance_frag:kx,equirect_vert:Fx,equirect_frag:Ox,linedashed_vert:Bx,linedashed_frag:zx,meshbasic_vert:Vx,meshbasic_frag:Gx,meshlambert_vert:Hx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:qx,meshnormal_vert:Yx,meshnormal_frag:$x,meshphong_vert:Zx,meshphong_frag:Jx,meshphysical_vert:jx,meshphysical_frag:Kx,meshtoon_vert:Qx,meshtoon_frag:ty,points_vert:ey,points_frag:ny,shadow_vert:iy,shadow_frag:sy,sprite_vert:ry,sprite_frag:oy},Mt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},_i={basic:{uniforms:un([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:un([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:un([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:un([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:un([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:un([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:un([Mt.points,Mt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:un([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:un([Mt.common,Mt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:un([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:un([Mt.sprite,Mt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:un([Mt.common,Mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:un([Mt.lights,Mt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};_i.physical={uniforms:un([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};jl={r:0,b:0,g:0},ay=new me,Jd=new ee;Jd.set(-1,0,0,0,1,0,0,0,1);wr=4,dy=6,py=20,my=256,Eo=new gr,Cd=new Vt,Zh=null,Jh=0,jh=0,Kh=!1,gy=new D,bs=new D,Ql=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=gy}=r;Zh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zh,Jh,jh),this._renderer.xr.enabled=Kh,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ri,format:zn,colorSpace:Jr,depthBuffer:!1},s=Rd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xy(r)),this._blurMaterial=_y(r,t,e),this._ggxMaterial=yy(r,t,e)}return s}_compileMaterial(t){let e=new ie(new Oe,t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,n,s,r){let l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Cd),u.toneMapping=ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ie(new Me,new He({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,m=!0):(g.color.copy(Cd),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let M=this._cubeSize;Sr(s,v*M,w>2?M:0,M,M),u.setRenderTarget(s),m&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qi||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Eo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-wr?n-p+wr:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Sr(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Eo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Sr(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(a,Eo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-wr?s-this._lodMax+wr:0),f=4*(this._cubeSize-h);Sr(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Eo)}};tc=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new io(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Me(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:gi});r.uniforms.tEquirect.value=e;let o=new ie(s,r),a=e.minFilter;return e.minFilter===ts&&(e.minFilter=sn),new sl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};Ay={[Mh]:"LINEAR_TONE_MAPPING",[Sh]:"REINHARD_TONE_MAPPING",[wh]:"CINEON_TONE_MAPPING",[Th]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[Ch]:"NEUTRAL_TONE_MAPPING",[Eh]:"CUSTOM_TONE_MAPPING"};jd=new pn,eu=new qi(1,1),Kd=new Qr,Qd=new Ua,tp=new io,Ld=[],Dd=[],Nd=new Float32Array(16),Ud=new Float32Array(9),kd=new Float32Array(4);nu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$y(e.type)}},iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p_(e.type)}},su=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Qh=/(\w+)(\])?(\[|\.)?/g;Tr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);m_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};g_=37297,x_=0;Bd=new ee;b_={[Mh]:"Linear",[Sh]:"Reinhard",[wh]:"Cineon",[Th]:"ACESFilmic",[Ah]:"AgX",[Ch]:"Neutral",[Eh]:"Custom"};Kl=new D;A_=/^[ \t]*#include +<([\w\d./]+)>/gm;C_=new Map;I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;L_={[xo]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};N_={[Qi]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE_UV"};k_={[_s]:"ENVMAP_MODE_REFRACTION"};O_={[al]:"ENVMAP_BLENDING_MULTIPLY",[id]:"ENVMAP_BLENDING_MIX",[sd]:"ENVMAP_BLENDING_ADD"};G_=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new au(t),e.set(t,n)),n}},au=class{constructor(t){this.id=G_++,this.code=t,this.usedTimes=0}};J_=0;tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],iv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],$d=new me,Ao=new D,tu=new D;lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new so(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:lv,fragmentShader:cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cu=class extends di{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new lu,m={},_=e.getContextAttributes(),w=null,v=null,M=[],T=[],C=new ft,y=null,A=null,L=new nn;L.viewport=new ze;let U=new nn;U.viewport=new ze;let z=[L,U],X=new rl,F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let at=M[it];return at===void 0&&(at=new Qs,M[it]=at),at.getTargetRaySpace()},this.getControllerGrip=function(it){let at=M[it];return at===void 0&&(at=new Qs,M[it]=at),at.getGripSpace()},this.getHand=function(it){let at=M[it];return at===void 0&&(at=new Qs,M[it]=at),at.getHandSpace()};function H(it){let at=T.indexOf(it.inputSource);if(at===-1)return;let St=M[at];St!==void 0&&(St.update(it.inputSource,it.frame,c||o),St.dispatchEvent({type:it.type,data:it.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let it=0;it<M.length;it++){let at=T[it];at!==null&&(T[it]=null,M[it].disconnect(at))}F=null,O=null,g.reset();for(let it in m)delete m[it];if(t.setRenderTarget(w),d=null,f=null,u=null,s=null,v=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),A!==null){let it=A.camera;it.fov=A.fov,it.zoom=A.zoom,it.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,$t=null,Ct=null;_.depth&&(Ct=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=_.stencil?es:fi,$t=_.stencil?br:si);let Jt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Sn(f.textureWidth,f.textureHeight,{format:zn,type:wn,depthTexture:new qi(f.textureWidth,f.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let St={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Sn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(it){for(let at=0;at<it.removed.length;at++){let St=it.removed[at],$t=T.indexOf(St);$t>=0&&(T[$t]=null,M[$t].disconnect(St))}for(let at=0;at<it.added.length;at++){let St=it.added[at],$t=T.indexOf(St);if($t===-1){for(let Jt=0;Jt<M.length;Jt++)if(Jt>=T.length){T.push(St),$t=Jt;break}else if(T[Jt]===null){T[Jt]=St,$t=Jt;break}if($t===-1)break}let Ct=M[$t];Ct&&Ct.connect(St)}}let J=new D,Q=new D;function st(it,at,St){J.setFromMatrixPosition(at.matrixWorld),Q.setFromMatrixPosition(St.matrixWorld);let $t=J.distanceTo(Q),Ct=at.projectionMatrix.elements,Jt=St.projectionMatrix.elements,Ce=Ct[14]/(Ct[10]-1),lt=Ct[14]/(Ct[10]+1),ht=(Ct[9]+1)/Ct[5],ut=(Ct[9]-1)/Ct[5],dt=(Ct[8]-1)/Ct[0],gt=(Jt[8]+1)/Jt[0],Wt=Ce*dt,Gt=Ce*gt,jt=$t/(-dt+gt),ne=jt*-dt;if(at.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ne),it.translateZ(jt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ct[10]===-1)it.projectionMatrix.copy(at.projectionMatrix),it.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let k=Ce+jt,Se=lt+jt,fe=Wt-ne,P=Gt+($t-ne),b=ht*lt/Se*k,W=ut*lt/Se*k;it.projectionMatrix.makePerspective(fe,P,b,W,k,Se),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Dt(it,at){at===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(at.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let at=it.near,St=it.far;g.texture!==null&&(g.depthNear>0&&(at=g.depthNear),g.depthFar>0&&(St=g.depthFar)),X.near=U.near=L.near=at,X.far=U.far=L.far=St,(F!==X.near||O!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),F=X.near,O=X.far),X.layers.mask=it.layers.mask|6,L.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let $t=it.parent,Ct=X.cameras;Dt(X,$t);for(let Jt=0;Jt<Ct.length;Jt++)Dt(Ct[Jt],$t);Ct.length===2?st(X,L,U):X.projectionMatrix.copy(L.projectionMatrix),A===null&&it.isPerspectiveCamera&&(A={camera:it,fov:it.fov,zoom:it.zoom}),Pt(it,X,$t)};function Pt(it,at,St){St===null?it.matrix.copy(at.matrixWorld):(it.matrix.copy(St.matrixWorld),it.matrix.invert(),it.matrix.multiply(at.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(at.projectionMatrix),it.projectionMatrixInverse.copy(at.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=La*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(it){l=it,f!==null&&(f.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(it){return m[it]};let xe=null;function ue(it,at){if(h=at.getViewerPose(c||o),p=at,h!==null){let St=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let $t=!1;St.length!==X.cameras.length&&(X.cameras.length=0,$t=!0);for(let lt=0;lt<St.length;lt++){let ht=St[lt],ut=null;if(d!==null)ut=d.getViewport(ht);else{let gt=u.getViewSubImage(f,ht);ut=gt.viewport,lt===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let dt=z[lt];dt===void 0&&(dt=new nn,dt.layers.enable(lt),dt.viewport=new ze,z[lt]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ut.x,ut.y,ut.width,ut.height),lt===0&&(X.matrix.copy(dt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),$t===!0&&X.cameras.push(dt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let lt=u.getDepthInformation(St[0]);lt&&lt.isValid&&lt.texture&&g.init(lt,s.renderState)}if(Ct&&Ct.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let lt=0;lt<St.length;lt++){let ht=St[lt].camera;if(ht){let ut=m[ht];ut||(ut=new so,m[ht]=ut);let dt=u.getCameraImage(ht);ut.sourceTexture=dt}}}}for(let St=0;St<M.length;St++){let $t=T[St],Ct=M[St];$t!==null&&Ct!==void 0&&Ct.update($t,at,c||o)}xe&&xe(it,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),p=null}let _e=new Zd;_e.setAnimationLoop(ue),this.setAnimationLoop=function(it){xe=it},this.dispose=function(){}}},hv=new me,ep=new ee;ep.set(-1,0,0,0,1,0,0,0,1);dv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;Ro=class{constructor(t={}){let{canvas:e=gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=wn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,g=new Set([xl,gl,ml]),m=new Set([wn,si,vr,br,fl,dl]),_=new Uint32Array(4),w=new Int32Array(4),v=new D,M=null,T=null,C=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,U=!1,z=null,X=null,F=null,O=null;this._outputColorSpace=en;let H=0,G=0,nt=null,J=-1,Q=null,st=new ze,Dt=new ze,Pt=null,xe=new Vt(0),ue=0,_e=e.width,it=e.height,at=1,St=null,$t=null,Ct=new ze(0,0,_e,it),Jt=new ze(0,0,_e,it),Ce=!1,lt=new ir,ht=!1,ut=!1,dt=new me,gt=new D,Wt=new ze,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function ne(){return nt===null?at:1}let k=n;function Se(E,B){return e.getContext(E,B)}let fe,P,b,W,$,tt,pt,mt,et,ot,xt,Ot,bt,yt,Bt,Xt,se,V,_t,rt,vt,Et,ct;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Yn,!1),k===null){let B="webgl2";if(k=Se(B,E),k===null)throw Se(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(E){throw e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Yn,!1),qt("WebGLRenderer: "+E.message),E}function zt(){fe=new by(k),fe.init(),vt=new av(k,fe),P=new uy(k,fe,t,vt),b=new rv(k,fe),P.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),X=k.createFramebuffer(),F=k.createFramebuffer(),O=k.createFramebuffer(),W=new wy(k),$=new X_,tt=new ov(k,fe,b,$,P,vt,W),pt=new vy(L),mt=new Em(k),Et=new cy(k,mt),et=new My(k,mt,W,Et),ot=new Ey(k,et,mt,Et,W),V=new Ty(k,P,tt),Bt=new fy($),xt=new W_(L,pt,fe,P,Et,Bt),Ot=new uv(L,$),bt=new Y_,yt=new Q_(fe),se=new ly(L,pt,b,ot,p,l),Xt=new sv(L,ot,P),ct=new fv(k,W,P,b),_t=new hy(k,fe,W),rt=new Sy(k,fe,W),W.programs=xt.programs,L.capabilities=P,L.extensions=fe,L.properties=$,L.renderLists=bt,L.shadowMap=Xt,L.state=b,L.info=W}x!==wn&&(A=new Cy(x,e.width,e.height,a,s,r));let kt=new cu(L,k);this.xr=kt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let E=fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(E){E!==void 0&&(at=E,this.setSize(_e,it,!1))},this.getSize=function(E){return E.set(_e,it)},this.setSize=function(E,B,K=!0){if(kt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=E,it=B,e.width=Math.floor(E*at),e.height=Math.floor(B*at),K===!0&&(e.style.width=E+"px",e.style.height=B+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(_e*at,it*at).floor()},this.setDrawingBufferSize=function(E,B,K){_e=E,it=B,at=K,e.width=Math.floor(E*K),e.height=Math.floor(B*K),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(x===wn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(st)},this.getViewport=function(E){return E.copy(Ct)},this.setViewport=function(E,B,K,q){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,B,K,q),b.viewport(st.copy(Ct).multiplyScalar(at).round())},this.getScissor=function(E){return E.copy(Jt)},this.setScissor=function(E,B,K,q){E.isVector4?Jt.set(E.x,E.y,E.z,E.w):Jt.set(E,B,K,q),b.scissor(Dt.copy(Jt).multiplyScalar(at).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(E){b.setScissorTest(Ce=E)},this.setOpaqueSort=function(E){St=E},this.setTransparentSort=function(E){$t=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,K=!0){let q=0;if(E){let Y=!1;if(nt!==null){let Tt=nt.texture.format;Y=g.has(Tt)}if(Y){let Tt=nt.texture.type,Lt=m.has(Tt),wt=se.getClearColor(),Nt=se.getClearAlpha(),Ft=wt.r,re=wt.g,de=wt.b;Lt?(_[0]=Ft,_[1]=re,_[2]=de,_[3]=Nt,k.clearBufferuiv(k.COLOR,0,_)):(w[0]=Ft,w[1]=re,w[2]=de,w[3]=Nt,k.clearBufferiv(k.COLOR,0,w))}else q|=k.COLOR_BUFFER_BIT}B&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),z=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Yn,!1),se.dispose(),bt.dispose(),yt.dispose(),$.dispose(),pt.dispose(),ot.dispose(),Et.dispose(),ct.dispose(),xt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Au),kt.removeEventListener("sessionend",Cu),rs.stop()};function Ne(E){E.preventDefault(),Fh("WebGLRenderer: Context Lost."),U=!0}function we(){Fh("WebGLRenderer: Context Restored."),U=!1;let E=W.autoReset,B=Xt.enabled,K=Xt.autoUpdate,q=Xt.needsUpdate,Y=Xt.type;zt(),W.autoReset=E,Xt.enabled=B,Xt.autoUpdate=K,Xt.needsUpdate=q,Xt.type=Y}function Yn(E){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oi(E){let B=E.target;B.removeEventListener("dispose",oi),Yp(B)}function Yp(E){$p(E),$.remove(E)}function $p(E){let B=$.get(E).programs;B!==void 0&&(B.forEach(function(K){xt.releaseProgram(K)}),E.isShaderMaterial&&xt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,K,q,Y,Tt){B===null&&(B=Gt);let Lt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,wt=jp(E,B,K,q,Y);b.setMaterial(q,Lt);let Nt=K.index,Ft=1;if(q.wireframe===!0){if(Nt=et.getWireframeAttribute(K),Nt===void 0)return;Ft=2}let re=K.drawRange,de=K.attributes.position,Ut=re.start*Ft,Te=(re.start+re.count)*Ft;Tt!==null&&(Ut=Math.max(Ut,Tt.start*Ft),Te=Math.min(Te,(Tt.start+Tt.count)*Ft)),Nt!==null?(Ut=Math.max(Ut,0),Te=Math.min(Te,Nt.count)):de!=null&&(Ut=Math.max(Ut,0),Te=Math.min(Te,de.count));let qe=Te-Ut;if(qe<0||qe===1/0)return;Et.setup(Y,q,wt,K,Nt);let ke,Le=_t;if(Nt!==null&&(ke=mt.get(Nt),Le=rt,Le.setIndex(ke)),Y.isMesh)q.wireframe===!0?(b.setLineWidth(q.wireframeLinewidth*ne()),Le.setMode(k.LINES)):Le.setMode(k.TRIANGLES);else if(Y.isLine){let an=q.linewidth;an===void 0&&(an=1),b.setLineWidth(an*ne()),Y.isLineSegments?Le.setMode(k.LINES):Y.isLineLoop?Le.setMode(k.LINE_LOOP):Le.setMode(k.LINE_STRIP)}else Y.isPoints?Le.setMode(k.POINTS):Y.isSprite&&Le.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))Le.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let an=Y._multiDrawStarts,It=Y._multiDrawCounts,fn=Y._multiDrawCount,ve=Nt?mt.get(Nt).bytesPerElement:1,Pn=$.get(q).currentProgram.getUniforms();for(let ai=0;ai<fn;ai++)Pn.setValue(k,"_gl_DrawID",ai),Le.render(an[ai]/ve,It[ai])}else if(Y.isInstancedMesh)Le.renderInstances(Ut,qe,Y.count);else if(K.isInstancedBufferGeometry){let an=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,It=Math.min(K.instanceCount,an);Le.renderInstances(Ut,qe,It)}else Le.render(Ut,qe)};function Eu(E,B,K,q){z!==null&&E.isNodeMaterial&&z.setObject(q,E),ht===!0&&Bt.setState(E,K,!1),E.transparent===!0&&E.side===mi&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,ko(E,B,q),E.side=Ki,E.needsUpdate=!0,ko(E,B,q),E.side=mi):ko(E,B,q)}this.compile=function(E,B,K=null){K===null&&(K=E),z!==null&&z.renderStart(E,B,K),T=yt.get(K),T.init(B),y.push(T),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),E!==K&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),ut=this.localClippingEnabled,ht=Bt.init(this.clippingPlanes,ut),ht===!0&&Bt.setGlobalState(this.clippingPlanes,B),z!==null&&Xt.render(T.state.shadowsArray,K,B);let q=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){let wt=Tt[Lt];Eu(wt,K,B,Y),q.add(wt)}else Eu(Tt,K,B,Y),q.add(Tt)}),T=y.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(E,B,K=null){let q=this.compile(E,B,K);return new Promise(Y=>{function Tt(){if(q.forEach(function(Lt){let Nt=$.get(Lt).currentProgram;(Nt===void 0||Nt.isReady())&&q.delete(Lt)}),q.size===0){Y(E);return}setTimeout(Tt,10)}fe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let pc=null;function Zp(E){pc&&pc(E)}function Au(){rs.stop()}function Cu(){rs.start()}let rs=new Zd;rs.setAnimationLoop(Zp),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(E){pc=E,kt.setAnimationLoop(E),E===null?rs.stop():rs.start()},kt.addEventListener("sessionstart",Au),kt.addEventListener("sessionend",Cu),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(E,B);let K=kt.enabled===!0&&kt.isPresenting===!0,q=A!==null&&(nt===null||K)&&A.begin(L,nt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(B),B=kt.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,B,nt),T=yt.get(E,y.length),T.init(B),T.state.textureUnits=tt.getTextureUnits(),y.push(T),dt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),lt.setFromProjectionMatrix(dt,Qn,B.reversedDepth),ut=this.localClippingEnabled,ht=Bt.init(this.clippingPlanes,ut),M=bt.get(E,C.length),M.init(),C.push(M),kt.enabled===!0&&kt.isPresenting===!0){let Lt=L.xr.getDepthSensingMesh();Lt!==null&&mc(Lt,B,-1/0,L.sortObjects)}mc(E,B,0,L.sortObjects),M.finish(),z!==null&&z.updateLights(T.state.lightsArray),L.sortObjects===!0&&M.sort(St,$t),jt=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,jt&&se.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Bt.beginShadows();let Y=T.state.shadowsArray;if(Xt.render(Y,E,B),ht===!0&&Bt.endShadows(),(q&&A.hasRenderPass())===!1){let Lt=M.opaque,wt=M.transmissive;if(T.setupLights(),B.isArrayCamera){let Nt=B.cameras;if(wt.length>0)for(let Ft=0,re=Nt.length;Ft<re;Ft++){let de=Nt[Ft];Iu(Lt,wt,E,de)}jt&&se.render(E);for(let Ft=0,re=Nt.length;Ft<re;Ft++){let de=Nt[Ft];Ru(M,E,de,de.viewport)}}else wt.length>0&&Iu(Lt,wt,E,B),jt&&se.render(E),Ru(M,E,B)}nt!==null&&G===0&&(tt.updateMultisampleRenderTarget(nt),tt.updateRenderTargetMipmap(nt)),q&&A.end(L),E.isScene===!0&&E.onAfterRender(L,E,B),Et.resetDefaultState(),J=-1,Q=null,y.pop(),y.length>0?(T=y[y.length-1],tt.setTextureUnits(T.state.textureUnits),ht===!0&&Bt.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,z!==null&&z.renderEnd()};function mc(E,B,K,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(lt)){q&&Wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(dt);let Lt=ot.update(E),wt=E.material;wt.visible&&M.push(E,Lt,wt,K,Wt.z,null,B)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(lt))){let Lt=ot.update(E),wt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Wt.copy(E.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Wt.copy(Lt.boundingSphere.center)),Wt.applyMatrix4(E.matrixWorld).applyMatrix4(dt)),Array.isArray(wt)){let Nt=Lt.groups;for(let Ft=0,re=Nt.length;Ft<re;Ft++){let de=Nt[Ft],Ut=wt[de.materialIndex];Ut&&Ut.visible&&M.push(E,Lt,Ut,K,Wt.z,de,B)}}else wt.visible&&M.push(E,Lt,wt,K,Wt.z,null,B)}}let Tt=E.children;for(let Lt=0,wt=Tt.length;Lt<wt;Lt++)mc(Tt[Lt],B,K,q)}function Ru(E,B,K,q){let{opaque:Y,transmissive:Tt,transparent:Lt}=E;T.setupLightsView(K),ht===!0&&Bt.setGlobalState(L.clippingPlanes,K),q&&b.viewport(st.copy(q)),Y.length>0&&Uo(Y,B,K),Tt.length>0&&Uo(Tt,B,K),Lt.length>0&&Uo(Lt,B,K),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Iu(E,B,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){let Ut=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new Sn(1,1,{generateMipmaps:!0,type:Ut?ri:wn,minFilter:ts,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Tt=T.state.transmissionRenderTarget[q.id],Lt=q.viewport||st;Tt.setSize(Lt.z*L.transmissionResolutionScale,Lt.w*L.transmissionResolutionScale);let wt=L.getRenderTarget(),Nt=L.getActiveCubeFace(),Ft=L.getActiveMipmapLevel();L.setRenderTarget(Tt),L.getClearColor(xe),ue=L.getClearAlpha(),ue<1&&L.setClearColor(16777215,.5),L.clear(),jt&&se.render(K);let re=L.toneMapping;L.toneMapping=ii;let de=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),ht===!0&&Bt.setGlobalState(L.clippingPlanes,q),Uo(E,K,q),tt.updateMultisampleRenderTarget(Tt),tt.updateRenderTargetMipmap(Tt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Te=0,qe=B.length;Te<qe;Te++){let ke=B[Te],{object:Le,geometry:an,material:It,group:fn}=ke;if(It.side===mi&&Le.layers.test(q.layers)){let ve=It.side;It.side=gn,It.needsUpdate=!0,Pu(Le,K,q,an,It,fn),It.side=ve,It.needsUpdate=!0,Ut=!0}}Ut===!0&&(tt.updateMultisampleRenderTarget(Tt),tt.updateRenderTargetMipmap(Tt))}L.setRenderTarget(wt,Nt,Ft),L.setClearColor(xe,ue),de!==void 0&&(q.viewport=de),L.toneMapping=re}function Uo(E,B,K){let q=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Tt=E.length;Y<Tt;Y++){let Lt=E[Y],{object:wt,geometry:Nt,group:Ft}=Lt,re=Lt.material;re.allowOverride===!0&&q!==null&&(re=q),wt.layers.test(K.layers)&&Pu(wt,B,K,Nt,re,Ft)}}function Pu(E,B,K,q,Y,Tt){z!==null&&Y.isNodeMaterial&&z.setObject(E,Y),E.onBeforeRender(L,B,K,q,Y,Tt),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(L,B,K,q,E,Tt),Y.transparent===!0&&Y.side===mi&&Y.forceSinglePass===!1?(Y.side=gn,Y.needsUpdate=!0,L.renderBufferDirect(K,B,q,Y,E,Tt),Y.side=Ki,Y.needsUpdate=!0,L.renderBufferDirect(K,B,q,Y,E,Tt),Y.side=mi):L.renderBufferDirect(K,B,q,Y,E,Tt),E.onAfterRender(L,B,K,q,Y,Tt)}function ko(E,B,K){B.isScene!==!0&&(B=Gt);let q=$.get(E),Y=T.state.lights,Tt=T.state.shadowsArray,Lt=Y.state.version,wt=xt.getParameters(E,Y.state,Tt,B,K,T.state.lightProbeGridArray),Nt=xt.getProgramCacheKey(wt),Ft=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;let re=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=pt.get(E.envMap||q.environment,re),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",oi),Ft=new Map,q.programs=Ft);let de=Ft.get(Nt);if(de!==void 0){if(q.currentProgram===de&&q.lightsStateVersion===Lt)return Du(E,wt),de}else wt.uniforms=xt.getUniforms(E),z!==null&&E.isNodeMaterial&&z.build(E,K,wt),E.onBeforeCompile(wt,L),de=xt.acquireProgram(wt,Nt),Ft.set(Nt,de),q.uniforms=wt.uniforms;let Ut=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=Bt.uniform),Du(E,wt),q.needsLights=Qp(E),q.lightsStateVersion=Lt,q.needsLights&&(Ut.ambientLightColor.value=Y.state.ambient,Ut.lightProbe.value=Y.state.probe,Ut.sunLights.value=Y.state.sun,Ut.sunLightShadows.value=Y.state.sunShadow,Ut.directionalLights.value=Y.state.directional,Ut.directionalLightShadows.value=Y.state.directionalShadow,Ut.spotLights.value=Y.state.spot,Ut.spotLightShadows.value=Y.state.spotShadow,Ut.rectAreaLights.value=Y.state.rectArea,Ut.ltc_1.value=Y.state.rectAreaLTC1,Ut.ltc_2.value=Y.state.rectAreaLTC2,Ut.pointLights.value=Y.state.point,Ut.pointLightShadows.value=Y.state.pointShadow,Ut.hemisphereLights.value=Y.state.hemi,Ut.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ut.sunShadowCascade.value=Y.state.sunShadowCascade,Ut.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ut.spotLightMatrix.value=Y.state.spotLightMatrix,Ut.spotLightMap.value=Y.state.spotLightMap,Ut.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=de,q.uniformsList=null,de}function Lu(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Tr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Du(E,B){let K=$.get(E);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Jp(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let K=0,q=E.length;K<q;K++){let Y=E[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(v))return Y}return null}function jp(E,B,K,q,Y){B.isScene!==!0&&(B=Gt),tt.resetTextureUnits();let Tt=B.fog,Lt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,wt=nt===null?L.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ge.workingColorSpace,Nt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ft=pt.get(q.envMap||Lt,Nt),re=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,de=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ut=!!K.morphAttributes.position,Te=!!K.morphAttributes.normal,qe=!!K.morphAttributes.color,ke=ii;q.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ke=L.toneMapping);let Le=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,an=Le!==void 0?Le.length:0,It=$.get(q),fn=T.state.lights;if(ht===!0&&(ut===!0||E!==Q)){let Ue=E===Q&&q.id===J;Bt.setState(q,E,Ue)}let ve=!1;q.version===It.__version?(It.needsLights&&It.lightsStateVersion!==fn.state.version||It.outputColorSpace!==wt||Y.isBatchedMesh&&It.batching===!1||!Y.isBatchedMesh&&It.batching===!0||Y.isBatchedMesh&&It.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&It.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&It.instancing===!1||!Y.isInstancedMesh&&It.instancing===!0||Y.isSkinnedMesh&&It.skinning===!1||!Y.isSkinnedMesh&&It.skinning===!0||Y.isInstancedMesh&&It.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&It.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&It.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&It.instancingMorph===!1&&Y.morphTexture!==null||It.envMap!==Ft||q.fog===!0&&It.fog!==Tt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Bt.numPlanes||It.numIntersection!==Bt.numIntersection)||It.vertexAlphas!==re||It.vertexTangents!==de||It.morphTargets!==Ut||It.morphNormals!==Te||It.morphColors!==qe||It.toneMapping!==ke||It.morphTargetsCount!==an||!!It.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,It.__version=q.version);let Pn=It.currentProgram;ve===!0&&(Pn=ko(q,B,Y),z&&q.isNodeMaterial&&z.onUpdateProgram(q,Pn,It));let ai=!1,Di=!1,ws=!1,Pe=Pn.getUniforms(),We=It.uniforms;if(b.useProgram(Pn.program)&&(ai=!0,Di=!0,ws=!0),q.id!==J&&(J=q.id,Di=!0),It.needsLights){let Ue=Jp(T.state.lightProbeGridArray,Y);It.lightProbeGrid!==Ue&&(It.lightProbeGrid=Ue,Di=!0)}if(ai||Q!==E){b.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Pe.setValue(k,"projectionMatrix",E.projectionMatrix),Pe.setValue(k,"viewMatrix",E.matrixWorldInverse);let Ui=Pe.map.cameraPosition;Ui!==void 0&&Ui.setValue(k,gt.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&Pe.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pe.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,Di=!0,ws=!0)}if(It.needsLights&&(fn.state.sunShadowMap.length>0&&Pe.setValue(k,"sunShadowMap",fn.state.sunShadowMap,tt),fn.state.directionalShadowMap.length>0&&Pe.setValue(k,"directionalShadowMap",fn.state.directionalShadowMap,tt),fn.state.spotShadowMap.length>0&&Pe.setValue(k,"spotShadowMap",fn.state.spotShadowMap,tt),fn.state.pointShadowMap.length>0&&Pe.setValue(k,"pointShadowMap",fn.state.pointShadowMap,tt)),Y.isSkinnedMesh){Pe.setOptional(k,Y,"bindMatrix"),Pe.setOptional(k,Y,"bindMatrixInverse");let Ue=Y.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Pe.setValue(k,"boneTexture",Ue.boneTexture,tt))}Y.isBatchedMesh&&(Pe.setOptional(k,Y,"batchingTexture"),Pe.setValue(k,"batchingTexture",Y._matricesTexture,tt),Pe.setOptional(k,Y,"batchingIdTexture"),Pe.setValue(k,"batchingIdTexture",Y._indirectTexture,tt),Pe.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Pe.setValue(k,"batchingColorTexture",Y._colorsTexture,tt));let Ni=K.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&V.update(Y,K,Pn),(Di||It.receiveShadow!==Y.receiveShadow)&&(It.receiveShadow=Y.receiveShadow,Pe.setValue(k,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(We.envMapIntensity.value=B.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=pv()),Di){if(Pe.setValue(k,"toneMappingExposure",L.toneMappingExposure),It.needsLights&&Kp(We,ws),Tt&&q.fog===!0&&Ot.refreshFogUniforms(We,Tt),Ot.refreshMaterialUniforms(We,q,at,it,T.state.transmissionRenderTarget[E.id]),It.needsLights&&It.lightProbeGrid){let Ue=It.lightProbeGrid;We.probesSH.value=Ue.texture,We.probesMin.value.copy(Ue.boundingBox.min),We.probesMax.value.copy(Ue.boundingBox.max),We.probesResolution.value.copy(Ue.resolution)}Tr.upload(k,Lu(It),We,tt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Tr.upload(k,Lu(It),We,tt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pe.setValue(k,"center",Y.center),Pe.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Pe.setValue(k,"normalMatrix",Y.normalMatrix),Pe.setValue(k,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Ue=q.uniformsGroups;for(let Ui=0,Ts=Ue.length;Ui<Ts;Ui++){let Uu=Ue[Ui];ct.update(Uu,Pn),ct.bind(Uu,Pn)}}return Pn}function Kp(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Qp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(E,B,K){let q=$.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$.get(E.texture).__webglTexture=B,$.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let K=$.get(E);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,K=0){nt=E,H=B,G=K;let q=null,Y=!1,Tt=!1;if(E){let wt=$.get(E);if(wt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(k.FRAMEBUFFER,wt.__webglFramebuffer),st.copy(E.viewport),Dt.copy(E.scissor),Pt=E.scissorTest,b.viewport(st),b.scissor(Dt),b.setScissorTest(Pt),J=-1;return}else if(wt.__webglFramebuffer===void 0)tt.setupRenderTarget(E);else if(wt.__hasExternalTextures)tt.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let re=E.depthTexture;if(wt.__boundDepthTexture!==re){if(re!==null&&$.has(re)&&(E.width!==re.image.width||E.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(E)}}let Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Tt=!0);let Ft=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[B])?q=Ft[B][K]:q=Ft[B],Y=!0):E.samples>0&&tt.useMultisampledRTT(E)===!1?q=$.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?q=Ft[K]:q=Ft,st.copy(E.viewport),Dt.copy(E.scissor),Pt=E.scissorTest}else st.copy(Ct).multiplyScalar(at).floor(),Dt.copy(Jt).multiplyScalar(at).floor(),Pt=Ce;if(K!==0&&(q=X),b.bindFramebuffer(k.FRAMEBUFFER,q)&&b.drawBuffers(E,q),b.viewport(st),b.scissor(Dt),b.setScissorTest(Pt),Y){let wt=$.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,K)}else if(Tt){let wt=B;for(let Nt=0;Nt<E.textures.length;Nt++){let Ft=$.get(E.textures[Nt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Nt,Ft.__webglTexture,K,wt)}}else if(E!==null&&K!==0){let wt=$.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,wt.__webglTexture,K)}J=-1};function Nu(E){let B=$.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=P.textureFormatReadable(E.format),B.__typeReadable=P.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,K,q,Y,Tt,Lt,wt=0){if(!(E&&E.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){b.bindFramebuffer(k.FRAMEBUFFER,Nt);try{let Ft=E.textures[wt],re=Ft.format,de=Ft.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+wt);let Ut=Nu(Ft);if(Ut.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&K>=0&&K<=E.height-Y&&k.readPixels(B,K,q,Y,vt.convert(re),vt.convert(de),Tt)}finally{let Ft=nt!==null?$.get(nt).__webglFramebuffer:null;b.bindFramebuffer(k.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(E,B,K,q,Y,Tt,Lt,wt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt)if(B>=0&&B<=E.width-q&&K>=0&&K<=E.height-Y){b.bindFramebuffer(k.FRAMEBUFFER,Nt);let Ft=E.textures[wt],re=Ft.format,de=Ft.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+wt);let Ut=Nu(Ft);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Te),k.bufferData(k.PIXEL_PACK_BUFFER,Tt.byteLength,k.STREAM_READ),k.readPixels(B,K,q,Y,vt.convert(re),vt.convert(de),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let qe=nt!==null?$.get(nt).__webglFramebuffer:null;b.bindFramebuffer(k.FRAMEBUFFER,qe);let ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await yd(k,ke,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Te),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Tt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Te),k.deleteSync(ke),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,K=0){let q=Math.pow(2,-K),Y=Math.floor(E.image.width*q),Tt=Math.floor(E.image.height*q),Lt=B!==null?B.x:0,wt=B!==null?B.y:0;tt.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,Lt,wt,Y,Tt),b.unbindTexture()},this.copyTextureToTexture=function(E,B,K=null,q=null,Y=0,Tt=0){let Lt,wt,Nt,Ft,re,de,Ut,Te,qe,ke=E.isCompressedTexture?E.mipmaps[Tt]:E.image;if(K!==null)Lt=K.max.x-K.min.x,wt=K.max.y-K.min.y,Nt=K.isBox3?K.max.z-K.min.z:1,Ft=K.min.x,re=K.min.y,de=K.isBox3?K.min.z:0;else{let We=Math.pow(2,-Y);Lt=Math.floor(ke.width*We),wt=Math.floor(ke.height*We),E.isDataArrayTexture?Nt=ke.depth:E.isData3DTexture?Nt=Math.floor(ke.depth*We):Nt=1,Ft=0,re=0,de=0}q!==null?(Ut=q.x,Te=q.y,qe=q.z):(Ut=0,Te=0,qe=0);let Le=vt.convert(B.format),an=vt.convert(B.type),It;B.isData3DTexture?(tt.setTexture3D(B,0),It=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(tt.setTexture2DArray(B,0),It=k.TEXTURE_2D_ARRAY):(tt.setTexture2D(B,0),It=k.TEXTURE_2D),b.activeTexture(k.TEXTURE0),b.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let fn=b.getParameter(k.UNPACK_ROW_LENGTH),ve=b.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=b.getParameter(k.UNPACK_SKIP_PIXELS),ai=b.getParameter(k.UNPACK_SKIP_ROWS),Di=b.getParameter(k.UNPACK_SKIP_IMAGES);b.pixelStorei(k.UNPACK_ROW_LENGTH,ke.width),b.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ke.height),b.pixelStorei(k.UNPACK_SKIP_PIXELS,Ft),b.pixelStorei(k.UNPACK_SKIP_ROWS,re),b.pixelStorei(k.UNPACK_SKIP_IMAGES,de);let ws=E.isDataArrayTexture||E.isData3DTexture,Pe=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let We=$.get(E),Ni=$.get(B),Ue=$.get(We.__renderTarget),Ui=$.get(Ni.__renderTarget);b.bindFramebuffer(k.READ_FRAMEBUFFER,Ue.__webglFramebuffer),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ts=0;Ts<Nt;Ts++)ws&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(E).__webglTexture,Y,de+Ts),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(B).__webglTexture,Tt,qe+Ts)),k.blitFramebuffer(Ft,re,Lt,wt,Ut,Te,Lt,wt,k.DEPTH_BUFFER_BIT,k.NEAREST);b.bindFramebuffer(k.READ_FRAMEBUFFER,null),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||$.has(E)){let We=$.get(E),Ni=$.get(B);b.bindFramebuffer(k.READ_FRAMEBUFFER,F),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let Ue=0;Ue<Nt;Ue++)ws?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.__webglTexture,Y,de+Ue):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,We.__webglTexture,Y),Pe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ni.__webglTexture,Tt,qe+Ue):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ni.__webglTexture,Tt),Y!==0?k.blitFramebuffer(Ft,re,Lt,wt,Ut,Te,Lt,wt,k.COLOR_BUFFER_BIT,k.NEAREST):Pe?k.copyTexSubImage3D(It,Tt,Ut,Te,qe+Ue,Ft,re,Lt,wt):k.copyTexSubImage2D(It,Tt,Ut,Te,Ft,re,Lt,wt);b.bindFramebuffer(k.READ_FRAMEBUFFER,null),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Pe?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(It,Tt,Ut,Te,qe,Lt,wt,Nt,Le,an,ke.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(It,Tt,Ut,Te,qe,Lt,wt,Nt,Le,ke.data):k.texSubImage3D(It,Tt,Ut,Te,qe,Lt,wt,Nt,Le,an,ke):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Tt,Ut,Te,Lt,wt,Le,an,ke.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Tt,Ut,Te,ke.width,ke.height,Le,ke.data):k.texSubImage2D(k.TEXTURE_2D,Tt,Ut,Te,Lt,wt,Le,an,ke);b.pixelStorei(k.UNPACK_ROW_LENGTH,fn),b.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ve),b.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),b.pixelStorei(k.UNPACK_SKIP_ROWS,ai),b.pixelStorei(k.UNPACK_SKIP_IMAGES,Di),Tt===0&&B.generateMipmaps&&k.generateMipmap(It),b.unbindTexture()},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&tt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?tt.setTextureCube(E,0):E.isData3DTexture?tt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?tt.setTexture2DArray(E,0):tt.setTexture2D(E,0),b.unbindTexture()},this.resetState=function(){H=0,G=0,nt=null,b.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}});function Io(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Oe,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=np(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=np(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function np(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Be(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var ip=li(()=>{ic()});function Vn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Po.copy(t),Po[n]=0,Po.normalize();let c=.5*o/(o+a),h=1-Po.angleTo(i)/l;return Math.sign(Po[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Po,Lo,sp=li(()=>{ic();Po=new D;Lo=class i extends Me{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new D,c=new D,h=new D(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,x=new D,g=.5/o;for(let m=0,_=0;m<u.length;m+=3,_+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),d[_+0]=Vn(x,c,"z","y",r,n),d[_+1]=1-Vn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[_+0]=1-Vn(x,c,"z","y",r,n),d[_+1]=1-Vn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[_+0]=1-Vn(x,c,"x","z",r,t),d[_+1]=Vn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[_+0]=1-Vn(x,c,"x","z",r,t),d[_+1]=1-Vn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[_+0]=1-Vn(x,c,"x","y",r,t),d[_+1]=1-Vn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[_+0]=Vn(x,c,"x","y",r,t),d[_+1]=1-Vn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}}});var hu=li(()=>{ic();ip();sp()});function gv(i,t){let e=(t?"g":"l")+i,n=op.get(e);return n||(n=t?new He({color:i}):new Ae({color:i}),n.userData.glow=!!t,op.set(e,n)),n}function I(i,t,e,n,s,r,o=!1){let a=new ie(i,gv(t,o));return e&&a.position.set(e[0],e[1],e[2]),n&&a.rotation.set(n[0],n[1],n[2]),s!=null&&(typeof s=="number"?a.scale.setScalar(s):a.scale.set(s[0],s[1],s[2])),r&&r.add(a),a}function At(i,t,e=0,n=0,s=0){let r=new be;return r.name=i,r.position.set(e,n,s),t&&t.add(r),r}function Gn(i={}){let t=i.skin??N.skin,e=i.headR??.21,n=new be,s=At("body",n),r=i.hip??.27,o=i.bodyW??1,a=At("legL",s,-.075*o,r,0),l=At("legR",s,.075*o,r,0);for(let p of[a,l])I(R.cap(.058*o,.1),i.pants??N.leather,[0,-.1,0],null,null,p),I(R.rbox(.12*o,.08,.17,.035),i.boots??N.leatherDk,[0,-.225,.025],null,null,p);let c=i.torsoH??.25;I(R.cyl(.14*o,.165*o,c,14),i.top??N.cloth,[0,r+c/2-.01,0],null,[1,1,.82],s),I(R.sph(.165*o,14,8),i.top??N.cloth,[0,r+.01,0],null,[1,.45,.82],s),i.belt!==!1&&I(R.cyl(.168*o,.168*o,.045,14),i.belt??N.leatherDk,[0,r+.04,0],null,[1,1,.84],s),i.buckle!==!1&&i.belt!==!1&&I(R.rbox(.06,.05,.02,.008),N.gold,[0,r+.04,.14*o],null,null,s);let h=At("head",s,0,r+c+e*.82,0);I(R.sph(e,18,14),t,[0,0,0],null,i.headScale??null,h),i.face!==!1&&xv(h,e,i);let u=r+c-.04,f=At("armL",s,-(.165*o+.04),u,0),d=At("armR",s,.165*o+.04,u,0);for(let[p,x]of[[f,-1],[d,1]])p.rotation.z=x*.12,I(R.cap(.05*o,.1),i.sleeve??i.top??N.cloth,[0,-.08,0],null,null,p),I(R.sph(.06*o,10,8),i.hands??t,[0,-.175,0],null,null,p);return{root:n,body:s,head:h,armL:f,armR:d,legL:a,legR:l,headR:e,hand:-.175,hip:r,top:r+c+e*1.8,anim:"biped"}}function xv(i,t,e){let n=t*.36,s=e.eyeY??t*.06,r=t*.86;if(e.eyes!==!1)for(let o of[-1,1])I(R.sph(t*.2,10,8),N.eye,[o*n,s,r],null,[1,1.15,.55],i),I(R.sph(t*.11,8,6),e.pupil??N.ink,[o*n,s-t*.01,r+t*.1],null,[1,1.2,.5],i),I(R.sph(t*.035,6,4),N.white,[o*n+t*.04,s+t*.05,r+t*.15],null,null,i,!0),e.brows!==!1&&I(R.rbox(t*.36,t*.07,t*.06,t*.03),e.browColor??N.hairDk,[o*n,s+t*.32,r-t*.02],[0,0,o*(e.angry?-.35:.12)],null,i);e.nose!==!1&&I(R.sph(t*.12,8,6),e.noseColor??e.skin??N.skin,[0,s-t*.2,r+t*.06],null,e.noseScale??null,i),e.mouth!==!1&&I(R.rbox(t*.32,t*.08,t*.06,t*.035),N.mouth,[0,s-t*.44,r-t*.08],[.25,0,0],null,i)}function yv(i,t=1,e=N.steel){let n=At("swordP",i,0,-.175,.02);return n.rotation.x=Z/2,I(Ze("blade",.016,.006),e,[0,.07,0],null,[t,t,1],n),I(R.rbox(.16,.035,.04,.012),N.gold,[0,.06,0],null,null,n),I(R.cyl(.018,.02,.09,8),N.leatherDk,[0,.01,0],null,null,n),I(R.sph(.026,8,6),N.gold,[0,-.04,0],null,null,n),n}function _v(i){let t=At("mount",null),e=At("mbody",t,0,.62,0);I(R.cap(.24,.5,14),N.horse,[0,0,0],[Z/2,0,0],null,e),I(R.cyl(.27,.27,.62,16,1),i.main,[0,-.02,0],[Z/2,0,0],[1,1,1],e).scale.set(1,1,.8),I(R.cyl(.275,.275,.05,16),i.trim,[0,-.02,.3],[Z/2,0,0],null,e),I(R.cyl(.275,.275,.05,16),i.trim,[0,-.02,-.3],[Z/2,0,0],null,e);let n=At("neck",e,0,.12,.38);n.rotation.x=-.6,I(R.cap(.13,.26,10),N.horse,[0,.17,0],null,null,n);for(let o=0;o<4;o++)I(R.sph(.06,6,5),N.mane,[0,.12+o*.07,-.1],null,[.6,1,1],n);let s=At("mhead",n,0,.36,.04);s.rotation.x=1,I(R.cap(.1,.2,10),N.horse,[0,0,.08],[Z/2,0,0],null,s),I(R.sph(.11,10,8),N.horseDk,[0,-.02,.22],null,[.9,.8,.8],s);for(let o of[-1,1])I(R.cone(.035,.1,6),N.horse,[o*.06,.1,-.03],null,null,s),I(R.sph(.028,8,6),N.ink,[o*.085,.05,.09],null,null,s);I(R.rbox(.05,.22,.14,.02),i.main,[0,.03,.05],null,null,s);for(let[o,a,l]of[["legFL",-.13,.27],["legFR",.13,.27],["legBL",-.13,-.27],["legBR",.13,-.27]]){let c=At(o,t,a,.55,l);I(R.cap(.06,.38,8),N.horse,[0,-.25,0],null,null,c),I(R.cyl(.07,.075,.07,10),N.ink,[0,-.52,0],null,null,c)}let r=At("mtail",e,0,.1,-.45);return I(R.cone(.09,.4,8),N.mane,[0,-.15,-.06],[.5+Z,0,0],null,r),t}function vv(i){let t=At("mount",null),e=At("mbody",t,0,.42,0);I(R.cap(.2,.36,12),N.wolf,[0,0,0],[Z/2,0,0],null,e),I(R.sph(.2,12,10),N.wolfLt,[0,-.06,.12],null,[.85,.8,1.2],e),I(R.sph(.24,12,10),N.wolfDk,[0,.08,.2],null,[1.1,.9,.9],e),I(R.rbox(.3,.06,.3,.03),i.main,[0,.19,-.04],null,null,e);let n=At("mhead",e,0,.12,.36);I(R.sph(.17,12,10),N.wolf,[0,0,0],null,null,n),I(R.rbox(.13,.11,.2,.05),N.wolfLt,[0,-.05,.15],null,null,n),I(R.sph(.035,6,5),N.ink,[0,-.01,.26],null,null,n),I(R.rbox(.11,.035,.15,.015),N.mouth,[0,-.1,.15],null,null,n);for(let r of[-1,1])I(R.cone(.06,.14,4),N.wolfDk,[r*.09,.15,-.02],[0,0,-r*.2],null,n),I(R.sph(.03,6,5),16769126,[r*.07,.04,.13],null,null,n,!0),I(R.cone(.012,.04,4),N.white,[r*.04,-.11,.21],[Z,0,0],null,n);for(let[r,o,a]of[["legFL",-.1,.18],["legFR",.1,.18],["legBL",-.1,-.18],["legBR",.1,-.18]]){let l=At(r,t,o,.36,a);I(R.cap(.055,.22,8),N.wolf,[0,-.16,0],null,null,l),I(R.sph(.06,8,6),N.wolfDk,[0,-.32,.02],null,[1,.6,1.2],l)}let s=At("mtail",e,0,.06,-.32);return I(R.cone(.08,.34,8),N.wolf,[0,0,-.15],[-Z/2-.5,0,0],null,s),I(R.cone(.05,.1,6),N.wolfLt,[0,.12,-.3],[-Z/2-.5,0,0],null,s),t}function ap(i){let t=De.archer(i);return t.anim="biped",t}function lp(i){let t=Gn({top:i.main,sleeve:i.main,pants:i.dark,boots:N.black,belt:N.gold,headR:.22,bodyW:1.2,browColor:10115612}),{head:e,body:n,armR:s}=t,r=t.headR;I(R.cone(.3,.42,16),i.main,[0,.2,0],null,null,n),I(R.tor(.24,.07,Z*2,8,18),N.white,[0,t.hip+.24,0],[Z/2,0,0],null,n);for(let a=0;a<6;a++)I(R.sph(.018,5,4),N.ink,[Math.sin(a)*.2,t.hip+.26,Math.cos(a)*.2],null,null,n);I(R.sph(r*.9,14,12),13662250,[0,-r*.55,r*.38],null,[1.15,1,.75],e);for(let a of[-1,1])I(R.cap(.03,.12,6),13662250,[a*.08,-r*.22,r*.92],[0,0,a*1.1],null,e);I(R.cyl(r*.72,r*.78,.13,14),N.gold,[0,r*.85,0],null,null,e);for(let a=0;a<6;a++){let l=a/6*Z*2;I(R.cone(.04,.11,4),N.gold,[Math.cos(l)*r*.72,r*.85+.11,Math.sin(l)*r*.72],null,null,e),I(R.sph(.022,6,4),[16726843,3912447,6284139][a%3],[Math.cos(l)*r*.76,r*.85,Math.sin(l)*r*.76],null,null,e,!0)}let o=At("scepter",s,0,-.17,.03);return I(R.cyl(.018,.018,.5,8),N.gold,[0,.12,0],null,null,o),I(R.sph(.055,10,8),i.glow,[0,.38,0],null,null,o,!0),t.attack="cast",t}function bv(i,t,e){let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}function cp(i){let t=i.root;t.position.set(0,0,0),t.rotation.set(0,0,0),t.scale.set(1,1,1),t.updateMatrixWorld(!0);let e=i.top||1,n=new D,s=new me,r=new me,o=new Map;t.traverse(u=>{if(u===t){o.set(u,t);return}u.isGroup&&o.set(u,Mv.has(u.name)?u:o.get(u.parent))});let a=new Ge;a.name="root";let l=new Map([[t,a]]);t.traverse(u=>{if(u===t||!u.isGroup||o.get(u)!==u)return;let f=o.get(u.parent),d=new Ge;d.name=u.name,s.copy(f.matrixWorld).invert(),r.multiplyMatrices(s,u.matrixWorld),r.decompose(d.position,d.quaternion,d.scale),l.get(f).add(d),l.set(u,d)});let c=new Map;t.traverse(u=>{if(!u.isMesh)return;let f=o.get(u.parent),d=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(let M of Object.keys(d.attributes))M!=="position"&&M!=="normal"&&d.deleteAttribute(M);s.copy(f.matrixWorld).invert(),r.multiplyMatrices(s,u.matrixWorld),d.applyMatrix4(r);let p=!!u.material.userData.glow,x=u.material.color,g=d.attributes.position.count,m=d.attributes.position.array,_=d.attributes.normal.array,w=new Float32Array(g*3),v=new Float32Array(g);for(let M=0;M<g;M++){let T=1;p||(n.set(m[M*3],m[M*3+1],m[M*3+2]).applyMatrix4(f.matrixWorld),T=(.6+.4*bv(-.05,e*.55,n.y))*(.86+.14*(_[M*3+1]*.5+.5))),w[M*3]=x.r*T,w[M*3+1]=x.g*T,w[M*3+2]=x.b*T,v[M]=p?1:0}d.setAttribute("color",new Be(w,3)),d.setAttribute("emis",new Be(v,1)),c.has(f)||c.set(f,[]),c.get(f).push(d)});let h=[];for(let[u,f]of c){let d=Io(f);f.forEach(p=>p.dispose()),d.computeBoundingSphere(),h.push({pivot:l.get(u),lit:d,glow:null})}return{skel:a,parts:h,meta:i}}function hp(){return Ar||(Ar=new Ae({vertexColors:!0}),Ar.onBeforeCompile=i=>{i.vertexShader=`attribute float emis;
varying float vEmis;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vEmis = emis;`),i.fragmentShader=`varying float vEmis;
`+i.fragmentShader.replace("#include <opaque_fragment>",`{ float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
           outgoingLight += vec3(1.0, 0.96, 0.88) * pow(rimF, 2.6) * 0.42 * (1.0 - vEmis);
           outgoingLight = mix(outgoingLight, diffuseColor.rgb, vEmis); }
         #include <opaque_fragment>`)},Ar.customProgramCacheKey=()=>"ad-toon-2"),{lit:Ar,glow:Ar}}function up(i,t){let e=De[i](t);return e.key=i,e.vis=Ms[i]||1.5,e}var Z,sc,N,rp,In,R,mv,Ze,op,De,Ms,Mv,Ar,fp=li(()=>{hu();Z=Math.PI,sc={me:{main:3108840,dark:1787302,light:9224447,glow:10477823,trim:15911244},foe:{main:14694459,dark:9968671,light:16752286,glow:16760970,trim:15911244}},N={skin:16173989,skinDk:14723458,gob:8179530,gobDk:5941298,bone:15854296,boneDk:13616813,metal:13226974,metalDk:9016742,steel:15265524,gold:15906353,goldDk:12879386,wood:11037496,woodDk:7029280,leather:9067059,leatherDk:6044190,cloth:15722194,ink:1908004,white:16777215,eye:16777215,mouth:7219754,red:14235704,hairOr:15238700,hairBr:8014372,hairBl:15913594,hairDk:3811874,beard:14144200,rock:9867140,rockDk:7301471,rockLt:12038307,moss:6266428,fur:9138002,furLt:13217935,wolf:8357780,wolfDk:5594216,wolfLt:13160150,horse:16052198,horseDk:13616306,mane:14274752,ice:12577535,iceDk:8177904,purple:7028640,purpleDk:4137830,dark:3025462,black:2368042,bomb:2829107,fire:16747034},rp=new Map,In=(i,t)=>{let e=rp.get(i);return e||(e=t(),rp.set(i,e)),e},R={box:(i,t,e)=>In(`b${i}|${t}|${e}`,()=>new Me(i,t,e)),rbox:(i,t,e,n=.03)=>In(`rb${i}|${t}|${e}|${n}`,()=>new Lo(i,t,e,1,Math.min(n,i/2-.001,t/2-.001,e/2-.001))),cap:(i,t,e=8)=>In(`cp${i}|${t}|${e}`,()=>new or(i,t,2,e)),sph:(i,t=14,e=10)=>In(`s${i}|${t}|${e}`,()=>new On(i,Math.max(5,Math.round(t*.72)),Math.max(4,Math.round(e*.72)))),hemi:(i,t=14)=>In(`hs${i}|${t}`,()=>new On(i,Math.round(t*.75),5,0,Z*2,0,Z/2)),cyl:(i,t,e,n=12)=>In(`c${i}|${t}|${e}|${n}`,()=>new mn(i,t,e,Math.max(5,Math.round(n*.75)))),cone:(i,t,e=10)=>In(`k${i}|${t}|${e}`,()=>new ni(i,t,Math.max(4,Math.round(e*.8)))),rock:(i,t=0)=>In(`d${i}|${t}`,()=>new Ii(i,t)),ico:(i,t=0)=>In(`i${i}|${t}`,()=>new ur(i,t)),oct:i=>In(`o${i}`,()=>new dr(i,0)),tor:(i,t,e=Z*2,n=6,s=16)=>In(`t${i}|${t}|${e}|${n}|${s}`,()=>new pr(i,t,Math.min(n,5),Math.max(6,Math.round(s*.75)),e)),lathe:(i,t,e=14)=>In(`l${i}`,()=>new fr(t.map(([n,s])=>new ft(n,s)),Math.round(e*.75))),ext:(i,t,e,n=.01)=>In(`e${i}`,()=>{let s=new hr(t(),{depth:e,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:1,curveSegments:5});return s.translate(0,0,-e/2),s})},mv={blade:()=>{let i=new rn;return i.moveTo(-.032,0),i.lineTo(.032,0),i.lineTo(.03,.4),i.lineTo(0,.48),i.lineTo(-.03,.4),i.closePath(),i},dagger:()=>{let i=new rn;return i.moveTo(-.025,0),i.lineTo(.025,0),i.quadraticCurveTo(.03,.15,0,.22),i.quadraticCurveTo(-.01,.12,-.025,0),i},heater:()=>{let i=new rn;return i.moveTo(-.17,.16),i.lineTo(.17,.16),i.lineTo(.17,0),i.quadraticCurveTo(.15,-.16,0,-.24),i.quadraticCurveTo(-.15,-.16,-.17,0),i.closePath(),i},axe:()=>{let i=new rn;return i.moveTo(0,-.05),i.lineTo(.06,-.08),i.quadraticCurveTo(.2,-.16,.22,0),i.quadraticCurveTo(.2,.16,.06,.08),i.lineTo(0,.05),i.closePath(),i},dragonWing:()=>{let i=new rn;return i.moveTo(0,0),i.lineTo(.1,.08),i.lineTo(.78,.2),i.quadraticCurveTo(.64,.02,.62,-.12),i.quadraticCurveTo(.5,-.04,.42,-.2),i.quadraticCurveTo(.3,-.08,.2,-.2),i.quadraticCurveTo(.12,-.06,0,-.08),i.closePath(),i},batWing:()=>{let i=new rn;return i.moveTo(0,.02),i.lineTo(.36,.12),i.quadraticCurveTo(.3,0,.32,-.1),i.quadraticCurveTo(.22,-.04,.18,-.12),i.quadraticCurveTo(.1,-.04,0,-.06),i.closePath(),i},bolt:()=>{let i=new rn;return i.moveTo(.05,.5),i.lineTo(-.2,.02),i.lineTo(-.02,.04),i.lineTo(-.12,-.5),i.lineTo(.2,.06),i.lineTo(.02,.04),i.lineTo(.16,.5),i.closePath(),i},feather:()=>{let i=new rn;return i.moveTo(0,0),i.quadraticCurveTo(.05,.1,0,.22),i.quadraticCurveTo(-.05,.1,0,0),i},ear:()=>{let i=new rn;return i.moveTo(0,0),i.lineTo(.22,.05),i.quadraticCurveTo(.08,.1,0,.09),i.closePath(),i},tomb:()=>{let i=new rn;return i.moveTo(-.3,0),i.lineTo(.3,0),i.lineTo(.3,.45),i.absarc(0,.45,.3,0,Z,!1),i.closePath(),i},arch:()=>{let i=new rn;return i.moveTo(-.22,0),i.lineTo(.22,0),i.lineTo(.22,.3),i.absarc(0,.3,.22,0,Z,!1),i.closePath(),i}},Ze=(i,t,e)=>R.ext(i+t+e,mv[i],t,e),op=new Map;De={};De.knight=i=>{let t=Gn({top:N.metal,sleeve:N.metal,pants:N.metalDk,boots:N.metalDk,hands:N.metalDk,belt:N.leatherDk,headR:.2,brows:!1}),{head:e,body:n,armL:s,armR:r}=t;I(R.rbox(.22,.26,.03,.012),i.main,[0,t.hip+.11,.135],null,null,n),I(R.rbox(.05,.16,.035,.012),i.trim,[0,t.hip+.13,.15],null,null,n),I(R.rbox(.13,.04,.035,.012),i.trim,[0,t.hip+.16,.15],null,null,n);for(let l of[-1,1])I(R.hemi(.08),N.steel,[l*.2,t.hip+.22,0],[0,0,-l*.5],[1,.8,1],n);let o=t.headR;I(R.lathe("kh2",[[0,.05],[.222,.05],[.235,.09],[.22,.17],[.16,.23],[.08,.255],[0,.262]],18),N.steel,[0,0,0],null,null,e),I(R.tor(.226,.018,Z*2,6,24),N.metalDk,[0,.06,0],[Z/2,0,0],null,e),I(R.sph(o*1.1,16,10),N.steel,[0,0,-.05],null,[1,.95,.85],e).scale.set(1,.95,.8);for(let l of[-1,1])I(R.rbox(.05,.16,.12,.02),N.steel,[l*.205,-.03,.04],[0,0,l*.08],null,e);I(R.rbox(.035,.12,.03,.012),N.metalDk,[0,.04,o*1.02],[-.1,0,0],null,e);for(let l=0;l<5;l++)I(R.sph(.06,8,6),i.main,[0,.25+Math.sin(l*.6)*.03,.08-l*.07],null,[.6,1,1.1],e);yv(r,1.05);let a=At("shield",s,-.05,-.15,.06);return a.rotation.set(0,-Z/2+.25,0),I(Ze("heater",.035,.014),i.main,[0,0,0],null,1,a),I(Ze("heater",.02,.006),i.trim,[0,0,.012],null,[.78,.78,1.4],a),I(Ze("heater",.02,.006),i.main,[0,0,.022],null,[.62,.62,1.4],a),I(R.rbox(.04,.2,.02,.008),i.trim,[0,-.02,.035],null,null,a),I(R.rbox(.18,.04,.02,.008),i.trim,[0,.04,.035],null,null,a),t.attack="swing",t};De.archer=i=>{let t=Gn({top:i.main,sleeve:N.cloth,pants:N.leatherDk,boots:N.leather,belt:N.leather,headR:.21,browColor:11033116}),{head:e,body:n,armL:s,armR:r}=t,o=t.headR;I(R.sph(o*1.06,16,12),N.hairOr,[0,.03,-.02],null,[1,.98,1],e).scale.set(1,1,1),I(R.sph(o*.55,10,8),N.hairOr,[.08,o*.62,o*.62],[0,0,-.5],[1.2,.55,.6],e),I(R.sph(o*.5,10,8),N.hairOr,[-.1,o*.6,o*.6],[0,0,.6],[1.1,.5,.6],e);let a=At("tail",e,0,.04,-o*.95);I(R.cap(.06,.18),N.hairOr,[0,-.12,-.04],[.4,0,0],null,a),I(R.tor(.05,.016),i.main,[0,-.01,-.02],[Z/2,0,0],null,a),I(R.sph(o*1.12,14,10),i.dark,[0,-.02,-.1],null,[1,.9,.7],e),I(R.cone(.22,.3,12),i.dark,[0,t.hip+.12,-.08],[.18,0,0],[1,1,.45],n);let l=At("quiver",n,.04,t.hip+.2,-.15);l.rotation.set(.2,0,-.45),I(R.cyl(.055,.045,.28,10),N.leather,[0,0,0],null,null,l);for(let h=0;h<3;h++)I(Ze("feather",.01,.003),[N.white,N.red,N.white][h],[(h-1)*.03,.15,0],null,.7,l);let c=At("bow",s,0,-.175,.05);return c.rotation.set(0,Z/2,0),I(R.tor(.24,.016,Z*.95,6,18),N.woodDk,[0,0,0],[0,0,Z*.525-Z],null,c),I(R.cyl(.004,.004,.47,4),N.white,[-.03,0,0],null,null,c),I(R.cyl(.022,.022,.08,8),N.leather,[.235,0,0],null,null,c),t.attack="bow",t};De.goblin=i=>{let t=Gn({skin:N.gob,top:i.main,sleeve:N.gob,pants:N.leatherDk,boots:N.leatherDk,belt:N.leather,headR:.24,bodyW:.85,hip:.22,torsoH:.2,angry:!0,browColor:N.gobDk,noseColor:N.gobDk,noseScale:[1,.9,2.2]}),{head:e,armR:n}=t,s=t.headR;for(let o of[-1,1]){let a=I(Ze("ear",.025,.008),N.gob,[o*s*.88,.02,-.02],[0,o>0?0:Z,.15],[1.3,1.3,1],e);a.rotation.y=o>0?-.25:Z+.25}I(R.cone(s*.75,.22,10),i.main,[0,s*.85,-.03],[-.35,0,0],null,e),I(R.sph(.035,6,5),i.trim,[0,s*.85+.09,-.08],null,null,e),I(R.cone(.02,.04,4),N.white,[-.03,-s*.36,s*.84],[Z,0,0],null,e),I(R.cone(.02,.04,4),N.white,[.03,-s*.36,s*.84],[Z,0,0],null,e);let r=At("dagger",n,0,-.175,.02);return r.rotation.x=Z/2,I(Ze("dagger",.014,.005),N.steel,[0,.04,0],null,1,r),I(R.cyl(.016,.016,.07,6),N.leatherDk,[0,0,0],null,null,r),t.attack="swing",t};De.skeleton=i=>{let t=new be,e=At("body",t),n=.24,s=At("legL",e,-.06,n,0),r=At("legR",e,.06,n,0);for(let h of[s,r])I(R.cyl(.022,.018,.2,6),N.bone,[0,-.1,0],null,null,h),I(R.rbox(.06,.04,.1,.015),N.bone,[0,-.215,.02],null,null,h);I(R.rbox(.18,.05,.09,.02),N.bone,[0,n,0],null,null,e),I(R.cyl(.02,.02,.2,6),N.boneDk,[0,n+.1,-.01],null,null,e);for(let h=0;h<3;h++)I(R.tor(.075-h*.008,.014,Z*1.4,4,10),N.bone,[0,n+.09+h*.05,0],[Z/2,0,Z*.3-Z],[1,.8,1],e);I(R.tor(.07,.025,Z*2,6,12),i.main,[0,n+.22,0],[Z/2,0,0],null,e),I(R.cone(.05,.1,4),i.main,[0,n+.17,-.07],[-.4+Z,0,0],null,e);let o=At("head",e,0,n+.37,0);I(R.sph(.15,14,12),N.bone,[0,.02,0],null,[1,.95,1],o),I(R.rbox(.17,.09,.14,.04),N.bone,[0,-.08,.03],null,null,o);for(let h of[-1,1])I(R.sph(.045,8,6),N.ink,[h*.055,0,.12],null,[1,1.1,.6],o),I(R.sph(.016,6,4),i.glow,[h*.055,0,.145],null,null,o,!0);I(R.cone(.022,.04,3),N.ink,[0,-.05,.14],[Z,0,0],null,o);for(let h=-2;h<=2;h++)I(R.rbox(.022,.03,.02,.006),N.white,[h*.028,-.1,.1],null,null,o);let a=At("armL",e,-.11,n+.2,0),l=At("armR",e,.11,n+.2,0);for(let[h,u]of[[a,-1],[l,1]])h.rotation.z=u*.15,I(R.cyl(.018,.016,.17,6),N.bone,[0,-.085,0],null,null,h),I(R.sph(.03,6,5),N.bone,[0,-.175,0],null,null,h);let c=At("blade",l,0,-.17,.02);return c.rotation.x=Z/2,I(Ze("dagger",.012,.004),N.metal,[0,.03,0],null,1.1,c),I(R.rbox(.07,.02,.02,.006),N.goldDk,[0,.03,0],null,null,c),{root:t,body:e,head:o,armL:a,armR:l,legL:s,legR:r,headR:.15,hand:-.175,hip:n,top:.72,anim:"biped",attack:"swing"}};De.bat=i=>{let t=new be,e=At("body",t);I(R.sph(.13,12,10),4864606,[0,0,0],null,[1,1.05,.95],e),I(R.sph(.09,10,8),7166598,[0,-.03,.06],null,[1,1,.7],e);for(let r of[-1,1])I(R.cone(.045,.12,4),4864606,[r*.07,.13,0],[0,0,-r*.3],null,e),I(R.sph(.032,8,6),i.glow,[r*.045,.03,.11],null,null,e,!0),I(R.cone(.012,.035,4),N.white,[r*.025,-.05,.11],[Z,0,0],null,e);let n=At("wingL",e,-.09,.02,-.02),s=At("wingR",e,.09,.02,-.02);return I(Ze("batWing",.012,.004),i.dark,[0,0,0],[Z/2,Z,0],1,n),I(Ze("batWing",.012,.004),i.dark,[0,0,0],[Z/2,0,0],1,s),{root:t,body:e,wingL:n,wingR:s,top:.25,lift:1.25,anim:"bat"}};De.grenadier=i=>{let t=Gn({top:i.main,sleeve:i.dark,pants:N.leatherDk,boots:N.black,belt:N.leatherDk,headR:.22,bodyW:1.12,browColor:N.hairDk,angry:!0}),{head:e,body:n,armR:s}=t,r=t.headR;I(R.sph(r*1.04,16,10),i.main,[0,.04,-.01],null,[1,.75,1],e),I(R.cone(.06,.12,6),i.main,[0,.05,-r-.03],[-Z/2-.4,0,0],null,e),I(R.tor(r*.98,.02,Z*2,6,20),N.leatherDk,[0,r*.42,0],[Z/2-.15,0,0],null,e);for(let a of[-1,1])I(R.cyl(.055,.055,.05,12),N.goldDk,[a*.08,r*.5,r*.78],[Z/2-.3,0,0],null,e),I(R.cyl(.042,.042,.052,12),10476799,[a*.08,r*.5,r*.79],[Z/2-.3,0,0],null,e,!0);I(R.cap(.025,.1,6),N.hairDk,[0,-r*.28,r*.92],[0,0,Z/2],null,e);for(let a of[-1,0,1])I(R.sph(.045,10,8),N.bomb,[a*.1,t.hip+.04,.15-Math.abs(a)*.03],null,null,n);let o=At("bomb",s,0,-.2,.03);return I(R.sph(.075,12,10),N.bomb,[0,0,0],null,null,o),I(R.cyl(.012,.012,.06,6),N.leather,[0,.08,0],null,null,o),I(R.sph(.025,6,5),16765806,[0,.12,0],null,null,o,!0),t.attack="throw",t};De.barbarian=i=>{let t=Gn({top:N.skin,sleeve:N.skin,pants:i.main,boots:N.fur,belt:N.leatherDk,headR:.21,bodyW:1.15,angry:!0,browColor:12092970}),{head:e,body:n,armR:s}=t,r=t.headR;I(R.hemi(r*1.02,16),N.metal,[0,.04,0],null,[1,.85,1],e),I(R.tor(r*1,.025,Z*2,6,18),N.goldDk,[0,.05,0],[Z/2,0,0],null,e);for(let a of[-1,1]){let l=At("horn",e,a*r*.9,.1,0);l.rotation.z=-a*.9,I(R.cone(.045,.2,8),N.bone,[0,.08,0],null,null,l)}I(R.sph(r*.9,12,8),N.hairBl,[0,-.02,-.08],null,[1.1,.9,.8],e),I(R.sph(r*.75,12,10),N.hairBl,[0,-r*.55,r*.42],null,[1.05,.8,.7],e);for(let a of[-1,1])I(R.cap(.03,.1,6),N.hairBl,[a*.07,-r*.25,r*.92],[0,0,a*1.2],null,e);I(R.tor(.15,.05,Z*2,8,16),N.fur,[0,t.hip+.24,0],[Z/2,0,0],[1,.85,1],n),I(R.rbox(.05,.3,.05,.02),N.leatherDk,[0,t.hip+.12,.13],[0,0,.7],null,n);let o=At("axe",s,0,-.18,.02);return o.rotation.x=Z/2,I(R.cyl(.018,.018,.42,8),N.wood,[0,.12,0],null,null,o),I(Ze("axe",.02,.006),N.steel,[0,.3,0],null,1,o),t.attack="swing",t};De.giant=i=>{let t=Gn({top:i.main,sleeve:N.skin,pants:N.leatherDk,boots:N.leatherDk,belt:N.leatherDk,headR:.2,bodyW:1.45,hip:.27,torsoH:.3,angry:!0,browColor:9062938}),{head:e,body:n,armL:s,armR:r}=t,o=t.headR;I(R.sph(.06,8,6),11887901,[0,o*.98,-.06],null,null,e),I(R.cyl(.03,.03,.05,8),i.trim,[0,o*.9,-.05],null,null,e),I(R.sph(o*.78,12,10),11887901,[0,-o*.55,o*.38],null,[1.1,.85,.7],e),I(R.cap(.035,.12,6),11887901,[0,-o*1.15,o*.5],null,null,e),I(R.tor(.03,.012),i.trim,[0,-o*1.18,o*.5],[Z/2,0,0],null,e);for(let a of[s,r])a.children.forEach(l=>l.scale.multiplyScalar(1.25)),I(R.rbox(.13,.08,.13,.03),N.leather,[0,-.13,0],null,null,a);for(let a of[-1,1])I(R.rbox(.045,.32,.03,.015),N.leatherDk,[a*.1,t.hip+.16,.18],[0,0,a*.15],null,n);return t.attack="punch",t};De.pyromancer=i=>{let t=Gn({top:i.main,sleeve:i.main,pants:i.dark,boots:N.black,belt:N.gold,headR:.2,eyes:!1,angry:!0}),{head:e,body:n,armR:s,armL:r}=t,o=t.headR;I(R.cone(.27,.42,14),i.main,[0,.21,0],null,null,n),I(R.tor(.25,.02,Z*2,6,20),16747034,[0,.03,0],[Z/2,0,0],[1,1,1],n),I(R.sph(o*1.14,16,12),i.dark,[0,.03,-.085],null,[1.02,1.04,1],e),I(R.cone(o*.7,.24,10),i.dark,[0,o*.95,-.14],[-.7,0,0],null,e),I(R.tor(o*1.02,.03,Z*1.25,6,18),16747034,[0,0,.02],[0,0,-Z*.125],[1,1.08,1],e),I(R.rbox(o*1.5,o*.32,.05,.02),N.black,[0,o*.06,o*.82],null,null,e);for(let l of[-1,1])I(R.sph(.03,8,6),16760878,[l*.075,o*.06,o*.92],null,[1.3,.8,.6],e,!0);let a=At("orb",s,0,-.24,.05);I(R.sph(.07,12,10),16769674,[0,0,0],null,null,a,!0),I(R.ico(.1,0),16742938,[0,0,0],null,null,a,!0);for(let l of[-1,1])I(R.rbox(.05,.08,.05,.02),N.gold,[0,-.12,0],null,null,l>0?s:r);return t.attack="cast",t};De.draco=i=>{let t=new be,e=At("body",t);I(R.sph(.34,16,12),i.main,[0,0,0],null,[.95,.85,1.25],e),I(R.sph(.27,14,10),16767114,[0,-.1,.1],null,[.8,.68,1.1],e);for(let a=0;a<4;a++)I(R.cone(.05,.12,4),i.trim,[0,.28-a*.02,.15-a*.14],[-.4,0,0],null,e);let n=At("head",e,0,.28,.42);I(R.sph(.23,16,12),i.main,[0,0,0],null,null,n),I(R.rbox(.24,.16,.24,.07),i.main,[0,-.06,.17],null,null,n),I(R.rbox(.2,.05,.18,.02),16767114,[0,-.13,.2],null,null,n);for(let a of[-1,1])I(R.cone(.045,.2,8),N.bone,[a*.11,.2,-.08],[-.6,0,a*.2],null,n),I(R.sph(.075,10,8),N.eye,[a*.1,.07,.16],null,[1,1.15,.6],n),I(R.sph(.04,8,6),N.ink,[a*.1,.07,.2],null,[1,1.3,.5],n),I(R.sph(.018,6,4),N.white,[a*.1+.015,.09,.215],null,null,n,!0),I(R.sph(.02,6,4),N.ink,[a*.05,-.02,.3],null,null,n);let s=At("wingL",e,-.2,.18,-.02),r=At("wingR",e,.2,.18,-.02);I(Ze("dragonWing",.02,.006),i.dark,[0,0,0],[Z/2,Z,0],1,s),I(Ze("dragonWing",.02,.006),i.dark,[0,0,0],[Z/2,0,0],1,r),I(R.cap(.03,.62,6),i.main,[-.33,.01,.08],[0,0,Z/2+.15],null,s),I(R.cap(.03,.62,6),i.main,[.33,.01,.08],[0,0,Z/2-.15],null,r);let o=At("tail",e,0,-.05,-.38);I(R.cone(.15,.6,10),i.main,[0,0,-.27],[-Z/2-.15,0,0],null,o),I(R.cone(.08,.12,4),i.trim,[0,.06,-.58],[-Z/2,0,0],null,o);for(let a of[-1,1])I(R.cap(.06,.08,8),i.main,[a*.16,-.24,.14],null,null,e),I(R.cap(.06,.08,8),i.main,[a*.16,-.24,-.16],null,null,e);return{root:t,body:e,head:n,wingL:s,wingR:r,tail:o,top:.65,lift:1.25,anim:"dragon"}};De.arquebusier=i=>{let t=Gn({top:i.main,sleeve:i.main,pants:N.leatherDk,boots:N.black,belt:N.leatherDk,headR:.21,browColor:N.hairDk}),{head:e,body:n,armL:s,armR:r}=t,o=t.headR;I(R.cone(.24,.3,14),i.main,[0,t.hip+0,0],null,null,n);for(let l=0;l<3;l++)I(R.sph(.018,6,4),N.gold,[0,t.hip+.06+l*.065,.145],null,null,n);I(R.rbox(.3,.06,.05,.02),N.cloth,[0,t.hip+.23,.1],null,null,n),I(R.cyl(o*1.45,o*1.45,.025,20),N.black,[0,o*.6,0],[-.1,0,.12],null,e),I(R.cyl(o*.8,o*.92,.17,16),N.black,[0,o*.72+.06,0],[-.1,0,.12],null,e),I(R.cyl(o*.93,o*.93,.035,16),i.trim,[0,o*.72,0],[-.1,0,.12],null,e),I(Ze("feather",.012,.004),N.white,[-.15,o*.9,-.05],[.3,0,.6],1.6,e);for(let l of[-1,1])I(R.cap(.022,.09,6),N.hairDk,[l*.06,-o*.3,o*.9],[0,0,l*1],null,e);I(R.cone(.03,.08,6),N.hairDk,[0,-o*.65,o*.8],[Z,0,0],null,e);let a=At("gun",r,0,-.17,.05);return a.rotation.x=Z,I(R.cyl(.024,.026,.62,10),N.metalDk,[0,.3,.02],null,null,a),I(R.cyl(.032,.032,.04,10),N.goldDk,[0,.6,.02],null,null,a),I(R.rbox(.06,.3,.07,.025),N.wood,[0,.03,-.02],null,null,a),I(R.rbox(.05,.12,.1,.025),N.woodDk,[0,-.13,-.05],[.4,0,0],null,a),t.attack="gun",t};De.berserker=i=>{let t=Gn({top:N.skin,sleeve:N.skin,pants:i.dark,boots:N.fur,belt:N.leatherDk,headR:.21,bodyW:1.1,angry:!0,browColor:12865562}),{head:e,body:n,armR:s,armL:r}=t,o=t.headR;I(R.sph(o*1.08,16,12),13785372,[0,.05,-.05],null,[1.05,1,1],e);for(let l=0;l<5;l++)I(R.cone(.06,.16,6),13785372,[(l-2)*.07,o*.85,-.05-Math.abs(l-2)*.03],[-.3,0,(l-2)*.3],null,e);for(let l of[-1,1])I(R.cap(.03,.18,6),13785372,[l*o*.9,-.12,-.02],null,null,e),I(R.rbox(.07,.02,.02,.008),i.main,[l*.08,.06,o*.85],[0,0,l*.2],null,e);I(R.tor(.16,.055,Z*2,8,16),N.fur,[0,t.hip+.24,-.02],[Z/2,0,0],null,n),I(R.cone(.24,.34,12),N.fur,[0,t.hip+.08,-.1],[.15,0,0],[1,1,.45],n),I(R.rbox(.2,.03,.02,.01),i.main,[0,t.hip+.16,.14],null,null,n);let a=At("greataxe",s,-.05,-.18,.06);return a.rotation.set(Z/2,0,.2),I(R.cyl(.022,.022,.64,8),N.woodDk,[0,.18,0],null,null,a),I(Ze("axe",.022,.008),12174543,[0,.45,0],null,1,a),I(Ze("axe",.022,.008),12174543,[0,.45,0],[0,Z,0],1,a),I(R.sph(.04,8,6),N.gold,[0,.47,0],null,null,a),r.rotation.set(-.8,0,.5),t.attack="spin",t};De.lancer=i=>{let t=new be,e=At("body",t),n=_v(i);e.add(n);let s=De.knight(i);s.root.position.set(0,.58,-.05),s.root.scale.setScalar(.95);let r=s.armR.getObjectByName("swordP");s.armR.remove(r);let o=At("lance",s.armR,0,-.17,0);o.rotation.x=Z/2-.1,I(R.cone(.05,1.1,10),N.steel,[0,.62,0],null,null,o),I(R.cone(.09,.14,12),i.main,[0,.1,0],[Z,0,0],null,o),I(R.cyl(.025,.025,.3,8),N.woodDk,[0,-.05,0],null,null,o);for(let a of["body","head","armL","armR","legL","legR"])s[a].name="r"+a;return s.legL.rotation.set(0,0,-.7),s.legR.rotation.set(0,0,.7),e.add(s.root),{root:t,body:e,anim:"mount",top:1.45,attack:"thrust",riderArm:"rarmR"}};De.wolfrider=i=>{let t=new be,e=At("body",t);e.add(vv(i));let n=De.goblin(i);n.root.position.set(0,.47,-.04),n.root.scale.setScalar(.9);let s=n.armR.getObjectByName("dagger");n.armR.remove(s);let r=At("club",n.armR,0,-.17,.02);r.rotation.x=Z/2-.4,I(R.cyl(.05,.025,.32,8),N.wood,[0,.15,0],null,null,r);for(let o=0;o<3;o++)I(R.cone(.02,.05,4),N.metal,[Math.cos(o*2.1)*.045,.25,Math.sin(o*2.1)*.045],[0,0,Math.cos(o*2.1)*-1.4],null,r);for(let o of["body","head","armL","armR","legL","legR"])n[o].name="r"+o;return n.legL.rotation.set(0,0,-.8),n.legR.rotation.set(0,0,.8),e.add(n.root),{root:t,body:e,anim:"mount",top:1.05,attack:"swing",riderArm:"rarmR",quadruped:"wolf"}};De.automaton=i=>{let t=new be,e=At("body",t),n=.3,s=At("legL",e,-.1,n,0),r=At("legR",e,.1,n,0);for(let u of[s,r])I(R.cyl(.06,.05,.16,10),N.metalDk,[0,-.08,0],null,null,u),I(R.sph(.055,8,6),N.goldDk,[0,-.17,0],null,null,u),I(R.rbox(.13,.08,.2,.03),N.metal,[0,-.25,.03],null,null,u);I(R.cyl(.2,.17,.34,18),N.goldDk,[0,n+.17,0],null,null,e),I(R.cyl(.205,.205,.04,18),N.metalDk,[0,n+.32,0],null,null,e),I(R.cyl(.18,.18,.04,18),N.metalDk,[0,n+.02,0],null,null,e),I(R.cyl(.08,.08,.03,12),i.main,[0,n+.18,.19],[Z/2,0,0],null,e),I(R.cyl(.035,.035,.04,8),i.glow,[0,n+.18,.2],[Z/2,0,0],null,e,!0);for(let u=0;u<8;u++){let f=u/8*Z*2;I(R.sph(.016,5,4),N.gold,[Math.sin(f)*.2,n+.28,Math.cos(f)*.2],null,null,e)}let o=At("gear",e,0,n+.2,-.2);I(R.cyl(.12,.12,.03,10),N.metal,[0,0,0],[Z/2,0,0],null,o);for(let u=0;u<8;u++){let f=u/8*Z*2;I(R.box(.04,.04,.03),N.metal,[Math.cos(f)*.14,Math.sin(f)*.14,0],[0,0,f],null,o)}let a=At("head",e,0,n+.47,0);I(R.rbox(.26,.22,.24,.06),N.metal,[0,0,0],null,null,a),I(R.rbox(.2,.06,.04,.02),i.glow,[0,.01,.12],null,null,a,!0),I(R.cyl(.012,.012,.12,6),N.metalDk,[.08,.16,0],null,null,a),I(R.sph(.03,8,6),i.main,[.08,.23,0],null,null,a,!0);let l=At("armL",e,-.25,n+.28,0),c=At("armR",e,.25,n+.28,0);for(let[u,f]of[[l,-1],[c,1]])u.rotation.z=f*.15,I(R.sph(.07,10,8),N.metalDk,[0,0,0],null,null,u),I(R.cyl(.045,.04,.18,8),N.metal,[0,-.11,0],null,null,u),I(R.rbox(.1,.09,.1,.03),N.goldDk,[0,-.22,0],null,null,u);let h=At("armblade",c,0,-.24,.04);return h.rotation.x=Z/2,I(Ze("blade",.022,.008),N.steel,[0,.02,0],null,[1.5,1.25,1],h),{root:t,body:e,head:a,armL:l,armR:c,legL:s,legR:r,top:1,hand:-.22,anim:"biped",attack:"swing",heavy:!0}};De.necromancer=i=>{let t=Gn({skin:14209224,top:N.dark,sleeve:N.dark,pants:N.black,boots:N.black,belt:i.main,headR:.2,pupil:8257386,browColor:4473924,angry:!0}),{head:e,body:n,armR:s}=t,r=t.headR;I(R.cone(.28,.46,14),N.dark,[0,.23,0],null,null,n),I(R.tor(.26,.02,Z*2,6,20),i.main,[0,.03,0],[Z/2,0,0],null,n),I(R.sph(r*1.16,16,12),N.black,[0,.03,-.09],null,[1.02,1.06,1],e),I(R.cone(r*.9,.36,12),N.black,[0,r*1,-.14],[-.5,0,0],null,e),I(R.tor(r*1.04,.026,Z*1.25,6,18),i.main,[0,0,.02],[0,0,-Z*.125],[1,1.1,1],e);for(let a of[-1,1])I(R.rbox(.02,.09,.02,.008),6971504,[a*.075,-.05,r*.9],null,null,e);for(let a=0;a<5;a++){let l=-.9+a*.45;I(R.sph(.03,6,5),N.bone,[Math.sin(l)*.15,t.hip+.24,Math.cos(l)*.12],null,null,n)}let o=At("staff",s,0,-.17,.04);return I(R.cyl(.02,.02,.85,8),N.woodDk,[0,.18,0],null,null,o),I(R.sph(.07,10,8),N.bone,[0,.64,0],null,null,o),I(R.sph(.02,6,4),8257386,[-.025,.65,.06],null,null,o,!0),I(R.sph(.02,6,4),8257386,[.025,.65,.06],null,null,o,!0),I(R.tor(.09,.012,Z*2,5,14),i.glow,[0,.64,0],[Z/2,0,0],null,o,!0),t.attack="cast",t};De.golem=(i,t=!1)=>{let e=new be,n=At("body",e),s=At("legL",n,-.3,.5,0),r=At("legR",n,.3,.5,0);for(let h of[s,r])I(R.rock(.26),N.rockDk,[0,-.2,0],[.3,.2,0],[1,1.2,1],h),I(R.rock(.22),N.rock,[0,-.42,.04],[.5,.1,.2],[1.1,.6,1.2],h);let o=I(R.rock(.62,1),N.rock,[0,1.05,0],[.2,.3,.1],[1.05,.88,.85],n);I(R.rock(.3),N.rockLt,[.3,1.38,.2],[.4,.2,.3],null,n),I(R.rock(.28),N.rockDk,[-.32,1.32,-.15],[.1,.6,.3],null,n),I(R.rock(.22,0),N.moss,[.22,1.56,-.05],null,[1.2,.5,1.1],n),I(R.rock(.16,0),N.moss,[-.35,1.48,.1],null,[1.2,.5,1.1],n),I(R.oct(.11),i.glow,[0,1.05,.5],[0,0,.3],[1,1.6,.4],n,!0),I(R.oct(.06),i.glow,[.2,.86,.45],[0,0,-.5],[1,2,.4],n,!0),I(R.oct(.06),i.glow,[-.24,1.2,.42],[0,0,.9],[1,2,.4],n,!0);let a=At("head",n,0,1.62,.2);I(R.rock(.27),N.rock,[0,0,0],[.2,.4,0],[1.1,.9,1],a),I(R.rbox(.36,.06,.1,.02),N.rockDk,[0,.1,.18],null,null,a);for(let h of[-1,1])I(R.rbox(.09,.05,.04,.015),i.glow,[h*.1,.03,.25],null,null,a,!0);let l=At("armL",n,-.68,1.35,0),c=At("armR",n,.68,1.35,0);for(let h of[l,c])I(R.rock(.22),N.rockDk,[0,-.2,0],[.4,.3,0],null,h),I(R.rock(.32),N.rock,[0,-.6,.06],[.2,.7,.1],[1,1.1,1],h);return{root:e,body:n,head:a,armL:l,armR:c,legL:s,legR:r,top:2,anim:"golem",attack:"punch",heavy:!0}};De.golemite=i=>De.golem(i,!0);De.frost=i=>{let t=Gn({skin:16245462,top:8176882,sleeve:10475775,pants:4163270,boots:3039130,belt:i.main,headR:.21,pupil:2060224,browColor:10275048}),{head:e,body:n,armR:s}=t,r=t.headR;I(R.cone(.27,.44,16),8176882,[0,.22,0],null,null,n),I(R.cone(.28,.12,16),15398911,[0,.06,0],null,null,n),I(R.rbox(.06,.4,.03,.015),i.main,[0,.22,.2],[.2,0,0],null,n),I(R.sph(r*1.08,16,12),14676479,[0,.04,-.05],null,null,e),I(R.cap(r*.75,.3,10),14676479,[0,-.2,-.14],null,[1.2,1,.6],e),I(R.sph(r*.5,10,8),14676479,[.1,r*.62,r*.62],[0,0,-.5],[1.3,.5,.6],e);for(let a=0;a<5;a++){let l=-.9+a*.45;I(R.oct(.06),N.ice,[Math.sin(l)*r*.85,r*.95,Math.cos(l)*r*.6],[0,0,0],[.6,a===2?2.2:1.5,.6],e,!0)}let o=At("staff",s,0,-.17,.04);return I(R.cyl(.018,.018,.8,8),14675967,[0,.16,0],null,null,o),I(R.oct(.1),N.ice,[0,.63,0],null,[.8,1.6,.8],o,!0),I(R.oct(.05),N.iceDk,[.06,.55,0],[0,0,.6],[.7,1.4,.7],o,!0),I(R.oct(.05),N.iceDk,[-.06,.55,0],[0,0,-.6],[.7,1.4,.7],o,!0),t.attack="cast",t};De.ballista=i=>{let t=new be,e=At("body",t);I(R.rbox(1.5,.3,1.5,.08),N.rockLt,[0,.15,0],null,null,e),I(R.rbox(1.38,.12,1.38,.04),N.woodDk,[0,.33,0],null,null,e),I(R.rbox(1.52,.06,1.52,.02),i.main,[0,.27,0],null,null,e),I(R.cyl(.14,.2,.42,10),N.woodDk,[0,.58,0],null,null,e);let n=At("turret",e,0,.86,0);return I(R.rbox(.22,.16,1.2,.04),N.wood,[0,0,0],null,null,n),I(R.tor(.62,.05,Z*.9,6,18),N.woodDk,[0,.03,.34],[Z/2,0,Z*.05],null,n),I(R.cyl(.006,.006,1.1,4),N.white,[0,.03,.06],[0,0,Z/2],null,n),I(R.cyl(.03,.03,1,6),5922662,[0,.11,.12],[Z/2,0,0],null,n),I(R.cone(.065,.18,6),N.steel,[0,.11,.69],[Z/2,0,0],null,n),I(R.cyl(.08,.08,.3,10),N.woodDk,[0,-.03,-.45],[0,0,Z/2],null,n),I(R.cyl(.025,.025,1.1,6),N.woodDk,[.62,.85,-.62],null,null,e),I(R.rbox(.38,.24,.02,.008),i.main,[.82,1.25,-.62],null,null,e),I(R.rbox(.1,.1,.025,.008),i.trim,[.82,1.25,-.61],[0,0,Z/4],null,e),{root:t,body:e,turret:n,top:1.3,anim:"ballista"}};De.crypt=i=>{let t=new be,e=At("body",t);I(R.rbox(1.5,.22,1.4,.06),N.rockDk,[0,.11,0],null,null,e),I(R.rbox(1.2,.9,1,.06),N.rock,[0,.66,-.05],null,null,e);for(let n of[-1,1])I(R.rbox(.78,.08,1.12,.03),4932948,[n*.33,1.25,-.05],[0,0,-n*.55],null,e);I(R.rbox(.08,.1,1.14,.03),3814722,[0,1.46,-.05],null,null,e),I(Ze("arch",.06,.02),N.rockDk,[0,.22,.46],null,[1.25,1.25,1],e),I(Ze("arch",.06,0),i.glow,[0,.24,.47],null,[1,1,1],e,!0),I(R.rbox(.08,.36,.08,.02),N.rockLt,[0,1.68,-.05],null,null,e),I(R.rbox(.24,.07,.08,.02),N.rockLt,[0,1.74,-.05],null,null,e);for(let n of[-1,1])I(Ze("tomb",.08,.02),N.rockLt,[n*.62,.2,.52],[0,0,n*.12],.45,e),I(R.cyl(.04,.05,.08,6),i.main,[n*.42,.26,.55],null,null,e),I(R.sph(.03,6,5),16765806,[n*.42,.33,.55],null,null,e,!0);return{root:t,body:e,top:1.9,anim:"static"}};De.arcane=i=>{let t=new be,e=At("body",t);I(R.cyl(.62,.72,.3,8),N.rockLt,[0,.15,0],null,null,e),I(R.cyl(.4,.55,.9,8),N.rock,[0,.75,0],null,null,e),I(R.cyl(.62,.42,.18,8),N.rockLt,[0,1.28,0],null,null,e);for(let r=0;r<4;r++){let o=r/4*Z*2+Z/4;I(R.rbox(.12,.45,.12,.03),N.rockDk,[Math.cos(o)*.5,1.55,Math.sin(o)*.5],[Math.sin(o)*.25,0,-Math.cos(o)*.25],null,e)}I(R.tor(.48,.035,Z*2,6,24),i.main,[0,.8,0],[Z/2,0,0],null,e);for(let r=0;r<4;r++){let o=r/4*Z*2;I(R.oct(.07),i.glow,[Math.cos(o)*.47,.8,Math.sin(o)*.47],null,[.7,1.2,.7],e,!0)}let n=At("crystal",e,0,1.95,0);I(R.oct(.32),i.glow,[0,0,0],null,[.7,1.35,.7],n,!0),I(R.oct(.22),16777215,[0,0,0],null,[.55,1.1,.55],n,!0);let s=At("ring",e,0,1.95,0);return I(R.tor(.42,.02,Z*2,4,28),i.trim,[0,0,0],[Z/2,0,0],null,s,!0),{root:t,body:e,crystal:n,ring:s,top:2.4,anim:"arcane"}};Ms={knight:1.95,archer:1.85,goblin:1.9,skeleton:1.8,bat:1.65,grenadier:1.9,barbarian:1.92,giant:2.4,pyromancer:1.9,draco:1.65,arquebusier:1.9,berserker:2,lancer:1.4,wolfrider:1.6,automaton:1.78,necromancer:1.95,golem:1.25,golemite:.75,frost:1.9,ballista:1.1,crypt:1.1,arcane:1.05};Mv=new Set(["body","head","armL","armR","legL","legR","wingL","wingR","tail","turret","crystal","ring","orb","gear","barrel","mbody","mhead","legFL","legFR","legBL","legBR","mtail","rbody","rhead","rarmL","rarmR","rlegL","rlegR"]);Ar=null});function Cr(i){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647,(t-1)/2147483646)}function Rr(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function uu(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function dp(i=56){let[t,e]=Rr(18*i,32*i),n=Cr(11);for(let l=0;l<32;l++)for(let c=0;c<18;c++){let h=((c+l)%2?0:4)+n()*2.5;e.fillStyle=is(98-n()*4,46+n()*6,42+h),e.fillRect(c*i,l*i,i+1,i+1)}for(let l=0;l<9e3;l++){let c=n()*18*i,h=n()*32*i,u=4+n()*7;e.strokeStyle=n()<.5?is(100,50,52+n()*10,.55):is(105,45,30+n()*8,.45),e.lineWidth=1.2+n(),e.beginPath(),e.moveTo(c,h),e.lineTo(c+(n()-.5)*4,h-u),e.stroke()}let s=(l,c,h,u)=>{let f=l*i,d=c*i,p=(h-l)*i,x=(u-c)*i;e.save(),uu(e,f,d,p,x,i*.55),e.clip();let g=e.createLinearGradient(f,d,f+p,d);g.addColorStop(0,"#c9ac72"),g.addColorStop(.5,"#ddc38d"),g.addColorStop(1,"#c9ac72"),e.fillStyle=g,e.fillRect(f,d,p,x);for(let m=0;m<p*x/140;m++){let _=f+n()*p,w=d+n()*x;e.fillStyle=n()<.5?"rgba(140,105,60,0.35)":"rgba(255,240,200,0.35)",e.beginPath(),e.ellipse(_,w,1.5+n()*3,1+n()*2,n()*3,0,7),e.fill()}e.restore(),e.strokeStyle="rgba(80,60,30,0.35)",e.lineWidth=3,uu(e,f,d,p,x,i*.55),e.stroke();for(let m=0;m<(p+x)/6;m++){let _=n(),w=n()<p/(p+x),v=w?f+_*p:n()<.5?f:f+p,M=w?n()<.5?d:d+x:d+_*x;e.fillStyle=is(100,45,35+n()*12,.85),e.beginPath(),e.ellipse(v,M,3+n()*4,2+n()*3,n()*3,0,7),e.fill()}};for(let l of dn)s(l-.9,5,l+.9,15+.2),s(l-.9,17-.2,l+.9,27);s(3,27.7,15,30.2),s(3,1.8,15,4.3),s(2.6,25.4,4.4,29.6),s(13.6,25.4,15.4,29.6),s(2.6,2.4,4.4,6.6),s(13.6,2.4,15.4,6.6);for(let l=0;l<260;l++){let c=n()*18,h=n()*32;if(h>15-.7&&h<17+.7||dn.some(f=>Math.abs(c-f)<1.4)||Math.abs(c-9)<6.4&&(h<4.8||h>27.2))continue;if(n()<.55){let f=["#fff3a6","#ffffff","#ff9ec8","#c8b0ff","#ffd27a"][Math.floor(n()*5)];e.fillStyle=f;for(let d=0;d<5;d++)e.beginPath(),e.arc(c*i+Math.cos(d*1.26)*3.2,h*i+Math.sin(d*1.26)*3.2,2.6,0,7),e.fill();e.fillStyle="#f2b631",e.beginPath(),e.arc(c*i,h*i,1.8,0,7),e.fill()}else{e.fillStyle=is(110,45,30+n()*8,.9);for(let f=0;f<3;f++)e.beginPath(),e.arc(c*i+Math.cos(f*2.1)*3,h*i+Math.sin(f*2.1)*3,3,0,7),e.fill()}}let r=15*i,o=17*i;e.fillStyle="#d9c48f",e.fillRect(0,r-i*.28,18*i,o-r+i*.56);let a=e.createLinearGradient(0,r,0,o);a.addColorStop(0,"#2a6fa8"),a.addColorStop(.5,"#1d5a91"),a.addColorStop(1,"#2a6fa8"),e.fillStyle=a,e.fillRect(0,r-2,18*i,o-r+4);for(let l=0;l<160;l++){let c=n()*18*i,h=n()<.5;e.fillStyle="rgba(120,100,70,0.45)",e.beginPath(),e.ellipse(c,h?r-i*.12:o+i*.12,2+n()*5,1.5+n()*2,0,0,7),e.fill()}for(let l of[0,1])for(let c of xn){let h=l?18-c.x:c.x,u=l?32-c.y:c.y,f=c.kind==="king"?2.3:1.7,d=e.createRadialGradient((h+.6)*i,(u+.5)*i,0,(h+.6)*i,(u+.5)*i,f*i*1.15);d.addColorStop(0,"rgba(0,20,0,0.42)"),d.addColorStop(.7,"rgba(0,20,0,0.25)"),d.addColorStop(1,"rgba(0,20,0,0)"),e.fillStyle=d,e.beginPath(),e.ellipse((h+.6)*i,(u+.5)*i,f*i*1.15,f*i*1,0,0,7),e.fill()}return t}function pp(){let[i,t]=Rr(256,128),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"#5bbcf0"),e.addColorStop(.5,"#3ea3df"),e.addColorStop(1,"#5bbcf0"),t.fillStyle=e,t.fillRect(0,0,256,128);let n=Cr(3);for(let s=0;s<26;s++){let r=n()*256,o=10+n()*108,a=18+n()*30;t.strokeStyle=`rgba(255,255,255,${.35+n()*.35})`,t.lineWidth=2+n()*2,t.beginPath(),t.moveTo(r,o),t.quadraticCurveTo(r+a/2,o-5,r+a,o),t.stroke(),r+a>256&&(t.beginPath(),t.moveTo(r-256,o),t.quadraticCurveTo(r-256+a/2,o-5,r-256+a,o),t.stroke())}return i}function mp(){let[i,t]=Rr(256,32),e=Cr(9);for(let n=0;n<70;n++){let s=e()*256,r=4+e()*12,o=3+e()*6;t.fillStyle=`rgba(255,255,255,${.5+e()*.4})`,t.beginPath(),t.ellipse(s,r,o*1.6,o*.7,0,0,7),t.fill(),s+o*2>256&&(t.beginPath(),t.ellipse(s-256,r,o*1.6,o*.7,0,0,7),t.fill())}return i}function fu(i=!1){let[t,e]=Rr(256,256),n=Cr(i?21:17);e.fillStyle=i?"#9d968a":"#8a8378",e.fillRect(0,0,256,256);let s=8,r=256/s;for(let o=0;o<s;o++){let c=o%2*64/2;for(let h=-1;h<=4;h++){let u=h*64+c,f=o*r,d=(i?76:70)+n()*10;e.fillStyle=is(36+n()*10,8+n()*6,d),uu(e,u+3,f+3,58,r-6,6),e.fill(),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(u+6,f+4,52,3),e.fillStyle="rgba(0,0,0,0.16)",e.fillRect(u+6,f+r-7,52,3);for(let p=0;p<14;p++)e.fillStyle=n()<.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",e.beginPath(),e.arc(u+6+n()*52,f+6+n()*(r-12),1+n()*2.5,0,7),e.fill();n()<.25&&(e.fillStyle="rgba(90,140,60,0.35)",e.beginPath(),e.ellipse(u+n()*64,f+r-6,10+n()*10,4,0,0,7),e.fill())}}return t}function gp(){let[i,t]=Rr(128,256),e=Cr(5),n=4,s=128/n;for(let r=0;r<n;r++){t.fillStyle=is(28+e()*6,45,38+e()*8),t.fillRect(r*s,0,s,256),t.strokeStyle="rgba(60,30,10,0.35)";for(let o=0;o<6;o++){t.lineWidth=1,t.beginPath();let a=r*s+4+e()*(s-8);t.moveTo(a,0),t.bezierCurveTo(a+3,80,a-3,160,a+2,256),t.stroke()}t.fillStyle="rgba(30,15,5,0.6)",t.fillRect(r*s,0,2,256),t.fillStyle="rgba(255,230,190,0.15)",t.fillRect(r*s+2,0,2,256);for(let o of[40+e()*20,180+e()*20])t.fillStyle="#3a2a1e",t.beginPath(),t.arc(r*s+s/2,o,2.4,0,7),t.fill()}return i}function xp(){let[i,t]=Rr(256,256),e=Cr(7);t.fillStyle="#d8d8d8",t.fillRect(0,0,256,256);let n=8,s=32;for(let r=0;r<n;r++){let l=r%2*16;for(let c=-1;c<=8;c++){let h=c*32+l,u=r*s,f=82+e()*12;t.fillStyle=is(0,0,f),t.beginPath(),t.moveTo(h+1,u),t.lineTo(h+32-1,u),t.lineTo(h+32-1,u+s*.7),t.quadraticCurveTo(h+32/2,u+s+4,h+1,u+s*.7),t.closePath(),t.fill(),t.fillStyle="rgba(0,0,0,0.22)",t.fillRect(h+1,u+s-6,30,4)}}return i}var is,yp=li(()=>{Oi();is=(i,t,e,n=1)=>`hsla(${i},${t}%,${e}%,${n})`});var _p={};e0(_p,{View3D:()=>pu,webglAvailable:()=>Rv});function rc(i,t,e){let n=((t-i+Z)%(2*Z)+2*Z)%(2*Z)-Z;return i+n*e}function oc(i){i.updateMatrixWorld(!0);let t=new me().copy(i.matrixWorld).invert(),e=new Map,n=[];i.traverse(s=>{s.isMesh&&n.push(s)});for(let s of n){let r=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();for(let o of Object.keys(r.attributes))["position","normal","uv"].includes(o)||r.deleteAttribute(o);r.attributes.uv||r.setAttribute("uv",new Be(new Float32Array(r.attributes.position.count*2),2)),r.applyMatrix4(new me().multiplyMatrices(t,s.matrixWorld)),e.has(s.material)||e.set(s.material,[]),e.get(s.material).push(r),s.parent.remove(s)}for(let[s,r]of e){let o=Io(r);r.forEach(a=>a.dispose()),i.add(new ie(o,s))}return i}function Ev(i){let t=new be,e=new be;e.name="body",t.add(e);let n=(s,r,o,a,l,c)=>{let h=new ie(s,c?new He({color:r}):new Ae({color:r}));h.material.userData.glow=!!c,o&&h.position.set(o[0],o[1],o[2]),a&&h.rotation.set(a[0],a[1],a[2]),l&&(typeof l=="number"?h.scale.setScalar(l):h.scale.set(l[0],l[1],l[2])),e.add(h)};switch(i){case"arrow":case"tower":{let s=i==="tower"?.8:.62;n(R.cyl(.022,.022,s,5),9067051,[0,0,0],[Z/2,0,0]),n(R.cone(.05,.14,5),14673646,[0,0,s/2+.06],[Z/2,0,0]),n(R.box(.12,.012,.12),16119285,[0,0,-s/2+.06]),n(R.box(.012,.12,.12),16119285,[0,0,-s/2+.06]);break}case"bolt":n(R.cyl(.035,.035,1,6),5922662,[0,0,0],[Z/2,0,0]),n(R.cone(.08,.2,6),14673646,[0,0,.58],[Z/2,0,0]);break;case"cannon":n(R.sph(.18,10,8),2829104);break;case"bomb":n(R.sph(.14,10,8),2829107),n(R.sph(.05,6,5),16765806,[0,.16,0],null,null,!0);break;case"bullet":n(R.sph(.07,8,6),16773552,null,null,[1,1,2.2],!0);break;case"fire":case"breath":n(R.sph(.16,10,8),16773808,null,null,null,!0),n(R.cone(.18,.5,8),16742938,[0,0,-.25],[-Z/2,0,0],null,!0);break;case"necro":n(R.sph(.15,10,8),13303736,null,null,null,!0),n(R.cone(.16,.42,8),5625418,[0,0,-.22],[-Z/2,0,0],null,!0);break;case"ice":n(R.oct(.13),14677759,null,null,[.8,.8,1.9],!0),n(R.cone(.1,.3,6),9427199,[0,0,-.22],[-Z/2,0,0],null,!0);break;case"meteor":n(R.sph(.45,14,10),16773552,null,null,null,!0),n(R.ico(.6,1),16747034,null,null,null,!0),n(R.cone(.55,1.6,12),16730624,[0,0,-.9],[-Z/2,0,0],null,!0);break;case"iceSpike":n(R.oct(.3),13627903,[0,.3,0],null,[.5,1.6,.5],!0);break;case"boltSeg":n(R.box(1,1,1),16775620,null,null,null,!0);break;case"beam":n(R.cyl(.5,.5,1,8),16777215,[0,.5,0],null,null,!0);break}return{root:t,body:e,top:.4}}function Cv(i){let t=new be,e=new be;e.name="body",t.add(e);let n=new be;n.name="barrel",n.position.set(0,.25,0),e.add(n);let s=(r,o,a,l)=>{let c=new ie(r,new Ae({color:o}));return c.position.set(a[0],a[1],a[2]),l&&c.rotation.set(l[0],l[1],l[2]),c};e.add(s(R.rbox(.6,.3,.7,.06),7029280,[0,.1,0]));for(let r of[-1,1])e.add(s(R.cyl(.2,.2,.08,12),3810320,[r*.33,.12,0],[0,0,Z/2]));return n.add(s(R.cyl(.17,.22,.95,12),3816e3,[0,0,.35],[Z/2-.15,0,0])),n.add(s(R.tor(.19,.04,Z*2,6,14),i.trim,[0,.07,.8],[.15,0,0])),{root:t,body:e,top:.6}}function Rv(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var Je,Tn,Zt,Qt,Ie,Do,Hn,Sv,du,Li,wv,Tv,ac,Av,pu,vp=li(()=>{hu();Oi();kr();fp();yp();Je=18/2,Tn=32/2,Zt=i=>i-Je,Qt=i=>i-Tn,Ie=(i,t,e)=>i+(t-i)*e,Do=i=>Math.max(0,Math.min(1,i));Hn={none:new Vt(1,1,1),frozen:new Vt(.55,.85,1.25),slowed:new Vt(.75,.9,1.1),raged:new Vt(1.25,.72,.72)},Sv=[new Vt(.7,.9,1.6),new Vt(1.3,.8,1.6),new Vt(1.8,.5,.6)],du=class{constructor(t){this.scene=t,this.mats=hp(),this.tpls=new Map}template(t,e,n){let s=t+"|"+e,r=this.tpls.get(s);if(r)return r;let o=n?n(sc[e]):up(t,sc[e]),a=cp(o);a.skel.traverse(c=>{c.userData.b=[c.rotation.x,c.rotation.y,c.rotation.z,c.position.x,c.position.y,c.position.z]});let l=[];a.skel.traverse(c=>l.push(c)),r={id:s,key:t,rig:o,skel:a.skel,cap:8,count:0,parts:[]};for(let c of a.parts){let h=l.indexOf(c.pivot);r.parts.push({idx:h,lit:c.lit?this.mk(c.lit,this.mats.lit,r.cap):null,glow:c.glow?this.mk(c.glow,this.mats.glow,r.cap):null,litG:c.lit,glowG:c.glow})}return this.tpls.set(s,r),r}mk(t,e,n){let s=new ei(t,e,n);return s.instanceMatrix.setUsage(xi),s.instanceColor=new pi(new Float32Array(n*3).fill(1),3),s.instanceColor.setUsage(xi),s.frustumCulled=!1,s.count=0,s.visible=!1,this.scene.add(s),s}grow(t){t.cap*=2;for(let e of t.parts)for(let n of["lit","glow"])e[n]&&(this.scene.remove(e[n]),e[n].dispose(),e[n]=this.mk(e[n+"G"],n==="lit"?this.mats.lit:this.mats.glow,t.cap))}skeleton(t){let e=t.skel.clone(!0),n=[];e.traverse(r=>n.push(r));let s={};for(let r of n)r.name&&!(r.name in s)&&(s[r.name]=r);return{root:e,nodes:n,p:s}}begin(){for(let t of this.tpls.values())t.count=0}push(t,e,n){t.count>=t.cap&&this.grow(t);let s=t.count++;e.root.updateMatrixWorld(!0);for(let r of t.parts){let o=e.nodes[r.idx].matrixWorld;r.lit&&(r.lit.setMatrixAt(s,o),r.lit.setColorAt(s,n)),r.glow&&(r.glow.setMatrixAt(s,o),r.glow.setColorAt(s,n))}}end(){for(let t of this.tpls.values())for(let e of t.parts)for(let n of[e.lit,e.glow])n&&(n.count=t.count,n.visible=t.count>0,t.count&&(n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0))}},Li=class{constructor(t,e,n,s,r=0){this.cap=s,this.im=new ei(e,n,s),this.im.instanceMatrix.setUsage(xi),this.im.instanceColor=new pi(new Float32Array(s*3).fill(1),3),this.im.instanceColor.setUsage(xi),this.im.frustumCulled=!1,this.im.renderOrder=r,this.im.count=0,t.add(this.im),this.n=0,this.m=new me,this.p=new D,this.q=new Mn,this.s=new D}begin(){this.n=0}add(t,e,n,s,r,o,a,l){this.n>=this.cap||(this.p.set(t,e,n),this.s.set(s,r,o),this.m.compose(this.p,a||this.q.identity(),this.s),this.im.setMatrixAt(this.n,this.m),l&&this.im.setColorAt(this.n,l),this.n++)}end(){this.im.count=this.n,this.im.visible=this.n>0,this.n&&(this.im.instanceMatrix.needsUpdate=!0,this.im.instanceColor.needsUpdate=!0)}},wv=`
attribute float size; attribute vec4 pcolor; varying vec4 vC; uniform float uScale;
void main() { vC = pcolor; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,Tv=`
varying vec4 vC;
void main() { float d = length(gl_PointCoord - 0.5); float a = vC.a * smoothstep(0.5, 0.15, d); if (a < 0.01) discard; gl_FragColor = vec4(vC.rgb, a); }`,ac=class{constructor(t,e,n){this.cap=e,this.list=[],this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e);let s=new Oe;s.setAttribute("position",new Be(this.pos,3).setUsage(xi)),s.setAttribute("pcolor",new Be(this.col,4).setUsage(xi)),s.setAttribute("size",new Be(this.size,1).setUsage(xi));let r={vertexShader:wv,fragmentShader:Tv,uniforms:{uScale:{value:400}},transparent:!0,depthWrite:!1};n&&(r.blending=xs),this.mat=new hn(r),this.pts=new sr(s,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=n?6:5,this.geo=s,t.add(this.pts),this.c=new Vt}spawn(t){this.list.length<this.cap&&this.list.push(t)}update(t){let e=0,n=[];for(let s of this.list){if(s.t+=t,s.t>=s.life)continue;n.push(s),s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.vy-=(s.g||0)*t,s.y<.02&&(s.y=.02,s.vy*=-.3,s.vx*=.6,s.vz*=.6);let r=s.drag??.97;s.vx*=r,s.vz*=r;let o=s.t/s.life;this.pos[e*3]=s.x,this.pos[e*3+1]=s.y,this.pos[e*3+2]=s.z,this.c.set(s.color);let a=(s.a??1)*(o<.1?o/.1:1-Math.pow(Math.max(0,(o-.3)/.7),1.5));this.col[e*4]=this.c.r,this.col[e*4+1]=this.c.g,this.col[e*4+2]=this.c.b,this.col[e*4+3]=a,this.size[e]=s.size*(s.grow?1+o*s.grow:1-o*.4),e++}this.list=n,this.geo.setDrawRange(0,e),e&&(this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0),this.pts.visible=e>0}clear(){this.list=[]}};Av={cannon:.22,bomb:.45,arrow:.12,tower:.12,bolt:.04,bullet:0,fire:.06,breath:.03,necro:.06,ice:.05};pu=class{constructor(t,e,n,s,r={}){this.cv=t,this.wrap=e,this.me=n,this.flip=n===1,this.onEvent=s||(()=>{}),this.quality=r.quality||"auto",this.frames=[],this.queue=[],this.units=new Map,this.pos=new Map,this.projs=[],this.spells=[],this.fx=[],this.zonesFx=[],this.bolts=[],this.preds=[],this.marks=[],this.shake=0,this.lastNow=performance.now(),this.towerPos=[];for(let l of[0,1])xn.forEach(c=>this.towerPos.push(bi(l,c.x,c.y)));let o=window.devicePixelRatio||1;this.renderer=new Ro({canvas:t,antialias:o<2,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=en,this.scene=new er,this.scene.background=new Vt(4160053),this.scene.fog=new tr(4160053,40,80),this.cam=new nn(36,1,.5,200),this.ray=new xr,this.ground=new bn(new D(0,1,0),0),this.tmpV=new D,this.tmpV2=new D,this.tmpC=new Vt,this.ndc=new ft,this.flatQ=new Mn().setFromEuler(new Fn(-Z/2,0,0)),this.inst=new du(this.scene),this.shadows=new Li(this.scene,new Yi(1,18),new He({color:0,transparent:!0,opacity:.24,depthWrite:!1}),260,1),this.rings=new Li(this.scene,new $i(.8,1,28),new He({transparent:!0,opacity:.6,depthWrite:!1}),220,2);let a=()=>new He({transparent:!0,depthWrite:!1,blending:xs});this.fxRings=new Li(this.scene,new $i(.82,1,36),a(),96,7),this.fxBalls=new Li(this.scene,new On(1,16,12),a(),64,7),this.fxDisc=new Li(this.scene,new Yi(1,32),a(),32,3),this.barBg=new Li(this.scene,new on(1,1),new He({color:1118481,depthTest:!1,transparent:!0,opacity:.8}),220,20),this.barFg=new Li(this.scene,new on(1,1),new He({depthTest:!1,transparent:!0}),220,21),this.sparks=new ac(this.scene,900,!0),this.smoke=new ac(this.scene,600,!1),this.buildArena(),this.towers=[],this.buildTowers(),this.ghostMat=new He({color:16777215,transparent:!0,opacity:.45,depthWrite:!1}),this.ghostPool=new Map,this.buildLabels(),this.dprLevel=0,this.fpsAcc=0,this.fpsN=0,this.fpsCheckAt=performance.now()+2500,this.goodSince=0,this.resize()}buildArena(){let t=this.scene;t.add(new mr(15660799,5929530,1.55));let e=new gs(16773336,2.15);e.position.set(-8,16,7),t.add(e);let n=new gs(12375807,.45);n.position.set(6,6,-10),t.add(n);let s=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),r=(O,H)=>{let G=new rr(O);return G.colorSpace=en,G.anisotropy=s,H&&(G.wrapS=G.wrapT=ps,G.repeat.set(H[0],H[1])),G};this.tex={stone:fu(!1),stoneL:fu(!0),wood:gp(),roof:xp()},this.mkTex=r;let o=new ie(new on(18,32),new Ae({map:r(dp(this.quality==="ahorro"?40:56))}));o.rotation.x=-Z/2,t.add(o);let a=new ie(new on(400,400),new Ae({color:4885050}));a.rotation.x=-Z/2,a.position.y=-.04,t.add(a),this.waterTex=r(pp(),[18/6,1]);let l=new ie(new on(18,2),new He({map:this.waterTex,transparent:!0,opacity:.82}));l.rotation.x=-Z/2,l.position.y=.035,t.add(l),this.foamTex=r(mp(),[18/5,1]);for(let O of[-1,1]){let H=new ie(new on(18,.32),new He({map:this.foamTex,transparent:!0,opacity:.7,depthWrite:!1}));H.rotation.x=-Z/2,H.position.set(0,.045,O*.92),t.add(H)}let c=new Ae({map:r(this.tex.wood,[1,2])}),h=new Ae({color:6175515}),u=new be,f=t;for(let O of dn){let H=u,G=2+1.1,nt=new ie(new Me(Ln*2+.35,.16,G),c);nt.position.set(Zt(O),.14,0),H.add(nt);for(let J of[-1,1]){let Q=new ie(new Me(.12,.1,G),h);Q.position.set(Zt(O)+J*(Ln+.12),.44,0),H.add(Q);for(let st of[-G/2+.1,-G/6,G/6,G/2-.1]){let Dt=new ie(new Me(.14,.38,.14),h);Dt.position.set(Zt(O)+J*(Ln+.12),.32,st),H.add(Dt)}}}f.add(oc(u));let d=new Ae({map:r(this.tex.stone,[10,.5])}),p=new Ae({map:r(this.tex.stone,[6,.5])});for(let O of[-1,1]){let H=new ie(new Me(.4,.55,32+.8),d);H.position.set(O*(Je+.2),.27,0),t.add(H);let G=new ie(new Me(18+.8,.55,.4),p);G.position.set(0,.27,O*(Tn+.2)),t.add(G)}let x=5,g=()=>(x=x*16807%2147483647,(x-1)/2147483646),m=[],_=this.quality==="ahorro"?70:150;for(let O=0;O<_*2&&m.length<_;O++){let H=g()<.5?-1:1,G,nt;g()<.8?(G=H*(Je+1.4+g()*10),nt=(g()-.5)*48):(G=(g()-.5)*38,nt=H*(Tn+1.5+g()*8)),!(Math.abs(G)<Je+1&&Math.abs(nt)<Tn+1)&&m.push([G,nt,.8+g()*.7,g(),g()<.65])}let w=m.filter(O=>O[4]),v=m.filter(O=>!O[4]),M=new Ge,T=new Vt,C=new ei(new mn(.13,.2,.8,6),new Ae({color:7029795}),m.length),y=[new ni(.95,1.3,8),new ni(.75,1.1,8),new ni(.5,.9,8)].map(O=>new ei(O,new Ae({color:16777215}),Math.max(1,w.length))),A=[0,1,2].map(()=>new ei(new On(.62,10,8),new Ae({color:16777215}),Math.max(1,v.length)));m.forEach(([O,H,G,nt],J)=>{M.position.set(O,.4*G,H),M.scale.setScalar(G),M.rotation.set(0,nt*6,0),M.updateMatrix(),C.setMatrixAt(J,M.matrix)}),w.forEach(([O,H,G,nt],J)=>{[1.15,1.75,2.25].forEach((Q,st)=>{M.position.set(O,Q*G,H),M.scale.setScalar(G),M.rotation.set(0,nt*6+st,0),M.updateMatrix(),y[st].setMatrixAt(J,M.matrix),T.setHSL(.33+nt*.05,.42,.24+st*.05+nt*.06),y[st].setColorAt(J,T)})}),v.forEach(([O,H,G,nt],J)=>{[[0,1.25,0,1.15],[.38,1,.1,.85],[-.3,1.05,-.2,.9]].forEach(([Q,st,Dt,Pt],xe)=>{M.position.set(O+Q*G,st*G,H+Dt*G),M.scale.setScalar(G*Pt),M.rotation.set(0,nt*6,0),M.updateMatrix(),A[xe].setMatrixAt(J,M.matrix),T.setHSL(.25+nt*.07,.5,.32+xe*.04+nt*.05),A[xe].setColorAt(J,T)})}),t.add(C,...y,...A);let L=[];for(let O=0;O<40;O++){let H=g()<.5?-1:1;L.push([H*(Je+.9+g()*6),(g()-.5)*40,.25+g()*.45,g()])}let U=new ei(new Ii(1,0),new Ae({color:10130570,flatShading:!0}),L.length);L.forEach(([O,H,G,nt],J)=>{M.position.set(O,G*.4,H),M.scale.set(G*1.2,G*.8,G),M.rotation.set(nt*3,nt*6,0),M.updateMatrix(),U.setMatrixAt(J,M.matrix)}),t.add(U);let z=new Ae({color:6175515}),X=new Ae({color:15906353}),F=new be;this.cornerFlags=[];for(let[O,H,G]of[[-Je-.2,-Tn-.2,1],[Je+.2,-Tn-.2,1],[-Je-.2,Tn+.2,0],[Je+.2,Tn+.2,0]]){let nt=new ie(new mn(.06,.08,3,8),z);nt.position.set(O,1.5,H),F.add(nt);let J=new ie(new On(.12,8,6),X);J.position.set(O,3.05,H),F.add(J);let Q=new ie(new on(1,.65,6,1),new Ae({color:16777215,side:2}));Q.position.set(O+(O<0?.52:-.52),2.65,H),Q.userData.team=G,Q.userData.base=Q.geometry.attributes.position.array.slice(),t.add(Q),this.cornerFlags.push(Q)}t.add(oc(F)),this.zoneMat=new He({color:16722474,transparent:!0,opacity:.24,depthWrite:!1}),this.zones=[];for(let O=0;O<4;O++){let H=new ie(new on(1,1),this.zoneMat);H.rotation.x=-Z/2,H.position.y=.06,H.visible=!1,H.renderOrder=3,t.add(H),this.zones.push(H)}this.lineMesh=new ie(new on(18,.08),new He({color:16777215,transparent:!0,opacity:.75,depthWrite:!1})),this.lineMesh.rotation.x=-Z/2,this.lineMesh.position.y=.07,this.lineMesh.visible=!1,t.add(this.lineMesh),this.tileMat=new He({color:16777215,transparent:!0,opacity:.4,depthWrite:!1}),this.tile=new ie(new on(1,1),this.tileMat),this.tile.rotation.x=-Z/2,this.tile.position.y=.08,this.tile.visible=!1,t.add(this.tile),this.rangeMat=new He({color:16777215,transparent:!0,opacity:.6,depthWrite:!1}),this.range=new ie(new $i(.965,1,64),this.rangeMat),this.range.rotation.x=-Z/2,this.range.position.y=.09,this.range.visible=!1,t.add(this.range),this.spellArea=new ie(new Yi(1,48),new He({color:16751162,transparent:!0,opacity:.22,depthWrite:!1})),this.spellArea.rotation.x=-Z/2,this.spellArea.position.y=.09,this.spellArea.visible=!1,t.add(this.spellArea)}buildTowers(){for(let e of this.towers)this.scene.remove(e.group,e.rubble);this.towers=[],this.towerMats||(this.towerMats={stone:new Ae({map:this.mkTex(this.tex.stone,[3,1.5])}),stone2:new Ae({map:this.mkTex(this.tex.stoneL,[4,1])}),top:new Ae({map:this.mkTex(this.tex.stoneL,[1,1])}),wood:new Ae({map:this.mkTex(this.tex.wood,[2,2])}),gold:new Ae({color:15906353}),roofTex:this.mkTex(this.tex.roof,[3,2])});let t=this.towerMats;for(let e of this.cornerFlags)e.material.color.set(e.userData.team===this.me?3108840:14694459);for(let e=0;e<6;e++){let n=e<3?0:1,s=xn[e%3].kind,r=n===this.me?"me":"foe",o=sc[r],a=new Ae({color:o.main}),l=new Ae({map:t.roofTex,color:o.main}),[c,h]=this.towerPos[e],u=new be;u.position.set(Zt(c),0,Qt(h)),u.rotation.y=n===0?Z:0;let f=s==="king",d=(T,C,y,A,L,U=0,z=0,X=0)=>{let F=new ie(T,C);return F.position.set(y,A,L),F.rotation.set(U,z,X),u.add(F),F},p;if(f){d(new Me(3.6,.5,3.6),t.stone2,0,.25,0),d(new Me(3.2,2.3,3.2),t.stone,0,.5+2.3/2,0),d(new Me(3.45,.28,3.45),t.top,0,.5+2.3+.1,0),d(new Me(3,.08,3),t.wood,0,.5+2.3+.27,0);for(let C=0;C<4;C++){let y=-1.25+C*.8333333333333334;for(let[A,L]of[[y,1.62],[y,-1.62],[1.62,y],[-1.62,y]])d(new Me(.4,.4,.4),t.top,A,.5+2.3+.44,L)}for(let[C,y]of[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]])d(new mn(.55,.6,2.3+.9,12),t.stone2,C,.5+(2.3+.9)/2-.25,y),d(new ni(.75,1.1,12),l,C,.5+2.3+.95,y),d(new On(.1,8,6),t.gold,C,.5+2.3+1.55,y);for(let C of[-1,1])d(new Me(.8,1.2,.04),a,C*.75,.5+2.3*.55,1.62,-.06),d(new Me(.86,.08,.06),t.gold,C*.75,.5+2.3*.55+.62,1.62);d(new Me(.9,1.2,.06),t.wood,0,.98,1.62),p=.5+2.3+.31}else{d(new mn(1.32,1.42,.45,14),t.stone2,0,.22,0),d(new mn(1.08,1.22,2.1,14),t.stone,0,.45+2.1/2,0),d(new mn(1.32,1.12,.3,14),t.top,0,.45+2.1+.12,0),d(new mn(1.2,1.2,.08,14),t.wood,0,.45+2.1+.3,0);for(let C=0;C<10;C++){let y=C/10*Z*2;d(new Me(.36,.36,.3),t.top,Math.cos(y)*1.18,.45+2.1+.45,Math.sin(y)*1.18,0,-y,0)}d(new Me(.62,.9,.04),a,0,.45+2.1*.6,1.17,-.08),d(new Me(.7,.08,.06),t.gold,0,.45+2.1*.6+.47,1.17),d(new Me(.16,.16,.06),t.gold,0,.45+2.1*.6,1.21,0,0,Z/4),d(new Me(.6,.85,.06),t.wood,0,.85,-1.18),p=.45+2.1+.34}this.scene.add(oc(u));let x=new be;x.position.copy(u.position);let g=e*31+7,m=()=>(g=g*16807%2147483647,(g-1)/2147483646),_=f?3.2:2.4;for(let T=0;T<14;T++){let C=m()*7,y=m()*_*.5,A=new ie(new Ii(.22+m()*.35,0),T%3?t.stone:t.top);A.position.set(Math.cos(C)*y,.15+m()*.25,Math.sin(C)*y),A.rotation.set(m()*3,m()*3,m()*3),x.add(A)}let w=new ie(new Me(1.6,.1,.3),t.wood);w.position.set(.2,.35,.1),w.rotation.set(.3,.8,.2),x.add(w),oc(x),x.visible=!1,this.scene.add(x);let v=f?this.inst.template("king",r,lp):this.inst.template("towerArcher",r,ap),M={group:u,rubble:x,king:f,owner:n,figY:p,alive:!0,aim:null,shootT:-9,T:v,sk:this.inst.skeleton(v),baseRot:u.rotation.y,fig:u.rotation.y};f&&(M.cannonT=this.inst.template("cannonTop",r,Cv),M.cannonSk=this.inst.skeleton(M.cannonT)),this.towers.push(M)}}ghostRig(t,e){let n=t+":"+e,s=this.ghostPool.get(n);if(!s){let r=this.inst.template(t,"me"),o=this.inst.skeleton(r);for(let a of r.parts){let l=o.nodes[a.idx];a.litG&&l.add(new ie(a.litG,this.ghostMat)),a.glowG&&l.add(new ie(a.glowG,this.ghostMat))}o.root.scale.setScalar(Ms[t]||1.5),o.root.visible=!1,this.scene.add(o.root),s={sk:o,rig:r.rig},this.ghostPool.set(n,s)}return s}buildLabels(){this.labelBox&&this.labelBox.remove();let t=document.createElement("div");t.className="labels",this.wrap.appendChild(t),this.labelBox=t,this.labels=[];for(let e=0;e<6;e++){let n=document.createElement("div");n.className="tlabel",n.innerHTML='<div class="tbar"><i></i><b></b></div><span class="zzz">z<small>z</small></span>',t.appendChild(n),this.labels.push({el:n,fill:n.querySelector("i"),num:n.querySelector("b"),zzz:n.querySelector(".zzz"),hp:-1,sleep:null})}this.layoutLabels()}layoutLabels(){if(!(!this.labels||!this.S))for(let t=0;t<6;t++){let e=this.labels[t],n=t<3?0:1,s=t%3===2,r=n===this.me,[o,a]=this.towerPos[t],l=this.towers[t],c,h;if(r){let f=(s?3.6:2.84)/2+.45;[c,h]=this.screenOf(o,a+(this.me===0?f:-f),0),h-=4}else[c,h]=this.screenOf(o,a,(l?l.figY:3)+(s?2.3:2.1)),h-=12;let u=this.S*(s?2.7:2.15);if(s){let f=n===0?1:-1,[d,p]=this.screenOf(o,a+f*.65,(l?l.figY:3)+1.4);e.zzz.style.left=(d-c+u/2+this.S*.5).toFixed(1)+"px",e.zzz.style.top=(p-h-18).toFixed(1)+"px"}e.el.style.transform=`translate(${(c-u/2).toFixed(1)}px, ${h.toFixed(1)}px)`,e.el.style.width=u.toFixed(1)+"px",e.el.classList.toggle("mine",r),e.el.classList.toggle("foe",!r),e.el.classList.toggle("king",s)}}updateLabels(t){for(let e=0;e<6;e++){let n=this.labels[e],s=t.tw[e];if(s!==n.hp){n.hp=s;let o=Fi[xn[e%3].kind].hp;n.el.style.display=s>0?"":"none",n.fill.style.width=(Math.max(0,s/o)*100).toFixed(1)+"%",n.num.textContent=s}let r=e%3===2?!t.ka[e<3?0:1]:!1;r!==n.sleep&&(n.sleep=r,n.zzz.style.display=r?"":"none")}}reset(t){this.me=t,this.flip=t===1,this.frames=[],this.queue=[],this.projs=[],this.spells=[],this.fx=[],this.zonesFx=[],this.bolts=[],this.preds=[],this.marks=[],this.units.clear(),this.pos.clear(),this.shake=0,this.sparks.clear(),this.smoke.clear(),this.buildTowers();for(let e of this.labels)e.hp=-1,e.sleep=null;this.fitCamera(),this.layoutLabels()}warm(t){for(let e of["me","foe"])for(let n of t){let s=Ht[n];if(!s||!s.unit)continue;this.inst.template(s.unit,e);let r=Xe[s.unit];r.spawn&&this.inst.template(r.spawn.unit,e),r.deathSpawn&&this.inst.template(r.deathSpawn.unit,e)}for(let e of["arrow","tower","cannon","fire","meteor","boltSeg","iceSpike","beam","bomb","bullet","breath","necro","ice","bolt"])this.projT(e);try{this.renderer.compile(this.scene,this.cam)}catch{}}projT(t){return this.inst.template("p_"+t,"me",()=>Ev(t))}resize(){let t=this.wrap.getBoundingClientRect();this.cssW=Math.max(100,t.width),this.cssH=Math.max(100,t.height),this.cv.style.width=this.cssW+"px",this.cv.style.height=this.cssH+"px",this.fitCamera(),this.layoutLabels()}dprTarget(){let t=window.devicePixelRatio||1;if(this.quality==="ahorro")return Math.min(t,1);let e=this.quality==="alta"?[2,1.75,1.5,1.25]:[1.75,1.5,1.25,1,.85];return Math.min(t,e[Math.min(this.dprLevel,e.length-1)])}applyDpr(){let t=this.dprTarget();this.dpr=t,this.renderer.setPixelRatio(t),this.renderer.setSize(this.cssW,this.cssH,!1);let e=this.cssH*t/(2*Math.tan(this.cam.fov*Z/180/2));this.sparks.mat.uniforms.uScale.value=e,this.smoke.mat.uniforms.uScale.value=e}setQuality(t){this.quality=t,this.dprLevel=0,this.lockedUp=!1,this.applyDpr()}fitCamera(){let t=this.cam;t.aspect=this.cssW/this.cssH,t.fov=t.aspect<.62?40:36,t.updateProjectionMatrix();let e=this.flip?-1:1,n=56*Z/180,s=new D(0,Math.sin(n),e*Math.cos(n)),r=[];for(let f of[-Je,Je])r.push(new D(f,0,e*Tn),new D(f,0,-e*Tn),new D(f,2.6,-e*(Tn-3)));r.push(new D(0,5.2,-e*(Tn-3)));let o=0,a=45,l=new D;for(let f=0;f<90;f++){let d=new D(0,0,o);t.position.copy(d).addScaledVector(s,a),t.lookAt(d),t.updateMatrixWorld();let p=9,x=-9,g=9,m=-9;for(let w of r)l.copy(w).project(t),p=Math.min(p,l.x),x=Math.max(x,l.x),g=Math.min(g,l.y),m=Math.max(m,l.y);let _=Math.max((x-p)/2/.99,(m-g)/2/.985);a*=1+(_-1)*.7,o-=e*((m+g)/2)*4}this.camBase=t.position.clone(),this.camTarget=new D(0,0,o),t.updateMatrixWorld();let c=t.position.distanceTo(new D(0,0,-e*Tn));this.scene.fog.near=c+6,this.scene.fog.far=c+45;let h=this.screenOf(9,16,0),u=this.screenOf(10,16,0);this.S=Math.hypot(u[0]-h[0],u[1]-h[1]),this.applyDpr()}screenOf(t,e,n=0){let s=this.tmpV.set(Zt(t),n,Qt(e)).project(this.cam);return[(s.x*.5+.5)*this.cssW,(-s.y*.5+.5)*this.cssH,s.z]}toScreen(t,e){let n=this.screenOf(t,e,0);return[n[0],n[1]]}toWorld(t,e){this.ndc.set(t/this.cssW*2-1,-(e/this.cssH)*2+1),this.ray.setFromCamera(this.ndc,this.cam);let n=this.ray.ray.intersectPlane(this.ground,this.tmpV2);return n?[n.x+Je,n.z+Tn]:[-99,-99]}inArena(t,e){let[n,s]=this.toWorld(t,e);return n>=0&&n<=18&&s>=0&&s<=32}screenOfTower(t){let[e,n]=this.towerPos[t];return this.screenOf(e,n,this.towers[t]?this.towers[t].figY+1:3)}pushFrame(t){let e=new Map;for(let r of t.e)e.set(r[0],r);let n={k:t.k,ents:e,tw:t.tw,ka:t.ka,tf:t.tf||[0,0,0,0,0,0]},s=this.frames;if(t.ev)for(let r of t.ev)this.queue.push(r);s.length&&s[s.length-1].k>=n.k||(s.push(n),s.length>60&&s.shift())}pushEvents(t){for(let e of t)this.queue.push(e)}latest(){return this.frames[this.frames.length-1]}predict(t,e,n){let s=Ht[t];if(!s)return;if(s.type==="spell"){this.marks.push({x:e,y:n,r:s.spell.radius,t:0,max:1.4,mine:!0});return}let r=this.me===0?1:-1,o=performance.now();for(let[a,l]of Cs(s.count||1))this.preds.push({key:s.unit,x:e+a*r,y:n+l*r,t0:o,matched:!1});this.ring(e,n,.3,1.4,10275071,.5)}emote(t,e){let n=document.createElement("div");n.className="bubble "+(t===this.me?"mine":"foe"),n.textContent=e;let[s,r]=this.screenOfTower(t*3+2),o=this.S;n.style.left=s+(t===this.me?-o*3.8:o*3.8)+"px",n.style.top=r+(t===this.me?-o*.5:o*.3)+"px",this.wrap.appendChild(n),setTimeout(()=>n.remove(),2600)}popText(t,e,n,s,r=""){let[o,a]=this.screenOf(t,e,n),l=document.createElement("div");l.className="poptext "+r,l.textContent=s,l.style.left=o+"px",l.style.top=a+"px",this.wrap.appendChild(l),setTimeout(()=>l.remove(),1700)}ring(t,e,n,s,r,o,a=.1,l=.9){this.fx.push({kind:"ring",x:t,y:e,h:a,r0:n,r1:s,c:new Vt(r),dur:o,t:0,op:l})}flash(t,e,n,s,r,o,a,l=.9){this.fx.push({kind:"ball",x:t,y:e,h:n,r0:s,r1:r,c:new Vt(o),dur:a,t:0,op:l})}disc(t,e,n,s,r,o=.5){this.fx.push({kind:"disc",x:t,y:e,h:.06,r0:n,r1:n,c:new Vt(s),dur:r,t:0,op:o})}burst(t,e,n,s,r,o,a,l,c=9){this.quality==="ahorro"&&(s=Math.ceil(s/2));for(let h=0;h<s;h++){let u=Math.random()*Z*2,f=o*(.3+Math.random()*.7);this.sparks.spawn({x:Zt(t),y:n,z:Qt(e),vx:Math.cos(u)*f,vy:2+Math.random()*3.5,vz:Math.sin(u)*f,life:a*(.6+Math.random()*.6),t:0,size:l*(.6+Math.random()*.8),color:r[h%r.length],g:c})}}puff(t,e,n,s,r,o=15132390,a=.5,l=.8){this.quality==="ahorro"&&(s=Math.ceil(s/2));for(let c=0;c<s;c++){let h=Math.random()*Z*2,u=r*Math.random();this.smoke.spawn({x:Zt(t)+Math.cos(h)*.2,y:n,z:Qt(e)+Math.sin(h)*.2,vx:Math.cos(h)*u,vy:.6+Math.random()*.6,vz:Math.sin(h)*u,life:l*(.7+Math.random()*.6),t:0,size:a*(.7+Math.random()*.6),color:o,a:.7,grow:1.6,drag:.94})}}trigger(t){let e=t.o===this.me;switch(t.t){case"deploy":{let n=Ht[t.c];n.type==="spell"?(!e||!this.marks.some(s=>Math.hypot(s.x-t.x,s.y-t.y)<.3))&&this.marks.push({x:t.x,y:t.y,r:n.spell.radius,t:0,max:1.4,mine:e}):this.ring(t.x,t.y,.3,1.6,e?9224447:16752286,.5);break}case"spawn":this.puff(t.x,t.y,.3,5,.8,13617407,.4,.5);break;case"proj":this.addProj(t);break;case"hit":this.burst(t.x,t.y,t.a?1.7:t.tw?1.6:.7,6,[16777215,16769162],2.5,.28,.16);break;case"spin":this.ring(t.x,t.y,.4,t.r,14674175,.3,.5),this.burst(t.x,t.y,.6,10,[16777215,13621480],4,.3,.14,2);break;case"lance":this.flash(t.x,t.y,.9,.2,.9,16773544,.25,.8),this.burst(t.x,t.y,.8,14,[16777215,16769162,16757575],5,.35,.18),this.shake=Math.max(this.shake,.25);break;case"splash":{let n=t.p==="fire"||t.p==="breath"||t.p==="bomb",s=t.p==="necro"?[8257386,3119658,14221264]:t.p==="ice"?[12577535,16777215,8177904]:n?[16757575,16738816,16765562]:[13081599,9133302,16777215];this.ring(t.x,t.y,.2,t.r,s[0],.32),this.flash(t.x,t.y,.45,.2,t.r*.65,s[1],.26,.7),this.burst(t.x,t.y,.5,12,s,3,.4,.16),t.p==="bomb"&&(this.puff(t.x,t.y,.3,6,1.2,6974058,.6,.9),this.shake=Math.max(this.shake,.15));break}case"spell":this.spells.push({...t,kind:Ht[t.c].spell.kind,start:t.k});break;case"boom":this.flash(t.x,t.y,.3,.4,t.r*.95,16747034,.5,.95),this.flash(t.x,t.y,.3,.2,t.r*.6,16773544,.32,1),this.ring(t.x,t.y,.5,t.r*1.1,16764006,.55,.12),this.disc(t.x,t.y,t.r*.8,16738816,.6,.35),this.burst(t.x,t.y,.4,40,[16738816,16757575,16769162,16726528],7,.75,.24),this.puff(t.x,t.y,.5,14,1.8,5592405,.9,1.1),this.shake=Math.max(this.shake,.55);break;case"volley":this.ring(t.x,t.y,.5,t.r,16774084,.35,.1,.6),this.puff(t.x,t.y,.2,10,t.r*.5,14207144,.5,.7);break;case"zap":{for(let[n,s,r,o]of t.hits){let a=r?1.8:o?3.2:.8;this.addBolt(n,s,a),this.flash(n,s,a,.3,1.3,16774824,.3,1),this.burst(n,s,a,14,[16777215,16773994,10475775],5,.4,.18)}t.hits.length||this.addBolt(t.x,t.y,.1),this.shake=Math.max(this.shake,.4);break}case"freeze":this.ring(t.x,t.y,.4,t.r,12577535,.5,.12),this.flash(t.x,t.y,.4,.4,t.r*.9,10477823,.35,.6),this.zonesFx.push({kind:"ice",x:t.x,y:t.y,r:t.r,t:0,dur:t.d}),this.burst(t.x,t.y,.6,30,[16777215,12577535,8177904],5,.8,.18,3);break;case"rage":this.zonesFx.push({kind:"rage",x:t.x,y:t.y,r:t.r,t:0,dur:t.d,mine:e}),this.ring(t.x,t.y,.4,t.r,16726634,.5,.12),this.burst(t.x,t.y,.5,26,[16726634,12602879,16752328],4,.7,.2,2);break;case"charge":this.puff(t.x,t.y,.2,6,1,14207144,.5,.6);break;case"quake":this.ring(t.x,t.y,.5,t.r*1.2,14207144,.5,.1),this.puff(t.x,t.y,.3,16,2.2,10129279,.8,1),this.burst(t.x,t.y,.4,20,[10130570,7301471,13091254],5,.8,.22),this.shake=Math.max(this.shake,.6);break;case"death":{let n=ki[t.u],s=n==="golem"||n==="giant";this.puff(t.x,t.y,t.a?1.6:.4,s?12:6,s?1.6:.8,15658734,s?.8:.5,.8),this.burst(t.x,t.y,t.a?1.6:.6,s?14:7,[e?9224447:16752286,16777215],3,.5,.16);break}case"tower":{let n=this.towers[t.o*3+t.i];this.flash(t.x,t.y,2,.6,3.6,16765562,.55,1),this.burst(t.x,t.y,2,60,[10130570,13091254,7301471,16757575,16738816],9,1.2,.3),this.puff(t.x,t.y,1.5,26,3,7829367,1.2,1.6),this.ring(t.x,t.y,.5,4.6,16774084,.7,.12),this.shake=Math.max(this.shake,1.2),this.popText(t.x,t.y,n?n.figY+1.5:4,"\u{1F451}","crown "+(t.o===this.me?"foe":"mine"));break}case"king":{let[n,s]=this.towerPos[t.o*3+2];this.popText(n,s,this.towers[t.o*3+2].figY+2.2,"\u2757","alert");break}}this.onEvent(t)}addProj(t){let e=t.fa?1.9:.75;if(t.ft){let n=this.towers[t.ft-1];n&&(e=n.figY+(n.king?.6:1.1),n.shootT=performance.now(),n.aim=[t.tx,t.ty])}else{let n=this.unitNear(t.fx,t.fy);n&&n.key==="ballista"&&(e=1)}this.projs.push({...t,start:t.k,h0:e,T:this.projT(t.p)})}unitNear(t,e){let n=null,s=.5;for(let r of this.units.values()){let o=Math.hypot(r.x-t,r.y-e);o<s&&(s=o,n=r)}return n}addBolt(t,e,n){let s=[],r=t+(Math.random()-.5)*1.5,o=e+(Math.random()-.5)*1.5,a=13,l=9;for(let c=1;c<=l;c++){let h=c/l,u=Ie(r,t,h)+(c<l?(Math.random()-.5)*.9:0),f=Ie(o,e,h)+(c<l?(Math.random()-.5)*.9:0),d=Ie(13,n,h);s.push([r,o,a,u,f,d]),r=u,o=f,a=d}this.bolts.push({segs:s,t:0,dur:.32})}render(t,e){let n=performance.now(),s=Math.min(.05,(n-this.lastNow)/1e3);this.lastNow=n;let r=n/1e3;if(this.adaptResolution(s),this.queue.length){let f=[];for(let d of this.queue)d.k<=t+.01?this.trigger(d):f.push(d);this.queue=f}let o=this.frames,a=null,l=null;for(let f=o.length-1;f>=0;f--)if(o[f].k<=t){a=o[f],l=o[f+1]||null;break}a||(a=o[0]);let c=a&&l?Do((t-a.k)/(l.k-a.k)):0,h=l&&c>.5?l:a;this.waterTex.offset.x=r*.06%1,this.waterTex.offset.y=Math.sin(r*.6)*.02,this.foamTex.offset.x=r*.1%1;for(let f of this.cornerFlags){let d=f.geometry.attributes.position,p=f.userData.base;for(let x=0;x<d.count;x++){let g=p[x*3];d.array[x*3+2]=Math.sin(r*4+g*5)*.08*(g+.5)}d.needsUpdate=!0}let u=this.cam;if(u.position.copy(this.camBase),this.shake>0&&(u.position.x+=(Math.random()-.5)*this.shake*.45,u.position.z+=(Math.random()-.5)*this.shake*.45,this.shake=Math.max(0,this.shake-s*2.5)),u.lookAt(this.camTarget),u.updateMatrixWorld(),this.inst.begin(),this.shadows.begin(),this.rings.begin(),this.barBg.begin(),this.barFg.begin(),this.fxRings.begin(),this.fxBalls.begin(),this.fxDisc.begin(),a){let f=[];for(let[p,x]of h===l?l.ents:a.ents){let g=a.ents.get(p),m=l?l.ents.get(p):null,_,w,v=0,M=0;if(g&&m){_=Ie(g[3],m[3],c)/20,w=Ie(g[4],m[4],c)/20;let y=Math.max(1,l.k-a.k);v=(m[3]-g[3])/y,M=(m[4]-g[4])/y}else{let y=m||g;_=y[3]/20,w=y[4]/20}let T=ki[x[1]],C=Xe[T];this.pos.set(p,{x:_,y:w,air:!!C.air}),f.push({id:p,e:x,x:_,y:w,key:T,def:C,mx:v,my:M})}for(let p=0;p<6;p++){let[x,g]=this.towerPos[p];this.pos.set(p+1,{x,y:g,air:!1,tower:!0})}if(this.preds.length){for(let p of this.preds){if(n-p.t0>1600){p.matched=!0;continue}for(let x of f)if(x.key===p.key&&x.e[2]===this.me&&Math.hypot(x.x-p.x,x.y-p.y)<1&&x.e[6]>0){p.matched=!0;break}}this.preds=this.preds.filter(p=>!p.matched)}let d=new Set;for(let p of f)d.add(p.id),this.drawUnit(p,s,r);for(let p of this.units.keys())d.has(p)||this.units.delete(p);for(let p of this.pos.keys())p>6&&!d.has(p)&&this.pos.delete(p);for(let p of this.preds)this.drawPrediction(p,n,r);for(let p=0;p<6;p++)this.drawTower(p,h,s,r,n);this.updateLabels(h);for(let p of f)p.key==="arcane"&&p.e[8]&&!(p.e[6]>0)&&this.drawBeam(p,r)}this.drawProjs(t),this.drawSpells(t),this.drawBolts(s),this.drawZones(s,r),this.drawMarks(s),this.drawFx(s),this.updateGhost(e&&e.ghost,a),this.inst.end(),this.shadows.end(),this.rings.end(),this.barBg.end(),this.barFg.end(),this.fxRings.end(),this.fxBalls.end(),this.fxDisc.end(),this.sparks.update(s),this.smoke.update(s),this.renderer.render(this.scene,u)}adaptResolution(t){if(this.quality==="ahorro")return;this.fpsAcc+=t,this.fpsN++;let e=performance.now();if(e<this.fpsCheckAt)return;let n=this.fpsAcc/Math.max(1,this.fpsN);this.fpsAcc=0,this.fpsN=0,this.fpsCheckAt=e+2e3;let s=this.quality==="alta"?3:4;n>1/42&&this.dprLevel<s?(this.dprLevel++,this.applyDpr(),this.goodSince=e):n<1/57?(this.goodSince||(this.goodSince=e),e-this.goodSince>12e3&&this.dprLevel>0&&!this.lockedUp&&(this.dprLevel--,this.lockedUp=!0,this.applyDpr())):this.goodSince=e}drawUnit(t,e,n){let{id:s,e:r,key:o,def:a}=t,[,,l,,,c,h,u,f,d]=r,p=l===this.me?"me":"foe",x=this.inst.template(o,p),g=this.units.get(s);g||(g={sk:this.inst.skeleton(x),T:x,key:o,angle:l===0?Z:0,x:t.x,y:t.y,prevDep:h,prevHp:c,hitT:0,spinT:-9,lastAtk:99,punch:0},this.units.set(s,g)),t.u=g,g.x=t.x,g.y=t.y,c<g.prevHp&&(g.hitT=.12),g.prevHp=c,g.hitT>0&&(g.hitT-=e);let m=Ms[o]||1.5,_=x.rig,w=g.sk,v=w.root,M=d&Zn.frozen,T=d&Zn.raged,C=d&Zn.slowed,y=!M&&Math.hypot(t.mx,t.my)>.25,A=0,L=0,U=f?this.pos.get(f):null;if(u<8&&U?(A=U.x-t.x,L=U.y-t.y):y?(A=t.mx,L=t.my):U&&(A=U.x-t.x,L=U.y-t.y),a.building){if(v.rotation.y=l===0?Z:0,_.anim==="ballista"&&U&&!M){let Q=w.p.turret;Q.rotation.y=rc(Q.rotation.y,Math.atan2(A,L)-v.rotation.y,Math.min(1,e*8))}}else(A||L)&&!M&&(g.angle=rc(g.angle,Math.atan2(A,L),Math.min(1,e*9))),v.rotation.y=g.angle;let z=_.lift||0;if(a.jump&&t.y>15-.6&&t.y<17+.6&&y){let Q=Do((t.y-(15-.6))/(2+1.2));z+=Math.sin(Q*Z)*1/m}let X=0;if(h>0){let Q=h/10;X=Q*Q*4}else g.prevDep>0&&(this.puff(t.x,t.y,.1,a.building?10:5,a.building?1.4:.9,14207144,.5,.6),(o==="golem"||o==="giant")&&(this.shake=Math.max(this.shake,.2)));g.prevDep=h,v.position.set(Zt(t.x),z*m+X,Qt(t.y)),v.scale.setScalar(m*(g.hitT>0?1.06:1));let F=T?1.35:C?.65:1;u<g.lastAtk&&u<2&&(g.punch=1-g.punch,_.attack==="spin"&&(g.spinT=n)),g.lastAtk=u;let O=u<4?1-u/4:0,H=f&&u<30&&!y;M||this.animate(w,_,n*F+s*.37,y&&h===0,O,H,h>0,g,n),this.inst.push(x,w,M?Hn.frozen:T?Hn.raged:C?Hn.slowed:Hn.none);let G=Math.max(.42,a.radius*1.15),nt=(a.building?a.radius*1.2:G)/(1+X*.25);this.shadows.add(Zt(t.x),.05,Qt(t.y),nt,nt,1,this.flatQ),a.building||(this.tmpC.set(l===this.me?3900150:15680580),this.rings.add(Zt(t.x),.06,Qt(t.y),G,G,1,this.flatQ,this.tmpC)),T&&Math.random()<e*8&&this.sparks.spawn({x:Zt(t.x)+(Math.random()-.5)*.5,y:.3+Math.random(),z:Qt(t.y)+(Math.random()-.5)*.5,vx:0,vy:1.2,vz:0,life:.6,t:0,size:.18,color:16726634,g:0}),d&Zn.charging&&Math.random()<e*14&&this.smoke.spawn({x:Zt(t.x),y:.15,z:Qt(t.y),vx:Math.random()-.5,vy:.4,vz:Math.random()-.5,life:.5,t:0,size:.35,color:14207144,a:.6,grow:1.4}),d&Zn.stunned&&Math.random()<e*10&&this.sparks.spawn({x:Zt(t.x)+(Math.random()-.5)*.4,y:(_.top||1)*m+.2,z:Qt(t.y),vx:0,vy:.3,vz:0,life:.4,t:0,size:.16,color:16773994,g:0});let J=a.hp;if(c<J||a.building){let Q=((_.lift||0)+(_.top||1))*m+.3+X+(z-(_.lift||0))*m,st=a.building?1.6:Math.max(.75,Math.min(1.5,a.radius*2.2));this.bar(t.x,t.y,Q,st,c/J,l===this.me)}}drawPrediction(t,e,n){let s=this.inst.template(t.key,"me");t.sk||(t.sk=this.inst.skeleton(s));let r=Do(1-(e-t.t0)/1e3),o=Ms[t.key]||1.5,a=s.rig;t.sk.root.position.set(Zt(t.x),(a.lift||0)*o+r*r*4,Qt(t.y)),t.sk.root.rotation.y=this.me===0?Z:0,t.sk.root.scale.setScalar(o),this.animate(t.sk,a,n,!1,0,!1,!0,null,n),this.inst.push(s,t.sk,Hn.none);let l=Xe[t.key],c=Math.max(.42,l.radius*1.15)/(1+r*1.2);this.shadows.add(Zt(t.x),.05,Qt(t.y),c,c,1,this.flatQ)}bar(t,e,n,s,r,o){let a=this.cam.quaternion,l=.15,c=this.tmpV2.set(1,0,0).applyQuaternion(a),h=Zt(t),u=Qt(e);this.barBg.add(h,n,u,s+.08,l+.08,1,a);let f=Math.max(0,Math.min(1,r)),d=-(1-f)*s/2;this.tmpC.set(o?4891647:16734810),this.barFg.add(h+c.x*d,n+c.y*d,u+c.z*d,Math.max(.001,s*f),l,1,a,this.tmpC)}animate(t,e,n,s,r,o,a,l,c){let h=t.p,u=(d,p,x,g)=>{if(!d)return;let m=d.userData.b;d.rotation.set(m[0]+(p||0),m[1]+(x||0),m[2]+(g||0))},f=(d,p)=>{d&&(d.position.y=d.userData.b[4]+p)};switch(e.anim){case"biped":{let d=s?Math.sin(n*(e.heavy?8:11)):0;u(h.legL,d*.75),u(h.legR,-d*.75),u(h.armL,-d*.5),u(h.armR,d*.5),f(h.body,s?Math.abs(Math.sin(n*(e.heavy?8:11)))*.04:Math.sin(n*2.4)*.008),u(h.body,s?.08:0),u(h.head,0,0,s?0:Math.sin(n*1.3)*.04),h.tail&&u(h.tail,Math.sin(n*6)*.15);let p=e.attack;if(o||r>0)switch(p){case"swing":u(h.armR,r>0?Ie(-2.5,-.5,r):-2.3,0,.15),u(h.body,r*.18);break;case"bow":u(h.armL,-1.45,.25),u(h.armR,-1.25+(r>.6?.35:0),0,.5-r*.3);break;case"cast":u(h.armR,r>0?Ie(-2.4,-1.2,r):-2.3,0,.2);break;case"throw":u(h.armR,r>0?Ie(.6,-2.6,Math.min(1,r*1.5)):.5,0,.15);break;case"gun":u(h.armR,-1.5-r*.25,0,.05),u(h.armL,-1.35-r*.2,0,.45),u(h.body,-r*.12);break;case"punch":{let x=l&&l.punch?h.armL:h.armR;u(x,Ie(-.8,-1.7,r)),u(h.body,r*.12);break}case"spin":{let x=l?Do((c-l.spinT)/.45):1;u(h.armR,-1.4,0,1.2),u(h.armL,-1.4,0,-1.2),u(h.body,0,x<1?x*Z*2:0);break}}else p==="gun"&&!s&&(u(h.armR,-.6),u(h.armL,-.5,0,.4));a&&(u(h.armL,-.3,0,-.7),u(h.armR,-.3,0,.7)),h.orb&&h.orb.scale.setScalar(1+Math.sin(n*6)*.12+r*.5),h.gear&&(h.gear.rotation.z=n*3);break}case"golem":{let d=s?Math.sin(n*5.5):0;if(u(h.legL,d*.45),u(h.legR,-d*.45),u(h.armL,-d*.3),u(h.armR,d*.3),u(h.body,0,0,d*.06),f(h.body,s?Math.abs(d)*.05:Math.sin(n*1.5)*.01),o||r>0){let p=r>0?Ie(-2.6,-.5,r):-2.4;u(h.armL,p),u(h.armR,p),u(h.body,r*.2)}break}case"dragon":{let d=Math.sin(n*9);u(h.wingL,0,0,.25+d*.7),u(h.wingR,0,0,-.25-d*.7),f(h.body,Math.sin(n*3)*.08),u(h.head,-r*.6),u(h.tail,0,Math.sin(n*2.5)*.3),u(h.body,s?.12:0);break}case"bat":{let d=Math.sin(n*22);u(h.wingL,0,0,.3+d*.9),u(h.wingR,0,0,-.3-d*.9),f(h.body,Math.sin(n*5)*.06),u(h.body,r*.5);break}case"mount":{let d=s?n*13:0,p=Math.sin(d),x=Math.sin(d+Z),g=s?.7:0;u(h.legFL,p*g),u(h.legBR,p*g),u(h.legFR,x*g),u(h.legBL,x*g),f(h.mbody,s?Math.abs(Math.sin(d))*.06:Math.sin(n*2)*.01),u(h.mbody,s?Math.sin(d*2)*.05:0),h.mtail&&u(h.mtail,0,Math.sin(n*7)*.3),h.mhead&&u(h.mhead,s?Math.sin(d)*.1:Math.sin(n*1.5)*.05),f(h.rbody,s?Math.abs(Math.sin(d))*.05:0);let m=h[e.riderArm||"rarmR"];e.attack==="thrust"?u(m,o||r>0?Ie(-.2,.25,r):s?-.1:0):o||r>0?u(m,r>0?Ie(-2.4,-.5,r):-2.2,0,.2):u(m,s?Math.sin(d)*.2:0);break}case"ballista":h.turret&&(h.turret.position.z=-r*.2);break;case"arcane":h.crystal&&(h.crystal.rotation.y=n*1.5,f(h.crystal,Math.sin(n*2)*.08)),h.ring&&(h.ring.rotation.y=-n*.8,h.ring.rotation.x=Math.sin(n)*.3);break}}drawTower(t,e,n,s,r){let o=this.towers[t],a=e.tw[t]>0;if(a!==o.alive&&(o.alive=a,o.group.visible=a,o.rubble.visible=!a),!a)return;let l=t<3?0:1,c=e.tf&&e.tf[t],h=o.sk,[u,f]=this.towerPos[t],d=r-o.shootT<1200;o.aim&&d&&!c?o.fig=rc(o.fig,Math.atan2(o.aim[0]-u,o.aim[1]-f),Math.min(1,n*10)):c||(o.fig=rc(o.fig,o.baseRot,Math.min(1,n*3)));let p=Math.max(0,1-(r-o.shootT)/350),x=c?Hn.frozen:Hn.none,g=l===0?1:-1;if(o.king){let m=!e.ka[l];h.root.position.set(Zt(u),o.figY,Qt(f)+g*.65),h.root.rotation.y=o.fig,h.root.scale.setScalar(1.55);let _=h.p,w=M=>M.userData.b;_.head.rotation.set(w(_.head)[0]+(m?.3:0),0,m?.45:0),_.armR.rotation.set(m?0:-.5-p*1.2,0,.15),_.body.position.y=w(_.body)[4]+Math.sin(s*(m?1.2:2.4)+t)*.01,this.inst.push(o.T,h,x);let v=o.cannonSk;v.root.position.set(Zt(u),o.figY,Qt(f)-g*.55),v.root.rotation.y=o.fig,v.root.scale.setScalar(1.35),v.p.barrel.position.z=-p*.15,this.inst.push(o.cannonT,v,x)}else h.root.position.set(Zt(u),o.figY,Qt(f)),h.root.rotation.y=o.fig,h.root.scale.setScalar(1.75),c||this.animate(h,o.T.rig,s+t,!1,p,d,!1,null,s),this.inst.push(o.T,h,x)}drawBeam(t,e){let n=this.pos.get(t.e[8]);if(!n||!t.u)return;let s=this.projT("beam");t.u.beamSk||(t.u.beamSk=this.inst.skeleton(s));let r=Math.min(2,t.e[10]||0),o=this.tmpV.set(Zt(t.x),1.95*Ms.arcane,Qt(t.y)),a=this.tmpV2.set(Zt(n.x),n.air?1.8:n.tower?3:.7,Qt(n.y)),l=o.distanceTo(a),c=t.u.beamSk;c.root.position.copy(o),c.root.lookAt(a),c.root.rotateX(Z/2);let h=.06+r*.07+Math.sin(e*40)*.015;c.root.scale.set(h,l,h),this.inst.push(s,c,Sv[r]),Math.random()<.5&&this.sparks.spawn({x:a.x,y:a.y,z:a.z,vx:(Math.random()-.5)*2,vy:Math.random()*2,vz:(Math.random()-.5)*2,life:.3,t:0,size:.14+r*.05,color:r===2?16738922:14268671,g:4})}drawProjs(t){this.projs=this.projs.filter(e=>{if(t<e.start)return!0;let n=Math.min(1,(t-e.start)*Re/e.dur),s=this.pos.get(e.tid);s&&(e.tx=s.x,e.ty=s.y,e.ta=s.air?1:0,e.tt=s.tower);let r=e.tt?2.6:e.ta?1.9:.6;if(n>=1)return["fire","breath","bomb","necro","ice"].includes(e.p)||this.burst(e.tx,e.ty,r,4,[16777215,16769162],1.5,.2,.1),!1;let o=Math.hypot(e.tx-e.fx,e.ty-e.fy),a=(Av[e.p]??.08)*o,l=Math.min(1,n+.04),c=Ie(e.fx,e.tx,n),h=Ie(e.fy,e.ty,n),u=Ie(e.h0,r,n)+Math.sin(n*Z)*a,f=Ie(e.fx,e.tx,l),d=Ie(e.fy,e.ty,l),p=Ie(e.h0,r,l)+Math.sin(l*Z)*a;e.sk||(e.sk=this.inst.skeleton(e.T));let x=e.sk.root;if(x.position.set(Zt(c),u,Qt(h)),this.tmpV.set(Zt(f),p,Qt(d)),this.tmpV.distanceToSquared(x.position)>1e-6&&x.lookAt(this.tmpV),x.scale.setScalar(e.p==="breath"?1.3:1),this.inst.push(e.T,e.sk,Hn.none),(e.p==="fire"||e.p==="breath"||e.p==="necro"||e.p==="ice"||e.p==="bomb")&&Math.random()<.7){let g=e.p==="necro"?8257386:e.p==="ice"?12577535:e.p==="bomb"?16765806:16752704;this.sparks.spawn({x:Zt(c),y:u,z:Qt(h),vx:(Math.random()-.5)*.6,vy:.3,vz:(Math.random()-.5)*.6,life:.35,t:0,size:.2,color:g,g:0})}return!0})}drawSpells(t){this.spells=this.spells.filter(e=>{if(t<e.start)return!0;let n=(t-e.start)*Re/Math.max(.05,e.dur);if(n>=1)return!1;if(e.kind==="fireball"){let s=this.projT("meteor");e.sk||(e.sk=this.inst.skeleton(s));let r=u=>Ie(3.6,.4,u)+Math.sin(u*Z)*3.6,o=Ie(e.fx,e.x,n),a=Ie(e.fy,e.y,n),l=r(n),c=Math.min(1,n+.05),h=e.sk.root;h.position.set(Zt(o),l,Qt(a)),this.tmpV.set(Zt(Ie(e.fx,e.x,c)),r(c),Qt(Ie(e.fy,e.y,c))),h.lookAt(this.tmpV),h.scale.setScalar(.85),this.inst.push(s,e.sk,Hn.none),this.shadows.add(Zt(o),.05,Qt(a),.4+n*.8,.4+n*.8,1,this.flatQ);for(let u=0;u<2;u++)this.sparks.spawn({x:Zt(o),y:l,z:Qt(a),vx:(Math.random()-.5)*1.2,vy:.5,vz:(Math.random()-.5)*1.2,life:.45,t:0,size:.35+Math.random()*.2,color:[16751150,16765806][u],g:0});Math.random()<.5&&this.smoke.spawn({x:Zt(o),y:l,z:Qt(a),vx:0,vy:.4,vz:0,life:.7,t:0,size:.5,color:5592405,a:.5,grow:1.5})}else if(e.kind==="arrows"){let s=this.projT("arrow");if(!e.list){e.list=[];for(let o=0;o<26;o++){let a=Math.random()*Z*2,l=Math.sqrt(Math.random())*3.6;e.list.push({ox:Math.cos(a)*l,oy:Math.sin(a)*l,delay:Math.random()*.25,sk:this.inst.skeleton(s)})}}let r=o=>Ie(3.5,.2,o)+Math.sin(o*Z)*5;for(let o of e.list){let a=Do((n-o.delay)/(1-o.delay));if(a<=0)continue;let l=e.x+o.ox,c=e.y+o.oy,h=Math.min(1,a+.04),u=o.sk.root;u.position.set(Zt(Ie(e.fx,l,a)),r(a),Qt(Ie(e.fy,c,a))),this.tmpV.set(Zt(Ie(e.fx,l,h)),r(h),Qt(Ie(e.fy,c,h))),u.lookAt(this.tmpV),u.scale.setScalar(1.2),this.inst.push(s,o.sk,Hn.none)}}return!0})}drawBolts(t){if(!this.bolts.length)return;let e=this.projT("boltSeg");this.bolts=this.bolts.filter(n=>(n.t+=t,n.t>=n.dur?!1:(Math.random()<.2||(n.sks||(n.sks=n.segs.map(()=>this.inst.skeleton(e))),n.segs.forEach(([s,r,o,a,l,c],h)=>{let u=n.sks[h],f=this.tmpV.set(Zt(s),o,Qt(r)),d=this.tmpV2.set(Zt(a),c,Qt(l)),p=f.distanceTo(d);u.root.position.set((f.x+d.x)/2,(f.y+d.y)/2,(f.z+d.z)/2),u.root.lookAt(d);let x=.14*(1-n.t/n.dur)+.04;u.root.scale.set(x,x,p),this.inst.push(e,u,Hn.none)})),!0)))}drawZones(t,e){this.zonesFx=this.zonesFx.filter(n=>{if(n.t+=t,n.t>=n.dur)return!1;let s=Math.min(1,(n.dur-n.t)/.5);if(n.kind==="rage"){let r=.7+Math.sin(e*6)*.15;if(this.tmpC.setRGB(.9*s*r,.15*s*r,.45*s*r),this.fxRings.add(Zt(n.x),.11,Qt(n.y),n.r,n.r,1,this.flatQ,this.tmpC),this.tmpC.setRGB(.35*s,.04*s,.15*s),this.fxDisc.add(Zt(n.x),.07,Qt(n.y),n.r,n.r,1,this.flatQ,this.tmpC),Math.random()<t*30){let o=Math.random()*Z*2,a=Math.random()*n.r;this.sparks.spawn({x:Zt(n.x)+Math.cos(o)*a,y:.1,z:Qt(n.y)+Math.sin(o)*a,vx:0,vy:1.5+Math.random(),vz:0,life:.8,t:0,size:.22,color:Math.random()<.5?16726634:12602879,g:0})}}else if(n.kind==="ice"){this.tmpC.setRGB(.25*s,.45*s,.6*s),this.fxDisc.add(Zt(n.x),.07,Qt(n.y),n.r,n.r,1,this.flatQ,this.tmpC);let r=this.projT("iceSpike");if(!n.spikes){n.spikes=[];for(let a=0;a<14;a++){let l=a/14*Z*2+Math.random()*.3,c=n.r*(.4+Math.random()*.6);n.spikes.push({x:n.x+Math.cos(l)*c,y:n.y+Math.sin(l)*c,s:.6+Math.random()*.7,rot:Math.random()*6,tilt:(Math.random()-.5)*.6,sk:this.inst.skeleton(r)})}}let o=Math.min(1,n.t/.2)*s;for(let a of n.spikes)a.sk.root.position.set(Zt(a.x),0,Qt(a.y)),a.sk.root.rotation.set(a.tilt,a.rot,0),a.sk.root.scale.setScalar(Math.max(.001,a.s*o)),this.inst.push(r,a.sk,Hn.none);if(Math.random()<t*12){let a=Math.random()*Z*2,l=Math.random()*n.r;this.sparks.spawn({x:Zt(n.x)+Math.cos(a)*l,y:1.5,z:Qt(n.y)+Math.sin(a)*l,vx:0,vy:-.6,vz:0,life:1,t:0,size:.14,color:16777215,g:0})}}return!0})}drawMarks(t){this.marks=this.marks.filter(e=>{if(e.t+=t,e.t>=e.max)return!1;let n=1-e.t/e.max,s=.6+Math.sin(e.t*14)*.25;return this.tmpC.setRGB((e.mine?.4:.9)*n*s,(e.mine?.65:.4)*n*s,(e.mine?1:.4)*n*s),this.fxRings.add(Zt(e.x),.12,Qt(e.y),e.r,e.r,1,this.flatQ,this.tmpC),!0})}drawFx(t){this.fx=this.fx.filter(e=>{e.t+=t;let n=e.t/e.dur;if(n>=1)return!1;let s=Ie(e.r0,e.r1,1-Math.pow(1-n,2.2));return this.tmpC.copy(e.c).multiplyScalar(e.op*(1-n)),e.kind==="ring"?this.fxRings.add(Zt(e.x),e.h,Qt(e.y),s,s,1,this.flatQ,this.tmpC):e.kind==="ball"?this.fxBalls.add(Zt(e.x),e.h,Qt(e.y),s,s,s,null,this.tmpC):this.fxDisc.add(Zt(e.x),e.h,Qt(e.y),s,s,1,this.flatQ,this.tmpC),!0})}updateGhost(t,e){for(let c of this.zones)c.visible=!1;this.lineMesh.visible=this.tile.visible=this.range.visible=this.spellArea.visible=!1;for(let c of this.ghostPool.values())c.sk.root.visible=!1;if(!t||!e)return;let n=Ht[t.card];if(n.type==="spell"){let c=n.spell.radius;this.spellArea.visible=this.range.visible=!0,this.spellArea.position.set(Zt(t.x),.09,Qt(t.y)),this.spellArea.scale.setScalar(c),this.range.position.set(Zt(t.x),.1,Qt(t.y)),this.range.scale.setScalar(c),this.rangeMat.color.set(16769184);return}let s=this.me,r=1-s,o=[];for(let c=0;c<2;c++){let h=c===0?0:Je,u=!1;if(n.type!=="building")for(let f=0;f<2;f++){let d=r*3+f,[p]=this.towerPos[d];(p<Je?0:1)===c&&e.tw[d]<=0&&(u=!0)}s===0?u?(o.push([h,0,Je,11]),o.push([h,15,Je,2])):o.push([h,0,Je,17]):u?(o.push([h,21,Je,11]),o.push([h,15,Je,2])):o.push([h,15,Je,17])}o.forEach(([c,h,u,f],d)=>{let p=this.zones[d];p.visible=!0,p.position.set(Zt(c+u/2),.06,Qt(h+f/2)),p.scale.set(u,f,1)}),this.lineMesh.visible=!0,this.lineMesh.position.set(0,.07,Qt(s===0?17:15)),this.tile.visible=!0,this.tile.position.set(Zt(t.x),.08,Qt(t.y)),this.tileMat.color.set(t.valid?16777215:16724016);let a=Xe[n.unit];(a.proj||a.building||a.ramp)&&(this.range.visible=!0,this.range.position.set(Zt(t.x),.1,Qt(t.y)),this.range.scale.setScalar(Math.max(1,(a.range||0)+a.radius)),this.rangeMat.color.set(16777215));let l=s===0?1:-1;this.ghostMat.color.set(t.valid?16777215:16736352),Cs(n.count||1).forEach(([c,h],u)=>{let f=this.ghostRig(n.unit,u);f.sk.root.visible=!0,f.sk.root.position.set(Zt(t.x+c*l),(f.rig.lift||0)*(Ms[n.unit]||1.5),Qt(t.y+h*l)),f.sk.root.rotation.y=s===0?Z:0})}}});Oi();kr();Oi();kr();var Gu=[{react:1.9,push:10,jitter:1.8,smart:0,ignoreSmall:0,bonus:0},{react:1,push:8.5,jitter:.6,smart:1,ignoreSmall:300,bonus:0},{react:.45,push:7.5,jitter:.2,smart:2,ignoreSmall:380,bonus:.2}],Fr=(...i)=>i.map(t=>vc[t]),Hu=[Fr("knight","archers","goblins","skeletons","giant","fireball","arrows","ballista"),Fr("knight","arquebusier","bats","wolfrider","pyromancer","fireball","arrows","crypt"),Fr("golem","necromancer","draco","berserker","frost","lightning","arrows","rage"),Fr("lancer","automaton","legion","grenadier","archers","freeze","fireball","arcane"),Fr("giant","barbarians","draco","goblins","arquebusier","lightning","arrows","crypt")],Nn=Ht.map(i=>{if(i.type==="spell")return{spell:i.spell.kind,cost:i.cost};let t=Xe[i.unit],e=i.count||1,n=t.hp*e,s=t.dmg/t.hitSpeed*e*(t.ramp?6:1);return{cost:i.cost,n:e,u:t,hpTotal:n,dps:s,air:!!t.air,hitsAir:t.targets==="both",building:!!t.building,winCon:t.targets==="buildings",tank:n>=1800,swarm:e>=3,splash:!!(t.splash||t.spin),ranged:(t.range||0)>=3,spawner:!!t.spawn&&!!t.building}}),Wo=class{constructor(t,e=1,n=1){this.g=t,this.p=e,this.L=Gu[n]||Gu[1],this.cool=2.5+Math.random()}rel(t,e){return bi(this.p,t,e)}tryPlay(t,e,n){let s=this.g,r=this.p,o=s.hand(r).indexOf(t);if(o<0||s.elixir[r]<Ht[t].cost)return!1;let a=Ht[t].type==="spell",l=a?0:this.L.jitter;for(let c=0;c<6;c++){let h=e+(Math.random()-.5)*l*2,u=n+(Math.random()-.5)*l;a||(h=Math.min(18-.6,Math.max(.6,h)),u=Math.min(32-.6,Math.max(17.6,u)));let[f,d]=this.rel(h,u);if(s.play(r,o,t,f,d))return!0}return!1}update(t){let e=this.g;if(e.phase!=="over"){if(this.L.bonus){let n=e.phase==="normal"?1:e.phase==="double"?2:3;e.elixir[this.p]=Math.min(Bo,e.elixir[this.p]+Es*n*this.L.bonus*t)}this.cool-=t,!(this.cool>0)&&(this.cool=this.L.react*(.6+Math.random()*.8),this.think())}}think(){let t=this.g,e=this.p,n=this.L,s=t.elixir[e],r=t.hand(e),o=(d,p=0)=>r.includes(d)&&s>=Ht[d].cost+p,a=r.filter(d=>s>=Ht[d].cost),l=[],c=[];for(let d of t.entities){if(d.kind==="tower"||d.hp<=0)continue;let[p,x]=this.rel(d.x,d.y);(d.owner===e?c:l).push({e:d,x:p,y:x})}let h=d=>d.def?(Ht.find(p=>p.unit===d.def.key)||{cost:2}).cost/Math.max(1,(Ht.find(p=>p.unit===d.def.key)||{count:1}).count):1;if(n.smart>=1)for(let d of a){let p=Nn[d];if(!p.spell)continue;let x=Ht[d].spell;if(p.spell==="fireball"||p.spell==="arrows"||p.spell==="lightning"){let g=null,m=0;for(let w of l){let v=0,M=l.filter(T=>Math.hypot(w.x-T.x,w.y-T.y)<=x.radius*.9);if(p.spell==="lightning"){M.sort((T,C)=>C.e.hp-T.e.hp);for(let T of M.slice(0,3))v+=Math.min(h(T.e)*1.3,T.e.hp/250)}else for(let T of M)v+=Math.min(h(T.e),T.e.hp/(x.dmg*.6))*(T.e.hp<=x.dmg?1.2:.7);v>m&&(m=v,g=w)}let _=Ht[d].cost+(n.smart>=2?.5:1.5);if(g&&m>=_){let w=g.e.speed&&!g.e.inRange?.7:0;if(this.tryPlay(d,g.x,g.y-w))return}if(n.smart>=2&&x.dmg){for(let w of t.towers[1-e])if(w.hp>0&&w.hp<=x.dmg*x.towerMult){let[v,M]=this.rel(w.x,w.y);if(this.tryPlay(d,v,M))return}}}else if(p.spell==="freeze"){let g=c.filter(w=>w.y<10.5&&!(w.e.deploy>0)),m=g.reduce((w,v)=>w+v.e.hp,0);if(g.length&&m>=1e3){let w=g.sort((v,M)=>v.y-M.y)[0];if(this.tryPlay(d,w.x,w.y-1.2))return}let _=l.filter(w=>w.y>20);if(_.reduce((w,v)=>w+v.e.hp,0)>=2500&&_.length>=2){let w=_.reduce((M,T)=>M+T.x,0)/_.length,v=_.reduce((M,T)=>M+T.y,0)/_.length;if(this.tryPlay(d,w,v))return}}else if(p.spell==="rage"){let g=c.filter(_=>_.y<19&&!(_.e.deploy>0)&&_.e.kind==="unit"),m=g.reduce((_,w)=>_+w.e.hp,0);if(g.length>=2&&m>=1500){let _=g.reduce((v,M)=>v+M.x,0)/g.length,w=g.reduce((v,M)=>v+M.y,0)/g.length-1;if(this.tryPlay(d,_,w))return}}}let u=l.filter(d=>d.y>13.5).sort((d,p)=>p.y-d.y);if(u.length){if(u.reduce((T,C)=>T+C.e.hp,0)<n.ignoreSmall&&s<8)return;let p=u[0],x=u.some(T=>T.e.air),g=u.every(T=>T.e.air),m=u.some(T=>T.e.hp>=1800),_=u.some(T=>T.e.targets==="buildings"),w=u.length>=3,v=-1,M=-1e9;for(let T of a){let C=Nn[T];if(C.spell||g&&!C.hitsAir)continue;let y=10-C.cost*1.2;n.smart===0?y=Math.random()*10:(x&&C.hitsAir&&(y+=6),w&&C.splash&&(y+=6),w&&C.n===1&&!C.splash&&C.hpTotal<1200&&(y-=4),m&&(C.dps>250||C.swarm)&&(y+=5),_&&C.building&&(y+=6),_&&C.swarm&&(y+=3),C.winCon&&(y-=8),C.spawner&&(y-=2)),y>M&&(M=y,v=T)}if(v>=0){let T=Nn[v],C=p.x<18/2?3.5:14.5,y,A;if(T.building?(y=18/2+(C<9?-1:1),A=21.5):T.winCon?(y=C,A=29):T.ranged?(y=C+(C<9?1.5:-1.5),A=Math.min(28.5,Math.max(p.y,18)+3.5)):(y=n.smart>=2?p.x+(18/2-p.x)*.25:p.x,A=Math.max(17.6,Math.min(28.5,p.y+(n.smart>=2?2.5:1.5)))),this.tryPlay(v,y,A))return}if(n.smart>=1)return}let f=c.find(d=>Nn[Ht.findIndex(p=>p.unit===d.e.def?.key)]?.tank||d.e.targets==="buildings");if(n.smart>=1&&f&&!(f.e.deploy>0)){let d=f.x<18/2?3.5:14.5,p=n.smart>=2?0:1,x=a.filter(g=>{let m=Nn[g];return!m.spell&&!m.winCon&&!m.building&&(m.ranged||m.splash||m.swarm)});for(let g of x){if(!o(g,p))continue;let m=Ht[g].unit;if(!c.some(_=>_.e.def&&_.e.def.key===m)&&this.tryPlay(g,d,Math.max(18,f.y+2.5)))return}}if(n.smart>=1&&s>=7.5&&!c.some(d=>d.e.kind==="building")){let d=a.find(p=>Nn[p].spawner);if(d!==void 0&&this.tryPlay(d,18/2+(Math.random()<.5?-2:2),23))return}if(s>=n.push){let p=t.towers[1-e].slice(0,2).map(w=>({x:this.rel(w.x,w.y)[0],hp:w.hp>0?w.hp:9e9}));p.sort((w,v)=>w.hp-v.hp);let g=(Math.random()<.75?p[0]:p[1]).x<18/2?3.5:14.5,m=a.filter(w=>Nn[w].winCon).sort((w,v)=>Ht[v].cost-Ht[w].cost);for(let w of m){if(Ht[w].cost>=6&&s<(n.smart>=2?8.5:9.8))continue;let M=Nn[w].u.speed>=2;if(this.tryPlay(w,g,M?17.6:30))return}let _=a.filter(w=>{let v=Nn[w];return!v.spell&&!v.building});if(_.length){let w=_[Math.floor(Math.random()*_.length)];if(this.tryPlay(w,g,Nn[w].ranged?19.5:17.6))return}}if(s>=9.8){let d=a.filter(p=>!Nn[p].spell).sort((p,x)=>Ht[p].cost-Ht[x].cost)[0];d!==void 0&&this.tryPlay(d,Math.random()<.5?6:12,Nn[d].building?22:29)}}};Oi();kr();var o0={fireball:"\u2604\uFE0F",arrows:"\u{1F3F9}",lightning:"\u26A1",freeze:"\u2744\uFE0F",rage:"\u{1F4EF}"},a0=ki.map(i=>({unit:Xe[i],icon:Xe[i].icon,type:Xe[i].building?"building":"troop",count:1})),wc=i=>{let t=Ht[i];return t.type==="spell"?{...t,icon:o0[t.spell.kind]||"\u2728"}:{...t,unit:Xe[t.unit],icon:Xe[t.unit].icon}},l0='"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',yn={me:{main:"#3b82f6",light:"#7cb4ff",dark:"#1e4fb5",bar:"#4aa3ff"},foe:{main:"#ef4444",light:"#ff8a8a",dark:"#a61e1e",bar:"#ff5a5a"}},Wu=new Map;function Rs(i,t){t=Math.max(8,Math.round(t));let e=i+"|"+t,n=Wu.get(e);if(n)return n;n=document.createElement("canvas");let s=Math.ceil(t*1.35);n.width=n.height=s;let r=n.getContext("2d");return r.textAlign="center",r.textBaseline="middle",r.font=`${t}px ${l0}`,r.fillText(i,s/2,s/2+t*.06),Wu.set(e,n),n}function Xu(i){return()=>(i=i*16807%2147483647,(i-1)/2147483646)}var Bi=(i,t,e)=>i+(t-i)*e,Tc=i=>Math.max(.5,i.unit.radius*1.28),Xo=class{constructor(t,e,n){this.cv=t,this.ctx=t.getContext("2d"),this.me=e,this.flip=e===1,this.onEvent=n||(()=>{}),this.frames=[],this.queue=[],this.parts=[],this.rings=[],this.projs=[],this.spells=[],this.marks=[],this.texts=[],this.bubbles=[],this.pos=new Map,this.shake=0,this.lastNow=performance.now(),this.towerPos=[];for(let s of[0,1])xn.forEach(r=>this.towerPos.push(bi(s,r.x,r.y)));this.resize()}reset(t){this.me=t,this.flip=t===1,this.frames=[],this.queue=[],this.parts=[],this.rings=[],this.projs=[],this.spells=[],this.marks=[],this.texts=[],this.bubbles=[],this.pos.clear(),this.shake=0,this.buildBg()}resize(){let t=this.cv.parentElement.getBoundingClientRect(),e=Math.min(window.devicePixelRatio||1,2.5);this.dpr=e,this.cssW=Math.max(100,t.width),this.cssH=Math.max(100,t.height),this.cv.width=Math.round(this.cssW*e),this.cv.height=Math.round(this.cssH*e),this.cv.style.width=this.cssW+"px",this.cv.style.height=this.cssH+"px";let n=Math.min(this.cssW/18,this.cssH/32);this.S=n,this.ox=(this.cssW-18*n)/2,this.oy=(this.cssH-32*n)/2,this.buildBg()}toScreen(t,e){let n=this.flip?18-t:t,s=this.flip?32-e:e;return[this.ox+n*this.S,this.oy+s*this.S]}toWorld(t,e){let n=(t-this.ox)/this.S,s=(e-this.oy)/this.S;return this.flip?[18-n,32-s]:[n,s]}inArena(t,e){return t>=this.ox&&t<=this.ox+18*this.S&&e>=this.oy&&e<=this.oy+32*this.S}buildBg(){let t=this.S,e=this.dpr,n=document.createElement("canvas");n.width=Math.ceil(18*t*e),n.height=Math.ceil(32*t*e);let s=n.getContext("2d");s.scale(e,e);for(let c=0;c<32;c++)for(let h=0;h<18;h++)s.fillStyle=(h+c)%2?"#62b347":"#6abb4e",s.fillRect(h*t,c*t,t+.5,t+.5);let r=s.createLinearGradient(0,0,0,32*t);r.addColorStop(0,"rgba(120,0,0,0.07)"),r.addColorStop(.47,"rgba(0,0,0,0)"),r.addColorStop(.53,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,40,160,0.06)"),s.fillStyle=r,s.fillRect(0,0,18*t,32*t);let o=(c,h,u,f)=>{s.fillStyle="#d9c28d",as(s,c*t,h*t,(u-c)*t,(f-h)*t,t*.6),s.fill(),s.strokeStyle="rgba(120,90,40,0.25)",s.lineWidth=Math.max(1,t*.06),s.stroke()};for(let c of dn)o(c-.85,5.2,c+.85,15+.2),o(c-.85,17-.2,c+.85,26.8);o(3.2,27.9,14.8,30),o(3.2,2,14.8,4.1),o(2.65,25.6,4.35,29.5),o(13.65,25.6,15.35,29.5),o(2.65,2.5,4.35,6.4),o(13.65,2.5,15.35,6.4);let a=Xu(7);for(let c=0;c<70;c++){let h=a()*18,u=a()*32;if(u>15-.6&&u<17+.6||dn.some(d=>Math.abs(h-d)<1.4)||Math.abs(h-9)<6.2&&(u<5||u>27))continue;let f=a();if(f<.55){s.fillStyle=["#f6e05e","#ffffff","#f687b3","#c3a6ff"][Math.floor(a()*4)];for(let d=0;d<4;d++)s.beginPath(),s.arc(h*t+Math.cos(d*1.57)*t*.07,u*t+Math.sin(d*1.57)*t*.07,t*.06,0,7),s.fill()}else if(f<.8){s.fillStyle="rgba(40,90,30,0.55)";for(let d=0;d<3;d++)s.fillRect(h*t+d*t*.09,u*t-t*.18+d%2*t*.05,t*.04,t*.2)}else s.fillStyle="#9aa0a6",s.beginPath(),s.ellipse(h*t,u*t,t*.16,t*.11,0,0,7),s.fill(),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.ellipse(h*t-t*.04,u*t-t*.03,t*.06,t*.04,0,0,7),s.fill()}let l=s.createLinearGradient(0,15*t,0,17*t);l.addColorStop(0,"#2f86c9"),l.addColorStop(.5,"#47a7e6"),l.addColorStop(1,"#2f86c9"),s.fillStyle=l,s.fillRect(0,15*t,18*t,2*t),s.fillStyle="#4a8a3a",s.fillRect(0,15*t-t*.12,18*t,t*.14),s.fillRect(0,17*t-t*.02,18*t,t*.14),s.fillStyle="rgba(255,255,255,0.18)",s.fillRect(0,15*t+t*.02,18*t,t*.08);for(let c of dn){let h=(c-Ln-.15)*t,u=(Ln*2+.3)*t,f=(15-.45)*t,d=(2+.9)*t;s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(h+t*.12,f+t*.15,u,d),s.fillStyle="#b07d45",s.fillRect(h,f,u,d),s.strokeStyle="#7a5228",s.lineWidth=Math.max(1,t*.06);for(let p=f+t*.38;p<f+d;p+=t*.38)s.beginPath(),s.moveTo(h,p),s.lineTo(h+u,p),s.stroke();s.fillStyle="#6b4520",s.fillRect(h-t*.08,f,t*.16,d),s.fillRect(h+u-t*.08,f,t*.16,d)}this.bg=n}pushFrame(t){let e=new Map;for(let r of t.e)e.set(r[0],r);let n={k:t.k,ents:e,tw:t.tw,ka:t.ka},s=this.frames;if(t.ev)for(let r of t.ev)this.queue.push(r);s.length&&s[s.length-1].k>=n.k||(s.push(n),s.length>60&&s.shift())}latest(){return this.frames[this.frames.length-1]}predict(t,e,n){this.addLocalDeploy(t,e,n)}pushEvents(t){for(let e of t)this.queue.push(e)}warm(){}setQuality(){}screenOfTower(t){let[e,n]=this.towerPos[t],[s,r]=this.toScreen(e,n);return[s,r-this.S*2]}addLocalDeploy(t,e,n){this.marks.push({x:e,y:n,card:t,t:0,max:.8,local:!0,owner:this.me})}emote(t,e){this.bubbles.push({owner:t,ch:e,t:0,max:2.6})}trigger(t){let e=this.S;switch(t.t){case"deploy":{Ht[t.c].type==="spell"?this.marks.push({x:t.x,y:t.y,card:t.c,t:0,max:1.2,spell:!0,owner:t.o}):this.rings.push({x:t.x,y:t.y,r0:.3,r1:1.4,t:0,max:.45,color:t.o===this.me?"#9cc8ff":"#ffb0b0",w:.12});break}case"proj":this.projs.push({...t,start:t.k});break;case"hit":this.burst(t.x,t.y,6,["#ffffff","#ffe08a"],2.5,.25,.07,t.a?.6:0);break;case"splash":{let n=t.p==="fire"?["#ffb347","#ff6a00","#ffd27a"]:["#c79bff","#8b5cf6","#ffffff"];this.rings.push({x:t.x,y:t.y,r0:.2,r1:t.r,t:0,max:.3,color:n[0],w:.15}),this.burst(t.x,t.y,10,n,3,.35,.09,0);break}case"spell":this.spells.push({...t,start:t.k});break;case"boom":this.rings.push({x:t.x,y:t.y,r0:.4,r1:t.r,t:0,max:.45,color:"#ffcc66",w:.35}),this.rings.push({x:t.x,y:t.y,r0:.2,r1:t.r*.7,t:0,max:.6,color:"#ff6a00",w:.6,fill:!0}),this.burst(t.x,t.y,34,["#ff6a00","#ffb347","#ffe08a","#7a3b12"],6,.7,.14,0),this.smoke(t.x,t.y,10,1.6),this.shake=Math.max(this.shake,.5),this.marks=this.marks.filter(n=>!(n.spell&&Math.hypot(n.x-t.x,n.y-t.y)<.2));break;case"death":this.smoke(t.x,t.y,7,.7,t.a?.6:0),this.burst(t.x,t.y,6,[t.o===this.me?yn.me.light:yn.foe.light,"#ffffff"],2.5,.4,.08,t.a?.6:0);break;case"tower":{this.burst(t.x,t.y,50,["#9a948a","#c7c1b6","#6e695f","#ffb347","#ff6a00"],8,1,.2,0),this.smoke(t.x,t.y,18,2.5),this.rings.push({x:t.x,y:t.y,r0:.5,r1:4,t:0,max:.6,color:"#fff3c4",w:.4}),this.shake=Math.max(this.shake,1.1);let[n,s]=this.toScreen(t.x,t.y);this.texts.push({sx:n,sy:s,txt:"\u{1F451}",t:0,max:1.6,big:!0});break}case"king":{let[n,s]=this.towerPos[t.o*3+2],[r,o]=this.toScreen(n,s);this.texts.push({sx:r,sy:o-e*2.2,txt:"\u2757",t:0,max:1.2});break}}this.onEvent(t)}burst(t,e,n,s,r,o,a,l){for(let c=0;c<n;c++){let h=Math.random()*Math.PI*2,u=r*(.3+Math.random()*.7);this.parts.push({x:t,y:e,z:l||0,vx:Math.cos(h)*u,vy:Math.sin(h)*u,vz:2+Math.random()*3,life:o*(.6+Math.random()*.6),t:0,size:a*(.6+Math.random()*.8),color:s[c%s.length],grav:9})}}smoke(t,e,n,s,r){for(let o=0;o<n;o++){let a=Math.random()*Math.PI*2,l=s*Math.random();this.parts.push({x:t+Math.cos(a)*.2,y:e+Math.sin(a)*.2,z:r||0,vx:Math.cos(a)*l,vy:Math.sin(a)*l,vz:.6,life:.7+Math.random()*.5,t:0,size:.25+Math.random()*.3,color:"smoke",grav:0,grow:.9})}}render(t,e){let n=performance.now(),s=Math.min(.05,(n-this.lastNow)/1e3);this.lastNow=n;let r=this.ctx,o=this.S;if(this.queue.length){let _=[];for(let w of this.queue)w.k<=t+.01?this.trigger(w):_.push(w);this.queue=_}let a=this.frames,l=null,c=null;for(let _=a.length-1;_>=0;_--)if(a[_].k<=t){l=a[_],c=a[_+1]||null;break}l||(l=a[0]);let h=l&&c?Math.min(1,Math.max(0,(t-l.k)/(c.k-l.k))):0,u=c&&h>.5?c:l;r.setTransform(this.dpr,0,0,this.dpr,0,0),r.fillStyle="#1d3a22",r.fillRect(0,0,this.cssW,this.cssH);let f=0,d=0;if(this.shake>0&&(f=(Math.random()-.5)*this.shake*o*.5,d=(Math.random()-.5)*this.shake*o*.5,this.shake=Math.max(0,this.shake-s*2.5)),r.translate(f,d),r.drawImage(this.bg,this.ox,this.oy,18*o,32*o),this.drawRiver(n),!l){r.setTransform(1,0,0,1,0,0);return}let p=this.pos,x=new Set,g=[];for(let[_,w]of u===c?c.ents:l.ents){let v=l.ents.get(_),M=c?c.ents.get(_):null,T,C,y=0;if(v&&M)T=Bi(v[3],M[3],h)/20,C=Bi(v[4],M[4],h)/20,y=Math.hypot(M[3]-v[3],M[4]-v[4]);else{let U=M||v;T=U[3]/20,C=U[4]/20}let A=a0[w[1]],L=!!(A.unit&&A.unit.air);p.set(_,{x:T,y:C,air:L}),x.add(_),g.push({e:w,x:T,y:C,card:A,air:L,moving:y})}for(let _ of p.keys())_>6&&!x.has(_)&&p.delete(_);for(let _=0;_<6;_++){let[w,v]=this.towerPos[_];p.set(_+1,{x:w,y:v,air:!1})}e&&e.ghost&&this.drawZones(e.ghost,l);for(let _ of this.marks)this.drawMark(_,s);this.marks=this.marks.filter(_=>_.t<_.max);let m=[];for(let _=0;_<6;_++){let[w,v]=this.towerPos[_],[,M]=this.toScreen(w,v);m.push({z:M+o*.8,f:()=>this.drawTower(_,l,u)})}for(let _ of g){let[,w]=this.toScreen(_.x,_.y);m.push({z:w+(_.air?1e4:0),f:()=>this.drawUnit(_,n)})}m.sort((_,w)=>_.z-w.z);for(let _ of m)_.f();this.projs=this.projs.filter(_=>this.drawProj(_,t)),this.spells=this.spells.filter(_=>this.drawSpell(_,t)),this.drawRings(s),this.drawParts(s);for(let _=0;_<6;_++)this.drawTowerBar(_,u);e&&e.ghost&&this.drawGhost(e.ghost),this.drawBubbles(s),this.drawTexts(s),r.setTransform(1,0,0,1,0,0)}drawRiver(t){let e=this.ctx,n=this.S,[,s]=this.toScreen(0,this.flip?17:15),r=2*n;e.save(),e.beginPath(),e.rect(this.ox,s,18*n,r),e.clip(),e.strokeStyle="rgba(255,255,255,0.28)",e.lineWidth=Math.max(1,n*.07);let o=t/1e3;for(let a=0;a<3;a++){let l=s+r*(.25+a*.25);e.beginPath();for(let c=-2;c<20;c+=2.2){let h=this.ox+(c+o*(.6+a*.25)+a*.7)%(18+2.2)*n;e.moveTo(h,l),e.quadraticCurveTo(h+n*.35,l-n*.12,h+n*.7,l)}e.stroke()}e.restore();for(let a of dn){let[l]=this.toScreen(a,16),c=l-(Ln+.15)*n,h=(Ln*2+.3)*n;e.drawImage(this.bg,(c-this.ox)*this.dpr,(s-this.oy-n*.45)*this.dpr,h*this.dpr,(r+n*.9)*this.dpr,c,s-n*.45,h,r+n*.9)}}drawZones(t,e){let n=wc(t.card);if(n.type==="spell")return;let s=this.ctx,r=this.S;s.fillStyle="rgba(230,40,40,0.22)";let o=1-this.me,a=[],l=[!1,!1];if(n.type!=="building")for(let c=0;c<2;c++){let h=o*3+c;if(e.tw[h]<=0){let[u]=this.towerPos[h],f=this.flip?18-u:u;l[f<18/2?0:1]=!0}}for(let c=0;c<2;c++){let h=c===0?0:18/2;l[c]?(a.push([h,0,18/2,11]),a.push([h,15,18/2,2])):a.push([h,0,18/2,17])}for(let[c,h,u,f]of a)s.fillRect(this.ox+c*r,this.oy+h*r,u*r,f*r);s.strokeStyle="rgba(255,255,255,0.5)",s.setLineDash([r*.3,r*.25]),s.lineWidth=2,s.beginPath(),s.moveTo(this.ox,this.oy+17*r),s.lineTo(this.ox+18*r,this.oy+17*r),s.stroke(),s.setLineDash([])}drawGhost(t){let e=this.ctx,n=this.S,s=wc(t.card),[r,o]=this.toScreen(t.x,t.y);if(e.save(),s.type==="spell"){let h=s.spell.radius*n;e.fillStyle="rgba(255,140,40,0.22)",e.strokeStyle="rgba(255,220,150,0.9)",e.lineWidth=2,e.beginPath(),e.arc(r,o,h,0,7),e.fill(),e.stroke();let u=Rs(s.icon,n*1.4);e.globalAlpha=.8,e.drawImage(u,r-u.width/2,o-u.height/2),e.restore();return}let a=s.unit;(a.proj||s.type==="building")&&(e.strokeStyle="rgba(255,255,255,0.55)",e.setLineDash([n*.25,n*.2]),e.lineWidth=1.5,e.beginPath(),e.arc(r,o,(a.range+a.radius)*n,0,7),e.stroke(),e.setLineDash([])),e.fillStyle=t.valid?"rgba(255,255,255,0.25)":"rgba(255,60,60,0.35)",e.fillRect(r-n/2,o-n/2,n,n),e.globalAlpha=.65;let l=s.count||1,c=l===1?[[0,0]]:l===2?[[-.55,0],[.55,0]]:[[0,-.45],[-.55,.4],[.55,.4]];for(let[h,u]of c)this.drawToken(r+h*n,o+u*n,s,!0,1,a.air?.6:0);e.globalAlpha=1,t.valid||(e.strokeStyle="#ff4d4d",e.lineWidth=3,e.beginPath(),e.arc(r,o,n*.7,0,7),e.stroke()),e.restore()}drawMark(t,e){t.t+=e;let n=this.ctx,s=this.S,[r,o]=this.toScreen(t.x,t.y),a=t.owner===this.me;if(t.spell){let l=Ht[t.card].spell.radius*s;n.save(),n.strokeStyle=a?"rgba(160,200,255,0.8)":"rgba(255,150,150,0.85)",n.lineWidth=2,n.setLineDash([s*.35,s*.25]),n.lineDashOffset=-t.t*s*2,n.beginPath(),n.arc(r,o,l,0,7),n.stroke(),n.restore()}else if(t.local){let l=t.t/t.max;n.save(),n.globalAlpha=1-l,n.strokeStyle="#bcd8ff",n.lineWidth=3,n.beginPath(),n.arc(r,o,s*(.4+l*.9),0,7),n.stroke();let c=Rs(wc(t.card).icon,s*1);n.globalAlpha=.6*(1-l),n.drawImage(c,r-c.width/2,o-c.height/2-s*.3*(1-l)),n.restore()}}drawTower(t,e,n){let s=this.ctx,r=this.S,o=t<3?0:1,a=xn[t%3].kind,[l,c]=this.towerPos[t],[h,u]=this.toScreen(l,c),f=n.tw[t],p=o===this.me?yn.me:yn.foe,x=(a==="king"?1.75:1.35)*r;if(f<=0){s.fillStyle="rgba(0,0,0,0.25)",s.beginPath(),s.ellipse(h,u+x*.3,x*1,x*.55,0,0,7),s.fill();let A=Xu(t*97+13);for(let L=0;L<9;L++){let U=A()*7,z=A()*x*.75;s.fillStyle=["#8d877d","#a8a296","#6e695f"][L%3],s.beginPath(),s.ellipse(h+Math.cos(U)*z,u+Math.sin(U)*z*.6,x*(.16+A()*.16),x*(.11+A()*.1),A()*3,0,7),s.fill()}return}s.fillStyle="rgba(0,0,0,0.28)",s.beginPath(),s.ellipse(h+x*.1,u+x*.9,x*1.05,x*.42,0,0,7),s.fill();let g=u-x*.95,m=u+x*.75;s.fillStyle="#6e695f",as(s,h-x,g+x*.2,x*2,m-g,x*.22),s.fill();let _=s.createLinearGradient(0,g,0,m);_.addColorStop(0,"#d6d0c4"),_.addColorStop(1,"#a39d91"),s.fillStyle=_,as(s,h-x,g,x*2,m-g-x*.12,x*.22),s.fill(),s.strokeStyle="rgba(80,72,60,0.35)",s.lineWidth=Math.max(1,r*.05);for(let A=1;A<4;A++){let L=g+(m-g-x*.12)*(A/4);s.beginPath(),s.moveTo(h-x*.92,L),s.lineTo(h+x*.92,L),s.stroke()}s.fillStyle="#e4dfd4";let w=a==="king"?5:4;for(let A=0;A<w;A++){let L=h-x+(A+.5)*(x*2/w)-x*.17;s.fillRect(L,g-x*.18,x*.34,x*.26)}let v=x*(a==="king"?.62:.5),M=u-x*.18,T=s.createRadialGradient(h-v*.3,M-v*.4,v*.1,h,M,v);T.addColorStop(0,p.light),T.addColorStop(1,p.dark),s.fillStyle=T,s.beginPath(),s.arc(h,M,v,0,7),s.fill(),s.strokeStyle="rgba(255,255,255,0.85)",s.lineWidth=Math.max(1.5,r*.08),s.stroke();let y=Rs(a==="king"?"\u{1F451}":"\u{1F3F9}",v*1.25);if(s.drawImage(y,h-y.width/2,M-y.height/2),a==="king"&&e&&!e.ka[o]){s.fillStyle="rgba(255,255,255,0.9)",s.font=`bold ${Math.round(r*.55)}px system-ui, sans-serif`;let A=performance.now()/600;s.fillText("z",h+v*.9,M-v*.8-A%1*r*.3),s.font=`bold ${Math.round(r*.4)}px system-ui, sans-serif`,s.fillText("z",h+v*1.3,M-v*1.3-(A+.5)%1*r*.3)}}drawTowerBar(t,e){let n=e.tw[t];if(n<=0)return;let s=this.ctx,r=this.S,o=t<3?0:1,a=xn[t%3].kind,l=Fi[a].hp,[c,h]=this.towerPos[t],[u,f]=this.toScreen(c,h),d=o===this.me,p=(a==="king"?1.75:1.35)*r,x=p*1.9,g=Math.max(9,r*.42),m=u-x/2,_=d?f+p*.95:f-p*1.55;s.fillStyle="rgba(0,0,0,0.6)",as(s,m-2,_-2,x+4,g+4,4),s.fill(),s.fillStyle=d?yn.me.bar:yn.foe.bar;let w=Math.max(0,Math.min(1,n/l));as(s,m,_,x*w,g,3),s.fill(),s.fillStyle="#fff",s.font=`800 ${Math.round(g*.85)}px system-ui, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(String(n),u,_+g/2+1),s.textAlign="start",s.textBaseline="alphabetic"}drawToken(t,e,n,s,r,o,a=0){let l=this.ctx,c=this.S,h=s?yn.me:yn.foe,u=Tc(n)*c;l.globalAlpha*=r,l.fillStyle="rgba(0,0,0,0.25)",l.beginPath(),l.ellipse(t,e+u*.45,u*(o?.7:.95),u*(o?.3:.42),0,0,7),l.fill();let f=e-o*c,d=l.createRadialGradient(t-u*.35,f-u*.4,u*.1,t,f,u);d.addColorStop(0,h.light),d.addColorStop(1,h.dark),l.fillStyle=d,l.beginPath(),l.ellipse(t,f,u*(1+a),u*(1-a),0,0,7),l.fill(),l.strokeStyle="rgba(255,255,255,0.9)",l.lineWidth=Math.max(1.5,c*.07),l.stroke();let p=Rs(n.unitIcon||n.icon,u*1.45);l.drawImage(p,t-p.width/2,f-p.height/2),l.globalAlpha/=r}drawUnit(t,e){let n=this.ctx,s=this.S,{e:r,card:o,air:a}=t,[,,l,,,c,h,u,f]=r,d=l===this.me,[p,x]=this.toScreen(t.x,t.y),g=d?yn.me:yn.foe,m=a?.6+Math.sin(e/300+r[0])*.06:0;if(o.type==="building")this.drawBallista(p,x,t,d,g);else{let w=0;if(t.moving>.2&&h===0&&(x-=Math.abs(Math.sin(e/90+r[0]))*s*.08),u<3&&f){let M=this.pos.get(f);if(M){let[T,C]=this.toScreen(M.x,M.y),y=Math.hypot(T-p,C-x)||1,A=(1-u/3)*(o.unit.proj?.08:.28)*s;p+=(T-p)/y*A,x+=(C-x)/y*A,w=(1-u/3)*.12}}let v=h>0?.55:1;if(this.drawToken(p,x,o,d,v,m,w),h>0){let M=Tc(o)*s+3;n.strokeStyle="#fff",n.lineWidth=2.5,n.beginPath(),n.arc(p,x-m*s,M,-Math.PI/2,-Math.PI/2+Math.PI*2*(1-h/10)),n.stroke()}}let _=o.unit.hp;if(c<_||o.type==="building"){let w=Tc(o)*s,v=Math.max(w*2,s*.9),M=Math.max(4,s*.16),T=p-v/2,C=x-m*s-w-M-s*.15;n.fillStyle="rgba(0,0,0,0.55)",n.fillRect(T-1,C-1,v+2,M+2),n.fillStyle=g.bar,n.fillRect(T,C,v*Math.max(0,c/_),M)}}drawBallista(t,e,n,s,r){let o=this.ctx,a=this.S,l=.85*a,c=n.e[6];o.save(),c>0&&(o.globalAlpha=.55),o.fillStyle="rgba(0,0,0,0.25)",o.beginPath(),o.ellipse(t,e+l*.5,l*1.05,l*.45,0,0,7),o.fill(),o.fillStyle="#7a5228",as(o,t-l,e-l*.8,l*2,l*1.75,l*.25),o.fill(),o.fillStyle="#a8743c",as(o,t-l,e-l*.9,l*2,l*1.6,l*.25),o.fill(),o.strokeStyle=r.main,o.lineWidth=Math.max(2,a*.12),o.stroke();let h=s?-Math.PI/2:Math.PI/2,u=this.pos.get(n.e[8]);if(u){let[d,p]=this.toScreen(u.x,u.y);h=Math.atan2(p-e,d-t)}o.translate(t,e-l*.1),o.rotate(h);let f=n.e[7]<3?(1-n.e[7]/3)*l*.25:0;o.translate(-f,0),o.strokeStyle="#4a2f14",o.lineWidth=Math.max(2,a*.14),o.beginPath(),o.moveTo(-l*.6,0),o.lineTo(l*.85,0),o.stroke(),o.strokeStyle="#3a2410",o.lineWidth=Math.max(2,a*.1),o.beginPath(),o.arc(l*.05,0,l*.75,-1.1,1.1),o.stroke(),o.strokeStyle="#eee",o.lineWidth=1,o.beginPath(),o.moveTo(l*.05+Math.cos(-1.1)*l*.75,Math.sin(-1.1)*l*.75),o.lineTo(-l*.35,0),o.lineTo(l*.05+Math.cos(1.1)*l*.75,Math.sin(1.1)*l*.75),o.stroke(),o.restore()}projPos(t,e){let n=Math.min(1,(e-t.start)*Re/t.dur),s=this.pos.get(t.tid);s&&(t.tx=s.x,t.ty=s.y,t.ta=s.air?1:0);let r=Bi(t.fx,t.tx,n),o=Bi(t.fy,t.ty,n),a=Bi(t.fa?.6:t.p==="tower"||t.p==="cannon"?1.2:.3,t.ta?.6:.3,n);return{x:r,y:o,z:a,prog:n}}drawProj(t,e){if(e<t.start)return!0;let{x:n,y:s,z:r,prog:o}=this.projPos(t,e);if(o>=1)return(t.p==="arrow"||t.p==="tower"||t.p==="bolt"||t.p==="cannon")&&this.burst(t.tx,t.ty,3,["#ffffff","#ffe08a"],1.5,.18,.05,t.ta?.6:.2),!1;let a=this.ctx,l=this.S,[c,h]=this.toScreen(n,s),u=h-r*l,[f,d]=this.toScreen(t.tx,t.ty),p=Math.atan2(d-(d-0)-(u-h)*0+0-h+0,f-c);switch(a.save(),t.p){case"arrow":case"tower":case"bolt":{let x=(t.p==="bolt"?.9:t.p==="tower"?.65:.5)*l,g=Math.atan2(d-h,f-c);a.translate(c,u),a.rotate(g),a.strokeStyle=t.p==="bolt"?"#5a3a1a":"#6b4520",a.lineWidth=Math.max(1.5,l*(t.p==="bolt"?.12:.07)),a.beginPath(),a.moveTo(-x/2,0),a.lineTo(x/2,0),a.stroke(),a.fillStyle="#e8e8e8",a.beginPath(),a.moveTo(x/2+l*.14,0),a.lineTo(x/2-l*.04,-l*.08),a.lineTo(x/2-l*.04,l*.08),a.fill(),a.fillStyle=t.o===this.me?yn.me.light:yn.foe.light,a.fillRect(-x/2,-l*.07,l*.14,l*.14);break}case"cannon":{a.fillStyle="#2b2b2b",a.beginPath(),a.arc(c,u,l*.2,0,7),a.fill(),a.fillStyle="rgba(255,255,255,0.4)",a.beginPath(),a.arc(c-l*.06,u-l*.06,l*.07,0,7),a.fill();break}case"fire":case"magic":{let x=t.p==="fire",g=l*(x?.28:.24),m=a.createRadialGradient(c,u,0,c,u,g*2);m.addColorStop(0,x?"#fff3b0":"#ffffff"),m.addColorStop(.35,x?"#ff9a2e":"#b48cff"),m.addColorStop(1,x?"rgba(255,80,0,0)":"rgba(120,60,255,0)"),a.fillStyle=m,a.beginPath(),a.arc(c,u,g*2,0,7),a.fill(),Math.random()<.6&&this.parts.push({x:n,y:s,z:r,vx:Math.random()-.5,vy:Math.random()-.5,vz:.3,life:.3,t:0,size:.09,color:x?"#ffb347":"#c79bff",grav:0});break}}return a.restore(),!0}drawSpell(t,e){if(e<t.start)return!0;let n=(e-t.start)*Re/t.dur;if(n>=1)return!1;let s=this.ctx,r=this.S,o=Bi(t.fx,t.x,n),a=Bi(t.fy,t.y,n),l=Math.sin(n*Math.PI)*3.2+.4*(1-n),[c,h]=this.toScreen(o,a),u=h-l*r;s.fillStyle=`rgba(0,0,0,${.15+n*.2})`,s.beginPath(),s.ellipse(c,h,r*(.4+n*.5),r*(.2+n*.25),0,0,7),s.fill();let f=r*.65,d=s.createRadialGradient(c,u,0,c,u,f*1.8);d.addColorStop(0,"#fff7c2"),d.addColorStop(.3,"#ffb12e"),d.addColorStop(.65,"#ff5a00"),d.addColorStop(1,"rgba(255,60,0,0)"),s.fillStyle=d,s.beginPath(),s.arc(c,u,f*1.8,0,7),s.fill();for(let p=0;p<2;p++)this.parts.push({x:o,y:a,z:l,vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2,vz:.5,life:.45,t:0,size:.18+Math.random()*.12,color:["#ff9a2e","#ffd36e","#ff5a00"][p%3],grav:0});return!0}drawRings(t){let e=this.ctx,n=this.S;this.rings=this.rings.filter(s=>{s.t+=t;let r=s.t/s.max;if(r>=1)return!1;let[o,a]=this.toScreen(s.x,s.y),l=Bi(s.r0,s.r1,1-Math.pow(1-r,2))*n;return e.save(),e.globalAlpha=1-r,s.fill?(e.fillStyle=s.color,e.beginPath(),e.arc(o,a,l,0,7),e.fill()):(e.strokeStyle=s.color,e.lineWidth=Math.max(1.5,s.w*n*(1-r)),e.beginPath(),e.arc(o,a,l,0,7),e.stroke()),e.restore(),!0})}drawParts(t){let e=this.ctx,n=this.S;this.parts.length>600&&this.parts.splice(0,this.parts.length-600),this.parts=this.parts.filter(s=>{if(s.t+=t,s.t>=s.life)return!1;s.x+=s.vx*t,s.y+=s.vy*t,s.z=Math.max(0,s.z+s.vz*t),s.vz-=s.grav*t,s.vx*=.96,s.vy*=.96;let r=s.t/s.life,[o,a]=this.toScreen(s.x,s.y),l=a-s.z*n,c=s.size*n*(s.grow?1+r*2:1-r*.5);return e.globalAlpha=1-r,e.fillStyle=s.color==="smoke"?"rgba(235,235,235,0.65)":s.color,e.beginPath(),e.arc(o,l,c,0,7),e.fill(),!0}),e.globalAlpha=1}drawBubbles(t){let e=this.ctx,n=this.S;this.bubbles=this.bubbles.filter(s=>{if(s.t+=t,s.t>=s.max)return!1;let[r,o]=this.towerPos[s.owner*3+2],[a,l]=this.toScreen(r,o),c=s.owner===this.me;a+=c?-n*3.4:n*3.4,l+=c?-n*.5:n*.8;let h=Math.min(1,s.t/.15)*(s.t>s.max-.25?(s.max-s.t)/.25:1),u=n*1.15*h;e.save(),e.fillStyle="#fff",e.strokeStyle=c?yn.me.main:yn.foe.main,e.lineWidth=3,e.beginPath(),e.arc(a,l,u,0,7),e.fill(),e.stroke();let f=Rs(s.ch,u*1.25);return e.drawImage(f,a-f.width/2,l-f.height/2),e.restore(),!0})}drawTexts(t){let e=this.ctx,n=this.S;this.texts=this.texts.filter(s=>{if(s.t+=t,s.t>=s.max)return!1;let r=s.t/s.max,o=(s.big?2.2:1.2)*n*(r<.15?r/.15:1),a=Rs(s.txt,o);return e.globalAlpha=r>.7?(1-r)/.3:1,e.drawImage(a,s.sx-a.width/2,s.sy-a.height/2-r*n*1.5),e.globalAlpha=1,!0})}};function as(i,t,e,n,s,r){r=Math.max(0,Math.min(r,Math.abs(n)/2,Math.abs(s)/2)),i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}Oi();var Is=new URLSearchParams(location.search),Yu=`arenaduel-${os}-`,$u=Is.get("mqtt")?[Is.get("mqtt")]:["wss://broker.emqx.io:8084/mqtt","wss://broker.hivemq.com:8884/mqtt"],Zu=Is.get("peerhost")?{host:Is.get("peerhost"),port:+Is.get("peerport")||9e3,path:"/",secure:!1,debug:0}:{debug:0},Ps=Is.get("net"),qu="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function c0(){let i="";for(let t=0;t<4;t++)i+=qu[Math.floor(Math.random()*qu.length)];return i}function Zo(i){return(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4)}var qo={};function Cc(i){return qo[i]||(qo[i]=new Promise((t,e)=>{let n=document.createElement("script");n.src=i,n.async=!0,n.onload=t,n.onerror=()=>{qo[i]=null,e(new Error("No se pudo cargar "+i))},document.head.appendChild(n)})),qo[i]}var Ls=(i,t,e)=>Promise.race([i,new Promise((n,s)=>setTimeout(()=>s(new Error(e)),t))]),Ec=class{constructor(t,e){this.code=t,this.onGuest=e,this.peer=null}async start(){return await Cc("lib/peerjs.min.js"),new Promise((t,e)=>{let n=new window.Peer(Yu+this.code,Zu);this.peer=n;let s=!1;n.on("open",()=>{s=!0,t()}),n.on("error",r=>{s||e(r)}),n.on("connection",r=>{r.on("open",()=>{let o=Ju(r,"p2p");this.onGuest(o)})}),n.on("disconnected",()=>{try{n.reconnect()}catch{}})})}close(){try{this.peer&&this.peer.destroy()}catch{}}};function Ju(i,t){let e={kind:t,onmessage:null,onclose:null,send(n){try{i.open&&i.send(n)}catch{}},close(){e.onclose=null,e.onmessage=null;try{i.close()}catch{}}};return i.on("data",n=>e.onmessage&&e.onmessage(n)),i.on("close",()=>e.onclose&&e.onclose()),i.on("error",()=>e.onclose&&e.onclose()),e}async function h0(i){return await Cc("lib/peerjs.min.js"),new Promise((t,e)=>{let n=new window.Peer(Zu),s=!1,r=o=>{if(!s){s=!0;try{n.destroy()}catch{}e(o)}};n.on("error",r),n.on("open",()=>{let o=n.connect(Yu+i,{reliable:!1,serialization:"json"});o.on("open",()=>{if(s)return;s=!0;let a=Ju(o,"p2p"),l=a.close;a.close=()=>{l(),setTimeout(()=>{try{n.destroy()}catch{}},400)},t(a)}),o.on("error",r)})})}var Yo=class{constructor(t,e,n){this.url=t,this.code=e,this.role=n,this.base=`arenaduel/${os}/${e}`,this.client=null,this.onraw=null}async connect(){return await Cc("lib/mqtt.min.js"),new Promise((t,e)=>{let n=window.mqtt.connect(this.url,{clientId:"ad_"+Math.random().toString(36).slice(2,10),reconnectPeriod:2e3,connectTimeout:6e3,keepalive:20,clean:!0});this.client=n;let s=!1;n.on("connect",()=>{n.subscribe(`${this.base}/${this.role}`,{qos:0},r=>{if(r){s||e(r);return}s||(s=!0,t(this))})}),n.on("message",(r,o)=>{let a;try{a=JSON.parse(o.toString())}catch{return}this.onraw&&this.onraw(a)}),n.on("error",r=>{if(!s){try{n.end(!0)}catch{}e(r)}})})}publish(t){let e=this.role==="h"?"g":"h";try{this.client.publish(`${this.base}/${e}`,JSON.stringify(t),{qos:0})}catch{}}close(){try{this.client&&this.client.end(!0)}catch{}}};function ju(i,t){let e={kind:"relay",onmessage:null,onclose:null,send(n){i.publish({...n,_to:t})},close(n){e.onclose=null,e.onmessage=null,n||i.publish({t:"_bye",_to:t}),setTimeout(()=>i.close(),200)}};return i.onraw=n=>{if(n.t==="_hello"){n.from!==t&&i.publish({t:"_welcome",_to:n.from,from:i.myId,full:1});return}if(n.t!=="_welcome"&&!(n._to&&n._to!==i.myId)){if(n.t==="_bye"){e.onclose&&e.onclose();return}e.onmessage&&e.onmessage(n)}},e}async function u0(i){let t;for(let e of $u){let n=new Yo(e,i,"g");n.myId="g"+Math.random().toString(36).slice(2,9);try{await Ls(n.connect(),7e3,"rel\xE9 sin respuesta");let s=await Ls(new Promise(r=>{n.onraw=l=>{l.t==="_welcome"&&l._to===n.myId&&r(l)};let o=()=>n.publish({t:"_hello",from:n.myId});o();let a=setInterval(o,1200);setTimeout(()=>clearInterval(a),6500)}),7e3,"sala no encontrada");if(s.full)throw new Error("La sala est\xE1 llena");return ju(n,s.from)}catch(s){if(t=s,n.close(),/llena/.test(s.message))throw s}}throw t||new Error("No se pudo conectar")}var Ac=class{constructor(t,e){this.code=t,this.onGuest=e,this.rooms=[],this.taken=!1}async start(){let t=$u.map(async n=>{let s=new Yo(n,this.code,"h");s.myId="h"+Math.random().toString(36).slice(2,9),await Ls(s.connect(),8e3,"rel\xE9 sin respuesta"),this.rooms.push(s),s.onraw=r=>{if(r.t!=="_hello"||!r.from)return;if(this.taken){this.guestId!==r.from?s.publish({t:"_welcome",_to:r.from,from:s.myId,full:1}):s.publish({t:"_welcome",_to:r.from,from:s.myId});return}this.taken=!0,this.guestId=r.from,s.publish({t:"_welcome",_to:r.from,from:s.myId});let o=ju(s,r.from);this.onGuest(o,s)}});if(!(await Promise.allSettled(t)).some(n=>n.status==="fulfilled"))throw new Error("rel\xE9 no disponible")}keepOnly(t){for(let e of this.rooms)e!==t&&e.close();this.rooms=[t]}close(){for(let t of this.rooms)t.close()}},$o=class i{static host(t,e){let n=new BroadcastChannel("ad-"+t),s=!1;return n.onmessage=r=>{r.data.t==="_hello"&&!s&&(s=!0,n.postMessage({t:"_welcome"}),e(i.wrap(n,"g")))},{close:()=>n.close()}}static join(t){return Ls(new Promise(e=>{let n=new BroadcastChannel("ad-"+t);n.onmessage=s=>{s.data.t==="_welcome"&&e(i.wrap(n,"h"))},n.postMessage({t:"_hello"})}),4e3,"sala no encontrada")}static wrap(t,e){let n={kind:"local",onmessage:null,onclose:null,send(r){try{t.postMessage({...r,_to:e})}catch{}},close(r){n.onclose=null,n.onmessage=null;try{r||t.postMessage({t:"_bye",_to:e}),t.close()}catch{}}},s=e==="g"?"h":"g";return t.onmessage=r=>{let o=r.data;if(o._to===s){if(o.t==="_bye")return n.onclose&&n.onclose();n.onmessage&&n.onmessage(o)}},n}};async function Ku(i,t,e){for(let n=0;n<4;n++){let s=c0();e&&e(s);let r=null,o=[],a=[],l=(f,d)=>{f._extra=d,a.push(f),f.onclose=()=>{},f.onmessage=p=>{if(p.t==="hello"){if(r&&r!==f){f.send({t:"full"}),setTimeout(()=>f.close(!0),300);return}r=f;for(let x of a)x!==f&&x.close(!0);for(let x of o)x.obj===d?.host&&d?.room?x.obj.keepOnly(d.room):x.kind!==f.kind&&x.obj.close();i(f,p)}}};if(Ps==="local")return o.push({kind:"local",obj:$o.host(s,f=>l(f))}),t&&t(["local"]),{code:s,close:()=>o.forEach(f=>f.obj.close()),via:["local"]};let c=[],h=!1,u=[];if(Ps!=="relay"){let f=new Ec(s,d=>l(d));u.push(Ls(f.start(),9e3,"servidor p2p sin respuesta").then(()=>{o.push({kind:"p2p",obj:f}),c.push("p2p"),t&&t(c.slice())}).catch(d=>{f.close(),d&&d.type==="unavailable-id"&&(h=!0)}))}if(Ps!=="p2p"){let f=new Ac(s,(d,p)=>l(d,{host:f,room:p}));u.push(f.start().then(()=>{o.push({kind:"relay",obj:f}),c.push("relay"),t&&t(c.slice())}).catch(()=>f.close()))}if(await Promise.all(u),h){o.forEach(f=>f.obj.close());continue}if(!c.length)throw new Error("No hay conexi\xF3n a internet o los servidores no responden.");return{code:s,via:c,close:()=>o.forEach(f=>f.obj.close())}}throw new Error("No se pudo crear la sala, int\xE9ntalo otra vez.")}async function Qu(i,t){if(Ps==="local")return $o.join(i);t&&t("Buscando la sala\u2026");let e=Ps==="relay"?Promise.reject(new Error("off")):Ls(h0(i),8e3,"p2p sin respuesta"),n=Ps==="p2p"?Promise.reject(new Error("off")):u0(i),s=(u,f)=>u.then(d=>({ok:!0,v:d,kind:f}),d=>({ok:!1,e:d,kind:f})),r=s(e,"p2p"),o=s(n,"relay"),a=u=>u.then(f=>{f.ok&&f.v.close(!0)}),l=await Promise.race([r,o]);if(l.ok&&l.kind==="p2p")return a(o),l.v;if(l.ok&&l.kind==="relay"){t&&t("Conectado. Probando conexi\xF3n directa\u2026");let u=await Promise.race([r,new Promise(f=>setTimeout(()=>f({ok:!1}),1800))]);return u.ok?(l.v.close(!0),u.v):(a(r),l.v)}let c=await(l.kind==="p2p"?o:r);if(c.ok)return c.v;let h=[l.e,c.e].find(u=>u&&/llena/.test(u.message));throw h||new Error("No se encontr\xF3 la sala "+i+". Revisa el c\xF3digo y que tu amigo siga en la sala.")}var Ye=null,Or=null,Ic=null,Jo=!1;try{Jo=localStorage.getItem("ad_mute")==="1"}catch{}var Rc={};function Un(){if(!Ye){let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Ye=new i,Or=Ye.createGain(),Or.gain.value=.55;let t=Ye.createDynamicsCompressor();Or.connect(t),t.connect(Ye.destination),Ic=Ye.createBuffer(1,Ye.sampleRate,Ye.sampleRate);let e=Ic.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1}Ye.state==="suspended"&&Ye.resume()}function Pc(i){Jo=i;try{localStorage.setItem("ad_mute",i?"1":"0")}catch{}}function ye(i,t,e,n,s,r=0){let o=Ye.currentTime+r,a=Ye.createOscillator(),l=Ye.createGain();a.type=i,a.frequency.setValueAtTime(t,o),e!==t&&a.frequency.exponentialRampToValueAtTime(Math.max(20,e),o+n),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(s,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(l),l.connect(Or),a.start(o),a.stop(o+n+.05)}function _n(i,t,e,n,s,r=0,o=1){let a=Ye.currentTime+r,l=Ye.createBufferSource();l.buffer=Ic;let c=Ye.createBiquadFilter();c.type=e,c.Q.value=o,c.frequency.setValueAtTime(n,a),s!==n&&c.frequency.exponentialRampToValueAtTime(Math.max(30,s),a+i);let h=Ye.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(t,a+.008),h.gain.exponentialRampToValueAtTime(1e-4,a+i),l.connect(c),c.connect(h),h.connect(Or),l.start(a,Math.random()*.5),l.stop(a+i+.05)}var tf={hit:.05,shoot:.07,die:.06,splash:.08,deploy:.05,spawn:.15,charge:.3};function Kt(i){if(Jo||!Ye||Ye.state!=="running")return;let t=Ye.currentTime;if(!(tf[i]&&Rc[i]&&t-Rc[i]<tf[i]))switch(Rc[i]=t,i){case"select":ye("triangle",900,1200,.06,.12);break;case"deploy":ye("sine",260,620,.12,.25),_n(.1,.08,"highpass",2e3,4e3);break;case"enemyDeploy":ye("sine",200,380,.12,.12);break;case"error":ye("square",180,140,.15,.08);break;case"hit":_n(.06,.18,"bandpass",1800,900,0,2),ye("square",140,90,.05,.05);break;case"shoot":_n(.05,.06,"highpass",3e3,5e3);break;case"splash":_n(.25,.18,"lowpass",1600,300);break;case"die":ye("triangle",500,160,.16,.12),_n(.15,.05,"lowpass",1200,400);break;case"spell":_n(.55,.16,"bandpass",300,1800,0,1.5);break;case"boom":_n(.7,.5,"lowpass",900,80),ye("sine",90,35,.5,.5);break;case"tower":_n(1.1,.6,"lowpass",1200,60),ye("sine",70,30,.8,.6),ye("triangle",523,523,.35,.15,.25),ye("triangle",659,659,.35,.15,.35),ye("triangle",784,784,.5,.18,.45);break;case"king":ye("square",330,330,.12,.08),ye("square",440,440,.18,.08,.12);break;case"tick":ye("sine",880,880,.12,.2);break;case"count":ye("sine",740,740,.09,.16);break;case"count3":ye("square",988,988,.16,.14),ye("sine",494,494,.2,.2);break;case"horn":ye("sawtooth",220,220,.9,.12),ye("sawtooth",277,277,.9,.08,.02),ye("sawtooth",330,330,.9,.07,.04),_n(.5,.08,"lowpass",900,200);break;case"minute":[659,784].forEach((e,n)=>ye("triangle",e,e,.2,.15,n*.12));break;case"zap":_n(.35,.35,"highpass",900,3e3),ye("sawtooth",120,60,.3,.2);break;case"freeze":_n(.6,.18,"bandpass",3e3,6e3,0,4),[1320,1760,2093].forEach((e,n)=>ye("sine",e,e,.25,.06,n*.05));break;case"rage":ye("sawtooth",180,360,.35,.12),_n(.3,.1,"bandpass",600,1200);break;case"charge":ye("triangle",300,600,.25,.1);break;case"spawn":ye("sine",400,260,.1,.07);break;case"volley":_n(.4,.14,"highpass",2500,5e3);break;case"quake":_n(.8,.45,"lowpass",500,60),ye("sine",60,30,.7,.4);break;case"go":ye("square",660,660,.12,.12),ye("square",990,990,.3,.14,.1);break;case"phase":[523,659,784].forEach((e,n)=>ye("triangle",e,e,.18,.15,n*.09));break;case"emote":ye("sine",700,1100,.1,.15);break;case"win":[523,659,784,1046].forEach((e,n)=>ye("triangle",e,e,.3,.2,n*.13)),ye("triangle",1318,1318,.7,.2,.55);break;case"lose":[440,392,349,262].forEach((e,n)=>ye("sawtooth",e,e*.98,.32,.08,n*.2));break;case"draw":[440,440,523].forEach((e,n)=>ye("triangle",e,e,.25,.14,n*.18));break}}function ef(i){try{!Jo&&navigator.vibrate&&navigator.vibrate(i)}catch{}}var j=i=>document.querySelector(i),uc=new URLSearchParams(location.search),Iv=["Escudero","Caballero","Rey Negro"],Rp=Re*1e3,Pv=30,Lv=20,Ip="ad_profile_v2";function Dv(){let i=null;try{i=JSON.parse(localStorage.getItem(Ip)||"null")}catch{}(!i||typeof i!="object")&&(i={});let t="";try{t=localStorage.getItem("ad_name")||""}catch{}return i={...{name:t,trophies:0,best:0,history:{},decks:[Dn.slice(),Dn.slice(),Dn.slice()],slot:0,quality:"auto",sound:!0,vibe:!0,wins:0,losses:0},...i},i.decks=[0,1,2].map(n=>As(i.decks&&i.decks[n])?i.decks[n]:Dn.slice()),[0,1,2].includes(i.slot)||(i.slot=0),["alta","auto","ahorro"].includes(i.quality)||(i.quality="auto"),i}var le=Dv();function Ss(){try{localStorage.setItem(Ip,JSON.stringify(le))}catch{}}var vi=()=>le.decks[le.slot];Pc(!le.sound);var ss=i=>{le.vibe&&ef(i)},S={state:"menu",mode:null,me:0,level:1,game:null,bot:null,view:null,view3d:!1,tr:null,room:null,acc:0,lastT:0,lastSimAt:0,lastRenderAt:0,outEv:[],sinceSend:0,hud:{hand:[-1,-1,-1,-1],next:-1,el:5,elAt:0,tm:1800,ph:0,crowns:[0,0]},pending:[],seq:0,sel:-1,press:null,canvasPress:null,ghost:null,tickOff:null,jitter:0,lastMsgAt:0,rtt:0,endHandled:!1,rematch:{me:!1,foe:!1},foeName:"Rival",myName:"T\xFA",foeTrophies:null,foeDeck:null,emoteAt:0,handKey:"",cardEls:[],wakeLock:null,lastCount:-1,swapCard:-1};window.__ad=S;var Nv=["menu","practice","lobby","join","deck","help","settings","versus","game"];function Xn(i){for(let t of Nv)j("#"+t).classList.toggle("hidden",t!==i);i!=="game"&&j("#overlay").classList.add("hidden"),j("#confirm").classList.add("hidden")}var bp=0;function gu(i){let t=j("#toast");t.textContent=i,t.classList.remove("hidden"),clearTimeout(bp),bp=setTimeout(()=>t.classList.add("hidden"),1400)}function Ir(i,t=""){let e=j("#banner");e.textContent=i,e.className=t,e.offsetWidth,e.classList.remove("hidden"),clearTimeout(Ir.t),Ir.t=setTimeout(()=>e.classList.add("hidden"),1900)}function xu(){let i=/iP(hone|ad|od)/.test(navigator.userAgent),t=document.documentElement;!i&&t.requestFullscreen&&!document.fullscreenElement&&matchMedia("(pointer: coarse)").matches&&t.requestFullscreen({navigationUI:"hide"}).catch(()=>{})}async function Pp(){try{"wakeLock"in navigator&&!S.wakeLock&&(S.wakeLock=await navigator.wakeLock.request("screen"),S.wakeLock.addEventListener("release",()=>{S.wakeLock=null}))}catch{}}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(S.state==="playing"||S.state==="countdown")&&Pp()});var lc=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Pr=i=>`art/${Ht[i].id}.webp`;function bu(){return((j("#nameInput").value||"").trim()||"Jugador").slice(0,14)}function yu(){j("#pfName").textContent=le.name||"Jugador",j("#pfTrophies").textContent=le.trophies,j("#pfRank").textContent=bc(le.trophies).name;let i=vi();j("#deckMini").innerHTML=i.map(e=>`<div class="dm r-${Ht[e].rarity}" style="background-image:url(${Pr(e)})"><em>${Ht[e].cost}</em></div>`).join(""),j("#deckAvg").textContent=Lp(i);let t=Object.values(le.history).sort((e,n)=>(n.last||0)-(e.last||0)).slice(0,4);j("#historyBox").innerHTML=t.length?"<h3>Tus duelos</h3>"+t.map(e=>`<div class="hrow"><span>contra <b>${lc(e.name)}</b></span><span class="rec"><i class="w">${e.w}V</i> \xB7 <i class="l">${e.l}D</i>${e.d?` \xB7 ${e.d}E`:""}</span></div>`).join(""):""}var Lp=i=>(i.reduce((t,e)=>t+Ht[e].cost,0)/i.length).toFixed(1);function Uv(){j("#nameInput").value=le.name,j("#nameInput2").value=le.name;let i=(n,s)=>n.addEventListener("input",()=>{s.value=n.value,le.name=n.value.trim().slice(0,14),Ss(),j("#pfName").textContent=le.name||"Jugador"});i(j("#nameInput"),j("#nameInput2")),i(j("#nameInput2"),j("#nameInput")),j("#btnHost").onclick=()=>{Un(),Kt("select"),Gv()},j("#btnJoin").onclick=()=>{Un(),Kt("select"),wp("")},j("#btnPractice").onclick=()=>{Un(),Kt("select"),Xn("practice")},j("#btnDeck").onclick=()=>{Un(),Kt("select"),Ov()},j("#btnHelp").onclick=()=>{Un(),Xn("help")},j("#btnSettings").onclick=()=>{Un(),cc(),Xn("settings")},document.querySelectorAll("#practice [data-level]").forEach(n=>{n.onclick=()=>{Un(),xu(),Hv(+n.dataset.level)}}),document.querySelectorAll(".back").forEach(n=>{n.id!=="lobbyCancel"&&(n.onclick=()=>{Kt("select"),yu(),Xn("menu")})}),j("#lobbyCancel").onclick=()=>{Lr(),S.mode=null,S.state="menu",Xn("menu")},j("#btnShare").onclick=Vv,j("#btnCopy").onclick=Np;let t=j("#codeInput");t.addEventListener("input",()=>{t.value=Zo(t.value),j("#joinError").textContent=""}),t.addEventListener("keydown",n=>{n.key==="Enter"&&Tp()}),j("#btnJoinGo").onclick=()=>{Un(),xu(),Tp()},zv(),kv(),yu();let e=Zo(uc.get("sala"));e.length===4&&wp(e)}function cc(){document.querySelectorAll("#qualitySeg button").forEach(i=>i.classList.toggle("on",i.dataset.q===le.quality)),document.querySelectorAll("#soundSeg button").forEach(i=>i.classList.toggle("on",i.dataset.s==="1"===le.sound)),document.querySelectorAll("#vibeSeg button").forEach(i=>i.classList.toggle("on",i.dataset.v==="1"===le.vibe))}function kv(){j("#qualitySeg").onclick=i=>{let t=i.target.closest("button");t&&(le.quality=t.dataset.q,Ss(),cc(),Kt("select"),S.view&&S.view.setQuality(le.quality))},j("#soundSeg").onclick=i=>{let t=i.target.closest("button");t&&(le.sound=t.dataset.s==="1",Pc(!le.sound),Ss(),cc(),Kt("select"))},j("#vibeSeg").onclick=i=>{let t=i.target.closest("button");t&&(le.vibe=t.dataset.v==="1",Ss(),cc(),ss(30))}}var Fv=Ht.map((i,t)=>t).sort((i,t)=>Ht[i].cost-Ht[t].cost||Object.keys(zo).indexOf(Ht[i].rarity)-Object.keys(zo).indexOf(Ht[t].rarity));function Mp(i,t=""){let e=Ht[i];return`<div class="ctile r-${e.rarity} ${t}" data-c="${i}" style="background-image:url(${Pr(i)})"><em>${e.cost}</em><span>${e.name}</span></div>`}function Ov(){S.swapCard=-1,hc(),Xn("deck")}function hc(){let i=vi();document.querySelectorAll("#deckTabs button").forEach(t=>t.classList.toggle("on",+t.dataset.slot===le.slot)),j("#deckSlots").innerHTML=i.map((t,e)=>Mp(t,S.swapCard>=0?"wiggle":"").replace("<div ",`<div data-slot="${e}" `)).join(""),j("#deckAvg2").textContent=Lp(i),j("#collection").innerHTML=Fv.map(t=>Mp(t,i.includes(t)?"indeck":"")).join(""),j("#deckHint").textContent=S.swapCard>=0?`Elige qu\xE9 carta cambiar por ${Ht[S.swapCard].name}`:"Toca una carta para verla",j("#deckHint").classList.toggle("hot",S.swapCard>=0)}function Bv(i){if(i.type==="spell"){let s=i.spell,r=[];return s.dmg&&r.push(["Da\xF1o",s.dmg],["A torres",Math.round(s.dmg*s.towerMult)]),r.push(["Radio",s.radius+" casillas"]),s.hits&&r.push(["Rayos",s.hits]),s.freeze&&r.push(["Congela",s.freeze+" s"]),s.boost&&r.push(["Furia","+"+Math.round((s.boost-1)*100)+" % \xB7 "+s.duration+" s"]),r}let t=Xe[i.unit],e=t.targets==="both"?"Tierra y aire":t.targets==="ground"?"Solo tierra":t.targets==="buildings"?"Solo edificios":"\u2014",n=[["Vida",t.hp+(i.count>1?` \xD7${i.count}`:"")]];return t.dmg&&n.push(["Da\xF1o",t.dmg+(t.splash?" (\xE1rea)":t.spin?" (giro)":t.ramp?" (sube hasta \xD712)":t.charge?" (\xD72 en carga)":"")]),t.dmg&&n.push(["Ataque cada",t.hitSpeed+" s"]),t.dmg&&n.push(["Alcance",t.range>=2?t.range+" casillas":"Cuerpo a cuerpo"]),t.dmg&&n.push(["Ataca a",e]),n.push(t.building?["Dura",t.lifetime+" s"]:["Velocidad",Vu(t.speed)+(t.air?", vuela":"")+(t.jump?", salta el r\xEDo":"")]),t.spawn&&n.push(["Invoca",`${t.spawn.count} esqueleto${t.spawn.count>1?"s":""} cada ${t.spawn.every} s`]),t.slow&&n.push(["Ralentiza",t.slow+" s"]),n}function Sp(i,t){let e=Ht[i],n=zo[e.rarity];j("#sheetArt").style.backgroundImage=`url(${Pr(i)})`,j("#sheetArt").innerHTML=`<em>${e.cost}</em>`,j("#sheetArt").className="sheet-art r-"+e.rarity,j("#sheetRarity").textContent=n.name+" \xB7 "+(e.type==="spell"?"Hechizo":e.type==="building"?"Edificio":"Tropa"),j("#sheetRarity").style.color=n.color,j("#sheetName").textContent=e.name,j("#sheetDesc").textContent=e.desc,j("#sheetStats").innerHTML=Bv(e).map(([o,a])=>`<dt>${o}</dt><dd>${a}</dd>`).join("");let s=vi().includes(i),r=j("#sheetUse");r.classList.toggle("hidden",s),r.onclick=()=>{S.swapCard=i,j("#cardSheet").classList.add("hidden"),Kt("select"),hc(),j("#deckSlots").scrollIntoView({behavior:"smooth",block:"start"})},j("#cardSheet").classList.remove("hidden")}function zv(){j("#deckTabs").onclick=i=>{let t=i.target.closest("button");t&&(le.slot=+t.dataset.slot,Ss(),S.swapCard=-1,Kt("select"),hc())},j("#deckSlots").onclick=i=>{let t=i.target.closest(".ctile");if(!t)return;let e=+t.dataset.slot;if(S.swapCard>=0){let n=vi();n[e]=S.swapCard,S.swapCard=-1,Ss(),Kt("deploy"),ss(15),hc();return}Sp(+t.dataset.c,e)},j("#collection").onclick=i=>{let t=i.target.closest(".ctile");t&&(Kt("select"),Sp(+t.dataset.c))},j("#cardSheet").onclick=i=>{(i.target.id==="cardSheet"||i.target.closest(".sheet-close"))&&j("#cardSheet").classList.add("hidden")}}function Dp(i){return`${location.origin}${location.pathname}?sala=${i}`}async function Vv(){let i=S.roomCode;if(!i)return;let t=Dp(i);if(navigator.share)try{await navigator.share({title:"Arena Duel",text:`Te reto a un duelo en Arena Duel. C\xF3digo ${i}:`,url:t});return}catch{}Np()}async function Np(){let i=S.roomCode;if(i)try{await navigator.clipboard.writeText(Dp(i)),j("#lobbyStatus").textContent="Enlace copiado. Esperando a tu rival\u2026"}catch{j("#lobbyStatus").textContent="Comparte el c\xF3digo "+i}}async function Gv(){xu(),Lr(),S.mode="host",S.me=0,S.myName=bu(),S.state="lobby",S.roomCode=null,Xn("lobby"),j("#roomCode").textContent="\xB7\xB7\xB7\xB7",j("#lobbyStatus").textContent="Preparando la sala\u2026";try{let i=await Ku((t,e)=>{Up(t),kp(e)},t=>{!S.tr&&S.mode==="host"&&(j("#lobbyStatus").textContent=t.length===1&&t[0]==="relay"?"Esperando a tu rival (modo rel\xE9)\u2026":"Esperando a tu rival\u2026")},t=>{S.roomCode=t,j("#roomCode").textContent=t});if(S.state!=="lobby"||S.mode!=="host"){i.close();return}S.room=i}catch(i){S.mode==="host"&&(j("#lobbyStatus").textContent=i.message||"No se pudo crear la sala.")}}function wp(i){Xn("join"),j("#codeInput").value=i,j("#joinError").textContent="",j("#joinWait").classList.add("hidden"),j("#btnJoinGo").disabled=!1,i||setTimeout(()=>j("#codeInput").focus(),50)}async function Tp(){let i=Zo(j("#codeInput").value);if(i.length!==4){j("#joinError").textContent="El c\xF3digo tiene 4 caracteres.";return}Lr(),S.mode="guest",S.me=1,S.myName=bu(),S.state="lobby",j("#btnJoinGo").disabled=!0,j("#joinError").textContent="",j("#joinWait").classList.remove("hidden"),j("#joinStatus").textContent="Buscando la sala\u2026";try{let t=await Qu(i,e=>{j("#joinStatus").textContent=e});if(S.mode!=="guest"||S.state!=="lobby"){t.close();return}Up(t),j("#joinStatus").textContent="Conectado. Saludando\u2026",qn({t:"hello",name:S.myName,v:os,deck:vi(),tr:le.trophies})}catch(t){j("#joinWait").classList.add("hidden"),j("#btnJoinGo").disabled=!1,j("#joinError").textContent=t.message||"No se pudo entrar.",S.mode=null,S.state="menu"}}function Up(i){S.tr=i,S.lastMsgAt=performance.now(),i.onmessage=kp,i.onclose=()=>Mu("Se ha perdido la conexi\xF3n con tu rival."),S.mode==="host"&&(j("#lobbyStatus").textContent="Rival conectado\u2026")}function qn(i){S.tr&&S.tr.send(i)}function Lr(){if(S.tr){try{S.tr.send({t:"leave"})}catch{}let i=S.tr;S.tr=null,i.onclose=null,setTimeout(()=>i.close(),150)}if(S.room){let i=S.room;S.room=null,setTimeout(()=>i.close(),200)}}function Mu(i,t=!1){if(S.mode==="practice"||S.mode===null||S.state==="menu")return;let e=S.tr;if(S.tr=null,e){e.onclose=null,e.onmessage=null;try{e.close(!0)}catch{}}if(S.state==="lobby"&&S.mode==="guest"){j("#joinError").textContent=i,j("#joinWait").classList.add("hidden"),j("#btnJoinGo").disabled=!1;return}if(S.state==="lobby"&&S.mode==="host"){j("#lobbyStatus").textContent="Tu rival se ha ido. Cancela y crea otra sala.";return}let n=S.state==="playing";if(S.state==="countdown"&&(S.state="over"),S.state==="playing"||S.state==="over"){S.state="over";let s=null;n&&!S.endHandled&&t&&(s=Vp("win")),S.endHandled=!0,j("#countdown").classList.add("hidden"),Xn("game"),Hp({title:t&&n?"\xA1Victoria!":"Sin rival",lose:!(t&&n),text:i,rematch:!1,delta:s})}}function kp(i){if(!(!i||typeof i!="object"))switch(S.lastMsgAt=performance.now(),i.t){case"hello":if(S.mode!=="host")return;if(i.v!==os){qn({t:"err",msg:"Ten\xE9is versiones distintas del juego. Recargad la p\xE1gina los dos."});return}S.foeName=String(i.name||"Rival").slice(0,14),S.foeDeck=As(i.deck)?i.deck:Dn.slice(),S.foeTrophies=Number.isFinite(i.tr)?i.tr:null,qn({t:"welcome",name:S.myName,v:os,deck:vi(),tr:le.trophies}),S.state==="lobby"&&_u();break;case"welcome":if(S.mode!=="guest")return;S.foeName=String(i.name||"Rival").slice(0,14),S.foeDeck=As(i.deck)?i.deck:Dn.slice(),S.foeTrophies=Number.isFinite(i.tr)?i.tr:null,j("#joinStatus").textContent="\xA1Dentro! Empezamos\u2026";break;case"err":j("#joinError").textContent=i.msg,j("#joinWait").classList.add("hidden"),j("#btnJoinGo").disabled=!1;break;case"full":j("#joinError").textContent="Esa sala ya tiene dos jugadores.",j("#joinWait").classList.add("hidden"),j("#btnJoinGo").disabled=!1;break;case"start":S.mode==="guest"&&fc(dc);break;case"s":S.mode==="guest"&&(S.state==="playing"||S.state==="over")&&Wv(i);break;case"play":S.mode==="host"&&S.game&&(S.game.play(1,i.slot,i.c,i.x,i.y,i.s)||qn({t:"nack",s:i.s}));break;case"nack":S.pending=S.pending.filter(t=>t.seq!==i.s),S.handKey="";break;case"emote":S.view&&Dr[i.i]&&(S.view.emote(1-S.me,Dr[i.i]),Kt("emote"));break;case"surrender":S.mode==="host"&&S.game&&S.game.phase!=="over"&&S.game.finish(0,"surrender");break;case"rematch":S.rematch.foe=!0,Tu(),S.mode==="host"&&S.rematch.me&&_u();break;case"ping":qn({t:"pong",ts:i.ts});break;case"pong":S.rtt=Math.round(performance.now()-i.ts);break;case"leave":Mu("Tu rival ha salido de la partida.",!0);break}}setInterval(()=>{!S.tr||S.mode==="practice"||(qn({t:"ping",ts:performance.now()}),(S.state==="playing"||S.state==="over"||S.state==="countdown")&&performance.now()-S.lastMsgAt>1e4&&Mu("Tu rival no responde. Puede que haya cerrado el juego o se haya quedado sin cobertura."),S.state==="playing"&&(j("#netInfo").textContent=`${S.rtt} ms \xB7 ${S.tr&&S.tr.kind==="relay"?"rel\xE9":"directo"}`))},2e3);function _u(){S.rematch={me:!1,foe:!1},qn({t:"start"}),fc(dc)}function Su(){if(S.view)return;let i=j("#arenaWrap");if(vu&&!uc.has("2d"))try{S.view=new vu(j("#cv"),i,S.me,Ap,{quality:le.quality}),S.view3d=!0}catch(t){console.warn("Sin 3D:",t)}S.view||(S.view=new Xo(j("#cv"),S.me,Ap))}function fc(i){S.state="countdown",Pp(),Xn("versus"),j("#vsFoe").textContent=S.foeName,j("#vsMe").textContent=S.myName,j("#vsMeTr").textContent=S.mode==="practice"?"":`\u{1F3C6} ${le.trophies}`,j("#vsFoeTr").textContent=S.foeTrophies!=null&&S.mode!=="practice"?`\u{1F3C6} ${S.foeTrophies}`:"",setTimeout(()=>{try{Su();let s=[vi(),S.foeDeck||Dn];S.view.warm&&S.view.warm([...new Set([...s[0],...s[1]])])}catch(s){console.warn(s)}},60);let t=j("#vsCount"),e=3,n=()=>{S.state==="countdown"&&(t.textContent=e>0?String(e):"\xA1A luchar!",t.classList.remove("pop"),t.offsetWidth,t.classList.add("pop"),Kt(e>0?"tick":"go"),e>0?(e--,setTimeout(n,800)):setTimeout(()=>{S.state==="countdown"&&i()},450))};n()}function Hv(i){Lr(),S.mode="practice",S.me=0,S.level=i,S.myName=bu(),S.foeName=Iv[i],S.foeTrophies=null;let t=i===0?[0]:i===1?[1,4]:[2,3];S.foeDeck=Hu[t[Math.floor(Math.random()*t.length)]],fc(dc)}function dc(){if(S.state="playing",S.endHandled=!1,S.pending=[],S.seq=0,S.tickOff=null,S.jitter=0,S.sel=-1,S.ghost=null,S.press=null,S.canvasPress=null,S.outEv=[],S.sinceSend=0,S.lastCount=-1,S.rematch={me:!1,foe:!1},S.hud={hand:[-1,-1,-1,-1],next:-1,el:5,elAt:performance.now(),tm:1800,ph:0,crowns:[0,0]},S.handKey="",Xn("game"),j("#foeName").textContent=S.foeName,j("#meName").textContent=S.myName,j("#netInfo").textContent="",j("#emotePad").classList.add("hidden"),j("#countdown").classList.add("hidden"),Su(),S.view.resize(),S.view.reset(S.me),S.mode!=="guest"){let i=S.mode==="practice"?[vi(),S.foeDeck]:[vi(),S.foeDeck];S.game=new Go({decks:i}),S.bot=S.mode==="practice"?new Wo(S.game,1,S.level):null,S.acc=0,S.lastT=performance.now();let t=S.game.snapshot(0);t.ev=[],S.view.pushFrame(t),wu()}else S.game=null,S.bot=null;No(),zp(!0),setTimeout(()=>{S.state==="playing"&&gu("Arrastra una carta a tu mitad del campo")},400)}function Fp(){let i=S.game;if(!i||S.mode==="guest"||S.state!=="playing"&&S.state!=="over")return;let t=performance.now();S.lastSimAt=t,S.acc+=(t-S.lastT)/1e3,S.lastT=t,S.acc>.5&&(S.acc=.5);let n=S.tr&&S.tr.kind==="relay"?2:1;for(;S.acc>=Re;){S.acc-=Re,i.phase!=="over"&&(S.bot&&S.bot.update(Re),i.step());let s=i.drainEvents();if(i.phase==="over"&&!s.length){S.acc=0;break}let r=i.snapshot(0);if(r.ev=s,S.view.pushFrame(r),S.mode==="host"&&S.tr){for(let o of s)S.outEv.push(o);if(S.sinceSend++,S.sinceSend>=n||i.phase==="over"){let o=i.snapshot(1);o.ev=S.outEv,S.outEv=[],S.sinceSend=0,JSON.stringify(o).length>14e3&&(o.ev=o.ev.filter(a=>a.t!=="proj"&&a.t!=="hit"&&a.t!=="spawn")),qn(o)}}}wu()}setInterval(()=>{performance.now()-S.lastSimAt>120&&Fp()},50);function wu(){let i=S.game,t=i.hand(0);t.join(",")+"|"+i.next(0)!==S.handKey&&(S.hud.hand=t.slice(),S.hud.next=i.next(0),No()),S.hud.tm=Math.round(i.time*10),S.hud.ph=["normal","double","overtime","over"].indexOf(i.phase),S.hud.crowns=i.crowns.slice()}function Wv(i){let t=performance.now();S.view.pushFrame(i);let e=i.k-t/Rp;if(S.tickOff===null||Math.abs(e-S.tickOff)>40)S.tickOff=e,S.jitter=1;else{let s=e-S.tickOff;S.jitter+=(Math.abs(s)-S.jitter)*.08,S.tickOff+=s*(s>0?.25:.04)}S.pending=S.pending.filter(s=>s.seq>i.ack&&t-s.at<2500);let n=S.pending.reduce((s,r)=>s+r.cost,0);S.hud.el=i.el/100-n,S.hud.elAt=t,S.hud.tm=i.tm,S.hud.ph=i.ph,S.hud.crowns=i.c,S.pending.length||i.h.join(",")+"|"+i.n!==S.handKey&&(S.hud.hand=i.h.slice(),S.hud.next=i.n,No()),i.w>=0&&!S.endHandled&&setTimeout(()=>{S.endHandled||Gp(i.w,"")},2500)}function Xv(){if(S.tickOff===null)return 0;let i=S.tr&&S.tr.kind==="relay",t=Math.min(9,Math.max(i?3:2,1.5+S.jitter*2.2+(i?1:0))),e=S.view.latest(),n=performance.now()/Rp+S.tickOff-t;return e?Math.min(n,e.k):n}function Op(){if(S.mode!=="guest")return S.game?S.game.elixir[0]:0;let i=S.hud.ph===1?2:S.hud.ph===2?3:S.hud.ph===3?0:1;return Math.min(10,S.hud.el+Es*i*(performance.now()-S.hud.elAt)/1e3)}function Bp(){let i=j("#hand");i.innerHTML="",S.cardEls=[];for(let t=0;t<4;t++){let e=document.createElement("div");e.className="card",e.dataset.slot=t,e.innerHTML='<div class="cost"><b></b></div><div class="cover"></div>',i.appendChild(e),S.cardEls.push({el:e,card:-2,cover:-1,na:null,costEl:e.querySelector(".cost b"),coverEl:e.querySelector(".cover")})}}function No(){S.cardEls.length||Bp();let i=S.hud.hand;S.handKey=i.join(",")+"|"+S.hud.next,i.forEach((n,s)=>{let r=S.cardEls[s];if(r.card!==n){let o=r.card>=0;if(r.card=n,n>=0){let a=Ht[n];r.el.style.backgroundImage=`url(${Pr(n)})`,r.el.className="card r-"+a.rarity,r.costEl.textContent=a.cost}else r.el.style.backgroundImage="",r.el.className="card used";r.cover=-1,r.na=null,o&&n>=0&&(r.el.classList.remove("flash"),r.el.offsetWidth,r.el.classList.add("flash"))}r.el.classList.toggle("sel",S.sel===s)});let t=j("#nextCard"),e=S.hud.next;t.style.backgroundImage=e>=0&&e!==void 0?`url(${Pr(e)})`:""}var Wn={};function zp(i){let t=Op(),e=Math.round(Math.max(0,Math.min(100,t*10))*2)/2;(i||Wn.pct!==e)&&(j("#elixirFill").style.width=e+"%",Wn.pct=e);let n=Math.floor(t+1e-6);(i||Wn.ef!==n)&&(j("#elixirNum").textContent=n,Wn.ef=n);for(let f of S.cardEls){if(f.card<0)continue;let d=Ht[f.card].cost,p=t<d;f.na!==p&&(f.el.classList.toggle("na",p),f.na=p);let x=p?Math.round((1-t/d)*50)*2:0;f.cover!==x&&(f.coverEl.style.height=x+"%",f.cover=x)}let s=Math.max(0,S.hud.tm),r=Math.ceil(s/10),o=`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,a=S.hud.ph;if(i||Wn.txt!==o||Wn.ph!==a){j("#clockTime").textContent=o,j("#clockLabel").textContent=a===1?"Elixir x2":a===2?"Muerte s\xFAbita":a===3?"Final":"Tiempo";let f=j("#clock");f.classList.toggle("x2",a===1),f.classList.toggle("ot",a===2),f.classList.toggle("hurry",a<3&&r<=10),j("#elixir").classList.toggle("x2",a===1||a===2),Wn.txt=o,Wn.ph=a}if(S.state==="playing"&&a<3){let f=r<=10&&r>0,d=j("#countdown");f&&r!==S.lastCount?(S.lastCount=r,d.textContent=r,d.className=r<=3?"big":"",d.offsetWidth,d.classList.add("tickin"),Kt(r<=3?"count3":"count"),r<=3&&ss(25)):!f&&S.lastCount!==-1&&(S.lastCount=-1,d.className="hidden")}let l=S.hud.crowns,c=S.me,h=l[c],u=l[1-c];(i||Wn.cm!==h)&&(j("#meCrowns b").textContent=h,i||Ep("#meCrowns"),Wn.cm=h),(i||Wn.cf!==u)&&(j("#foeCrowns b").textContent=u,i||Ep("#foeCrowns"),Wn.cf=u)}function Ep(i){let t=j(i);t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")}function Ap(i){let t=S.me;switch(i.t){case"deploy":i.o!==t&&Kt("enemyDeploy");break;case"proj":Kt("shoot");break;case"hit":Kt("hit");break;case"splash":Kt("splash");break;case"spin":Kt("splash");break;case"lance":Kt("hit"),Kt("boom");break;case"spell":Ht[i.c].spell.kind==="fireball"&&Kt("spell");break;case"boom":Kt("boom"),ss(35);break;case"volley":Kt("volley");break;case"zap":Kt("zap"),ss(40);break;case"freeze":Kt("freeze");break;case"rage":Kt("rage");break;case"charge":Kt("charge");break;case"spawn":Kt("spawn");break;case"quake":Kt("quake"),ss(50);break;case"death":Kt("die");break;case"tower":if(Kt("tower"),ss(i.o===t?[80,60,120]:90),S.mode==="practice"){let e=i.o===t?Math.random()<.6?"\u{1F602}":"\u{1F44D}":Math.random()<.5?"\u{1F62D}":"\u{1F621}";setTimeout(()=>{S.view&&S.state==="playing"&&(S.view.emote(1,e),Kt("emote"))},700)}break;case"king":Kt("king");break;case"phase":Kt("phase"),i.ph===1?(Ir("\xA1\xDAltimo minuto! Elixir x2","purple"),Kt("minute")):i.ph===2&&(Ir("\xA1Muerte s\xFAbita!","red"),Kt("horn"),S.lastCount=-1,j("#countdown").className="hidden");break;case"end":Gp(i.w,i.r);break}}function Vp(i){if(S.mode!=="host"&&S.mode!=="guest")return null;let t=i==="win"?Pv:i==="loss"?-Math.min(Lv,le.trophies):0;le.trophies=Math.max(0,le.trophies+t),le.best=Math.max(le.best||0,le.trophies),i==="win"?le.wins++:i==="loss"&&le.losses++;let e=S.foeName.trim().toLowerCase()||"rival",n=le.history[e]||{name:S.foeName,w:0,l:0,d:0};return n.name=S.foeName,i==="win"?n.w++:i==="loss"?n.l++:n.d++,n.last=Date.now(),le.history[e]=n,Ss(),{delta:t,h:n}}function Gp(i,t=""){if(S.endHandled)return;S.endHandled=!0,S.state="over",S.ghost=null,S.sel=-1,No(),j("#countdown").className="hidden";let e=S.me,n=i===e,s=i===2,r=Vp(n?"win":s?"draw":"loss");t==="time"||t==="tiebreak"?(Ir("\xA1Tiempo!",""),Kt("horn")):t!=="surrender"&&Ir(n?"\xA1Victoria!":s?"Empate":"Derrota",n?"":"red"),setTimeout(()=>{if(S.state!=="over")return;let o=S.hud.crowns;Kt(n?"win":s?"draw":"lose");let a;t==="surrender"?a=n?`${S.foeName} se ha rendido.`:"Te has rendido.":t==="tiebreak"?a=n?"Desempate: tu torre m\xE1s da\xF1ada ha aguantado m\xE1s.":s?"Mismo da\xF1o en las torres. Toca revancha.":"Desempate: a tu torre m\xE1s da\xF1ada le quedaba menos vida.":n?a=o[e]===3?"\xA1Has tirado la torre del rey!":`Ganas ${o[e]} a ${o[1-e]} en coronas.`:s?a="Nadie ha conseguido ventaja. Toca revancha.":a=o[1-e]===3?"Han tirado tu torre del rey.":`Pierdes ${o[e]} a ${o[1-e]} en coronas.`,Hp({title:n?"\xA1Victoria!":s?"Empate":"Derrota",lose:!n&&!s,text:a,rematch:!0,delta:r})},1900)}function Hp({title:i,lose:t,text:e,rematch:n,delta:s}){let r=S.hud.crowns,o=S.me;j("#resTitle").textContent=i,j("#resTitle").classList.toggle("lose",!!t),j("#resCrowns").innerHTML=`<span class="me">${lc(S.myName)} ${r[o]}</span><span class="vsx">contra</span><span class="foe">${r[1-o]} ${lc(S.foeName)}</span>`;let a=j("#resTrophies");if(s){a.classList.remove("hidden");let c=s.delta;a.innerHTML=`<b class="${c>0?"up":c<0?"down":""}">${c>0?"+":""}${c} \u{1F3C6}</b><span>Ahora tienes ${le.trophies} \xB7 ${bc(le.trophies).name}</span><span>Contra ${lc(s.h.name)}: ${s.h.w}V \xB7 ${s.h.l}D${s.h.d?" \xB7 "+s.h.d+"E":""}</span>`}else a.classList.add("hidden");j("#resText").textContent=e;let l=j("#btnRematch");l.classList.toggle("hidden",!n),l.disabled=!1,l.textContent="Revancha",j("#rematchInfo").textContent="",Tu(),j("#overlay").classList.remove("hidden")}function Tu(){if(S.state!=="over")return;let i=j("#rematchInfo");S.rematch.me&&!S.rematch.foe?i.textContent="Esperando a que tu rival acepte\u2026":S.rematch.foe&&!S.rematch.me?i.textContent=`${S.foeName} quiere la revancha.`:i.textContent=""}function qv(){j("#btnRematch").onclick=()=>{if(Un(),Kt("select"),S.mode==="practice"){j("#overlay").classList.add("hidden"),fc(dc);return}S.tr&&(S.rematch.me=!0,j("#btnRematch").disabled=!0,j("#btnRematch").textContent="Revancha pedida",qn({t:"rematch"}),Tu(),S.mode==="host"&&S.rematch.foe&&_u())},j("#btnMenu").onclick=()=>{Kt("select"),Lr(),S.state="menu",S.mode=null,S.game=null,S.bot=null,yu(),Xn("menu")},j("#confirmNo").onclick=()=>j("#confirm").classList.add("hidden"),j("#confirmYes").onclick=()=>{j("#confirm").classList.add("hidden"),S.state==="playing"&&(S.mode==="guest"?qn({t:"surrender"}):S.game&&S.game.finish(1,"surrender"))}}function Wp(i,t,e){if(S.game)return S.game.canPlace(S.me,i,t,e);let n=S.view.latest();if(!n)return!1;let s=[],r=[];for(let o=0;o<6;o++){let a=o<3?0:1,l=xn[o%3],[c,h]=bi(a,l.x,l.y),u={owner:a,tkind:l.kind,lane:l.lane<0?-1:c<18/2?0:1,hp:n.tw[o],x:c,y:h,radius:Fi[l.kind].radius,kind:"tower"};s.push(u),u.hp>0&&r.push(u)}for(let o of n.ents.values()){let a=Xe[Object.keys(Xe)[o[1]]];a&&a.building&&r.push({kind:"building",x:o[3]/20,y:o[4]/20,radius:a.radius})}return Sc(S.me,i,t,e,s,r)}function Yv(i){S.sel!==i&&Kt("select"),S.sel=i;for(let[t,e]of S.cardEls.entries())e.el.classList.toggle("sel",t===i)}function Xp(){S.sel=-1,S.ghost=null;for(let i of S.cardEls)i.el.classList.remove("sel")}function mu(i,t,e){let n=S.sel,s=S.hud.hand[n];if(n<0||s<0){S.ghost=null;return}let r=j("#cv").getBoundingClientRect(),o=i-r.left,a=t-r.top-(e?S.view.S*1.3:0);if(!S.view.inArena(o,a)){S.ghost=null;return}let[l,c]=S.view.toWorld(o,a),h,u;Ht[s].type==="spell"?(h=Math.min(18,Math.max(0,l)),u=Math.min(32,Math.max(0,c))):[h,u]=Ho(l,c),S.ghost={card:s,slot:n,x:h,y:u,valid:Wp(s,h,u)}}function Cp(i,t,e){let n=S.hud.hand[i];if(S.state!=="playing"||n<0)return!1;let s=Ht[n];if(Op()<s.cost)return gu("Te falta elixir"),Kt("error"),!1;if(!Wp(n,t,e))return gu(s.type==="building"?"Los edificios van en tu mitad":"Solo puedes soltarla en tu mitad"),Kt("error"),!1;if(S.mode!=="guest"){if(!S.game.play(0,i,n,t,e))return Kt("error"),!1;wu()}else{let r=++S.seq;qn({t:"play",s:r,slot:i,c:n,x:t,y:e}),S.pending.push({seq:r,cost:s.cost,at:performance.now()}),S.hud.el-=s.cost,S.view.predict&&S.view.predict(n,...s.type==="spell"?[t,e]:Ho(t,e)),S.hud.hand=S.hud.hand.slice(),S.hud.hand[i]=S.hud.next??-1,S.hud.next=-1}return Kt("deploy"),ss(15),Xp(),No(),!0}function $v(){let i=j("#hand"),t=j("#cv");i.addEventListener("pointerdown",r=>{let o=r.target.closest(".card");if(!o||S.state!=="playing")return;r.preventDefault(),Un();let a=+o.dataset.slot;if(S.hud.hand[a]<0)return;let l=S.sel===a;S.press={slot:a,id:r.pointerId,x0:r.clientX,y0:r.clientY,drag:!1,wasSel:l,touch:r.pointerType!=="mouse"},Yv(a)}),window.addEventListener("pointermove",r=>{S.press&&r.pointerId===S.press.id?(!S.press.drag&&Math.hypot(r.clientX-S.press.x0,r.clientY-S.press.y0)>10&&(S.press.drag=!0),S.press.drag&&mu(r.clientX,r.clientY,S.press.touch)):S.canvasPress&&r.pointerId===S.canvasPress.id&&mu(r.clientX,r.clientY,!1)},{passive:!0});let e=r=>{if(S.press&&r.pointerId===S.press.id){let o=S.press;S.press=null,o.drag?(S.ghost&&r.type==="pointerup"&&Cp(o.slot,S.ghost.x,S.ghost.y),S.ghost=null):o.wasSel&&Xp()}else S.canvasPress&&r.pointerId===S.canvasPress.id&&(S.canvasPress=null,S.ghost&&S.sel>=0&&r.type==="pointerup"&&Cp(S.sel,S.ghost.x,S.ghost.y),S.ghost=null)};window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e),t.addEventListener("pointerdown",r=>{j("#emotePad").classList.add("hidden"),!(S.state!=="playing"||S.sel<0)&&(r.preventDefault(),S.canvasPress={id:r.pointerId},mu(r.clientX,r.clientY,!1))});let n=j("#emotePad");n.innerHTML=Dr.map((r,o)=>`<button data-i="${o}">${r}</button>`).join(""),j("#emoteBtn").onclick=()=>{Un(),n.classList.toggle("hidden")},n.onclick=r=>{let o=r.target.closest("button");if(!o)return;n.classList.add("hidden");let a=performance.now();if(a-S.emoteAt<1500)return;S.emoteAt=a;let l=+o.dataset.i;S.view.emote(S.me,Dr[l]),Kt("emote"),qn({t:"emote",i:l})},j("#flagBtn").onclick=()=>{S.state==="playing"&&j("#confirm").classList.remove("hidden")};let s=()=>{S.view&&S.state!=="menu"&&S.view.resize()};window.addEventListener("resize",s),window.addEventListener("orientationchange",()=>setTimeout(s,300))}function qp(i){if(requestAnimationFrame(qp),S.mode!=="guest"&&Fp(),S.state!=="playing"&&S.state!=="over"||!S.view||le.quality==="ahorro"&&i-S.lastRenderAt<30)return;S.lastRenderAt=i;let t;if(S.mode==="guest")t=Xv();else{let e=S.game,n=e.phase==="over"?1:(S.acc+(performance.now()-S.lastT)/1e3)/Re;t=e.tick-1+Math.min(1,n)}zp(!1),S.view.render(t,{ghost:S.ghost})}var vu=null,Zv=uc.has("2d")?Promise.resolve():Promise.resolve().then(()=>(vp(),_p)).then(i=>{i.webglAvailable()&&(vu=i.View3D)}).catch(i=>console.warn("Sin 3D, uso el modo 2D",i));Uv();qv();$v();Bp();requestAnimationFrame(qp);window.addEventListener("pagehide",()=>Lr());Zv.then(()=>{(window.requestIdleCallback||(t=>setTimeout(t,300)))(()=>{if(!S.view)try{Su()}catch(t){console.warn(t)}})});for(let i of vi()){let t=new Image;t.src=Pr(i)}"serviceWorker"in navigator&&location.protocol==="https:"&&!uc.has("nosw")&&navigator.serviceWorker.register("sw.js").catch(()=>{});
