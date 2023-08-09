function convertTemperature(inputType){
 const celsiusInput=document.getElememtById("celsius");
 const fahrenheitInput=document.getElememtById("fahrenheit");

 if(inputType==='celsius'){
 	 const celsiusValue=celsiusInput.value;
 	 if(celsiusValue !==''){
 	 	const fahrenheitValue=(celsiusValue*9/5)+32;
 	 	fahrenheitInput.value=fahrenheitValue.toFixed(2);
 	 }else{
 	 	fahrenheitInput.value='';
 	 }
 	} else if(inputType==='fahrenheit'){
 		const fahrenheitValue=fahrenheitInput.value;
 		if (fahrenheitValue!==''){
 			const celsiusValue=(fahrenheitValue-32)*5/9;
 			celsiusInput.value=celsiusValue.toFixed(2);
 		}else{
 			celsiusInput.value='';
 		}
 	}	
 }