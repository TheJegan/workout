$(document).ready(function()
{
	//make ajax call
	var exerciseRepo = GetDummyJson();
	var workout;

	//a hack to find stronglifts assuming a user selected this regimen
	$(exerciseRepo.regimen).each(function()
		{
			if(this.name ==  "Strong Lift")
			{
				workout = this;
			}
		});



	$(workout.exercise).each(function()
	{
		CreateExerciseRow(this.name,this.weight,this.set);
	});

});

function CreateExerciseRow(name, weight,set)
{
	var exerciseContainer = $('#exerciseContainer');

	//exerciseContainer.append('<div');
	var row = '<div class="exercise row"> \
					<div class="title">		\
						<span class="name">'+name+'</span>  \
						<span class="weight">'+weight.value+weight.unit+'</span> \
				</div>';
		row += '<div class="sets">';

			$(set).each(function()
			{
				row += '<div class="repsContainer">';
				row += '<span class="reps">';
				row += this.rep
				row += '</span>';
				row += '</div>'
			});
		
		// 		<div class="repsContainer">
		// 			<span class="reps">
		// 				5
		// 			</span>
		// 		</div>
		// 		<div class="repsContainer"><span class="reps">5</span></div>
		// 		<div class="repsContainer"><span class="reps">5</span></div>
		// 		<div class="repsContainer"><span class="reps">5</span></div>
		// 		<div class="repsContainer"><span class="reps">5</span></div>
		// 		<div class="clear"></div>
		// 	</div>
		
		row += '<div class="clear"></div></div>';
		exerciseContainer.append(row);
}

function GetDummyJson()
{
	return   {
    "regimen":[
      {
        "name":"Strong Lift",
        "startDate":"03/05/2015",
        "endDate":"-1",
        "exercise":[
          {
            "name":"Squat",
            "weight":{
              "value":300,
              "unit":"LB"
            },
            "set":[
              {
                "rep":5
              },
              {
                "rep":5
              },
              {
                "rep":5
              },
              {
                "rep":5
              },
              {
                "rep":5
              }
            ],
            "rest":{
              "easy":90,
              "hard":180
            },
            "day":"m;w;f;",
            "week":"1, 3"
          },
          {
            "name":"bench",
            "weight":{
              "value":300,
              "unit":"LB"
            },
            "set":[
              {
                "rep":5
              },
              {
                "rep":5
              },
              {
                "rep":5
              },
              {
                "rep":5
              },
              {
                "rep":5
              }
            ],
            "rest":{
              "easy":90,
              "hard":180
            },
            "week":"1, 3"
          },
          {
            "name":"test other days and weeks",
            "weight":{
              "value":300,
              "unit":"LB"
            },
            "set":[
              {
                "rep":5
              },
              {
                "rep":5
              },
              {
                "rep":5
              },
              {
                "rep":5
              },
              {
                "rep":5
              }
            ],
            "rest":{
              "easy":90,
              "hard":180
            },
            "day":"tu;th;sa;su;",
            "week":"2, 4"
          },
        ]
      },
      {
        "name":"WHOLE IN ONE",
        "startDate":"03/05/2015",
        "exercise":[
          {
            "name":"Bench Press",
            "weight":{
              "value":300,
              "unit":"LB"
            },
            "set":[
              {
                "rep":8
              },
              {
                "rep":10
              },
              {
                "rep":12
              }
            ],
            "day":[
              {
                "value":"m"
              },
              {
                "value":"th"
              },
            ],
            "week":1
          },
          {
            "name":"Lat Pulldown",
            "weight":{
              "value":300,
              "unit":"LB"
            },
            "set":[
              {
                "rep":10
              },
              {
                "rep":12
              },
              {
                "rep":15
              }
            ],
            "week":1
          }
        ]
      }
    ]
  }
}