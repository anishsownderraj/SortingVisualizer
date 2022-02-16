 export function bubbleSort(array, speed) {
	  const all_bars = document.getElementsByClassName('bar');
    const animations =[]
		var comparisons = 0

    for(var i = 0; i < array.length; i++){

        for(var j = 0; j < ( array.length - i -1 ); j++){

            animations.push({comparison: [j, j+1], swap: []})


          if(array[j] > array[j+1]){

            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
            animations.push({comparison: [j, j+1], swap: [j, j+1]})
          }
        }
      }
			animations.push({comparison: [0, 0], swap: []})

      //comparisons
      for(var k = 0; k < animations.length; k++){
        const curr_comparison = animations[k].comparison;
        const curr_swap = animations[k].swap;


          setTimeout(() => {

            if (curr_swap == 0) {
                all_bars[curr_comparison[0]].style.backgroundColor='yellow';
                all_bars[curr_comparison[1]].style.backgroundColor='yellow';
							  comparisons++;


              }
            else {

                const barOne = curr_comparison[0];
                const barTwo = curr_comparison[1];
                const barOneHeight = all_bars[curr_swap[0]].style.height;
                const barTwoHeight = all_bars[curr_swap[1]].style.height;

                const barOneNum = all_bars[curr_swap[0]].id;
                const barTwoNum = all_bars[curr_swap[1]].id;


                all_bars[curr_swap[0]].innerHTML = barTwoNum;
                all_bars[curr_swap[1]].innerHTML = barOneNum;

                all_bars[curr_swap[0]].id = barTwoNum;
                all_bars[curr_swap[1]].id = barOneNum;

                all_bars[curr_swap[0]].style.height = barTwoHeight;
                all_bars[curr_swap[1]].style.height = barOneHeight;
                all_bars[curr_comparison[0]].style.backgroundColor='red';
                all_bars[curr_comparison[1]].style.backgroundColor='red';

            }


          },((k*200)))



          setTimeout(()=>{
            all_bars[curr_comparison[0]].style.backgroundColor='turquoise';
            all_bars[curr_comparison[1]].style.backgroundColor='turquoise';

						all_bars[curr_comparison[1]].style.backgroundColor='pink';
						console.log(k)



            },(k*200)+ 150)


					}
					return;

        }



