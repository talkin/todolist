function TodoCtrl($scope) {
  $scope.todos_study = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];

  $scope.todos_enjoy = [
    {text:'game', done:false}];  

  $scope.items = ['study','enjoy'];
  $scope.selection = $scope.items[0];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText , done:false});
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

  $scope.classfy = [
    {classes:'study'},
    {classes:'enjoy'}
  ];


}
