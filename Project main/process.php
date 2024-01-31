<?php
if (isset($_POST["name"]) && isset($_POST["age"])) {
$name = $_POST["name"];
$age = $_POST["age"];
}
?>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div id="msform">
      <fieldset>
        <h2 class="fs-title">YOUR TEST</h2>
        <?php 
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
          if ($age < 18) {
              echo "Sorry, you must be 18 or older to proceed.";
              // Handle as needed, e.g., redirect the user or display an error message
          } 
          else {
            // Initialize existing string
            $existingString = "";

            // Process Q1
            if (isset($_POST["Q1"])) {
                $selectedOptionQ1 = $_POST["Q1"];
                $existingString .= ($selectedOptionQ1 === "YES") ? "1" : "0";
            } else {
                echo "No data received for Q1.";
                // Handle as needed
            }

            // Process Q2
            if (isset($_POST["Q2"])) {
                $selectedOptionQ2 = $_POST["Q2"];
                $existingString .= ($selectedOptionQ2 === "YES") ? "1" : "0";
            } else {
                echo "No data received for Q2.";
                // Handle as needed
            }
          }
            // Process Q3
            if (isset($_POST["Q3"])) {
    $selectedOptionQ3 = $_POST["Q3"];
    $existingString .= ($selectedOptionQ3 === "YES") ? "1" : "0";
} else {
                echo "No data received for Q3.";
              // Handle as needed
}       
            // Process Q4
            if (isset($_POST["Q4"])) {
                $selectedOptionQ4 = $_POST["Q4"];
                $existingString .= ($selectedOptionQ4 === "YES") ? "1" : "0";
            } else {
                echo "No data received for Q4.";
                // Handle as needed
}
            // Process Q5
            if (isset($_POST["Q5"])) {
                $selectedOptionQ5 = $_POST["Q5"];
                $existingString .= ($selectedOptionQ5 === "YES") ? "1" : "0";
            } else {
                echo "No data received for Q5.";
                // Handle as needed
}
                      
            // Process Q6
            if (isset($_POST["Q6"])) {
                $selectedOptionQ6 = $_POST["Q6"];
                $existingString .= ($selectedOptionQ6 === "YES") ? "1" : "0";
            } else {
                echo "No data received for Q6.";
                // Handle as needed
            }
            
            // Process Q7
            if (isset($_POST["Q7"])) {
                $selectedOptionQ7 = $_POST["Q7"];
                $existingString .= ($selectedOptionQ7 === "YES") ? "1" : "0";
            } else {
                echo "No data received for Q7.";
                // Handle as needed
            }
            
            // Process Q8
            if (isset($_POST["Q8"])) {
                $selectedOptionQ8 = $_POST["Q8"];
                $existingString .= ($selectedOptionQ8 === "YES") ? "1" : "0";
            } else {
                echo "No data received for Q8.";
                // Handle as needed
            }
            
            // Process Q9
            if (isset($_POST["Q9"])) {
                $selectedOptionQ9 = $_POST["Q9"];
                $existingString .= ($selectedOptionQ9 === "YES") ? "1" : "0";
            } else {
                echo "No data received for Q9.";
                // Handle as needed
            }
            
            // Process Q10
            if (isset($_POST["Q10"])) {
                $selectedOptionQ10 = $_POST["Q10"];
                $existingString .= ($selectedOptionQ10 === "YES") ? "1" : "0";
            } else {
                echo "No data received for Q10.";
                // Handle as needed
            }
        }
        echo "Hello " . $name . "<br>";

            // Check conditions based on the string representation
            if ($existingString === "1101000000") {
                echo "You are Adolf Hitler.";
            } elseif ($existingString === "1100000000") {
                // Removed "You are a girl" condition
            } elseif ($existingString === "1000100000") {
                echo "You are Xerxes.";
            } elseif ($existingString === "1000000000") {
                echo "You are Sadegh Hedayat.";
            } elseif ($existingString === "0011100000") {
                echo "You are Cyrus the Great.";
            } elseif ($existingString === "0011101000") {
                echo "You are Cambyses.";
            } elseif ($existingString === "0011100000") {
                echo "You are Ferdowsi.";
            } elseif ($existingString === "0010010000") {
                echo "You are Anthony of Rome.";
            } elseif ($existingString === "0010000000") {
                echo "You are Louis the Pious.";
            } elseif ($existingString === "0000001000") {
                echo "You are Joseph Stalin.";
            } elseif ($existingString === "0000000001") {
                echo "You are Osama bin Laden.";
            } elseif ($existingString === "1111100000") {
                echo "You are Julius Caesar.";
            } elseif ($existingString === "1111111100") {
                echo "You are Cleopatra.";
            } elseif ($existingString === "0101100100") {
                echo "You are Joan of Arc.";
            } elseif ($existingString === "0000100100") {
                echo "You are Leonardo da Vinci.";
            } elseif ($existingString === "0100101000") {
                echo "You are William Shakespeare.";
            } elseif ($existingString === "0100100010") {
                echo "You are Amelia Earhart.";
            } elseif ($existingString === "0100100001") {
                echo "You are Albert Einstein.";
            } elseif ($existingString === "0101000000") {
                echo "You are Genghis Khan.";
            } else {
                echo "YOU HAVE NO PERSONALITY";
            }

        ?>
        
      </fieldset>
    </div>
  </body>
