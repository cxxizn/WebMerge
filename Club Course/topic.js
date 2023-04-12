let topic = ["尚未開學", "停課", "環境準備", "隨機性", "重複性", "條件判斷"];

let startDate = new Date();
console.log(startDate);
function setMonthAndDay(startMonth, startDay) {
	//一次設定好月份與日期
	startDate.setMonth(startMonth - 1, startDay);
	startDate.setHours(0);
	startDate.setMinutes(0);
	startDate.setSeconds(0);
    console.log(startDate);
}

function addTopic(index){
	// let topicCount = topic.length;
	let millisecsPerDay = 24 * 60 * 60 * 1000;
	$("#courseTable").append(
			`<tr>
				<td>${index + 1}</td>
				<td>${new Date(startDate.getTime() + 7 * index * millisecsPerDay).getMonth() + 1}
					/${new Date(startDate.getTime() + 7 * index * millisecsPerDay).getDate()}</td>
				<td>${topic[index]}</td>
			</tr>`
	);
	if (topic[index] == "停課")
		$("tr").eq(index + 1).css("background-color", "gray");
	else if (index % 2 == 1)
		$("tr").eq(index + 1).css("background-color", "#e0be8c");
	else
		$("tr").eq(index + 1).css("background-color", "#eed6b2");
}

//新增topic
document.getElementById("submitBtn").addEventListener('click', function(){
    let courseInput = document.getElementById("courseInput");
    topic.push(courseInput.value);
    console.log(topic);
    courseInput.value = ''; //清空input text

	addTopic(topic.length - 1);
});


//改變起始日
document.getElementById("dateInput").addEventListener("change", function () {
	// let input = this.value;
	let date = $("#dateInput").val().split("-");
	// let year = parseInt(+date[0]);
	let month = parseInt(date[1]);
	let day = parseInt(date[2]);

	console.log(date);
	console.log(month);
	console.log(day);

	setMonthAndDay(month, day);

	//更新日期
	let courseTable = document.getElementById("courseTable");
	let millisecsPerDay = 24 * 60 * 60 * 1000;
	for(let x = 0; x < topic.length; x++){
		courseTable.rows[x + 1].cells[1].innerHTML = `	
		${new Date(startDate.getTime() + 7 * x * millisecsPerDay).getMonth() + 1}
			/${new Date(startDate.getTime() + 7 * x * millisecsPerDay).getDate()}
		`;
	}

});

setMonthAndDay(2,21);