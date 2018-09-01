var quit = false;
var user_list = [];
while(!quit)
{
    var user_answer = prompt("what do you want to do?");

    if(user_answer.indexOf("quit") != -1)
    {
        quit = true;
    }
    else if(user_answer.indexOf("list") != -1)
    {
        console.log("********************");
        user_list.forEach(function(item, index) {console.log(index + ": " + item)});
        console.log("********************");
    }
    else if(user_answer.indexOf("new") != -1)
    {
        var new_item = prompt("enter a new todo?");
        user_list.push(new_item);
    }
    else if(user_answer.indexOf("delete") != -1)
    {
        var index = prompt("what index you want to delete?");
        user_list.pop(index);
        console.log("Item were removed");
    }
    else
    {
        alert("not available options");
    }
}

console.log("OK, YOU QUIT THE APP");
