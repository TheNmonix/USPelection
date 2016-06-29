angular.module('Starter')
    .controller('HomeController', function($scope, wakanda) {
        wakanda.ready().then(function(ds) {
            console.log('Angular-Wakanda is ready!');
            var ds = wakanda.$wakanda.$ds;


              function init() {
                ds.Profil.$all({
                    select: 'popularity'
                    
                }).$promise.then(function(event) {

                    $scope.poeple = event.result;
                });

            }


            $scope.savePerson = function() {

                $scope.person = ds.Profil.$create({
                    name: $scope.name
                });
                $scope.person.$save().$promise.then(function() {
                    var file = document.getElementById('fileInput').files[0];

                    $scope.person.avatar.$upload(file).$promise.then(function(e) {

                        $scope.person.avatar.uri;
                        
						init();
						
                    });
                    
                });
            }
            $scope.voteForMe = function(ID) {
                ds.Votes.voteForMe(ID).$promise.then(function(e) {
                    if (e.result)
                        alert("Thanks For Voting !!");
                    else
                        alert("You have no right to vote (: !!)");
                    init();
                });

            }
            init();

        }).catch(function(err) {
            console.warn(err);
        });
    });