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
 
  $scope.remaining_study = function() {
    var count_study = 0;    
    angular.forEach($scope.todos_study, function(todo) {
        count_study += todo.done ? 0 : 1;
    });            
      return count_study;    
  };

  $scope.remaining_enjoy = function() {
    var count_enjoy = 0;    
    angular.forEach($scope.todos_enjoy, function(todo) {
        count_enjoy += todo.done ? 0 : 1;
    });            
      return count_enjoy;    
  };
 
  $scope.archive_study = function() {
    var oldTodos_study = $scope.todos_study;
    $scope.todos_study = [];
    angular.forEach(oldTodos_study, function(todo) {
      if (!todo.done) $scope.todos_study.push(todo);
    });
  };

    $scope.archive_enjoy = function() {
    var oldTodos_enjoy = $scope.todos_enjoy;
    $scope.todos_enjoy = [];
    angular.forEach(oldTodos_enjoy, function(todo) {
      if (!todo.done) $scope.todos_enjoy.push(todo);
    });
  };

}
