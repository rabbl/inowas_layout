hide_all = function () {
    $( "#general" ).hide();
    $( "#soilmodel" ).hide();
    $( "#boundaries" ).hide();
    $( "#calculation" ).hide();
    $( "#results" ).hide();
    $( "#history" ).hide();
    $( ".general" ).removeClass('active');
    $( ".soilmodel" ).removeClass('active');
    $( ".boundaries" ).removeClass('active');
    $( ".calculation" ).removeClass('active');
    $( ".results" ).removeClass('active');
    $( ".history" ).removeClass('active');
};

$( ".general" ).click(function(){
    hide_all();
    $( "#general" ).show();
    $( ".general" ).addClass('active');
}).click();

$( ".soilmodel" ).click(function(){
    hide_all();
    $( "#soilmodel" ).show();
    $( ".soilmodel" ).addClass('active');
});

$( ".boundaries" ).click(function () {
    hide_all();
    $( "#boundaries" ).show();
    $( ".boundaries" ).addClass('active');
});

$( ".calculation" ).click(function(){
    hide_all();
    $( "#calculation" ).show();
    $( ".calculation" ).addClass('active');
});

$( ".results" ).click(function(){
    hide_all();
    $( "#results" ).show();
    $( ".results" ).addClass('active');
});

$( ".history" ).click(function(){
    hide_all();
    $( "#history" ).show();
    $( ".history" ).addClass('active');
});

