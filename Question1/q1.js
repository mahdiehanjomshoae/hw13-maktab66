//add row
$(document).ready(function () {
    let i = 1;
    $(".add-row").click(function () {
        i++;
        const markup = "<tr><td> <button type='button' class='btn btn-danger delete-row'>Delete</button> <button type='button'class='btn btn-primary  clone-row'>Clone</button></td> <td> <input type='number' class='form-control anctive__input' /></td> <td><input type='text' class='form-control anctive__input' /></td> <td><div class='d-flex justify-content-evenly'><label class='click__envalid'><input value='0'name='group-" + i + "' type='radio'> New</label>      <label class='click__envalid'><input value='1' name='group-" + i + "' type='radio'>   In progress</label>  <label class='click__confirmed'><input value='2' name='group-" + i + "' type='radio'> Confirmed</label></div></td></tr>";

        $("tbody").prepend(markup);
        updateItemsCount(1);
        checkNotConfirmed();
    });
    // delete row
    $(document).on('click', ".delete-row", function () {
        $(this).closest('tr').remove();
        updateItemsCount(-1);
        checkNotConfirmed();
    });
    //clone
    $(document).on('click', ".clone-row", function (e) {
        let r = $(this).closest('tr').clone();
        let radios = $(r).find("input[type=radio]");
        i++;
        for (let item of radios)
        {
            $(item).attr('name', 'group-' + i);
        }
        $(this).closest('tr').after(r);
        updateItemsCount(1);
        checkNotConfirmed();
    });
    //updateNumber
    let counter = 1
    function updateItemsCount(number) {
        counter = counter + number
        $("#d1").html(counter)
    }
    //anactive input
    $(document).on('click', '.click__confirmed', function () {
        $(this).parents('tr').find('.anctive__input').attr('disabled', true); //disable 
        checkNotConfirmed();
    });
    $(document).on('click', '.click__envalid', function () {
        $(this).parents('tr').find('.anctive__input').removeAttr('disabled');
        checkNotConfirmed();
    });
    //updateNumber not confirmed
     let c=1;
     $("#d2").html(c);
    function checkNotConfirmed () {
        const tbodyTrs = $("tbody tr");
        c = 0;
        for (let item of tbodyTrs)
        {
            let confirmedCheck = $(item).find("input[type=radio][value=2]").is(":checked");
            if (!confirmedCheck)
            {
                c++;
            }
        }
        $("#d2").html(c)
    }
}); 
