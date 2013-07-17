/*
jQWidgets v2.9.1 (2013-June-28)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.extend(a.jqx._jqxGrid.prototype,{_handledblclick:function(t,n){if(t.target==null){return}if(n.disabled){return}if(a(t.target).ischildof(this.columnsheader)){return}var w;if(t.which){w=(t.which==3)}else{if(t.button){w=(t.button==2)}}if(w){return}var B;if(t.which){B=(t.which==2)}else{if(t.button){B=(t.button==1)}}if(B){return}var v=this.showheader?this.columnsheader.height()+2:0;var o=this._groupsheader()?this.groupsheader.height():0;var A=this.showtoolbar?this.toolbarheight:0;o+=A;var e=this.host.offset();var m=t.pageX-e.left;var l=t.pageY-v-e.top-o;var b=this._hittestrow(m,l);var h=b.row;var j=b.index;var q=t.target.className;var p=this.table[0].rows[j];if(p==null){return}n.mousecaptured=true;n.mousecaptureposition={left:t.pageX,top:t.pageY-o};var r=this.hScrollInstance;var s=r.value;var d=0;var k=this.groupable?this.groups.length:0;for(var u=0;u<p.cells.length;u++){var f=parseInt(a(this.columnsrow[0].cells[u]).css("left"));var g=f-s;if(n.columns.records[u].pinned){g=f}var c=this._getcolumnat(u);if(c!=null&&c.hidden){continue}var z=g+a(this.columnsrow[0].cells[u]).width();if(z>=m&&m>=g){d=u;break}}if(h!=null){var c=this._getcolumnat(d);if(!(q.indexOf("jqx-grid-group-expand")!=-1||q.indexOf("jqx-grid-group-collapse")!=-1)){if(h.boundindex!=-1){n.begincelledit(h.boundindex,c.datafield,c.defaulteditorvalue)}}}},_getpreveditablecolumn:function(c){var b=this;while(c>0){c--;var d=b.getcolumnat(c);if(!d){return null}if(!d.editable){continue}if(!d.hidden){return d}}return null},_getnexteditablecolumn:function(c){var b=this;while(c<this.columns.records.length){c++;var d=b.getcolumnat(c);if(!d){return null}if(!d.editable){continue}if(!d.hidden){return d}}return null},_handleeditkeydown:function(z,u){var D=z.charCode?z.charCode:z.keyCode?z.keyCode:0;if(u.showfilterrow&&u.filterable){if(this.filterrow){if(a(z.target).ischildof(this.filterrow)){return true}}}if(u.pageable){if(a(z.target).ischildof(this.pager)){return true}}if(this.showtoolbar){if(a(z.target).ischildof(this.toolbar)){return true}}if(this.showstatusbar){if(a(z.target).ischildof(this.statusbar)){return true}}if(this.rowdetails){if(a(z.target).ischildof(this.content.find("[role='rowgroup']"))){return true}}if(this.editcell){if(this.editcell.columntype==null||this.editcell.columntype=="textbox"||this.editcell.columntype=="numberinput"||this.editcell.columntype=="combobox"||this.editcell.columntype=="datetimeinput"){if(D>=33&&D<=40&&u.selectionmode=="multiplecellsadvanced"){var h=this.editcell.columntype=="textbox"||this.editcell.columntype==null?this.editcell.editor:this.editcell.editor.find("input");var E=u._selection(h);var v=h.val().length;if(E.length>0&&this.editcell.columntype!="datetimeinput"){u._cancelkeydown=true}if(E.start>0&&D==37){u._cancelkeydown=true}if(E.start<v&&D==39&&this.editcell.columntype!="datetimeinput"){u._cancelkeydown=true}if(this.editcell.columntype=="datetimeinput"&&D==39){if(E.start+E.length<v){u._cancelkeydown=true}}}}else{if(this.editcell.columntype=="dropdownlist"){if(D==37||D==39&&u.selectionmode=="multiplecellsadvanced"){u._cancelkeydown=false}}else{if(this.selectionmode=="multiplecellsadvanced"&&this.editcell.columntype!="textbox"&&this.editcell.columntype!="numberinput"){u._cancelkeydown=true}}}if(D==32){if(u.editcell.columntype=="checkbox"){var e=u.getcolumn(u.editcell.datafield);if(e.editable){var l=!u.getcellvalue(u.editcell.row,u.editcell.column);if(e.cellbeginedit){var b=e.cellbeginedit(u.editcell.row,e.datafield,e.columntype,!l);if(b==false){return false}}u.setcellvalue(u.editcell.row,u.editcell.column,l,true);u._raiseEvent(18,{rowindex:u.editcell.row,datafield:u.editcell.column,oldvalue:!l,value:l,columntype:"checkbox"});return false}}}if(D==9){var g=this.editcell.row;var s=this.editcell.column;var k=s;var x=u._getcolumnindex(s);var r=false;var d=u.getrowvisibleindex(g);this.editchar="";if(this.editcell.validated!=false){if(z.shiftKey){var e=u._getpreveditablecolumn(x);if(e){s=e.datafield;r=true;if(u.selectionmode.indexOf("cell")!=-1){u.selectprevcell(g,k);setTimeout(function(){u.ensurecellvisible(d,s)},10)}}}else{var e=u._getnexteditablecolumn(x);if(e){s=e.datafield;r=true;if(u.selectionmode.indexOf("cell")!=-1){u.selectnextcell(g,k);u._oldselectedcell=u.selectedcell;setTimeout(function(){u.ensurecellvisible(d,s)},10)}}}if(r){u.begincelledit(g,s);if(this.editcell!=null&&this.editcell.columntype=="checkbox"){this._renderrows(this.virtualsizeinfo)}}else{if(this.editcell!=null){u.endcelledit(g,s,false);this._renderrows(this.virtualsizeinfo)}return true}}return false}else{if(D==13){var q=this.selectedcell;if(q){var t=this.getrowvisibleindex(q.rowindex)}this.endcelledit(this.editcell.row,this.editcell.column,false,true);if(this.selectionmode=="multiplecellsadvanced"){var c=u.getselectedcell();if(c!=null){if(u.selectcell){if(this.editcell==null){if(c.rowindex+1<this.dataview.totalrecords){if(this.sortcolumn!=c.datafield){var d=this.getrowvisibleindex(c.rowindex);var C=this.dataview.loadedrecords[d+1];if(C){if(!this.pageable||(this.pageable&&d+1<this.pagesize)){this.clearselection(false);this.selectcell(C.boundindex,c.datafield);var c=this.getselectedcell();this.ensurecellvisible(C.visibleindex,c.datafield)}}}else{if(q!=null){var B=this.dataview.loadedrecords[t+1];if(B){if(!this.pageable||(this.pageable&&t+1<this.pagesize)){this.clearselection(false);this.selectcell(B.boundindex,c.datafield)}else{if(this.pageable&&t+1>=this.pagesize){this.clearselection(false);var B=this.dataview.loadedrecords[t];this.selectcell(B.boundindex,c.datafield)}}}}}}}}}}return false}else{if(D==27){this.endcelledit(this.editcell.row,this.editcell.column,true,true);return false}}}}else{var w=false;if(D==113){w=true}if(!z.ctrlKey&&!z.altKey){if(D>=48&&D<=57){this.editchar=String.fromCharCode(D);w=true}if(D>=65&&D<=90){this.editchar=String.fromCharCode(D);var p=false;if(z.shiftKey){p=z.shiftKey}else{if(z.modifiers){p=!!(z.modifiers&4)}}if(!p){this.editchar=this.editchar.toLowerCase()}w=true}else{if(D>=96&&D<=105){this.editchar=D-96;this.editchar=this.editchar.toString();w=true}}var o=a(".jqx-grid").length;w=w&&(o==1||(o>1&&u.focused));var j=a.data(document.body,"jqxgrid.edit");if(j!==undefined&&j!==""){if(D===13||w){if(j!=u.element.id){return true}}}}if(D==13||w){if(u.getselectedrowindex){var g=u.getselectedrowindex();switch(u.selectionmode){case"singlerow":case"multiplerows":case"multiplerowsextended":if(g>=0){var s="";for(var y=0;y<u.columns.records.length;y++){var e=u.getcolumnat(y);if(e.editable){s=e.datafield;break}}u.begincelledit(g,s)}break;case"singlecell":case"multiplecells":case"multiplecellsextended":var c=u.getselectedcell();if(c!=null){var e=u._getcolumnbydatafield(c.datafield);if(e.columntype!="checkbox"){u.begincelledit(c.rowindex,c.datafield)}}break;case"multiplecellsadvanced":var c=u.getselectedcell();if(c!=null){if(D==13){if(u.selectcell){if(c.rowindex+1<u.dataview.totalrecords){var d=this.getrowvisibleindex(c.rowindex);var C=this.dataview.loadedrecords[d+1];if(C){this.clearselection(false);this.selectcell(C.boundindex,c.datafield);var c=this.getselectedcell();this.ensurecellvisible(C.visibleindex,c.datafield)}}}}else{u.begincelledit(c.rowindex,c.datafield)}}break}return false}}if(D==46){var f=u.getselectedcells();if(u.selectionmode.indexOf("cell")==-1){if(u._getcellsforcopypaste){f=u._getcellsforcopypaste()}}if(f!=null&&f.length>0){for(var n=0;n<f.length;n++){var c=f[n];if(!c.datafield){continue}var e=u.getcolumn(c.datafield);var A=u.getcellvalue(c.rowindex,c.datafield);if(A!==""){var i=null;if(e.columntype=="checkbox"){if(!e.threestatecheckbox){i=false}}u._raiseEvent(17,{rowindex:c.rowindex,datafield:c.datafield,value:A});if(n==f.length-1){u.setcellvalue(c.rowindex,c.datafield,i,true);if(e.displayfield!=e.datafield){u.setcellvalue(c.rowindex,e.displayfield,i,true)}}else{u.setcellvalue(c.rowindex,c.datafield,i,false);if(e.displayfield!=e.datafield){u.setcellvalue(c.rowindex,e.displayfield,i,true)}}u._raiseEvent(18,{rowindex:c.rowindex,datafield:c.datafield,oldvalue:A,value:i})}}this.dataview.updateview();this._renderrows(this.virtualsizeinfo);return false}}if(D==32){var c=u.getselectedcell();if(c!=null){var e=u.getcolumn(c.datafield);if(e.columntype=="checkbox"&&e.editable){var l=!u.getcellvalue(c.rowindex,c.datafield);if(e.cellbeginedit){var b=e.cellbeginedit(c.rowindex,e.datafield,e.columntype,!l);if(b==false){return false}}u._raiseEvent(17,{rowindex:c.rowindex,datafield:c.datafield,value:!l,columntype:"checkbox"});u.setcellvalue(c.rowindex,c.datafield,l,true);u._raiseEvent(18,{rowindex:c.rowindex,datafield:c.datafield,oldvalue:!l,value:l,columntype:"checkbox"});return false}}}}return true},begincelledit:function(k,d,i){var e=this.getcolumn(d);if(d==null){return}if(e.columntype=="number"||e.columntype=="button"){return}if(this.groupable){if(this.groups.indexOf(d)>=0){return}if(this.groups.indexOf(e.displayfield)>=0){return}}if(this.editrow!=undefined){return}if(this.editcell){if(this.editcell.row==k&&this.editcell.column==d){return true}var c=this.endcelledit(this.editcell.row,this.editcell.column,false,true,false);if(false==c){return}}var f=e.columntype=="checkbox"||e.columntype=="button";this.host.removeClass("jqx-disableselect");this.content.removeClass("jqx-disableselect");if(e.editable){if(e.cellbeginedit){var h=this.getcell(k,d);var j=e.cellbeginedit(k,d,e.columntype,h!=null?h.value:null);if(j==false){return}}var g=this.getrowvisibleindex(k);this.editcell=this.getcell(k,d);this.editcell.visiblerowindex=g;if(!this.editcell.editing){if(!f){this.editcell.editing=true}this.editcell.columntype=e.columntype;this.editcell.defaultvalue=i;if(e.defaultvalue!=undefined){this.editcell.defaultvalue=e.defaultvalue}this.editcell.init=true;if(e.columntype!="checkbox"){this._raiseEvent(17,{rowindex:k,datafield:e.datafield,value:this.editcell.value,columntype:e.columntype})}a.data(document.body,"jqxgrid.edit",this.element.id);if(!f){var b=this.getrowvisibleindex(k);this.ensurecellvisible(b,e.datafield);this._renderrows(this.virtualsizeinfo)}if(this.editcell){this.editcell.init=false;return true}}}else{if(!this.editcell){return}this.editcell.editor=null;this.editcell.editing=false;this._renderrows(this.virtualsizeinfo);this.editcell=null}},getScrollTop:function(){if(this._py){return pageYOffset}this._py=typeof pageYOffset!="undefined";if(this._py){return pageYOffset}else{var c=document.body;var b=document.documentElement;b=(b.clientHeight)?b:c;return b.scrollTop}},getScrollLeft:function(){if(typeof pageXOffset!="undefined"){return pageXOffset}else{var c=document.body;var b=document.documentElement;b=(b.clientHeight)?b:c;return b.scrollLeft}},endcelledit:function(g,m,i,e,n){if(g==undefined||m==undefined){if(this.editcell){g=this.editcell.row;m=this.editcell.column}if(i==undefined){i=true}}if(!this.editcell){return}var d=this.getcolumn(m);var t=this;if(t.editrow!=undefined){return}var s=function(){if(n!=false){if(!t.isNestedGrid){var u=t.getScrollTop();var v=t.getScrollLeft();t.element.focus();t.content.focus();if(u!=t.getScrollTop()){window.scrollTo(v,u)}setTimeout(function(){t.element.focus();t.content.focus();if(u!=t.getScrollTop()){window.scrollTo(v,u)}},10)}}};if(d.columntype=="checkbox"||d.columntype=="button"){if(this.editcell){this.editcell.editor=null;this.editcell.editing=false;this.editcell=null}return true}var h=this._geteditorvalue(d);var f=function(u){u._hidecelleditor();u.editcell.editor=null;u.editcell.editing=false;u.editcell=null;if(e||e==undefined){u._renderrows(u.virtualsizeinfo)}s();if(!u.enablebrowserselection){u.host.addClass("jqx-disableselect");u.content.addClass("jqx-disableselect")}};if(i){f(this);return false}if(this.validationpopup){this.validationpopup.hide();this.validationpopuparrow.hide()}if(d.cellvaluechanging){var b=d.cellvaluechanging(g,m,d.columntype,this.editcell.value,h);if(b!=undefined){h=b}}if(d.validation){var c=this.getcell(g,m);try{var o=d.validation(c,h);var k=this.gridlocalization.validationstring;if(o.message!=undefined){k=o.message}var l=typeof o=="boolean"?o:o.result;if(!l){if(o.showmessage==undefined||o.showmessage==true){this._showvalidationpopup(g,m,k)}this.editcell.validated=false;return false}}catch(q){this._showvalidationpopup(g,m,this.gridlocalization.validationstring);this.editcell.validated=false;return false}}if(d.displayfield!=d.datafield){var j=this.getcellvalue(this.editcell.row,d.displayfield);var p=this.editcell.value;oldvalue={value:p,label:j}}else{oldvalue=this.editcell.value}if(d.cellendedit){var r=d.cellendedit(g,m,d.columntype,this.editcell.value,h);if(r==false){this._raiseEvent(18,{rowindex:g,datafield:m,displayfield:d.displayfield,oldvalue:oldvalue,value:oldvalue,columntype:d.columntype});f(this);return false}}this._raiseEvent(18,{rowindex:g,datafield:m,displayfield:d.displayfield,oldvalue:oldvalue,value:h,columntype:d.columntype});this._hidecelleditor(false);if(this.editcell!=undefined){this.editcell.editor=null;this.editcell.editing=false}this.editcell=null;this.editchar=null;this.setcellvalue(g,m,h,e);if(!this.enablebrowserselection){this.host.addClass("jqx-disableselect");this.content.addClass("jqx-disableselect")}s();a.data(document.body,"jqxgrid.edit","");return true},beginrowedit:function(d){if(!this.editcells){this.editcells=new Array()}if(this.editcells.length>0){if(this.editcells[0].row==d){return}var c=this.endrowedit(this.editcells[0].row,false,true);if(false==c){return}}this.host.removeClass("jqx-disableselect");this.content.removeClass("jqx-disableselect");var b=this;this.editcells=new Array();a.each(this.columns.records,function(){if(b.editable){var e=b.getcell(d,this.datafield);e.editing=true;if(this.defaultvalue!=undefined){e.defaultvalue=column.defaultvalue}e.init=true;b.editcells[this.datafield]=e}});b.editrow=d;b._renderrows(this.virtualsizeinfo);a.each(this.columns.records,function(){b.editcells[this.datafield].init=false})},endrowedit:function(b){if(this.editcell.editor==undefined){return false}return true},_selection:function(b){if("selectionStart" in b[0]){var g=b[0];var h=g.selectionEnd-g.selectionStart;return{start:g.selectionStart,end:g.selectionEnd,length:h,text:g.value}}else{var d=document.selection.createRange();if(d==null){return{start:0,end:g.value.length,length:0}}var c=b[0].createTextRange();var f=c.duplicate();c.moveToBookmark(d.getBookmark());f.setEndPoint("EndToStart",c);var h=d.text.length;return{start:f.text.length,end:f.text.length+d.text.length,length:h,text:d.text}}},_setSelection:function(e,b,d){if("selectionStart" in d[0]){d[0].focus();d[0].setSelectionRange(e,b)}else{var c=d[0].createTextRange();c.collapse(true);c.moveEnd("character",b);c.moveStart("character",e);c.select()}},findRecordIndex:function(g,c,b){var b=b;if(c){var e=b.length;for(var h=0;h<e;h++){var f=b[h];var d=f.label;if(g==d){return h}}}return -1},_destroyeditors:function(){var b=this;a.each(this.columns.records,function(f,h){var c=a.trim(this.datafield).split(" ").join("");switch(this.columntype){case"dropdownlist":var g=b.editors["dropdownlist_"+c];if(g){g.jqxDropDownList("destroy");b.editors["dropdownlist_"+c]=null}break;case"combobox":var j=b.editors["combobox_"+c];if(j){j.jqxComboBox("destroy");b.editors["combobox_"+c]=null}break;case"datetimeinput":var d=b.editors["datetimeinput_"+this.datafield];if(d){d.jqxDateTimeInput("destroy");b.editors["datetimeinput_"+c]=null}break;case"numberinput":var e=b.editors["numberinput_"+c];if(e){e.jqxNumberInput("destroy");b.editors["numberinput_"+c]=null}break;case"custom":case"template":if(this.destroycustomeditor){this.destroycustomeditor(b.editors["customeditor_"+c]);b.editors["customeditor_"+c]=null}if(this.destrotemplateeditor){var l=b.getrows.length();for(var k=0;k<l;k++){this.destrotemplateeditor(b.editors["templateeditor_"+c+"_"+k]);b.editors["templateeditor_"+c+"_"+k]=null}}break}});b.editors=new Array()},_showcelleditor:function(q,G,n,I,w){if(this.editrow!=undefined){this.editcell=this.editcells[G.datafield]}if(n==undefined){return}if(this.editcell==null){return}if(G.columntype=="checkbox"&&G.editable){return}if(w==undefined){w=true}var E=G.datafield;var g=a(n);var s=this;var d=this.editcell.editor;var H=this.getcellvalue(q,E);var C=this.getcelltext(q,E);var j=this.hScrollInstance;var t=j.value;var i=parseInt(t);this.editcell.element=n;if(this.editcell.validated==false){this._showvalidationpopup()}var l=function(N){if(s.hScrollInstance.isScrolling()||s.vScrollInstance.isScrolling()){return}if(!w){return}if(!s.isNestedGrid){N.focus()}if(s.gridcontent[0].scrollTop!=0){s.scrolltop(Math.abs(s.gridcontent[0].scrollTop));s.gridcontent[0].scrollTop=0}if(s.gridcontent[0].scrollLeft!=0){s.gridcontent[0].scrollLeft=0}};switch(G.columntype){case"dropdownlist":if(this.host.jqxDropDownList){n.innerHTML="";var D=a.trim(G.datafield).split(" ").join("");var A=a.trim(G.displayfield).split(" ").join("");if(D.indexOf(".")!=-1){D=D.replace(".","")}if(A.indexOf(".")!=-1){A=A.replace(".","")}var k=this.editors["dropdownlist_"+D];d=k==undefined?a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;' id='dropdownlisteditor'></div>"):k;d.css("top",a(n).parent().position().top);if(this.oldhscroll){d.css("left",-i+parseInt(a(n).position().left))}else{d.css("left",parseInt(a(n).position().left))}if(k==undefined){d.prependTo(this.table);d[0].id="dropdownlisteditor"+this.element.id+D;var f=this.source._source?true:false;var x=null;if(!f){x=new a.jqx.dataAdapter(this.source,{autoBind:false,uniqueDataFields:[A],async:false,autoSort:true,autoSortField:A})}else{var o={localdata:this.source.records,datatype:this.source.datatype,async:false};x=new a.jqx.dataAdapter(o,{autoBind:false,async:false,uniqueDataFields:[A],autoSort:true,autoSortField:A})}var u=!G.createeditor?true:false;d.jqxDropDownList({keyboardSelection:false,source:x,rtl:this.rtl,autoDropDownHeight:u,theme:this.theme,width:g.width()-2,height:g.height()-2,displayMember:A,valueMember:E});this.editors["dropdownlist_"+D]=d;if(G.createeditor){G.createeditor(q,H,d)}}if(G._requirewidthupdate){d.jqxDropDownList({width:g.width()-2})}var c=d.jqxDropDownList("listBox").visibleItems;if(!G.createeditor){if(c.length<8){d.jqxDropDownList("autoDropDownHeight",true)}else{d.jqxDropDownList("autoDropDownHeight",false)}}var H=this.getcellvalue(q,A);var z=this.findRecordIndex(H,A,c);if(I){if(H!=""){d.jqxDropDownList("selectIndex",z,true)}else{d.jqxDropDownList("selectIndex",-1)}}if(this.editcell.defaultvalue!=undefined){d.jqxDropDownList("selectIndex",this.editcell.defaultvalue,true)}if(w){d.jqxDropDownList("focus")}}break;case"combobox":if(this.host.jqxComboBox){n.innerHTML="";var D=a.trim(G.datafield).split(" ").join("");var A=a.trim(G.displayfield).split(" ").join("");if(D.indexOf(".")!=-1){D=D.replace(".","")}if(A.indexOf(".")!=-1){A=A.replace(".","")}var r=this.editors["combobox_"+D];d=r==undefined?a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;' id='comboboxeditor'></div>"):r;d.css("top",a(n).parent().position().top);if(this.oldhscroll){d.css("left",-i+parseInt(a(n).position().left))}else{d.css("left",parseInt(a(n).position().left))}if(r==undefined){d.prependTo(this.table);d[0].id="comboboxeditor"+this.element.id+D;var f=this.source._source?true:false;var x=null;if(!f){x=new a.jqx.dataAdapter(this.source,{autoBind:false,uniqueDataFields:[A],async:false,autoSort:true,autoSortField:A})}else{var o={localdata:this.source.records,datatype:this.source.datatype,async:false};x=new a.jqx.dataAdapter(o,{autoBind:false,async:false,uniqueDataFields:[A],autoSort:true,autoSortField:A})}var u=!G.createeditor?true:false;d.jqxComboBox({keyboardSelection:false,source:x,rtl:this.rtl,autoDropDownHeight:u,theme:this.theme,width:g.width()-2,height:g.height()-2,displayMember:A,valueMember:E});this.editors["combobox_"+D]=d;if(G.createeditor){G.createeditor(q,H,d)}}if(G._requirewidthupdate){d.jqxComboBox({width:g.width()-2})}var c=d.jqxComboBox("listBox").visibleItems;if(!G.createeditor){if(c.length<8){d.jqxComboBox("autoDropDownHeight",true)}else{d.jqxComboBox("autoDropDownHeight",false)}}var H=this.getcellvalue(q,A);var z=this.findRecordIndex(H,A,c);if(I){if(H!=""){d.jqxComboBox("selectIndex",z,true);d.jqxComboBox("val",H)}else{d.jqxComboBox("selectIndex",-1);d.jqxComboBox("val",H)}}if(this.editcell.defaultvalue!=undefined){d.jqxComboBox("selectIndex",this.editcell.defaultvalue,true)}if(this.editchar&&this.editchar.length>0){d.jqxComboBox("input").val(this.editchar)}if(w){setTimeout(function(){l(d.jqxComboBox("input"));d.jqxComboBox("_setSelection",0,0);if(s.editchar){d.jqxComboBox("_setSelection",1,1);s.editchar=null}else{var N=d.jqxComboBox("input").val();d.jqxComboBox("_setSelection",0,N.length)}},10)}}break;case"datetimeinput":if(this.host.jqxDateTimeInput){n.innerHTML="";var D=a.trim(G.datafield).split(" ").join("");if(D.indexOf(".")!=-1){D=D.replace(".","")}var v=this.editors["datetimeinput_"+D];d=v==undefined?a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;' id='datetimeeditor'></div>"):v;d.show();d.css("top",a(n).parent().position().top);if(this.oldhscroll){d.css("left",-i+parseInt(a(n).position().left))}else{d.css("left",parseInt(a(n).position().left))}if(v==undefined){d.prependTo(this.table);d[0].id="datetimeeditor"+this.element.id+D;var F={calendar:this.gridlocalization};d.jqxDateTimeInput({localization:F,_editor:true,theme:this.theme,rtl:this.rtl,width:g.width(),height:g.height(),formatString:G.cellsformat});this.editors["datetimeinput_"+D]=d;if(G.createeditor){G.createeditor(q,H,d)}}if(G._requirewidthupdate){d.jqxDateTimeInput({width:g.width()-2})}if(I){if(H!=""&&H!=null){var J=new Date(H);if(J=="Invalid Date"){if(this.source.getvaluebytype){J=this.source.getvaluebytype(H,{name:G.datafield,type:"date"})}}d.jqxDateTimeInput("setDate",J)}else{d.jqxDateTimeInput("setDate",null)}if(this.editcell.defaultvalue!=undefined){d.jqxDateTimeInput("setDate",this.editcell.defaultvalue)}}if(w){setTimeout(function(){l(d.jqxDateTimeInput("dateTimeInput"))},10)}}break;case"numberinput":if(this.host.jqxNumberInput){n.innerHTML="";var D=a.trim(G.datafield).split(" ").join("");if(D.indexOf(".")!=-1){D=D.replace(".","")}var L=this.editors["numberinput_"+D];d=L==undefined?a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;' id='numbereditor'></div>"):L;d.show();d.css("top",a(n).parent().position().top);if(this.oldhscroll){d.css("left",-i+parseInt(a(n).position().left))}else{d.css("left",parseInt(a(n).position().left))}if(L==undefined){d.prependTo(this.table);d[0].id="numbereditor"+this.element.id+D;var m="";var y="left";var K=2;if(G.cellsformat){if(G.cellsformat.indexOf("c")!=-1){m=this.gridlocalization.currencysymbol;y=this.gridlocalization.currencysymbolposition;if(y=="before"){y="left"}else{y="right"}if(G.cellsformat.length>1){K=parseInt(G.cellsformat.substring(1),10)}}else{if(G.cellsformat.indexOf("p")!=-1){m=this.gridlocalization.percentsymbol;y="right";if(G.cellsformat.length>1){K=parseInt(G.cellsformat.substring(1),10)}}}}else{K=0}d.jqxNumberInput({decimalSeparator:this.gridlocalization.decimalseparator,decimalDigits:K,inputMode:"simple",theme:this.theme,rtl:this.rtl,width:g.width()-1,height:g.height()-1,spinButtons:true,symbol:m,symbolPosition:y});this.editors["numberinput_"+D]=d;if(G.createeditor){G.createeditor(q,H,d)}}if(G._requirewidthupdate){d.jqxNumberInput({width:g.width()-2})}if(I){if(H!=""&&H!=null){var M=H;d.jqxNumberInput("setDecimal",M)}else{d.jqxNumberInput("setDecimal",0)}if(this.editcell.defaultvalue!=undefined){d.jqxNumberInput("setDecimal",this.editcell.defaultvalue)}if(this.editchar&&this.editchar.length>0){var p=parseInt(this.editchar);if(!isNaN(p)){d.jqxNumberInput("setDecimal",p)}}if(w){setTimeout(function(){l(d.jqxNumberInput("numberInput"));d.jqxNumberInput("_setSelectionStart",0);if(s.editchar){if(G.cellsformat.length>0){d.jqxNumberInput("_setSelectionStart",2)}else{d.jqxNumberInput("_setSelectionStart",1)}s.editchar=null}else{var N=d.jqxNumberInput("spinButtons");if(N){var O=d.jqxNumberInput("numberInput").val();s._setSelection(d.jqxNumberInput("numberInput")[0],O.length,O.length)}else{var O=d.jqxNumberInput("numberInput").val();s._setSelection(d.jqxNumberInput("numberInput")[0],0,O.length)}}},10)}}}break;case"custom":return;n.innerHTML="";var D=a.trim(G.datafield).split(" ").join("");if(D.indexOf(".")!=-1){D=D.replace(".","")}var B=this.editors["customeditor_"+D+"_"+q];d=B==undefined?a("<div style='overflow: hidden; border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px; z-index: 99999; top: 0px; left: 0px; position: absolute;' id='customeditor'></div>"):B;d.show();d.css("top",a(n).parent().position().top);if(this.oldhscroll){d.css("left",-i+parseInt(a(n).position().left))}else{d.css("left",parseInt(a(n).position().left))}if(B==undefined){d.prependTo(this.table);d[0].id="customeditor"+this.element.id+D+"_"+q;this.editors["customeditor_"+D+"_"+q]=d;var b=g.width()-1;var e=g.height()-1;d.width(b);d.height(e);if(G.createeditor){G.createeditor(q,H,d,C,b,e,this.editchar)}}if(G._requirewidthupdate){d.width(g.width()-2)}break;case"template":return;n.innerHTML="";var D=a.trim(G.datafield).split(" ").join("");if(D.indexOf(".")!=-1){D=D.replace(".","")}var h=this.editors["templateeditor_"+D];d=h==undefined?a("<div style='overflow: hidden; border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px; z-index: 99999; top: 0px; left: 0px; position: absolute;' id='templateeditor'></div>"):h;d.show();d.css("top",a(n).parent().position().top);if(this.oldhscroll){d.css("left",-i+parseInt(a(n).position().left))}else{d.css("left",parseInt(a(n).position().left))}if(h==undefined){d.prependTo(this.table);d[0].id="templateeditor"+this.element.id+D;this.editors["templateeditor_"+D]=d;var b=g.width()-1;var e=g.height()-1;d.width(b);d.height(e);if(G.createeditor){G.createeditor(q,H,d,C,b,e,this.editchar)}}if(G._requirewidthupdate){d.width(g.width()-2)}break;case"textbox":default:n.innerHTML="";d=this.editors["textboxeditor_"+G.datafield]||a("<input 'type='textbox' id='textboxeditor'/>");d[0].id="textboxeditor"+this.element.id+G.datafield;d.appendTo(g);if(this.rtl){d.css("direction","rtl")}if(I){d.addClass(this.toThemeProperty("jqx-input"));d.addClass(this.toThemeProperty("jqx-widget-content"));if(this.editchar&&this.editchar.length>0){d.val(this.editchar)}else{if(G.cellsformat!=""){H=this.getcelltext(q,E)}d.val(H)}if(this.editcell.defaultvalue!=undefined){d.val(this.editcell.defaultvalue)}d.width(g.width());d.height(g.height());if(G.createeditor){G.createeditor(q,H,d)}if(G.cellsformat!=""){if(G.cellsformat.indexOf("p")!=-1||G.cellsformat.indexOf("c")!=-1||G.cellsformat.indexOf("n")!=-1||G.cellsformat.indexOf("f")!=-1){if(!this.editors["textboxeditor_"+G.datafield]){d.keydown(function(O){var U=O.charCode?O.charCode:O.keyCode?O.keyCode:0;var R=String.fromCharCode(U);var S=parseInt(R);if(isNaN(S)){return true}if(s._selection(d).length>0){return true}var Q="";var P=d.val();if(G.cellsformat.length>1){var T=parseInt(G.cellsformat.substring(1));if(isNaN(T)){T=0}}else{var T=0}if(T>0){if(P.indexOf(s.gridlocalization.decimalseparator)!=-1){if(s._selection(d).start>P.indexOf(s.gridlocalization.decimalseparator)){return true}}}for(var V=0;V<P.length-T;V++){var N=P.substring(V,V+1);if(N.match(/^[0-9]+$/)!=null){Q+=N}}if(Q.length>=11){return false}})}}}}this.editors["textboxeditor_"+G.datafield]=d;if(I){if(w){setTimeout(function(){l(d);if(s.editchar){s._setSelection(d[0],1,1);s.editchar=null}else{s._setSelection(d[0],0,d.val().length)}},10)}}break}if(I){if(G.initeditor){G.initeditor(q,H,d,C,this.editchar)}}if(d){d.css("display","block");this.editcell.editor=d}},_setSelection:function(d,g,b){try{if("selectionStart" in d){d.setSelectionRange(g,b)}else{var c=d.createTextRange();c.collapse(true);c.moveEnd("character",b);c.moveStart("character",g);c.select()}}catch(e){var f=e}},_hideeditors:function(){if(this.editcells!=null){var b=this;for(var c in this.editcells){b.editcell=b.editcells[c];b._hidecelleditor()}}},_hidecelleditor:function(b){if(!this.editcell){return}if(this.editcell.columntype=="checkbox"){return}if(this.editcell.editor){this.editcell.editor.hide();switch(this.editcell.columntype){case"dropdownlist":this.editcell.editor.jqxDropDownList({closeDelay:0});this.editcell.editor.jqxDropDownList("hideListBox");this.editcell.editor.jqxDropDownList({closeDelay:400});break;case"combobox":this.editcell.editor.jqxComboBox({closeDelay:0});this.editcell.editor.jqxComboBox("hideListBox");this.editcell.editor.jqxComboBox({closeDelay:400});break;case"datetimeinput":var c=this.editcell.editor;if(c.jqxDateTimeInput("isOpened")){c.jqxDateTimeInput({closeDelay:0});c.jqxDateTimeInput("hideCalendar");c.jqxDateTimeInput({closeDelay:400})}break}}if(this.validationpopup){this.validationpopup.hide();this.validationpopuparrow.hide()}if(!this.isNestedGrid){if(b!=false){this.element.focus()}}},_geteditorvalue:function(e){var h=new String();if(this.editcell.editor){switch(e.columntype){case"textbox":default:h=this.editcell.editor.val();if(e.cellsformat!=""){if(e.cellsformat.indexOf("p")!=-1||e.cellsformat.indexOf("c")!=-1||e.cellsformat.indexOf("n")!=-1||e.cellsformat.indexOf("f")!=-1){if(h.indexOf(this.gridlocalization.currencysymbol)>-1){h=h.replace(this.gridlocalization.currencysymbol,"")}h=h.replace(this.gridlocalization.decimalseparator,".");if(h.indexOf(this.gridlocalization.percentsymbol)>-1){h=h.replace(this.gridlocalization.percentsymbol,"")}var c="";for(var j=0;j<h.length;j++){var b=h.substring(j,j+1);if(b==="-"){c+="-"}if(b==="."){c+="."}if(b.match(/^[0-9]+$/)!=null){c+=b}}h=c;h=h.replace(/ /g,"");h=new Number(h);if(isNaN(h)){h=""}}if(e.cellsformat.indexOf("H")!=-1||e.cellsformat.indexOf("m")!=-1||e.cellsformat.indexOf("M")!=-1||e.cellsformat.indexOf("y")!=-1||e.cellsformat.indexOf("h")!=-1||e.cellsformat.indexOf("d")!=-1){var d=h;h=new Date(h);if(h=="Invalid Date"||h==null){if(a.jqx.dataFormat){h=a.jqx.dataFormat.tryparsedate(d)}if(h=="Invalid Date"||h==null){h=""}}}}if(e.displayfield!=e.datafield){h={label:h,value:h}}break;case"datetimeinput":if(this.editcell.editor.jqxDateTimeInput){this.editcell.editor.jqxDateTimeInput({isEditing:false});h=this.editcell.editor.jqxDateTimeInput("getDate");if(h==null){return null}h=new Date(h.toString());if(e.displayfield!=e.datafield){h={label:h,value:h}}}break;case"dropdownlist":if(this.editcell.editor.jqxDropDownList){var f=this.editcell.editor.jqxDropDownList("selectedIndex");var i=this.editcell.editor.jqxDropDownList("listBox").getVisibleItem(f);if(e.displayfield!=e.datafield){if(i){h={label:i.label,value:i.value}}else{h=""}}else{if(i){h=i.label}else{h=""}}if(h==null){h=""}}break;case"combobox":if(this.editcell.editor.jqxComboBox){h=this.editcell.editor.jqxComboBox("val");if(e.displayfield!=e.datafield){var i=this.editcell.editor.jqxComboBox("getSelectedItem");if(i!=null){h={label:h,value:i.value}}}if(h==null){h=""}}break;case"numberinput":if(this.editcell.editor.jqxNumberInput){var g=this.editcell.editor.jqxNumberInput("getDecimal");h=new Number(g);h=parseFloat(h);if(isNaN(h)){h=0}if(e.displayfield!=e.datafield){h={label:h,value:h}}}break}if(e.geteditorvalue){h=e.geteditorvalue(this.editcell.row,this.editcell.value,this.editcell.editor)}}return h},hidevalidationpopups:function(){if(this.popups){a.each(this.popups,function(){this.validation.remove();this.validationrow.remove()});this.popups=new Array()}if(this.validationpopup){this.validationpopuparrow.hide();this.validationpopup.hide()}},showvalidationpopup:function(n,d,o){if(o==undefined){var o=this.gridlocalization.validationstring}var m=a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;'></div>");var l=a("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");m.html(o);l.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));m.addClass(this.toThemeProperty("jqx-grid-validation"));m.addClass(this.toThemeProperty("jqx-rc-all"));m.prependTo(this.table);l.prependTo(this.table);var f=this.hScrollInstance;var h=f.value;var e=parseInt(h);var j=this.getcolumn(d).uielement;var i=a(this.hittestinfo[n].visualrow);m.css("top",parseInt(i.position().top)+30+"px");var b=parseInt(m.css("top"));l.css("top",b-12);l.removeClass();l.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));if(b>this._gettableheight()){l.removeClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));l.addClass(this.toThemeProperty("jqx-grid-validation-arrow-down"));b=parseInt(a(j).parent().position().top)-30;m.css("top",b+"px");l.css("top",b+m.outerHeight()-9)}var k=-e+parseInt(a(j).position().left);l.css("left",e+k+30);var c=m.width();if(c+k>this.host.width()-20){var g=c+k-this.host.width()+40;k-=g}m.css("left",e+k);m.show();l.show();if(!this.popups){this.popups=new Array()}this.popups[this.popups.length]={validation:m,validationrow:l}},_showvalidationpopup:function(m,d,n){var i=this.editcell.editor;if(!i){return}if(!this.validationpopup){var l=a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;'></div>");var k=a("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");l.html(n);k.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));l.addClass(this.toThemeProperty("jqx-grid-validation"));l.addClass(this.toThemeProperty("jqx-rc-all"));l.prependTo(this.table);k.prependTo(this.table);this.validationpopup=l;this.validationpopuparrow=k}else{this.validationpopup.html(n)}var f=this.hScrollInstance;var h=f.value;var e=parseInt(h);this.validationpopup.css("top",parseInt(a(this.editcell.element).parent().position().top)+(this.rowsheight+5)+"px");var b=parseInt(this.validationpopup.css("top"));this.validationpopuparrow.css("top",b-12);this.validationpopuparrow.removeClass();this.validationpopuparrow.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));if(b>this._gettableheight()){this.validationpopuparrow.removeClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));this.validationpopuparrow.addClass(this.toThemeProperty("jqx-grid-validation-arrow-down"));b=parseInt(a(this.editcell.element).parent().position().top)-this.rowsheight-5;this.validationpopup.css("top",b+"px");this.validationpopuparrow.css("top",b+this.validationpopup.outerHeight()-9)}var j=-e+parseInt(a(this.editcell.element).position().left);this.validationpopuparrow.css("left",e+j+30);var c=this.validationpopup.width();if(c+j>this.host.width()-20){var g=c+j-this.host.width()+40;j-=g}this.validationpopup.css("left",e+j);this.validationpopup.show();this.validationpopuparrow.show()}})})(jQuery);