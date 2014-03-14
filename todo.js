function TodoCtrl($scope) {
  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };

  $scope.handle_class = function() {
    var selected_index = form.elements["class_list"].selected_index;
    if (selected_index > 0) {
      var selected_option_value = form.elements["class_list"].options[selected_index].value;
      var selected_option_text = form.elements["class_list"].options[selected_index].text;
    }
    else {
      alert("please select a class from the list");
    };

  }
}
