function getUserDetails(id){
		    return new Promise((resolve, reject) => {
		        console.log("Fun1 Called");
		        resolve({ rollNumber: "678" });
		    });
		}

		function getUserSubjects(userRoll){
		    return new Promise((resolve, reject) => {
		        console.log("Fun2 Called");
		        resolve({ subId: "En-1" });
		    });
		}

		function getUserMarks(subId){
		    return new Promise((resolve, reject) => {
		        console.log("Fun3 Called");
		        resolve("Getting user marks by subId:" ,subId);
		    });
		}

		getUserDetails("123")
		  .then(result => {
		      return getUserSubjects(result.rollNumber);
		  })
		  .then(result => {
		      return getUserMarks(result.subId);
		  })
		  .then(result => console.log(result))
		  .catch(error => console.log(error));