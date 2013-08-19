// JavaScript Document


var output;

document.addEventListener('deviceready', deviceReady, false);
		 
		 $( document ).ready(function() {
			 deviceReady();
		 });
			
			
			
            function deviceReady() {
				
				$("#hidethis").hide();
				$(".q01WorkSectorOtherContainer").hide();
				$(".q02workSectorOtherContainer").hide();
				$(".q03workPositionOtherContainer").hide();
				$(".q08usefulPubsWhyContainer").hide();
				
				$("#q01workSectorCheckOther").bind("click", function() {
						if ($('#q01workSectorCheckOther').is(':checked')) {
							$(".q01WorkSectorOtherContainer").show();
						} else {
							$(".q01WorkSectorOtherContainer").hide();
						};
				});
				
				
				$("#q02workField").bind("click", function() {
					if ($('#q02workField').is(':checked')) {
						$(".q02workSectorOtherContainer").show();
					} else {
						$(".q02workSectorOtherContainer").hide();
					};
				});
				
				
				$("#q03workPosition").bind("click", function() {
					if ($('#q03workPosition').is(':checked')) {
						$(".q03workPositionOtherContainer").show();
					} else {
						$(".q03workPositionOtherContainer").hide();
					};
				});
				
				
				$("#q08usefulPubsNo").bind("click", function() {
						$(".q08usefulPubsWhyContainer").show();
				});
				
				$("#q08usefulPubsYes").bind("click", function() {
						$(".q08usefulPubsWhyContainer").hide();
				});
				
				$("#q08usefulPubsNot").bind("click", function() {
						$(".q08usefulPubsWhyContainer").hide();
				});
				
				
				
				
				
				$("#outputBtn").bind("click", validateForm);
				
			
			}
			
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
				
						var language = "English";
											var q00firstName = $("#q00firstName").val();
											var q00lastName = $("#q00lastName").val();
											var q00email = $("#q00email").val();
											var q01workSector = $("[name=q01workSector]:checked").map(function() {return this.value;}).get().join(",");
											var q01WorkSectorOther = $("#q01WorkSectorOther").val();
											var q02workField = $("[name=q02workField]:checked").map(function() {return this.value;}).get().join(",");
											var q02workSectorOther = $("#q02workSectorOther").val();
											var q03workPosition = $("[name=q03workPosition]:checked").map(function() {return this.value;}).get().join(",");
											var q03workPositionOther = $("#q03workPositionOther").val();
											var q04familiarWithCSEC = $("input:radio[name=q04familiarWithCSEC]:checked").val();
											var q05familiarWithCSECLearning = $("input:radio[name=q05familiarWithCSECLearning]:checked").val();
											var q06careerCSEC = $("input:radio[name=q06careerCSEC]:checked").val();
											var q07implementCSEC = $("input:radio[name=q07implementCSEC]:checked").val();
											var q08usefulPubs = $("input:radio[name=q08usefulPubs]:checked").val();
											var q08usefulPubsWhy = $("#q08usefulPubsWhy").val();
											var q08usefulPubsTopics = $("#q08usefulPubsTopics").val();
											var q09presentations = $("#q09presentations").val();
											var q10usefulInfo = $("input:radio[name=q10usefulInfo]:checked").val();
											var q11helpfulStaff = $("input:radio[name=q11helpfulStaff]:checked").val();
											var q12concernedCyberSecurity = $("input:radio[name=q12concernedCyberSecurity]:checked").val();
											var q13concernedMobileSecurity = $("input:radio[name=q13concernedMobileSecurity]:checked").val();
											var q14concernedSocialSecurity = $("input:radio[name=q14concernedSocialSecurity]:checked").val();
											var q15visitCSEC = $("input:radio[name=q15visitCSEC]:checked").val();
											var q16recommendations = $("#q16recommendations").val();
											output = "<tr><td>"+q00firstName+" "+q00lastName+"</td><td>"+q00email+"</td><td>"+language+"</td><td>"+q01workSector+"<br /><br />"+q01WorkSectorOther+"</td><td>"+q02workField+"<br /><br />"+q02workSectorOther+"</td><td>"+q03workPosition+"<br /><br />"+q03workPositionOther+"</td><td>"+q04familiarWithCSEC+"</td><td>"+q05familiarWithCSECLearning+"</td><td>"+q06careerCSEC+"</td><td>"+q07implementCSEC+"</td><td>"+q08usefulPubs+"<br /><br />"+q08usefulPubsWhy+"<br /><br />"+q08usefulPubsTopics+"</td><td>"+q09presentations+"</td><td>"+q10usefulInfo+"</td><td>"+q11helpfulStaff+"</td><td>"+q12concernedCyberSecurity+"</td><td>"+q13concernedMobileSecurity+"</td><td>"+q14concernedSocialSecurity+"</td><td>"+q15visitCSEC+"</td><td>"+q16recommendations+"</td></tr>";
											
											// var output = "<tr><td>"+q00firstName+" "+q00lastName+"</td><td>"+q00email+"</td><td>"+language+"</td><td>";
											
											
											$("#output").append(output);					
									
											window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
											
											alert(output);
				
				
						
						
						}
						
						

						// device APIs are available
						//
						
					
						function gotFS(fileSystem) {
							fileSystem.root.getFile("surveyOutput-aug19.txt", {create: true, exclusive: false}, gotFileEntry, fail);
							alert("gotFS");
						}
					
						function gotFileEntry(fileEntry) {
							fileEntry.createWriter(gotFileWriter, fail);
							alert("gotFileEntry");
						}
					
						function gotFileWriter(writer) {
							writer.onwriteend = function(evt) {								
								writer.onwriteend = function(evt) {
									writer.seek(writer.length);
									writer.write(window.output);									
								};
							};
							writer.write(output);							
							alert("gotFileWriter" + window.output);
						}
					
						function fail(error) {
							alert("failed to write file");
						}
				