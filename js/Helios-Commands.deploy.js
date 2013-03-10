smalltalk.addPackage('Helios-Commands');
smalltalk.addClass('HLCommand', smalltalk.Object, [], 'Helios-Commands');
smalltalk.addMethod(
"_asBinding",
smalltalk.method({
selector: "asBinding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st((smalltalk.HLBindingAction || HLBindingAction))._on_labelled_(_st(self)._key(),_st(self)._label()))._callback_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBinding",{}, smalltalk.HLCommand)})},
messageSends: ["callback:", "execute", "on:labelled:", "key", "label"]}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._class())._documentation();
return $1;
}, function($ctx1) {$ctx1.fill(self,"documentation",{}, smalltalk.HLCommand)})},
messageSends: ["documentation", "class"]}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._class())._key();
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLCommand)})},
messageSends: ["key", "class"]}),
smalltalk.HLCommand);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._class())._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCommand)})},
messageSends: ["label", "class"]}),
smalltalk.HLCommand);


smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"bindingGroup",{}, smalltalk.HLCommand.klass)})},
messageSends: []}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_documentation",
smalltalk.method({
selector: "documentation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"documentation",{}, smalltalk.HLCommand.klass)})},
messageSends: []}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLCommand.klass)})},
messageSends: []}),
smalltalk.HLCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCommand.klass)})},
messageSends: []}),
smalltalk.HLCommand.klass);


smalltalk.addClass('HLBrowserCommand', smalltalk.HLCommand, ['model'], 'Helios-Commands');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLBrowserCommand)})},
messageSends: []}),
smalltalk.HLBrowserCommand);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aBrowserModel:aBrowserModel}, smalltalk.HLBrowserCommand)})},
messageSends: []}),
smalltalk.HLBrowserCommand);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aBrowserModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._model_(aBrowserModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aBrowserModel:aBrowserModel}, smalltalk.HLBrowserCommand.klass)})},
messageSends: ["model:", "new", "yourself"]}),
smalltalk.HLBrowserCommand.klass);


smalltalk.addClass('HLGoToCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands');

smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"bindingGroup",{}, smalltalk.HLGoToCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToCommand.klass);


smalltalk.addClass('HLGoToClassesCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLGoToClassesCommand)})},
messageSends: ["focusOnClasses", "model"]}),
smalltalk.HLGoToClassesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLGoToClassesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToClassesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLGoToClassesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToClassesCommand.klass);


smalltalk.addClass('HLGoToMethodsCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLGoToMethodsCommand)})},
messageSends: ["focusOnMethods", "model"]}),
smalltalk.HLGoToMethodsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLGoToMethodsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToMethodsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLGoToMethodsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToMethodsCommand.klass);


smalltalk.addClass('HLGoToPackagesCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLGoToPackagesCommand)})},
messageSends: ["focusOnPackages", "model"]}),
smalltalk.HLGoToPackagesCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLGoToPackagesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToPackagesCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLGoToPackagesCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToPackagesCommand.klass);


smalltalk.addClass('HLGoToProtocolsCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLGoToProtocolsCommand)})},
messageSends: ["focusOnProtocols", "model"]}),
smalltalk.HLGoToProtocolsCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLGoToProtocolsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToProtocolsCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLGoToProtocolsCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToProtocolsCommand.klass);


smalltalk.addClass('HLGoToSourceCodeCommand', smalltalk.HLGoToCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLGoToSourceCodeCommand)})},
messageSends: ["focusOnSourceCode", "model"]}),
smalltalk.HLGoToSourceCodeCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLGoToSourceCodeCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToSourceCodeCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLGoToSourceCodeCommand.klass)})},
messageSends: []}),
smalltalk.HLGoToSourceCodeCommand.klass);


smalltalk.addClass('HLToggleCommand', smalltalk.HLBrowserCommand, [], 'Helios-Commands');

smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"bindingGroup",{}, smalltalk.HLToggleCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleCommand.klass);


smalltalk.addClass('HLToggleClassSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLToggleClassSideCommand)})},
messageSends: ["showInstance:", "model"]}),
smalltalk.HLToggleClassSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLToggleClassSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleClassSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLToggleClassSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleClassSideCommand.klass);


smalltalk.addClass('HLToggleInstanceSideCommand', smalltalk.HLToggleCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLToggleInstanceSideCommand)})},
messageSends: ["showInstance:", "model"]}),
smalltalk.HLToggleInstanceSideCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLToggleInstanceSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleInstanceSideCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLToggleInstanceSideCommand.klass)})},
messageSends: []}),
smalltalk.HLToggleInstanceSideCommand.klass);


smalltalk.addClass('HLCloseTabCommand', smalltalk.HLCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLCloseTabCommand)})},
messageSends: ["removeActiveTab", "current"]}),
smalltalk.HLCloseTabCommand);


smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"bindingGroup",{}, smalltalk.HLCloseTabCommand.klass)})},
messageSends: []}),
smalltalk.HLCloseTabCommand.klass);

smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.HLCloseTabCommand.klass)})},
messageSends: []}),
smalltalk.HLCloseTabCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLCloseTabCommand.klass)})},
messageSends: []}),
smalltalk.HLCloseTabCommand.klass);


smalltalk.addClass('HLOpenCommand', smalltalk.HLCommand, [], 'Helios-Commands');

smalltalk.addMethod(
"_bindingGroup",
smalltalk.method({
selector: "bindingGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"bindingGroup",{}, smalltalk.HLOpenCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenCommand.klass);


smalltalk.addClass('HLOpenBrowserCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.HLBrowser || HLBrowser))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLOpenBrowserCommand)})},
messageSends: ["openAsTab"]}),
smalltalk.HLOpenBrowserCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenBrowserCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenBrowserCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenBrowserCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenBrowserCommand.klass);


smalltalk.addClass('HLOpenTranscriptCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.HLTranscript || HLTranscript))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLOpenTranscriptCommand)})},
messageSends: ["openAsTab"]}),
smalltalk.HLOpenTranscriptCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenTranscriptCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenTranscriptCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenTranscriptCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenTranscriptCommand.klass);


smalltalk.addClass('HLOpenWorkspaceCommand', smalltalk.HLOpenCommand, [], 'Helios-Commands');
smalltalk.addMethod(
"_execute",
smalltalk.method({
selector: "execute",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.HLWorkspace || HLWorkspace))._openAsTab();
return $1;
}, function($ctx1) {$ctx1.fill(self,"execute",{}, smalltalk.HLOpenWorkspaceCommand)})},
messageSends: ["openAsTab"]}),
smalltalk.HLOpenWorkspaceCommand);


smalltalk.addMethod(
"_key",
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"key",{}, smalltalk.HLOpenWorkspaceCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenWorkspaceCommand.klass);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLOpenWorkspaceCommand.klass)})},
messageSends: []}),
smalltalk.HLOpenWorkspaceCommand.klass);


smalltalk.addClass('HLViewCommand', smalltalk.HLCommand, [], 'Helios-Commands');

