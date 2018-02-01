{
    "quiz": {
        "Id": 11,
        "name": "Practice Exam 1",
        "logo" : "data/img/exam.jpg"
    },
    "questions": [{
        "Id": 1,
        "Name": "With reference to DynamoDB, which of these is idempotent?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Atomic Counter", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Conditional Writes", "IsAnswer": true }]

    },
    {
        "Id": 2,
        "Name": "DynamoDB supports cross-table joins.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
   {
        "Id": 3,
        "Name": "Which statement about DynamoDB is true?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB uses a pessimistic locking model ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB does not use optimistic concurrency control ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "DynamoDB uses conditional writes for consistency", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "DynamoDB restricts item access during reads", "IsAnswer": false }]

    },
     {
        "Id": 4,
        "Name": "You have an application that requires to read 10 items of 6 KB each per second. How many units of read capacity should you set if you desire eventual consistency?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "20 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "5 capacity units ", "IsAnswer": false }]

    },
     {
        "Id": 5,
        "Name": " You have an application that requires to read 5 items of 10 KB each per second. How many units of read capacity should you set if you desire eventual consistency?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "13 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "8 capacity units  ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "9 capacity units ", "IsAnswer": false }]

    },
    {
        "Id": 6,
        "Name": "You have an application that requires to read 5 items of 10 KB each per second. How many units of read capacity should you set if you desire strongly consistent reads?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "13 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "8 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": true }]

    },
    {
        "Id": 7,
        "Name": "You have an application that requires to write 5 items of 10 KB each per second. How many units of write capacity should you set?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "50 capacity units ", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "8.5 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": false }]

    },
     {
        "Id": 8,
        "Name": "You have an application that requires to write 5 items of 10.5 KB each per second. How many units of write capacity should you set?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "50 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "11 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "55 capacity units", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": false }]

    },
    {
        "Id": 9,
        "Name": "Your app needs to push notifications to your user's mobile devices. Which of the following services will you use for that?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SWF", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SNS", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false }]
        
    },
     {
        "Id": 10,
        "Name": "SAML stands for :", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Security Assertion Markup Language", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Secured Assertive Markup Language.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Security Assertive Markup Language.", "IsAnswer": false }]
        
    },
     {
        "Id": 11,
        "Name": "With regard to IAM, MFA is an acronym for:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Multi-Form authentication", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Multi-Faceted authentication.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Multi-Factor authentication .", "IsAnswer": true }]
        
    },
     {
        "Id": 12,
        "Name": "You cannot change the IAM role on a running EC2 instance. You can change the permissions on the IAM role associated with a running instance, and the updated permissions will take effect almost immediately.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 13,
        "Name": "You cannot associate an IAM role with an already running EC2 instance.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 14,
        "Name": "If you delete an IAM role that’s associated with a running EC2 instance, any application running on that instance that's using the role will be denied access immediately.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 15,
        "Name": "Which of the following operation should be invoked when federating with Facebook?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AssumeRoleWithSAML", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AssumeRoleWithWebIdentity", "IsAnswer": true }]
        
    },
     {
        "Id": 16,
        "Name": "In AWS, Templates and Stacks are related to:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SWF", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Lambda", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false }]
        
    },
     {
        "Id": 17,
        "Name": "Your business has a requirement to setup a server in the cloud, install a RDMS on it and install and run Apache web server. This stack should also be quickly replicable. Which AWS service will you use for this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Cloud Watch", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Streaming API", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false }]
        
    },
     {
        "Id": 18,
        "Name": "In CloudFormation is it possible to save the data when a stack is deleted?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "No", "IsAnswer": false }]
        
    },
     {
        "Id": 19,
        "Name": "You app involves processing payments and delivering music files to customers. You plan to use SQS to help facilitate this. You need to ensure that the payment process takes priority over the delivery of music files. What is the best way to achieve this.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use 2 SQS queues for the platform. Have  EC2  poll the payment SQS queue first. If this queue is empty, then poll the music files queue.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use 1 SQS queue for the platform. Use the HighPriority API call to ensure that all payment SQS messages take priority over the music files.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use 1 SQS queue for the platform. Use the SetPriority API call to ensure that all payment SQS messages take priority over the music files.", "IsAnswer": false}]
        
    },
     {
        "Id": 20,
        "Name": "Your EC2 instances download jobs from the SQS queue, however they are taking too long to process them. What API call can you use to extend the length of time to process the jobs?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AddMessageTime", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "ChangeMessageVisibility", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "ExtendMessageTime", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "RenewMessageTime", "IsAnswer": false}]
        
    },
     {
        "Id": 21,
        "Name": "In SQS, maximum Long Poll timeout is: ", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "60 seconds", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "60 minutes", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "5 minutes", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "20 seconds", "IsAnswer": true}]
        
    },
     {
        "Id": 22,
        "Name": "Which language does the AmazonSQSBufferedAsyncClient support", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "PHP", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Python", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Java", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "C#", "IsAnswer": false}]
        
    },
     {
        "Id": 23,
        "Name": "All messages have a globally unique ID that Amazon SQS returns when the message is delivered to the queue.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 24,
        "Name": "You wish to determine the time-in-queue for a message in SQS. Whats the best way to do this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Request the “SentTimestamp” attribute when receiving a message. Subtract that value from the current time.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Read the 'time-in-queue' attribute on the message", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You cannot determine this.", "IsAnswer": false }]
        
    },
     {
        "Id": 25,
        "Name": "What is the “SenderId” attribute value of a message in the case of anonymous access", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "IP Address of the sender", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Login id of the user", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Indeterminate", "IsAnswer": false }]
        
    },
     {
        "Id": 26,
        "Name": "What is the  maximum limit for message visibility?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "12 hours", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "One week", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "1 month", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "1 day", "IsAnswer": false }]
        
    },
     {
        "Id": 27,
        "Name": "Amazon does not offer Dead Letter Queues (DLQs)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
     {
        "Id": 28,
        "Name": "Amazon provides first-in-first-out (FIFO) access to messages", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
     {
        "Id": 29,
        "Name": "Which of the following statements about SQS is true?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Messages will be delivered exactly once and messages will be delivered in First in, First out order ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Messages will be delivered exactly once and message delivery order is indeterminate", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Messages will be delivered one or more times and messages will be delivered in First in, First out order", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Messages will be delivered one or more times and message delivery order is indeterminate ", "IsAnswer": true }]
        
    },
     {
        "Id": 30,
        "Name": "Which of the following notification endpoints or clients are supported by Amazon Simple Notification Service?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Email", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudFront distribution", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "File Transfer Protocol", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Simple Network Management Protocol", "IsAnswer": false }]
        
    },
     {
        "Id": 31,
        "Name": "In order to retrieve multiple items from a DynamoDB table, which of the following API calls should be used?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "GetItems", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "BatchGetItems distribution", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "BatchGet", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "BatchGetItem", "IsAnswer": true }]
        
    },
     {
        "Id": 32,
        "Name": "Creation of a new Autoscaling group is failing because the limit has reached. Which of the following commands can be used to determine if the Autoscaling group limit has been reached in a region?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "max-account-limits", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "describe-group-limits", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "aws autoscaling list-account-limits", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "aws autoscaling describe-account-limits", "IsAnswer": true }]
        
    },
     {
        "Id": 33,
        "Name": "With regard to DynamoDB, when you create a table with a hash-and-range key _________________", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You must define one or more Global secondary indexes on that table", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "You must define one or more Local secondary indexes on that table", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You must define one or more secondary indexes on that table", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You can optionally define one or more secondary indexes on that table", "IsAnswer": true }]
        
    },
     {
        "Id": 34,
        "Name": "A user has created a new raw EBS volume. The user mounts the volume on the instance to which it is attached. Which of the below mentioned options is a required step before the user can mount the volume?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Run a cyclic check on the device for data consistency", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The user can directly mount the device without having to do anything else.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Resize the volume as per the original snapshot size", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create a file system of the volume", "IsAnswer": true }]
        
    },
     {
        "Id": 35,
        "Name": "You have a number of image files to encode. In an Amazon SQS worker queue, you create an Amazon SQS message for each file specifying the command (jpeg-encode) and the location of the file in Amazon S3. Which of the following statements best describes the functionality of Amazon SQS?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon SQS is a distributed queuing system that is optimized for horizontal scalability, not for single-threaded sending or receiving speeds.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon SQS is a distributed queuing system that is optimized for vertical scalability and for single-threaded sending or receiving speeds.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon SQS is for single-threaded sending or receiving speeds.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon SQS is a non-distributed queuing system.", "IsAnswer": false }]
        
    },
     {
        "Id": 36,
        "Name": "An organization's security policy requires multiple copies of all critical data to be replicated across at least a primary and backup data center. The organization has decided to store some critical data on Amazon S3. Which option should you implement to ensure this requirement is met?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use the S3 copy API to replicate data between two S3 buckets in different regions.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "You do not need to implement anything since S3 data is automatically replicated between regions.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the S3 copy API to replicate data between two S3 buckets in different facilities within an AWS Region.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You do not need to implement anything since S3 data is automatically replicated between multiple facilities within an AWS Region ", "IsAnswer": true }]
        
    },
     {
        "Id": 37,
        "Name": "A user plans to use RDS as a managed DB platform. Which of the below mentioned features is not supported by RDS?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Automated backup.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Automated scaling to manage a higher load.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Automated failure detection and recovery.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Automated software patching", "IsAnswer": false }],
        "Explanation": "AWS RDS provides a managed DB platform, which offers features, such as automated backup, patch management, automated failure detection and recovery. The scaling is not automated and the user needs to plan it with a few clicks.",
        "Ref" : "http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
        
    },
     {
        "Id": 38,
        "Name": "A user has not enabled versioning on an S3 bucket. What will be the version ID of the object inside that bucket?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "0", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "There will be no version attached", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Null", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Blank", "IsAnswer": false }],
        "Explanation": "S3 objects stored in the bucket before the user has set the versioning state have a version ID of Null. When the user enables versioning, the objects in the bucket do not change and their ID remains Null.",
        "Ref": "http://docs.aws.amazon.com/AmazonS3/latest/dev/AddingObjectstoVersionSuspendedBuckets.html"
    },
     {
        "Id": 39,
        "Name": "PetStore Inc. is currently hosting their corporate site in an Amazon S3 bucket with Static Website Hosting enabled. Currently, when visitors go to http://www.mypetstore.com the index.html page is returned. PetStore Inc. now would like a new page welcome.html to be returned when a visitor enters http://www.mypetstore.com in the browser. Which of the following steps will allow PetStore Inc. to meet this requirement? Choose 2 answers", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Upload an html page named welcome.html to their S3 bucket", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a welcome subfolder in their S3 bucket", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Set the Index Document property to welcome.html", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Move the index.html page to a welcome subfolder", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Set the Error Document property to welcome.html", "IsAnswer": false }],
        "Explanation": "The other options are wrong. Subfolders and (or) Error document will not allow you to upload a new welcome page for a static website hosted in S3.",
        "Ref": "http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html"
    },
     {
        "Id": 40,
        "Name": "You are providing AWS consulting services for a company developing a new mobile application that will be leveraging Amazon SNS Mobile Push for push notifications. In order to send direct notification messages to individual devices each device registration identifier or token needs to be registered with SNS; however the developers are not sure of the best way to do this. You advise them to:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Call the CreatePlatformEndPoint API function to register multiple device tokens.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Bulk upload the device tokens contained in a CSV file via the AWS Management Console.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Let the push notification service (e.g. Amazon Device Messaging) handle the registration.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Implement a token vending service to handle the registration.", "IsAnswer": false }],
        "Explanation": "Call the CreatePlatformEndPoint API.",
        "Ref": "http://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-devicetoken.html"
    },
    {
        "Id": 41,
        "Name": "Which of the following statements about SWF are true? Choose 3 answers", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SWF uses deciders and workers to complete tasks", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "SWF requires at least 1 EC2 instance per domain", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SWF triggers SNS notifications on task assignment", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "SWF requires an S3 bucket for workflow storage", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "SWF tasks are assigned once and never duplicated", "IsAnswer": true },
            { "Id": 1060, "QuestionId": 1010, "Name": "SWF workflow executions can last up to a year", "IsAnswer": true }] ,
        "Explanation": "SWF does not require an S3 bucket for workflow storage and SWF does not automatically trigger SNS notifications on task assignment.",
        "Ref": "https://aws.amazon.com/swf/faqs/"
    },
    {
        "Id": 42,
        "Name": "You have enabled Elastic Load Balancing HTTP health checking. After looking at the AWS Management Console, you see that all instances are passing health checks, but your customers are reporting that your site is not responding. What could be the cause?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The HTTP health checking system is misreporting due to latency in inter-instance metadata synchronization.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The health check in place is not sufficiently evaluating the application function.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "The application is returning a positive health check too quickly for the AWS Management Console to respond.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Latency in DNS resolution is interfering with Amazon EC2 metadata retrieval.", "IsAnswer": false }] ,
        "Explanation": "This is a common occurence if the ELB is not configured correctly to monitor the application adequately. Typically this can be done by pointing the ELB to health check on the app home page where users are expected to visit the most."
    }]
}

