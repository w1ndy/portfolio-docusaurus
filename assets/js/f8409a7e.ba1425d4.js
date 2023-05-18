"use strict";(self.webpackChunkdwe_ng=self.webpackChunkdwe_ng||[]).push([[206],{9613:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var i=n(9496);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=i.createContext({}),l=function(e){var a=i.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=l(e.components);return i.createElement(u.Provider,{value:a},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},d=i.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),g=l(n),d=t,m=g["".concat(u,".").concat(d)]||g[d]||p[d]||o;return n?i.createElement(m,s(s({ref:a},c),{},{components:n})):i.createElement(m,s({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var u in a)hasOwnProperty.call(a,u)&&(r[u]=a[u]);r.originalType=e,r[g]="string"==typeof e?e:t,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},370:(e,a,n)=>{n.d(a,{Z:()=>i});const i={selected:[{image:n(7283).Z,authors:"Zikun Deng, Shifu Chen, Xiao Xie, Guodao Sun, Mingliang Xu, <u>Di Weng*</u>, Yingcai Wu*",title:"Multilevel Visual Analysis of Aggregate Geo-Networks",venue:"IEEE Transactions on Visualization and Computer Graphics (Early Access)",doi:"10.1109/TVCG.2022.3229953",abstract:"Numerous patterns found in urban phenomena, such as air pollution and human mobility, can be characterized as many directed geospatial networks (geo-networks) that represent spreading processes in urban space. These geo-networks can be analyzed from multiple levels, ranging from the macro-level of summarizing all geo-networks, meso-level of comparing or summarizing parts of geo-networks, and micro-level of inspecting individual geo-networks. Most of the existing visualizations cannot support multilevel analysis well. These techniques work by: 1) showing geo-networks separately with multiple maps leads to heavy context switching costs between different maps; 2) summarizing all geo-networks into a single network can lead to the loss of individual information; 3) drawing all geo-networks onto one map might suffer from the visual scalability issue in distinguishing individual geo-networks. In this study, we propose GeoNetverse, a novel visualization technique for analyzing aggregate geo-networks from multiple levels. Inspired by metro maps, GeoNetverse balances the overview and details of the geo-networks by placing the edges shared between geo-networks in a stacked manner. To enhance the visual scalability, GeoNetverse incorporates a level-of-detail rendering, a progressive crossing minimization, and a coloring technique. A set of evaluations was conducted to evaluate GeoNetverse from multiple perspectives."},{image:n(8172).Z,authors:"Shuhan Liu, <u>Di Weng*</u>, Yuan Tian, Zikun Deng, Haoran Xu, Xiangyu Zhu, Honglei Yin, Xianyuan Zhan, Yingcai Wu",title:"ECoalVis: Visual Analysis of Control Strategies in Coal-fired Power Plants",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 29, no. 1, pp. 1091-1101, Jan. 2023",doi:"10.1109/TVCG.2022.3209430",abstract:"Improving the efficiency of coal-fired power plants has numerous benefits. The control strategy is one of the major factors affecting such efficiency. However, due to the complex and dynamic environment inside the power plants, it is hard to extract and evaluate control strategies and their cascading impact across massive sensors. Existing manual and data-driven approaches cannot well support the analysis of control strategies because these approaches are time-consuming and do not scale with the complexity of the power plant systems. Three challenges were identified: a) interactive extraction of control strategies from large-scale dynamic sensor data, b) intuitive visual representation of cascading impact among the sensors in a complex power plant system, and c) time-lag-aware analysis of the impact of control strategies on electricity generation efficiency. By collaborating with energy domain experts, we addressed these challenges with ECoalVis, a novel interactive system for experts to visually analyze the control strategies of coal-fired power plants extracted from historical sensor data. The effectiveness of the proposed system is evaluated with two usage scenarios on a real-world historical dataset and received positive feedback from experts."},{image:n(5771).Z,authors:"Ran Chen, <u>Di Weng*</u>, Yanwei Huang, Xinhuan Shu, Jiayi Zhou, Guodao Sun, Yingcai Wu",title:"Rigel: Transforming Tabular Data by Declarative Mapping",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 29, no. 1, pp. 128-138, Jan. 2023",doi:"10.1109/TVCG.2022.3209385",abstract:"We present Rigel, an interactive system for rapid transformation of tabular data. Rigel implements a new declarative mapping approach that formulates the data transformation procedure as direct mappings from data to the row, column, and cell channels of the target table. To construct such mappings, Rigel allows users to directly drag data attributes from input data to these three channels and indirectly drag or type data values in a spreadsheet, and possible mappings that do not contradict these interactions are recommended to achieve efficient and straightforward data transformation. The recommended mappings are generated by enumerating and composing data variables based on the row, column, and cell channels, thereby revealing the possibility of alternative tabular forms and facilitating open-ended exploration in many data transformation scenarios, such as designing tables for presentation. In contrast to existing systems that transform data by composing operations (like transposing and pivoting), Rigel requires less prior knowledge on these operations, and constructing tables from the channels is more efficient and results in less ambiguity than generating operation sequences as done by the traditional by-example approaches. User study results demonstrated that Rigel is significantly less demanding in terms of time and interactions and suits more scenarios compared to the state-of-the-art by-example approach. A gallery of diverse transformation cases is also presented to show the potential of Rigel's expressiveness."}],2023:[{image:n(63).Z,authors:"Wenchao Li, Zhan Wang, Yun Wang, <u>Di Weng</u>, Liwenhan Xie, Siming Chen, Haidong Zhang, Huamin Qu",title:"GeoCamera: Telling Stories in Geographic Visualizations with Camera Movements",venue:"Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (CHI '23)",doi:"10.1145/3544548.3581470"},{image:n(7283).Z,authors:"Zikun Deng, Shifu Chen, Xiao Xie, Guodao Sun, Mingliang Xu, <u>Di Weng*</u>, Yingcai Wu*",title:"Multilevel Visual Analysis of Aggregate Geo-Networks",venue:"IEEE Transactions on Visualization and Computer Graphics (Early Access)",doi:"10.1109/TVCG.2022.3229953"},{image:n(8172).Z,authors:"Shuhan Liu, <u>Di Weng*</u>, Yuan Tian, Zikun Deng, Haoran Xu, Xiangyu Zhu, Honglei Yin, Xianyuan Zhan, Yingcai Wu",title:"ECoalVis: Visual Analysis of Control Strategies in Coal-fired Power Plants",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 29, no. 1, pp. 1091-1101, Jan. 2023",doi:"10.1109/TVCG.2022.3209430"},{image:n(5771).Z,authors:"Ran Chen, <u>Di Weng*</u>, Yanwei Huang, Xinhuan Shu, Jiayi Zhou, Guodao Sun, Yingcai Wu",title:"Rigel: Transforming Tabular Data by Declarative Mapping",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 29, no. 1, pp. 128-138, Jan. 2023",doi:"10.1109/TVCG.2022.3209385"},{image:n(4928).Z,authors:"Zikun Deng, <u>Di Weng*</u>, Shuhan Liu, Yuan Tian, Mingliang Xu, Yingcai Wu*",title:"A survey of urban visual analytics: Advances and future directions",venue:"Computational Visual Media, vol. 9, pp. 3\u201339, 2023",doi:"10.1007/s41095-022-0275-7"},{image:n(7305).Z,authors:"Zikun Deng, <u>Di Weng*</u>, Yingcai Wu",title:"You are experienced: interactive tour planning with crowdsourcing tour data from web",venue:"Journal of Visualization, vol. 26, pp. 385\u2013401, 2023",doi:"10.1007/s12650-022-00884-1"}],2022:[{image:n(4314).Z,authors:"Ran Chen, Xinhuan Shu, Jiahui Chen, <u>Di Weng</u>, Junxiu Tang, Siwei Fu, Yingcai Wu",title:"Nebula: A Coordinating Grammar of Graphics",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 12, pp. 4127-4140, 2022",doi:"10.1109/TVCG.2021.3076222"},{image:n(8698).Z,authors:"Zikun Deng, <u>Di Weng</u>, Yuxuan Liang, Jie Bao, Yu Zheng, Tobias Schreck, Mingliang Xu, Yingcai Wu",title:"Visual Cascade Analytics of Large-Scale Spatiotemporal Data",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 6, pp. 2486-2499, 2022",doi:"10.1109/TVCG.2021.3071387"},{image:n(3720).Z,authors:"Junxiu Tang, Yuhua Zhou, Tan Tang, <u>Di Weng</u>, Boyang Xie, Lingyun Yu, Huaqiang Zhang, Yingcai Wu",title:"A Visualization Approach for Monitoring Order Processing in E-Commerce Warehouse",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 1, pp. 857-867, 2022",doi:"10.1109/TVCG.2021.3114878"},{image:n(8044).Z,authors:"Zikun Deng, <u>Di Weng</u>, Xiao Xie, Jie Bao, Yu Zheng, Mingliang Xu, Wei Chen, Yingcai Wu",title:"Compass: Towards Better Causal Analysis of Urban Time Series",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 1, pp. 1051-1061, 2022",doi:"10.1109/TVCG.2021.3114875"}],2021:[{image:n(1441).Z,authors:"Shuhan Liu, <u>Di Weng</u>, Yingcai Wu",title:"A Review on Industrial Data Visual Analytics",venue:"Journal of Integration Technology, vol. 11, no. 6, pp. 3-19, 2021",doi:"10.12146/j.issn.2095-3135.20210630003"},{image:n(2211).Z,authors:"Yingcai Wu, <u>Di Weng</u>, Zikun Deng, Jie Bao, Mingliang Xu, Zhangye Wang, Yu Zheng, Zhiyu Ding, Wei Chen",title:"Towards Better Detection and Analysis of Massive Spatiotemporal Co-Occurrence Patterns",venue:"IEEE Transactions on Intelligent Transportation Systems, vol. 22, no. 6, pp. 3387-3402, 2021",doi:"10.1109/TITS.2020.2983226"},{image:n(9964).Z,authors:"<u>Di Weng</u>, Chengbo Zheng, Zikun Deng, Mingze Ma, Jie Bao, Yu Zheng, Mingliang Xu, Yingcai Wu",title:"Towards Better Bus Networks: A Visual Analytics Approach",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 27, no. 2, pp. 817-827, 2021",doi:"10.1109/TVCG.2020.3030458"},{image:n(9332).Z,authors:"<u>Di Weng</u>, Ran Chen, Jianhui Zhang, Jie Bao, Yu Zheng, Yingcai Wu",title:"Pareto-Optimal Transit Route Planning With Multi-Objective Monte-Carlo Tree Search",venue:"IEEE Transactions on Intelligent Transportation Systems, vol. 22, no. 2, pp. 1185-1195, 2021",doi:"10.1109/TITS.2020.2964012"}],earlier:[{image:n(4299).Z,authors:"Zikun Deng, <u>Di Weng</u>, Jiahui Chen, Ren Liu, Zhibin Wang, Jie Bao, Yu Zheng, Yingcai Wu",title:"AirVis: Visual Analytics of Air Pollution Propagation",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 26, no. 1, pp. 800-810, 2020",doi:"10.1109/TVCG.2019.2934670"},{image:n(6634).Z,authors:"<u>Di Weng</u>, Ran Chen, Zikun Deng, Feiran Wu, Jingmin Chen, Yingcai Wu",title:"SRVis: Towards Better Spatial Integration in Ranking Visualization",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 25, no. 1, pp. 459-469, 2019",doi:"10.1109/TVCG.2018.2865126"},{image:n(7641).Z,authors:"<u>Di Weng</u>, Heming Zhu, Jie Bao, Yu Zheng, Yingcai Wu",title:"HomeFinder Revisited: Finding Ideal Homes with Reachability-Centric Multi-Criteria Decision Making",venue:"Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (CHI '18), Paper 247, 1\u201312",doi:"10.1145/3173574.3173821"},{image:n(7018).Z,authors:"Dongyu Liu, <u>Di Weng</u>, Yuhong Li, Jie Bao, Yu Zheng, Huamin Qu, and Yingcai Wu",title:"SmartAdP: Visual Analytics of Large-scale Taxi Trajectories for Selecting Billboard Locations",venue:"IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 1-10, 2017",doi:"10.1109/TVCG.2016.2598432"}]}},9078:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var i=n(2564),t=n(9496),o=n(9613),s=n(370);const r={sidebar_position:1,slug:"/"},u="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"<img",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Experience",permalink:"/experience"}},c={},g=[{value:"News",id:"news",level:2},{value:"Selected Publications",id:"selected-publications",level:2},{value:"Contact",id:"contact",level:2}],p=(d="Publication",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:g},h="wrapper";function f(e){let{components:a,...r}=e;return(0,o.kt)(h,(0,i.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("img",{style:{float:"left",borderRadius:"10px",marginRight:"20px"},src:n(4512).Z,width:"150"}),(0,o.kt)("p",null,"\ud83d\udc4b Hi, I'm Di Weng (\u7fc1\u837b), a tenure-track assistant professor at School of Software Technology, Zhejiang University.\nMy research interest lies in ",(0,o.kt)("strong",{parentName:"p"},"information visualization and visual analytics"),", focusing on interactive data transformation and spatiotemporal data analysis.\nI've published over 15 papers in prestigious computer science conferences and journals, including IEEE VIS, ACM CHI, IEEE TVCG, IEEE ITS, etc.\nI've also served as program committee members for IEEE VIS 2023, ChinaVis 2022 and 2023, and CGI 2023, as well as reviewers for many journals and conferences.\nI received my B.Eng. degree from Shandong University in 2016 and Ph.D. degree from Zhejiang University in 2021.\nPrior to my current position, I was a researcher at Microsoft Research Asia from 2022 to 2023. For more information on my experience, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./experience"},"Experience")," page."),(0,o.kt)("p",null,"\ud83d\udd25 Looking for motivated students to join my research group! Please ",(0,o.kt)("a",{parentName:"p",href:"mailto:dweng@zju.edu.cn"},"drop me an email")," if you are interested."),(0,o.kt)("h2",{id:"news"},"News"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Apr 23, 2023:"),' Our paper, "',(0,o.kt)("a",{parentName:"li",href:"https://dl.acm.org/doi/10.1145/3544548.3581470"},"GeoCamera: Telling Stories in Geographic Visualizations with Camera Movements"),'", will be presented at ',(0,o.kt)("a",{parentName:"li",href:"https://chi2023.acm.org/"},"the upcoming CHI 2023 conference"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mar 6, 2023:")," I've joined School of Software Technology, Zhejiang University as a tenure-track assistant professor.")),(0,o.kt)("h2",{id:"selected-publications"},"Selected Publications"),(0,o.kt)(t.Fragment,null,s.Z.selected.map((e=>(0,o.kt)(p,{image:e.image,authors:e.authors,title:e.title,venue:e.venue,doi:e.doi,key:e.doi,abstract:e.abstract,mdxType:"Publication"})))),(0,o.kt)("h2",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Office:")," Room E502, School of Software Technology, Zhejiang University, Ningbo, Zhejiang, China"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:dweng@zju.edu.cn"},"dweng@zju.edu.cn"))))}f.isMDXComponent=!0},4512:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/me-0946b431a49525928e0a41d9af04efd9.jpg"},4299:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/airvis-4a2c4128f23d64f9b100e71a7388143d.png"},9964:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/bnva-664c3c8829539eaa12ed26ee8c26b63f.png"},8044:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/compass-778828f8b537a7f997f2a7a613e77fed.png"},2211:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/corvizor-37e127f7042b4d7f05da4bd25cc170b1.png"},7305:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/ct3-050699b6a506e9df224601f894bcbb83.png"},8172:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/ecoalvis-a45ae48c05e5d505c85b998d7965ebcc.png"},63:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/geocamera-822468dce45400519ebae870e41607b1.png"},7283:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/geonetverse-639ea0bd7d180085428c0bb66f6dd94d.png"},7641:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/homefinder-ca9c447c190cd05d480501072bdef5fc.png"},1441:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/industrial_survey-743eba196728e2e9f85d185b846f1994.png"},9332:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/mcrs-4f11be17ef81cb088961038367b1ba7b.png"},4314:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/nebula-3fe290a5423b3ba05b689fa5044c85c4.png"},3720:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/ordermonitor-992b720fd211083c6ca5f73d11cb06cc.png"},5771:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/rigel-f6074adc2e8b636b4c878dc16714c025.png"},7018:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/smartadp-22547f279ba260b4b8166c33d62d21ff.png"},6634:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/srvis-f467ef49148bd1b26757c3262bb810f9.png"},4928:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/urbansurvey-2969991cd049548f68441b424fe4a042.png"},8698:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/viscas-bace7ad8123ac74af0b8af2de4a25ae0.png"}}]);