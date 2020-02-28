$(function(){
    $('#form').validate({
        rules: {
            firstName: 'required',
            lastName: 'required',
            email: {
              required: true,
              email: true,
            },
            psword: {
              required: true,
              minlength: 8,
            }
          },
          messages: {
            firstName: 'This field is required',
            lastName: 'This field is required',
            email: 'Enter a valid email',
            password: {
              minlength: 'Password must be atleast 8 characterslong, <br> uppercase and lowercase letters <br> and numbers'
            },
            passwordConfirm: {
                minlength: 'Password must be atleast 8 characterslong, <br> uppercase and lowercase letters <br> and numbers '
              }
          },
          submitHandler: function(form) {
            form.submit();
          }
    }
);
$.validator.addMethod("pwcheck", function (value) {
    return /[\@\#\$\%\^\&\*\(\)\_\+\!]/.test(value) && /[a-z]/.test(value) && /[0-9]/.test(value) && /[A-Z]/.test(value)
});
});