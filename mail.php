<?php
// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove MORALspace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r", "\n"), array(" ", " "), $name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $date = trim($_POST["date"]);
    $number = trim($_POST["number"]);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    if (empty($name) or empty($date) or empty($number) or empty($message) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "<div class='msg-body' style='margin-top:100px; text-align:center;'>";
        echo "<h2 class='msg-text'>Please complete the form and try again.</h2>";
        echo "<p class='back-home'>Go back to the <a href='index.html'>Home Page</a>.</p>";
        echo "</div>";
        exit;
    }

    // Set the recipient email address.
    // FIXME: Update this to your desired email address.
    $recipient = "rokunuzzamanbhuiya@gmail.com";

    // Set the email subject.
    $subject = "New contact from $name";

    // Build the email content.
    $email_content = "Name: $name\n\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Date: $date\n\n";
    $email_content .= "Number: $number\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "<div class='msg-body' style='margin-top:100px; text-align:center;'>";
        echo "<h2 class='msg-text'>Thank You! Your message has been sent.</h2>";
        echo "<p class='back-home'>Go back to the <a href='index.html'>Home Page</a>.</p>";
        echo "</div>";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "<div class='msg-body' style='margin-top:100px; text-align:center;'>";
        echo "<h2 class='msg-text'>Oops! Something went wrong and we couldn\'t send your message.</h2>";
        echo "<p class='back-home'>Go back to the <a href='index.html'>Home Page</a>.</p>";
        echo "</div>";
    }
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "<div class='msg-body' style='margin-top:100px; text-align:center;'>";
    echo "<h2 class='msg-text'>There was a problem with your submission, please try again.</h2>";
    echo "<p class='back-home'>Go back to the <a href='index.html'>Home Page</a>.</p>";
    echo "</div>";
}
