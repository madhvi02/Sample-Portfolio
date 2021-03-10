// var about=document.getElementById('a');
// var skills=document.getElementById('s');
// var experience=document.getElementById('ex');
// var eduction=document.getElementById('ed');
// var portfolio=document.getElementById('p');
// var contact=document.getElementById('c');
// about.addEventListener('click',function(event)
// {
// 	event.preventDefault();
// 	var target=1567;
// 	var current=0;
// 	var scroll=setInterval(function()
// 	{
//        if(current>=target)
//        {
//        	clearInterval(scroll);
//        	return ;
//        }
//        current+=50;
//        window.scrollBy(0,50);

// 	},50);
// });
// skills.addEventListener('click',function(event)
// {
// 	event.preventDefault();
// 	var target=1567;
// 	var current=0;
// 	var scroll=setInterval(function()
// 	{
//        if(current>=target)
//        {
//        	clearInterval(scroll);
//        	return ;
//        }
//        current+=50;
//        window.scrollBy(0,50);

// 	},50);
// });
// eduction.addEventListener('click',function(event)
// {
// 	event.preventDefault();
// 	var target=1567;
// 	var current=0;
// 	var scroll=setInterval(function()
// 	{
//        if(current>=target)
//        {
//        	clearInterval(scroll);
//        	return ;
//        }
//        current+=50;
//        window.scrollBy(0,50);

// 	},50);
// });
// experience.addEventListener('click',function(event)
// {
// 	event.preventDefault();
// 	var target=1567;
// 	var current=0;
// 	var scroll=setInterval(function()
// 	{
//        if(current>=target)
//        {
//        	clearInterval(scroll);
//        	return ;
//        }
//        current+=50;
//        window.scrollBy(0,50);

// 	},50);
// });
// portfolio.addEventListener('click',function(event)
// {
// 	event.preventDefault();
// 	var target=1567;
// 	var current=0;
// 	var scroll=setInterval(function()
// 	{
//        if(current>=target)
//        {
//        	clearInterval(scroll);
//        	return ;
//        }
//        current+=50;
//        window.scrollBy(0,50);

// 	},50);
// });
// contact.addEventListener('click',function(event)
// {
// 	event.preventDefault();
// 	var target=1560;
// 	var current=0;
// 	var scroll=setInterval(function()
// 	{
//        if(current>=target)
//        {
//        	clearInterval(scroll);
//        	return ;
//        }
//        current+=50;
//        window.scrollBy(0,50);

// 	},50);
// });

var navAnchorTags=document.querySelectorAll('.nav-menu a');
for(var i=0;i<navAnchorTags.length;i++)
{
	navAnchorTags[i].addEventListener('click',function(event)
	{
		event.preventDefault();
		var targetSectionId=this.textContent.trim().toLowerCase();
		var targetSection=document.getElementById(targetSectionId);
		
		var interval=setInterval(function()
		{
			var targetSectionCoordinates=targetSection.getBoundingClientRect();
			if(targetSectionCoordinates.top<=0)
			{
				clearInterval(interval);
				return;
			}
			window.scrollBy(0,50);

		},30);
	});
}

var progressBars=document.querySelectorAll('.skill-progress > div');
var skillsConatiner=document.getElementById('skills-container');
window.addEventListener('scroll',checkscroll);
var animationDone=false;



function initialBars()
{
	for(let bar of progressBars)
	{
		bar.style.width=0+'%';
	}
}

initialBars();

function fillBars()
{
	for(let bar of progressBars)

	{
		let currentwidth=0;
		let widthOfBars=bar.getAttribute('data-bar-width');
		let intervalBar=setInterval(function()
		{
			if(currentwidth>widthOfBars)
			{
				clearInterval(intervalBar);
				return;
			}
			currentwidth++;
			bar.style.width=currentwidth+'%';
		},6);
	}
}



function checkscroll()
{
	var coordinates=skillsConatiner.getBoundingClientRect();
	if(!animationDone && coordinates.top<window.innerHeight)
	{
		animationDone=true;
		console.log('Skills');
		fillBars();
	}
	else if(coordinates.top>window.innerHeight )
	{
		animationDone=false;
		initialBars();
	}
}









