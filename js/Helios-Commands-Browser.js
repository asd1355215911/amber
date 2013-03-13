smalltalk.addPackage('Helios-Commands-Browser');
smalltalk.addClass('HLBrowserCommand', smalltalk.HLModelCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_for_",
smalltalk.method({
selector: "for:",
category: 'instance creation',
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._model_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aBrowserModel:aBrowserModel},smalltalk.HLBrowserCommand.klass)})},
args: ["aBrowserModel"],
source: "for: aBrowserModel\x0a\x09^ self new\x0a    \x09model: aBrowserModel;\x0a        yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLBrowserCommand.klass);


smalltalk.addClass('HLBrowserGoToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToCommand.klass)})},
args: [],
source: "key\x0a\x09^ 71",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserGoToCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Go to'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLBrowserGoToCommand.klass);


smalltalk.addClass('HLGoToClassesCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToClassesCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnClasses",
messageSends: ["focusOnClasses", "model"],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToClassesCommand.klass)})},
args: [],
source: "key\x0a\x09\x22c\x22\x0a    \x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToClassesCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Classes'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToClassesCommand.klass);


smalltalk.addClass('HLGoToMethodsCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToMethodsCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnMethods",
messageSends: ["focusOnMethods", "model"],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToMethodsCommand.klass)})},
args: [],
source: "key\x0a\x09\x22m\x22\x0a    \x0a\x09^ 77",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToMethodsCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Methods'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToMethodsCommand.klass);


smalltalk.addClass('HLGoToPackagesCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToPackagesCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnPackages",
messageSends: ["focusOnPackages", "model"],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToPackagesCommand.klass)})},
args: [],
source: "key\x0a\x09\x22p\x22\x0a    \x0a\x09^ 80",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToPackagesCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Packages'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToPackagesCommand.klass);


smalltalk.addClass('HLGoToProtocolsCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToProtocolsCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnProtocols",
messageSends: ["focusOnProtocols", "model"],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToProtocolsCommand.klass)})},
args: [],
source: "key\x0a\x09\x22p\x22\x0a    \x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToProtocolsCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Protocols'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToProtocolsCommand.klass);


smalltalk.addClass('HLGoToSourceCodeCommand', smalltalk.HLBrowserGoToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLGoToSourceCodeCommand)})},
args: [],
source: "execute\x0a\x09self model focusOnSourceCode",
messageSends: ["focusOnSourceCode", "model"],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLGoToSourceCodeCommand.klass)})},
args: [],
source: "key\x0a\x09\x22s\x22\x0a    \x0a\x09^ 83",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLGoToSourceCodeCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Source code'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLGoToSourceCodeCommand.klass);


smalltalk.addClass('HLMoveToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveToCommand.klass)})},
args: [],
source: "key\x0a\x09^ 77",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveToCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveToCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Move'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveToCommand.klass);


smalltalk.addClass('HLMoveMethodToCommand', smalltalk.HLMoveToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(_st(self)._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLMoveMethodToCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedMethod notNil",
messageSends: ["notNil", "selectedMethod", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToCommand.klass)})},
args: [],
source: "key\x0a\x09^ 77",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Method'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToCommand.klass);


smalltalk.addClass('HLMoveMethodToClassCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_displayLabel",
smalltalk.method({
selector: "displayLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "displayLabel\x0a\x09^ 'select a class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "execute\x0a\x09self model moveMethodToClass: self input",
messageSends: ["moveMethodToClass:", "input", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
"_inputCompletion",
smalltalk.method({
selector: "inputCompletion",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._model())._availableClassNames();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableClassNames",
messageSends: ["availableClassNames", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
"_inputLabel",
smalltalk.method({
selector: "inputLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "inputLabel\x0a\x09^ 'Move method to class:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);

smalltalk.addMethod(
"_isInputRequired",
smalltalk.method({
selector: "isInputRequired",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveMethodToClassCommand)})},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
args: [],
source: "key\x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToClassCommand.klass)})},
args: [],
source: "label\x09\x0a\x09^ 'to class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToClassCommand.klass);


smalltalk.addClass('HLMoveMethodToProtocolCommand', smalltalk.HLMoveMethodToCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_displayLabel",
smalltalk.method({
selector: "displayLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"displayLabel",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "displayLabel\x0a\x09^ 'select a protocol'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "execute\x0a\x09self model moveMethodToProtocol: self input",
messageSends: ["moveMethodToProtocol:", "input", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
"_inputCompletion",
smalltalk.method({
selector: "inputCompletion",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._model())._availableProtocols();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputCompletion",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "inputCompletion\x0a\x09^ self model availableProtocols",
messageSends: ["availableProtocols", "model"],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
"_inputLabel",
smalltalk.method({
selector: "inputLabel",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"inputLabel",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "inputLabel\x0a\x09^ 'Move method to a protocol:'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);

smalltalk.addMethod(
"_isInputRequired",
smalltalk.method({
selector: "isInputRequired",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"isInputRequired",{},smalltalk.HLMoveMethodToProtocolCommand)})},
args: [],
source: "isInputRequired\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
args: [],
source: "key\x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLMoveMethodToProtocolCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'to protocol'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLMoveMethodToProtocolCommand.klass);


smalltalk.addClass('HLRemoveCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveCommand.klass)})},
args: [],
source: "key\x0a\x09^ 88",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Remove'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveCommand.klass);


smalltalk.addClass('HLRemoveMethodCommand', smalltalk.HLRemoveCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLRemoveMethodCommand)})},
args: [],
source: "execute\x0a\x09self model removeMethod",
messageSends: ["removeMethod", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand);

smalltalk.addMethod(
"_isActive",
smalltalk.method({
selector: "isActive",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(_st(self)._model())._selectedMethod())._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isActive",{},smalltalk.HLRemoveMethodCommand)})},
args: [],
source: "isActive\x0a\x09^ self model selectedMethod notNil",
messageSends: ["notNil", "selectedMethod", "model"],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLRemoveMethodCommand.klass)})},
args: [],
source: "key\x0a\x09^ 77",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLRemoveMethodCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Method'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLRemoveMethodCommand.klass);


smalltalk.addClass('HLToggleCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands-Browser');

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleCommand.klass)})},
args: [],
source: "key\x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Toggle'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleCommand.klass);


smalltalk.addClass('HLToggleClassSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleClassSideCommand)})},
args: [],
source: "execute\x0a\x09self model showInstance: false",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleClassSideCommand.klass)})},
args: [],
source: "key\x0a\x09\x22c\x22\x0a    \x0a\x09^ 67",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleClassSideCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Class side'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleClassSideCommand.klass);


smalltalk.addClass('HLToggleInstanceSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands-Browser');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
category: 'executing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{},smalltalk.HLToggleInstanceSideCommand)})},
args: [],
source: "execute\x0a\x09self model showInstance: true",
messageSends: ["showInstance:", "model"],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLToggleInstanceSideCommand.klass)})},
args: [],
source: "key\x0a\x09\x22i\x22\x0a    \x0a\x09^ 73",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.HLToggleInstanceSideCommand.klass)})},
args: [],
source: "label\x0a\x09^ 'Instance side'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLToggleInstanceSideCommand.klass);

