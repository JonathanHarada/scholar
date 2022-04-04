    <script>
    
    </script>

    
        <h1>Please Contact Us with any questions!</h1>
        <div>
            <p>If you have any suggestions for scholarships, please include the information as well as a link to the college site.</p>
        </div>
    
    <div class="form">
        
    <!-- Make sure you don't change the form action-->
    <form action="https://api.staticforms.xyz/submit" method="post">

        <!-- Replace with accesKey sent to your email -->
        <input type="hidden" name="accessKey" value="7b312cd5-8878-423b-b5fa-1d02776b7e40"> <!-- Required -->
        <input placeholder="Name" type="text" name="name">
        <input placeholder="Email" type="text" name="email"> 
        <input placeholder="Subject" type="text" name="subject"> 
        <textarea placeholder="Message" name="message"></textarea> 
        <input type="hidden" name="replyTo" value="@"> 
        <input type="hidden" name="redirectTo" value="http://localhost:3000/success"> 
        <input type="submit" value="Submit" />
    </form>
</div>


<style>
    h1 {
        text-align: center;
    }
    
    .form {
        text-align: center;
        display: list-item;
        margin: auto;
        
    }

    input[type=text] {
        margin: auto;
        width: 50%;
        padding: 12px 20px;
        margin: 8px 10;
        display: list-item;
        border: 4px double #39A9DB;
        border-radius: 8px;
        box-sizing: border-box;
    }
    textarea {
        margin: auto;
        width: 50%;
        height: 300px;
        padding: 12px 20px;
        margin: 8px 10;
        display: list-item;
        border: 4px double #39A9DB;
        border-radius: 8px;
        box-sizing: border-box;
    }

    input[type=submit] {
        margin-top: 10px;
        margin-bottom: 50px;
        font-size: large;
    }
    p {
        text-align: center;
        columns: 1;
        margin: 10px;
        line-height: 2.0;
        font-size: x-large;
    }

</style>