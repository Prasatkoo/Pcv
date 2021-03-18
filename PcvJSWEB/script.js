
    document.write("<table class='chess'>");
    for(let i=1; i<=8; i++)
    {
    document.write("<tr>");
        for(let j = 1; j <= 8; j++)
    {
    if((i + j) % 2 !== 0) {
    document.write("<td class='white'></td>");
    }
    else {
        document.write("<td class='black'></td>");
    }
    }
    document.write("</tr>");
}
document.write("</table>");
