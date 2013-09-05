// JavaScript Document

			var output;

			
			function validateForm() {
				jQuery.validator.setDefaults({
				  debug: true,
				  success: "valid"
				});
				
				
			$("#surveyForm").validate({
			debug: true,
			rules: {
				/* q00firstName: {
					required: true,
					minlength: 2
				},
				q00lastName: {
					required: true,
					minlength: 2
				},
				q00email: {
					required: true,
					minlength: 2,
					email: true
				},
				q01workSector: {
					required: true
				},
				q01WorkSectorOther: {
					required: false
				},
				q02workField: {
					required: true
				},
				q02workSectorOther: {
					required: false
				},
				q03workPosition: {
					required: true
				},
				q03workPositionOther: {
					required: false
				},
				q04familiarWithCSEC: {
					required: true
				},
				q05familiarWithCSECLearning: {
					required: true
				},
				q06careerCSEC: {
					required: true
				},
				q07implementCSEC: {
					required: true
				},
				q08usefulPubs: {
					required: true
				},
				q08usefulPubsWhy: {
					required: false
				},
				q08usefulPubsTopics: {
					required: false
				},
				q09presentations: {
					required: true
				},
				q10usefulInfo: {
					required: true
				},
				q11helpfulStaff: {
					required: true
				},
				q12concernedCyberSecurity: {
					required: true
				},
				q13concernedMobileSecurity: {
					required: true
				},
				q14concernedSocialSecurity: {
					required: true
				},
				q15visitCSEC: {
					required: true
				},
				q16recommendations: {
					required: false
				},
				btnSubmit: {
				}
				*/
			
			}, 
			messages: {
				
			},
			submitHandler: function() {
					outputForm();
					alert("form valid");
				  	}
				});
			}
			
			
			function outputForm() {
				
											var currentdate = new Date(); 
											var datetime = currentdate.getDate()+"/"+(currentdate.getMonth()+1)+"/"+currentdate.getFullYear()+" @ "+currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds();
													
											var language = "English";
											/* var q00firstName = $("#q00firstName").val();
											var q00lastName = $("#q00lastName").val();
											var q00email = $("#q00email").val(); */
											var q01workSector = $("input:radio[name=q01workSector]:checked").val();
											var q01WorkSectorOther = $("#q01WorkSectorOther").val();
											var q01WorkSectorIndustry = $("#q01WorkSectorIndustry").val();
											
											
											var q02workField = $("input:radio[name=q02workField]:checked").val();
											var q02workSectorOther = $("#q02workSectorOther").val();
											var q03workPosition = $("input:radio[name=q03workPosition]:checked").val();
											var q03workPositionOther = $("#q03workPositionOther").val();
											var q04familiarWithCSEC = $("input:radio[name=q04familiarWithCSEC]:checked").val();
											var q05familiarWithCSECLearning = $("input:radio[name=q05familiarWithCSECLearning]:checked").val();
											var q06careerCSEC = $("input:radio[name=q06careerCSEC]:checked").val();
											var q07implementCSEC = $("input:radio[name=q07implementCSEC]:checked").val();
											var q08usefulPubs = $("input:radio[name=q08usefulPubs]:checked").val();
											var q08usefulPubsWhy = $("#q08usefulPubsWhy").val();
											var q08usefulPubsTopics = $("#q08usefulPubsTopics").val();
											
											var q09presentations = $("[name=q09presentations]:checked").map(function() {return this.value;}).get().join(", ");
											
											if(q09presentations.length == 0 ) {
												var q09presentations = "&nbsp;";
											}
											
											var q10usefulInfo = $("input:radio[name=q10usefulInfo]:checked").val();
											var q11helpfulStaff = $("input:radio[name=q11helpfulStaff]:checked").val();
											var q12concernedCyberSecurity = $("input:radio[name=q12concernedCyberSecurity]:checked").val();
											var q13concernedMobileSecurity = $("input:radio[name=q13concernedMobileSecurity]:checked").val();
											var q14concernedSocialSecurity = $("input:radio[name=q14concernedSocialSecurity]:checked").val();
											var q15visitCSEC = $("input:radio[name=q15visitCSEC]:checked").val();
											
											var q16recommendations = $("#q16recommendations").val();											
											
											if (typeof q01workSector==='undefined') {
												q01workSector = "&nbsp;";
											};			
											
											// If Q01 'other' field is not empty, append 'other' field to the end of q01workSector		
											if (q01WorkSectorOther.match(/\S/) && q01workSector=="Other") {
												q01workSector = q01workSector + ': ' + q01WorkSectorOther;
											}
																
											if (q01WorkSectorIndustry.match(/\S/) && q01workSector=="Industry") {
												q01workSector = q01workSector + ': ' + q01WorkSectorIndustry;
											}
											
											if (typeof q02workField==='undefined') {
												q02workField = "&nbsp;";
											};		
											
											if (q02workSectorOther.match(/\S/) && q02workField=="Other") {
												q02workField = q02workField + ': ' + q02workSectorOther;
											}
											
											if (typeof q03workPosition==='undefined') {
												q03workPosition = "&nbsp;";
											};
											
											if (q03workPositionOther.match(/\S/) && q03workPosition=="Other") {
												q03workPosition = q03workPosition + ': ' + q03workPositionOther;
											}
											
											if (typeof q08usefulPubs==='undefined') {
												q08usefulPubs = "&nbsp;";
											};
											
											if (q08usefulPubsWhy.match(/\S/) && q08usefulPubs=="No") {
												q08usefulPubs = q08usefulPubs + ': ' + q08usefulPubsWhy;
											}
											
																						
											if (typeof q04familiarWithCSEC==='undefined') {
												q04familiarWithCSEC = "&nbsp;";
											};
											
											if (typeof q05familiarWithCSECLearning==='undefined') {
												q05familiarWithCSECLearning = "&nbsp;";
											};
											
											if (typeof q06careerCSEC==='undefined') {
												q06careerCSEC = "&nbsp;";
											};
											
											if (typeof q07implementCSEC==='undefined') {
												q07implementCSEC = "&nbsp;";
											};
											
											
											
											if (typeof q10usefulInfo==='undefined') {
												q10usefulInfo = "&nbsp;";
											};
											
											if (typeof q11helpfulStaff==='undefined') {
												q11helpfulStaff = "&nbsp;";
											};
											
											if (typeof q12concernedCyberSecurity==='undefined') {
												q12concernedCyberSecurity = "&nbsp;";
											};
											
											if (typeof q13concernedMobileSecurity==='undefined') {
												q13concernedMobileSecurity = "&nbsp;";
											};
											
											if (typeof q14concernedSocialSecurity==='undefined') {
												q14concernedSocialSecurity = "&nbsp;";
											};
											
											if (typeof q15visitCSEC==='undefined') {
												q15visitCSEC = "&nbsp;";
											};
											
											if(q16recommendations.length == 0 ) {
												var q16recommendations = "&nbsp;";
											}
											
											if(q08usefulPubsTopics.length == 0 ) {
												var q08usefulPubsTopics = "&nbsp;";
											}
											
											
											
											
											
											
											output = "<tr><td>"+datetime+"</td><td>"+language+"</td><td>"+q01workSector+"</td><td>"+q02workField+"</td><td>"+q03workPosition+"</td><td>"+q04familiarWithCSEC+"</td><td>"+q05familiarWithCSECLearning+"</td><td>"+q06careerCSEC+"</td><td>"+q07implementCSEC+"</td><td>"+q08usefulPubs+"</td><td>"+q08usefulPubsTopics+"</td><td>"+q09presentations+"</td><td>"+q10usefulInfo+"</td><td>"+q11helpfulStaff+"</td><td>"+q12concernedCyberSecurity+"</td><td>"+q13concernedMobileSecurity+"</td><td>"+q14concernedSocialSecurity+"</td><td>"+q15visitCSEC+"</td><td>"+q16recommendations+"</td></tr>";
											
											// output = "<tr><td>"+datetime+"</td><td>"+q00firstName+" "+q00lastName+"</td><td>"+q00email+"</td><td>"+language+"</td><td>"+q01workSector+"<br /><br />"+q01WorkSectorOther+"</td><td>"+q02workField+"<br /><br />"+q02workSectorOther+"</td><td>"+q03workPosition+"<br /><br />"+q03workPositionOther+"</td><td>"+q04familiarWithCSEC+"</td><td>"+q05familiarWithCSECLearning+"</td><td>"+q06careerCSEC+"</td><td>"+q07implementCSEC+"</td><td>"+q08usefulPubs+"<br /><br />"+q08usefulPubsWhy+"<br /><br />"+q08usefulPubsTopics+"</td><td>"+q09presentations+"</td><td>"+q10usefulInfo+"</td><td>"+q11helpfulStaff+"</td><td>"+q12concernedCyberSecurity+"</td><td>"+q13concernedMobileSecurity+"</td><td>"+q14concernedSocialSecurity+"</td><td>"+q15visitCSEC+"</td><td>"+q16recommendations+"</td></tr>";
											
											// var output = "<tr><td>"+q00firstName+" "+q00lastName+"</td><td>"+q00email+"</td><td>"+language+"</td><td>";
											
											
											$("#output").append(output);					
									
											window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
											
											
											
				
				
						
						
						}
						
						

						// device APIs are available
						//
						function createFile(fileSystem) {
							fileSystem.root.getFile("surveyOutput-Aug22.txt", {create: true, exclusive: false}, gotFileEntry, fail);
							alert("File Created");
						}
					
						function gotFS(fileSystem) {
							fileSystem.root.getFile("surveyOutput-Aug22.txt", {create: true, exclusive: false}, gotFileEntry, fail);
							// fileSystem.root.getFile("surveyOutput-Aug22.txt", {create: false}, gotFileEntry, createFile);
							alert("gotFS");
						}
					
						function gotFileEntry(fileEntry) {
							fileEntry.createWriter(gotFileWriter, fail);
							alert("gotFileEntry");
						}
					
						function gotFileWriter(writer) {							
							writer.seek(writer.length);
							writer.write(window.output);							
							alert("gotFileWriter" + window.output);
						}
					
						function fail(error) {
							alert("failed to write file");
						}
				