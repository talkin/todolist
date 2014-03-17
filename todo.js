function TodoCtrl($scope) {
  $scope.todos_study = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];

  $scope.todos_enjoy = [
    {text:'game', done:false}];  

  $scope.items = ['study','enjoy'];
  $scope.selection = $scope.items[0];
 
  $scope.addTodo = function() {
    if ($scope.selection == 'study') {
      $scope.todos_study.push({text:$scope.todoText, done:false});
    }
    else if ($scope.selection == 'enjoy') {
      $scope.todos_enjoy.push({text:$scope.todoText, done:false})
    };
    
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count_study = 0,count_enjoy = 0;
    if ($scope.selection == 'study') {
      angular.forEach($scope.todos_study, function(todo) {
        count_study += todo.done ? 0 : 1;
      });            
      return count_study;
    }
    else if ($scope.selection == 'enjoy') {
      angular.forEach($scope.todos_enjoy, function(todo) {
        count_enjoy += todo.done ? 0 : 1;
      });          
      return count_enjoy;
    };
    
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };

}
