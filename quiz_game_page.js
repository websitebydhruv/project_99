function send()
    {
        number_1 = document.getElementById("number1").value;
        number_2 = document.getElementById("number2").value;
        actual_answer = parseInt(number1) *parseInt(number_2);
        question_number = "<h4>" + number1 + "X" + number2 +"</h4>";
        input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>"
        Check_Button = "<br><br><button class = btn btn-info onclick+'check()'>Check</button";
        row = question_number + input_box + Check_Button ;
        document.getElementById("output").innerHTML = row;
        document.getElementById(number1).value = "";
        document.getElementById(number2).value = "";
    }

