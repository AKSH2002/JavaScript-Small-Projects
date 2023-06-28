function handleSubmit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Concatenate name with message
    var body = "Name: " + name + "\n\n" + "Message:" + message;

    var mailtoLink = 'mailto:akshdarji2019@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Open the user's default email client
    window.location.href = mailtoLink;
  }