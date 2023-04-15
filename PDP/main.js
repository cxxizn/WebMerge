$(function(){
    var nTitle = 1;

	var nTiger = 0;
	var nPeacock = 0; // 孔雀
	var nKoala = 0;
	var nOwl = 0;
	var nChameleon = 0; // 變色龍

    reset();

    setTitle();
    showScore();

    $("#btnReset").on("click", function(){
        reset();
    });

    $("#btnNext").on("click", function(){
        let nRet = getScore();
        if(nRet == 0)
            alert("尚未選擇答案");
        else
        {
            if (nTitle <= 30)
			{
				sumScore(nTitle, nRet);
				resetScore();
				console.log("log: "+nTiger);
                console.log(nPeacock);
                console.log(nKoala);
                console.log(nOwl);
                console.log(nChameleon);
				nTitle = nTitle + 1;
				
				if (nTitle <= 30)
					setTitle();
                else
					showResult();
				showScore();
			}
        }
    });

    function reset()
    {
        nTitle = 1;
		nTiger = 0;
		nPeacock = 0; // 孔雀
		nKoala = 0;
		nOwl = 0;
		nChameleon = 0; // 變色龍
		
		setTitle();
		resetScore();
		showScore();
		
		$("#result").hide();
        // $("#result").css("visibility","hidden");
		$("#question").show();
    }

    function setTitle() //更新題目
    {  
        $("#title").text(nTitle + ". " + questions[nTitle-1].question);
        // $("#title h2").remove();
        // $("#title").append("<h2>"+ nTitle + ". " + questions[nTitle-1].question + "</h2>");
    }

    function resetScore()
    {
        $('input[name=radio]').prop('checked',false);
        // $('#radio input').removeAttr('checked');
		// // Refresh the jQuery UI buttonset.                  
		// $("#radio").buttonset('refresh');
    }

    function sumScore(num_title, num_score)
	{
		switch (num_title) {
				// 老虎
			case 5:
			case 10:
			case 14:
			case 18:
			case 24:
			case 30:
				nTiger = nTiger + num_score;
				break; 
				
				// 孔雀
			case 3:
			case 6:
			case 13:
			case 20:
			case 22:
			case 29:
				nPeacock = nPeacock + num_score;
				break;
				
				// 無尾熊
			case 2:
			case 8:
			case 15:
			case 17:
			case 25:
			case 28:
				nKoala = nKoala + num_score;
				break; 
				
				// 貓頭鷹
			case 1:
			case 7:
			case 11:
			case 16:
			case 21:
			case 26:
				nOwl = nOwl + num_score;
				break; 
				
				// 變色龍
			case 4:
			case 9:
			case 12:
			case 19:
			case 23:
			case 27:
				nChameleon = nChameleon + num_score;
				break; 
		}
	}

    function getScore()
	{
		var nRet = 0;
		
		if ($("#r5:checked").val() == "on" )
		{
			nRet = 5;			
		} 
		else if ($("#r4:checked").val() == "on" )
		{
			nRet = 4;
		}
		else if ($("#r3:checked").val() == "on" )
		{
			nRet = 3;
		}
		else if ($("#r2:checked").val() == "on" )
		{
			nRet = 2;
		}
		else if ($("#r1:checked").val() == "on" )
		{
			nRet = 1;
		}		
		return nRet;	
	}

    function showResult()
    {
        $("#result").show();
        // $("#result").css("visibility","hidden");
        $("#question").hide();
    }

    function showScore()
    {
        $("#tiger span").remove();
		$("#tiger").append("<span>" + nTiger + "</span>");
		
		$("#peacock span").remove();
		$("#peacock").append("<span>" + nPeacock + "</span>");
		
		$("#koala span").remove();
		$("#koala").append("<span>" + nKoala + "</span>");
		
		$("#owl span").remove();
		$("#owl").append("<span>" + nOwl + "</span>");
		
		$("#chameleon span").remove();
		$("#chameleon").append("<span>" + nChameleon + "</span>");
    }
})