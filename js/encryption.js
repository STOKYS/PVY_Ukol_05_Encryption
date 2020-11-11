$("#input").on("input", function(){
    if (keyword.value.length != 0){
        let textLength = input.value.length;
        fnc_length(textLength)
        data.fnc_main()
    } else {
        input.value = ""
        hint01.style.display = "inline"
    }
})

