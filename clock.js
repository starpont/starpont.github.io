function clock_form()
{
var day=new Date();
var h,m,s;
if (day.getHours() < 10)
{
h = "0" + day.getHours();
}
else
{
h = day.getHours();
}

if (day.getMinutes() < 10)
{
m = "0" + day.getMinutes();
}
else
{
m = day.getMinutes();
}

if (day.getSeconds() < 10)
{
s = "0" + day.getSeconds();
}
else
{
s = day.getSeconds();
}
var clock_f=h+":"+m+":"+s;
document.form.f_clock.value=clock_f;
var id=setTimeout("clock_form()",1000);
}