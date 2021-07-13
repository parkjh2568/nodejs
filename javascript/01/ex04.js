//인자로 함수를 취하고나 변환가능

var ho_func = function (param_func)
{
	param_func();
};
ho_func(function()
		{
			console.log("im in function templet function");
		}
		);

