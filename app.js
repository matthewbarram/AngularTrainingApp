var app = angular.module("app", []);

app.directive("dumbPassword", function() {
    var validElement = angular.element("<div>{{model.input}}</div>")
    
    this.link = function(scope, element) {
                scope.$watch("model.input", function(value){
                    if(value === "password") {
                        validElement.toggleClass("alert-box alert")
                    }
                })
            }

    return {
        restrict: "E",
        template: "<input type=\"text\" ng-model=\"model.input\">",
        compile: function(tElement) {
            tElement.append(validElement)

            return link;
        }
    }
})
