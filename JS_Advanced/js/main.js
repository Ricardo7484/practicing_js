var list = [
    {"description":"white rice","amount":"3","value":"3.00"},
    {"description":"black beans","amount":"1.5","value":"6.00"},
    {"description":"chicken leg","amount":"1","value":"9.00"}
]

function getTotal(list){
    var total = 0;
    for(var key in list){
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list){
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>'
    
    for(var key in list){
        table += '<tr><td>'+formatDesc(list[key].description)+'</td><td>'+list[key].amount+'</td><td>'+formatValue(list[key].value)+'</td><td>Edit | Delete</td>';
    }

    table += '</tbody>';
    document.getElementById('listTable').innerHTML = table;
}

function formatDesc(description){
    var str = description.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value){
    //var str = parseFloat(value).toFixed(2) + "";
    var str = parseFloat(value).toFixed(2) + "";
    str = str.toString().replace(".", ",");
    str = "R$ " + str;
    return str;
}

setList(list)