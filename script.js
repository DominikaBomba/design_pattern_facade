
console.log("aaa");
            //slider 
			class Slider{
				
				constructor(tutorials){
					
					this.tutorials = tutorials;
				}
				add(){
					//slider
					
					//left arrow
					let left_arrow = document.createElement("button");
					left_arrow.setAttribute("id", "left_arrow");
					//image
					let current_video = document.createElement("source");
					current_video.setAttribute("src", this.tutorials[0]);
					//right arrow
					let right_arrow= document.createElement("button");
					right_arrow.setAttribute("id", "right_arrow");
					
					//adding elements to slider
					
					przyciski.appendChild(left_arrow);
					document.querySelector("#vid").appendChild(current_video);
					przyciski.appendChild(right_arrow);
					//left arrow after click

					left_arrow.addEventListener("click", ()=>{
						let current_number = this.tutorials.indexOf(current_video.getAttribute("src"));
						console.log(current_number);
						//np index to 1 a lista ma dlugosc 2
						//np index to 2 a lista ma dlugosc 2
						if(current_number > 0){
							
							current_video.setAttribute("src", this.tutorials[current_number - 1]);
						}
						else{
							current_video.setAttribute("src", this.tutorials[this.tutorials.length-1]);
						}
					});
					
					right_arrow.addEventListener("click", ()=>{
						let current_number = this.tutorials.indexOf(current_video.getAttribute("src"));
						console.log(current_number);
						//np index to 1 a lista ma dlugosc 2
						//np index to 2 a lista ma dlugosc 2
						if(current_number < this.tutorials.length - 1){
							
							current_video.setAttribute("src", this.tutorials[current_number + 1]);
						}
						else{
							current_video.setAttribute("src", this.tutorials[0]);
						}
					});
                    
				}
				
			}
			let s1 = new Slider(["p0.mp4", "p1.mp4", "p2.mp4", "p3.mp4"]);
	console.log("aaa");
			s1.add();
			
