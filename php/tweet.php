<?php

include_once "config.php";

$status = mysqli_real_escape_string($conn, $_POST['status']);
$file = $_FILES['file'];

if (!empty($status) && !empty($file)) {
    if (strpos($file['type'], 'image/') === 0) {
        if (isset($file['name'])) { // Check if file is uploaded
            $img_name = $file['name']; // Getting user uploaded image name
            $tmp_name = $file['tmp_name']; // This temporary name is used to save/move the file in our folder

            if (move_uploaded_file($tmp_name, "images/{$img_name}")) {
                $insert_query = mysqli_query($conn, "INSERT INTO tweets (status, image) VALUES ('{$status}', '{$img_name}')");
                echo "success";
            } else {
                echo "Error moving image file.";
            }
        }
    } else if (strpos($file['type'], 'video/') === 0) {
        if (isset($file['name'])) { // Check if file is uploaded
            $vid_name = $file['name']; // Getting user uploaded video name
            $tmp_name = $file['tmp_name']; // This temporary name is used to save/move the file in our folder

            if (move_uploaded_file($tmp_name, "videos/{$vid_name}")) {
                $insert_query = mysqli_query($conn, "INSERT INTO tweets (status, video) VALUES ('{$status}', '{$vid_name}')");
                echo "success";
            } else {
                echo "Error moving video file.";
            }
        }
    }
} else {
    echo "error";
}
?>
