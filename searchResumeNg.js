var app = angular.module("myApp", []).config(function($sceProvider) {
	    $sceProvider.enabled(false);
	 });
app.controller("myCtrl", function($scope) {
	//Tom Marvolo Riddle
	$scope.resumeList = [
        {Id: "1", Name : "Tom", pdfFile : "http://ocs.fas.harvard.edu/files/ocs/files/undergrad_resumes_and_cover_letters.pdf", Date : "2017 Oct 12", Posts : null, PostCounter: 0},
        {Id: "2", Name : "Marvolo", pdfFile : "https://career.berkeley.edu/sites/default/files/pdf/Guide/ResumesCoverLetters.pdf", Date : "2016 Nov 13", Posts : null, PostCounter: 0},
        {Id: "3", Name : "Riddle", pdfFile : "http://www.peelyouthsuccess.com/documents/136m_Sample%20resumes%20and%20cover%20letters.pdf", Date : "2015 Dec 14", Posts : null, PostCounter: 0}
    ];

    // Currently selected by default would show the first one
    $scope.chosen = $scope.resumeList[0];

	$scope.changeChosen = function(obj) {
		var postEl = document.getElementById("postContainer");
		for (let i = 0; i < $scope.resumeList.length; i++) {
			if ($scope.resumeList[i].Id == $scope.chosen.Id) {
				$scope.resumeList[i].PostCounter = postCounter;
				var newDiv = document.createElement("div");
				while (postEl.hasChildNodes()){
					newDiv.appendChild(postEl.removeChild(postEl.firstChild));
				}
				$scope.resumeList[i].Posts = newDiv;
			}
		}
		$scope.chosen = obj;

		if ($scope.chosen.Posts != null) {
			while ($scope.chosen.Posts.hasChildNodes()) {
				postEl.appendChild($scope.chosen.Posts.removeChild($scope.chosen.Posts.firstChild)); 
			}
		}
		postCounter = $scope.chosen.PostCounter;

		// Relaunch filter to be apllied on the newly changed posts.
		onChangeSelectFilter();
	};
});