function appendToDisplay(value) {
    $('#display').val($('#display').val() + value);
}

function clearDisplay() {
    $('#display').val('');
    $('#result').text('');
}

function calculate() {
    try {
        var result = eval($('#display').val());
        $('#result').text('Result: ' + result);
    } catch (error) {
        $('#result').text('Error');
    }
}