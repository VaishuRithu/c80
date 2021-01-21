student_name_array = [];

function submit(){

    var display_student_array = [];

    for (var j = 1; j <= 4; j++){

        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);

        student_name_array.push(name_of_the_student);

    }

    console.log(student_name_array);

    var length_of_student_name_array = student_name_array.length;
    console.log(length_of_student_name_array);

    for (var k = 0; k < length_of_student_name_array; k++){

        display_student_array.push("<h4>NAME - " + student_name_array[k] + "</h4>");
        console.log(display_student_array);

    }

    console.log(display_student_array);

    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    
    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline_block";

}

function sorting(){

    student_name_array.sort();
    console.log(student_name_array);

    var display_student_array_sorting = [];

    var length_of_student_name_array = student_name_array.length;
    console.log(length_of_student_name_array);

    for (var k = 0; k < length_of_student_name_array; k++){

        display_student_array.push("<h4>NAME - " + student_name_array[k] + "</h4>");
        console.log(display_student_array);

    }

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
 
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


}